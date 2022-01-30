/**
 * An animated bouncing arrow for indicating other interactable Entities
 * @version 01.01.22
 * @author MrH-rezroll
 */
import SpriteRenderer from "../components/sprite_renderer";
import ECS from "../ecs";
import Entity from "./entity";

/**
 * Method to create and Active Arrow Entity
 * @param name The name for this Active Arrow Entity
 * @param x The x axis position of this Entity
 * @param y The y axis positon of this Entity
 * @returns the constructed Active Arrow Entity
 */
export function CreateActiveArrow(name:string = "Entity", x:number = 0, y: number = 0):Entity {
    let activeArrow: Entity = ECS.Entity(name, x, y);
    activeArrow.addComponent(new SpriteRenderer("activeArrow", 0, 2));
    activeArrow.components['sprite_renderer'].sprite.animationSpeed = 0.2;
    activeArrow.components['sprite_renderer'].sprite.visible = false;
    return activeArrow;
}