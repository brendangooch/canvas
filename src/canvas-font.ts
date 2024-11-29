/**
 * a convenient way to set the font on the canvas context
 */

import AbstractCanvasComponent from "./abstract-canvas-component.js";
import type { tFontWeight } from "./index.js";

export default class CanvasFont extends AbstractCanvasComponent {

    private props = {
        size: 10,
        families: ['sans-serif'],
        italic: false,
        weight: 'normal'
    };

    public size(size: number): CanvasFont {
        this.props.size = size;
        this.update();
        return this;
    }

    // !double quote fonts with whitespace
    public family(family: string): CanvasFont {
        this.props.families.unshift(family);
        this.update();
        return this;
    }

    public italic(): CanvasFont {
        this.props.italic = true;
        this.update();
        return this;
    }

    public bold(): CanvasFont {
        this.weight('bold');
        this.update();
        return this;
    }

    public weight(weight: tFontWeight): CanvasFont {
        this.props.weight = <string>weight;
        this.update();
        return this;
    }

    public kerning(value: CanvasFontKerning): CanvasFont {
        this.ctx.fontKerning = value;
        return this;
    }

    public stretch(value: CanvasFontStretch): CanvasFont {
        this.ctx.fontStretch = value;
        return this;
    }

    public variantCaps(value: CanvasFontVariantCaps): CanvasFont {
        this.ctx.fontVariantCaps = value;
        return this;
    }

    public reset(): void {
        this.props.size = 10;
        this.props.families = ['sans-serif'];
        this.props.italic = false;
        this.props.weight = 'normal'
        this.ctx.fontKerning = 'auto';
        this.ctx.fontStretch = 'normal';
        this.ctx.fontVariantCaps = 'normal';
        this.update();
    }

    private get sz(): string {
        return `${this.props.size}px`;
    }

    private get fm(): string {
        return this.props.families.join();
    }

    private get st(): string {
        if (this.props.italic) return 'italic';
        return '';
    }

    private get wt(): string {
        if (this.props.weight !== 'normal') return this.props.weight;
        return '';
    }

    // format: 'style weight size/height family'
    private update(): void {
        this.ctx.font = `${this.st} ${this.wt} ${this.sz} ${this.fm}`;
    }

};