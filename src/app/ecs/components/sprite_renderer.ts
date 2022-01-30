import * as PIXI from 'pixi.js';
import { GetSprite } from '../../../assets/loader';
import App from '../../app';
import { Component } from './component';

export default class SpriteRenderer extends Component{
  static totalSpriteLayers:number = 3;
  isEnabled:boolean = true;
  sprite: PIXI.AnimatedSprite;
  layer: number;
  offset: {x: number, y: number}
  animations:Object = {};

  constructor(spriteName: string, spriteNumber:number, layer:number){
    super();
    this.componentName = 'sprite_renderer';
    this.offset = {x:0, y:0};
    this.layer = layer;
    this.animations[spriteName] = GetSprite(spriteName);
    this.sprite = this.animations[spriteName];
  }

  public addAnimation(animationName: string){
    this.animations[animationName] = GetSprite(animationName);
  }     
  public changeAnimation(animationName: string){
    this.sprite.texture = this.animations[animationName].texture;
  }
}