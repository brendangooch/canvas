/**
 * tests for the Canvas color component
 */

import Canvas from "../module/canvas.js";

// @ts-ignore
import loadImage from "../lib/utils/load-image.js";

// all tests - comment/uncomment as required
// @ts-ignore
export default function (canvas: Canvas): void {
    // testFill(canvas);            // WORKING
    // testStroke(canvas);          // WORKING
    // testChange(canvas);          // WORKING
    // testLinear(canvas);          // WORKING
    // testRadial(canvas);          // WORKING
    // testConic(canvas);           // WORKING (I think - I don't know the effect very well)
    // testPattern(canvas);         // WORKING
    // testReset(canvas);           // WORKING
}

// @ts-ignore
function testFill(canvas: Canvas): void {

    const spacing = 100;
    const radius = 200;

    canvas.ctx.save();
    canvas.ctx.translate(canvas.center.x - spacing, canvas.center.y);
    canvas.ctx.beginPath();
    circle(canvas, radius);
    canvas.ctx.fill();
    canvas.ctx.restore();

    canvas.ctx.save();
    canvas.color.fill('red'); // <--
    canvas.ctx.translate(canvas.center.x + spacing, canvas.center.y);
    canvas.ctx.beginPath();
    circle(canvas, 200);
    canvas.ctx.fill();
    canvas.ctx.restore();

}

// @ts-ignore
function testStroke(canvas: Canvas): void {

    const spacing = 100;
    const radius = 200;

    canvas.ctx.lineWidth = 20;

    canvas.ctx.save();
    canvas.ctx.translate(canvas.center.x - spacing, canvas.center.y);
    canvas.ctx.beginPath();
    circle(canvas, radius);
    canvas.ctx.stroke();
    canvas.ctx.restore();

    canvas.ctx.save();
    canvas.color.stroke('red'); // <--
    canvas.ctx.translate(canvas.center.x + spacing, canvas.center.y);
    canvas.ctx.beginPath();
    circle(canvas, 200);
    canvas.ctx.stroke();
    canvas.ctx.restore();

}

// @ts-ignore
function testChange(canvas: Canvas): void {

    const spacing = 100;
    const radius = 200;

    canvas.ctx.lineWidth = 20;

    canvas.ctx.save();
    canvas.color.change('fill', 'red'); // <--
    canvas.ctx.translate(canvas.center.x - spacing, canvas.center.y);
    canvas.ctx.beginPath();
    circle(canvas, radius);
    canvas.ctx.fill();
    canvas.ctx.restore();

    canvas.ctx.save();
    canvas.color.change('stroke', 'yellow'); // <--
    canvas.ctx.translate(canvas.center.x + spacing, canvas.center.y);
    canvas.ctx.beginPath();
    circle(canvas, 200);
    canvas.ctx.stroke();
    canvas.ctx.restore();

}

// @ts-ignore
function testLinear(canvas: Canvas): void {

    canvas.ctx.lineWidth = 20;

    // filled rectangle
    canvas.ctx.save();

    canvas.ctx.translate(canvas.center.x, canvas.center.y);

    canvas.color.linear(-canvas.width / 2, canvas.center.y, canvas.width / 2, canvas.center.y);
    canvas.color.addColorStop(0, 'black');
    canvas.color.addColorStop(1, 'white');
    canvas.color.applyGradient('fill');

    canvas.ctx.beginPath();
    rectangle(canvas, canvas.width, canvas.height);
    canvas.ctx.fill();

    canvas.ctx.restore();

    // stroked circle
    canvas.ctx.save();

    canvas.ctx.translate(canvas.center.x, canvas.center.y);

    // canvas.color.linear(-canvas.width / 2, canvas.center.y, canvas.width / 2, canvas.center.y);
    canvas.color.linear(-150, canvas.center.y, 150, canvas.center.y);
    canvas.color.addColorStop(0, 'white');
    canvas.color.addColorStop(1, 'black');
    canvas.color.applyGradient('stroke');

    canvas.ctx.beginPath();
    circle(canvas, 300);
    canvas.ctx.stroke();

    canvas.ctx.restore();

}

// @ts-ignore
function testRadial(canvas: Canvas): void {

    canvas.ctx.lineWidth = 100;

    // filled rectangle
    canvas.ctx.save();

    canvas.ctx.translate(canvas.center.x, canvas.center.y);

    canvas.color.radial(0, 0, 0, 0, 0, 2000);
    canvas.color.addColorStop(0, 'black');
    canvas.color.addColorStop(1, 'white');
    canvas.color.applyGradient('fill');

    canvas.ctx.beginPath();
    rectangle(canvas, canvas.width, canvas.height);
    canvas.ctx.fill();

    canvas.ctx.restore();

    // stroked circle
    canvas.ctx.save();

    canvas.ctx.translate(canvas.center.x, canvas.center.y);

    // canvas.color.linear(-canvas.width / 2, canvas.center.y, canvas.width / 2, canvas.center.y);
    canvas.color.radial(0, 0, 0, 0, 0, 500);
    canvas.color.addColorStop(0, 'white');
    canvas.color.addColorStop(1, 'black');
    canvas.color.applyGradient('stroke');

    canvas.ctx.beginPath();
    circle(canvas, 300);
    canvas.ctx.stroke();

    canvas.ctx.restore();

}

// @ts-ignore
function testConic(canvas: Canvas): void {

    canvas.ctx.lineWidth = 100;

    // filled rectangle
    canvas.ctx.save();

    canvas.ctx.translate(canvas.center.x, canvas.center.y);

    canvas.color.conic(0.5, 0, canvas.center.y);
    canvas.color.addColorStop(0, 'black');
    canvas.color.addColorStop(1, 'white');
    canvas.color.applyGradient('fill');

    canvas.ctx.beginPath();
    rectangle(canvas, canvas.width, canvas.height);
    canvas.ctx.fill();

    canvas.ctx.restore();

    // stroked circle
    canvas.ctx.save();

    canvas.ctx.translate(canvas.center.x, canvas.center.y);

    canvas.color.conic(0, 0, 0);
    canvas.color.addColorStop(0, 'black');
    canvas.color.addColorStop(0.5, 'white');
    canvas.color.addColorStop(0.75, 'black');
    canvas.color.addColorStop(0.5, 'white');
    canvas.color.applyGradient('stroke');

    canvas.ctx.beginPath();
    circle(canvas, 300);
    canvas.ctx.stroke();

    canvas.ctx.restore();

}

// @ts-ignore
async function testPattern(canvas: Canvas) {

    const img = await loadImage('./joker-color.png');

    canvas.ctx.translate(canvas.center.x, canvas.center.y);

    canvas.ctx.save();
    canvas.ctx.lineWidth = 5;
    canvas.color.pattern('fill', img, 'repeat'); // <--
    canvas.ctx.beginPath();
    circle(canvas, 225);
    canvas.ctx.fill();
    canvas.ctx.stroke();
    canvas.ctx.restore();

    canvas.ctx.save();
    canvas.ctx.lineWidth = 50;
    canvas.color.pattern('stroke', img, 'repeat'); // <--
    canvas.ctx.beginPath();
    circle(canvas, 300);
    canvas.ctx.stroke();
    canvas.ctx.restore();

    canvas.ctx.save();
    canvas.ctx.lineWidth = 5;
    canvas.ctx.beginPath();
    circle(canvas, 275);
    canvas.ctx.stroke();
    canvas.ctx.restore();

    canvas.ctx.save();
    canvas.ctx.lineWidth = 5;
    canvas.ctx.beginPath();
    circle(canvas, 325);
    canvas.ctx.stroke();
    canvas.ctx.restore();

    canvas.ctx.save();
    canvas.ctx.lineWidth = 50;
    canvas.color.pattern('stroke', img, 'repeat'); // <--
    canvas.ctx.beginPath();
    circle(canvas, 400);
    canvas.ctx.stroke();
    canvas.ctx.restore();

    canvas.ctx.save();
    canvas.ctx.lineWidth = 5;
    canvas.ctx.beginPath();
    circle(canvas, 375);
    canvas.ctx.stroke();
    canvas.ctx.restore();

    canvas.ctx.save();
    canvas.ctx.lineWidth = 5;
    canvas.ctx.beginPath();
    circle(canvas, 425);
    canvas.ctx.stroke();
    canvas.ctx.restore();



}

// @ts-ignore
function testReset(canvas: Canvas): void {

    canvas.ctx.translate(canvas.center.x, canvas.center.y);

    // 500 - gradient
    canvas.color.linear(-200, 0, 200, 0);
    canvas.color.addColorStop(0, 'black');
    canvas.color.addColorStop(1, 'white');
    canvas.color.applyGradient('fill');
    canvas.ctx.beginPath();
    circle(canvas, 500);
    canvas.ctx.fill();

    // 400 - red fill
    canvas.color.change('fill', 'red');
    canvas.ctx.beginPath();
    circle(canvas, 400);
    canvas.ctx.fill();

    // 300 - blue stroke
    canvas.ctx.lineWidth = 50;
    canvas.color.change('stroke', 'blue');
    canvas.ctx.beginPath();
    circle(canvas, 300);
    canvas.ctx.stroke();

    // reset
    canvas.color.reset(); // <--

    // 200 - black stroke
    canvas.ctx.lineWidth = 20;
    canvas.ctx.beginPath();
    circle(canvas, 200);
    canvas.ctx.stroke();

    // 100 - black fill
    canvas.ctx.beginPath();
    circle(canvas, 100);
    canvas.ctx.fill();


}

// @ts-ignore
function circle(canvas: Canvas, radius: number): void {
    canvas.ctx.arc(0, 0, radius, 0, Math.PI * 2, false);
}

// @ts-ignore
function rectangle(canvas: Canvas, width: number, height: number): void {
    canvas.ctx.rect(-width / 2, -height / 2, width, height);
}