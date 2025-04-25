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
import CanvasShadow from './canvas-shadow.js';

type tCanvasComponents = {
    color: CanvasColor;
    line: CanvasLine;
    path: CanvasPath;
    font: CanvasFont;
    text: CanvasText;
    image: CanvasImage;
    filter: CanvasFilter;
    shadow: CanvasShadow;
};

export class Canvas {

    public static CONTAINED: boolean = true;
    public static ALPHA_ENABLED: boolean = true;
    public static SMOOTHING_ENABLED: boolean = false;
    public static SMOOTHING_QUALITY: ImageSmoothingQuality = 'medium';
    public static ACCESSIBLE_CONTENT_ENABLED: boolean = true;

    public ctx: CanvasRenderingContext2D;

    private canvas: HTMLCanvasElement;
    private components: tCanvasComponents = {
        color: new CanvasColor(),
        line: new CanvasLine(),
        path: new CanvasPath(),
        font: new CanvasFont(),
        text: new CanvasText(),
        image: new CanvasImage(),
        filter: new CanvasFilter(),
        shadow: new CanvasShadow()
    };

    public constructor(width: number, height: number, id: string = 'canvas') {
        this.loadCanvasElement(id);
        this.loadCTX();
        this.initialiseComponents();
        this.containCanvas();
        this.setDimensions(width, height);
        this.setSmoothing();
        this.addAccessibleContent();
    }

    public get color(): CanvasColor { return this.components.color; }
    public get line(): CanvasLine { return this.components.line; }
    public get path(): CanvasPath { return this.components.path; }
    public get font(): CanvasFont { return this.components.font; }
    public get text(): CanvasText { return this.components.text; }
    public get image(): CanvasImage { return this.components.image; }
    public get filter(): CanvasFilter { return this.components.filter; }
    public get shadow(): CanvasShadow { return this.components.shadow; }

    public clear(): void {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    // font, filter and shadow components store state; intuitive behaviour is for them to reset too after save() / restore()
    public save(fn: Function): void {
        this.ctx.save();
        fn();
        this.ctx.restore();
        this.font.reset();
        this.filter.reset();
        this.shadow.reset();
    }

    public translate(x: number, y: number): Canvas {
        this.ctx.translate(x, y);
        return this;
    }

    public rotate(radians: number): Canvas {
        this.ctx.rotate(radians);
        return this;
    }

    public opacity(alpha: number): Canvas {
        this.ctx.globalAlpha = clamp(alpha, 0, 1);
        return this;
    }

    public scale(n: number): Canvas {
        this.ctx.scale(n, n);
        return this;
    }

    public scaleXY(x: number, y: number): Canvas {
        this.ctx.scale(x, y);
        return this;
    }

    public enableSmoothing(quality: ImageSmoothingQuality): void {
        this.ctx.imageSmoothingEnabled = true;
        this.ctx.imageSmoothingQuality = quality;
    }

    public disableSmoothing(): void {
        this.ctx.imageSmoothingEnabled = false;
    }

    public download(filename: string, format: 'jpeg' | 'png' = 'png', quality: number = 1.0): void {
        const dataUrl = this.canvas.toDataURL(`image/${format}`, quality);
        const tmpLink = document.createElement('a');
        tmpLink.href = dataUrl;
        tmpLink.download = filename;
        tmpLink.click();
        tmpLink.remove();
    }

    private loadCanvasElement(id: string): void {
        if (document.getElementById(id) === undefined) throw new Error(`no canvas element with id="${id} exists in your html file"`);
        this.canvas = <HTMLCanvasElement>document.getElementById(id);
    }

    private loadCTX(): void {
        if (Canvas.ALPHA_ENABLED) this.ctx = this.canvas.getContext('2d', { alpha: true })!;
        else this.ctx = this.canvas.getContext('2d', { alpha: false })!;
    }

    private initialiseComponents(): void {
        this.components.color.init(this.ctx);
        this.components.line.init(this.ctx);
        this.components.path.init(this.ctx);
        this.components.font.init(this.ctx);
        this.components.text.init(this.ctx);
        this.components.image.init(this.ctx);
        this.components.filter.init(this.ctx);
        this.components.shadow.init(this.ctx);
    }

    private containCanvas(): void {
        if (Canvas.CONTAINED) {
            this.canvas.style.position = 'absolute';
            this.canvas.style.width = 'inherit';
            this.canvas.style.height = 'inherit';
        }
    }

    private setDimensions(width: number, height: number): void {
        this.canvas.width = width;
        this.canvas.height = height;
    }

    private setSmoothing(): void {
        if (Canvas.SMOOTHING_ENABLED) this.enableSmoothing(Canvas.SMOOTHING_QUALITY);
        else this.disableSmoothing();
    }

    // add message to display to user in place of the missing canvas element
    private addAccessibleContent(): void {
        if (Canvas.ACCESSIBLE_CONTENT_ENABLED) {
            this.canvas.setAttribute('role', 'presenation');
            const message = 'Unfortunately your device cannot display the content correctly';
            const p = document.createElement('p');
            p.innerText = message;
            this.canvas.appendChild(p);
        }
    }

}