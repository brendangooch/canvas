# canvas
a cleaner implementation of the Canvas API

example usage:

```html
<canvas id="canvas"></canvas>
```

```typescript
import { Canvas } from '@nremdamgooch/canvas';

const ctx = document.getElementById('canvas').getContext('2d');
ctx.save();
ctx.translate(500, 500);
ctx.rotate(Math.PI);
ctx.scale(0.8, 0.8);
ctx.globalAlpha = 0.75;
ctx.fillStyle = 'red';
ctx.lineWidth = 10;
ctx.setLineDash([20, 40]);
ctx.lineDashOffset = 10;
ctx.lineCap = 'round';
ctx.linJoin = 'bevel';
ctx.beginPath();
ctx.shadowOffsetX = 5;
ctx.shadowOffsetY = 5;
ctx.shadowBlur = 10;
ctx.shadowColor = 'black';
ctx.roundRect(200, 300, 10);
ctx.stroke();
ctx.font = 'italic 24px arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('this is some text');
ctx.fontVariantCaps = 'all-small-caps';
ctx.restore();
ctx.clearRect(0,0,1920, 1080)


// using Canvas class

// static properties
Canvas.CONTAINED = true;
Canvas.ALPHA_ENABLED = true;
Canvas.SMOOTHING_ENABLED = false;
Canvas.SMOOTHING_QUALITY = 'medium';
Canvas.ACCESSIBLE_CONTENT_ENABLED = true;

const canvas = new Canvas(1920, 1080);

canvas.save(() => {
    
    canvas.translate(500, 500).rotate(Math.PI).scale(0.8).opacity(0.75);
    
    canvas.color.fill('red');
    
    canvas.line.width(10).dash([20, 40], 10).cap('round').join('bevel');
    
    canvas.path.stroke(() => {
        canvas.shadow.x(5).y(5).blur(10).color('black');
        canvas.path.rectangle(200, 300, 10);
    });
    
    canvas.font.family('arial').size(24).variantCaps('all-small-caps');
    canvas.text.align('center').baseline('middle').fill('this is some text');

});

canvas.clear();

```