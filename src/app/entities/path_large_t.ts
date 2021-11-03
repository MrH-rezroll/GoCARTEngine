import BoxCollider from "../components/box_collider";
import StageBehavior from "../components/stage_behavior";
import SpriteRenderer from "../components/sprite_renderer";

export default class PathLargeT extends StageBehavior{
    animationSpeed: number;
    constructor(animationSpeed: number = 0.025) {
      super();
      this.animationSpeed = animationSpeed;
      this.name = "Path Large T Section";
      this.spriteComponents.push(new SpriteRenderer(this.stageBehavior, "pathLargeT", 0, 0));
    }

    Start(){
      this.spriteRenderer().sprite.animationSpeed = this.animationSpeed;
      this.spriteRenderer().sprite.play();
    }
}