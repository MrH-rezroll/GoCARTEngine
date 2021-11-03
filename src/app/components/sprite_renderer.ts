import { GetSprite } from "../../assets/loader";
import { Component } from "../interfaces/components";
import * as PIXI from 'pixi.js';
import StageObject from "../interfaces/stage_object";
import StageBehavior from "./stage_behavior";
import App from "../app";

export default class SpriteRenderer implements Component{
  static totalSpriteLayers:number = 3;
  isEnabled:boolean = true;
    sprite: PIXI.AnimatedSprite;
    transform: PIXI.Transform;
    stageObject: StageBehavior;
    layer: number;
    offset: {x: number, y: number}
    animations:Object = {};

    constructor(stageObject: StageObject, spriteName: string, spriteNumber:number, layer:number){
      this.offset = {x:0, y:0};
      this.layer = layer;
      this.transform = stageObject.transform;
      this.animations[spriteName] = GetSprite(spriteName);
      this.sprite = this.animations[spriteName];
      App.containerLayers[this.layer].addChild(this.sprite);
      if (spriteNumber == 0) { this.sprite.transform = this.transform; }
      this.stageObject = stageObject.stageBehavior;
    }

    public addAnimation(animationName: string){
      this.animations[animationName] = GetSprite(animationName);
    }

    public changeAnimation(animationName: string){
      this.sprite.texture = this.animations[animationName].texture;
    }

    spriteRenderer(): SpriteRenderer {
        return this;
    }
}