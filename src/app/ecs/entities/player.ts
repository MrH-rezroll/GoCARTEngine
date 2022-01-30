import BoxCollider from "../components/box_collider";
import Health from "../components/health";
import SpriteRenderer from "../components/sprite_renderer";
import ECS from "../ecs";
import Entity from "./entity";
import PlayerControl from "../components/player_control";

export function CreatePlayer(name:string = "Entity", x:number = 0, y: number = 0):Entity {
    let player: Entity = ECS.Entity(name, x, y);
    player.addComponent(new Health());
    player.addComponent(new PlayerControl());
    player.components['player_control'].followOnY = true;
    player.components['player_control'].followOnX = true;
    player.addComponent(new SpriteRenderer("playerIdle", 0, 1));
    player.components['sprite_renderer'].addAnimation('playerMoveNorth');
    player.components['sprite_renderer'].addAnimation('playerMoveSouth');
    player.components['sprite_renderer'].addAnimation('playerMoveEast');
    player.components['sprite_renderer'].addAnimation('playerMoveWest');
    player.addComponent(new BoxCollider(player.components['sprite_renderer'].sprite.transform, 16, 16));
    player.components['sprite_renderer'].sprite.animationSpeed = 0.05;
    return player;
}