import ImageReader from './image-reader';
import SVGTriangle from './svg-triangle';

const MAX_ITERATIONS = 20000;
const NEXT_TRIANGLE_RANDOMNESS = 2;
const START_GENERATE_EACH = 200; //ms
const END_GENERATE_EACH = 2; //ms
const DIVISIONS_PER_ITERATION = 25;

class Triangulator {
  constructor({ url, svg }) {
    this._svg = svg;
    const image = new ImageReader({ url });
    image.read().then(
      result => { this.startTriangulating(result) },
      error => { console.warn(`Triangulator: error loading ${url}`) }
    );
  }

  startTriangulating(referenceImage) {
    this.triangles = [];
    const firstTriangle = new SVGTriangle({
      points: [ {x: 0, y: 0}, {x: 100, y: 0}, {x: 0, y: 100} ],
      referenceImage
    });
    const secondTriangle = new SVGTriangle({
      points: [ {x: 100, y: 100}, {x: 100, y: 0}, {x: 0, y: 100} ],
      referenceImage
    });

    this._addTriangle(firstTriangle);
    this._addTriangle(secondTriangle);
    this.iterations = 1;
    this._triangulateNext();
  }

  _addTriangle(triangle) {
    this._svg.appendChild(triangle.element);
    this.triangles.push(triangle);
  }

  _triangulateNext() {
    if(this.triangles && (this.iterations < MAX_ITERATIONS)) {
      for(let i=0; i< DIVISIONS_PER_ITERATION; i++) {
        this.iterations++;
        this._makeOneDivision();
      }
      window.setTimeout(() => {
        window.requestAnimationFrame(() => this._triangulateNext() );
      }, this._getGenerationTime());
    }
  }

  _makeOneDivision() {
    const nextTriangle = this._extractNextTriangle();
    const [firstHalf, secondHalf] = nextTriangle.divideByTwo();
    nextTriangle.destroy();
    this._addTriangle(firstHalf);
    this._addTriangle(secondHalf);
  }

  _getGenerationTime() {
    const generationTime = START_GENERATE_EACH +
           ((END_GENERATE_EACH - START_GENERATE_EACH)*(this.iterations/MAX_ITERATIONS));
    return generationTime;
  }

  _extractNextTriangle() {
    const randomFrom = Math.min(this.triangles.length, NEXT_TRIANGLE_RANDOMNESS);
    const randomIndex = Math.floor(Math.random()*randomFrom);
    return this.triangles.splice(randomIndex, 1)[0];
  }
}

export default Triangulator;
