/**
 * tests for the Canvas class itself
 */

import Canvas from "../module/canvas.js";

// all tests - comment/uncomment as required
// @ts-ignore
export default function (canvas: Canvas): void {

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

}

// WORKING
// @ts-ignore
function testGetWidth(canvas: Canvas): void {
    console.assert(Canvas.WIDTH === canvas.width, 'canvas.width is incorrect');
}

// WORKING
// @ts-ignore
function testGetHeight(canvas: Canvas): void {
    console.assert(Canvas.HEIGHT === canvas.height, 'canvas.height is incorrect');
}

// WORKING
// @ts-ignore
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
// @ts-ignore
function testGetAttributes(canvas: Canvas): void {
    console.log(canvas.attributes);
}

// @ts-ignore
function testEnableSmoothing(canvas: Canvas): void { }

// @ts-ignore
function testDisableSmoothing(canvas: Canvas): void { }