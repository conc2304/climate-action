import p5Types from 'p5';
import React, { useEffect, useState } from 'react';
import Sketch from 'react-p5';
import { getDocumentDimensions } from '../../services/utils';
import './P5Canvas.module.scss';
/* eslint-disable-next-line */
export interface P5CanvasProps {}

export function P5Canvas(props: P5CanvasProps) {
  const dampening = 0.99;
  const { width, height } = getDocumentDimensions();
  const [pageWidth, setWidth] = useState(width);
  const [pageHeight, setHeight] = useState(height);

  let cols: number;
  let rows: number;
  let current: number[][];
  let previous: number[][];


  // recalculate the page dimensions
  useEffect(() => {
    const { scrollWidth, scrollHeight } = document.getElementById('root') || {
      scrollHeight: 0,
      scrollWidth: 0,
    };

    console.log(scrollWidth, scrollHeight)
    setWidth(Math.max(width, scrollWidth || 0));
    setHeight(Math.max(height, scrollHeight || 0));
  }, [width, height]);

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(pageWidth, pageHeight).parent(canvasParentRef);
    p5.pixelDensity(1);

    cols = pageWidth;
    rows = pageHeight;
    // The following line initializes a 2D cols-by-rows array with zeroes
    // in every array cell, and is equivalent to this Processing line:
    // current = new float[cols][rows];
    current = new Array(cols).fill(0).map((n) => new Array(rows).fill(0));
    previous = new Array(cols).fill(0).map((n) => new Array(rows).fill(0));
  };

  const mouseMoved = (p5: p5Types) => {
    if (!p5.mouseX || !p5.mouseY) return;

    try {
      if (previous && previous[p5.mouseX]) {
        previous[p5.mouseX][p5.mouseY] = 2500;
      }
    } catch (e) {
      console.log(p5.mouseX, p5.mouseY);
      console.warn(e);
    }
  };

  const windowResized = (p5: p5Types) => {
    const { width, height } = getDocumentDimensions();
    p5.resizeCanvas(width, height);
    cols = width;
    rows = height;
    current = new Array(cols).fill(0).map((n) => new Array(rows).fill(0));
    previous = new Array(cols).fill(0).map((n) => new Array(rows).fill(0));
  };

  const draw = (p5: p5Types) => {
    p5.background(0);

    p5.loadPixels();
    for (let i = 1; i < cols - 1; i++) {
      for (let j = 1; j < rows - 1; j++) {
        current[i][j] =
          (previous[i - 1][j] +
            previous[i + 1][j] +
            previous[i][j - 1] +
            previous[i][j + 1]) /
            2 -
          current[i][j];
        current[i][j] = current[i][j] * dampening;
        // Unlike in Processing, the pixels array in p5.js has 4 entries
        // for each pixel, so we have to multiply the index by 4 and then
        // set the entries for each color component separately.
        const index = (i + j * cols) * 4;
        p5.pixels[index + 0] = current[i][j];
        p5.pixels[index + 1] = current[i][j];
        p5.pixels[index + 2] = current[i][j];
      }
    }
    p5.updatePixels();

    const temp = previous;
    previous = current;
    current = temp;
  };

  return (
    <Sketch
      setup={setup}
      draw={draw}
      mouseMoved={mouseMoved}
      windowResized={windowResized}
    />
  );
}

export default P5Canvas;
