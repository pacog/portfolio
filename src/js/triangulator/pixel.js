class Pixel {
  constructor(imageData) {
    if( (imageData.height !== 1) || (imageData.width !== 1) ) {
      throw 'Pixel: error, must be created from a 1x1 ImageData';
    }
    this.r = imageData.data[0];
    this.g = imageData.data[1];
    this.b = imageData.data[2];
    this.a = imageData.data[3];
  }

  toHex() {
    var rPart = this._getHexFromNumber(this.r);
    var gPart = this._getHexFromNumber(this.g);
    var bPart = this._getHexFromNumber(this.b);
    return `#${rPart}${gPart}${bPart}`;
  }

  _getHexFromNumber(number) {
    return (parseInt(number, 10).toString(16)).slice(-2);
  }

}

export default Pixel;
