/**
 * 
 */

import Canvas from "./module/canvas.js";
import runTests from './tests.js';

(async () => {

    window.onload = () => {

        Canvas.HTML_ID = 'canvas';
        Canvas.WIDTH = window.innerWidth;
        Canvas.HEIGHT = window.innerHeight;

        try {

            const canvas = new Canvas();

            // load images
            const images: HTMLImageElement[] = [];

            // load fonts

            // run tests
            runTests(canvas, images);


        } catch (error) {
            console.error(error);

        }

    };

})();
