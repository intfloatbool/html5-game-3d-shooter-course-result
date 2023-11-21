import { UnitStateBase } from "../../../units/unitStateBase.js";
import zombieActionNames from "../zombieActionNames.js";
import ZombieDeathState from "./ZombieDeathState.js";
import ZombieWalkState from "./ZombieMoveState.js";

export default class ZombieIdleState extends UnitStateBase {

    HandleAction(actionName) {

        switch(actionName) {
            case(zombieActionNames.WALK): {
                return new ZombieWalkState();
            } case(zombieActionNames.DEATH): {
                return new ZombieDeathState();
            } case(zombieActionNames.ATTACK): {
                return null;
            } 
        }

        return null;
    }

    OnEnter(zombieBehaviour) {
        this.idleAnimGroup = zombieBehaviour.idleAnimGroup;
        this.idleAnimGroup.start(true, 1.0,this.idleAnimGroup.from, this.idleAnimGroup.to, false);
    }

    OnExit() {
        this.idleAnimGroup.stop();
    }

    OnUpdate(deltaTime) {}
}