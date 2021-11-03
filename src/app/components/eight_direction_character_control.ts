import App from "../app";
import { Component } from "../interfaces/components";
import StageObject from "../interfaces/stage_object";
import BoxCollider, { Direction } from "./box_collider";
import StageBehavior from "./stage_behavior";
import Physics from "./physics";

export default class EightDirectionCharacterControl implements Component {
  isEnabled: boolean = true;
    transform: PIXI.Transform;
    stageObject: StageBehavior;
    lastHitObject: BoxCollider;
    prevPosition: {x:number, y:number};
    speed: number;

    constructor(stageObject: StageObject, speed:number = 0.6){
        this.transform = stageObject.transform;
        this.prevPosition = {x:this.transform.position.x, y:this.transform.position.y};
        this.stageObject = stageObject.stageBehavior;
        this.speed = speed;
    }

    public setSpeed(speed:number):void{
      this.speed = speed;
    }

    public MoveCharacter(){
        this.moveUpDown();
        this.moveLeftRight();
        this.prevPosition = this.transform.position;
    }

    private moveUpDown(){
      if(App.input.down){
        if(this.transform.position.y < App.mapSize - this.stageObject.boxCollider().height){
          this.transform.position.y += this.speed * App._instance.ticker.deltaTime; 
          if (!this.checkIfCanMove(Direction.Bottom)){ 
            this.transform.position.y -= this.speed * App._instance.ticker.deltaTime; 
          }
        }
      }
      if(App.input.up){
        if(this.transform.position.y > 0){
          this.transform.position.y -= this.speed * App._instance.ticker.deltaTime; 
          if (!this.checkIfCanMove(Direction.Top)){ 
            this.transform.position.y += this.speed * App._instance.ticker.deltaTime; 
          }
        }
      }
    }

    private moveLeftRight(){
      if(App.input.left){
        if(this.transform.position.x > 0){
          this.transform.position.x -= this.speed * App._instance.ticker.deltaTime; 
          if (!this.checkIfCanMove(Direction.Left)){ 
            this.transform.position.x += this.speed * App._instance.ticker.deltaTime; 
          }
        }
      }
      if(App.input.right){
        if(this.transform.position.x < App.mapSize - this.stageObject.boxCollider().width){
          this.transform.position.x += this.speed * App._instance.ticker.deltaTime; 
          if (!this.checkIfCanMove(Direction.Right)){ 
            this.transform.position.x -= this.speed * App._instance.ticker.deltaTime; 
          }
        }
      }
    }

    private checkIfCanMove(direction: Direction): boolean{
      this.lastHitObject = Physics.BoxColliderOverlaps(this.stageObject.boxCollider(), App.ActiveEntities, direction);
      if(this.lastHitObject != null) return false;
      else return true;
    }

    eightDirectionCharacterControl(): EightDirectionCharacterControl{
        return this;
    }
}