/**
 * 
 */

import CanvasComponent from "./canvas-component.js";

export default class CanvasText extends CanvasComponent {

    public setAll(props: {
        align?: CanvasTextAlign;
        baseline?: CanvasTextBaseline;
        rendering?: CanvasTextRendering;
        wordSpacing?: number;
        letterSpacing?: number;
        direction?: CanvasDirection;
    }): void {
        console.log(props);
        if (props.align) this.align(props.align);
        if (props.baseline) this.baseline(props.baseline);
        if (props.rendering) this.rendering(props.rendering);
        if (props.wordSpacing) this.wordSpacing(props.wordSpacing);
        if (props.letterSpacing) this.letterSpacing(props.letterSpacing);
        if (props.direction) this.direction(props.direction);
    }

    // fillText()
    public fill(text: string, maxWidth: number | null = null): void {
        if (maxWidth) this.ctx.fillText(text, 0, 0, maxWidth);
        else this.ctx.fillText(text, 0, 0);
    }

    // strokeText()
    public stroke(text: string, maxWidth: number | null = null): void {
        if (maxWidth) this.ctx.strokeText(text, 0, 0, maxWidth);
        else this.ctx.strokeText(text, 0, 0);
    }

    // textAlign
    public align(value: CanvasTextAlign): void {
        this.ctx.textAlign = value;
    }

    // center
    public center(): void {
        this.align('center');
    }


    // end
    public end(): void {
        this.align('end');
    }


    // left
    public left(): void {
        this.align('left');
    }


    // right
    public right(): void {
        this.align('right');
    }


    // start
    public start(): void {
        this.align('start');
    }

    // textBaseline
    public baseline(value: CanvasTextBaseline): void {
        this.ctx.textBaseline = value;
    }

    // alphabetic
    public alphabetic(): void {
        this.baseline('alphabetic');
    }

    // bottom
    public bottom(): void {
        this.baseline('bottom');
    }

    // hanging
    public hanging(): void {
        this.baseline('hanging');
    }

    // ideographic
    public ideographic(): void {
        this.baseline('ideographic');
    }

    // middle
    public middle(): void {
        this.baseline('middle');
    }

    // top
    public top(): void {
        this.baseline('top');
    }

    // textRendering
    public rendering(value: CanvasTextRendering): void {
        this.ctx.textRendering = value;
    }

    public auto(): void {
        this.rendering('auto');
    }

    public precise(): void {
        this.rendering('geometricPrecision');
    }

    public optimize(value: 'speed' | 'legibility'): void {
        if (value === 'speed') this.rendering('optimizeSpeed');
        else this.rendering('optimizeLegibility');
    }

    // WordSpacing
    // px
    public wordSpacing(amount: number): void {
        this.ctx.wordSpacing = `${amount}px`;
    }

    // letterSpacing
    // px
    public letterSpacing(amount: number): void {
        this.ctx.letterSpacing = `${amount}px`;
    }


    // measureText()
    public measure(text: string): TextMetrics {
        return this.ctx.measureText(text);
    }

    // text direction
    public direction(value: CanvasDirection): void {
        this.ctx.direction = value;
    }

    public rtl(): void {
        this.ctx.direction = 'rtl';
    }

    public ltr(): void {
        this.ctx.direction = 'ltr';
    }

    public inherit(): void {
        this.ctx.direction = 'inherit';
    }

}

