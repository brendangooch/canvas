/**
 * 
 */

export default abstract class AbstractCanvasComponent {
    protected ctx: CanvasRenderingContext2D;
    public init(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
    }
}