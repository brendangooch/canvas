/**
 * 
 */

import AbstractCanvasComponent from "./abstract-canvas-component.js";

export default class CanvasLine extends AbstractCanvasComponent {

    public width(n: number): CanvasLine {
        this.ctx.lineWidth = n;
        return this;
    }

    // dash
    public dash(segments: number[], offset: number = 0): CanvasLine {
        this.ctx.setLineDash(segments);
        this.ctx.lineDashOffset = offset;
        return this;
    }

    // lineCap
    public cap(type: CanvasLineCap): CanvasLine {
        this.ctx.lineCap = type;
        return this;
    }

    // lineJoin
    public join(type: CanvasLineJoin): CanvasLine {
        this.ctx.lineJoin = type;
        return this;
    }


}