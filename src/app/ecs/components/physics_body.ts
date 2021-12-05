import Entity from "../entities/entity";
import { Component } from "./component";

export default class PhysicsBody extends Component{
    private collidingObject: Entity;
    private triggeredObject: Entity;

    constructor(){
        super();
        this.componentName = "physics_body";
    }
}