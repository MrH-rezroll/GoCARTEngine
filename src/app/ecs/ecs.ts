import Entity from "./entities/entity";
import Health from "./components/health";
import BoxCollider from "./components/box_collider";
import EightDirectionController from "./components/eight_direction_controller";
import Physics from "./components/physics";
import SpriteRenderer from "./components/sprite_renderer";
import SpriteTiledRenderer from "./components/sprite_tiled_renderer";
import ViewFollow from "./components/view_follow";

export default class ECS{
    static _count: number = 0;
    static _entities: Array<Entity>;
    static _components: Object = {
        'Health': Health,
        'BoxCollider': BoxCollider,
        'EightDirectionController': EightDirectionController,
        'Physics': Physics,
        'SpriteRenderer': SpriteRenderer,
        'SpriteTiledRenderer': SpriteTiledRenderer,
        'ViewFollow': ViewFollow
    };

    static Entity(): Entity {
        if(ECS._entities == undefined){
            ECS._entities = new Array<Entity>();
        }
        let id: string = (new Date()).toString() + (Math.random() * 100000000 | 0).toString() + "_" + ECS._count;
        let entity = new Entity(id);
        ECS._entities.push(entity);
        ECS._count++;
        return ECS._entities[ECS._entities.length-1];
    }
}