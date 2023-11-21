export class SceneInitializer {
    constructor(scene, locationMeshes) {
        this.scene = scene;
        this.locationMeshes = locationMeshes;
    }

    async InitializeAsync() {

        await this.InitPhysicsAsync();

        this.scene.ambientColor = new BABYLON.Color3(1,1,1);

    }


    async InitPhysicsAsync() {
        const gravityFactor = 1;
        const gravityVector = new BABYLON.Vector3(0, -9.81 * gravityFactor, 0);
        const physicsPlugin = new BABYLON.HavokPlugin();
        this.scene.enablePhysics(gravityVector, physicsPlugin);

        for(const locMesh of this.locationMeshes)
        {
            const physicsBody = new BABYLON.PhysicsBody(locMesh, BABYLON.PhysicsMotionType.STATIC, false, this.scene);
            const shape = new BABYLON.PhysicsShapeMesh(
                locMesh,  
                this.scene  
            );
            physicsBody.shape = shape;
            //console.log("apply physics for mesh: " + locMesh.name);
        }
        
    }
}