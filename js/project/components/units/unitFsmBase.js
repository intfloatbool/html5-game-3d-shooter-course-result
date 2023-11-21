export default class UnitFSMBase {
    constructor(unitBehaviour) {
        this.unitBehaviour = unitBehaviour;
        this.currentState = this.CreateDefaultState();
        this.currentState.OnEnter(this.unitBehaviour);
    }

    CreateDefaultState() {
        throw new Error("[UnitFSMBase] CreateDefaultState() is not implemented!");
    }

    ProcessAction(actionName) {
        const state = this.currentState.HandleAction(actionName);
        if(state != null) {
            this.currentState.OnExit()
            this.currentState = state;
            this.currentState.OnEnter(this.unitBehaviour);
        }
    } 

    OnUpdate(deltaTime) {
        this.currentState.OnUpdate(deltaTime);
    }

}