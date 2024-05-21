/**
 * 
 */

import CanvasComponent from "./canvas-component.js";

type tFontFamilies = string[];
type tFontStyle = 'normal' | 'italic';
type tFontWeight = 'normal' | 'bold' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
type tFontHeight = 'normal' | number;

export default class CanvasFont extends CanvasComponent {

    private size: number = 24; // px
    private families: tFontFamilies = ['sans-serif'];
    private style: tFontStyle = 'normal';
    private weight: tFontWeight = 'normal';
    private height: tFontHeight = 'normal'; // whole number

    public reset(): void {
        this.size = 24;
        this.families = ['sans-serif'];
        this.style = 'normal';
        this.weight = 'normal';
        this.height = 'normal';
        this.autoKerning();
        this.stretch('normal');
        this.variantCaps('normal');
    }

    public setSize(size: number): void {
        this.size = size;
        this.update();
    }

    public addFamily(family: string): void {
        this.families.unshift(family);
        this.update();
    }

    public setStyle(style: tFontStyle): void {
        this.style = style;
        this.update();
    }

    public setWeight(weight: tFontWeight): void {
        this.weight = weight;
        this.update();
    }

    public setHeight(height: tFontHeight): void {
        this.height = height;
        this.update();
    }

    public normalKerning(): void {
        this.ctx.fontKerning = 'normal';
    }

    public autoKerning(): void {
        this.ctx.fontKerning = 'auto';
    }

    public noKerning(): void {
        this.ctx.fontKerning = 'none';
    }

    // fontStretch
    public stretch(value: CanvasFontStretch): void {
        this.ctx.fontStretch = value;
    }

    // fontVariantCaps
    public variantCaps(value: CanvasFontVariantCaps): void {
        this.ctx.fontVariantCaps = value;
    }

    // font must include values for: font-size, font-family
    // font-style and font-weight must precede font-size
    // line-height must immediately follow font-size, preceded by "/", like this: "16px/3"
    // font-family must be the last value specified.
    private update(): void {
        let font = '';
        if (this.style && this.style !== 'normal') font += `${this.style} `;
        if (this.weight && this.weight !== 'normal') font += `${this.weight} `;
        font += `${this.size}px`;
        if (this.height !== 'normal') font += `/${this.height}`;
        font += ` ${this.families.join()}`;
        this.ctx.font = font;
    }

};