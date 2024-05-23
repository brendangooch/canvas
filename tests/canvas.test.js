/**
 * 
 */

// import { jest } from '@jest/globals';
import Canvas from '../lib/canvas.js';

function testGetDimensions() {
    describe('returns correct dimensions', () => {
        const canvas = new Canvas();
        test('get width() returns correct width', () => {
            expect(canvas.width).toBe(Canvas.WIDTH);
        });

        test('get height() returns correct height', () => {
            expect(canvas.height).toBe(Canvas.HEIGHT);
        });

        test('get center() returns correct x and y coordinates', () => {
            expect(canvas.center.x).toBe(Canvas.WIDTH / 2);
            expect(canvas.center.y).toBe(Canvas.HEIGHT / 2);
        });
    });
}

function testSmoothing() {
    describe('ctx smoothing is set correctly', () => {
        test('sets low quality smoothing', () => {
            const canvas = new Canvas();
            canvas.enableSmoothing('low');
            expect(canvas.ctx.imageSmoothingQuality).toBe('low');
            expect(canvas.ctx.imageSmoothingEnabled).toBeTruthy();
        });
        test('sets medium quality smoothing', () => {
            const canvas = new Canvas();
            canvas.enableSmoothing('medium');
            expect(canvas.ctx.imageSmoothingQuality).toBe('medium');
            expect(canvas.ctx.imageSmoothingEnabled).toBeTruthy();
        });
        test('sets high quality smoothing', () => {
            const canvas = new Canvas();
            canvas.enableSmoothing('high');
            expect(canvas.ctx.imageSmoothingQuality).toBe('high');
            expect(canvas.ctx.imageSmoothingEnabled).toBeTruthy();
        });
        test('disables smoothing', () => {
            const canvas = new Canvas();
            canvas.enableSmoothing('high');
            canvas.disableSmoothing();
            expect(canvas.ctx.imageSmoothingEnabled).toBeFalsy();
        });
    });
}

function testSetOpacity() {
    describe('ctx.globalAlpha set correctly', () => {

        test('sets ctx.globalAlpha to 0.5', () => {
            const canvas = new Canvas();
            canvas.setOpacity(0.5);
            expect(canvas.ctx.globalAlpha).toBe(0.5);
        });
        test('cannot set a value higher than 1', () => {
            const canvas = new Canvas();
            canvas.setOpacity(1.01);
            expect(canvas.ctx.globalAlpha).toBe(1);
            canvas.setOpacity(2);
            expect(canvas.ctx.globalAlpha).toBe(1);
        });

        test('cannot set a value lower than 0', () => {
            const canvas = new Canvas();
            canvas.setOpacity(-0.01);
            expect(canvas.ctx.globalAlpha).toBe(0);
            canvas.setOpacity(-1);
            expect(canvas.ctx.globalAlpha).toBe(0);
            canvas.setOpacity(-2);
            expect(canvas.ctx.globalAlpha).toBe(0);
        });

    });
}

describe('Canvas', () => {
    testGetDimensions();
    testSmoothing();
    testSetOpacity();



});