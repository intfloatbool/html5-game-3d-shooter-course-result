export class GameBehaviour {
    SetEntity(entity) {
        this.entity = entity;
    }
    OnAwake() {}
    OnStart() {}
    OnDisable() {}
    OnDestroy() {}
    OnUpdate(deltaTime) {}
    async InitAsync() {}
}

export class CompositeGameBehaviour extends GameBehaviour {

    constructor(childBehaviours) {
        super();
        if(!childBehaviours) {
            this.childBehaviours = [];
        } else {
            if(childBehaviours.length > 0) {
                this.childBehaviours = childBehaviours;
            } else {
                this.childBehaviours = [];
            }
        }
    }

    OnAwake() {

        if(!this.childBehaviours)  {
            return;
        }

        for(const beh of this.childBehaviours) {
            beh.OnAwake();
        }
    }

    OnStart() {

        if(!this.childBehaviours)  {
            return;
        }

        for(const beh of this.childBehaviours) {
            beh.OnStart();
        }
    }

    OnDisable() {
        if(!this.childBehaviours)  {
            return;
        }

        for(const beh of this.childBehaviours) {
            beh.OnDisable();
        }
    }

    OnDestroy() {

        if(!this.childBehaviours)  {
            return;
        }

        for(const beh of this.childBehaviours) {
            beh.OnDestroy();
        }

        this.childBehaviours = null;
        this.entity = null;
    }

    OnUpdate(deltaTime) {

        if(!this.childBehaviours)  {
            return;
        }

        for(const beh of this.childBehaviours) {
            beh.OnUpdate(deltaTime);
        }
    }
    async InitAsync() {
        if(!this.childBehaviours)  {
            return;
        }

        for(const beh of this.childBehaviours) {
            await beh.InitAsync();
        } 
    }
}