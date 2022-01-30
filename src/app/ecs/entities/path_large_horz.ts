import SpriteTiledRenderer from "../components/sprite_tiled_renderer";
import ECS from "../ecs";
import Entity from "./entity";

export function CreatePathLargeHorz(name:string = "PathLargeHorz", width:number = 0, height: number = 0, x:number = 0, y: number = 0):Entity {
    let pathLargeHorz: Entity = ECS.Entity(name, width, height);
    pathLargeHorz.name = name;
    pathLargeHorz.addComponent(new SpriteTiledRenderer("pathLargeHorz", width, height, x, y));
    return pathLargeHorz;
}