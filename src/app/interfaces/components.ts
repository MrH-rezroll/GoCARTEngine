import { Transform } from "pixi.js";
import BoxCollider from "../components/box_collider";
import StageBehavior from "../components/stage_behavior";
import EightDirectionCharacterControl from "../components/eight_direction_character_control";
import SpriteRenderer from "../components/sprite_renderer";
import SpriteTiledRenderer from "../components/sprite_tiled_renderer";
import ViewFollow from "../components/view_follow";
import StageObject from "./stage_object";

export interface Component{
    isEnabled: boolean;
    transform: Transform;
    stageObject: StageObject;
    spriteRenderer?(): SpriteRenderer;
    spriteTiledRenderer?(): SpriteTiledRenderer;
    gameBehavior?(): StageBehavior;
    boxCollider?(): BoxCollider;
    eightDirectionCharacterControl?(): EightDirectionCharacterControl;
    viewFollow?(): ViewFollow;
}

export interface Components{
    [key: string]: Component;
}