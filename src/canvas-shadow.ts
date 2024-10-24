/**
 * a cleaner way to implement shadow effect on a canvas 2D context
 */

import AbstractCanvasComponent from "./abstract-canvas-component.js";

export default class CanvasShadow extends AbstractCanvasComponent {

    private props = {
        x: 0,
        y: 0,
        blur: 0,
        color: 'rgba(0,0,0,0)'
    };

    public x(n: number): CanvasShadow {
        this.props.x = n;
        this.update();
        return this;
    }

    public y(n: number): CanvasShadow {
        this.props.y = n;
        this.update();
        return this;
    }

    public blur(n: number): CanvasShadow {
        this.props.blur = n;
        this.update();
        return this;
    }

    public color(c: string): CanvasShadow {
        this.props.color = c;
        this.update();
        return this;
    }

    public reset(): void {
        this.props.x = 0;
        this.props.y = 0;
        this.props.blur = 0;
        this.props.color = 'rgba(0,0,0,0)';
        this.update();
    }

    private update(): void {
        this.ctx.shadowOffsetX = this.props.x;
        this.ctx.shadowOffsetY = this.props.y;
        this.ctx.shadowBlur = this.props.blur;
        this.ctx.shadowColor = this.props.color;
    }

}