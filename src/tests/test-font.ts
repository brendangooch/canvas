/**
 * tests for the Canvas font component
 */

import Canvas from "../module/canvas.js";
import loadFont from "../lib/utils/load-font.js";

// all tests - comment/uncomment as required
// @ts-ignore
export default function (canvas: Canvas): void {

    // testSetSize(canvas);             // WORKING
    // testAddFamily(canvas);           // WORKING 
    // testSetStyle(canvas);            // WORKING
    // testSetWeight(canvas);           // WORKING
    // testSetHeight(canvas);           // WORKING - I think; ctx appears to remove the line height if not supported by the font
    // testKerning(canvas);             // WORKING - has no visual impact on fonts used but is correctly set on ctx
    // testStretch(canvas);             // WORKING
    // testVariantCaps(canvas);         // WORKING

}

// public setSize(size: number): void
// @ts-ignore
function testSetSize(canvas: Canvas): void {
    loadGFont().then(() => {
        configure(canvas);
        for (let i = 1; i <= 5; i++) {
            canvas.font.setSize(i * 24); // <--
            canvas.ctx.fillText(canvas.ctx.font, 0, i * 100);
        }
    });
}

// public addFamily(family: string): void
// @ts-ignore
function testAddFamily(canvas: Canvas): void {
    loadGFont().then(() => {
        configure(canvas);
        canvas.font.setSize(96);
        canvas.ctx.fillText(canvas.ctx.font, 0, 300);
        canvas.font.addFamily('gFont'); // <--
        canvas.ctx.fillText(canvas.ctx.font, 0, 500);
    });
}

// public setStyle(style: tFontStyle): void
// @ts-ignore
function testSetStyle(canvas: Canvas): void {
    loadGFont().then(() => {
        configure(canvas);
        canvas.font.setSize(96);

        // sans serif
        canvas.ctx.fillText(canvas.ctx.font, 0, 100);
        canvas.font.setStyle('italic'); // <--
        canvas.ctx.fillText(canvas.ctx.font, 0, 250);

        // gFont
        canvas.font.reset();
        canvas.font.setSize(96);
        canvas.font.addFamily('gFont');
        canvas.ctx.fillText(canvas.ctx.font, 0, 400);
        canvas.font.setStyle('italic'); // <--
        canvas.ctx.fillText(canvas.ctx.font, 0, 550);

    });
}

// public setWeight(weight: tFontWeight): void
// @ts-ignore
function testSetWeight(canvas: Canvas): void {
    const fontSize = 48;
    loadGFont().then(() => {
        configure(canvas);

        // normal
        canvas.font.setSize(fontSize);
        // canvas.font.addFamily('gFont');
        canvas.font.setWeight('normal'); // <--
        canvas.ctx.fillText(canvas.ctx.font, 0, 0);

        // bold
        canvas.font.reset();
        canvas.font.setSize(fontSize);
        // canvas.font.addFamily('gFont');
        canvas.font.setWeight('bold'); // <--
        canvas.ctx.fillText(canvas.ctx.font, 0, 50);

        // bold + style: italic
        canvas.font.reset();
        canvas.font.setSize(fontSize);
        // canvas.font.addFamily('gFont');
        canvas.font.setWeight('bold'); // <--
        canvas.font.setStyle('italic'); // <--
        canvas.ctx.fillText(canvas.ctx.font, 0, 100);

        // 100 - 900
        for (let i = 1; i <= 9; i++) {
            const weight = i * 100;
            canvas.font.reset();
            canvas.font.setSize(fontSize);
            // canvas.font.addFamily('gFont');
            // @ts-ignore
            canvas.font.setWeight(weight); // <--
            canvas.ctx.fillText(canvas.ctx.font, 0, 100 + (i * 50));
        }

    });
}

// public setHeight(height: tFontHeight): void
// @ts-ignore
function testSetHeight(canvas: Canvas): void {
    const fontSize = 48;
    loadGFont().then(() => {
        configure(canvas);

        // normal
        canvas.font.setSize(fontSize);
        canvas.font.addFamily('gFont');
        canvas.font.setHeight('normal'); // <--
        canvas.ctx.fillText(canvas.ctx.font, 0, 150);

        // 1 - 10
        for (let i = 1; i <= 10; i++) {
            canvas.font.reset();
            canvas.font.setSize(fontSize);
            // canvas.font.addFamily('gFont');
            canvas.font.setHeight(i); // <--
            canvas.ctx.fillText(canvas.ctx.font, 0, 150 + (i * 50));
        }

    });
}

// public normalKerning(): void
// public autoKerning(): void
// public noKerning(): void
// @ts-ignore
function testKerning(canvas: Canvas): void {
    const fontSize = 48;
    const text = 'does it kern?';
    loadGFont().then(() => {
        configure(canvas);

        // sans-serif

        // default
        canvas.font.setSize(fontSize);
        console.log(canvas.ctx.fontKerning);
        canvas.ctx.fillText(text, 0, 100);

        // normal
        canvas.font.reset();
        canvas.font.normalKerning(); // <--
        canvas.font.setSize(fontSize);
        console.log(canvas.ctx.fontKerning);
        canvas.ctx.fillText(text, 0, 200);

        // auto
        canvas.font.reset();
        canvas.font.autoKerning(); // <--
        canvas.font.setSize(fontSize);
        console.log(canvas.ctx.fontKerning);
        canvas.ctx.fillText(text, 0, 300);

        // no-kerning
        canvas.font.reset();
        canvas.font.noKerning(); // <--
        canvas.font.setSize(fontSize);
        console.log(canvas.ctx.fontKerning);
        canvas.ctx.fillText(text, 0, 400);


        // gFont

        // default
        canvas.font.setSize(fontSize);
        canvas.font.addFamily('gFont');
        console.log(canvas.ctx.fontKerning);
        canvas.ctx.fillText(text, 0, 500);

        // normal
        canvas.font.reset();
        canvas.font.normalKerning(); // <--
        canvas.font.setSize(fontSize);
        canvas.font.addFamily('gFont');
        console.log(canvas.ctx.fontKerning);
        canvas.ctx.fillText(text, 0, 600);

        // auto
        canvas.font.reset();
        canvas.font.autoKerning(); // <--
        canvas.font.setSize(fontSize);
        canvas.font.addFamily('gFont');
        console.log(canvas.ctx.fontKerning);
        canvas.ctx.fillText(text, 0, 700);

        // no-kerning
        canvas.font.reset();
        canvas.font.noKerning(); // <--
        canvas.font.setSize(fontSize);
        canvas.font.addFamily('gFont');
        console.log(canvas.ctx.fontKerning);
        canvas.ctx.fillText(text, 0, 800);

    })
}


// public stretch(value: CanvasFontStretch): void
// @ts-ignore
function testStretch(canvas: Canvas): void {
    const values = [
        'ultra-condensed',
        'extra-condensed',
        'condensed',
        'semi-condensed',
        'normal',
        'semi-expanded',
        'expanded',
        'extra-expanded',
        'ultra-expanded'
    ];
    for (let value of values) {
        // @ts-ignore
        canvas.font.stretch(value);
        console.log(canvas.ctx.fontStretch);
    }
}

// public variantCaps(value: CanvasFontVariantCaps): void
// @ts-ignore
function testVariantCaps(canvas: Canvas): void {
    const values = [
        'normal',
        'small-caps',
        'all-small-caps',
        'petite-caps',
        'all-petite-caps',
        'unicase',
        'titling-caps'
    ];
    for (let value of values) {
        // @ts-ignore
        canvas.font.variantCaps(value);
        console.log(canvas.ctx.fontVariantCaps);
    }

}

// @ts-ignore
function loadGFont(): Promise<void> {
    return new Promise(async (res) => {
        await loadFont('gFont', './nothing-you-could-do.woff2');
        res();
    });
}

// @ts-ignore
function configure(canvas: Canvas): void {
    canvas.ctx.translate(canvas.center.x, canvas.center.y - 400);
    canvas.ctx.textAlign = 'center';
    canvas.ctx.textBaseline = 'middle';
}