/**
 * tests for the Canvas module
 */

import Canvas from "./module/canvas.js";

// all tests - comment/uncomment as required
// @ts-ignore
export default function (canvas: Canvas, images: HTMLImageElement[]): void {

    /***************
    **
    **  console assertions (always on)
    **
    ****************/
    testGetWidth(canvas);               // working
    testGetHeight(canvas);              // working
    testGetCenter(canvas);              // working

    /***************
    **
    **  canvas methods
    **
    ****************/
    // testClear(canvas);               
    // testSave(canvas);
    // testReset(canvas);
    // testSetAlpha(canvas);
    // testScale(canvas);
    // testTranslate(canvas);
    // testRotate(canvas);
    // testFill(canvas);
    // testStroke(canvas);
    // testGetAttributes(canvas);       // working
    // testEnableSmoothing(canvas);
    // testDisableSmoothing(canvas);


    /***************
    **
    **  canvas component methods
    **
    ****************/
    // testPath(canvas);
    // testText(canvas);
    // testColor(canvas);
    // testImage(canvas);
    // testFilter(canvas);
    // testShadow(canvas);
    // testLine(canvas);
    // testImageData(canvas);
    // testComposite(canvas);
    // testTransform(canvas);

}


// WORKING
function testGetWidth(canvas: Canvas): void {
    console.assert(Canvas.WIDTH === canvas.width, 'canvas.width is incorrect');
}

// WORKING
function testGetHeight(canvas: Canvas): void {
    console.assert(Canvas.HEIGHT === canvas.height, 'canvas.height is incorrect');
}

// WORKING
function testGetCenter(canvas: Canvas): void {
    console.assert(Canvas.WIDTH / 2 === canvas.center.x, 'canvas.center.x is incorrect');
    console.assert(Canvas.HEIGHT / 2 === canvas.center.y, 'canvas.center.y is incorrect');
}

// @ts-ignore
function testClear(canvas: Canvas): void { }

// @ts-ignore
function testSave(canvas: Canvas): void { }

// @ts-ignore
function testReset(canvas: Canvas): void { }

// @ts-ignore
function testSetAlpha(canvas: Canvas): void { }

// @ts-ignore
function testScale(canvas: Canvas): void { }

// @ts-ignore
function testTranslate(canvas: Canvas): void { }

// @ts-ignore
function testRotate(canvas: Canvas): void { }

// @ts-ignore
function testFill(canvas: Canvas): void { }

// @ts-ignore
function testStroke(canvas: Canvas): void { }

// WORKING
function testGetAttributes(canvas: Canvas): void {
    console.log(canvas.attributes);
}

// @ts-ignore
function testEnableSmoothing(canvas: Canvas): void { }

// @ts-ignore
function testDisableSmoothing(canvas: Canvas): void { }

// @ts-ignore
function testPath(canvas: Canvas): void { }

// @ts-ignore
function testText(canvas: Canvas): void { }

// @ts-ignore
function testColor(canvas: Canvas): void { }

// @ts-ignore
function testImage(canvas: Canvas): void { }

// @ts-ignore
function testFilter(canvas: Canvas): void { }

// @ts-ignore
function testShadow(canvas: Canvas): void { }

// @ts-ignore
function testLine(canvas: Canvas): void { }

// @ts-ignore
function testImageData(canvas: Canvas): void { }

// @ts-ignore
function testComposite(canvas: Canvas): void { }

// @ts-ignore
function testTransform(canvas: Canvas): void { }