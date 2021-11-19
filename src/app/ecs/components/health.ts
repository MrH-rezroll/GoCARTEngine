import { Component } from "./component";

export default class Health extends Component{
    value: number;
    
    constructor(value: number = 100){
        super();
        this.componentName = "health";
        this.value = value;
    }
}