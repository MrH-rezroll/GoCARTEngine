import * as PIXI from 'pixi.js';
import { GetTiledSprite } from '../../../assets/loader';
import { Component } from './component';

export default class SpriteTiledRenderer extends Component{
  isEnabled:boolean = true;
    sprite: PIXI.TilingSprite;
    transform: PIXI.Transform;
    constructor(transform: PIXI.Transform, spriteName: string, height: number, width: number){
        super();
        this.componentName = "sprite_tiled_renderer";
        this.transform = transform;
        this.sprite = GetTiledSprite(spriteName, width, height);
        this.sprite.transform = this.transform;
    }
}