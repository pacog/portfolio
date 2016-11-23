import ImageReader from './image-reader';
import SVGTriangle from './svg-triangle';

const MAX_ITERATIONS = 100;

class Triangulator {
  constructor({ url, svg }) {
    const image = new ImageReader({ url });
    image.read().then(
      result => { this.startTriangulating(result, svg) },
      error => { console.warn(`Triangulator: error loading ${url}`) }
    );
  }

  startTriangulating(referenceImage, svg) {
    this.svg = svg;
    const firstTriangle = new SVGTriangle({
      points: [ {x: 0, y: 0}, {x: 100, y: 0}, {x: 0, y: 100} ],
      referenceImage
    });
    svg.appendChild(firstTriangle.element);
    const secondTriangle = new SVGTriangle({
      points: [ {x: 100, y: 100}, {x: 100, y: 0}, {x: 0, y: 100} ],
      referenceImage
    });
    svg.appendChild(secondTriangle.element);

    this.triangles = [firstTriangle, secondTriangle];

    this.iterations = 1;

    this._triangulateNext();

  }

  _triangulateNext() {
    if(this.triangles && (this.iterations < MAX_ITERATIONS)) {
      const nextTriangle = this._extractNextTriangle();
      nextTriangle.destroy();
    }
  }

  _extractNextTriangle() {
    return this.triangles.shift();
  }
}

export default Triangulator;
