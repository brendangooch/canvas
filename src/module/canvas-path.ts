/**
 * 
 */

import CanvasComponent from "./canvas-component.js";

export default class CanvasPath extends CanvasComponent {

    public begin(): void {
        this.ctx.beginPath();
    }

    // non-zero
    public fill(): void {
        this.ctx.fill();
    }

    // even-odd
    public fill2(): void {
        this.ctx.fill('evenodd');
    }

    // stroke()
    public stroke(): void {
        this.ctx.stroke();
    }

    // closePath()
    public close(): void {
        this.ctx.closePath();
    }

    // non-zero
    public clip(): void {
        this.ctx.clip();
    }

    // even-odd
    public clip2(): void {
        this.ctx.clip('evenodd');
    }

    // moveTo()
    public moveTo(x: number, y: number): void {
        this.ctx.moveTo(x, y);
    }

    // lineTo()
    public lineTo(x: number, y: number): void {
        this.ctx.lineTo(x, y);
    }

    // arcTo()
    public arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void {
        this.ctx.arcTo(x1, y1, x2, y2, radius);
    }

    // bezierCurveTo()
    public bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void {
        this.ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
    }

    // quadraticCurveTo()
    public quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void {
        this.ctx.quadraticCurveTo(cpx, cpy, x, y);
    }

    // line convenience method
    public line(x1: number, y1: number, x2: number, y2: number): void {
        this.moveTo(x1, y1);
        this.lineTo(x2, y2);
    }

    // arc()
    public arc(radius: number, startAngle: number, endAngle: number, counterclockwise: boolean = false): void {
        this.ctx.arc(0, 0, radius, startAngle, endAngle, counterclockwise);
    }

    // rect() / roundRect()
    public rect(width: number, height: number, radii: number | number[] = 0): void {
        // roundRect available
        if (typeof this.ctx.roundRect === 'function') {
            this.ctx.roundRect(-width / 2, -height / 2, width, height, radii);
        }
        else {
            this.ctx.rect(-width / 2, -height / 2, width, height);
        }
    }

    // ellipse()
    public ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, counterclockwise: boolean = false): void {
        this.ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise);
    }

    // create a complete circle
    public circle(radius: number): void {
        this.arc(radius, 0, Math.PI * 2);
    }

    // create a square
    public square(length: number, radii: number | number[] = 0): void {
        this.rect(length, length, radii);
    }

    // non-zero
    public isPointInPath(x: number, y: number): boolean {
        return this.ctx.isPointInPath(x, y);
    }

    // even-odd
    public isPointInPath2(x: number, y: number): boolean {
        return this.ctx.isPointInPath(x, y, 'evenodd');
    }

    public isPointInStroke(x: number, y: number): boolean {
        return this.ctx.isPointInStroke(x, y);
    }

}