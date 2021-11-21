import App from "../../appECS";
import BoxCollider from "../components/box_collider";
import EightDirectionController from "../systems/eight_direction_controller";
import Health from "../components/health";
import SpriteRenderer from "../components/sprite_renderer";
import ECS from "../ecs";
import Entity from "./entity";
import PlayerControl from "../components/player_control";

export function CreatePlayer():Entity {
    let player: Entity = ECS.Entity();
    player.name = "Player";
    player.addComponent(new Health());
    player.addComponent(new PlayerControl());
    player.components['player_control'].followOnY = true;
    player.components['player_control'].followOnX = true;
    player.addComponent(new SpriteRenderer("playerIdle", 0, 1));
    player.addComponent(new BoxCollider(player.components['sprite_renderer'].sprite.transform, 16, 16));
    player.components['sprite_renderer'].sprite.x = 0;
    player.components['sprite_renderer'].sprite.y = 0;
    player.components['sprite_renderer'].sprite.animationSpeed = 0.05;
    player.components['sprite_renderer'].sprite.play();
    App.containerLayers[player.components['sprite_renderer'].layer].addChild(player.components['sprite_renderer'].sprite);
    return player;
}