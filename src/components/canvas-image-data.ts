/**
 * 
 */

import CanvasComponent from "./canvas-component.js";

type tCanvasColorSpace = "srgb" | "display-p3";

export default class CanvasImageData extends CanvasComponent {

    // createImageData(width, height)
    // createImageData(width, height, settings)
    // settings { colorSpace: "srgb" | "display-p3" }
    public create(width: number, height: number, colorSpace: null | tCanvasColorSpace = null): ImageData {
        if (colorSpace) return this.ctx.createImageData(width, height, { colorSpace: colorSpace });
        return this.ctx.createImageData(width, height);
    }

    // createImageData(imagedata)
    public createFrom(data: ImageData): ImageData {
        return this.ctx.createImageData(data);
    }

    // getImageData(sx, sy, sw, sh)
    // getImageData(sx, sy, sw, sh, settings)
    public retrieve(sx: number, sy: number, sw: number, sh: number, colorSpace: null | tCanvasColorSpace = null): ImageData {
        if (colorSpace) return this.ctx.getImageData(sx, sy, sw, sh, { colorSpace: colorSpace });
        return this.ctx.getImageData(sx, sy, sw, sh);
    }

    // putImageData(imageData, dx, dy)
    // putImageData(imageData, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight)
    public insertFrom(
        data: ImageData,
        dx: number,
        dy: number,
        dirtyX: number = 0,
        dirtyY: number = 0,
        dirtyWidth: number = data.height,
        dirtyHeight: number = data.width
    ): void {
        this.ctx.putImageData(data, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight)
    }

}