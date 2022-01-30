/**
 * A Solid cliff ridge Entity
 * @version 01.01.22
 * @author MrH-rezroll
 */
import BoxCollider from "../components/box_collider";
import SpriteTiledRenderer from "../components/sprite_tiled_renderer";
import ECS from "../ecs";
import Entity from "./entity";

/**
 * Creates Cliff Top obstacle Entity
 * @param name The name for this Cliff Top Entity
 * @param width The width of this Cliff
 * @param height The height of this Cliff
 * @param x The x axis position to place to cliff (position is left aligned)
 * @param y The y axis position to place to cliff (position is top aligned)
 * @returns The constructed Cliff Top Entity
 */
export function CreateCliffsTop(name:string = "CliffsTop", width:number = 0, height: number = 0, x:number = 0, y: number = 0):Entity {
    let cliffsTop: Entity = ECS.Entity(name, width, height);
    cliffsTop.name = name;
    cliffsTop.addComponent(new SpriteTiledRenderer("cliffsTop", width, height, x, y));
    cliffsTop.addComponent(new BoxCollider(cliffsTop.components['sprite_tiled_renderer'].sprite.transform, 1000, 34));
    return cliffsTop;
}