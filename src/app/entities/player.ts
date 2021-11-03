import BoxCollider from "../components/box_collider";
import StageBehavior from "../components/stage_behavior";
import EightDirectionCharacterControl from "../components/eight_direction_character_control";
import SpriteRenderer from "../components/sprite_renderer";
import ViewFollow from "../components/view_follow";
import App from "../app";

export default class Player extends StageBehavior{

    constructor() {
      super();
      this.name = "Player";
      this.spriteComponents.push(new SpriteRenderer(this.stageBehavior, "playerIdle", 0, 1));
      this.boxColliderComponents.push(new BoxCollider(this.stageBehavior, 16, 16));
      this.components['platformCharacterControl'] = new EightDirectionCharacterControl(this.stageBehavior);
      this.components['viewFollow'] = new ViewFollow(this.stageBehavior, this.spriteRenderer().sprite);
    }
    public Start(){
      this.transform.position.x = 172;
      this.transform.position.y = 64;
      this.spriteRenderer().sprite.animationSpeed = 0.1;
      this.spriteRenderer().addAnimation('playerMoveNorth');
      this.spriteRenderer().addAnimation('playerMoveSouth');
      this.spriteRenderer().addAnimation('playerMoveEast');
      this.spriteRenderer().addAnimation('playerMoveWest');
    }
    public Update(){
      this.platformCharacterControl().MoveCharacter();
      if(!App.input.down && !App.input.up && !App.input.left && !App.input.right){
        this.spriteRenderer().changeAnimation('playerIdle');
      }
      else if (App.input.up){
        this.spriteRenderer().changeAnimation('playerMoveNorth');
      }
      else if (App.input.down){
        this.spriteRenderer().changeAnimation('playerMoveSouth');
      }
      else if (App.input.left){
        this.spriteRenderer().changeAnimation('playerMoveWest');
      }
      else if (App.input.right){
        this.spriteRenderer().changeAnimation('playerMoveEast');
      }
    }

    public LateUpdate(){
      this.viewFollow().updateFollowPosition();
    }
}