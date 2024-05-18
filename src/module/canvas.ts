/**
 * 
 */

export default class Canvas {

    public static HTML_ID: string = 'canvas';
    public static WIDTH: number = window.innerWidth;
    public static HEIGHT: number = window.innerHeight;

    private canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById(Canvas.HTML_ID);
    public ctx: CanvasRenderingContext2D = this.canvas.getContext('2d')!;

    public constructor() {
        this.canvas.width = Canvas.WIDTH;
        this.canvas.width = Canvas.HEIGHT;
    }

    public get width(): number {
        return this.canvas.width;
    }

    public get height(): number {
        return this.canvas.height;
    }

    public get center(): { x: number; y: number } {
        return {
            x: this.width / 2,
            y: this.height / 2
        };
    }


}