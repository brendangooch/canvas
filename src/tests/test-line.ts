/**
 * tests for the Canvas line component
 */

import Canvas from "../module/canvas.js";

// all tests - comment/uncomment as required
// @ts-ignore
export default function (canvas: Canvas): void {

    // (tested)
    // testSetWidth(canvas);                        // WORKING
    // testLineWidthSettingsAndDefault(canvas);     // WORKING
    // testLineCaps(canvas);                        // WORKING
    // testLineDashes(canvas);                      // WORKING
    // testLineJoins(canvas);                       // WORKING
    // testReset(canvas);                           // WORKING

    // (test functionality as needed)
    // testSetMiterLimit(canvas);
    // testDefaultMiterLimit(canvas);

}


// @ts-ignore
function testSetWidth(canvas: Canvas): void {
    canvas.ctx.save();
    for (let i = 0; i < 5; i++) {
        canvas.line.setWidth(i * 5);
        drawHorizontallLine(canvas, (i * 50) - 125);
    }
    canvas.ctx.restore();
}

// @ts-ignore
function testLineWidthSettingsAndDefault(canvas: Canvas): void {

    canvas.ctx.save();

    // default line
    canvas.ctx.strokeStyle = 'red';
    drawHorizontallLine(canvas, -300);

    canvas.ctx.strokeStyle = 'black';

    // thinnest line
    canvas.line.thinnest();
    drawHorizontallLine(canvas, -200);

    // thin line
    canvas.line.thin();
    drawHorizontallLine(canvas, -100);

    // medium line
    canvas.line.medium();
    drawHorizontallLine(canvas, 0);

    // thick line line
    canvas.line.thick();
    drawHorizontallLine(canvas, 100);

    // thickest line line
    canvas.line.thickest();
    drawHorizontallLine(canvas, 200);


    canvas.ctx.strokeStyle = 'red';
    canvas.line.defaultWidth();
    drawHorizontallLine(canvas, 300);

    canvas.ctx.restore();

}

// @ts-ignore
function testLineCaps(canvas: Canvas): void {

    canvas.ctx.save();
    canvas.line.setWidth(50);

    // default
    canvas.ctx.strokeStyle = 'red';
    drawHorizontallLine(canvas, -200);

    canvas.ctx.strokeStyle = 'black';

    // butt
    canvas.line.buttCap();
    drawHorizontallLine(canvas, -100);

    // round
    canvas.line.roundCap();
    drawHorizontallLine(canvas, 0);

    // square
    canvas.line.squareCap();
    drawHorizontallLine(canvas, 100);

    // default
    canvas.ctx.strokeStyle = 'red';
    canvas.line.defaultCap();
    drawHorizontallLine(canvas, 200);

    canvas.ctx.restore();

}

// @ts-ignore
function testLineDashes(canvas: Canvas): void {

    canvas.ctx.save();
    canvas.line.thick();

    // default
    canvas.ctx.strokeStyle = 'red';
    drawHorizontallLine(canvas, -200);

    canvas.ctx.strokeStyle = 'black';

    // style 1
    canvas.line.setDash([10, 10], 0);
    drawHorizontallLine(canvas, -100);

    // style 2
    canvas.line.setDash([10, 30], 0);
    drawHorizontallLine(canvas, 0);

    // style 3
    canvas.line.setDash([30, 10], 0);
    drawHorizontallLine(canvas, 100);

    // style 4
    canvas.line.setDash([30, 10, 30], 0);
    drawHorizontallLine(canvas, 200);

    // default
    canvas.ctx.strokeStyle = 'red';
    canvas.line.clearDash();
    drawHorizontallLine(canvas, 300);

    canvas.ctx.restore();
}

// @ts-ignore
function testLineJoins(canvas: Canvas): void {
    canvas.ctx.save();
    canvas.line.setWidth(40);
    canvas.ctx.strokeStyle = 'red';
    // default
    draw2LinesAtRightAngle(canvas, -200);

    canvas.ctx.strokeStyle = 'black';
    // round
    canvas.line.roundJoin();
    draw2LinesAtRightAngle(canvas, -100);

    // bevel
    canvas.line.bevelJoin();
    draw2LinesAtRightAngle(canvas, 0);

    // miter
    canvas.line.miterJoin();
    draw2LinesAtRightAngle(canvas, 100);
    canvas.ctx.strokeStyle = 'red';

    //default
    canvas.line.defaultJoin();
    draw2LinesAtRightAngle(canvas, 200);
    canvas.ctx.restore();
}


// @ts-ignore
function testReset(canvas: Canvas): void {

    // default
    canvas.ctx.strokeStyle = 'red';
    draw2LinesAtRightAngle(canvas, -200);

    // with fx
    canvas.ctx.strokeStyle = 'black';
    canvas.line.setWidth(30);
    canvas.line.roundCap();
    canvas.line.setDash([10, 20, 30, 40]);
    canvas.line.bevelJoin();
    draw2LinesAtRightAngle(canvas, 0);

    // reset
    canvas.ctx.strokeStyle = 'red';
    canvas.line.reset();
    draw2LinesAtRightAngle(canvas, 200);
}

// @ts-ignore
function testSetMiterLimit(canvas: Canvas): void { }

// @ts-ignore
function testDefaultMiterLimit(canvas: Canvas): void { }

// @ts-ignore
function drawHorizontallLine(canvas: Canvas, offsetY: number): void {
    canvas.ctx.beginPath();
    canvas.ctx.moveTo(50, canvas.center.y + offsetY);
    canvas.ctx.lineTo(canvas.width - 50, canvas.center.y + offsetY);
    canvas.ctx.stroke();
}

// @ts-ignore
function draw2LinesAtRightAngle(canvas: Canvas, offset: number): void {
    canvas.ctx.beginPath();
    canvas.ctx.moveTo(150 + offset, canvas.center.y + offset);
    canvas.ctx.lineTo(canvas.center.x + offset, canvas.center.y + offset);
    canvas.ctx.lineTo(canvas.center.x + offset, canvas.height - 150 + offset);
    canvas.ctx.stroke();
}

