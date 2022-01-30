/**
 * System to iterate over Entities and perform animation switching logic opperations as appropriate. Actual frame animation handled by Pixi
 * @version 01.01.22
 * @author MrH-rezroll
 */
import ECS from "../ecs";
import System from "./system";
import SpriteRenderer from "../components/sprite_renderer";

/**
 * The Animation Logic System
 */
export default class Animation extends System{
    systemName = "Animation";

    /**
     * Iterate over Enitities and perform animation switching logic where appropriate
     */
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