/**
 * 
 */

export default abstract class CanvasComponent {
    // @ts-ignore
    protected ctx: CanvasRenderingContext2D;
    public constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
    }
}