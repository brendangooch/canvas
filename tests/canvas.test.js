/**
 * 
 */

// import { jest } from '@jest/globals';
import Canvas from '../lib/canvas.js';

function testGetDimensions() {
    describe('returns correct dimensions', () => {
        const width = 500;
        const height = 500;
        const canvas = new Canvas({ width: width, height: height });
        test('get width() returns correct width', () => {
            expect(canvas.width).toBe(width);
        });

        test('get height() returns correct height', () => {
            expect(canvas.height).toBe(height);
        });

        test('get center() returns correct x and y coordinates', () => {
            expect(canvas.center.x).toBe(width / 2);
            expect(canvas.center.y).toBe(height / 2);
        });
    });
}

function testSmoothing() {
    describe('ctx smoothing is set correctly', () => {
        test('sets low quality smoothing', () => {
            const canvas = new Canvas({});
            canvas.enableSmoothing('low');
            expect(canvas.ctx.imageSmoothingQuality).toBe('low');
            expect(canvas.ctx.imageSmoothingEnabled).toBeTruthy();
        });
        test('sets medium quality smoothing', () => {
            const canvas = new Canvas({});
            canvas.enableSmoothing('medium');
            expect(canvas.ctx.imageSmoothingQuality).toBe('medium');
            expect(canvas.ctx.imageSmoothingEnabled).toBeTruthy();
        });
        test('sets high quality smoothing', () => {
            const canvas = new Canvas({});
            canvas.enableSmoothing('high');
            expect(canvas.ctx.imageSmoothingQuality).toBe('high');
            expect(canvas.ctx.imageSmoothingEnabled).toBeTruthy();
        });
        test('disables smoothing', () => {
            const canvas = new Canvas({});
            canvas.enableSmoothing('high');
            canvas.disableSmoothing();
            expect(canvas.ctx.imageSmoothingEnabled).toBeFalsy();
        });
    });
}

function testOpacity() {
    describe('ctx.globalAlpha set correctly', () => {

        test('sets ctx.globalAlpha to 0.5', () => {
            const canvas = new Canvas({});
            canvas.opacity(0.5);
            expect(canvas.ctx.globalAlpha).toBe(0.5);
        });
        test('cannot set a value higher than 1', () => {
            const canvas = new Canvas({});
            canvas.opacity(1.01);
            expect(canvas.ctx.globalAlpha).toBe(1);
            canvas.opacity(2);
            expect(canvas.ctx.globalAlpha).toBe(1);
        });

        test('cannot set a value lower than 0', () => {
            const canvas = new Canvas({});
            canvas.opacity(-0.01);
            expect(canvas.ctx.globalAlpha).toBe(0);
            canvas.opacity(-1);
            expect(canvas.ctx.globalAlpha).toBe(0);
            canvas.opacity(-2);
            expect(canvas.ctx.globalAlpha).toBe(0);
        });

    });
}

describe('Canvas', () => {
    testGetDimensions();
    testSmoothing();
    testOpacity();



});