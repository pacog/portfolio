import Pixel from './pixel';

class ImageReader {
  constructor({url, height = 200, width = 200}) {
    this.url = url;
    this.height = height;
    this.width = width;
  }

  read() {
    return this._createAndLoadImage()
      .then( image => {
        this._createCanvasFromImage(image);
        return this;
      });
  }

  pixelAt(x = 0, y = 0) {
    if(!this._context) {
      throw 'ImageReader: image is still not ready';
    }
    x = Math.round(x);
    x = Math.max(0, x);
    x = Math.min(this.width, x);
    y = Math.round(y);
    y = Math.max(0, y);
    y = Math.min(this.height, y);
    return new Pixel(this._context.getImageData(x, y, 1, 1));
  }

  _createAndLoadImage() {
    return new Promise((resolve, reject) => {
      this.img = new Image();
      this.img.style.width = `${this.width}px`;
      this.img.style.height = `${this.height}px`;
      this.img.style.objectFit = `cover`;

      this.img.onload = () => {
        resolve(this.img);
      };

      this.img.onerror = (error) => {
        reject(error);
      };

      this.img.src = this.url;
    });
  }

  _createCanvasFromImage(image) {
    const canvas = document.createElement('canvas');
    this._context = canvas.getContext('2d');
    this._context.drawImage(image, 0, 0);
  }

};

export default ImageReader;
