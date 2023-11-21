export class UnitStateBase {
    HandleAction(actionName) { throw new Error("HandleAction() not implemented"); }
    OnEnter(playerBehaviour) {throw new Error("OnEnter() not implemented");};
    OnExit() {throw new Error("OnExit() not implemented");};
    OnUpdate(deltaTime) {throw new Error("OnUpdate() not implemented");};
}

export class NullUnitState extends UnitStateBase {
    HandleAction(actionName) {
        //console.log(`[NullUnitState] HandleAction(${actionName})`);
        return null;
    }

    OnEnter(playerBehaviour) {
        //console.log(`[NullUnitState] OnEnter(${playerBehaviour})`);
    };
    OnExit() {
        //console.log(`[NullUnitState] OnExit()`);
    };
    OnUpdate(deltaTime) {
        //console.log(`[NullUnitState] OnUpdate(${deltaTime})`);
    }
}