import { CompositeGameBehaviour } from "../common/gameBehaviour.js"

export class GameEntity extends CompositeGameBehaviour {
    
    constructor(idKey, abstractMesh) {
        super(null);
        this.idKey = idKey;
        this.UniqueID = abstractMesh.uniqueId;
        this.abstractMesh = abstractMesh;

        this.componentsMap = new Map();
    }
    AddComponent(gameBehaviour, isCallCallbacks = true) {
        const behaviourTypeName = gameBehaviour.constructor.name;
        if(this.componentsMap.has(behaviourTypeName)) {
            throw new Error(`[GameEntity] the entity with id '${this.idKey}' is already has component with type '${behaviourTypeName}'!`);
        }
        this.childBehaviours.push(gameBehaviour);
        gameBehaviour.SetEntity(this);
        if(isCallCallbacks) {
            gameBehaviour.OnAwake();
            gameBehaviour.OnStart();
        }

        this.componentsMap.set(behaviourTypeName, gameBehaviour);
        
        return this;
    }

    GetComponent(behaviourTypeName) {
        if(!this.componentsMap.has(behaviourTypeName)) {
            throw new Error(`[GameEntity] the entity with id '${this.idKey}' has not component of type: '${behaviourTypeName}'!`);
        }

        return this.componentsMap.get(behaviourTypeName);
    }
}