import * as PIXI from 'pixi.js';
import App from '../../appECS';
import ECS from '../ecs';
import System from './system';

export default class ViewFollow extends System{
  isEnabled:boolean = true;
    private xOffsetLeft: number;
    private xOffsetRight: number;
    private yOffsetTop: number;
    private yOffsetBottom: number;
    private spriteToFollow: PIXI.Sprite;

    constructor(){
        super();
        ViewFollow.systemName = "view_follow";
    }

    public SetupSpriteToFollow(spriteToFollow: PIXI.Sprite):void {
      this.xOffsetLeft = (App._instance.renderer.view.width / App.resolution)/2 - (spriteToFollow.width / 2);
      this.xOffsetRight = App.mapSize - (App._instance.renderer.view.width / App.resolution)/2 - (spriteToFollow.width / 2);
      this.yOffsetTop = (App._instance.renderer.view.height / App.resolution)/2 - (spriteToFollow.height / 2);
      this.yOffsetBottom = App.mapSize - (App._instance.renderer.view.height / App.resolution)/2 - (spriteToFollow.height / 2);
    }

    public Update(){
      for (let key of Object.keys(ECS._entities)) {
        let entity = ECS._entities[key];
        if (entity.components['player_control'] != undefined){
          this.spriteToFollow = entity.components['sprite_renderer'].sprite;
          if(entity.components['player_control'].followOnX){
            if (this.spriteToFollow.position.x > this.xOffsetLeft && this.spriteToFollow.position.x < this.xOffsetRight) {
              App.Stage.position.x = -this.spriteToFollow.transform.position.x + this.xOffsetLeft;
            }
          }
          if(entity.components['player_control'].followOnY){
            if (this.spriteToFollow.position.y > this.yOffsetTop && this.spriteToFollow.position.y < this.yOffsetBottom) {
              App.Stage.position.y = -this.spriteToFollow.transform.position.y + this.yOffsetTop;
            }
          }
        }
      }
    }
}