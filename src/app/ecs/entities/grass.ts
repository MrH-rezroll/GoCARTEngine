/**
 * A Tiled Grass pattern Entity
 * @version 01.01.22
 * @author MrH-rezroll
 */
import SpriteTiledRenderer from "../components/sprite_tiled_renderer";
import ECS from "../ecs";
import Entity from "./entity";

/**
 * Create a patch of Tiled Grass Entity
 * @param name The name for this Grass
 * @param width The width of this Grass
 * @param height The height of this Grass
 * @param x The x axis positon of this Grass
 * @param y The y axis position of this Grass
 * @returns The constructed Tiled Grass Entity
 */
export function CreateGrass(name:string = "Grass", width:number = 0, height: number = 0, x:number = 0, y: number = 0):Entity {
    let grass: Entity = ECS.Entity(name, width, height);
    grass.name = name;
    grass.addComponent(new SpriteTiledRenderer("grass", width, height, x, y));
    return grass;
}