/**
 * A Solid cliff ridge Entity
 * @version 01.01.22
 * @author MrH-rezroll
 */
import BoxCollider from "../components/box_collider";
import SpriteRenderer from "../components/sprite_renderer";
import ECS from "../ecs";
import Entity from "./entity";

/**
 * Creates a Horizontal Fence obstacle Entity
 * @param name The name for this Horizontal Fence Entity
 * @param x The x axis position of this Entity
 * @param y The y axis position of this Entity
 * @returns The constructed Horizontal Fence Entity
 */
export function CreateFenceHorz(name:string = "Fence Horizontal", x:number = 0, y: number = 0):Entity {
    let fenceHorz: Entity = ECS.Entity(name, x, y);
    fenceHorz.addComponent(new SpriteRenderer("fenceHorzTop", 0, 2));
    fenceHorz.addComponent(new SpriteRenderer("fenceHorzBottom", 1, 0));
    fenceHorz.addComponent(new BoxCollider(fenceHorz.components['sprite_renderer'].sprite.transform, 64, 1));
    fenceHorz.components['sprite_renderer_1'].offset.y = 8;
    fenceHorz.components['box_collider'].offset = {x:0, y:7};
    return fenceHorz;
}