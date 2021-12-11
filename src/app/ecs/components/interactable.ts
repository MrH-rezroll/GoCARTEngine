import { Component } from "./component";

export default class Interactable extends Component{
    interaction:string;
    canInteract:boolean;
    interactionTitle:string;
    interactMessage:string;

    constructor(interaction:string, interactionTitle:string="", interactMessage:string = ""){
        super();
        this.componentName = "interactable";
        this.interaction = interaction;
        this.canInteract = false;
        this.interactionTitle = interactionTitle;
        this.interactMessage = interactMessage;
    }

}