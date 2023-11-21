export default class GameRulesCheats {
    constructor(gameRules) {
        this.gameRules = gameRules;

        const onKeyReceivedBound = this.OnKeyEventReceived.bind(this);
        this.gameRules.scene.onKeyboardObservable.add(onKeyReceivedBound);
    }

    OnKeyEventReceived(keyEvent) {
        switch (keyEvent.type) {
            case BABYLON.KeyboardEventTypes.KEYDOWN:
              this.HandleKeyDown(keyEvent.event.key);
              break;
          }
    }

    HandleKeyDown(keyCode) {
        const key = keyCode.toLowerCase();

        //console.log("[GameRulesCheats] KeyDown: " + key);

        if(key === "k") {
            this.KillRandomZombie();

        } else if(key === "+") {
            this.SpeedUpAllZombies(1);
        } else if(key === "-") {
            this.SpeedUpAllZombies(-1);
        }
       
    }

    KillRandomZombie() {
        const isAnyZombieExists = this.gameRules.currentZombiesCount > 0;
        if(!isAnyZombieExists) {
            return;
        }

        const randomZombie = this.gameRules.CurrentZombiesArray[Math.floor(Math.random()* this.gameRules.CurrentZombiesArray.length)];
        if(!randomZombie) {
            return;
        }
        randomZombie.zombieProps.DealDamage(50);

        //console.log("[GameRulesCheats] KILL RANDOM ZOMBIE!!!");

    }

    SpeedUpAllZombies(addition) {
        for(const zombie of this.gameRules.CurrentZombiesArray){
            if(!zombie) {
                continue;
            }

            let newSpeedModifier = zombie.moveSpeedModifier + addition
            if(newSpeedModifier < 0) {
                newSpeedModifier = 0;
            }

            zombie.moveSpeedModifier = newSpeedModifier;
        }
    }
}