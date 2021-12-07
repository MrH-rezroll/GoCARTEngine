import BoxCollider from "../components/box_collider";
import SpriteRenderer from "../components/sprite_renderer";
import ECS from "../ecs";
import Entity from "./entity";

export function CreateActiveArrow(name:string = "Entity", x:number = 0, y: number = 0):Entity {
    let activeArrow: Entity = ECS.Entity(name, x, y);
    activeArrow.addComponent(new SpriteRenderer("activeArrow", 0, 2));
    activeArrow.components['sprite_renderer'].sprite.animationSpeed = 0.2;
    activeArrow.components['sprite_renderer'].sprite.visible = false;
    return activeArrow;
}