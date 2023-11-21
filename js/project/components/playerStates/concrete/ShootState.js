import actionNames from "../actionNames.js";
import { UnitStateBase } from "../../units/unitStateBase.js";
import DeathState from "./DeathState.js";
import IdleState from "./IdleState.js";
import WalkState from "./WalkState.js";
export default class ShootState extends UnitStateBase {
    static S_SHOOT_VFX = null;
    constructor() {
        super();
        this.shootDelaySeconds = 0.33;
        this.timer = this.shootDelaySeconds;
    }

    HandleAction(actionName) { 

        switch(actionName) {
            case (actionNames.IDLE): {
                return new IdleState();
            } case(actionNames.DEATH): {
                return new DeathState();
            } case(actionNames.WALK): {
                return new WalkState();
            } case(actionNames.STOP_SHOOTING): {
                return new IdleState();
            }
        }
        return null;
    }
    OnEnter(playerBehaviour) {
        //console.log("[ShootState] OnEnter()");
        this.playerBehaviour = playerBehaviour;
        this.shootAnim = playerBehaviour.playerAnimationsGroupArray.find(ag => ag.name === "Gunplay");
        this.shootAnim.start(true, 1.0, this.shootAnim.from, this.shootAnim.to, false);
        this.scene = playerBehaviour.scene;    
        this.meshForRay = playerBehaviour.playerBodyTransform;
        this.CastRay();
        this.playerBehaviour.rotationSpeedModifier = 0.05;
        this.CreateParticle();  
        this._damage = 5;
    }

    OnExit() {
        //console.log("[ShootState] OnExit()");
        this.shootAnim.stop();
        this.rayHelper.dispose();
        this.playerBehaviour.rotationSpeedModifier = 1.0;
        //this.muzzleParticle.dispose();
    }
    OnUpdate(deltaTime) {

        this.timer += deltaTime;
        if(this.timer >= this.shootDelaySeconds) {
            this.OnShoot();
            this.timer = 0;
        }      
    }

    OnShoot() {
        //console.log("SHOOT!");
        this.EmitMuzzleParticle();


        const physicsEngine = this.scene.getPhysicsEngine();
        
        if(!physicsEngine) {
            return;
        }

        if(!this.rayHelper || !this.rayHelper.ray)
        {
            return;
        }

        const currentRay = this.rayHelper.ray;

        //console.log("Shoot! Current ray: " + currentRay.direction.toString());

        const shootStartPoint = currentRay.origin;
        const end = currentRay.origin.add(currentRay.direction.scale(currentRay.length));

        const hit = physicsEngine.raycast(shootStartPoint, end);
        //console.log("hit?: " + hit.hasHit);
        if (hit.hasHit && hit.body && hit.body.transformNode) {

            //console.log(`Shoot body name '${hit.body.transformNode.name}' , uId: '${hit.body.transformNode.uniqueId}'`);

            const uniqueId = hit.body.transformNode.uniqueId;
            
            const world = this.playerBehaviour.World;

            if(!world) {
                console.error("world is missing!!!");
            }

            try {
                const enemyEntity = world.GetEntityByUniqueId(uniqueId);
                if(enemyEntity) {
                    //console.log("ENEMY DETECTED!");
                    const zombieComp = enemyEntity.GetComponent("EnemyZombieBehaviour");
                    zombieComp.OnShotRecieved();
                    zombieComp.zombieProps.DealDamage(this._damage);
                
                }
            } catch(err) {
                ///DO nothing
            }
        }

       this.playerBehaviour.SoundPlayer.PlaySound("PLAYER_SHOT");
    }
    CastRay() {       
	    //const ray = new BABYLON.Ray(origin, dir, length);
        const ray = new BABYLON.Ray();
        //console.log("Origin POS: " + ray.origin.toString()); 
		this.rayHelper = new BABYLON.RayHelper(ray);	
        const localMeshDirection = new BABYLON.Vector3(0, 0, 1);
	    const localMeshOrigin = new BABYLON.Vector3(0, 1250, 0.0);
        const length = 100 * 1000;
        this.rayHelper.attachToMesh(this.meshForRay, localMeshDirection, localMeshOrigin, length);	
		this.rayHelper.show(this.scene, new BABYLON.Color3(1, 0, 0));	
    
    }

    CreateParticle() {
        if(ShootState.S_SHOOT_VFX != null) {
            return;
        }
        const muzzleParticle = new BABYLON.ParticleSystem("particles", 500, this.scene);
        //Texture of each particle
        muzzleParticle.particleTexture = new BABYLON.Texture("Assets/textures/flare_texture_0.png", this.scene);
        // Where the particles come from
        muzzleParticle.particleEmitterType = new BABYLON.SphereParticleEmitter(0.01);
        const muzzleNode = new BABYLON.TransformNode("muzzle", this.scene);
        muzzleNode.setParent(this.playerBehaviour.weaponRootMesh);
        muzzleNode.rotation = new BABYLON.Vector3(0, 0, 0);
        muzzleNode.position = new BABYLON.Vector3(-0.02, 0, 0.35);
        muzzleNode.scaling = new BABYLON.Vector3(1, 1, 1);
        muzzleParticle.emitter = muzzleNode;
        const emitScale = 0.5;
        muzzleParticle.minScaleX = 0;
        muzzleParticle.minScaleY = 0;
        muzzleParticle.maxScaleX = emitScale;
        muzzleParticle.maxScaleY = emitScale;
  
        // Colors of all particles
        muzzleParticle.color1 = new BABYLON.Color4(1, 0.3, 0);
        muzzleParticle.color2 = new BABYLON.Color4(0.6, 0.15, 0.15);
        muzzleParticle.colorDead = new BABYLON.Color4(1, 0.82, 0.43);
        // Size of each particle (random between...
        const scale = 0.5;
        muzzleParticle.minSize = 1.5 * scale;
        muzzleParticle.maxSize = 2.5 * scale;
        // Life time of each particle (random between...
        muzzleParticle.minLifeTime = .1;
        muzzleParticle.maxLifeTime = .1;
        // Emission rate
        muzzleParticle.manualEmitCount = 500;
        // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
        muzzleParticle.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
        // Set the gravity of all particles
        muzzleParticle.gravity = new BABYLON.Vector3(0, -9, 0);
        // Direction of each particle after it has been emitted
        muzzleParticle.direction1 = new BABYLON.Vector3(-2, -2, -2);
        muzzleParticle.direction2 = new BABYLON.Vector3(2, 2, 2);
        // Angular speed, in radians
        muzzleParticle.minAngularSpeed = 0;
        muzzleParticle.maxAngularSpeed = Math.PI;
        // Speed
        muzzleParticle.minEmitPower = 0.25;
        muzzleParticle.maxEmitPower = 0.35;
        muzzleParticle.updateSpeed = 0.05;
        muzzleParticle.start();
        ShootState.S_SHOOT_VFX = muzzleParticle;
    }

    EmitMuzzleParticle() {
        if(!ShootState.S_SHOOT_VFX) {
            return;
        }
        ShootState.S_SHOOT_VFX.manualEmitCount = 500;
    }
}