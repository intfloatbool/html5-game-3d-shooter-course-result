import { ModelLoader } from "./common/modelLoader.js"
import { SceneInitializer } from "./game/sceneInitializer.js";
import HavokPhysics from "../HavokPhysics_es.js";
import { WorldBehaviour } from "./game/worldBehaviour.js";
import { LocalPlayerBehaviour } from "./components/LocalPlayerBehaviour.js";
import { GameEntity } from "./game/gameEntity.js";
import { CharacterModelLoader } from "./character/characterModelLoader.js";
import PlayerGUIBehaviour from "./components/playerGUIBehaviour.js";
import GameRulesBehaviour from "./components/gameRulesBehaviour.js";
import GameTimer from "./common/GameTimer.js";
import SoundPlayer from "./common/SoundPlayer.js";

const startGameButton = document.getElementById("start-game");
startGameButton.addEventListener("click", () => {
    hideMainMenu();
    startGame();
});

function hideMainMenu() {
    const mainMenuRoot = document.getElementById("menu-buttons");
    mainMenuRoot.hidden = true;
}

async function startGame() {

    const HAVOK = await HavokPhysics();
    globalThis.HK = HAVOK;

    let playerAnimationsGroupArray = [];
    let gameCamera = null;
    const canvas = document.getElementById("renderCanvas"); // Get the canvas element
    const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine
    const createScene =  async function () {
        // Creates a basic Babylon Scene object
        const scene = new BABYLON.Scene(engine);
        // Creates and positions a free camera
        gameCamera = new BABYLON.FollowCamera("FollowCam", new BABYLON.Vector3(0, 10, -10), scene);
        // Targets the camera to scene origin
    
        // This attaches the camera to the canvas
        gameCamera.attachControl(canvas, true);
        // Creates a light, aiming 0,1,0 - to the sky
        const light = new BABYLON.HemisphericLight("light", 
            new BABYLON.Vector3(0, 1, 0), scene);
        // Dim the light a small amount - 0 to 1
        light.intensity = 0.7;
 
        const locationData = await new ModelLoader(scene, null, "./Assets/location/", "scene.gltf").LoadAsync();
        const locationMeshes = locationData.meshes;
        locationMeshes[0].name = "Location";
        const meshes =  
            locationMeshes[0]
                .getChildren()[0]
                .getChildren()[0]
                .getChildren();
                
        await new SceneInitializer(scene, meshes).InitializeAsync();
        playerAnimationsGroupArray = await new CharacterModelLoader(scene).LoadAndSetupModelAsync();
        return scene;
    };
    const scene = await createScene(); //Call the createScene function

    const world = new WorldBehaviour();

    GameTimer.StartTime = new Date();
    GameTimer.StartTimer();

    const soundPlayer = new SoundPlayer()
        .PreloadSound("PLAYER_SHOT", "./Assets/sounds/johandeecke__short-gunshot.wav")
        .PreloadSound("ZOMBIE_PUNCH", "./Assets/sounds/merrick079__punch2.wav")
        .PreloadSound("ZOMBIE_ATTACKED", "./Assets/sounds/tonsil5__zombie-pain-6.wav")
        .PreloadSound("PLAYER_DEATH", "./Assets/sounds/male-death-cry-3.wav")
        .PreloadSound("ZOMBIE_DEATH", "./Assets/sounds/misterkidx__zombie_die_1.wav");

    const gameRulesEntity = new GameEntity(
        "GAME_RULES",
        new BABYLON.TransformNode("GameRules", scene)
    )
        .AddComponent(new GameRulesBehaviour(scene, world, soundPlayer), false);

    const playerEntity = new GameEntity(
        "LOCAL_PLAYER",
        scene.getMeshByName("Player").getChildren()[0],
    )
        .AddComponent(new LocalPlayerBehaviour(scene, gameCamera, playerAnimationsGroupArray, world, soundPlayer), false)
        .AddComponent(new PlayerGUIBehaviour());

    world
        .AddEntity(
            playerEntity,
            false
        )
        .AddEntity(
            gameRulesEntity,
            false
        )
    
    await world.InitAsync();
    
    world.OnAwake();
    world.OnStart();

    // Register a render loop to repeatedly render the scene
    engine.runRenderLoop(() => {
            const deltaTime = engine.getDeltaTime() / 1000.0; // ms -> s;
        
            world.OnUpdate(deltaTime);
            scene.render();
    });
    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
            engine.resize();
    });

    if(!GameRulesBehaviour.IsProduction)
        scene.debugLayer.show();
}

