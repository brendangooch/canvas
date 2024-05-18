/**
 * a couple of helpful loaders
 */

export function loadImage(src: string): Promise<HTMLImageElement> {
    return new Promise(res => {
        const img = new Image();
        img.onload = () => res;
        img.src = src;
    });
}

// export function loadFont()