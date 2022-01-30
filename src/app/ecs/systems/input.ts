/**
 * System to monitor Player input
 * @version 01.01.22
 * @author MrH-rezroll
 */
export default class Input{
    up: boolean;
    down: boolean;
    left: boolean;
    right: boolean;
    action: boolean;

    private canAction:boolean;

    constructor(){
      this.canAction = true;
        window.onkeydown = (ev: KeyboardEvent): any => {
          switch(ev.key){
            case "w":
              this.up = true;
              break;
            case "s":
              this.down = true;
              break;
            case "a":
              this.left = true;
              break;
            case "d":
              this.right = true;
              break;
              case "e":
                if(this.canAction){this.action = true}
                this.canAction = false;
                break;
            default: break;
          }
        };
        window.onkeyup = (ev: KeyboardEvent): any => {
          switch(ev.key){
            case "w":
              this.up = false;
              break;
            case "s":
              this.down = false;
              break;
            case "a":
              this.left = false;
              break;
            case "d":
              this.right = false;
              break;
              case "e":
                this.canAction = true;
                break;
            default: break;
          }
        };
    }
    
    public LateUpdate():void {
      this.action = false;
    }
}