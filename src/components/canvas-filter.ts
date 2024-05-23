/**
 * 
 */

import CanvasComponent from "./canvas-component.js";

export default class CanvasFilter extends CanvasComponent {

    // initialise filter to 'none'
    // this is to pass the tests using proxy ctx object
    public constructor(ctx: CanvasRenderingContext2D) {
        super(ctx);
        this.none();
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