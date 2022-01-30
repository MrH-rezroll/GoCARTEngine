/**
 * System to monitor Entities for interactions
 * @version 01.01.22
 * @author MrH-rezroll
 */
import App from "../../app";
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
                //console.log(entity2.components['interactable']);
                this.specificInteraction(entity2.components['interactable'].interaction, entity2.components['interactable'].interactionTitle, entity2.components['interactable'].interactMessage);
              }
            }
          }
        }
    }

    private specificInteraction(interaction:string, interactionTitle:string, interactMessage:string){
        switch(interaction){
            case 'sign': this.signStart(interactionTitle, interactMessage);
                break;
            default: break;
        }
    }

    private setInteractables():void{
      let foundActiveArrow: boolean = false;
        for (let key of Object.keys(ECS._entities)) {
          let entity1 = ECS._entities[key];
          if (entity1.components['interactable'] != undefined){
            for (let key of Object.keys(ECS._entities)) {
              let entity2 = ECS._entities[key];
              if (entity2.components['box_collider'] != undefined){
                let overlapObject:Entity = Collision.BoxTriggerOverlaps(entity1.components['box_collider_1'], entity1.id);
                if(overlapObject != undefined && overlapObject.components['player_control'] != undefined){
                    entity1.components['interactable'].canInteract = true;
                    App.activeArrowSprite.components['sprite_renderer'].sprite.visible = true;
                    App.activeArrowSprite.components['sprite_renderer'].sprite.transform.position.x = entity1.components['sprite_renderer'].sprite.transform.position.x + (entity1.components['sprite_renderer'].sprite.width / 2 - App.activeArrowSprite.components['sprite_renderer'].sprite.width / 2);
                    App.activeArrowSprite.components['sprite_renderer'].sprite.transform.position.y = entity1.components['sprite_renderer'].sprite.transform.position.y - (App.activeArrowSprite.components['sprite_renderer'].sprite.height);
                    foundActiveArrow = true;
                }
              }
            }
          }
        }
        if (!foundActiveArrow){
          App.activeArrowSprite.components['sprite_renderer'].sprite.visible = false;
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

    private signStart(title:string, body:string):void {
      if(!App.messageBoxLarge.showMessageLarge){
        App.messageBoxLarge.showMessageBox(title, body);
      }
      else {
        App.messageBoxLarge.hideMessageBox();
      }
    }
}