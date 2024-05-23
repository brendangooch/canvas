/**
 * 
 */

import CanvasComponent from "./canvas-component.js";

export default class CanvasLine extends CanvasComponent {

    // set all properties in one command
    public setAll(props: {
        thickness?: number;
        cap?: CanvasLineCap;
        dashPattern?: number[];
        dashOffset?: number;
        join?: CanvasLineJoin;
        miterLimit?: number;
    }): void {
        if (props.thickness) this.thickness(props.thickness);
        if (props.cap) this.cap(props.cap);
        if (props.dashPattern) this.dashPattern(props.dashPattern);
        if (props.dashOffset) this.dashOffset(props.dashOffset);
        if (props.join) this.join(props.join);
        if (props.miterLimit) this.miterLimit(props.miterLimit);
    }

    // lineWidth
    public thickness(units: number): void {
        this.ctx.lineWidth = units;
    }

    // lineWidth = 2
    public thin(): void {
        this.ctx.lineWidth = 2;
    }

    // lineWidth = 10
    public medium(): void {
        this.ctx.lineWidth = 10;
    }

    // lineWidth = 25
    public thick(): void {
        this.ctx.lineWidth = 25;
    }

    public cap(value: CanvasLineCap): void {
        this.ctx.lineCap = value;
    }

    // lineCap = butt
    public buttCap(): void {
        this.cap('butt');
    }

    // lineCap = round
    public roundCap(): void {
        this.cap('round');
    }

    // lineCap = square
    public squareCap(): void {
        this.cap('square');
    }

    public dashPattern(pattern: number[]): void {
        this.ctx.setLineDash(pattern);
    }

    public dashOffset(offset: number): void {
        this.ctx.lineDashOffset = offset;
    }

    // lineDashOffset + setLineDash() convenience method
    public dash(pattern: number[], offset: number = 0): void {
        this.dashPattern(pattern);
        this.dashOffset(offset);
    }

    public join(value: CanvasLineJoin): void {
        this.ctx.lineJoin = value;
    }

    // lineJoin = round
    public roundJoin(): void {
        this.join('round');
    }

    // lineJoin = bevel
    public bevelJoin(): void {
        this.join('bevel');
    }

    // lineJoin = miter (default)
    public miterJoin(): void {
        this.join('miter');
    }

    // miterLimit
    public miterLimit(units: number): void {
        this.ctx.miterLimit = units;
    }

}