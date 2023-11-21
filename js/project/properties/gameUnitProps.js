export default class GameUnitProps {
    constructor() {
        this.hpValue = 0;
        this.HpObservable = new BABYLON.Observable();

        this.maxHpValue = 0;
        this.MaxHpObservable = new BABYLON.Observable();
        
        this.isDead = false;
        this.IsDeadObservable = new BABYLON.Observable();
    }

    GetMaxHp() {
        return this.maxHpValue;
    }
    
    SetMaxHp(value) {
        this.maxHpValue = value;
        this.MaxHpObservable.notifyObservers(this.maxHpValue);
    }

    GetHp() {
        return this.hpValue;
    }
    SetHp(value) {
        this.hpValue = value;
        this.HpObservable.notifyObservers(this.hpValue);
    }

    GetIsDead() {
        return this.isDead;
    }

    SetIsDead(value) {
        this.isDead = value;
        this.IsDeadObservable.notifyObservers(this.isDead);
    }

    DealDamage(damage) {
        const currentHp = this.GetHp();
        let resultHp = currentHp - damage;
        if(resultHp < 0) {
            resultHp = 0;
        } 
        this.SetHp(resultHp);
    }
}