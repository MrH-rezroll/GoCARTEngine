import StageBehavior from "../components/stage_behavior";
import SpriteTiledRenderer from "../components/sprite_tiled_renderer";
import BoxCollider from "../components/box_collider";

export default class CliffsTop extends StageBehavior{
    constructor() {
      super();
      this.name = "Cliffs Top";
      this.components['spriteTiledRenderer'] = new SpriteTiledRenderer(this.stageBehavior, "cliffsTop", 64, 1000);
      this.boxColliderComponents.push(new BoxCollider(this.stageBehavior, 1000, 48));
    }
}