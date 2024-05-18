/**
 * 
 */

export default class Canvas {

    public static HTML_ID: string = 'canvas';
    public static WIDTH: number = window.innerWidth;
    public static HEIGHT: number = window.innerHeight;

    private canvas: HTMLCanvasElement;
    public ctx: CanvasRenderingContext2D;

    public constructor() {
        this.verifyElementExists();
        this.canvas = <HTMLCanvasElement>document.getElementById(Canvas.HTML_ID);
        this.ctx = this.canvas.getContext('2d')!;
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

    // test that a canvas with id = canvas exists in index.html
    private verifyElementExists(): void {
        if (document.getElementById(Canvas.HTML_ID) === null) {
            throw new Error('the page MUST contain a canvas element with id = canvas to use the Canvas class');
        }
    }

}