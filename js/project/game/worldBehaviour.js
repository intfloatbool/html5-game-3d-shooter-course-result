import { CompositeGameBehaviour } from "../common/gameBehaviour.js"
export class WorldBehaviour extends CompositeGameBehaviour {
    constructor() {
        super([]);
        this.entities = new Map();
        this._entitiesByUid = new Map();
    }
    AddEntity(gameEntity, isCallCallbacks) {
        if(isCallCallbacks){
            gameEntity.OnAwake();
            gameEntity.OnStart();
        }
        this.childBehaviours.push(gameEntity);
        this.entities.set(gameEntity.idKey, gameEntity);
        //console.log(`[WorldBehaviour] set entity with id '${gameEntity.idKey}', uid: '${gameEntity.UniqueID}'`);
        this._entitiesByUid.set(gameEntity.UniqueID, gameEntity);
        return this;
    }

    GetEntity(idKey) {
        if(!this.entities.has(idKey)) {
            throw new Error("[WorldBehaviour] There is no entity with id: " + idKey);
        }
        return this.entities.get(idKey);
    }

    GetEntityByUniqueId(uniqueIdKey) {
        if(!this._entitiesByUid.has(uniqueIdKey)) {
            throw new Error("[WorldBehaviour] There is no entity with uniqueIdKey: " + uniqueIdKey);
        }
        return this._entitiesByUid.get(uniqueIdKey);
    }
}