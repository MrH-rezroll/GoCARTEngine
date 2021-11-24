
import * as PIXI from 'pixi.js';
import StageObject from './interfaces/stage_object';
import BoxCollider from './components/box_collider';
import SpriteRenderer from './components/sprite_renderer';
import ECS from './ecs/ecs';
import Input from './ecs/systems/input';
import Entity from './ecs/entities/entity';
import { CreatePlayer } from './ecs/entities/player';
import { CreateBoulder } from './ecs/entities/boulder';
import EightDirectionController from './ecs/systems/eight_direction_controller';
import { CreateTreeElm } from './ecs/entities/tree_elm';

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

    // this is the ticker that runs once per frame, let's call our Update() function
    App._instance.ticker.add((delta) => {
      App.Update(delta);
    });
  }

  static SetupGame() {
    // initial setup of the game state
    this.Stage.removeChildren();
    let player: Entity = CreatePlayer();
    let boulder:Entity = CreateBoulder();
    let treeElm1:Entity = CreateTreeElm();

    for(let rLayer:number = 0; rLayer < SpriteRenderer.totalSpriteLayers; rLayer++){
        App.Stage.addChild(App.containerLayers[rLayer]);
    }

    ECS.InitializeSystems();
    ECS.viewFollow.SetupSpriteToFollow(player.components['sprite_renderer'].sprite);
  }

  static Update(delta: number) {
    ECS.eightDirectionController.Update();
    ECS.viewFollow.Update();
  }
}