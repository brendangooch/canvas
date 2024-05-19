/**
 * 
 */

import CanvasColor from "./canvas-color.js";
import CanvasCompositeOperation from "./canvas-composite-operation.js";
import CanvasFilter from "./canvas-filter.js";
import CanvasImageData from "./canvas-image-data.js";
import CanvasImage from "./canvas-image.js";
import CanvasLine from "./canvas-line.js";
import CanvasPath from "./canvas-path.js";
import CanvasShadow from "./canvas-shadow.js";
import CanvasText from "./canvas-text.js";
import CanvasTransform from "./canvas-transform.js";

type tImageSmoothingQuality = 'low' | 'medium' | 'high';

export default class Canvas {

    public static HTML_ID: string = 'canvas';
    public static WIDTH: number = window.innerWidth;
    public static HEIGHT: number = window.innerHeight;

    public ctx: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;
    private _path: CanvasPath;
    private _text: CanvasText;
    private _color: CanvasColor;
    private _image: CanvasImage;
    private _filter: CanvasFilter;
    private _shadow: CanvasShadow;
    private _line: CanvasLine;
    private _imageData: CanvasImageData;
    private _composite: CanvasCompositeOperation;
    private _transform: CanvasTransform;

    public constructor() {
        this.checkElementExists();
        this.canvas = <HTMLCanvasElement>document.getElementById(Canvas.HTML_ID);
        this.ctx = this.canvas.getContext('2d')!;
        this._path = new CanvasPath(this.ctx);
        this._text = new CanvasText(this.ctx);
        this._color = new CanvasColor(this.ctx);
        this._image = new CanvasImage(this.ctx);
        this._filter = new CanvasFilter(this.ctx);
        this._shadow = new CanvasShadow(this.ctx);
        this._line = new CanvasLine(this.ctx);
        this._imageData = new CanvasImageData(this.ctx);
        this._composite = new CanvasCompositeOperation(this.ctx);
        this._transform = new CanvasTransform(this.ctx);
        this.setDimensions();
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

    public get path(): CanvasPath {
        return this._path;
    }

    public get text(): CanvasText {
        return this._text;
    }

    public get color(): CanvasColor {
        return this._color;
    }

    public get image(): CanvasImage {
        return this._image;
    }

    public get filter(): CanvasFilter {
        return this._filter;
    }

    public get shadow(): CanvasShadow {
        return this._shadow;
    }

    public get line(): CanvasLine {
        return this._line;
    }

    public get imageData(): CanvasImageData {
        return this._imageData;
    }

    public get composite(): CanvasCompositeOperation {
        return this._composite;
    }

    public get transform(): CanvasTransform {
        return this._transform;
    }

    public get attributes(): CanvasRenderingContext2DSettings {
        return this.ctx.getContextAttributes();
    }

    public enableSmoothing(quality: tImageSmoothingQuality): void {
        this.ctx.imageSmoothingEnabled = true;
        this.ctx.imageSmoothingQuality = quality;
    }

    public disableSmoothing(): void {
        this.ctx.imageSmoothingEnabled = false;
    }

    public clear(): void {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    public save(fn: Function): void {
        this.ctx.save();
        fn();
        this.ctx.restore();
    }

    public reset(): void {
        this.ctx.reset();
    }

    public setAlpha(alpha: number): void {
        this.ctx.globalAlpha = alpha;
    }

    public scale(x: number, y: number): void {
        this.ctx.scale(x, y);
    }

    public translate(x: number, y: number): void {
        this.ctx.translate(x, y);
    }

    public rotate(radians: number): void {
        this.ctx.rotate(radians);
    }

    // shotcut to this.path.begin + callback + this.path.fill
    public fill(callback: Function): void {
        this.path.begin()
        callback();
        this.path.fill();
    }

    // shotcut to this.path.begin + callback + this.path.stroke
    public stroke(callback: Function): void {
        this.path.begin()
        callback();
        this.path.stroke();
    }

    // test that a canvas with id = canvas exists in index.html
    private checkElementExists(): void {
        if (document.getElementById(Canvas.HTML_ID) === null) {
            throw new Error('the page MUST contain a canvas element with id = canvas to use the Canvas class');
        }
    }

    // setDimensions()
    private setDimensions(): void {
        this.canvas.width = Canvas.WIDTH;
        this.canvas.height = Canvas.HEIGHT;
    }

}