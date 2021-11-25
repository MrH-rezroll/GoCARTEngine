import ECS from "../ecs";
import System from "./system";
import App from "../../appECS";
import SpriteRenderer from "../components/sprite_renderer";

export default class Animation extends System{
    systemName = "Animation";

    public Update():void{
        ECS._entities.forEach(entity => {
            for(const currComponent in entity.components){
                if(entity.components[currComponent] == entity.components['player_control'] && entity.components['player_control'].GetIsSimulated()){
                    this.animateDirectControlPlayer(entity.components['sprite_renderer']);
                }
            }
        });
    }

    private animateDirectControlPlayer(playerSprite:SpriteRenderer){
        if(!ECS.input.down && !ECS.input.up && !ECS.input.left && !ECS.input.right){
            playerSprite.sprite.texture = playerSprite.animations['playerIdle'].texture;
        }
        else if (ECS.input.up){
          playerSprite.sprite.texture = playerSprite.animations['playerMoveNorth'].texture;
        }
        else if (ECS.input.down){
          playerSprite.sprite.texture = playerSprite.animations['playerMoveSouth'].texture;
        }
        else if (ECS.input.left){
          playerSprite.sprite.texture = playerSprite.animations['playerMoveWest'].texture;
        }
        else if (ECS.input.right){
          playerSprite.sprite.texture = playerSprite.animations['playerMoveEast'].texture;
        }
    }
}