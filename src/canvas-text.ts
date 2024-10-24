/**
 * 
 */

import AbstractCanvasComponent from "./abstract-canvas-component.js";

export default class CanvasText extends AbstractCanvasComponent {

    // fillText()
    public fill(text: string): CanvasText {
        this.ctx.fillText(text, 0, 0);
        return this;
    }

    // strokeText()
    public stroke(text: string): CanvasText {
        this.ctx.strokeText(text, 0, 0);
        return this;
    }

    public align(value: CanvasTextAlign): CanvasText {
        this.ctx.textAlign = value;
        return this;
    }

    public baseline(value: CanvasTextBaseline): CanvasText {
        this.ctx.textBaseline = value;
        return this;
    }

    public rendering(value: CanvasTextRendering): CanvasText {
        this.ctx.textRendering = value;
        return this;
    }

    public wordSpacing(amount: number): CanvasText {
        this.ctx.wordSpacing = `${amount}px`;
        return this;
    }

    public letterSpacing(amount: number): CanvasText {
        this.ctx.letterSpacing = `${amount}px`;
        return this;
    }

    public direction(value: CanvasDirection): CanvasText {
        this.ctx.direction = value;
        return this;
    }

    public measure(text: string): TextMetrics {
        return this.ctx.measureText(text);
    }

}