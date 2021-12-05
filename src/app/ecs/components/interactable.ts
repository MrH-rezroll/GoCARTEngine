import { Component } from "./component";

export default class Interactable extends Component{
    interaction:string;
    canInteract:boolean;
    interactMessage:string;

    constructor(interaction:string, interactMessage:string = ""){
        super();
        this.componentName = "interactable";
        this.interaction = interaction;
        this.canInteract = false;
        this.interactMessage = interactMessage;
    }

}