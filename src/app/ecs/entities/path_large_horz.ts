/**
 * Constucts a Horizontal Tiled Path Entity
 * @version 01.01.22
 * @author MrH-rezroll
 */
import SpriteTiledRenderer from "../components/sprite_tiled_renderer";
import ECS from "../ecs";
import Entity from "./entity";

/**
 * Creates a Tiled Horiztonal Path Entity
 * @param name The name of this Horizontal Tile Path Entity
 * @param width The width of this Entity
 * @param height The height of this Entity
 * @param x The x axis position of this Entity
 * @param y The y axis position of this Entity
 * @returns The Constructed Tiled Horizontal Path Entity
 */
export function CreatePathLargeHorz(name:string = "PathLargeHorz", width:number = 0, height: number = 0, x:number = 0, y: number = 0):Entity {
    let pathLargeHorz: Entity = ECS.Entity(name, width, height);
    pathLargeHorz.name = name;
    pathLargeHorz.addComponent(new SpriteTiledRenderer("pathLargeHorz", width, height, x, y));
    return pathLargeHorz;
}