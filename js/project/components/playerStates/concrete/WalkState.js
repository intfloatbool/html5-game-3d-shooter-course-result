import { UnitStateBase } from "../../units/unitStateBase.js";
import actionNames from "../actionNames.js";
import DeathState from "./DeathState.js";
import IdleState from "./IdleState.js";

export default class WalkState extends UnitStateBase {
    HandleAction(actionName) {
        switch(actionName) {
            case(actionNames.IDLE): {
                return new IdleState();
            } case(actionNames.DEATH): {
                return new DeathState();
            }
        }
        return null;
    }

    OnEnter(playerBehaviour) {
        //console.log(`[WalkState] OnEnter(${playerBehaviour})`);
        this.walkAnim = playerBehaviour.playerAnimationsGroupArray.find(ag => ag.name === "Walk");
        this.walkAnim.start(true, 1.0, this.walkAnim.from, this.walkAnim.to, false);
    };
    OnExit() {
        //console.log(`[WalkState] OnExit()`);
        this.walkAnim.stop();
    };
    OnUpdate(deltaTime) {
        
    }
}