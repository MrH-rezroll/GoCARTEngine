import BoxCollider from "../components/box_collider";
import Interactable from "../components/interactable";
import SpriteRenderer from "../components/sprite_renderer";
import ECS from "../ecs";
import Entity from "./entity";

export function CreateSign(name:string = "Entity", x:number = 0, y: number = 0):Entity {
    let boulder: Entity = ECS.Entity(name, x, y);
    boulder.name = "Sign";
    boulder.addComponent(new SpriteRenderer("boulder", 0, 0));
    boulder.addComponent(new BoxCollider(boulder.components['sprite_renderer'].sprite.transform, 16, 8));
    boulder.addComponent(new BoxCollider(boulder.components['sprite_renderer'].sprite.transform, 24, 20, true));
    boulder.addComponent(new Interactable("sign"));
    boulder.components['sprite_renderer'].sprite.animationSpeed = 0.05;
    boulder.components['box_collider'].offset = {x:0, y:0};
    boulder.components['box_collider_1'].offset = {x:-4, y:-2};
    return boulder;
}