/**
 * 
 */

// import { jest } from '@jest/globals';
import Canvas from '../lib/canvas.js';

function testBlur() {
    describe('blur()', () => {
        const canvas = new Canvas();
        test('sets ctx.shadowBlur to 10', () => {
            canvas.shadow.blur(10);
            expect(canvas.ctx.shadowBlur).toBe(10);
        });
        test('0 sets ctx.shadowBlur to 0 (default)', () => {
            canvas.shadow.blur(0);
            expect(canvas.ctx.shadowBlur).toBe(0);
        });
        test('negative amount sets ctx.shadowBlur to 0', () => {
            canvas.shadow.blur(0);
            expect(canvas.ctx.shadowBlur).toBe(0);
        });
    });
}

function testColor() {
    describe('color()', () => {
        const canvas = new Canvas();
        test('sets ctx.shadowColor to "#ff0000"', () => {
            canvas.shadow.color('red');
            expect(canvas.ctx.shadowColor).toBe('#ff0000');
        });
    });
}

function testOffsetX() {
    describe('offsetX()', () => {
        const canvas = new Canvas();
        test('sets ctx.shadowOffsetX to 10', () => {
            canvas.shadow.offsetX(10);
            expect(canvas.ctx.shadowOffsetX).toBe(10);
        });
        test('sets ctx.shadowOffsetX to -10', () => {
            canvas.shadow.offsetX(-10);
            expect(canvas.ctx.shadowOffsetX).toBe(-10);
        });
        test('sets ctx.shadowOffsetX to 0', () => {
            canvas.shadow.offsetX(0);
            expect(canvas.ctx.shadowOffsetX).toBe(0);
        });
    });
}

function testOffsetY() {
    describe('offsetY()', () => {
        const canvas = new Canvas();
        test('sets ctx.shadowOffsetY to 10', () => {
            canvas.shadow.offsetY(10);
            expect(canvas.ctx.shadowOffsetY).toBe(10);
        });
        test('sets ctx.shadowOffsetY to -10', () => {
            canvas.shadow.offsetY(-10);
            expect(canvas.ctx.shadowOffsetY).toBe(-10);
        });
        test('sets ctx.shadowOffsetX to 0', () => {
            canvas.shadow.offsetY(0);
            expect(canvas.ctx.shadowOffsetY).toBe(0);
        });
    });
}

function testSetAll() {

    describe('setAll({x, y, blur, color})', () => {

        describe('canvas.shadow.setAll({x: 20, y: 20, blur: 10, color: "#ff0000"}):', () => {
            const canvas = new Canvas();
            canvas.shadow.setAll({
                x: 20,
                y: 20,
                blur: 10,
                color: '#ff0000'
            });
            test('sets ctx.shadowOffsetX to 20', () => {
                expect(canvas.ctx.shadowOffsetX).toBe(20);
            });
            test('sets ctx.shadowOffsetY to 20', () => {
                expect(canvas.ctx.shadowOffsetY).toBe(20);
            });
            test('sets ctx.shadowBlur to 10', () => {
                expect(canvas.ctx.shadowBlur).toBe(10);
            });
            test('sets ctx.shadowColor to "#ff0000"', () => {
                expect(canvas.ctx.shadowColor).toBe('#ff0000');
            });
        });

        describe('canvas.shadow.setAll({x: 5, y: 5, blur: 0}):', () => {
            const canvas = new Canvas();
            canvas.shadow.setAll({
                x: 5,
                y: 5,
                blur: 0
            });
            test('sets ctx.shadowOffsetX to 5', () => {
                expect(canvas.ctx.shadowOffsetX).toBe(5);
            });
            test('sets ctx.shadowOffsetY to 5', () => {
                expect(canvas.ctx.shadowOffsetY).toBe(5);
            });
            test('sets ctx.shadowBlur to 0', () => {
                expect(canvas.ctx.shadowBlur).toBe(0);
            });
            test('ctx.shadowColor remains "#000000"', () => {
                expect(canvas.ctx.shadowColor).toBe('rgba(0, 0, 0, 0.00)');
            });
        });

    });
}

describe('CanvasShadow', () => {
    testBlur();
    testColor();
    testOffsetX();
    testOffsetY();
    testSetAll();

});