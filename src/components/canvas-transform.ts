/**
 * 
 */

import CanvasComponent from "./canvas-component.js";

export default class CanvasTransform extends CanvasComponent {

    // transform()
    public multiply(a: number, b: number, c: number, d: number, e: number, f: number): void {
        this.ctx.transform(a, b, c, d, e, f);
    }

    // setTransform(a, b, c, d, e, f)
    public update(a: number, b: number, c: number, d: number, e: number, f: number): void {
        this.ctx.setTransform(a, b, c, d, e, f);
    }

    // setTransform(matrix)
    public updateFrom(matrix: DOMMatrix): void {
        this.ctx.setTransform(matrix);
    }

    // getTransform()
    public view(): DOMMatrix {
        return this.ctx.getTransform();
    }

    // resetTransform()
    public reset(): void {
        this.ctx.resetTransform();
    }


}