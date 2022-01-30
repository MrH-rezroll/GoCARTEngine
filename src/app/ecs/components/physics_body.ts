/**
 * Provides an Entity with infomration that will allow it to participate in a physics engine that is not yet in place.
 * @version 01.01.22
 * @author MrH-rezroll
 */
import Entity from "../entities/entity";
import { Component } from "./component";

/**
 * Provides details for an Entity that will participate in physics
 */
export default class PhysicsBody extends Component{
    private collidingObject: Entity;
    private triggeredObject: Entity;

    constructor(){
        super();
        this.componentName = "physics_body";
    }
}