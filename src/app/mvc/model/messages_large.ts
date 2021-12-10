import { Container, Graphics, Rectangle, BitmapText, Loader } from "pixi.js";
import { GetText } from "../../../assets/loader";
import App from "../../appECS";

export default class MessageLarge{
    private messageBody:string;
    private messageTitle:string;
    private messageWidth:number;
    private messageHeight:number;
    messageBox: Container;
    showMessageLarge:boolean;

    public constructor(width:number = App._instance.screen.width, height:number = App._instance.screen.height){
        this.messageWidth = width;
        this.messageHeight = height;
        this.messageTitle = "Title";
        this.messageBody = "Body";
        this.showMessageLarge = false;
        this.buildMessageBox();
    }

    public SetMessageLargeTitle(title:string):void {
        this.messageTitle = title;
    }

    public SetMessageLargeBody(message:string):void {
        this.messageBody = message;
    }

    public showMessageBox():void {
        this.messageBox.visible = true;
        this.showMessageLarge = true;
    }

    public hideMessageBox():void {
        this.messageBox.visible = false;
        this.showMessageLarge = false;
    }

    private buildMessageBox():void {
        this.messageBox = new Container();
        const box:Graphics = new Graphics();
        box.beginFill(0x8bac0f);
        box.drawRect(0, 0, this.messageWidth, this.messageHeight);
        box.endFill();
        box.beginFill(0x0f380f);
        box.drawRect(0, 0, this.messageWidth, 4);
        box.drawRect(0, 0, 4, this.messageHeight);
        box.drawRect(this.messageWidth - 4, 0, 4, this.messageHeight );
        box.drawRect(0, this.messageHeight - 4, this.messageWidth, 4);
        box.endFill();
        this.messageBox.addChild(box);
        this.messageBox.addChild(GetText("hello pixi"));
    }
}