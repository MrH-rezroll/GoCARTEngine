import BoxCollider from "../components/box_collider";
import StageBehavior from "../components/stage_behavior";
import SpriteRenderer from "../components/sprite_renderer";

export default class TreeElm extends StageBehavior{
    animationSpeed: number;
    constructor(animationSpeed: number = 0.025) {
      super();
      this.animationSpeed = animationSpeed;
      this.name = "Tree Elm";
      this.spriteComponents.push(new SpriteRenderer(this.stageBehavior, "treeElmTop", 0, 1));
      this.spriteComponents.push(new SpriteRenderer(this.stageBehavior, "treeElmBottom", 1, 0));
      this.spriteComponents[1].offset.y = 32;
      this.boxColliderComponents.push(new BoxCollider(this.stageBehavior, 22, 24));
      this.boxColliderComponents[0].offset = {x:22, y:8};
    }

    Start(){
      this.spriteComponents.forEach(spriteRenderer => {
        spriteRenderer.sprite.animationSpeed = this.animationSpeed;
        spriteRenderer.sprite.play();
      });
    }
}