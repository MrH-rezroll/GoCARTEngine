import Input from "./systems/input";
import Physics from "./systems/physics";
import ViewFollow from "./systems/view_follow";
import Entity from "./entities/entity";
import Collision from "./systems/collision";
import EightDirectionController from "./systems/eight_direction_controller";

export default class ECS{
    static _count: number = 0;
    static _entities: Array<Entity>;
    static collision: Collision;
    static eightDirectionController: EightDirectionController;
    static input: Input;
    static physics: Physics;
    static viewFollow: ViewFollow;

    static InitializeSystems(){
        ECS.collision = new Collision();
        ECS.eightDirectionController = new EightDirectionController();
        ECS.input = new Input();
        ECS.physics = new Physics();
        ECS.viewFollow = new ViewFollow();
    }

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