/**
 * 
 */

// import { jest } from '@jest/globals';
import Canvas from '../lib/canvas.js';


describe('CanvasCompositeOperation', () => {

    describe('all values set correctly', () => {

        // "source-over"
        test('source-over', () => {
            const canvas = new Canvas({});
            canvas.composite.sourceOver();
            expect(canvas.ctx.globalCompositeOperation).toBe('source-over');
        });

        // "source-in"
        test('source-in', () => {
            const canvas = new Canvas({});
            canvas.composite.sourceIn();
            expect(canvas.ctx.globalCompositeOperation).toBe('source-in');
        });

        // "source-out"
        test('source-out', () => {
            const canvas = new Canvas({});
            canvas.composite.sourceOut();
            expect(canvas.ctx.globalCompositeOperation).toBe('source-out');
        });

        // "source-atop"
        test('source-over', () => {
            const canvas = new Canvas({});
            canvas.composite.sourceAtop();
            expect(canvas.ctx.globalCompositeOperation).toBe('source-atop');
        });

        // "destination-over"
        test('destination-over', () => {
            const canvas = new Canvas({});
            canvas.composite.destinationOver();
            expect(canvas.ctx.globalCompositeOperation).toBe('destination-over');
        });

        // "destination-in"
        test('source-over', () => {
            const canvas = new Canvas({});
            canvas.composite.destinationIn();
            expect(canvas.ctx.globalCompositeOperation).toBe('destination-in');
        });

        // "destination-out"
        test('destination-out', () => {
            const canvas = new Canvas({});
            canvas.composite.destinationOut();
            expect(canvas.ctx.globalCompositeOperation).toBe('destination-out');
        });

        // "destination-atop"
        test('destination-atop', () => {
            const canvas = new Canvas({});
            canvas.composite.destinationAtop();
            expect(canvas.ctx.globalCompositeOperation).toBe('destination-atop');
        });

        // "lighter"
        test('lighter', () => {
            const canvas = new Canvas({});
            canvas.composite.lighter();
            expect(canvas.ctx.globalCompositeOperation).toBe('lighter');
        });

        // "copy"
        test('copy', () => {
            const canvas = new Canvas({});
            canvas.composite.copy();
            expect(canvas.ctx.globalCompositeOperation).toBe('copy');
        });

        // "xor"
        test('xor', () => {
            const canvas = new Canvas({});
            canvas.composite.xor();
            expect(canvas.ctx.globalCompositeOperation).toBe('xor');
        });

        // "multiply"
        test('multiply', () => {
            const canvas = new Canvas({});
            canvas.composite.multiply();
            expect(canvas.ctx.globalCompositeOperation).toBe('multiply');
        });

        // "screen"
        test('screen', () => {
            const canvas = new Canvas({});
            canvas.composite.screen();
            expect(canvas.ctx.globalCompositeOperation).toBe('screen');
        });

        // "overlay"
        test('overlay', () => {
            const canvas = new Canvas({});
            canvas.composite.overlay();
            expect(canvas.ctx.globalCompositeOperation).toBe('overlay');
        });

        // "darken"
        test('darken', () => {
            const canvas = new Canvas({});
            canvas.composite.darken();
            expect(canvas.ctx.globalCompositeOperation).toBe('darken');
        });

        // "lighten"
        test('lightenr', () => {
            const canvas = new Canvas({});
            canvas.composite.lighten();
            expect(canvas.ctx.globalCompositeOperation).toBe('lighten');
        });

        // "color-dodge"
        test('color-dodge', () => {
            const canvas = new Canvas({});
            canvas.composite.colorDodge();
            expect(canvas.ctx.globalCompositeOperation).toBe('color-dodge');
        });

        // "color-burn"
        test('color-burn', () => {
            const canvas = new Canvas({});
            canvas.composite.colorBurn();
            expect(canvas.ctx.globalCompositeOperation).toBe('color-burn');
        });

        // "hard-light"
        test('hard-light', () => {
            const canvas = new Canvas({});
            canvas.composite.hardLight();
            expect(canvas.ctx.globalCompositeOperation).toBe('hard-light');
        });

        // "soft-light"
        test('soft-light', () => {
            const canvas = new Canvas({});
            canvas.composite.softLight();
            expect(canvas.ctx.globalCompositeOperation).toBe('soft-light');
        });

        // "difference"
        test('difference', () => {
            const canvas = new Canvas({});
            canvas.composite.difference();
            expect(canvas.ctx.globalCompositeOperation).toBe('difference');
        });

        // "exclusion"
        test('exclusion', () => {
            const canvas = new Canvas({});
            canvas.composite.exclusion();
            expect(canvas.ctx.globalCompositeOperation).toBe('exclusion');
        });

        // "hue"
        test('hue', () => {
            const canvas = new Canvas({});
            canvas.composite.hue();
            expect(canvas.ctx.globalCompositeOperation).toBe('hue');
        });

        // "saturation"
        test('saturation', () => {
            const canvas = new Canvas({});
            canvas.composite.saturation();
            expect(canvas.ctx.globalCompositeOperation).toBe('saturation');
        });

        // "color"
        test('color', () => {
            const canvas = new Canvas({});
            canvas.composite.color();
            expect(canvas.ctx.globalCompositeOperation).toBe('color');
        });

        // "luminosity"
        test('luminosity', () => {
            const canvas = new Canvas({});
            canvas.composite.luminosity();
            expect(canvas.ctx.globalCompositeOperation).toBe('luminosity');
        });


    });




});