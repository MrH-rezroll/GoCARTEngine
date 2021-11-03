import BoxCollider from "../components/box_collider";
import StageBehavior from "../components/stage_behavior";
import SpriteRenderer from "../components/sprite_renderer";

export default class Boulder extends StageBehavior{
    animationSpeed: number;
    constructor(animationSpeed: number = 0.025) {
      super();
      this.animationSpeed = animationSpeed;
      this.name = "Boulder";
      this.spriteComponents.push(new SpriteRenderer(this.stageBehavior, "boulder", 0, 0));
      this.boxColliderComponents.push(new BoxCollider(this.stageBehavior, 16, 8));
      this.boxColliderComponents[0].offset = {x:0, y:0};
    }

    Start(){
      this.spriteRenderer().sprite.animationSpeed = this.animationSpeed;
      this.spriteRenderer().sprite.play();
    }
}