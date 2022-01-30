import BoxCollider from "../components/box_collider";
import SpriteTiledRenderer from "../components/sprite_tiled_renderer";
import ECS from "../ecs";
import Entity from "./entity";

export function CreateCliffsTop(name:string = "CliffsTop", width:number = 0, height: number = 0, x:number = 0, y: number = 0):Entity {
    let cliffsTop: Entity = ECS.Entity(name, width, height);
    cliffsTop.name = name;
    cliffsTop.addComponent(new SpriteTiledRenderer("cliffsTop", width, height, x, y));
    cliffsTop.addComponent(new BoxCollider(cliffsTop.components['sprite_tiled_renderer'].sprite.transform, 1000, 34));
    return cliffsTop;
}