/**
 * Depricated interface to ensure proper creation of Stage Objects which were replaced by Entities. 
 * If I take it out, everything breaks. This will eventually be removed, or the world of tomorrow will
 * rely on it for some unkown reason.
 * @version 01.01.22
 * @author MrH-rezroll
 */
import { Transform } from "pixi.js";
import SpriteRenderer from "../ecs/components/sprite_renderer";

/**
 * The depricated StageObejct required and optional information
 */
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