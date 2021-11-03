import { Transform } from "pixi.js";
import StageBehavior from "../components/stage_behavior";
import SpriteRenderer from "../components/sprite_renderer";

export default interface StageObject{
    name: string;
    isActive: boolean;
    tag?: string;
    transform: Transform;
    stageBehavior: StageBehavior;
    Start?(): void;
    Update?(): void;
    LateUpdate?(): void;
    spriteRenderer?(spriteIndex:number): SpriteRenderer;
    spriteRenderers?(): Array<SpriteRenderer>;
}