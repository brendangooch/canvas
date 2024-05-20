/**
 * load an image into the app
 */

export default function (src: string): Promise<HTMLImageElement> {
    return new Promise(res => {
        const img = new Image();
        img.onload = () => res(img);
        img.src = src;
    });
}