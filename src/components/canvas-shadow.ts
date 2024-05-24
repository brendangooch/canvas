/**
 * 
 */

import CanvasComponent from "./canvas-component.js";

export default class CanvasShadow extends CanvasComponent {

    public setAll(props: {
        x?: number;
        y?: number;
        blur?: number;
        color?: string
    }): void {
        if (props.x) this.offsetX(props.x);
        if (props.y) this.offsetY(props.y);
        if (props.blur) this.blur(props.blur);
        if (props.color) this.color(props.color);
    }

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