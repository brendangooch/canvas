/**
 * 
 */

import CanvasComponent from "./canvas-component.js";

export default class CanvasFilter extends CanvasComponent {

    // initialise filter to 'none'
    // this is to pass the tests using proxy ctx object but will probably be default in browser environments
    public constructor(ctx: CanvasRenderingContext2D) {
        super(ctx);
        this.none();
    }

    public setAll(props: {
        blur?: number;
        brightness?: number;
        contrast?: number;
        shadow?: {
            x: number;
            y: number;
            amount?: number;
            color?: string;
        };
        grayscale?: number;
        hueRotate?: number;
        invert?: number;
        opacity?: number;
        saturate?: number;
        sepia?: number;
    }): void {
        if (props.blur) this.blur(props.blur);
        if (props.brightness) this.brightness(props.brightness);
        if (props.contrast) this.contrast(props.contrast);
        if (props.grayscale) this.grayscale(props.grayscale);
        if (props.hueRotate) this.hueRotate(props.hueRotate);
        if (props.invert) this.invert(props.invert);
        if (props.opacity) this.opacity(props.opacity);
        if (props.saturate) this.saturate(props.saturate);
        if (props.sepia) this.sepia(props.sepia);
        if (props.shadow) {
            const s = props.shadow;
            if (props.shadow.amount && props.shadow.color) this.dropShadow(s.x, s.y, s.amount, s.color);
            if (props.shadow.amount && !props.shadow.color) this.dropShadow(s.x, s.y, s.amount);
            if (!props.shadow.amount && props.shadow.color) this.dropShadow(s.x, s.y, 0, s.color);
            if (!props.shadow.amount && !props.shadow.color) this.dropShadow(s.x, s.y);
        }
    }

    public reset(): void {
        this.none();
    }

    // blur()
    // limited to px
    public blur(amount: number): void {
        amount = this.clampToPositive(amount);
        if (amount > 0) this.addFilter(`blur(${amount}px)`);
    }

    // brightness()
    public brightness(amount: number): void {
        amount = this.clampToPositive(amount);
        if (amount > 0) this.addFilter(`brightness(${amount})`);
    }

    // contrast()
    // 1 == no effect; 2 == double; 0 == gray
    public contrast(amount: number): void {
        amount = this.clampToPositive(amount);
        if (amount >= 0) this.addFilter(`contrast(${amount})`);
    }

    // drop-shadow()
    // all number values are px
    // defaults to black
    public dropShadow(offsetX: number, offsetY: number, amount: number = 0, color: string = 'black'): void {
        amount = this.clampToPositive(amount);
        if (amount === 0) this.addFilter(`drop-shadow(${offsetX}px ${offsetY}px ${color})`);
        else this.addFilter(`drop-shadow(${offsetX}px ${offsetY}px ${amount}px ${color})`);
    }

    // grayscale()
    // 0 - 1 - clamp value
    public grayscale(amount: number): void {
        amount = this.clampToUnit(amount);
        if (amount > 0) this.addFilter(`grayscale(${amount})`);
    }

    // hue-rotate() 
    // degrees
    public hueRotate(amount: number): void {
        if (amount !== 0) this.addFilter(`hue-rotate(${amount}deg)`);
    }

    // invert()
    // amount clamped to 0 - 1
    public invert(amount: number): void {
        amount = this.clampToUnit(amount);
        if (amount > 0) this.addFilter(`invert(${amount})`);
    }

    // opacity()
    // amount clamped to 0 - 1
    public opacity(amount: number): void {
        amount = this.clampToUnit(amount);
        if (amount >= 0) this.addFilter(`opacity(${amount})`);
    }

    // saturate()
    // 0 == desaturated; 1 == normal; 2 == double
    public saturate(amount: number): void {
        amount = this.clampToPositive(amount);
        if (amount >= 0) this.addFilter(`saturate(${amount})`);
    }

    // sepia()
    // amount clamped to 0 - 1
    public sepia(amount: number): void {
        amount = this.clampToUnit(amount);
        if (amount > 0) this.addFilter(`sepia(${amount})`);
    }

    // none
    public none(): void {
        this.ctx.filter = 'none';
    }

    private addFilter(filter: string): void {
        if (this.ctx.filter === 'none') this.ctx.filter = filter;
        else this.ctx.filter += ` ${filter}`;
    }

    private clampToUnit(amount: number): number {
        return (amount < 0) ? amount = 0 : (amount > 1) ? amount = 1 : amount;
    }

    private clampToPositive(amount: number): number {
        return (amount < 0) ? amount = 0 : amount;
    }

}

// const filter = new CanvasFilter()
// filter.sepia(1)
// 