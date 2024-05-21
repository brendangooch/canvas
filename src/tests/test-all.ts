/**
 * ALL tests for the Canvas module
 */

import Canvas from "../module/canvas.js";

// @ts-ignore
import testCanvas from "./test-canvas.js";

// @ts-ignore
import testColor from "./test-color.js";

// @ts-ignore
import testComposite from "./test-composite.js";

// @ts-ignore
import testfilter from "./test-filter.js";

// @ts-ignore
import testFont from "./test-font.js";

// @ts-ignore
import testImageData from "./test-image-data.js";

// @ts-ignore
import testImage from "./test-image.js";

// @ts-ignore
import testLine from "./test-line.js";

// @ts-ignore
import testPath from "./test-path.js";

// @ts-ignore
import testShadow from "./test-shadow.js";

// @ts-ignore
import testText from "./test-text.js";

// @ts-ignore
import testTransform from "./test-transform.js";


// all tests - comment/uncomment as required
// @ts-ignore
export default function (canvas: Canvas): void {

    // (tested)
    // testPath(canvas);        // WORKING
    // testCanvas(canvas);      // WORKING
    // testLine(canvas);        // WORKING
    // testColor(canvas);       // WORKING
    // testFont(canvas);        // WORKING

    // (to test)
    // testShadow(canvas);
    // testImage(canvas);
    // testText(canvas);
    // testFilter(canvas);
    // testComposite(canvas);

    // (test functionality as needed)
    // testImageData(canvas);
    // testTransform(canvas);

}