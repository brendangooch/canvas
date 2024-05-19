/**
 * 
 */

import Canvas from "./module/canvas.js";
import testAll from './tests/test-all.js';

(async () => {

    window.onload = () => {

        Canvas.HTML_ID = 'canvas';
        Canvas.WIDTH = window.innerWidth;
        Canvas.HEIGHT = window.innerHeight;

        try {
            const canvas = new Canvas();
            testAll(canvas);

        } catch (error) {
            console.error(error);

        }

    };

})();