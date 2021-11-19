import { Direction } from "./box_collider";
import BoxCollider from "./box_collider";
import Entity from "../entities/entity";
import { Component } from "./component";
import ECS from "../ecs";

export default class Physics extends Component{
    constructor(){
        super();
        this.componentName = "physics";
    }
    static BoxColliderOverlaps(box: BoxCollider, direction: Direction = Direction.Any): BoxCollider {
        let foundObject: BoxCollider;
        ECS._entities.forEach(entity => {
            if(BoxCollider.collide(box, entity.components['box_collider'], direction)){
                foundObject = entity.components['box_collider'];
            }
            /*
            if (entity.stageBehavior.boxColliderComponents.length > 0) {
                entity.stageBehavior.boxColliderComponents.forEach(boxCollider => {
                    if(BoxCollider.collide(box, boxCollider, direction)){
                        foundObject = boxCollider;
                    }
                });
            }
            */
        });
        return foundObject;
    }
}