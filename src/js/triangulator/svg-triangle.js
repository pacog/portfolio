import Triangle from "./triangle";

const NAMESPACE = "http://www.w3.org/2000/svg";
const DEFAULT_COLOR = "#a1a1a1";

class SVGTriangle {
    constructor({ points, referenceImage }) {
        if (!points || points.length !== 3) {
            throw "SVGTriangle: must provide 3 points";
        }
        this._points = points;
        this._referenceImage = referenceImage;
        this._element = this._createElementFromPoints(points);
        const color = this._getColorFromImageAtCenter(referenceImage, points);
        this._applyColorToElement(color, this._element);
    }

    get element() {
        return this._element;
    }

    divideByTwo() {
        const [points1, points2] = new Triangle(this._points).divideByTwo();
        return [
            new SVGTriangle({
                points: points1,
                referenceImage: this._referenceImage,
            }),
            new SVGTriangle({
                points: points2,
                referenceImage: this._referenceImage,
            }),
        ];
    }

    destroy() {
        if (this._element && this._element.parentNode) {
            this._element.parentNode.removeChild(this._element);
        }
        this._element = null;
    }

    _createElementFromPoints(points) {
        const element = document.createElementNS(NAMESPACE, "polygon");
        element.setAttribute("stroke-width", "0");
        const pointsDefinition = points
            .map((point) => `${point.x},${point.y}`)
            .join(" ");
        element.setAttribute("points", pointsDefinition);
        return element;
    }

    _getColorFromImageAtCenter(image, points) {
        if (!image) {
            return DEFAULT_COLOR;
        }
        const center = this._getCenterOf(points);
        const color = image.pixelAtPercentage(center.x, center.y);
        return color.toHex();
    }

    _applyColorToElement(color, element) {
        element.setAttribute("fill", color);
    }

    _getCenterOf(points) {
        return {
            x: (points[0].x + points[1].x + points[2].x) / 3,
            y: (points[0].y + points[1].y + points[2].y) / 3,
        };
    }
}

export default SVGTriangle;
