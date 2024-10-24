/**
 * 
 */

import AbstractCanvasComponent from "./abstract-canvas-component.js";

export default class CanvasLine extends AbstractCanvasComponent {

    public thickness(n: number): void {
        this.ctx.lineWidth = n;
    }

}