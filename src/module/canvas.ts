/**
 * 
 */

export default class Canvas {

    public static HTML_ID: string = 'canvas';
    public static WIDTH: number = window.innerWidth;
    public static HEIGHT: number = window.innerHeight;

    public ctx: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;

    // path(): CanvasPath
    // text(): CanvasText
    // color(): CanvasColor
    // image(): CanvaImage
    // filter(): CanvasFilter
    // shadow(): CanvasShadow
    // line(): CanvasLine
    // imageData(): CanvasImageData
    // composite(): CanvasCompositeOperation
    // transform(): CanvasTransform

    public constructor() {
        this.verifyElementExists();
        this.canvas = <HTMLCanvasElement>document.getElementById(Canvas.HTML_ID);
        this.ctx = this.canvas.getContext('2d')!;
        this.setDimensions();
        this.loadComponents();
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

    // path(): CanvasPath
    // text(): CanvasText
    // color(): CanvasColor
    // image(): CanvaImage
    // filter(): CanvasFilter
    // shadow(): CanvasShadow
    // line(): CanvasLine
    // imageData(): CanvasImageData
    // composite(): CanvasCompositeOperation
    // transform(): CanvasTransform

    //getContextAttributes()
    public get attributes(): {} {
        return {}
    }

    //isContextLost()
    public get isContextLost(): boolean {
        return false;
    }

    // imageSmoothingEnabled
    // imageSmoothingQuality
    public enableSmoothing(quality: string): void {
        console.log(quality);
    }

    public disableSmoothing(): void { }

    // clearRect()
    public clear(): void { }

    // save()
    // restore()
    public save(fn: Function): void {
        fn();
    }

    // reset()
    public reset(): void { }

    // globalAlpha
    public setAlpha(alpha: number): void {
        console.log(alpha);
    }

    // scale()
    public scale(x: number, y: number): void {
        console.log(x, y);
    }

    // translate()
    public translate(x: number, y: number): void {
        console.log(x, y);
    }

    // rotate()
    public rotate(radians: number): void {
        console.log(radians);
    }

    // beginPath()
    // fill()
    public fill(fn: Function): void {
        fn();
    }

    // beginPath()
    // stroke()	
    public stroke(fn: Function): void {
        fn();
    }

    // test that a canvas with id = canvas exists in index.html
    private verifyElementExists(): void {
        if (document.getElementById(Canvas.HTML_ID) === null) {
            throw new Error('the page MUST contain a canvas element with id = canvas to use the Canvas class');
        }
    }

    // setDimensions()
    private setDimensions(): void {
        this.canvas.width = Canvas.WIDTH;
        this.canvas.width = Canvas.HEIGHT;
    }

    // loadComponents()
    private loadComponents(): void {
        // path(): CanvasPath
        // text(): CanvasText
        // color(): CanvasColor
        // image(): CanvaImage
        // filter(): CanvasFilter
        // shadow(): CanvasShadow
        // line(): CanvasLine
        // imageData(): CanvasImageData
        // composite(): CanvasCompositeOperation
        // transform(): CanvasTransform
    }

}