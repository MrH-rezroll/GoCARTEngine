/**
 * Constucts a basic enterable House Entity
 * @version 01.01.22
 * @author MrH-rezroll
 */
import BoxCollider from "../components/box_collider";
import SpriteRenderer from "../components/sprite_renderer";
import ECS from "../ecs";
import Entity from "./entity";

/**
 * Creates a solid enterable small House Entity
 * @param name The name of this House Entity
 * @param x The x axis positon of this Entity
 * @param y The y axis position of this Entity
 * @returns The constructed Small House Entity
 */
export function CreateHouseSmall(name:string = "Entity", x:number = 0, y: number = 0):Entity {
    let house: Entity = ECS.Entity(name, x, y);
    house.addComponent(new SpriteRenderer("villiageHouseSmallTop", 0, 2));
    house.addComponent(new SpriteRenderer("villiageHouseSmallBottom", 1, 0));
    house.addComponent(new BoxCollider(house.components['sprite_renderer'].sprite.transform, 7, 36));
    house.components['box_collider'].offset = {x:4, y:14};
    house.addComponent(new BoxCollider(house.components['sprite_renderer'].sprite.transform, 32, 36));
    house.components['box_collider_1'].offset = {x:28, y:14};
    house.addComponent(new BoxCollider(house.components['sprite_renderer'].sprite.transform, 24, 18));
    house.components['box_collider_2'].offset = {x:4, y:14};
    house.components['sprite_renderer_1'].offset.y = 50;
    house.components['sprite_renderer'].sprite.animationSpeed = 0.05;
    return house;
}