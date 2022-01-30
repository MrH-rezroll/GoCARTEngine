/**
 * System to iterate over Entities and perform collision operations as appropriate.
 * @version 01.01.22
 * @author MrH-rezroll
 */
import { Direction } from "../components/box_collider";
import BoxCollider from "../components/box_collider";
import ECS from "../ecs";
import System from "./system";
import Entity from "../entities/entity";

/**
 * Systme for collision checks
 */
export default class Collision extends System{
    systemName = "Collision";

    /**
     * Method to Check for Box Collision between Solid Entities
     * @param box The box to check all other Entities against.
     * @param direction The side of the box to check for collision
     * @returns Reference to Enity that is a match for collision, null reference if there is no collision
     */
    static BoxColliderOverlaps(box: BoxCollider, direction: Direction = Direction.Any): Entity {
        let foundObject: Entity;
        ECS._entities.forEach(entity => {
            for(const currComponent in entity.components){
                if (entity.components[currComponent].componentName == "box_collider" && !entity.components[currComponent].isTrigger) {
                    if(Collision.Collide(box, entity.components[currComponent], direction)){
                        foundObject = entity;
                    }
                }
            }
        });
        return foundObject;
    }

    /**
     * Method to Check for Box Overlaps between Trigger Entities
     * @param box The box to check all other Entities against.
     * @param direction The side of the box to check for collision
     * @returns Reference to Enity that is a match for trigger overlap, null reference if there is none found
     */
    static BoxTriggerOverlaps(box: BoxCollider, ignoreId:string, direction: Direction = Direction.Any): Entity {
        let foundObject: Entity;
        ECS._entities.forEach(entity => {
            for(const currComponent in entity.components){
                if (entity.id != ignoreId && entity.components[currComponent].componentName == "box_collider") {
                    if(Collision.Collide(box, entity.components[currComponent], direction)){
                        foundObject = entity;
                    }
                }
            }
        });
        return foundObject;
    }

    /**
     * Alternative Collision method for two BoxCollider Components
     * @param box1 The first object of a collision
     * @param box2 The second object of a collision
     * @param direction The direction in wich the collision occured
     * @returns true if there is a collison, false if not
     */
    static Collide(box1: BoxCollider, box2: BoxCollider, direction:Direction = Direction.Any): boolean
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