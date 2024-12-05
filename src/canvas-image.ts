/**
 * supports HTML images only at present
 * images are rendered from the center at the currently-translated position
 * 
 */

import type { iSprite } from "@brendangooch/image-sprite";
import AbstractCanvasComponent from "./abstract-canvas-component.js";

export default class CanvasImage extends AbstractCanvasComponent {

    // drawImage(image, dx, dy)
    public original(image: HTMLImageElement): void {
        if (image.width && image.height) this.ctx.drawImage(image, -image.width / 2, -image.height / 2);
        else this.ctx.drawImage(image, 0, 0);
    }

    // drawImage(image, dx, dy, dWidth, dHeight)
    public scaled(image: HTMLImageElement, width: number, height: number): void {
        this.ctx.drawImage(image, -width / 2, -height / 2, width, height);
    }

    // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    public segment(image: HTMLImageElement, sx: number, sy: number, sWidth: number, sHeight: number, dWidth: number, dHeight: number): void {
        this.ctx.drawImage(image, sx, sy, sWidth, sHeight, -dWidth / 2, -dHeight / 2, dWidth, dHeight);
    }

    public sprite(sprite: iSprite): void {
        this.segment(sprite.image, sprite.sx, sprite.sy, sprite.swidth, sprite.sheight, sprite.dwidth, sprite.dheight);
    }

}