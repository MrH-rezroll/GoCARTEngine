
import * as PIXI from 'pixi.js';
import StageObject from './interfaces/stage_object';
import  Player from './entities/player';
import Input from './components/input';
import TreeElm from './entities/tree_elm';
import BoxCollider from './components/box_collider';
import Grass from './entities/grass';
import Boulder from './entities/boulder';
import VilliageHouseSmall from './entities/villiage_house_small';
import SpriteRenderer from './components/sprite_renderer';
import CliffsTop from './entities/cliffs_top';
import PathLargeHorz from './entities/path_large_horz';
import FenceHorz from './entities/fence_horz';
import PathLargeT from './entities/path_large_t';

export default class App {  
  static _instance: PIXI.Application;
  static GameOver: boolean = false;
  static Score: number = 0;
  static Stage: PIXI.Container;
  static GroundPosition = 0;
  static ActiveEntities: Array<StageObject> = [];
  static SolidBoxColliders: Array<BoxCollider> = [];
  static input: Input;
  static resolution: number = 4;
  static mapSize: number = 500;
  static spriteSheet: PIXI.Spritesheet;
  static containerLayers: Array<PIXI.Container>;
  
  constructor(
    parent: HTMLElement,
    width: number,
    height: number,
  ){
    App.containerLayers = new Array<PIXI.Container>();
    for(let i: number = 0; i < SpriteRenderer.totalSpriteLayers; i++){
      App.containerLayers.push(new PIXI.Container());
    }
    App.input = new Input();
    App._instance = new PIXI.Application({
      width,
      height,
      backgroundColor: 0x9bbc0f,
      antialias: false,
      resolution: App.resolution,
  });
    // this scaling mode makes it so that scaled pixels are the
    // same as the nearest neighbor, making it blocky as we want it
    PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
    App.Stage = App._instance.stage;
    
    // Hack for parcel HMR
    parent.replaceChild(App._instance.view, parent.lastElementChild);

    App.SetupGame();
    App.ActiveEntities.forEach(entity => {
      if (entity.Start) entity.Start();
    });

    // this is the ticker that runs once per frame, let's call our Update() function
    App._instance.ticker.add((delta) => {
      App.ActiveEntities.forEach(gameObject => {
        if (gameObject.Update) gameObject.Update();
      });
      App.ActiveEntities.forEach(gameObject => {
        if (gameObject.LateUpdate) gameObject.LateUpdate();
      });
      App.Update(delta);
    });
  }

  static SetupGame() {
    // initial setup of the game state
    this.ActiveEntities = new Array<StageObject>();
    this.Stage.removeChildren();

    let grass = new Grass();
    App.ActiveEntities.push(grass);
    App.Stage.addChild(grass.spriteTiledRenderer().sprite);

    let cliffsTop = new CliffsTop();
    App.ActiveEntities.push(cliffsTop);
    App.Stage.addChild(cliffsTop.spriteTiledRenderer().sprite);

    let pathLageHorz = new PathLargeHorz(64, 1000);
    pathLageHorz.transform.position.y = 196
    App.ActiveEntities.push(pathLageHorz);
    App.Stage.addChild(pathLageHorz.spriteTiledRenderer().sprite);

    let pathLageHorz2 = new PathLargeHorz(64, 48);
    pathLageHorz2.prefabPosition(256, 148);
    pathLageHorz2.spriteTiledRenderer().sprite.angle = 90;
    pathLageHorz2.spriteTiledRenderer().sprite.scale.y = -1;
    App.ActiveEntities.push(pathLageHorz2);
    App.Stage.addChild(pathLageHorz2.spriteTiledRenderer().sprite);

    let pathLargeT = new PathLargeT();
    pathLargeT.prefabPosition(320, 260);
    pathLargeT.spriteRenderer().sprite.angle = 180;
    App.ActiveEntities.push(pathLargeT);

    let boulder1 = new Boulder();
    boulder1.spriteRenderer().sprite.x = 64;
    boulder1.spriteRenderer().sprite.y = 96;
    App.ActiveEntities.push(boulder1);

    let fencHorz1 = new FenceHorz();
    fencHorz1.prefabPosition(72, 192);
    App.ActiveEntities.push(fencHorz1);

    let fencHorz2 = new FenceHorz();
    fencHorz2.prefabPosition(196, 192);
    App.ActiveEntities.push(fencHorz2);

    let fencHorz3 = new FenceHorz();
    fencHorz3.prefabPosition(314, 192);
    App.ActiveEntities.push(fencHorz3);

    let villiageHouseSmall2 = new VilliageHouseSmall();
    villiageHouseSmall2.prefabPosition(148, 126);
    App.ActiveEntities.push(villiageHouseSmall2);

    let player = new Player();
    player.spriteRenderer().sprite.x = 0;
    player.spriteRenderer().sprite.y = 0;
    player.spriteRenderer().sprite.animationSpeed = 0.05;
    player.spriteRenderer().sprite.play();
    App.ActiveEntities.push(player);

    let villiageHouseSmall1 = new VilliageHouseSmall();
    villiageHouseSmall1.prefabPosition(192, 52);
    App.ActiveEntities.push(villiageHouseSmall1);

    let treeElm3 = new TreeElm(-0.025);
    treeElm3.prefabPosition(116, 60);
    App.ActiveEntities.push(treeElm3);

    let treeElm1 = new TreeElm();
    treeElm1.prefabPosition(100, 84);
    App.ActiveEntities.push(treeElm1);

    let treeElm2 = new TreeElm();
    treeElm2.prefabPosition(50, 57);
    App.ActiveEntities.push(treeElm2);

    App.containerLayers.forEach(containerLayer => {
      App.Stage.addChild(containerLayer);
    });
  }

  static Update(delta: number) {
    // simulate game, update entities and world
      // frame is ending, so let's set PressedSpace back to false
    // so that it is the default on the next frame
  }
}