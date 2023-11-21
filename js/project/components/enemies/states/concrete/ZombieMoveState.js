import { UnitStateBase } from "../../../units/unitStateBase.js";
import zombieActionNames from "../zombieActionNames.js";
import ZombieAttackState from "./ZombieAttackState.js";
import ZombieDeathState from "./ZombieDeathState.js";
import ZombieIdleState from "./ZombieIdleState.js";

export default class ZombieWalkState extends UnitStateBase {

    HandleAction(actionName) {

        switch(actionName) {
            case(zombieActionNames.IDLE): {
                return new ZombieIdleState();
            } case(zombieActionNames.DEATH): {
                return new ZombieDeathState();
            } case(zombieActionNames.ATTACK): {
                return new ZombieAttackState();
            }
        }

        return null;
    }

    OnEnter(zombieBehaviour) {
        this.walkAnimGroup = zombieBehaviour.walkAnimGroup;
        this.walkAnimGroup.start(true, 1.0,this.walkAnimGroup.from, this.walkAnimGroup.to, false);
    }

    OnExit() {
        this.walkAnimGroup.stop();
    }

    OnUpdate(deltaTime) {}
}