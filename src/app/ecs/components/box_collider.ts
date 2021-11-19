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
    constructor(transform: PIXI.Transform, width:number = 1, height:number = 1, isTrigger: boolean = false){
        super();
        this.componentName = "box_collider";
        this.transform = transform;
        this.height = height;
        this.width = width;
        this.isTrigger = isTrigger;
        this.offset = {x:0, y:0};
    }

    static collide(box1: BoxCollider, box2: BoxCollider, direction:Direction = Direction.Any): boolean
    {
        if (box1 == undefined || box2 == undefined) {return false;}

        let ax1: number = box1.transform.position.x + box1.offset.x;
        let ay1: number = box1.transform.position.y + box1.offset.y;
        let ax2: number = ax1+ box1.width;
        let ay2: number = ay1 + box1.height;
        let bx1: number = box2.transform.position.x + box2.offset.x;
        let by1: number = box2.transform.position.y + box2.offset.y;
        let bx2: number = bx1 + box2.width;
        let by2: number = by1 + box2.height;
        switch (direction) {
            case Direction.Any:
                if(ax1 > bx2) return false;
                if(ax2 < bx1) return false;
                if(ay1 > by2) return false;
                if(ay2 < by1) return false;      
                return true;
            case Direction.Bottom:
                if(ay2 > by1 && ay1 < by1 && ax1 < bx2 && ax2 > bx1){return true;}
                return false;
            case Direction.Top:
                if(ay1 < by2 && ay2 > by2 && ax1 < bx2 && ax2 > bx1) return true;
                return false;
            case Direction.Left:
                if(ax1 < bx2 && ax2 > bx2 && ay2 > by1 && ay1 < by2) return true;
                return false;
            case Direction.Right:
                if(ax2 > bx1 && ax1 < bx1 && ay2 > by1 && ay1 < by2) return true;
                return false;
        }
    }
}