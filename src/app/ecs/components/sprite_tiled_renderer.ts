/**
 * Provides informtion for an Entity that will have a TiledSprite
 * @version 01.01.22
 * @author MrH-rezroll
 */
import * as PIXI from 'pixi.js';
import { GetTiledSprite } from '../../../assets/loader';
import { Component } from './component';

/**
 * Compoent that provides details about about an Entity's tiled sprite
 */
export default class SpriteTiledRenderer extends Component{
  isEnabled:boolean = true;
  sprite: PIXI.TilingSprite;
  constructor(spriteName: string, height: number, width: number, x: number = 0, y: number = 0){
    super();
    this.componentName = "sprite_tiled_renderer";
    this.sprite = GetTiledSprite(spriteName, width, height);
    this.sprite.position.x = x;
    this.sprite.position.y = y;
  }
}