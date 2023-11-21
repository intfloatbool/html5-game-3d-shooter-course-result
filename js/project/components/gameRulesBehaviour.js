import GameTimer from "../common/GameTimer.js";
import { GameBehaviour } from "../common/gameBehaviour.js";
import { ModelLoader } from "../common/modelLoader.js";
import GameRulesCheats from "./GameRulesCheats.js";
import EnemySpawner from "./enemies/enemySpawner.js";

export default class GameRulesBehaviour extends GameBehaviour {

    static IsProduction = true;

    constructor(scene, world, soundPlayer) {
        super();
        this.scene = scene;
        this.world = world;
        this.enemySpawner = new EnemySpawner(scene, this.world, soundPlayer);
        this.spawnDelayInSeconds = 2;
        this.spawnTimer = this.spawnDelayInSeconds;
        this.currentZombiesCount = 0;
        this.maxZombiesCount = 10;
        this.isGameDone = false;

        this.CurrentZombiesArray = [];
        this._zombieAdditionHp = 0;
        this._soundPlayer = soundPlayer;
        if(!GameRulesBehaviour.IsProduction) {
            new GameRulesCheats(this);
        }
    }

    async InitAsync() {
        const spawnPointsData = await new ModelLoader(this.scene, null, "./Assets/ai-data/", "ai-data-spawn-points.glb").LoadAsync();
        this.spawnPointsArray = spawnPointsData.meshes[0].getChildTransformNodes();
        //console.log("Spawn points length: " + this.spawnPointsArray.length);

        GameTimer.OnTickOneSecondObservable.add((elapsedSeconds) => {

            if(this.isGameDone) {
                return;
            }

            if(elapsedSeconds % 60 === 0) {
                this._zombieAdditionHp += 5;

                //console.log("[GameRulesBehaviour] set _zombieAdditionHp: " + this._zombieAdditionHp);
            }
            if(elapsedSeconds % 120 === 0) {
                this.maxZombiesCount++;

                //console.log("[GameRulesBehaviour] set maxZombiesCount: " + this.maxZombiesCount);
            }
        });

        this.world
            .GetEntity("LOCAL_PLAYER")
            .GetComponent("LocalPlayerBehaviour")
            .playerProps.IsDeadObservable.add((isDead) => {
                if(isDead) {

                    setTimeout(() => {
                        location.reload();
                    }, 5000);

                    this.isGameDone = true;
                }
            });

    }

    OnStart() {
        this.InitialSpawn();

        //test
        this.ShowZombieCountDebugAsync();
    }

    async ShowZombieCountDebugAsync() {
        while(true) {
            await new Promise((res, rej) => {
                setTimeout(res, 1000);
            })

            //console.log("this.currentZombiesCount: " + this.currentZombiesCount);
        }
    }

    InitialSpawn() {
        //console.log("[GameRulesBehaviour] OnStart!!");
    }

    OnUpdate(deltaTime) {

        if(this.isGameDone) {
            return;
        }

        this.HandleSpawnLoop(deltaTime);
    }

    HandleSpawnLoop(deltaTime) {

        if(this.currentZombiesCount >= this.maxZombiesCount) {
            this.spawnTimer = 0;
            return;
        }

        if(this.spawnTimer >= this.spawnDelayInSeconds) {

            this.SpawnZombieAsync();
            this.spawnTimer = 0;

        }
        this.spawnTimer += deltaTime;
    }

    async SpawnZombieAsync() {
        const spawnPoint = this.GetRandomSpawnPoint();
        const zombieData = await this.enemySpawner.CreateZombieEntityAsync(
            //new BABYLON.Vector3(0, 0, 35)
            spawnPoint,
            this._zombieAdditionHp
            );

        this.world.AddEntity(zombieData.entity, true);

        this.CurrentZombiesArray.push(zombieData.behaviour);

        // decrease counter and remove from array on dead
        zombieData.behaviour.zombieProps.IsDeadObservable.add((isDead) => {
            if(isDead) {

                const zombieIndex = this.CurrentZombiesArray.indexOf(zombieData.behaviour);
                if (zombieIndex > -1) {
                    this.CurrentZombiesArray.splice(zombieIndex, 1);
                }

                this.currentZombiesCount--;
            }
        });

        this.currentZombiesCount++;
    }
    

    GetRandomSpawnPoint() {

        const arr = this.spawnPointsArray;

        return arr[Math.floor(Math.random()*this.spawnPointsArray.length)].position.clone();
    }
}