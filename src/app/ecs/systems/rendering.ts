import ECS from "../ecs";
import System from "./system";
import App from "../../appECS";
import SpriteRenderer from "../components/sprite_renderer";

export default class Rendering extends System{
    systemName = "Rendering";
    
    public SetupSprites(): void {
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
                if(entity.components[currComponent].componentName == "sprite_renderer"){
                    App.containerLayers[entity.components[currComponent].layer].addChild(entity.components[currComponent].sprite);
                }
            }
        });
    }
}