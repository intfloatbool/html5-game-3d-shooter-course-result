import UnitFSMBase from "../../units/unitFsmBase.js";
import ZombieIdleState from "./concrete/ZombieIdleState.js";

export default class ZombieFSM extends UnitFSMBase {
    constructor(zombieBehaviour) {
        super(zombieBehaviour);
        zombieBehaviour.attackAnimGroup.stop();
    }

    CreateDefaultState() {
        return new ZombieIdleState();
    }
}