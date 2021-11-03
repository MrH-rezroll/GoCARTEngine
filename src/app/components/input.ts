
export default class Input{
    up: boolean;
    down: boolean;
    left: boolean;
    right: boolean;

    constructor(){
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
            default: break;
          }
        };
    }
}