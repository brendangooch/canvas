/**
 * 
 */

// import { jest } from '@jest/globals';
import Canvas from '../lib/canvas.js';

describe('CanvasFilter', () => {

    let canvas;
    beforeEach(() => {
        canvas = new Canvas({});
    });

    describe('reset()', () => {
        test('sets ctx.filter back to "none"', () => {
            canvas.filter.blur(10);
            canvas.filter.brightness(10);
            canvas.filter.reset();
            expect(canvas.ctx.filter).toBe('none');
        });
    });

    // blur()
    // public blur(amount: number): void
    // blur(${amount}px)
    describe('blur()', () => {

        test('sets ctx.filter to blur(5px)', () => {
            canvas.filter.blur(5);
            expect(canvas.ctx.filter).toBe('blur(5px)');
        });

        test('value of 0 does not add the filter', () => {
            canvas.filter.blur(0);
            expect(canvas.ctx.filter).toBe('none');
        });

        test('negative value does not add the filter', () => {
            canvas.filter.blur(-1);
            expect(canvas.ctx.filter).toBe('none');
        });


    });

    // brightness()
    // public brightness(amount: number): void
    describe('brightness()', () => {

        test('sets ctx.filter to brightness(5)', () => {
            canvas.filter.brightness(5);
            expect(canvas.ctx.filter).toBe('brightness(5)');
        });

        test('value of 0 does not add the filter', () => {
            canvas.filter.brightness(0);
            expect(canvas.ctx.filter).toBe('none');
        });

        test('negative value does not add the filter', () => {
            canvas.filter.brightness(-1);
            expect(canvas.ctx.filter).toBe('none');
        });

    });

    // contrast()
    // 1 == no effect; 2 == double; 0 == gray
    // public contrast(amount: number): void {
    describe('contrast()', () => {

        test('sets ctx.filter to contrast(5)', () => {
            canvas.filter.contrast(5);
            expect(canvas.ctx.filter).toBe('contrast(5)');
        });

        test('value of 0 DOES add the filter', () => {
            canvas.filter.contrast(0);
            expect(canvas.ctx.filter).toBe('contrast(0)');
        });

        test('negative value sets ctx.filter to contrast(0)', () => {
            canvas.filter.contrast(-1);
            expect(canvas.ctx.filter).toBe('contrast(0)');
        });

    });


    // drop-shadow()
    // all number values are px
    // defaults to black
    // public dropShadow(offsetX: number, offsetY: number, amount: number = 0, color: string = 'black'): void {
    describe('drop-shadow()', () => {

        test('sets ctx.filter to drop-shadow(5px 5px 10px red)', () => {
            canvas.filter.dropShadow(5, 5, 10, 'red');
            expect(canvas.ctx.filter).toBe('drop-shadow(5px 5px 10px red)');
        });

        test('amount of 0 sets ctx.filter to drop-shadow(5px 5px red)', () => {
            canvas.filter.dropShadow(5, 5, 0, 'red');
            expect(canvas.ctx.filter).toBe('drop-shadow(5px 5px red)');
        });

        test('negative amount sets ctx.filter to drop-shadow(5px 5px red)', () => {
            canvas.filter.dropShadow(5, 5, -1, 'red');
            expect(canvas.ctx.filter).toBe('drop-shadow(5px 5px red)');
        });

        test('no amount or color specified sets ctx.filter to drop-shadow(5px 5px black)', () => {
            canvas.filter.dropShadow(5, 5);
            expect(canvas.ctx.filter).toBe('drop-shadow(5px 5px black)');
        });

    });

    // grayscale()
    // 0 - 1 - clamp value
    describe('grayScale()', () => {

        test('sets ctx.filter to grayscale(0.5)', () => {
            canvas.filter.grayscale(0.5);
            expect(canvas.ctx.filter).toBe('grayscale(0.5)');
        });

        test('amount of 1 sets ctx.filter to grayscale(1)', () => {
            canvas.filter.grayscale(1);
            expect(canvas.ctx.filter).toBe('grayscale(1)');
        });

        test('amount of 0 does not add the filter', () => {
            canvas.filter.grayscale(0);
            expect(canvas.ctx.filter).toBe('none');
        });

        test('negative amount does not add the filter', () => {
            canvas.filter.grayscale(-1);
            expect(canvas.ctx.filter).toBe('none');
        });

        test('amount over 1 is clamped to 1', () => {
            canvas.filter.grayscale(1.1);
            expect(canvas.ctx.filter).toBe('grayscale(1)');
        });

    });

    // hue-rotate() degrees
    // public hueRotate(degrees: number): void {
    describe('hue-rotate()', () => {

        test('sets ctx.filter to hue-rotate(10deg)', () => {
            canvas.filter.hueRotate(10);
            expect(canvas.ctx.filter).toBe('hue-rotate(10deg)');
        });

        test('amount of 0 does not add the filter', () => {
            canvas.filter.hueRotate(0);
            expect(canvas.ctx.filter).toBe('none');
        });

        test('can accept a negative amount', () => {
            canvas.filter.hueRotate(-10);
            expect(canvas.ctx.filter).toBe('hue-rotate(-10deg)');
        });

    });


    // invert()
    // amount clamped to 0 - 1
    // public invert(amount: number): void {
    describe('invert()', () => {

        test('sets ctx.filter to invert(0.5)', () => {
            canvas.filter.invert(0.5);
            expect(canvas.ctx.filter).toBe('invert(0.5)');
        });

        test('amount of 1 sets ctx.filter to invert(1)', () => {
            canvas.filter.invert(1);
            expect(canvas.ctx.filter).toBe('invert(1)');
        });

        test('amount of 0 does not add the filter', () => {
            canvas.filter.invert(0);
            expect(canvas.ctx.filter).toBe('none');
        });

        test('negative amount does not add the filter', () => {
            canvas.filter.invert(-1);
            expect(canvas.ctx.filter).toBe('none');
        });

        test('amount over 1 is clamped to 1', () => {
            canvas.filter.invert(1.1);
            expect(canvas.ctx.filter).toBe('invert(1)');
        });

    });

    // opacity()
    // amount clamped to 0 - 1
    // public opacity(amount: number): void {
    describe('opacity()', () => {

        test('sets ctx.filter to opacity(0.5)', () => {
            canvas.filter.opacity(0.5);
            expect(canvas.ctx.filter).toBe('opacity(0.5)');
        });

        test('amount of 1 sets ctx.filter to opacity(1)', () => {
            canvas.filter.opacity(1);
            expect(canvas.ctx.filter).toBe('opacity(1)');
        });

        test('amount of 0 DOES add the filter', () => {
            canvas.filter.opacity(0);
            expect(canvas.ctx.filter).toBe('opacity(0)');
        });

        test('negative amount sets ctx.filter to opacity(0)', () => {
            canvas.filter.opacity(-1);
            expect(canvas.ctx.filter).toBe('opacity(0)');
        });

        test('amount over 1 is clamped to 1', () => {
            canvas.filter.opacity(1.1);
            expect(canvas.ctx.filter).toBe('opacity(1)');
        });

    });

    // saturate()
    // 0 == desaturated; 1 == normal; 2 == double
    // public saturate(amount: number): void {
    describe('saturate()', () => {

        test('sets ctx.filter to saturate(5)', () => {
            canvas.filter.saturate(5);
            expect(canvas.ctx.filter).toBe('saturate(5)');
        });

        test('value of 0 DOES add the filter', () => {
            canvas.filter.saturate(0);
            expect(canvas.ctx.filter).toBe('saturate(0)');
        });

        test('negative value sets ctx.filter to saturate(0)', () => {
            canvas.filter.saturate(-1);
            expect(canvas.ctx.filter).toBe('saturate(0)');
        });

    });

    // sepia()
    // amount clamped to 0 - 1
    // public sepia(amount: number): void {
    describe('sepia()', () => {

        test('sets ctx.filter to sepia(0.5)', () => {
            canvas.filter.sepia(0.5);
            expect(canvas.ctx.filter).toBe('sepia(0.5)');
        });

        test('amount of 1 sets ctx.filter to sepia(1)', () => {
            canvas.filter.sepia(1);
            expect(canvas.ctx.filter).toBe('sepia(1)');
        });

        test('amount of 0 does not add the filter', () => {
            canvas.filter.sepia(0);
            expect(canvas.ctx.filter).toBe('none');
        });

        test('negative amount does not add the filter', () => {
            canvas.filter.sepia(-1);
            expect(canvas.ctx.filter).toBe('none');
        });

        test('amount over 1 is clamped to 1', () => {
            canvas.filter.sepia(1.1);
            expect(canvas.ctx.filter).toBe('sepia(1)');
        });

    });

    // can add multiple filters
    describe('can add multiple filters', () => {

        test('sets ctx.filter to "blur(5px) brightness(2) contrast(1.5)"', () => {
            canvas.filter.blur(5);
            canvas.filter.brightness(2);
            canvas.filter.contrast(1.5);
            expect(canvas.ctx.filter).toBe('blur(5px) brightness(2) contrast(1.5)');
        });

    });

    // none
    // public none(): void {
    describe('none()', () => {

        test('sets ctx.filter to "none"', () => {
            canvas.filter.blur(5);
            canvas.filter.brightness(2);
            canvas.filter.contrast(1.5);
            canvas.filter.none();
            expect(canvas.ctx.filter).toBe('none');
        });

    });

});