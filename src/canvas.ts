/**
 * a nicer implementation of the html canvas api
 */

import { clamp } from '@brendangooch/maths';
import CanvasColor from "./canvas-color.js";
import CanvasLine from './canvas-line.js';
import CanvasPath from "./canvas-path.js";
import CanvasFont from "./canvas-font.js";
import CanvasText from "./canvas-text.js";
import CanvasImage from "./canvas-image.js";
import CanvasFilter from "./canvas-filter.js";


export class Canvas {

    public static ALPHA_ENABLED: boolean = true;
    public static SMOOTHING_ENABLED: boolean = false;
    public static SMOOTHING_QUALITY: ImageSmoothingQuality = 'medium';
    public static ACCESSIBLE_CONTENT_ENABLED: boolean = true;

    public ctx: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;

    private _color: CanvasColor;
    private _line: CanvasLine;
    private _path: CanvasPath;
    private _font: CanvasFont;
    private _text: CanvasText;
    private _image: CanvasImage;
    private _filter: CanvasFilter;

    public constructor(width: number, height: number, id: string = 'canvas') {
        if (document.getElementById(id) === undefined) throw new Error(`no canvas element with id="${id} exists in your html file"`);
        this.canvas = <HTMLCanvasElement>document.getElementById(id);
        if (Canvas.ALPHA_ENABLED) this.ctx = this.canvas.getContext('2d', { alpha: true })!;
        else this.ctx = this.canvas.getContext('2d', { alpha: false })!;
        this.canvas.width = width;
        this.canvas.height = height;
        if (Canvas.SMOOTHING_ENABLED) this.enableSmoothing(Canvas.SMOOTHING_QUALITY);
        else this.disableSmoothing();
        if (Canvas.ACCESSIBLE_CONTENT_ENABLED) this.addAccessibleContent();
        this._color = new CanvasColor(this.ctx);
        this._line = new CanvasLine(this.ctx);
        this._path = new CanvasPath(this.ctx);
        this._font = new CanvasFont(this.ctx);
        this._text = new CanvasText(this.ctx);
        this._image = new CanvasImage(this.ctx);
        this._filter = new CanvasFilter(this.ctx);
    }

    public get color(): CanvasColor { return this._color; }
    public get line(): CanvasLine { return this._line; }
    public get path(): CanvasPath { return this._path; }
    public get font(): CanvasFont { return this._font; }
    public get text(): CanvasText { return this._text; }
    public get image(): CanvasImage { return this._image; }
    public get filter(): CanvasFilter { return this._filter; }

    public clear(): void {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    // font and filter components store state; intuitive behaviour is for them to reset too after save() / restore()
    public save(fn: Function): void {
        this.ctx.save();
        fn();
        this.ctx.restore();
        this.font.reset();
        this.filter.reset();
    }

    public translate(x: number, y: number): void {
        this.ctx.translate(x, y);
    }

    public rotate(radians: number): void {
        this.ctx.rotate(radians);
    }

    public opacity(alpha: number): void {
        this.ctx.globalAlpha = clamp(alpha, 0, 1);
    }

    public scale(x: number, y: number): void {
        this.ctx.scale(x, y);
    }

    public enableSmoothing(quality: ImageSmoothingQuality): void {
        this.ctx.imageSmoothingEnabled = true;
        this.ctx.imageSmoothingQuality = quality;
    }

    public disableSmoothing(): void {
        this.ctx.imageSmoothingEnabled = false;
    }

    // add message to display to user in place of the missing canvas element
    private addAccessibleContent(): void {
        this.canvas.setAttribute('role', 'presenation');
        const message = 'Unfortunately your device cannot display the content correctly';
        const p = document.createElement('p');
        p.innerText = message;
        this.canvas.appendChild(p);
    }

}