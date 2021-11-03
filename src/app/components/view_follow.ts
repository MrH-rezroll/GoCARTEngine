import { Component } from "../interfaces/components";
import * as PIXI from 'pixi.js';
import StageObject from "../interfaces/stage_object";
import App from "../app";
import StageBehavior from "./stage_behavior";

export default class ViewFollow implements Component{
  isEnabled:boolean = true;
    private spriteToFollow: PIXI.Sprite
    private xOffsetLeft: number;
    private xOffsetRight: number;
    private yOffsetTop: number;
    private yOffsetBottom: number;
    followOnX: boolean = true;
    followOnY: boolean = true;
    transform: PIXI.Transform;
    stageObject: StageBehavior;

    constructor(stageObject: StageObject, spriteToFollow: PIXI.Sprite){
      this.transform = stageObject.transform;
      this.stageObject = stageObject.stageBehavior;
      this.spriteToFollow = spriteToFollow;
      this.xOffsetLeft = (App._instance.renderer.view.width / App.resolution)/2 - (this.spriteToFollow.width / 2);
      this.xOffsetRight = App.mapSize - (App._instance.renderer.view.width / App.resolution)/2 - (this.spriteToFollow.width / 2);
      this.yOffsetTop = (App._instance.renderer.view.height / App.resolution)/2 - (this.spriteToFollow.height / 2);
      this.yOffsetBottom = App.mapSize - (App._instance.renderer.view.height / App.resolution)/2 - (this.spriteToFollow.height / 2);
    }

    public updateFollowPosition(){
      if(this.followOnX){
        if (this.spriteToFollow.position.x > this.xOffsetLeft && this.spriteToFollow.position.x < this.xOffsetRight) {
          App.Stage.position.x = -this.transform.position.x + this.xOffsetLeft;
        }
      }
      if(this.followOnY){
        if (this.spriteToFollow.position.y > this.yOffsetTop && this.spriteToFollow.position.y < this.yOffsetBottom) {
          App.Stage.position.y = -this.transform.position.y + this.yOffsetTop;
        }
      }
    }

    viewFollow(): ViewFollow {
        return this;
    }
}