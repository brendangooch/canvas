/**
 * load an image into the app
 */

export function loadImage(src: string): Promise<HTMLImageElement> {
    return new Promise(res => {
        const img = new Image();
        img.onload = () => res;
        img.src = src;
    });
}