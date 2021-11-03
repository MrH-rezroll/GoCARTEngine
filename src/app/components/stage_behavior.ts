import StageObject from "../interfaces/stage_object";
import { Transform } from "pixi.js";
import { Components } from "../interfaces/components";
import SpriteRenderer from "./sprite_renderer";
import BoxCollider from "./box_collider";

export default abstract class StageBehavior implements StageObject{
  name: string;
  isActive: boolean = true;
  tag: string;
  transform: Transform;
  stageBehavior: StageBehavior;
  components: Components = {};
  spriteComponents: Array<SpriteRenderer> = [];
  boxColliderComponents: Array<BoxCollider> = [];
  public constructor(name: string = 'New Game Object'){
    this.transform = new Transform();
    this.name = name;
    this.stageBehavior = this;
  }

  public prefabPosition(x: number, y: number){
    this.transform.position.x = x;
    this.transform.position.y = y;
    if(this.spriteComponents.length > 0){
      for(let i:number = 1; i < this.spriteComponents.length; i++){
        this.spriteComponents[i].sprite.x = x + this.spriteComponents[i].offset.x;
        this.spriteComponents[i].sprite.y = y + this.spriteComponents[i].offset.y;
      }
    }
  }
  
  public spriteRenderer(spriteIndex:number = 0){
    if(this.spriteComponents.length > 0){
      return(this.spriteComponents[spriteIndex].spriteRenderer());
    }
    return null;
  }

  public spriteRenderers(): Array<SpriteRenderer> {
    return this.spriteComponents;
  }
  
  public spriteTiledRenderer(){
    if(this.components['spriteTiledRenderer']){
      return(this.components['spriteTiledRenderer'].spriteTiledRenderer());
    }
    return null;
  }
  
  public platformCharacterControl(){
    if(this.components['platformCharacterControl']){
      return(this.components['platformCharacterControl'].eightDirectionCharacterControl());
    }
    return null;
  }
  
  public boxCollider(boxIndex: number = 0){
    if(this.boxColliderComponents.length > 0){
      return(this.boxColliderComponents[boxIndex]);
    }
    return null;
  }
  
  public viewFollow(){
    if(this.components['viewFollow']){
      return(this.components['viewFollow'].viewFollow());
    }
    return null;
  }
}