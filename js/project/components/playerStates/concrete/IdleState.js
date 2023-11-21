import actionNames from "../actionNames.js";
import { UnitStateBase } from "../../units/unitStateBase.js";
import DeathState from "./DeathState.js";
import ShootState from "./ShootState.js";
import WalkState from "./WalkState.js";

export default class IdleState extends UnitStateBase {
    HandleAction(actionName) {

        switch(actionName) {
            case(actionNames.WALK): {
                return new WalkState();
            } case(actionNames.DEATH): {
                return new DeathState();
            } case(actionNames.SHOOT): {
                return new ShootState();
            }
        }

        return null;
    }

    OnEnter(playerBehaviour) {
        //console.log(`[IdleState] OnEnter(${playerBehaviour})`);

        this.idleAnim = playerBehaviour.playerAnimationsGroupArray.find(ag => ag.name === "Idle");
        this.idleAnim.start(true, 1.0, this.idleAnim.from, this.idleAnim.to, false);
    };
    OnExit() {
        //console.log(`[IdleState] OnExit()`);
        this.idleAnim.stop();
    };
    OnUpdate(deltaTime) {
        
    }
}