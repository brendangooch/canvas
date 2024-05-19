/**
 * 
 */

import CanvasComponent from "./canvas-component.js";

export default class CanvasPath extends CanvasComponent {

    public begin(): void {
        this.ctx.beginPath();
    }

    public fill(): void {
        this.ctx.fill();
    }

    // stroke()
    public stroke(): void {
        this.ctx.stroke();
    }

    // closePath()
    // clip()

    // lineTo()
    // moveTo()
    // arcTo()
    // bezierCurveTo()
    // quadraticCurveTo()

    // arc()
    // rect() / roundRect()
    // ellipse()
    // circle()
    // square()

    // isPointInPath()
    // isPointInStroke()


}