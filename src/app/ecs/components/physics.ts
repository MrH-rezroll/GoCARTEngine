import { Direction } from "./box_collider";
import BoxCollider from "./box_collider";
import Entity from "../entity";
import { Component } from "./component";

export default class Physics extends Component{
    constructor(){
        super();
        this.componentName = "physics";
    }
    static BoxColliderOverlaps(box: BoxCollider, entities: Object = {Entity}, direction: Direction = Direction.Any): BoxCollider {
        let foundObject: BoxCollider;
        for (let entity of Object.values(entities)) {
            console.log(entity);
            if (entity.stageBehavior.boxColliderComponents.length > 0) {
                entity.stageBehavior.boxColliderComponents.forEach(boxCollider => {
                    if(BoxCollider.collide(box, boxCollider, direction)){
                        foundObject = boxCollider;
                    }
                });
            }
        }
        return foundObject;
    }
}