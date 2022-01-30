import { Transform } from "pixi.js";
import SpriteRenderer from "../ecs/components/sprite_renderer";

export default interface StageObject{
    name: string;
    isActive: boolean;
    tag?: string;
    transform: Transform;
    Start?(): void;
    Update?(): void;
    LateUpdate?(): void;
    spriteRenderer?(spriteIndex:number): SpriteRenderer;
    spriteRenderers?(): Array<SpriteRenderer>;
}