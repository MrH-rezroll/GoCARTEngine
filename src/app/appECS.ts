
import * as PIXI from 'pixi.js';
import StageObject from './interfaces/stage_object';
import BoxCollider from './components/box_collider';
import SpriteRenderer from './components/sprite_renderer';
import ECS from './ecs/ecs';
import Input from './ecs/systems/input';
import Entity from './ecs/entities/entity';
import { CreatePlayer } from './ecs/entities/player';

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

    let boulder: Entity = ECS.Entity();
    boulder.name = "Boulder";
    boulder.addComponent(new ECS._components['Physics']);
    boulder.addComponent(new ECS._components['SpriteRenderer']("boulder"));
    boulder.addComponent(new ECS._components['BoxCollider'](boulder.components['sprite_renderer'].sprite.transform, 16, 8));
    boulder.components['sprite_renderer'].sprite.x = 64;
    boulder.components['sprite_renderer'].sprite.y = 96;
    boulder.components['sprite_renderer'].sprite.animationSpeed = 0.05;
    boulder.components['sprite_renderer'].sprite.play();
    boulder.components['box_collider'].offset = {x:0, y:0};
    App.Stage.addChild(boulder.components['sprite_renderer'].sprite);
  }

  static Update(delta: number) {
    for (let key of Object.keys(ECS._entities)) {
      let entity = ECS._entities[key];
      if (entity.components != undefined){
        for (let component of Object.keys(entity.components)) {
            if (entity.components[component].Update != undefined) {
                entity.components[component].Update();
            }
        }
      }
    }
  }
}