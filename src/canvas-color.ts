/**
 * 
 */

import AbstractCanvasComponent from "./abstract-canvas-component.js";

export default class CanvasColor extends AbstractCanvasComponent {

    public fill(color: string): void {
        this.ctx.fillStyle = color;
    }

    public stroke(color: string): void {
        this.ctx.strokeStyle = color;
    }

    public both(color: string): void {
        this.fill(color);
        this.stroke(color);
    }

}