import { ModelLoader } from "../../common/modelLoader.js";
import { GameEntity } from "../../game/gameEntity.js";
import EnemyZombieBehaviour from "./enemyZombieBehaviour.js";

export default class EnemySpawner {
    
    constructor(scene, world, soundPlayer) {
        this.scene = scene;
        this.world = world;
        this._soundPlayer = soundPlayer;
    }

    async CreateZombieEntityAsync(position, additionHp) {

        if(!this.playerTarget) {
            this.playerTarget = this.world.GetEntity("LOCAL_PLAYER").GetComponent("LocalPlayerBehaviour");
        }

        const modelData = await new ModelLoader(this.scene, null, "./Assets/zombie-boy/", "zombie-boy.glb").LoadAsync();

        const enemyRootMesh = modelData.meshes[0];
        enemyRootMesh.name = "ZOMBIE";
        enemyRootMesh.scaling = new BABYLON.Vector3(15, 15, 15);
        enemyRootMesh.position = position;

        const animationGroupsArr = modelData.animationGroups;
        const zombieBehaviour = new EnemyZombieBehaviour(enemyRootMesh, animationGroupsArr, this.scene, this._soundPlayer);
        zombieBehaviour.currentTarget = this.playerTarget;
        const zombieEntity = new GameEntity(enemyRootMesh.name, enemyRootMesh)
        .AddComponent(zombieBehaviour, false);

        await zombieEntity.InitAsync();

        const newHp = zombieBehaviour.zombieProps.GetHp() + additionHp;
        zombieBehaviour.zombieProps.SetHp(newHp);

        return {
            entity: zombieEntity,
            behaviour: zombieBehaviour
        };
    }
}