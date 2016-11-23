class Segment {
  constructor(point1, point2) {
    this.point1 = point1;
    this.point2 = point2;
  }

  get length() {
    return Math.sqrt(
      (this.point1.x - this.point2.x)*(this.point1.x - this.point2.x) +
      (this.point1.y - this.point2.y)*(this.point1.y - this.point2.y)
    );
  }

  getMiddlePoint() {
    return {
      x: (this.point1.x + this.point2.x)/2,
      y: (this.point1.y + this.point2.y)/2
    };
  }
}

class Triangle {

  constructor(points) {
    this.points = points;
    this.segments = [
      new Segment(points[0], points[1]),
      new Segment(points[1], points[2]),
      new Segment(points[2], points[0])
    ];
  }

  divideByTwo() {
    const { longest, others } = this.getLongestSegment();
    const middlePoint = longest.getMiddlePoint();
    return [
      [middlePoint, others[0].point1, others[0].point2],
      [middlePoint, others[1].point1, others[1].point2]
    ];
  }

  getLongestSegment() {
    let longestSegment = 0;
    let longestSegmentSize = this.segments[0].length;
    for(let i=0; i<this.segments.length; i++) {
      const currentLength = this.segments[i].length;
      if(currentLength > longestSegmentSize) {
        longestSegment = i;
        longestSegmentSize = currentLength;
      }
    }

    return {
      longest: this.segments[longestSegment],
      others: this.segments.filter( (segment, index) => { return index !== longestSegment} )
    }
  }
}

export default Triangle;
