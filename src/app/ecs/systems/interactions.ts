import BoxCollider from "../../components/box_collider";
import Interactable from "../components/interactable";
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
        this.setInteractables();
        this.doInteractions();
    }

    public LateUpdate(){
        this.unsetInteractables();
    }

    private doInteractions():void{
        for (let key of Object.keys(ECS._entities)) {
          let entity1 = ECS._entities[key];
          if (entity1.components['player_control'] != undefined && ECS.input.action){
            for (let key of Object.keys(ECS._entities)) {
              let entity2 = ECS._entities[key];
              if (entity2.components['interactable'] != undefined && entity2.components['interactable'].canInteract){
                this.specificInteraction(entity2.components['interactable'].interaction, entity2.components['interactable'].interactMessage);
              }
            }
          }
        }
    }

    private specificInteraction(interaction:string, interactMessage:string){
        switch(interaction){
            case 'sign': this.signStart(interactMessage);
                break;
            default: break;
        }
    }

    private setInteractables():void{
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
              }
            }
          }
        }
    }

    private unsetInteractables():void{
        for (let key of Object.keys(ECS._entities)) {
          let entity1 = ECS._entities[key];
          if (entity1.components['interactable'] != undefined){
            entity1.components['interactable'].canInteract = false;
          }
        }
    }

    private signStart(interactMessage:string):void {
        console.log("Start Interaction: " + interactMessage);
    }
}