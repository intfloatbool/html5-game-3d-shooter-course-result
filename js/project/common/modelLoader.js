export class ModelLoader {
    constructor(scene, modelName, relativePath, fileName) {
        this.scene = scene;
        this.modelName = modelName;
        this.relativePath = relativePath;
        this.fileName = fileName;
    }

    LoadAsync() {
        // returns array of meshes 'result.meshes[]'
        // result.meshes
        
        return BABYLON.SceneLoader.ImportMeshAsync(this.modelName, this.relativePath, this.fileName, this.scene); 
    }
}

/*
    SAMPLE:
    BABYLON.SceneLoader.ImportMeshAsync("", "/relative path/", "myFile"); //Empty string loads all meshes
    BABYLON.SceneLoader.ImportMeshAsync("model1", "/relative path/", "myFile"); //Name of the model loads one model
    BABYLON.SceneLoader.ImportMeshAsync(["model1", "model2"], "/relative path/", "myFile"); //Array of model names
*/