import * as PIXI from 'pixi.js';
import { GetTiledSprite } from '../../../assets/loader';
import { Component } from './component';

export default class SpriteTiledRenderer extends Component{
  isEnabled:boolean = true;
  sprite: PIXI.TilingSprite;
  constructor(spriteName: string, height: number, width: number){
    super();
    this.componentName = "sprite_tiled_renderer";
    this.sprite = GetTiledSprite(spriteName, width, height);
  }
}