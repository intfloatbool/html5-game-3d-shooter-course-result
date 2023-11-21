import { ModelLoader } from "../common/modelLoader.js";

export class CharacterModelLoader {

    constructor(scene) {
        this.scene = scene;
    }

    async LoadAndSetupModelAsync() {
        const playerCharacterData = await new ModelLoader(this.scene, null, "./Assets/animated_character/", "ninja.glb").LoadAsync();

        const playerCharacterMeshes = playerCharacterData.meshes;
        const playerRootMesh = playerCharacterMeshes[0];
        playerRootMesh.name = "Player";
        const playerRootMeshChilds = playerRootMesh.getChildren();
        const playerBodyTransform = playerRootMeshChilds[0];

        playerBodyTransform.rotation = new BABYLON.Vector3(0, 0, 0);

        playerRootMesh.scaling  = playerRootMesh.scaling.scale(2.0);

        // init ninja body
        const modelBody = playerBodyTransform.getChildMeshes()[0];

        //console.log("MODEL BODY: " + modelBody.name);
        modelBody.rotation.x = new BABYLON.Angle.FromDegrees(90).radians();
        modelBody.scaling = new BABYLON.Vector3(10, 10, 10);

        return playerCharacterData.animationGroups;
    }

}