/**
 * 
 */

// import { jest } from '@jest/globals';
import Canvas from '../lib/canvas.js';

function testSetAll() {
    describe('setAll()', () => {
        describe('sets ALL text properties in one command; each property set correctly', () => {

            test('sets ctx.textAlign to "center"', () => {
                const canvas = new Canvas();
                canvas.text.setAll({
                    align: 'center',
                    baseline: 'middle',
                    rendering: 'geometricPrecision',
                    wordSpacing: 20,
                    letterSpacing: 30,
                    direction: 'rtl'
                });
                expect(canvas.ctx.textAlign).toBe('center');
            });

            test('sets ctx.textBaseline to "middle"', () => {
                const canvas = new Canvas();
                canvas.text.setAll({
                    align: 'center',
                    baseline: 'middle',
                    rendering: 'geometricPrecision',
                    wordSpacing: 20,
                    letterSpacing: 30,
                    direction: 'rtl'
                });
                expect(canvas.ctx.textBaseline).toBe('middle');
            });

            test('sets ctx.textRendering to "geometricPrecision"', () => {
                const canvas = new Canvas();
                canvas.text.setAll({
                    align: 'center',
                    baseline: 'middle',
                    rendering: 'geometricPrecision',
                    wordSpacing: 20,
                    letterSpacing: 30,
                    direction: 'rtl'
                });
                expect(canvas.ctx.textRendering).toBe('geometricPrecision');
            });

            test('sets ctx.wordSpacing to 20', () => {
                const canvas = new Canvas();
                canvas.text.setAll({
                    align: 'center',
                    baseline: 'middle',
                    rendering: 'geometricPrecision',
                    wordSpacing: 20,
                    letterSpacing: 30,
                    direction: 'rtl'
                });
                expect(canvas.ctx.wordSpacing).toBe('20px');
            });

            test('sets ctx.letterSpacing to 30', () => {
                const canvas = new Canvas();
                canvas.text.setAll({
                    align: 'center',
                    baseline: 'middle',
                    rendering: 'geometricPrecision',
                    wordSpacing: 20,
                    letterSpacing: 30,
                    direction: 'rtl'
                });
                expect(canvas.ctx.letterSpacing).toBe('30px');
            });

            test('sets ctx.direction to "rtl"', () => {
                const canvas = new Canvas();
                canvas.text.setAll({
                    align: 'center',
                    baseline: 'middle',
                    rendering: 'geometricPrecision',
                    wordSpacing: 20,
                    letterSpacing: 30,
                    direction: 'rtl'
                });
                expect(canvas.ctx.direction).toBe('rtl');
            });

        });

        describe('can set a single property; each property set correctly', () => {

            test('sets ctx.textAlign to "center"', () => {
                const canvas = new Canvas();
                canvas.text.setAll({
                    align: 'center'
                });
                expect(canvas.ctx.textAlign).toBe('center');
            });

            test('sets ctx.textBaseline to "middle"', () => {
                const canvas = new Canvas();
                canvas.text.setAll({
                    baseline: 'middle'
                });
                expect(canvas.ctx.textBaseline).toBe('middle');
            });

            test('sets ctx.textRendering to "geometricPrecision"', () => {
                const canvas = new Canvas();
                canvas.text.setAll({
                    rendering: 'geometricPrecision'
                });
                expect(canvas.ctx.textRendering).toBe('geometricPrecision');
            });

            test('sets ctx.wordSpacing to 20', () => {
                const canvas = new Canvas();
                canvas.text.setAll({
                    wordSpacing: 20
                });
                expect(canvas.ctx.wordSpacing).toBe('20px');
            });

            test('sets ctx.letterSpacing to 30', () => {
                const canvas = new Canvas();
                canvas.text.setAll({
                    letterSpacing: 30
                });
                expect(canvas.ctx.letterSpacing).toBe('30px');
            });

            test('sets ctx.direction to "rtl"', () => {
                const canvas = new Canvas();
                canvas.text.setAll({
                    direction: 'rtl'
                });
                expect(canvas.ctx.direction).toBe('rtl');
            });

        });

    });
}

// align(value: CanvasTextAlign): void
function testAlign() {
    describe('align()', () => {
        test('sets canvas.ctx.textAlign = center', () => {
            const canvas = new Canvas();
            canvas.text.align('center');
            expect(canvas.ctx.textAlign).toBe('center');
        });
    });
}

// center(): void
function testCenter() {
    describe('center()', () => {
        test('sets canvas.ctx.textAlign = center', () => {
            const canvas = new Canvas();
            canvas.text.center();
            expect(canvas.ctx.textAlign).toBe('center');
        });
    });
}

// end(): void 
function testEnd() {
    describe('end()', () => {
        test('sets canvas.ctx.textAlign = end', () => {
            const canvas = new Canvas();
            canvas.text.end();
            expect(canvas.ctx.textAlign).toBe('end');
        });
    });
}

// left(): void
function testLeft() {
    describe('left()', () => {
        test('sets canvas.ctx.textAlign = left', () => {
            const canvas = new Canvas();
            canvas.text.left();
            expect(canvas.ctx.textAlign).toBe('left');
        });
    });
}

// right(): void
function testRight() {
    describe('right()', () => {
        test('sets canvas.ctx.textAlign = right', () => {
            const canvas = new Canvas();
            canvas.text.right();
            expect(canvas.ctx.textAlign).toBe('right');
        });
    });
}

// start(): void
function testStart() {
    describe('start()', () => {
        test('sets canvas.ctx.textAlign = start', () => {
            const canvas = new Canvas();
            canvas.text.start();
            expect(canvas.ctx.textAlign).toBe('start');
        });
    });
}

// baseline(value: CanvasTextBaseline): void
function testBaseline() {
    describe('baseline()', () => {
        test('sets canvas.ctx.textBaseAlign = middle', () => {
            const canvas = new Canvas();
            canvas.text.baseline('middle');
            expect(canvas.ctx.textBaseline).toBe('middle');
        });
    });
}

// alphabetic(): void
function testAlphabetic() {
    describe('alphabetic()', () => {
        test('sets canvas.ctx.textBaseAlign = alphabetic', () => {
            const canvas = new Canvas();
            canvas.text.alphabetic();
            expect(canvas.ctx.textBaseline).toBe('alphabetic');
        });
    });
}

// bottom(): void
function testBottom() {
    describe('bottom()', () => {
        test('sets canvas.ctx.textBaseAlign = bottom', () => {
            const canvas = new Canvas();
            canvas.text.bottom();
            expect(canvas.ctx.textBaseline).toBe('bottom');
        });
    });
}

// hanging(): void
function testHanging() {
    describe('hanging()', () => {
        test('sets canvas.ctx.textBaseAlign = hanging', () => {
            const canvas = new Canvas();
            canvas.text.hanging();
            expect(canvas.ctx.textBaseline).toBe('hanging');
        });
    });
}

// ideographic(): void
function testIdeographic() {
    describe('ideographic()', () => {
        test('sets canvas.ctx.textBaseAlign = ideographic', () => {
            const canvas = new Canvas();
            canvas.text.ideographic();
            expect(canvas.ctx.textBaseline).toBe('ideographic');
        });
    });
}

// middle(): void
function testMiddle() {
    describe('middle()', () => {
        test('sets canvas.ctx.textBaseAlign = middle', () => {
            const canvas = new Canvas();
            canvas.text.middle();
            expect(canvas.ctx.textBaseline).toBe('middle');
        });
    });
}

// top(): void
function testTop() {
    describe('top()', () => {
        test('sets canvas.ctx.textBaseAlign = top', () => {
            const canvas = new Canvas();
            canvas.text.top();
            expect(canvas.ctx.textBaseline).toBe('top');
        });
    });
}

// rendering(value: CanvasTextRendering): void
function testRendering() {
    describe('rendering()', () => {
        test('sets ctx.textRendering to "auto"', () => {
            const canvas = new Canvas();
            canvas.text.rendering('auto');
            expect(canvas.ctx.textRendering).toBe('auto');
        });
        test('sets ctx.textRendering to "geometricPrecision"', () => {
            const canvas = new Canvas();
            canvas.text.rendering('geometricPrecision');
            expect(canvas.ctx.textRendering).toBe('geometricPrecision');
        });
        test('sets ctx.textRendering to "optimizeLegibility"', () => {
            const canvas = new Canvas();
            canvas.text.rendering('optimizeLegibility');
            expect(canvas.ctx.textRendering).toBe('optimizeLegibility');
        });
        test('sets ctx.textRendering to "optimizeSpeed"', () => {
            const canvas = new Canvas();
            canvas.text.rendering('optimizeSpeed');
            expect(canvas.ctx.textRendering).toBe('optimizeSpeed');
        });
    });
}

function testAuto() {
    describe('auto()', () => {
        test('sets ctx.textRendering to "auto"', () => {
            const canvas = new Canvas();
            canvas.text.auto();
            expect(canvas.ctx.textRendering).toBe('auto');
        });
    });
}

function testPrecise() {
    describe('precise()', () => {
        test('sets ctx.textRendering to "geometricPrecision"', () => {
            const canvas = new Canvas();
            canvas.text.precise();
            expect(canvas.ctx.textRendering).toBe('geometricPrecision');
        });
    });
}

function testOptimize() {
    describe('optimise()', () => {
        test('sets ctx.textRendering to "optimizeLegibility"', () => {
            const canvas = new Canvas();
            canvas.text.optimize('legibility');
            expect(canvas.ctx.textRendering).toBe('optimizeLegibility');
        });
        test('sets ctx.textRendering to "optimizeSpeed"', () => {
            const canvas = new Canvas();
            canvas.text.optimize('speed');
            expect(canvas.ctx.textRendering).toBe('optimizeSpeed');
        });
    });
}

// wordSpacing(amount: number): void
function testWordSpacing() {
    describe('wordSpacing', () => {
        test('sets ctx.wordSpacing to "10px"', () => {
            const canvas = new Canvas();
            canvas.text.wordSpacing(10);
            expect(canvas.ctx.wordSpacing).toBe('10px');
        });
    });
}

// letterSpacing(amount: number): void
function testLetterSpacing() {
    describe('letterSpacing', () => {
        test('sets ctx.letterSpacing to "10px"', () => {
            const canvas = new Canvas();
            canvas.text.letterSpacing(10);
            expect(canvas.ctx.letterSpacing).toBe('10px');
        });
    });
}

// measure(text: string): TextMetrics
function testMeasure() {
    describe('measure()', () => {
        test('returns exact same object as ctx.measureText', () => {
            const canvas = new Canvas();
            expect(JSON.stringify(canvas.text.measure())).toBe(JSON.stringify(canvas.ctx.measureText()));
        });
    });
}

function testDirection() {
    describe('direction()', () => {
        test('sets ctx.direction to "ltr"', () => {
            const canvas = new Canvas();
            canvas.text.direction('ltr');
            expect(canvas.ctx.direction).toBe('ltr');
        });
    });
}

// rtl(): void
function testRtl() {
    describe('rtl()', () => {
        test('sets ctx.direction to "rtl"', () => {
            const canvas = new Canvas();
            canvas.text.rtl();
            expect(canvas.ctx.direction).toBe('rtl');
        });
    });
}

// ltr(): void
function testLtr() {
    describe('ltr()', () => {
        test('sets ctx.direction to "ltr"', () => {
            const canvas = new Canvas();
            canvas.text.ltr();
            expect(canvas.ctx.direction).toBe('ltr');
        });
    });
}

// inherit(): void
function testInherit() {
    describe('inherit()', () => {
        test('sets ctx.direction to "inherit"', () => {
            const canvas = new Canvas();
            canvas.text.inherit();
            expect(canvas.ctx.direction).toBe('inherit');
        });
    });
}

describe('CanvasText', () => {
    testSetAll();
    testAlign();
    testCenter();
    testEnd();
    testLeft();
    testRight();
    testStart();
    testBaseline();
    testAlphabetic();
    testBottom();
    testHanging();
    testIdeographic();
    testMiddle();
    testTop();
    testRendering();
    testAuto();
    testPrecise();
    testOptimize();
    testWordSpacing();
    testLetterSpacing();
    testMeasure();
    testDirection();
    testRtl();
    testLtr();
    testInherit();

});