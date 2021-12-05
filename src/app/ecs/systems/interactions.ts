import BoxCollider from "../../components/box_collider";
import ECS from "../ecs";
import Entity from "../entities/entity";
import Collision from "./collision";
import System from "./system"

export default class Interactions extends System{
    constructor(){
        super();
        Interactions.systemName = "Interactions";
    }
    
    public Update():void {
        for (let key of Object.keys(ECS._entities)) {
          let entity1 = ECS._entities[key];
          if (entity1.components['interactable'] != undefined){
            for (let key of Object.keys(ECS._entities)) {
              let entity2 = ECS._entities[key];
              if (entity2.components['box_collider'] != undefined){
                let overlapObject:Entity = Collision.BoxTriggerOverlaps(entity1.components['box_collider_1'], entity1.id);
                if(overlapObject != undefined && overlapObject.components['player_control'] != undefined){
                    entity1.components['interactable'].canInteract = true;
                }
                console.log(entity1.components['interactable'].canInteract);
              }
            }
          }
        }
    }

    public LateUpdate(){
        for (let key of Object.keys(ECS._entities)) {
          let entity1 = ECS._entities[key];
          if (entity1.components['interactable'] != undefined){
            entity1.components['interactable'].canInteract = false;
          }
        }
    }
}