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


    // fontVariantCaps


    // font must include values for: font-size, font-family
    // font-style and font-weight must precede font-size
    // line-height must immediately follow font-size, preceded by "/", like this: "16px/3"
    // font-family must be the last value specified.
    private update(): void {
        let font = '';
        if (this.style && this.style !== 'normal') font += `${this.style} `;
        if (this.weight && this.weight !== 'normal') font += `${this.weight} `;
        font += `${this.size}px`;
        if (this.height) font += `/${this.height}`;
        font += ` ${this.families.join()}`;
        this.ctx.font = font;
    }

};