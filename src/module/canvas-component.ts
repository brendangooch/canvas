/**
 * 
 */

export default abstract class CanvasComponent {
    // @ts-ignore
    private ctx: CanvasRenderingContext2D;
    public constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
    }
}