/**
 * 
 */

import { clamp } from "@brendangooch/maths";
import AbstractCanvasComponent from "./abstract-canvas-component.js";

export default class CanvasFilter extends AbstractCanvasComponent {

    private filters: string[] = [];

    // px 0 -> 500
    public blur(n: number): CanvasFilter {
        n = clamp(n, 0, 500);
        this.filters.push(`blur(${n}px)`);
        this.update();
        return this;
    }

    // number 0 -> 30
    public brightness(n: number): CanvasFilter {
        n = clamp(n, 0, 30);
        this.filters.push(`brightness(${n})`);
        this.update();
        return this;
    }

    // number 0 -> 30
    public contrast(n: number): CanvasFilter {
        n = clamp(n, 0, 30);
        this.filters.push(`contrast(${n})`);
        this.update();
        return this;
    }

    // ** DISABLED ** as extremely slow on animations
    // px - any number / color - any valid css color
    // public dropShadow(x: number, y: number, blur: number, color: string = 'black'): CanvasFilter {
    //     this.filters.push(`drop-shadow(${x}px ${y}px ${blur}px ${color})`);
    //     this.update();
    //     return this;
    // }

    // number 0 -> 1
    public grayscale(n: number): CanvasFilter {
        n = clamp(n, 0, 1);
        this.filters.push(`grayscale(${n})`);
        this.update();
        return this;
    }

    // turn(angle) -1 -> 1
    public hueRotate(n: number): CanvasFilter {
        n = clamp(n, -1, 1);
        this.filters.push(`hue-rotate(${n}turn)`);
        this.update();
        return this;
    }

    // number 0 -> 1
    public invert(n: number): CanvasFilter {
        n = clamp(n, 0, 1);
        this.filters.push(`invert(${n})`);
        this.update();
        return this;
    }

    // number 0 -> 1
    public opacity(n: number): CanvasFilter {
        n = clamp(n, 0, 1);
        this.filters.push(`opacity(${n})`);
        this.update();
        return this;
    }

    // number 0 -> 50
    public saturate(n: number): CanvasFilter {
        n = clamp(n, 0, 50);
        this.filters.push(`saturate(${n})`);
        this.update();
        return this;
    }

    // number 0 -> 1
    public sepia(n: number): CanvasFilter {
        n = clamp(n, 0, 1);
        this.filters.push(`sepia(${n})`);
        this.update();
        return this;
    }

    public reset(): void {
        this.filters.length = 0;
        this.ctx.filter = 'none';
    }

    protected update(): void {
        this.ctx.filter = this.filters.join(' ');
    }

}