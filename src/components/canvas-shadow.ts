/**
 * 
 */

import CanvasComponent from "./canvas-component.js";

export default class CanvasShadow extends CanvasComponent {

    // shadowBlur
    // ctx.shadowBlur = 15;
    // min: 0
    public blur(amount: number): void {
        amount = (amount < 0) ? 0 : amount;
        this.ctx.shadowBlur = amount;
    }

    // shadowColor
    public color(color: string): void {
        this.ctx.shadowColor = color;
    }

    // shadowOffsetX
    // can be negative
    public offsetX(offset: number): void {
        this.ctx.shadowOffsetX = offset;
    }

    // shadowOffsetY
    // can be negative
    public offsetY(offset: number): void {
        this.ctx.shadowOffsetY = offset;
    }

}