import { GetTiledSprite } from "../../assets/loader";
import { Component } from "../interfaces/components";
import * as PIXI from 'pixi.js';
import StageObject from "../interfaces/stage_object";
import StageBehavior from "./stage_behavior";

export default class SpriteTiledRenderer implements Component{
  isEnabled:boolean = true;
    sprite: PIXI.TilingSprite;
    transform: PIXI.Transform;
    stageObject: StageBehavior;
    constructor(stageObject: StageObject, spriteName: string, height: number, width: number){
      this.transform = stageObject.transform;
      this.sprite = GetTiledSprite(spriteName, width, height);
      this.sprite.transform = this.transform;
      this.stageObject = stageObject.stageBehavior;
    }
    spriteTiledRenderer(): SpriteTiledRenderer {
        return this;
    }
}