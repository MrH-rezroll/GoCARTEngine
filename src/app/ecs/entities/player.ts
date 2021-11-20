import App from "../../appECS";
import ECS from "../ecs";
import Entity from "./entity";

export function CreatePlayer():Entity {
    let player: Entity = ECS.Entity();
    player.name = "Player";
    player.addComponent(new ECS._components['Health']);
    player.addComponent(new ECS._components['Physics']);
    player.addComponent(new ECS._components['SpriteRenderer']("playerIdle", 0, 1));
    player.addComponent(new ECS._components['BoxCollider'](player.components['sprite_renderer'].sprite.transform, 16, 16));
    player.components['sprite_renderer'].sprite.x = 0;
    player.components['sprite_renderer'].sprite.y = 0;
    player.components['sprite_renderer'].sprite.animationSpeed = 0.05;
    player.components['sprite_renderer'].sprite.play();
    player.addComponent(new ECS._components['EightDirectionController'](player.components['sprite_renderer'].sprite.transform, player.components['box_collider']));
    App.containerLayers[player.components['sprite_renderer'].layer].addChild(player.components['sprite_renderer'].sprite);
    return player;
}