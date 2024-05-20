/**
 * 
 */

import CanvasComponent from "./canvas-component.js";

export default class CanvasLine extends CanvasComponent {

    // reset to default line settings
    public reset(): void {
        this.defaultWidth();
        this.defaultCap();
        this.defaultJoin();
        this.defaultMiterLimit();
        this.clearDash();

    }

    // lineWidth = 1
    public defaultWidth(): void {
        this.ctx.lineWidth = 1;
    }

    // lineWidth
    public setWidth(units: number): void {
        this.ctx.lineWidth = units;
    }

    // lineWidth = 1
    public thinnest(): void {
        this.ctx.lineWidth = 0.5;
    }

    // lineWidth = 1
    public thin(): void {
        this.ctx.lineWidth = 1;
    }

    // lineWidth = 5
    public medium(): void {
        this.ctx.lineWidth = 5;
    }

    // lineWidth = 10
    public thick(): void {
        this.ctx.lineWidth = 10;
    }

    // lineWidth = 25
    public thickest(): void {
        this.ctx.lineWidth = 10;
    }


    // lineCap = default = ??
    public defaultCap(): void {
        this.ctx.lineCap = 'butt';
    }

    // lineCap = butt
    public buttCap(): void {
        this.defaultCap();
    }

    // lineCap = round
    public roundCap(): void {
        this.ctx.lineCap = 'round';
    }

    // lineCap = square
    public squareCap(): void {
        this.ctx.lineCap = 'square';
    }

    // lineDashOffset + setLineDash()
    public setDash(pattern: number[], offset: number = 0): void {
        this.ctx.setLineDash(pattern);
        this.ctx.lineDashOffset = offset;
    }

    // lineDashOffset + setLineDash()
    public clearDash(): void {
        this.ctx.setLineDash([]);
        this.ctx.lineDashOffset = 0;
    }

    // lineJoin = miter
    public defaultJoin(): void {
        this.ctx.lineJoin = 'miter';
    }

    // lineJoin = round
    public roundJoin(): void {
        this.ctx.lineJoin = 'round';
    }

    // lineJoin = bevel
    public bevelJoin(): void {
        this.ctx.lineJoin = 'bevel';
    }

    // lineJoin = miter
    public miterJoin(): void {
        this.defaultJoin();
    }

    // miterLimit = ??
    public defaultMiterLimit(): void {
        this.ctx.miterLimit = 10;
    }

    // miterLimit
    public setMiterLimit(units: number): void {
        this.ctx.miterLimit = units;
    }



}