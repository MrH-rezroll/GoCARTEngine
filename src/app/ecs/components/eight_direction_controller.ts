import { Transform } from "pixi.js";
import App from "../../appECS";
import { Component } from "./component";
import BoxCollider, { Direction } from "./box_collider";
import Physics from "./physics";

export default class EightDirectionController extends Component {
  isEnabled: boolean = true;
    transform: PIXI.Transform;
    boxCollider: BoxCollider;
    lastHitObject: BoxCollider;
    prevPosition: {x:number, y:number};
    speed: number;

    constructor(transform: Transform, boxCollider: BoxCollider, speed:number = 0.6){
        super();
        this.componentName = "eight_direction_controller";
        this.transform = transform;
        this.boxCollider = boxCollider;
        this.prevPosition = {x:this.transform.position.x, y:this.transform.position.y};
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

    public Update(){
      this.MoveCharacter();
    }

    private moveUpDown(){
      if(App.input.down){
        if(this.transform.position.y < App.mapSize - this.boxCollider.height){
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
        if(this.transform.position.x < App.mapSize - this.boxCollider.width){
          this.transform.position.x += this.speed * App._instance.ticker.deltaTime; 
          if (!this.checkIfCanMove(Direction.Right)){ 
            this.transform.position.x -= this.speed * App._instance.ticker.deltaTime; 
          }
        }
      }
    }

    private checkIfCanMove(direction: Direction): boolean{
      this.lastHitObject = Physics.BoxColliderOverlaps(this.boxCollider, App.ActiveEntities, direction);
      if(this.lastHitObject != null) return false;
      else return true;
    }
}