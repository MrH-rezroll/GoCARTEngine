/**
 * Provides informtion for an Entity that will have a Sprite
 * @version 01.01.22
 * @author MrH-rezroll
 */
import * as PIXI from 'pixi.js';
import { GetSprite } from '../../../assets/loader';
import { Component } from './component';

/**
 * Compoent that provides details about about an Entity's sprite
 */
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