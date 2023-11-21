import UnitFSMBase from "../units/unitFsmBase.js";
import IdleState from "./concrete/IdleState.js";

export default class PlayerFSM extends UnitFSMBase {
    constructor(playerBehaviour) {
        super(playerBehaviour);
        const deathAnim = playerBehaviour.playerAnimationsGroupArray.find(ag => ag.name === "Death");;
        deathAnim.stop();
    }

    CreateDefaultState() {
        return new IdleState();
    }

}