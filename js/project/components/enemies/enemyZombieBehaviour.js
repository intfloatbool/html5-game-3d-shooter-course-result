import GameTimer from "../../common/GameTimer.js";
import { GameBehaviour } from "../../common/gameBehaviour.js";
import ZombieProps from "../../properties/zombieProps.js";
import zombieActionNames from "./states/zombieActionNames.js";
import ZombieFSM from "./states/zombieFSM.js";

export default class EnemyZombieBehaviour extends GameBehaviour {
    constructor(rootMesh, animationGroups, scene, soundPlayer) {
        super();
        this.transformRoot = rootMesh;
        this.animationGroups = animationGroups;
        this.scene = scene;
        this.isInitialized = false;
        this.moveSpeedModifier = 1;

        this.currentTarget = null;
        this.SoundPlayer = soundPlayer;
    }

    async InitAsync() {
        this.idleAnimGroup = this.animationGroups.find(ag => ag.name === "Idle");
        this.deathAnimGroup = this.animationGroups.find(ag => ag.name === "Death");
        this.walkAnimGroup = this.animationGroups.find(ag => ag.name === "Walk");
        this.attackAnimGroup = this.animationGroups.find(ag => ag.name === "Attack");

        this.InitPhysics();

        this.physicsBody = this.transformRoot.getPhysicsBody();
        if(!this.physicsBody) {
            throw new Error("[EnemyZombieBehaviour] Physics body is missing!")
        }

    
        this.physicsBody.setMassProperties({
            inertia: new BABYLON.Vector3(0, 0, 0)
        });

        this.physicsBody.setGravityFactor(100);

        this.zombieFSM  = new ZombieFSM(this);

        this.zombieProps = new ZombieProps();
        this.zombieProps.SetHp(50);
        this.zombieProps.SetMaxHp(50);
        this.zombieProps.SetIsDead(false);

        this.SubscribePropsEvents();
        this.physicsBody.setCollisionCallbackEnabled(true);
        this.bindedCollisionHandler = this.HandleCollisions.bind(this);
        this.collisionObservable = this.physicsBody.getCollisionObservable();
        this.collisionObservable.add(this.bindedCollisionHandler);

        this._lastObstacleDetectedTime = 0;
        this._lastAnotherZombieDetectedTime = 0;
        this._lastDamageTime = 0;
        
        this.isInitialized = true;
    }

    HandleCollisions(colEvent) {
        
        if(!this.zombieWalkStateName) {
            this.zombieWalkStateName = "ZombieWalkState";
        }

        // Process only state is WALK
        if(this.zombieFSM.currentState.constructor.name !== this.zombieWalkStateName) {
            return;
        }

        const colliderName = colEvent.collidedAgainst.transformNode.name;
        const collisionType = this.GetCollisionType(colliderName);

        switch(collisionType) {
            case(this.COL_TYPES.WALL): {
                this.HandleStuckInObstacles();
                break;
            } case (this.COL_TYPES.ANOTHER_ZOMBIE): {
                this.HandleStuckInAnotherZombie(colEvent.collidedAgainst.transformNode);
                break;
            }
        }

        const currentTime = GameTimer.GetElapsedTimeSeconds();
        const timeToDetectObstacles = 1;

        const diff = currentTime - this._lastObstacleDetectedTime;
        this._isInObstacles  = diff < timeToDetectObstacles;

        const zombieDiff = currentTime - this._lastAnotherZombieDetectedTime;
        this._isInAnotherZombie = zombieDiff < timeToDetectObstacles;
    }

    HandleStuckInObstacles() {
        
        this._lastObstacleDetectedTime = GameTimer.GetElapsedTimeSeconds();
    }

    HandleStuckInAnotherZombie(anotherZombieTransform) {
        
        this._lastAnotherZombieDetectedTime = GameTimer.GetElapsedTimeSeconds();

        if(anotherZombieTransform) {

            const myPos = this.transformRoot.absolutePosition;
            const anotherZombiePos = anotherZombieTransform.absolutePosition;
    

            const dirToTarget = anotherZombiePos.subtract(myPos).normalize();
           
            this._toAnotherZombieDir = dirToTarget;

        } else {
            this._toAnotherZombieDir = null;
        }
    }

    GetCollisionType(colName) {
        if(!this.collisionsTypesMap) {
            this.collisionsTypesMap = new Map();
            this.COL_TYPES = {
                FLOOR: "FLOOR",
                WALL: "WALL",
                ANOTHER_ZOMBIE: "ZOMBIE", 
                UNDEFINED_COL: "UNDEFINED_COL"
            };

            this.collisionsTypesMap.set("Object_2", this.COL_TYPES.FLOOR);
            this.collisionsTypesMap.set("Object_3", this.COL_TYPES.WALL);
            this.collisionsTypesMap.set("Object_4", this.COL_TYPES.WALL);
            this.collisionsTypesMap.set("Object_5", this.COL_TYPES.WALL);
            this.collisionsTypesMap.set("ZOMBIE", this.COL_TYPES.ANOTHER_ZOMBIE);
        }

        if(this.collisionsTypesMap.has(colName)) {
            return this.collisionsTypesMap.get(colName);
        }
        
        return this.COL_TYPES.UNDEFINED_COL;
    }

    SubscribePropsEvents() {
        this.zombieProps.HpObservable.add((currentHp) => {
            if(this.zombieProps.GetIsDead()) {
                return;
            }
            //console.log("[ZOMBIE] Hp changed!: " + currentHp);
            if(currentHp <= 0) {
                this.zombieProps.SetIsDead(true);
                this.zombieProps.SetHp(0);
            }
        });

        this.zombieProps.IsDeadObservable.add((isDead) => {
            if(isDead) {
                //console.log("[ZOMBIE] Death!");
                this.zombieFSM.ProcessAction(zombieActionNames.DEATH);
            }
        });
    }

    InitPhysics() {
    
        const physicsBody = new BABYLON.PhysicsBody(this.transformRoot, BABYLON.PhysicsMotionType.DYNAMIC, false, this.scene);

        // new PhysicsShapeCapsule(pointA: Vector3, pointB: Vector3, radius: number, scene: Scene)
        const physicsShape = new BABYLON.PhysicsShapeCapsule(
            new BABYLON.Vector3(0,25,0),
            new BABYLON.Vector3(0,5,0),
            5, // radius of the sphere
            this.scene // containing scene
          );

        physicsBody.shape = physicsShape;
    }

    OnStart() {

    }

    OnDestroy() {
        this.collisionObservable.remove(this.bindedCollisionHandler);
        this.transformRoot.dispose(false, true);
    }


    OnUpdate(deltaTime) {

        if(!this.isInitialized) {
            return;
        }

        if(this.zombieProps.GetIsDead()) {
            return;
        }

        this.FollowTargetLoop(deltaTime);

        this.zombieFSM.OnUpdate(deltaTime);
    }

    FollowTargetLoop(deltaTime) {

        if(!this.currentTarget || this.currentTarget.playerProps.GetIsDead()) {
            this.physicsBody.setLinearVelocity(BABYLON.Vector3.Zero());
            this.physicsBody.setAngularVelocity(BABYLON.Vector3.Zero());
            this.zombieFSM.ProcessAction(zombieActionNames.IDLE);
            return;
        }

        const currentTime = GameTimer.GetElapsedTimeSeconds();
        const lastDamageTimeDiff = currentTime - this._lastDamageTime;
        const isUnderAttack = lastDamageTimeDiff <= 1;

        const zombiePos = this.transformRoot.absolutePosition;
        const targetPos = this.currentTarget.GetAbsolutePosition();

        const distanceToStop = 30;
        const currentDistance = BABYLON.Vector3.Distance(zombiePos, targetPos);

        if(currentDistance <= distanceToStop) {
            this.zombieFSM.ProcessAction(zombieActionNames.ATTACK);
            return;
        }

        const moveSpeed = 10 * this.moveSpeedModifier * deltaTime;

        const dirToPlayerTarget = targetPos.subtract(zombiePos).normalize();
       
        const targetDir = dirToPlayerTarget.clone();
    
        if(this._isInObstacles) {
            const randomStrength = this.GetRandomStrength(50, 100);

            targetDir.x =  ((dirToPlayerTarget.x > 0) ? 1 : -1);
            targetDir.z = dirToPlayerTarget.z * -1;
            
            this.physicsBody.applyForce(targetDir.scale(randomStrength),  this.transformRoot.position.add(targetDir.scale(moveSpeed)));
        }

        if(this._isInAnotherZombie && this._toAnotherZombieDir) {
            const randomStrength = this.GetRandomStrength(50, 100);
            targetDir.x =  ((this._toAnotherZombieDir.x < 0) ? 1 : -1); // inversed from another zombie
            targetDir.z = dirToPlayerTarget.z;
            
            this.physicsBody.applyForce(targetDir.scale(randomStrength),  this.transformRoot.position.add(targetDir.scale(moveSpeed)));
        }

        if(isUnderAttack) {
            const randomStrength = this.GetRandomStrength(10, 50);
            targetDir.z *= -1;
            targetDir.x *= -1;
        }

        const nextPosition = this.transformRoot.position.add(targetDir.scale(moveSpeed));
        
        const lookAt = BABYLON.Matrix.LookAtLH(
            zombiePos,
            targetPos,
            BABYLON.Vector3.Up()
        ).invert();

        const nextRotation =  BABYLON.Quaternion.FromRotationMatrix( lookAt );
        this.physicsBody.setTargetTransform(nextPosition, nextRotation);

        this.zombieFSM.ProcessAction(zombieActionNames.WALK);
    }

    GetRandomStrength(min, max) {
        return Math.random() * (max - min + 1) + min;
    }

    OnShotRecieved() {
        this._lastDamageTime = GameTimer.GetElapsedTimeSeconds();
        this.SoundPlayer.PlaySound("ZOMBIE_ATTACKED");
    }
}