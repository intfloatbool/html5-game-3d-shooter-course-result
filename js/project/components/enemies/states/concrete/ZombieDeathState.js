export default class ZombieDeathState {
    HandleAction(actionName) {
        return null;
    }

    OnEnter(zombieBehaviour) {
        this.zombieBehaviour = zombieBehaviour;
        this.deathAnimGroup = zombieBehaviour.deathAnimGroup;
        this.deathAnimGroup.start(true, 1.0,this.deathAnimGroup.from, this.deathAnimGroup.to, false);
        this.deathAnimGroup.loopAnimation = false;
        zombieBehaviour.physicsBody.dispose();

        this.zombieBehaviour.SoundPlayer.PlaySound("ZOMBIE_DEATH");

        const decayTimeMs = 5 * 1000;

        setTimeout(() => {
            this.OnExit();
            this.zombieBehaviour.OnDestroy()
        }, decayTimeMs);
    }

    OnExit() {
        this.deathAnimGroup.stop();
    }

    OnUpdate(deltaTime) {}
}