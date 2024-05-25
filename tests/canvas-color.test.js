/**
 * 
 */

// import { jest } from '@jest/globals';
import Canvas from '../lib/canvas.js';

function testFill() {
    describe('fill()', () => {
        const canvas = new Canvas({});
        canvas.color.fill('#ff0000');
        test('sets correct color on context.fillStyle', () => {
            expect(canvas.ctx.fillStyle).toBe('#ff0000');
        });
    });
}

function testStroke() {
    describe('stroke()', () => {
        const canvas = new Canvas({});
        canvas.color.stroke('#ff0000');
        test('sets correct color on context.strokeStyle', () => {
            expect(canvas.ctx.strokeStyle).toBe('#ff0000');
        });
    });
}

function testChange() {
    describe('change()', () => {
        const canvas = new Canvas({});
        canvas.color.change('fill', '#ff0000');
        test('sets correct color on context.fillStyle', () => {
            expect(canvas.ctx.fillStyle).toBe('#ff0000');
        });
        canvas.color.change('stroke', '#ff0000');
        test('sets correct color on context.strokeStyle', () => {
            expect(canvas.ctx.strokeStyle).toBe('#ff0000');
        });
    });
}

function testReset() {
    describe('reset()', () => {
        const canvas = new Canvas({});
        canvas.color.fill('#ff0000');
        canvas.color.stroke('#ff0000');
        canvas.color.reset();
        test('sets fillStyle and strokeStyle back to "black"', () => {
            expect(canvas.ctx.fillStyle).toBe('#000000');
            expect(canvas.ctx.strokeStyle).toBe('#000000');
        });
    });
}

describe('CanvasColor', () => {
    testFill();
    testStroke();
    testChange();
    testReset();

});