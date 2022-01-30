import SpriteTiledRenderer from "../components/sprite_tiled_renderer";
import ECS from "../ecs";
import Entity from "./entity";

export function CreateGrass(name:string = "Grass", width:number = 0, height: number = 0, x:number = 0, y: number = 0):Entity {
    let grass: Entity = ECS.Entity(name, width, height);
    grass.name = name;
    grass.addComponent(new SpriteTiledRenderer("grass", width, height, x, y));
    return grass;
}