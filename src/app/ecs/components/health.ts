/**
 * Provides information about the health of an Entity
 * @version 01.01.22
 * @author MrH-rezroll
 */
import { Component } from "./component";

/**
 * Component providing basic health properties
 */
export default class Health extends Component{
    value: number;
    
    constructor(value: number = 100){
        super();
        this.componentName = "health";
        this.value = value;
    }
}