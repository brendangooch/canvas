/**
 * tests for the Canvas path component
 */

import Canvas from "../module/canvas.js";

// all tests - comment/uncomment as required
// @ts-ignore
export default function (canvas: Canvas): void {

    // (tested)
    // testFill(canvas);                // WORKING
    // testFill2(canvas);               // WORKING
    // testStroke(canvas);              // WORKING
    // testMoveTo(canvas);              // WORKING
    // testLineTo(canvas);              // WORKING
    // testLine(canvas);                // WORKING
    // testArc(canvas);                 // WORKING
    // testRect(canvas);                // WORKING
    // testCircle(canvas);              // WORKING
    // testSquare(canvas);              // WORKING

    // (test functionality as needed)
    // testIsPointInPath(canvas);
    // testIsPointInPath2(canvas);
    // testIsPointInStroke(canvas);
    // testClose(canvas);
    // testClip(canvas);
    // testClip2(canvas);
    // testArcTo(canvas);
    // testBezierCurveTo(canvas);
    // testQuadraticCurveTo(canvas);
    // testEllipse(canvas);

}

// public fill(): void
// @ts-ignore
function testFill(canvas: Canvas): void {
    canvas.translate(canvas.center.x, canvas.center.y);
    canvas.path.fill(() => {
        canvas.path.circle(200);
    });
}

// public fill2(): void
// @ts-ignore
function testFill2(canvas: Canvas): void {
    canvas.translate(canvas.center.x, canvas.center.y);
    canvas.path.fill2(() => {
        canvas.path.circle(200);
    });
}

// public stroke(): void
// @ts-ignore
function testStroke(canvas: Canvas): void {
    canvas.translate(canvas.center.x, canvas.center.y);
    canvas.path.stroke(() => {
        canvas.path.circle(200);
    });
}

// public moveTo(x: number, y: number): void
// @ts-ignore
function testMoveTo(canvas: Canvas): void {
    canvas.path.stroke(() => {
        canvas.path.moveTo(canvas.center.x, 0);
        canvas.path.lineTo(canvas.center.x, canvas.height);
    });
}

// public lineTo(x: number, y: number): void
// @ts-ignore
function testLineTo(canvas: Canvas): void {
    canvas.path.stroke(() => {
        canvas.path.moveTo(0, canvas.center.y);
        canvas.path.lineTo(canvas.width, canvas.center.y);
    });
}

// public line(x1: number, y1: number, x2: number, y2: number): void
// @ts-ignore
function testLine(canvas: Canvas): void {
    canvas.path.stroke(() => {
        canvas.path.line(0, 0, canvas.width, canvas.height);
    });
}

// public arc(radius: number, startAngle: number, endAngle: number, counterclockwise: boolean = false): void
// @ts-ignore
function testArc(canvas: Canvas): void {
    canvas.translate(canvas.center.x, canvas.center.y);
    // black circle
    canvas.path.fill(() => {
        canvas.path.arc(200, 0, Math.PI * 2);
    });
    // green circle
    canvas.ctx.fillStyle = 'green';
    canvas.path.fill(() => {
        canvas.path.arc(150, 0, Math.PI * 2);
    });
    // black slice
    canvas.ctx.fillStyle = 'black';
    canvas.path.fill(() => {
        canvas.path.arc(100, Math.PI / 2, Math.PI / 2 * 3);
    });
}

// public rect(width: number, height: number, radii: number | number[] = 0): void
// @ts-ignore
function testRect(canvas: Canvas): void {
    canvas.translate(canvas.center.x, canvas.center.y);
    // no rounding
    canvas.path.fill(() => {
        canvas.path.rect(200, 100);
    });
    // rounding
    canvas.path.stroke(() => {
        canvas.path.rect(400, 200, 50);
    });
}

// public circle(radius: number): void
// @ts-ignore
function testCircle(canvas: Canvas): void {
    canvas.translate(canvas.center.x, canvas.center.y);
    canvas.ctx.lineWidth = 10;
    let alpha = 0;
    for (let i = 0; i < 10; i++) {
        alpha += 0.1;
        canvas.ctx.globalAlpha = alpha;
        canvas.path.stroke(() => {
            canvas.path.circle(i * 25);
        });
    }
}

// public square(length: number, radii: number | number[] = 0): void
// @ts-ignore
function testSquare(canvas: Canvas): void {
    canvas.translate(canvas.center.x, canvas.center.y);
    canvas.ctx.lineWidth = 6;
    let alpha = 0;
    canvas.path.fill(() => {
        canvas.path.square(300, 0);
    });
    canvas.ctx.strokeStyle = 'white';
    for (let i = 0; i < 10; i++) {
        alpha += 0.1;
        canvas.ctx.globalAlpha = alpha;
        canvas.path.stroke(() => {
            canvas.path.square(i * 25, i * 5);
        });
    }
}

// public isPointInPath(x: number, y: number): boolean
// @ts-ignore
function testIsPointInPath(canvas: Canvas): void {

}

// public isPointInPath2(x: number, y: number): boolean
// @ts-ignore
function testIsPointInPath2(canvas: Canvas): void {

}

// public isPointInStroke(x: number, y: number): boolean
// @ts-ignore
function testIsPointInStroke(canvas: Canvas): void {

}

// public close(): void
// @ts-ignore
function testClose(canvas: Canvas): void {

}

// public clip(): void
// @ts-ignore
function testClip(canvas: Canvas): void {

}

// public clip2(): void
// @ts-ignore
function testClip2(canvas: Canvas): void {

}

// public arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void
// @ts-ignore
function testArcTo(canvas: Canvas): void {

}

// public bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void
// @ts-ignore
function testBezierCurveTo(canvas: Canvas): void {

}

// public quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void
// @ts-ignore
function testQuadraticCurveTo(canvas: Canvas): void {

}

// public ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, counterclockwise: boolean = false): void
// @ts-ignore
function testEllipse(canvas: Canvas): void {

}