/**
 * Constucts an animated Tree Entity obstacle
 * @version 01.01.22
 * @author MrH-rezroll
 */
import BoxCollider from "../components/box_collider";
import SpriteRenderer from "../components/sprite_renderer";
import ECS from "../ecs";
import Entity from "./entity";

/**
 * Creates an animated Tree Entity obstacle
 * @param name The name of this Animated Tree Entity
 * @param x The x axis position of this Entity
 * @param y The y axis position of this Entity 
 * @returns The constructed Animated Tree Enitity
 */
export function CreateTreeElm(name:string = "Entity", x:number = 0, y: number = 0):Entity {
    let tree: Entity = ECS.Entity(name, x, y);
    tree.addComponent(new SpriteRenderer("treeElmTop", 0, 1));
    tree.addComponent(new SpriteRenderer("treeElmBottom", 1, 0));
    tree.addComponent(new BoxCollider(tree.components['sprite_renderer'].sprite.transform, 22, 24));
    tree.components['sprite_renderer_1'].offset.y = 32;
    tree.components['sprite_renderer'].sprite.animationSpeed = 0.05;
    tree.components['sprite_renderer_1'].sprite.animationSpeed = 0.05;
    tree.components['box_collider'].offset = {x:22, y:8};
    return tree;
}