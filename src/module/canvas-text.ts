/**
 * 
 */

import CanvasComponent from "./canvas-component.js";
import CanvasFont from "./canvas-font.js";

export default class CanvasText extends CanvasComponent {

    private _font: CanvasFont;

    public constructor(ctx: CanvasRenderingContext2D) {
        super(ctx);
        this._font = new CanvasFont(ctx);
    }

    // font
    public get font(): CanvasFont {
        return this._font;
    }

    // fillText()
    public fill(): void { }

    // strokeText()
    public stroke(): void { }

    // measureText()
    public measure(): void { }

    // textAlign


    // textBaseline


    // textRendering


    // wordSpacing


    // letterSpacing



    // direction
    public rtl(): void { }
    public ltr(): void { }
    public inherit(): void { }



}