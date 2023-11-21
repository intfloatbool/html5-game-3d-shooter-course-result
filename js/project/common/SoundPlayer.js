export default class SoundPlayer {

    constructor(scene) {
        this._scene = scene;
        this._soundsMap = new Map();
    }

    PreloadSound(soundKey, soundPath) {
        if(this._soundsMap.has(soundKey)) {
            throw new Error(`[SoundPlayer] sound with key '${soundKey}' is already loaded!`);
        }

        const sound = new BABYLON.Sound(soundKey, soundPath, this._scene);
        this._soundsMap.set(soundKey, sound);

        return this;
    }
    
    PlaySound(soundKey) {
        if(!this._soundsMap.has(soundKey)) {
            throw new Error(`[SoundPlayer] sound with key '${soundKey}' is not presented!`);
        }

        this._soundsMap.get(soundKey).play();
    }
}