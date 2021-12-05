import { Component } from "./component";

export default class Interactable extends Component{
    private interaction:string;
    canInteract:boolean;

    constructor(interaction:string){
        super();
        this.componentName = "interactable";
        this.interaction = interaction;
        this.canInteract = false;
    }
    
    public InteractStart():void{
        switch(this.interaction){
            case 'sign': this.signStart();
                break;
            default: break;
        }
    }
    
    public InteractEnd():void{
        switch(this.interaction){
            case 'sign': this.signEnd();
                break;
            default: break;
        }
    }

    private signStart():void {
        window.alert("Start Interaction");
    }

    private signEnd():void {
        window.alert("End Interaction");
    }

}