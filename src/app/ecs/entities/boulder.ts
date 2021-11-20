import App from "../../appECS";
import ECS from "../ecs";
import Entity from "./entity";

export function CreateBoulder():Entity {
    let boulder: Entity = ECS.Entity();
    boulder.name = "Boulder";
    boulder.addComponent(new ECS._components['Physics']);
    boulder.addComponent(new ECS._components['SpriteRenderer']("boulder", 0, 0));
    boulder.addComponent(new ECS._components['BoxCollider'](boulder.components['sprite_renderer'].sprite.transform, 16, 8));
    boulder.components['sprite_renderer'].sprite.x = 64;
    boulder.components['sprite_renderer'].sprite.y = 96;
    boulder.components['sprite_renderer'].sprite.animationSpeed = 0.05;
    boulder.components['sprite_renderer'].sprite.play();
    boulder.components['box_collider'].offset = {x:0, y:0};
    App.containerLayers[boulder.components['sprite_renderer'].layer].addChild(boulder.components['sprite_renderer'].sprite);
    return boulder;
}