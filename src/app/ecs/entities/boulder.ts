import BoxCollider from "../components/box_collider";
import SpriteRenderer from "../components/sprite_renderer";
import ECS from "../ecs";
import Entity from "./entity";

export function CreateBoulder(name:string = "Entity", x:number = 0, y: number = 0):Entity {
    let boulder: Entity = ECS.Entity(name, x, y);
    boulder.name = "Boulder";
    boulder.addComponent(new SpriteRenderer("boulder", 0, 0));
    boulder.addComponent(new BoxCollider(boulder.components['sprite_renderer'].sprite.transform, 16, 8));
    boulder.components['sprite_renderer'].sprite.animationSpeed = 0.05;
    boulder.components['box_collider'].offset = {x:0, y:0};
    return boulder;
}