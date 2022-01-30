
import * as PIXI from 'pixi.js';
import StageObject from './interfaces/stage_object';
import BoxCollider from './ecs/components/box_collider';
import SpriteRenderer from './ecs/components/sprite_renderer';
import ECS from './ecs/ecs';
import Input from './ecs/systems/input';
import Entity from './ecs/entities/entity';
import { CreatePlayer } from './ecs/entities/player';
import { CreateBoulder } from './ecs/entities/boulder';
import { CreateTreeElm } from './ecs/entities/tree_elm';
import { CreateHouseSmall } from './ecs/entities/house_small';
import { CreateGrass } from './ecs/entities/grass';
import { CreateSign } from './ecs/entities/sign';
import MessageLarge from './mvc/model/messages_large';
import { CreateActiveArrow } from './ecs/entities/active_arrow';
import { CreatePathLargeHorz } from './ecs/entities/path_large_horz';
import { CreateFenceHorz } from './ecs/entities/fence_horz';
import { CreateCliffsTop } from './ecs/entities/cliffs_top';

export default class App {  
  static _instance: PIXI.Application;
  static GameOver: boolean = false;
  static Score: number = 0;
  static Stage: PIXI.Container;
  static GroundPosition = 0;
  static ActiveEntities: Array<StageObject> = [];
  static SolidBoxColliders: Array<BoxCollider> = [];
  static input: Input;
  static resolution: number = 3;
  static mapSize: number = 500;
  static spriteSheet: PIXI.Spritesheet;
  static containerLayers: Array<PIXI.Container>;
  static uiContainer: PIXI.Container;
  static messageBoxLarge: MessageLarge;
  static activeArrowSprite: Entity;
  static stageScrollX: number;
  static stageScrollY: number;
  
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
      App.uiContainer.position.y = -App.Stage.position.y;
      App.uiContainer.position.x = -App.Stage.position.x;
      App.LateUpdate(delta);
    });
  }

  static SetupGame() {
    // initial setup of the game state
    this.Stage.removeChildren();
    let player: Entity = CreatePlayer("Player");
    App.activeArrowSprite = CreateActiveArrow("Active Arrow", 16, 16);
    let boulder:Entity = CreateBoulder("Boulder Small 1", 132, 56);
    let sign1:Entity = CreateSign("Sign 1", 15, 64, "Sign A", "I'm a sign. I have possibly \nuseful information.");
    let sign2:Entity = CreateSign("Sign 2", 96, 64, "Sign B", "The first sign likely had \nmore useful information.");
    let treeElm1:Entity = CreateTreeElm("Tree Elm 1", 32, 32);
    let treeElm2:Entity = CreateTreeElm("Tree Elm 2", 232, 16);
    let treeElm3:Entity = CreateTreeElm("Tree Elm 3", 48, 8);
    let houseSmall1:Entity = CreateHouseSmall("House Small 1", 172, 12);
    let fence1:Entity = CreateFenceHorz("Fence Horz", 132, 112);
    let fence2:Entity = CreateFenceHorz("Fence Horz", 256, 64);
    let grass:Entity = CreateGrass("Grass", 1000, 1000);
    let path1:Entity = CreatePathLargeHorz("Large Path 1", 64, 1000, 0, 68);
    let cliffs:Entity = CreateCliffsTop("Cliffs", 48, 1000, 0, -32);

    ECS.InitializeSystems();
    ECS.viewFollow.SetupSpriteToFollow(player.components['sprite_renderer'].sprite);
    ECS.rendering.SetupSprites();

    App.uiContainer = new PIXI.Container();
    App.messageBoxLarge = new MessageLarge();
    App.uiContainer.addChild(this.messageBoxLarge.messageBox);
    App.Stage.addChild(this.uiContainer);
    App.messageBoxLarge.hideMessageBox();
    App.stageScrollX = 0;
    App.stageScrollY = 0;
  }

  static Update(delta: number) {
    ECS.eightDirectionController.Update();
    ECS.animation.Update();
    ECS.viewFollow.Update();
    ECS.interactions.Update();
  }

  static LateUpdate(delta: number) {
    ECS.interactions.LateUpdate();
    ECS.input.LateUpdate();
  }
}