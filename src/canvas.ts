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

    public static DEFAULT_WIDTH: number = 300;
    public static DEFAULT_HEIGHT: number = 150;

    public ctx: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;

    // @ts-ignore
    private _path: CanvasPath;

    // @ts-ignore
    private _text: CanvasText;

    // @ts-ignore
    private _font: CanvasFont;

    // @ts-ignore
    private _color: CanvasColor;

    // @ts-ignore
    private _image: CanvasImage;

    // @ts-ignore
    private _filter: CanvasFilter;

    // @ts-ignore
    private _shadow: CanvasShadow;

    // @ts-ignore
    private _line: CanvasLine;

    // @ts-ignore
    private _imageData: CanvasImageData;

    // @ts-ignore
    private _composite: CanvasCompositeOperation;

    // @ts-ignore
    private _transform: CanvasTransform;

    public constructor(atts: {
        id?: string; // optional id of an existing HTMLCanvas element in document
        element?: HTMLCanvasElement; // optional existing HTMLCanvas element in document
        width?: number;
        height?: number;
        alpha?: boolean;
        color?: string; // optional background color
        parent?: HTMLElement; // optional parent HTML element to append the canvas to
    }) {

        // load canvas element into instance
        this.canvas = this.makeCanvas(atts.element, atts.id);

        // load accesible content message to the canvas tag
        this.addAccessibleContent();

        // set width and height
        this.setDimensions(atts.width, atts.height);

        // set optional background color
        if (atts.color) this.backgroundColor(atts.color);

        // alpha ?: boolean;
        this.ctx = this.makeContext(atts.alpha);

        // load all of the class dependencies
        this.loadComponents();

        // optional HTML element to append the canvas to
        if (atts.parent) this.appendTo(atts.parent);

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

    public appendTo(parent: HTMLElement): void {
        parent.appendChild(this.canvas);
    }

    // set background color style on canvas element
    public backgroundColor(color: string): void {
        this.canvas.style.backgroundColor = color;
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

    // only works if available on client device
    public reset(): void {
        if (this.ctx.reset) {
            this.ctx.reset();
            this.font.reset();
            this.color.reset();
            this.filter.reset();
        }
    }

    public opacity(alpha: number): void {
        // clamp alpha [0-1]
        alpha = (alpha < 0) ? 0 : (alpha > 1) ? 1 : alpha;
        if (alpha < 0) alpha = 0;
        this.ctx.globalAlpha = alpha;
    }

    public scaleXY(x: number, y: number): void {
        this.ctx.scale(x, y);
    }

    public scaleBoth(amount: number): void {
        this.ctx.scale(amount, amount);
    }

    // translate normally as per ctx standard (x, y)
    public translate(x: number, y: number): void {
        this.ctx.translate(x, y);
    }

    // translate by a % of width + height [0-1]
    public translateByPercent(x: number, y: number): void {
        // clamp x & y [0-1]
        x = (x < 0) ? 0 : (x > 1) ? 1 : x;
        y = (y < 0) ? 0 : (y > 1) ? 1 : y;
        this.ctx.translate(x * this.width, y * this.height);
    }

    // translate by a % of width + height [0-1]
    public translateByOption(option: tCanvasTranslateOption): void {
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

    public rotateDegrees(degrees: number): void {
        const radians = degrees * Math.PI / 180;
        this.rotate(radians);
    }

    public rotateTurns(turns: number): void {
        const radians = (Math.PI * 2) * turns;
        this.rotate(radians);
    }

    // add message to display to user in place of the missing canvas element
    private addAccessibleContent(): void {
        if (this.canvas) {
            const message = 'Unfortunately your device cannot display the content correctly';
            const p = document.createElement('p');
            p.innerText = message;
            this.canvas.appendChild(p);
        }
    }

    private makeCanvas(element?: HTMLCanvasElement, id?: string): HTMLCanvasElement {
        let canvas: HTMLCanvasElement;
        if (element) canvas = element;
        else if (
            id
            && document.getElementById(id)
            && document.getElementById(id)?.nodeName === 'CANVAS'
        ) { canvas = <HTMLCanvasElement>document.getElementById(id) }
        else canvas = document.createElement('canvas');
        return canvas;
    }

    private setDimensions(width?: number, height?: number): void {
        this.canvas.width = (width) ? width : Canvas.DEFAULT_WIDTH;
        this.canvas.height = (height) ? height : Canvas.DEFAULT_HEIGHT;
    }

    private makeContext(alpha?: boolean): CanvasRenderingContext2D {
        let ctx: CanvasRenderingContext2D;
        if (alpha) ctx = this.canvas.getContext('2d', { alpha: alpha })!;
        else ctx = this.canvas.getContext('2d', { alpha: false })!;
        return ctx;
    }

    private loadComponents(): void {
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

}