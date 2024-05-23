/**
 * 
 */

import CanvasComponent from "./canvas-component.js";

type tFontFamilies = string[];
type tFontStyle = 'normal' | 'italic';
type tFontWeight = 'normal' | 'bold' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

// line-height does not get applied to the ctx object so removed
export default class CanvasFont extends CanvasComponent {

    private _size: number = 10; // px
    private families: tFontFamilies = ['sans-serif'];
    private _style: tFontStyle = 'normal';
    private _weight: tFontWeight = 'normal';

    public reset(): void {
        this.size(10);
        this.families = [];
        this.addFamily('sans-serif');
        this.style('normal');
        this.weight('normal');
    }

    // set all properties in one command
    public setAll(props: {
        size?: number;
        families?: string[];
        style?: tFontStyle;
        weight?: tFontWeight;
        kerning?: CanvasFontKerning;
        stretch?: CanvasFontStretch;
        variantCaps?: CanvasFontVariantCaps;
    }): void {
        if (props.size) this.size(props.size);
        if (props.families) {
            props.families.reverse();
            props.families.forEach(family => this.addFamily(family));
        }
        if (props.style) this.style(props.style);
        if (props.weight) this.weight(props.weight);
        if (props.kerning) this.kerning(props.kerning);
        if (props.stretch) this.stretch(props.stretch);
        if (props.variantCaps) this.variantCaps(props.variantCaps);
    }

    public size(size: number): void {
        if (size >= 1) {
            this._size = size;
            this.update();
        }
    }

    public addFamily(family: string): void {
        if (!this.families.includes(family)) {
            this.families.unshift(family);
            this.update();
        }
    }

    public style(style: tFontStyle): void {
        this._style = style;
        this.update();
    }

    public weight(weight: tFontWeight): void {
        this._weight = weight;
        this.update();
    }

    public kerning(value: CanvasFontKerning): void {
        this.ctx.fontKerning = value;
    }

    public normalKerning(): void {
        this.ctx.fontKerning = 'normal';
    }

    // default
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

    // normal(default)
    public normalStretch(): void {
        this.stretch('normal');
    }

    // ultra-condensed
    public ultraCondensed(): void {
        this.stretch('ultra-condensed');
    }

    // extra-condensed
    public extraCondensed(): void {
        this.stretch('extra-condensed');
    }

    // condensed
    public condensed(): void {
        this.stretch('condensed');
    }

    // semi-condensed
    public semiCondensed(): void {
        this.stretch('semi-condensed');
    }

    // semi-expanded
    public semiExpanded(): void {
        this.stretch('semi-expanded');
    }

    // expanded
    public expanded(): void {
        this.stretch('expanded');
    }

    // extra-expanded
    public extraExpanded(): void {
        this.stretch('extra-expanded');
    }

    // ultra-expanded
    public ultraExpanded(): void {
        this.stretch('ultra-expanded');
    }


    // fontVariantCaps
    public variantCaps(value: CanvasFontVariantCaps): void {
        this.ctx.fontVariantCaps = value;
    }

    // normal(default)
    public normalCaps(): void {
        this.variantCaps('normal');
    }

    // small-caps
    public smallCaps(): void {
        this.variantCaps('small-caps');
    }

    // all-small-caps
    public allSmallCaps(): void {
        this.variantCaps('all-small-caps');
    }

    // petite-caps
    public petiteCaps(): void {
        this.variantCaps('petite-caps');
    }

    // all-petite-caps
    public allPetiteCaps(): void {
        this.variantCaps('all-petite-caps');
    }

    // unicase
    public unicase(): void {
        this.variantCaps('unicase');
    }

    // titling-caps
    public titlingCaps(): void {
        this.variantCaps('titling-caps');
    }

    // style weight size/height family
    // font must include values for: font-size, font-family
    // font-style and font-weight must precede font-size
    // font-family must be the last value specified.
    private update(): void {
        let font = '';
        if (this._style !== 'normal') font += `${this._style} `;
        if (this._weight !== 'normal') font += `${this._weight} `;
        font += `${this._size}px ${this.families.join()}`;
        this.ctx.font = font;
    }

};