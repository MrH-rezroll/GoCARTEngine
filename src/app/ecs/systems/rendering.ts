import ECS from "../ecs";
import System from "./system";
import App from "../../app";
import SpriteRenderer from "../components/sprite_renderer";

export default class Rendering extends System{
    systemName = "Rendering";
    
    public SetupSprites(): void {
        this.addTiledBackgrounds();
        this.addSpritesToContainers();
        this.addContainersToStage();
    }

    private addContainersToStage():void{

        for(let rLayer:number = 0; rLayer < SpriteRenderer.totalSpriteLayers; rLayer++){
            App.Stage.addChild(App.containerLayers[rLayer]);
        }
    }

    private addSpritesToContainers():void{
        ECS._entities.forEach(entity => {
            for(const currComponent in entity.components){
                if(entity.components[currComponent] == entity.components['sprite_renderer']){
                    entity.components[currComponent].sprite.x = entity.defaultX;
                    entity.components[currComponent].sprite.y = entity.defaultY;
                }
                if(entity.components[currComponent].componentName == "sprite_renderer"){
                    if(entity.components[currComponent] != entity.components['sprite_renderer']){
                        entity.components[currComponent].sprite.x = entity.components['sprite_renderer'].sprite.x + entity.components[currComponent].offset.x;
                        entity.components[currComponent].sprite.y = entity.components['sprite_renderer'].sprite.y + entity.components[currComponent].offset.y;
                    }
                    entity.components[currComponent].sprite.play();
                    App.containerLayers[entity.components[currComponent].layer].addChild(entity.components[currComponent].sprite);
                }
            }
        });
    }

    private addTiledBackgrounds():void{
        ECS._entities.forEach(entity => {
            for(const currComponent in entity.components){
                if(entity.components[currComponent].componentName == "sprite_tiled_renderer"){
                    App.Stage.addChild(entity.components[currComponent].sprite);
                }
            }
        });
    }
}