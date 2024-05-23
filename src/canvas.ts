/**
 * 
 */

import CanvasColor from "./components/canvas-color.js";
import CanvasCompositeOperation from "./components/canvas-composite-operation.js";
import CanvasFilter from "./components/canvas-filter.js";
import CanvasFont from "./components/canvas-font.js";
import CanvasImageData from "./components/canvas-image-data.js";
import CanvasImage from "./components/canvas-image.js";
import CanvasLine from "./components/canvas-line.js";
import CanvasPath from "./components/canvas-path.js";
import CanvasShadow from "./components/canvas-shadow.js";
import CanvasText from "./components/canvas-text.js";
import CanvasTransform from "./components/canvas-transform.js";

type tImageSmoothingQuality = 'low' | 'medium' | 'high';
type tCanvasTranslateOption = 'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export default class Canvas {

    public static WIDTH: number = 300; // chrome default
    public static HEIGHT: number = 150; // chrome default

    public ctx: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;

    private _path: CanvasPath;
    private _text: CanvasText;
    private _font: CanvasFont;
    private _color: CanvasColor;
    private _image: CanvasImage;
    private _filter: CanvasFilter;
    private _shadow: CanvasShadow;
    private _line: CanvasLine;
    private _imageData: CanvasImageData;
    private _composite: CanvasCompositeOperation;
    private _transform: CanvasTransform;

    public constructor(id: string | null = null) {
        this.canvas = this.loadCanvas(id);
        this.ctx = this.canvas.getContext('2d')!;
        this.setCanvasDimensions();
        this._path = new CanvasPath(this.ctx);
        this._text = new CanvasText(this.ctx);
        this._font = new CanvasFont(this.ctx);
        this._color = new CanvasColor(this.ctx);
        this._image = new CanvasImage(this.ctx);
        this._filter = new CanvasFilter(this.ctx);
        this._shadow = new CanvasShadow(this.ctx);
        this._line = new CanvasLine(this.ctx);
        this._imageData = new CanvasImageData(this.ctx);
        this._composite = new CanvasCompositeOperation(this.ctx);
        this._transform = new CanvasTransform(this.ctx);
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

    public get font(): CanvasFont {
        return this._font;
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

    // low | medium | high
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

    // font and color components store internal state
    public save(fn: Function): void {
        this.ctx.save();
        fn();
        this.ctx.restore();
        this.font.reset();
        this.color.reset();
        this.filter.reset();
    }

    // font and color components store internal state
    // resetting filter sets ctx.filter to default 'none' (to help pass tests)
    // ctx state is NOT reset if ctx.reset is not available on the client
    public reset(): void {
        if (typeof this.ctx.reset === 'function') {
            this.ctx.reset();
        }
        this.font.reset();
        this.color.reset();
        this.filter.reset();
    }

    public setOpacity(alpha: number): void {
        if (alpha < 0) alpha = 0;
        this.ctx.globalAlpha = alpha;
    }

    // accepts either standard x,y OR x can represent both scales
    public scale(xOrBoth: number, y: number | null = null): void {
        if (typeof xOrBoth === "number" && typeof y === "number") this.ctx.scale(xOrBoth, y);
        else this.ctx.scale(xOrBoth, xOrBoth);
    }

    // translate normally as per ctx standard (x, y)
    public translate(x: number, y: number): void {
        this.ctx.translate(x, y);
    }

    // translate by a % of width + height [0-1]
    public translateByPercent(x: number, y: number): void {
        this.ctx.translate(x * this.width, y * this.height);
    }

    // translate by a % of width + height [0-1]
    public translateToPosition(option: tCanvasTranslateOption): void {
        switch (option) {
            case 'center':
                this.ctx.translate(this.center.x, this.center.y);
                break;
            case 'top':
                this.ctx.translate(this.center.x, 0);
                break;
            case 'bottom':
                this.ctx.translate(this.center.x, this.height);
                break;
            // 'left'
            case 'left':
                this.ctx.translate(0, this.center.y);
                break;
            // 'right'
            case 'right':
                this.ctx.translate(this.width, this.center.y);
                break;
            // 'top-left'
            case 'top-left':
                this.ctx.translate(0, 0);
                break;
            // 'top-right'
            case 'top-right':
                this.ctx.translate(this.width, 0);
                break;
            // 'bottom-left'
            case 'bottom-left':
                this.ctx.translate(0, this.height);
                break;
            // 'bottom-right'
            case 'bottom-right':
                this.ctx.translate(this.width, this.height);
                break;
        }
    }

    public rotate(radians: number): void {
        this.ctx.rotate(radians);
    }

    // load an html canvas into this.canvas property
    private loadCanvas(id: string | null): HTMLCanvasElement {
        if (this.htmlElementExists(id) && id) {
            return <HTMLCanvasElement>document.getElementById(id);
        }
        else {
            return document.createElement('canvas');
        }
    }

    // test that a canvas with id = canvas exists in index.html
    private htmlElementExists(id: string | null): boolean {
        if (!id) {
            return false;
        }
        return document.getElementById(id) !== null;
    }

    // setDimensions()
    private setCanvasDimensions(): void {
        this.canvas.width = Canvas.WIDTH;
        this.canvas.height = Canvas.HEIGHT;
    }



}