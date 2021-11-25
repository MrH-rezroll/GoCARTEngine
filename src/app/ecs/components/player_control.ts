import { Component } from "./component";

export default class PlayerControl extends Component{
    isSimulated: boolean;
    followOnX: boolean;
    followOnY: boolean;
    speed: number;
    prevPosition: {x:number, y:number};
    constructor(){
        super();
        this.componentName = "player_control";
        this.isSimulated = false;
        this.speed = 0.6;
        this.followOnX = false;
        this.followOnY = false;
    }

    public IsSimulated():boolean{
        return this.isSimulated;
    }
}