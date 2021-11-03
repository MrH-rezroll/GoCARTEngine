import StageBehavior from "../components/stage_behavior";
import SpriteTiledRenderer from "../components/sprite_tiled_renderer";

export default class Grass extends StageBehavior{
    constructor() {
      super();
      this.name = "Grass Background";
      this.components['spriteTiledRenderer'] = new SpriteTiledRenderer(this.stageBehavior, "grass", 1000, 1000);
    }
}