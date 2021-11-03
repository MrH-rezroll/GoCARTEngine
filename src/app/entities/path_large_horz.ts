import StageBehavior from "../components/stage_behavior";
import SpriteTiledRenderer from "../components/sprite_tiled_renderer";
import BoxCollider from "../components/box_collider";

export default class PathLargeHorz extends StageBehavior{
    constructor(height: number, width: number) {
      super();
      this.name = "Path Larg Horz";
      this.components['spriteTiledRenderer'] = new SpriteTiledRenderer(this.stageBehavior, "pathLargeHorz", height, width);
    }
}