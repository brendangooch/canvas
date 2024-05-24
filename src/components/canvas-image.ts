/**
 * supports HTML images only at present
 * images are rendered from the center at the current translated position
 * 
 */

import CanvasComponent from "./canvas-component.js";

export default class CanvasImage extends CanvasComponent {

    // drawImage(image, dx, dy)
    public unchanged(image: HTMLImageElement): void {
        this.ctx.drawImage(image, 0, 0);
    }

    // drawImage(image, dx, dy, dWidth, dHeight)
    public scaled(image: HTMLImageElement, width: number, height: number): void {
        this.ctx.drawImage(image, -width / 2, -height / 2, width, height);
    }

    // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    public cell(image: HTMLImageElement, sx: number, sy: number, sWidth: number, sHeight: number, dWidth: number, dHeight: number): void {
        this.ctx.drawImage(image, sx, sy, sWidth, sHeight, -dWidth / 2, -dHeight / 2, dWidth, dHeight);
    }

}