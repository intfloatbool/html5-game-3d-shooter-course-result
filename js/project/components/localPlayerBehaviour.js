import { GameBehaviour } from "../common/gameBehaviour.js";
import { ModelLoader } from "../common/modelLoader.js";
import PlayerProps from "../properties/playerProps.js";
import actionNames from "./playerStates/actionNames.js";
import PlayerFSM from "./playerStates/playerFsm.js";

export class LocalPlayerBehaviour extends GameBehaviour {
    constructor(scene, camera, playerAnimationsGroupArray, world, soundPlayer) {
        super();
        this.scene = scene;
        this.camera = camera;
        this.isInitialized = false;
        this.currentMoveInput = new BABYLON.Vector3(0, 0, 0);        
        this.currentRotationInput = new BABYLON.Vector3(0, 0, 0);    
        this.rotationSpeedModifier = 1.0;    
        this.playerAnimationsGroupArray = playerAnimationsGroupArray;
        this.World = world;
        this.SoundPlayer = soundPlayer;
    }

    async InitAsync() {

        this.playerBodyTransform = this.entity.abstractMesh;

        this.childMeshses = this.playerBodyTransform.getChildMeshes();
        for(const childMesh of this.childMeshses) {
            childMesh.isVisible = false;
        }

        this.playerBodyTransform.position = this.playerBodyTransform.position.add(new BABYLON.Vector3(0, 0, 0));
        const physicsBody = new BABYLON.PhysicsBody(this.playerBodyTransform, BABYLON.PhysicsMotionType.DYNAMIC, false, this.scene);

        // new PhysicsShapeCapsule(pointA: Vector3, pointB: Vector3, radius: number, scene: Scene)
        const physicsShape = new BABYLON.PhysicsShapeCapsule(
            new BABYLON.Vector3(0,-32,0),
            new BABYLON.Vector3(0,-5,0),
            5, // radius of the sphere
            this.scene // containing scene
          );

        physicsBody.shape = physicsShape;


        this.physicsBody = this.playerBodyTransform.getPhysicsBody();
        if(!this.physicsBody) {
            throw new Error("[LocalPlayerBehaviour] Physics body is missing!")
        }
        //console.log("[LocalPlayerBehaviour] character mesh name: " + this.playerBodyTransform.name);

        this.setupPlayerCamera();
        
        // disable angular falling from callisions!
        this.physicsBody.setMassProperties({
            inertia: new BABYLON.Vector3(0, 0, 0)
        });


        this.physicsBody.setGravityFactor(100);

        this.playerFSM  = new PlayerFSM(this);

        this.playerProps = new PlayerProps();
        this.playerProps.SetHp(100);
        this.playerProps.SetMaxHp(100);
        this.playerProps.SetIsDead(false);

        this.SubscribePropsEvents();

        this.SetupWeaponBone();

        await this.CreateWeaponAsync();

        this.isInitialized = true;

    }

    SetupWeaponBone() {

        const characterMesh = this.scene.getMeshById("Ch24");
        const skeleton = this.scene.getSkeletonById("skeleton0");
        const rightHandBone = skeleton.bones[34];

        this.skeleton = skeleton;
        this.rightHandBone = rightHandBone;
        this.characterMesh = characterMesh;
    }

    async CreateWeaponAsync() {
        const weaponModelData = await new ModelLoader(this.scene, null, "./Assets/weapons/", "m4a1.glb").LoadAsync();
        const weaponMeshes = weaponModelData.meshes;
        const weaponRootMesh = weaponMeshes[0];
        weaponRootMesh.name = "Player weapon";

        const scaleFactor = 225;
        weaponRootMesh.scaling = new BABYLON.Vector3(scaleFactor, scaleFactor, scaleFactor);
        weaponRootMesh.position = this.rightHandBone.position.clone();
        weaponRootMesh.attachToBone(this.rightHandBone, this.characterMesh);
        
        weaponRootMesh.rotation = new BABYLON.Vector3(
            new BABYLON.Angle.FromDegrees(-80).radians(),
            new BABYLON.Angle.FromDegrees(55.7).radians(),
            new BABYLON.Angle.FromDegrees(180).radians()
        );
        // centralize
        //weaponRootMesh.setPositionWithLocalVector(new BABYLON.Vector3(0, 0, 0));

        weaponRootMesh.position = new BABYLON.Vector3(5, -10, 15);

        this.weaponRootMesh = weaponRootMesh;

        this.childWeaponMeshes = this.weaponRootMesh.getChildMeshes();

        for(const childMesh of this.childWeaponMeshes) {
            childMesh.isVisible = false;
        }
    }

    SubscribePropsEvents() {
        this.playerProps.HpObservable.add((currentHp) => {
            if(this.playerProps.GetIsDead()) {
                return;
            }
            //console.log("[PLAYER] Hp changed!: " + currentHp);
            if(currentHp <= 0) {
                this.playerProps.SetIsDead(true);
                this.playerProps.SetHp(0);
            }
        });

        this.playerProps.IsDeadObservable.add((isDead) => {
            if(isDead) {
                //console.log("[PLAYER] Death!");
                this.playerFSM.ProcessAction(actionNames.DEATH);
            }
        });
    }

    OnStart() {
        super.OnStart();
        //"[LocalPlayerBehaviour] OnStart! ");
        this.onKeyReceivedBound = this.onKeyEventReceived.bind(this);
        this.scene.onKeyboardObservable.add(this.onKeyReceivedBound);

        this.playerBodyTransform.name = "PLAYER_BODY_ROOT";

        this.DelayedStartAsync();
    }

    async DelayedStartAsync() {
        await new Promise((res, rej) => {
            setTimeout(res, 1000);
        });

        this.childMeshses = this.playerBodyTransform.getChildMeshes();
        for(const childMesh of this.childMeshses) {
            childMesh.isVisible = true;
        }

        for(const childMesh of this.childWeaponMeshes) {
            childMesh.isVisible = true;
        }
    }

    
    OnUpdate(deltaTime) {

        if(!this.isInitialized)
        {
            return;
        }

        if(this.playerProps.GetIsDead()) {
            return;
        }

        super.OnUpdate(deltaTime);

        this.physicsBody.setAngularVelocity(new BABYLON.Vector3(0, 0, 0));

        this.handleInputLoop(deltaTime);

        this.updateCameraLoop();

        this.playerFSM?.OnUpdate(deltaTime);

    }

    OnDisable() {
        super.OnDisable();
        //console.log("[LocalPlayerBehaviour] OnDisable! ");
    }

    OnDestroy() {
        super.OnDestroy();
        //console.log("[LocalPlayerBehaviour] OnDestroy! ");

        this.scene.onKeyboardObservable.remove(this.onKeyReceivedBound);
    }

    onKeyEventReceived(keyEvent) {
        switch (keyEvent.type) {
            case BABYLON.KeyboardEventTypes.KEYDOWN:
              //console.log("KEY DOWN: ", keyEvent.event.key);
              //console.log(`[LocalPlayerBehaviour] KeyDown ! Key: '${keyEvent.event.key}', Code: '${keyEvent.event.code}' `);

              this.handleKeyDown(keyEvent.event.code);
              break;
            case BABYLON.KeyboardEventTypes.KEYUP:        
              //console.log("KEY UP: ", keyEvent.event.key);
              this.handleKeyUp(keyEvent.event.code);
              break;
          }
    }

    handleKeyDown(keyCode) {
        const key = keyCode;

        if(key === "KeyW") {
            this.currentMoveInput.z = 1;
            this.playerFSM.ProcessAction(actionNames.WALK);
        } else if(key === "KeyS") {
            this.currentMoveInput.z = -1;
            this.playerFSM.ProcessAction(actionNames.WALK);
        } else if(key === "KeyA") {
            this.currentRotationInput.y = -1;
        } else if(key === "KeyD") {
            this.currentRotationInput.y = 1;
        } else if(key === "Space") { // " " = space 
            this.playerFSM.ProcessAction(actionNames.SHOOT);
        }

        // *** CHEATS ***
        if(key === "KeyZ") {
            this.playerProps.DealDamage(10);
        }
        // *** END-CHEATS ***
        
    }

    handleKeyUp(keyCode) {
        const key = keyCode;

        if(key === "KeyW") {
            this.currentMoveInput.z = 0;
            this.playerFSM.ProcessAction(actionNames.IDLE);
        } else if(key === "KeyS") {
            this.currentMoveInput.z = 0;
            this.playerFSM.ProcessAction(actionNames.IDLE);
        } else if(key === "KeyA") {
            this.currentRotationInput.y = 0;
        } else if(key === "KeyD") {
            this.currentRotationInput.y = 0;
        } else if(key === "Space") { // " " = space
            this.playerFSM.ProcessAction(actionNames.STOP_SHOOTING);
        } 
    }

    handleInputLoop(deltaTime) {
        const moveSpeed = 150000 * deltaTime;
        const dir = this.playerBodyTransform.getDirection(BABYLON.Axis.Z);
        this.physicsBody.setLinearVelocity(dir.scale(moveSpeed * this.currentMoveInput.z));

        const rotationSpeed = 500 * this.rotationSpeedModifier * deltaTime;
        const rotation = this.currentRotationInput.scale(rotationSpeed);
        this.physicsBody.setAngularVelocity(rotation);
    }

    setupPlayerCamera() {

        //var CoT = new BABYLON.TransformNode("root");
        //box.parent = CoT; //apply to Box

        this.playerHeadTransform = new BABYLON.TransformNode("PlayerHead");
        this.playerHeadOffset = new BABYLON.Vector3(0, 2000, 200);
        this.playerHeadTransform.position = this.playerBodyTransform.position.add(this.playerHeadOffset);
        

        this.playerHeadTransform.parent = this.playerBodyTransform;

        // The goal distance of camera from target
        this.camera.radius = 78;

        // The goal height of camera above local origin (centre) of target
        this.camera.heightOffset = 5;

        // The goal rotation of camera around local origin (centre) of target in x y plane
        this.camera.rotationOffset = -180;

        // Acceleration of camera in moving from current to goal position
        this.camera.cameraAcceleration = 0.005;

        // The speed at which acceleration is halted
        this.camera.maxCameraSpeed = 100;

        this.camera.lockedTarget = this.playerHeadTransform; //version 2.5 onwards

        this.camera.detachControl();
    }

    updateCameraLoop() {
        this.camera.lockedTarget = this.playerHeadTransform;
    }

    GetAbsolutePosition() {
        return this.playerBodyTransform.absolutePosition;
    }
}