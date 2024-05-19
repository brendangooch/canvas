/**
 * tests for the Canvas class itself
 */

import Canvas from "../module/canvas.js";
import { tTranslateOption } from "../module/custom-types.js";

// all tests - comment/uncomment as required
// @ts-ignore
export default function (canvas: Canvas): void {

    // (tested)
    // testGetWidth(canvas);            // WORKING
    // testGetHeight(canvas);           // WORKING
    // testGetCenter(canvas);           // WORKING
    // testGetAttributes(canvas);       // WORKING
    // testClear(canvas);               // WORKING
    // testSave(canvas);                // WORKING
    // testSetOpacity(canvas);          // WORKING
    // testRotate(canvas);              // WORKING
    // testScale(canvas);               // WORKING
    // testTranslate(canvas);           // WORKING

    // (test functionality as needed)
    // testEnableSmoothing(canvas);
    // testDisableSmoothing(canvas);
    // testReset(canvas);

}

// @ts-ignore
function testGetWidth(canvas: Canvas): void {
    console.log(`Canvas.WIDTH = ${Canvas.WIDTH}, canvas.width = ${canvas.width}`);
    console.assert(Canvas.WIDTH === canvas.width, 'canvas.width is incorrect');
}

// @ts-ignore
function testGetHeight(canvas: Canvas): void {
    console.log(`Canvas.HEIGHT = ${Canvas.HEIGHT}, canvas.height = ${canvas.height}`);
    console.assert(Canvas.HEIGHT === canvas.height, 'canvas.height is incorrect');
}

// @ts-ignore
function testGetCenter(canvas: Canvas): void {
    console.log(`Canvas.WIDTH / 2 = ${Canvas.WIDTH / 2}, canvas.center.x = ${canvas.center.x}`);
    console.log(`Canvas.HEIGHT / 2 = ${Canvas.HEIGHT / 2}, canvas.center.y = ${canvas.center.y}`);
    console.assert(Canvas.WIDTH / 2 === canvas.center.x, 'canvas.center.x is incorrect');
    console.assert(Canvas.HEIGHT / 2 === canvas.center.y, 'canvas.center.y is incorrect');
}

// @ts-ignore
function testClear(canvas: Canvas): void {
    console.log('now you see me');
    canvas.ctx.translate(canvas.center.x, canvas.center.y);
    canvas.ctx.fillRect(0, 0, 200, 200);
    setTimeout(() => {
        canvas.clear();
        console.log('now you don\'t');
    }, 1000);
}

// @ts-ignore
function testSave(canvas: Canvas): void {
    console.log('canvas.save() used to translate context to 2 different positions');
    canvas.save(() => {
        canvas.ctx.translate(canvas.center.x + 300, canvas.center.y);
        canvas.ctx.fillRect(0, 0, 200, 200);
    });
    canvas.save(() => {
        canvas.ctx.translate(canvas.center.x - 300, canvas.center.y);
        canvas.ctx.fillRect(0, 0, 200, 200);
    });
    canvas.ctx.fillRect(0, 0, 200, 200);
}



// @ts-ignore
function testSetOpacity(canvas: Canvas): void {
    console.log('canvas opacity from 0 - 1');
    const speed = 50;
    const increment = 0.01;
    let opacity = 0;
    setInterval(() => {
        canvas.clear();
        canvas.save(() => {
            canvas.translate('center');
            canvas.setOpacity(opacity);
            canvas.ctx.fillRect(-100, -100, 200, 200);
        });
        opacity += increment;
        if (opacity > 1) {
            opacity = 0;
        }
    }, speed);
}

// @ts-ignore
function testScale(canvas: Canvas): void {
    console.log('the same square scaled to 0.5, 1, 2, 5');
    canvas.save(() => {
        canvas.translate('center');
        canvas.scale(0.5);
        canvas.ctx.strokeRect(-50, -50, 100, 100);
    });
    canvas.save(() => {
        canvas.translate('center');
        canvas.ctx.strokeStyle = 'red';
        canvas.scale(1);
        canvas.ctx.strokeRect(-50, -50, 100, 100);
    });
    canvas.save(() => {
        canvas.translate('center');
        canvas.scale(2);
        canvas.ctx.strokeRect(-50, -50, 100, 100);
    });
    canvas.save(() => {
        canvas.translate('center');
        canvas.scale(5);
        canvas.ctx.strokeRect(-50, -50, 100, 100);
    });
}

// @ts-ignore
function testTranslate(canvas: Canvas): void {
    canvas.ctx.globalAlpha = 0.75;
    testTranslateNormal(canvas);
    testTranslateByPercent(canvas);
    testTranslateByOption(canvas);
}

//@ts-ignore
function testTranslateNormal(canvas: Canvas): void {
    console.log('a red square at location 200, 200 (translate(x,y))');
    canvas.save(() => {
        canvas.ctx.fillStyle = 'red';
        canvas.translate(200, 200);
        canvas.ctx.fillRect(-100, -100, 200, 200);
    });

}

//@ts-ignore
function testTranslateByPercent(canvas: Canvas): void {
    console.log('one green square per 10% of screen, horizontally across the canvas (translate(%, %))');
    canvas.ctx.fillStyle = 'green';
    canvas.save(() => {
        canvas.translate(0, 0.5);
        canvas.ctx.fillRect(-50, -50, 100, 100);
    });
    canvas.save(() => {
        canvas.translate(0.1, 0.5);
        canvas.ctx.fillRect(-50, -50, 100, 100);
    });
    canvas.save(() => {
        canvas.translate(0.2, 0.5);
        canvas.ctx.fillRect(-50, -50, 100, 100);
    });
    canvas.save(() => {
        canvas.translate(0.3, 0.5);
        canvas.ctx.fillRect(-50, -50, 100, 100);
    });
    canvas.save(() => {
        canvas.translate(0.4, 0.5);
        canvas.ctx.fillRect(-50, -50, 100, 100);
    });
    canvas.save(() => {
        canvas.translate(0.5, 0.5);
        canvas.ctx.fillRect(-50, -50, 100, 100);
    });
    canvas.save(() => {
        canvas.translate(0.6, 0.5);
        canvas.ctx.fillRect(-50, -50, 100, 100);
    });
    canvas.save(() => {
        canvas.translate(0.7, 0.5);
        canvas.ctx.fillRect(-50, -50, 100, 100);
    });
    canvas.save(() => {
        canvas.translate(0.8, 0.5);
        canvas.ctx.fillRect(-50, -50, 100, 100);
    });
    canvas.save(() => {
        canvas.translate(0.9, 0.5);
        canvas.ctx.fillRect(-50, -50, 100, 100);
    });
    canvas.save(() => {
        canvas.translate(0.99, 0.5);
        canvas.ctx.fillRect(-50, -50, 100, 100);
    });
}

//@ts-ignore
function testTranslateByOption(canvas: Canvas): void {
    console.log('a blue square in each optional translation location (translate(tTranslationOption))');
    canvas.ctx.fillStyle = 'blue';
    const options: tTranslateOption[] = ['center', 'top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right'];
    for (let option of options) {
        canvas.save(() => {
            canvas.translate(option);
            canvas.ctx.fillRect(-40, -40, 80, 80);
        });
    }

}

// @ts-ignore
function testRotate(canvas: Canvas): void {
    console.log('a rectangle rotated through 1 whole turn');
    const width = 25;
    const height = 500;
    const color = 'blue';
    let rotation = 0;
    let opacity = 0;
    for (let i = 0.01; i <= 1; i += 0.01) {
        canvas.save(() => {
            canvas.translate('center');
            canvas.ctx.fillStyle = color;
            canvas.setOpacity(opacity);
            canvas.rotate(rotation * Math.PI * 2);
            canvas.ctx.fillRect(-width / 2, -height / 2, width, height);
        });
        opacity = i / 15;
        rotation = i;
    }
}

// @ts-ignore
function testGetAttributes(canvas: Canvas): void {
    console.log(canvas.attributes);
}

// @ts-ignore
function testEnableSmoothing(canvas: Canvas): void { }

// @ts-ignore
function testDisableSmoothing(canvas: Canvas): void { }

// @ts-ignore
function testReset(canvas: Canvas): void { }