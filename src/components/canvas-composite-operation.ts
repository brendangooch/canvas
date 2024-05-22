/**
 * 
 */

import CanvasComponent from "./canvas-component.js";

export default class CanvasCompositeOperation extends CanvasComponent {

    // globalCompositeOperation

    // "source-over"
    public sourceOver(): void {
        this.ctx.globalCompositeOperation = 'source-over';
    }

    // "source-in"
    public sourceIn(): void {
        this.ctx.globalCompositeOperation = 'source-in';
    }

    // "source-out"
    public sourceOut(): void {
        this.ctx.globalCompositeOperation = 'source-out';
    }

    // "source-atop"
    public sourceAtop(): void {
        this.ctx.globalCompositeOperation = 'source-atop';
    }

    // "destination-over"
    public destinationOver(): void {
        this.ctx.globalCompositeOperation = 'destination-over';
    }

    // "destination-in"
    public destinationIn(): void {
        this.ctx.globalCompositeOperation = 'destination-in';
    }

    // "destination-out"
    public destinationOut(): void {
        this.ctx.globalCompositeOperation = 'destination-out';
    }

    // "destination-atop"
    public destinationAtop(): void {
        this.ctx.globalCompositeOperation = 'destination-atop';
    }

    // "lighter"
    public lighter(): void {
        this.ctx.globalCompositeOperation = 'lighter';
    }

    // "copy"
    public copy(): void {
        this.ctx.globalCompositeOperation = 'copy';
    }

    // "xor"
    public xor(): void {
        this.ctx.globalCompositeOperation = 'xor';
    }

    // "multiply"
    public multiply(): void {
        this.ctx.globalCompositeOperation = 'multiply';
    }

    // "screen"
    public screen(): void {
        this.ctx.globalCompositeOperation = 'screen';
    }

    // "overlay"
    public overlay(): void {
        this.ctx.globalCompositeOperation = 'overlay';
    }

    // "darken"
    public darken(): void {
        this.ctx.globalCompositeOperation = 'darken';
    }

    // "lighten"
    public lighten(): void {
        this.ctx.globalCompositeOperation = 'lighten';
    }

    // "color-dodge"
    public colorDodge(): void {
        this.ctx.globalCompositeOperation = 'color-dodge';
    }

    // "color-burn"
    public colorBurn(): void {
        this.ctx.globalCompositeOperation = 'color-burn';
    }

    // "hard-light"
    public hardLight(): void {
        this.ctx.globalCompositeOperation = 'hard-light';
    }

    // "soft-light"
    public softLight(): void {
        this.ctx.globalCompositeOperation = 'soft-light';
    }

    // "difference"
    public difference(): void {
        this.ctx.globalCompositeOperation = 'difference';
    }

    // "exclusion"
    public exclusion(): void {
        this.ctx.globalCompositeOperation = 'exclusion';
    }

    // "hue"
    public hue(): void {
        this.ctx.globalCompositeOperation = 'hue';
    }

    // "saturation"
    public saturation(): void {
        this.ctx.globalCompositeOperation = 'saturation';
    }

    // "color"
    public color(): void {
        this.ctx.globalCompositeOperation = 'color';
    }

    // "luminosity"
    public luminosity(): void {
        this.ctx.globalCompositeOperation = 'luminosity';
    }


}