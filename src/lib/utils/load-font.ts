/**
 * load a font
 */

export default function (name: string, path: string, desciptors: FontFaceDescriptors = {}): Promise<void> {
    const url = `url(${path})`;
    return new Promise(async (res) => {
        const font = new FontFace(name, url, desciptors);
        document.fonts.add(font);
        await font.load();
        res();
    });
}