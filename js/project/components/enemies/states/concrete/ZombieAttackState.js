import { UnitStateBase } from "../../../units/unitStateBase.js";
import zombieActionNames from "../zombieActionNames.js";
import ZombieDeathState from "./ZombieDeathState.js";
import ZombieIdleState from "./ZombieIdleState.js";
import ZombieWalkState from "./ZombieMoveState.js";

export default class ZombieAttackState extends UnitStateBase {

    HandleAction(actionName) {

        switch(actionName) {
            case(zombieActionNames.IDLE): {
                return new ZombieIdleState();

            } case(zombieActionNames.DEATH): {

                return new ZombieDeathState();

            } case(zombieActionNames.WALK): {
                return new ZombieWalkState();
            }
        }

        return null;
    }

    OnEnter(zombieBehaviour) {
        this.zombieBehaviour = zombieBehaviour;
        this.zombieDamage = 10;
        this._timeToDealDamageSeconds = 2.7;
        this._dealDamageTimer = this._timeToDealDamageSeconds * 0.5;
        this.attackAnimGroup = zombieBehaviour.attackAnimGroup;
        this.attackAnimGroup.start(true, 1.0,this.attackAnimGroup.from, this.attackAnimGroup.to, false);
    }

    OnExit() {
        this.attackAnimGroup.stop();
    }

    OnUpdate(deltaTime) {
        if(this._dealDamageTimer >= this._timeToDealDamageSeconds) {
            this.Attack();
            this._dealDamageTimer = 0;
            this.zombieBehaviour.SoundPlayer.PlaySound("ZOMBIE_PUNCH");
                
        }

        this._dealDamageTimer += deltaTime;
    }

    Attack() {

        const currentPlayerTarget = this.zombieBehaviour?.currentTarget;

        if(!currentPlayerTarget) {
            return;
        }

        const minDamage = 2;
        const maxDamage = 8;
        const randomDamage = Math.random() * (maxDamage - minDamage + 1) + minDamage;
        currentPlayerTarget.playerProps.DealDamage(randomDamage);
        //console.log("[Z_A] Attackuation! Damage: " + randomDamage)
    }
}