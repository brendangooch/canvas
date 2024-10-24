/**
 * 
 */

export default abstract class AbstractCanvasComponent {
    protected ctx: CanvasRenderingContext2D;
    public constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
    }
}