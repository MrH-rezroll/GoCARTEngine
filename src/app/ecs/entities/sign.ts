/**
 * Constructs an interactible Sign Post Entity
 * @version 01.01.22
 * @author MrH-rezroll
 */
import BoxCollider from "../components/box_collider";
import Interactable from "../components/interactable";
import SpriteRenderer from "../components/sprite_renderer";
import ECS from "../ecs";
import Entity from "./entity";

/**
 * Creates an interactive Sign Post
 * @param name The name of this Sign Post Entity
 * @param x The x axis position of this Entity
 * @param y The y axix position of this Entity
 * @param title The Title for the Sign Post
 * @param body The message body of the Sign Post
 * @returns The constructed Sign Post Entity
 */
export function CreateSign(name:string = "Entity", x:number = 0, y: number = 0, title:string="Title", body:string="body"):Entity {
    let boulder: Entity = ECS.Entity(name, x, y);
    boulder.name = "Sign";
    boulder.addComponent(new SpriteRenderer("signPost", 0, 0));
    boulder.addComponent(new BoxCollider(boulder.components['sprite_renderer'].sprite.transform, 12, 8));
    boulder.addComponent(new BoxCollider(boulder.components['sprite_renderer'].sprite.transform, 24, 20, true));
    boulder.addComponent(new Interactable("sign", title, body));
    boulder.components['sprite_renderer'].sprite.animationSpeed = 0.05;
    boulder.components['box_collider'].offset = {x:2, y:2};
    boulder.components['box_collider_1'].offset = {x:-4, y:-2};
    return boulder;
}