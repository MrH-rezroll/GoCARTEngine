import { Container, Graphics, BitmapText, Loader, LoaderResource, BitmapFont} from "pixi.js";
import App from "../../app";

export default class MessageLarge{
    private messageWidth:number;
    private messageHeight:number;
    private bitmapTextTitle:BitmapText;
    private bitmapTextBody:BitmapText;
    messageBox: Container;
    showMessageLarge:boolean;

    public constructor(width:number = App._instance.screen.width, height:number = App._instance.screen.height){
        this.messageWidth = width;
        this.messageHeight = height;
        this.showMessageLarge = false;LoaderResource.setExtensionXhrType('fnt', LoaderResource.XHR_RESPONSE_TYPE.TEXT);
        Loader.shared.add('GameBoy', '../../../assets/images/early_gameboy.fnt');
        BitmapFont.from('GameBoy', {});
        this.buildMessageBox();
    }

    public showMessageBox(title:string, body:string):void {
        this.bitmapTextTitle.text = title;
        this.bitmapTextTitle.position.x = this.messageBox.width / 2 - this.bitmapTextTitle.width / 2;
        this.bitmapTextBody.text = body;
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
        box.drawRect(0, 24, this.messageWidth, 1);
        box.drawRect(0, 0, 4, this.messageHeight);
        box.drawRect(this.messageWidth - 4, 0, 4, this.messageHeight );
        box.drawRect(0, this.messageHeight - 4, this.messageWidth, 4);
        box.endFill();
        this.messageBox.addChild(box);
        this.bitmapTextTitle = new BitmapText("Title", {
            fontName: 'GameBoy',
            align: 'center',
            fontSize: 16
        });
        this.bitmapTextTitle.position.x = this.messageBox.width / 2 - this.bitmapTextTitle.width / 2;
        this.bitmapTextTitle.position.y = 5;
        this.bitmapTextTitle.maxWidth = this.messageBox.width;
        this.messageBox.addChild(this.bitmapTextTitle);
        this.bitmapTextBody = new BitmapText("Body", {
            fontName: 'GameBoy',
            fontSize: 12
        });
        this.bitmapTextBody.position.x = 5;
        this.bitmapTextBody.position.y = 26;
        this.bitmapTextBody.maxWidth = this.messageBox.width - 5;
        this.messageBox.addChild(this.bitmapTextBody);
    }
}