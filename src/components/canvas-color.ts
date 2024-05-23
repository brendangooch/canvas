/**
 * 
 */

import CanvasComponent from "./canvas-component.js";

type tCanvasStrokeOrFill = 'stroke' | 'fill';
type tCanvasColorType = string | CanvasGradient | CanvasPattern;
type tCanvasPatternRepitition = 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat';

export default class CanvasColor extends CanvasComponent {

    private gradient: CanvasGradient | null = null;

    // reset color styles back to default (black), set gradient to null
    // (colors would be reset to default when this method gets called but reset here to pass tests)
    public reset(): void {
        this.ctx.fillStyle = '#000000';
        this.ctx.strokeStyle = '#000000';
        this.gradient = null;
    }

    // fillStyle
    public fill(color: tCanvasColorType): void {
        this.gradient = null;
        this.ctx.fillStyle = color;
    }

    // strokeStyle
    public stroke(color: tCanvasColorType): void {
        this.gradient = null;
        this.ctx.strokeStyle = color;
    }

    public change(which: tCanvasStrokeOrFill, color: tCanvasColorType): void {
        if (which === 'fill') this.fill(color);
        else this.stroke(color);
    }

    public linear(x0: number, y0: number, x1: number, y1: number): void {
        this.gradient = this.ctx.createLinearGradient(x0, y0, x1, y1);
    }

    public radial(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): void {
        this.gradient = this.ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
    }

    // startAngle: turns [0-1]
    public conic(startAngle: number, x: number, y: number): void {
        // check it's available on the client
        if (typeof this.ctx.createConicGradient === 'function') {
            this.gradient = this.ctx.createConicGradient(startAngle * Math.PI * 2, x, y);
        }
    }

    public addColorStop(offset: number, color: string): void {
        if (this.gradient) this.gradient.addColorStop(offset, color);
    }

    public applyGradient(which: tCanvasStrokeOrFill): void {
        if (this.gradient) this.change(which, this.gradient);
    }

    // createPattern()
    // only accepts image elements at the moment (other image types available in spec)
    public pattern(which: tCanvasStrokeOrFill, image: HTMLImageElement, repetition: tCanvasPatternRepitition): void {
        const pattern = this.ctx.createPattern(image, repetition);
        if (pattern) {
            this.change(which, pattern);
        }

    }

}

