/**
 * Provides information on interactions between Entities
 * @version 01.01.22
 * @author MrH-rezroll
 */
import { Component } from "./component";

/**
 * Component to designate and Entity as Interactible and provide details of the interactive state
 */
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