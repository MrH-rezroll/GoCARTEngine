/**
 * A simple solid square boulder obstacle
 * @version 01.01.22
 * @author MrH-rezroll
 */
import BoxCollider from "../components/box_collider";
import SpriteRenderer from "../components/sprite_renderer";
import ECS from "../ecs";
import Entity from "./entity";

/**
 * Constructs a small Boulder obstacle Entity
 * @param name The name for this Boulder
 * @param x The x axis positon of this Entity
 * @param y The y axis position of this Entity
 * @returns The constructed Boulder Entity
 */
export function CreateBoulder(name:string = "Entity", x:number = 0, y: number = 0):Entity {
    let boulder: Entity = ECS.Entity(name, x, y);
    boulder.name = "Boulder";
    boulder.addComponent(new SpriteRenderer("boulder", 0, 0));
    boulder.addComponent(new BoxCollider(boulder.components['sprite_renderer'].sprite.transform, 16, 8));
    boulder.components['sprite_renderer'].sprite.animationSpeed = 0.05;
    boulder.components['box_collider'].offset = {x:0, y:0};
    return boulder;
}