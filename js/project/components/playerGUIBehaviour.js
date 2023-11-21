import { WaitUntil } from "../../Utils.js";
import { GameBehaviour } from "../common/gameBehaviour.js";

export default class PlayerGUIBehaviour extends GameBehaviour {


    async InitAsync() {
        if(!this.entity) {
            throw new Error(`[PlayerGUIBehaviour] the 'entity' is missing!`);
        }
        this.playerBehaviour = this.entity.GetComponent("LocalPlayerBehaviour");

        await WaitUntil(() => this.playerBehaviour.isInitialized);

        this.playerProps = this.playerBehaviour.playerProps;
        if(!this.playerProps) {
            throw new Error(`[PlayerGUIBehaviour] the 'playerProps' is missing!`);
        }

        this.SetupGuiElements();
    }

    OnAwake() {}
    OnStart() {
    }
    OnDisable() {}
    OnDestroy() {}
    OnUpdate(deltaTime) {}

    SetupGuiElements() {

        const advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

        const grid = new BABYLON.GUI.Grid();
        advancedTexture.addControl(grid);

        grid.addColumnDefinition(0.33);
        grid.addColumnDefinition(0.33);
        grid.addColumnDefinition(0.33);
        grid.addRowDefinition(0.33);
        grid.addRowDefinition(0.33);
        grid.addRowDefinition(0.33);

        
        const hpBarSlider = this.CreateHpBarSlider();

        const getNormalizedHp = () => {
            return this.playerProps.GetHp() / this.playerProps.GetMaxHp();
        }

        hpBarSlider.value = getNormalizedHp();
        
        this.playerProps.HpObservable.add((currentHp) => {
            hpBarSlider.value = getNormalizedHp();
        });

        this.playerProps.IsDeadObservable.add((isDead) => {
            if(isDead) {
                hpBarSlider.dispose();
            }
        });

        // elem, row, col
        grid.addControl(hpBarSlider, 0, 1);
    }

    CreateHpBarSlider() {
        const hpBarSlider = new BABYLON.GUI.Slider();
        hpBarSlider.minimum = 0;
        hpBarSlider.maximum = 1;
        hpBarSlider.isThumbClamped = false;
        hpBarSlider.isVertical = false;
        hpBarSlider.displayThumb = false;
        hpBarSlider.height = "20px";
        hpBarSlider.width = "200px";

        hpBarSlider.color = "red";

        hpBarSlider.value = 0.5;
        hpBarSlider.isEnabled = false;

        return hpBarSlider;
    }
}