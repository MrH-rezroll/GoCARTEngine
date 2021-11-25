import { Component } from "./component";

export default class PlayerControl extends Component{
    private isSimulated: boolean;
    followOnX: boolean;
    followOnY: boolean;
    speed: number;
    prevPosition: {x:number, y:number};
    constructor(){
        super();
        this.componentName = "player_control";
        this.isSimulated = true;
        this.speed = 0.6;
        this.followOnX = false;
        this.followOnY = false;
    }

    public GetIsSimulated():boolean{
        return this.isSimulated;
    }

    public SetIsSimulated(value:boolean):void{
        this.isSimulated = value;
    }
}