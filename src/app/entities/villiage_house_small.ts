import BoxCollider from "../components/box_collider";
import StageBehavior from "../components/stage_behavior";
import SpriteRenderer from "../components/sprite_renderer";

export default class VilliageHouseSmall extends StageBehavior{
    animationSpeed: number;
    constructor(animationSpeed: number = 0.025) {
      super();
      this.animationSpeed = animationSpeed;
      this.name = "Villiage House Small";
      this.spriteComponents.push(new SpriteRenderer(this.stageBehavior, "villiageHouseSmallTop", 0, 2));
      this.spriteComponents.push(new SpriteRenderer(this.stageBehavior, "villiageHouseSmallBottom", 1, 0));
      this.spriteComponents[1].offset.y = 50;
      this.boxColliderComponents.push(new BoxCollider(this.stageBehavior, 7, 36));
      this.boxColliderComponents[0].offset = {x:4, y:14};
      this.boxColliderComponents.push(new BoxCollider(this.stageBehavior, 32, 36));
      this.boxColliderComponents[1].offset = {x:28, y:14};
      this.boxColliderComponents.push(new BoxCollider(this.stageBehavior, 24, 18));
      this.boxColliderComponents[2].offset = {x:4, y:14};
    }

    Start(){
      this.spriteRenderer().sprite.animationSpeed = this.animationSpeed;
      this.spriteRenderer().sprite.play();
    }
}