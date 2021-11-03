import StageObject from "../interfaces/stage_object";
import { Direction } from "./box_collider";
import BoxCollider from "./box_collider";

export default class Physics {
    static BoxColliderOverlaps(box: BoxCollider, objects: Array<StageObject>, direction: Direction = Direction.Any): BoxCollider {
        let foundObject: BoxCollider;
        objects.forEach(object => {
            if (object.stageBehavior.boxColliderComponents.length > 0) {
                object.stageBehavior.boxColliderComponents.forEach(boxCollider => {
                    if(BoxCollider.collide(box, boxCollider, direction)){
                        foundObject = boxCollider;
                    }
                });
            }
        });
        return foundObject;
    }
}