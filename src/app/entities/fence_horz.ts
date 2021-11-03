import BoxCollider from "../components/box_collider";
import StageBehavior from "../components/stage_behavior";
import SpriteRenderer from "../components/sprite_renderer";

export default class FenceHorz extends StageBehavior{
    animationSpeed: number;
    constructor(animationSpeed: number = 0.025) {
      super();
      this.animationSpeed = animationSpeed;
      this.name = "Fence Horizontal";
      this.spriteComponents.push(new SpriteRenderer(this.stageBehavior, "fenceHorzTop", 0, 2));
      this.spriteComponents.push(new SpriteRenderer(this.stageBehavior, "fenceHorzBottom", 1, 0));
      this.spriteComponents[1].offset.y = 8;
      this.boxColliderComponents.push(new BoxCollider(this.stageBehavior, 64, 1));
      this.boxColliderComponents[0].offset = {x:0, y:7};
    }

    Start(){
      this.spriteRenderer().sprite.animationSpeed = this.animationSpeed;
      this.spriteRenderer().sprite.play();
    }
}