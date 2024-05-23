/**
 * 
 */

// import { jest } from '@jest/globals';
import Canvas from '../lib/canvas.js';

function testReset() {
    describe('reset()', () => {
        test('sets all font properties back to default', () => {
            const canvas = new Canvas();
            canvas.font.setAll({
                size: 100,
                families: ['times', 'arial'],
                style: 'italic',
                weight: 'bold'
            });
            expect(canvas.ctx.font).toBe('italic bold 100px times,arial,sans-serif');
            canvas.font.reset();
            expect(canvas.ctx.font).toBe('10px sans-serif');
        });
    });
}

function testSetAll() {

    describe('can set ALL properties in one command; all set correctly', () => {

        describe('size: 100, families: ["times","arial"], style: italic, weight: bold, kerning: normal, stretch: condensed, variantCaps: small-caps', () => {

            describe('ctx.font set correctly', () => {

                // style weight size/height family
                test('sets ctx.font to "italic bold 100px times,arial,sans-serif"', () => {
                    const canvas = new Canvas();
                    canvas.font.setAll({
                        size: 100,
                        families: ['times', 'arial'],
                        style: 'italic',
                        weight: 'bold',
                        kerning: 'normal',
                        stretch: 'condensed',
                        variantCaps: 'small-caps'
                    });
                    expect(canvas.ctx.font).toBe('italic bold 100px times,arial,sans-serif');
                });


            });

            describe('other font props set correctly', () => {

                test('sets ctx.fontKerning to "normal"', () => {
                    const canvas = new Canvas();
                    canvas.font.setAll({
                        size: 100,
                        families: ['times', 'arial'],
                        style: 'italic',
                        weight: 'bold',
                        kerning: 'normal',
                        stretch: 'condensed',
                        variantCaps: 'small-caps'
                    });
                    expect(canvas.ctx.fontKerning).toBe('normal');
                });

                test('sets ctx.fontStretch to "condensed"', () => {
                    const canvas = new Canvas();
                    canvas.font.setAll({
                        size: 100,
                        families: ['times', 'arial'],
                        style: 'italic',
                        weight: 'bold',
                        kerning: 'normal',
                        stretch: 'condensed',
                        variantCaps: 'small-caps'
                    });
                    expect(canvas.ctx.fontStretch).toBe('condensed');
                });

                test('sets ctx.fontVariantCaps to "small-caps"', () => {
                    const canvas = new Canvas();
                    canvas.font.setAll({
                        size: 100,
                        families: ['times', 'arial'],
                        style: 'italic',
                        weight: 'bold',
                        kerning: 'normal',
                        stretch: 'condensed',
                        variantCaps: 'small-caps'
                    });
                    expect(canvas.ctx.fontVariantCaps).toBe('small-caps');
                });

            });

        });



    });

    describe('can set SINGLE properties correctly', () => {

        describe('size: 100, families: ["times","arial"], style: italic, weight: bold', () => {

            describe('ctx.font set correctly', () => {

                // style weight size/height family
                test('sets ctx.font to "italic bold 100px times,arial,sans-serif"', () => {
                    const canvas = new Canvas();
                    canvas.font.setAll({
                        size: 100,
                        families: ['times', 'arial'],
                        style: 'italic',
                        weight: 'bold'
                    });
                    expect(canvas.ctx.font).toBe('italic bold 100px times,arial,sans-serif');
                });

                // style weight size/height family
                test('sets ctx.font to "italic 100px times,arial,sans-serif"', () => {
                    const canvas = new Canvas();
                    canvas.font.setAll({
                        size: 100,
                        families: ['times', 'arial'],
                        style: 'italic',
                    });
                    expect(canvas.ctx.font).toBe('italic 100px times,arial,sans-serif');
                });

                // style weight size/height family
                test('sets ctx.font to "bold 100px times,arial,sans-serif"', () => {
                    const canvas = new Canvas();
                    canvas.font.setAll({
                        size: 100,
                        families: ['times', 'arial'],
                        weight: 'bold'
                    });
                    expect(canvas.ctx.font).toBe('bold 100px times,arial,sans-serif');
                });

                // style weight size/height family
                test('sets ctx.font to "100px times,arial,sans-serif"', () => {
                    const canvas = new Canvas();
                    canvas.font.setAll({
                        size: 100,
                        families: ['times', 'arial']
                    });
                    expect(canvas.ctx.font).toBe('100px times,arial,sans-serif');
                });

                // style weight size/height family
                test('sets ctx.font to "100px sans-serif"', () => {
                    const canvas = new Canvas();
                    canvas.font.setAll({
                        size: 100
                    });
                    expect(canvas.ctx.font).toBe('100px sans-serif');
                });

                // style weight size/height family
                test('sets ctx.font to "10px times,arial,sans-serif"', () => {
                    const canvas = new Canvas();
                    canvas.font.setAll({
                        families: ['times', 'arial']
                    });
                    expect(canvas.ctx.font).toBe('10px times,arial,sans-serif');
                });

            });

            describe('other font props set correctly', () => {

                test('sets ctx.fontKerning to "normal"', () => {
                    const canvas = new Canvas();
                    canvas.font.setAll({
                        kerning: 'normal'
                    });
                    expect(canvas.ctx.fontKerning).toBe('normal');
                });

                test('sets ctx.fontStretch to "condensed"', () => {
                    const canvas = new Canvas();
                    canvas.font.setAll({
                        stretch: 'condensed'
                    });
                    expect(canvas.ctx.fontStretch).toBe('condensed');
                });

                test('sets ctx.fontVariantCaps to "small-caps"', () => {
                    const canvas = new Canvas();
                    canvas.font.setAll({
                        variantCaps: 'small-caps'
                    });
                    expect(canvas.ctx.fontVariantCaps).toBe('small-caps');
                });

            });

        });

    });

}

function testSize() {
    describe('size()', () => {
        test('sets ctx.font to "48px sans-serif"', () => {
            const canvas = new Canvas();
            canvas.font.size(48);
            expect(canvas.ctx.font).toBe('48px sans-serif');
        });
        test('cannot set a size less than 1', () => {
            const canvas = new Canvas();
            canvas.font.size(0);
            expect(canvas.ctx.font).toBe('10px sans-serif');
            canvas.font.size(0.9);
            expect(canvas.ctx.font).toBe('10px sans-serif');
            canvas.font.size(1);
            expect(canvas.ctx.font).toBe('1px sans-serif');
        });
    });
}

function testAddFamily() {
    describe('addFamily()', () => {
        test('setx ctx.font to "10px times,sans-serif"', () => {
            const canvas = new Canvas();
            canvas.font.addFamily('times');
            expect(canvas.ctx.font).toBe('10px times,sans-serif');
        });
        test('setx ctx.font to "10px times,arial,sans-serif"', () => {
            const canvas = new Canvas();
            canvas.font.addFamily('arial');
            canvas.font.addFamily('times');
            expect(canvas.ctx.font).toBe('10px times,arial,sans-serif');
        });
        test('CANNOT add a font already added', () => {
            const canvas = new Canvas();
            canvas.font.addFamily('times');
            canvas.font.addFamily('times');
            expect(canvas.ctx.font).toBe('10px times,sans-serif');
        });

    });
}

function testStyle() {
    describe('style()', () => {

        test('setx ctx.font to "italic 10px sans-serif"', () => {
            const canvas = new Canvas();
            canvas.font.style('italic');
            expect(canvas.ctx.font).toBe('italic 10px sans-serif');
        });

        test('setting to normal does not alter ctx.font (default)', () => {
            const canvas = new Canvas();
            canvas.font.style('normal');
            expect(canvas.ctx.font).toBe('10px sans-serif');
        });

    });
}

function testWeight() {
    describe('weight()', () => {

        test('setx ctx.font to "bold 10px sans-serif"', () => {
            const canvas = new Canvas();
            canvas.font.weight('bold');
            expect(canvas.ctx.font).toBe('bold 10px sans-serif');
        });

        test('setting to normal does not alter ctx.font (default)', () => {
            const canvas = new Canvas();
            canvas.font.weight('normal');
            expect(canvas.ctx.font).toBe('10px sans-serif');
        });

    });
}

function testKerning() {
    describe('kerning()', () => {
        test('setx ctx.fontKerning to "normal"', () => {
            const canvas = new Canvas();
            canvas.font.kerning('normal');
            expect(canvas.ctx.fontKerning).toBe('normal');
        });
    });
}

function testNormalKerning() {
    describe('normalKerning()', () => {
        test('setx ctx.fontKerning to "normal"', () => {
            const canvas = new Canvas();
            canvas.font.normalKerning();
            expect(canvas.ctx.fontKerning).toBe('normal');
        });
    });
}

// default
function testAutoKerning() {
    describe('autoKerning()', () => {
        test('setx ctx.fontKerning to "auto"', () => {
            const canvas = new Canvas();
            canvas.font.normalKerning();
            canvas.font.autoKerning();
            expect(canvas.ctx.fontKerning).toBe('auto');
        });
    });
}

function testNoKerning() {
    describe('noKerning()', () => {
        test('setx ctx.fontKerning to "none"', () => {
            const canvas = new Canvas();
            canvas.font.noKerning();
            expect(canvas.ctx.fontKerning).toBe('none');
        });
    });
}

function testStretch() {
    describe('stretch()', () => {
        test('sets ctx.fontStretch to "ultra-condensed"', () => {
            const canvas = new Canvas();
            canvas.font.stretch('ultra-condensed');
            expect(canvas.ctx.fontStretch).toBe('ultra-condensed');
        });
    });
}

function testNormalStretch() {
    describe('normalStretch()', () => {
        test('sets ctx.fontStretch to "normal"', () => {
            const canvas = new Canvas();
            canvas.font.normalStretch();
            expect(canvas.ctx.fontStretch).toBe('normal');
        });
    });
}

function testUltraCondensed() {
    describe('ultraCondensed()', () => {
        test('sets ctx.fontStretch to "ultra-condensed"', () => {
            const canvas = new Canvas();
            canvas.font.ultraCondensed();
            expect(canvas.ctx.fontStretch).toBe('ultra-condensed');
        });
    });
}

function testExtraCondensed() {
    describe('extraCondensed()', () => {
        test('sets ctx.fontStretch to "extra-condensed"', () => {
            const canvas = new Canvas();
            canvas.font.extraCondensed();
            expect(canvas.ctx.fontStretch).toBe('extra-condensed');
        });
    });
}

function testCondensed() {
    describe('condensed()', () => {
        test('sets ctx.fontStretch to "condensed"', () => {
            const canvas = new Canvas();
            canvas.font.condensed();
            expect(canvas.ctx.fontStretch).toBe('condensed');
        });
    });
}

function testSemiCondensed() {
    describe('semiCondensed()', () => {
        test('sets ctx.fontStretch to "semi-condensed"', () => {
            const canvas = new Canvas();
            canvas.font.semiCondensed();
            expect(canvas.ctx.fontStretch).toBe('semi-condensed');
        });
    });
}

function testSemiExpanded() {
    describe('semiExpanded()', () => {
        test('sets ctx.fontStretch to "semi-expanded"', () => {
            const canvas = new Canvas();
            canvas.font.semiExpanded();
            expect(canvas.ctx.fontStretch).toBe('semi-expanded');
        });
    });
}

function testExpanded() {
    describe('expanded()', () => {
        test('sets ctx.fontStretch to "expanded"', () => {
            const canvas = new Canvas();
            canvas.font.expanded();
            expect(canvas.ctx.fontStretch).toBe('expanded');
        });
    });
}

function testExtraExpanded() {
    describe('extraExpanded()', () => {
        test('sets ctx.fontStretch to "extra-expanded"', () => {
            const canvas = new Canvas();
            canvas.font.extraExpanded();
            expect(canvas.ctx.fontStretch).toBe('extra-expanded');
        });
    });
}

function testUltraExpanded() {
    describe('ultraExpanded()', () => {
        test('sets ctx.fontStretch to "ultra-expanded"', () => {
            const canvas = new Canvas();
            canvas.font.ultraExpanded();
            expect(canvas.ctx.fontStretch).toBe('ultra-expanded');
        });
    });
}

function testVariantCaps() {
    describe('variantCaps()', () => {
        test('sets ctx.fontVariantCaps to "small-caps"', () => {
            const canvas = new Canvas();
            canvas.font.variantCaps('small-caps');
            expect(canvas.ctx.fontVariantCaps).toBe('small-caps');
        });
    });
}

function testNormalCaps() {
    describe('normalCaps()', () => {
        test('sets ctx.fontVariantCaps to "normal"', () => {
            const canvas = new Canvas();
            canvas.font.normalCaps();
            expect(canvas.ctx.fontVariantCaps).toBe('normal');
        });
    });
}

function testSmallCaps() {
    describe('smallCaps()', () => {
        test('sets ctx.fontVariantCaps to "small-caps"', () => {
            const canvas = new Canvas();
            canvas.font.smallCaps();
            expect(canvas.ctx.fontVariantCaps).toBe('small-caps');
        });
    });
}

function testAllSmallCaps() {
    describe('allSmallCaps()', () => {
        test('sets ctx.fontVariantCaps to "all-small-caps"', () => {
            const canvas = new Canvas();
            canvas.font.allSmallCaps();
            expect(canvas.ctx.fontVariantCaps).toBe('all-small-caps');
        });
    });
}

function testPetiteCaps() {
    describe('petiteCaps()', () => {
        test('sets ctx.fontVariantCaps to "petite-caps"', () => {
            const canvas = new Canvas();
            canvas.font.petiteCaps();
            expect(canvas.ctx.fontVariantCaps).toBe('petite-caps');
        });
    });
}

function testAllPetiteCaps() {
    describe('allPetiteCaps()', () => {
        test('sets ctx.fontVariantCaps to "all-petite-caps"', () => {
            const canvas = new Canvas();
            canvas.font.allPetiteCaps();
            expect(canvas.ctx.fontVariantCaps).toBe('all-petite-caps');
        });
    });
}

function testUnicase() {
    describe('unicase()', () => {
        test('sets ctx.fontVariantCaps to "unicase"', () => {
            const canvas = new Canvas();
            canvas.font.unicase();
            expect(canvas.ctx.fontVariantCaps).toBe('unicase');
        });
    });
}

function testTitlingCaps() {
    describe('titlingCaps()', () => {
        test('sets ctx.fontVariantCaps to "titling-caps"', () => {
            const canvas = new Canvas();
            canvas.font.titlingCaps();
            expect(canvas.ctx.fontVariantCaps).toBe('titling-caps');
        });
    });
}

describe('CanvasFont', () => {
    testReset();
    testSetAll();
    testSize();
    testAddFamily();
    testStyle();
    testWeight();
    testKerning();
    testNormalKerning();
    testAutoKerning();
    testNoKerning();
    testStretch();
    testNormalStretch();
    testUltraCondensed();
    testExtraCondensed();
    testCondensed();
    testSemiCondensed();
    testSemiExpanded();
    testExpanded();
    testExtraExpanded();
    testUltraExpanded();
    testVariantCaps();
    testNormalCaps();
    testSmallCaps();
    testAllSmallCaps();
    testPetiteCaps();
    testAllPetiteCaps();
    testUnicase();
    testTitlingCaps();

});