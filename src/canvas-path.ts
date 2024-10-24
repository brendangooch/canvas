/**
 * 
 */

import AbstractCanvasComponent from "./abstract-canvas-component.js";

export default class CanvasPath extends AbstractCanvasComponent {

    public fill(callback: Function): void {
        this.ctx.beginPath();
        callback();
        this.ctx.fill();
    }

    public stroke(callback: Function): void {
        this.ctx.beginPath();
        callback();
        this.ctx.stroke();
    }

    public clip(callback: Function): void {
        this.ctx.beginPath();
        callback();
        this.ctx.clip();
    }

    public line(x1: number, y1: number, x2: number, y2: number): void {
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
    }

    public rectangle(width: number, height: number, radii: number | number[] = 0): void {
        if (this.ctx.roundRect && radii) this.ctx.roundRect(-width / 2, -height / 2, width, height, radii);
        else this.ctx.rect(-width / 2, -height / 2, width, height);
    }

    public circle(radius: number): void {
        this.ctx.arc(0, 0, radius, 0, Math.PI * 2, false);
    }

    public square(length: number, radii: number | number[] = 0): void {
        this.rectangle(length, length, radii);
    }

}