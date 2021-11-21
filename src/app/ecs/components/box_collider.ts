import { Transform } from "pixi.js";
import { Component } from "./component";

export enum Direction {
    Any,
    Bottom,
    Top,
    Left,
    Right
}

export default class BoxCollider extends Component{
    isEnabled: boolean = true;
    height: number;
    width: number;
    isTrigger: boolean;
    transform: Transform;
    offset: {x:number, y:number};
    lastHitObject: BoxCollider;
    constructor(transform: PIXI.Transform, width:number = 1, height:number = 1, isTrigger: boolean = false){
        super();
        this.componentName = "box_collider";
        this.transform = transform;
        this.height = height;
        this.width = width;
        this.isTrigger = isTrigger;
        this.offset = {x:0, y:0};
    }
}