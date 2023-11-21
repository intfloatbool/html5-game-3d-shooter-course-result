import { UnitStateBase } from "../../units/unitStateBase.js";

export default class DeathState extends UnitStateBase {
    HandleAction(actionName) {
        return null;
    }

    OnEnter(playerBehaviour) {
        //console.log(`[DeathState] OnEnter(${playerBehaviour})`);
        this.deathAnim = playerBehaviour.playerAnimationsGroupArray.find(ag => ag.name === "Death");
        this.deathAnim.start(false, 1.0, this.deathAnim.from, this.deathAnim.to, false);
        this.deathAnim.loopAnimation = false;
        playerBehaviour.camera.attachControl();
        playerBehaviour.physicsBody.dispose();
        playerBehaviour.SoundPlayer.PlaySound("PLAYER_DEATH");
    };
    OnExit() {
        //console.log(`[DeathState] OnExit()`);
        this.deathAnim.stop();
    };
    OnUpdate(deltaTime) {
        
    }
}