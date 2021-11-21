import App from "../../appECS";
import BoxCollider, { Direction } from "../components/box_collider";
import Collision from "./collision";
import ECS from "../ecs";
import System from "./system";
import Entity from "../entities/entity";

export default class EightDirectionController extends System {

    constructor(){
        super();
        EightDirectionController.systemName = "eight_direction_controller";
    }

    public MoveCharacter(transform:PIXI.Transform, speed:number, boxCollider:BoxCollider, entity:Entity){
        this.moveUpDown(transform, speed, boxCollider, entity);
        this.moveLeftRight(transform, speed, boxCollider, entity);
    }

    public Update():void{
      for (let key of Object.keys(ECS._entities)) {
        let entity = ECS._entities[key];
        if (entity.components['player_control'] != undefined){
          this.MoveCharacter(entity.components['sprite_renderer'].sprite.transform, entity.components['player_control'].speed, entity.components['box_collider'], entity);
          entity.components['player_control'].prevPosition = entity.components['sprite_renderer'].sprite.transform.position;
        }
      }
    }

    private moveUpDown(transform:PIXI.Transform, speed:number, boxCollider:BoxCollider, entity:Entity){
      if(ECS.input.down){
        if(transform.position.y < App.mapSize - boxCollider.height){
          transform.position.y += speed * App._instance.ticker.deltaTime; 
          if (!this.checkIfCanMove(Direction.Bottom, boxCollider, entity)){ 
            transform.position.y -= speed * App._instance.ticker.deltaTime; 
          }
        }
      }
      if(ECS.input.up){
        if(transform.position.y > 0){
          transform.position.y -= speed * App._instance.ticker.deltaTime; 
          if (!this.checkIfCanMove(Direction.Top, boxCollider, entity)){ 
            transform.position.y += speed * App._instance.ticker.deltaTime; 
          }
        }
      }
    }

    private moveLeftRight(transform:PIXI.Transform, speed:number, boxCollider:BoxCollider, entity:Entity){
      if(ECS.input.left){
        if(transform.position.x > 0){
          transform.position.x -= speed * App._instance.ticker.deltaTime; 
          if (!this.checkIfCanMove(Direction.Left, boxCollider, entity)){ 
            transform.position.x += speed * App._instance.ticker.deltaTime; 
          }
        }
      }
      if(ECS.input.right){
        if(transform.position.x < App.mapSize - boxCollider.width){
          transform.position.x += speed * App._instance.ticker.deltaTime; 
          if (!this.checkIfCanMove(Direction.Right, boxCollider, entity)){ 
            transform.position.x -= speed * App._instance.ticker.deltaTime; 
          }
        }
      }
    }

    private checkIfCanMove(direction: Direction, boxCollider:BoxCollider, entity:Entity): boolean{
      entity.components['box_collider'].lastHitObject = Collision.BoxColliderOverlaps(boxCollider, direction);
      if(entity.components['box_collider'].lastHitObject != null) return false;
      else return true;
    }
}