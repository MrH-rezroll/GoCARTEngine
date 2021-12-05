import ECS from "../ecs";
import System from "./system"

export default class Physics extends System{
    constructor(){
        super();
        Physics.systemName = "Physics";
    }
    
    public Update():void {
        //TODO: Physics Stuff
    }
}