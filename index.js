/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/portfolio";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(5);

	__webpack_require__(6);

	__webpack_require__(7);

	__webpack_require__(8);

	__webpack_require__(9);

	__webpack_require__(10);

	__webpack_require__(11);

	__webpack_require__(12);

	__webpack_require__(13);

	__webpack_require__(14);

	var _triangulator = __webpack_require__(15);

	var triangulation = (0, _triangulator.triangulator)({
	  url: './img/bg.jpg',
	  svg: document.querySelector('#svg-bg')
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./../../node_modules/postcss-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./../../node_modules/postcss-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/* Reset */\n/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nhtml {\n  box-sizing: border-box; }\n\n*, *:before, *:after {\n  box-sizing: inherit; }\n\nbody {\n  background: white; }\n\nh1, h2 {\n  font-family: 'Raleway', sans-serif; }\n\nhtml {\n  font-family: 'Roboto', sans-serif;\n  color: #1C140D;\n  font-size: 16px; }\n  @media (min-width: 800px) {\n    html {\n      font-size: 18px; } }\n  @media (min-width: 1200px) {\n    html {\n      font-size: 20px; } }\n\nh1 {\n  font-size: 3em; }\n\nh2 {\n  font-size: 2.5em; }\n\nh3 {\n  font-size: 2em; }\n\n#svg-bg {\n  width: 100vmax;\n  height: 100vmax;\n  position: absolute;\n  top: 50%;\n  margin-top: -50vmax;\n  left: 0;\n  z-index: 5; }\n\n@supports (object-fit: cover) {\n  #svg-bg {\n    object-fit: cover;\n    top: auto;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin-top: 0; } }\n\n.title-container {\n  height: 75vh;\n  position: relative;\n  overflow: hidden;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n  padding-bottom: 40px; }\n  .title-container .title-content {\n    position: relative;\n    z-index: 20; }\n  .title-container:before {\n    content: '';\n    display: block;\n    position: absolute;\n    z-index: 10;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: linear-gradient(to bottom, transparent, white); }\n\n.content {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 0 20px;\n  width: 100%; }\n\nh1 {\n  margin-bottom: 0.1em; }\n\nh2 {\n  color: #5bc528; }\n\nh3 {\n  margin-top: 2em;\n  margin-bottom: 1em;\n  position: relative;\n  display: inline-block;\n  color: white;\n  padding: 0 10px; }\n  h3:before {\n    content: '';\n    background: rgba(28, 20, 13, 0.9);\n    position: absolute;\n    z-index: -1;\n    display: block;\n    bottom: -5px;\n    left: -4px;\n    height: 27px;\n    right: -3px; }\n  h3:after {\n    content: '';\n    background: rgba(91, 197, 40, 0.9);\n    position: absolute;\n    z-index: -1;\n    display: block;\n    top: -5px;\n    left: -1px;\n    height: 24px;\n    right: -10px; }\n\na {\n  color: #5bc528; }\n  a:hover {\n    color: #20460e; }\n  a:active {\n    color: #347017; }\n  a:visited {\n    color: #5bc528; }\n  a:hover {\n    color: #20460e; }\n\n.projects {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap; }\n\n.project {\n  width: 50%;\n  padding: 30px; }\n\n.project-image-container {\n  position: relative; }\n  .project-image-container:before {\n    display: block;\n    content: '';\n    padding-top: 100%; }\n\n.project-link {\n  text-decoration: none;\n  display: block; }\n\n.project-image {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.project-title {\n  color: white;\n  border-top: solid 4px #5bc528;\n  padding: 10px 0;\n  color: #1C140D;\n  font-size: 1.5em;\n  font-family: 'Raleway', sans-serif; }\n  .project-link:hover .project-title {\n    text-decoration: underline;\n    color: #479b1f; }\n\n.project-description {\n  padding: 5px 0;\n  padding-top: 0;\n  color: #565657;\n  line-height: 1.4;\n  margin-bottom: 5px; }\n\n.project-extra-link {\n  margin-bottom: 15px; }\n\n.project-tag {\n  display: inline-block;\n  background: rgba(91, 197, 40, 0.7);\n  color: white;\n  font-size: 0.60em;\n  padding: 5px 10px;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  border-radius: 5px; }\n\n@media (max-width: 500px) {\n  .project {\n    width: 100%;\n    padding: 30px 0; } }\n\n.contact-link {\n  margin-bottom: 10px; }\n\nfooter {\n  text-align: center;\n  font-size: 0.75em;\n  color: #565657;\n  padding: 20px;\n  margin-top: 40px;\n  border-top: 1px solid #5bc528; }\n  footer p {\n    margin-bottom: 0.75em; }\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./img/bg.jpg";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./img/doctortilla_portfolio.png";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./img/chesire_portfolio.jpg";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./img/polarsteps_portfolio.png";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./img/recoreco_portfolio.png";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./apple-touch-icon.png";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./favicon-32x32.png";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./favicon-16x16.png";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./manifest.json";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./safari-pinned-tab.svg";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.triangulator = undefined;

	var _triangulator = __webpack_require__(16);

	var _triangulator2 = _interopRequireDefault(_triangulator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var triangulator = exports.triangulator = function triangulator(_ref) {
	  var url = _ref.url,
	      svg = _ref.svg;

	  if (!url || !svg) {
	    throw 'ERROR: triangulator must receive a url and a svg container';
	  }
	  return new _triangulator2.default({ url: url, svg: svg });
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _imageReader = __webpack_require__(17);

	var _imageReader2 = _interopRequireDefault(_imageReader);

	var _svgTriangle = __webpack_require__(19);

	var _svgTriangle2 = _interopRequireDefault(_svgTriangle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MAX_ITERATIONS = 20000;
	var NEXT_TRIANGLE_RANDOMNESS = 2;
	var START_GENERATE_EACH = 200; //ms
	var END_GENERATE_EACH = 2; //ms
	var DIVISIONS_PER_ITERATION = 25;

	var Triangulator = function () {
	  function Triangulator(_ref) {
	    var _this = this;

	    var url = _ref.url,
	        svg = _ref.svg;

	    _classCallCheck(this, Triangulator);

	    this._svg = svg;
	    var image = new _imageReader2.default({ url: url });
	    image.read().then(function (result) {
	      _this.startTriangulating(result);
	    }, function (error) {
	      console.warn('Triangulator: error loading ' + url);
	    });
	  }

	  _createClass(Triangulator, [{
	    key: 'startTriangulating',
	    value: function startTriangulating(referenceImage) {
	      this.triangles = [];
	      var firstTriangle = new _svgTriangle2.default({
	        points: [{ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 0, y: 100 }],
	        referenceImage: referenceImage
	      });
	      var secondTriangle = new _svgTriangle2.default({
	        points: [{ x: 100, y: 100 }, { x: 100, y: 0 }, { x: 0, y: 100 }],
	        referenceImage: referenceImage
	      });

	      this._addTriangle(firstTriangle);
	      this._addTriangle(secondTriangle);
	      this.iterations = 1;
	      this._triangulateNext();
	    }
	  }, {
	    key: '_addTriangle',
	    value: function _addTriangle(triangle) {
	      this._svg.appendChild(triangle.element);
	      this.triangles.push(triangle);
	    }
	  }, {
	    key: '_triangulateNext',
	    value: function _triangulateNext() {
	      var _this2 = this;

	      if (this.triangles && this.iterations < MAX_ITERATIONS) {
	        for (var i = 0; i < DIVISIONS_PER_ITERATION; i++) {
	          this.iterations++;
	          this._makeOneDivision();
	        }
	        window.setTimeout(function () {
	          window.requestAnimationFrame(function () {
	            return _this2._triangulateNext();
	          });
	        }, this._getGenerationTime());
	      }
	    }
	  }, {
	    key: '_makeOneDivision',
	    value: function _makeOneDivision() {
	      var nextTriangle = this._extractNextTriangle();

	      var _nextTriangle$divideB = nextTriangle.divideByTwo(),
	          _nextTriangle$divideB2 = _slicedToArray(_nextTriangle$divideB, 2),
	          firstHalf = _nextTriangle$divideB2[0],
	          secondHalf = _nextTriangle$divideB2[1];

	      nextTriangle.destroy();
	      this._addTriangle(firstHalf);
	      this._addTriangle(secondHalf);
	    }
	  }, {
	    key: '_getGenerationTime',
	    value: function _getGenerationTime() {
	      var generationTime = START_GENERATE_EACH + (END_GENERATE_EACH - START_GENERATE_EACH) * (this.iterations / MAX_ITERATIONS);
	      return generationTime;
	    }
	  }, {
	    key: '_extractNextTriangle',
	    value: function _extractNextTriangle() {
	      var randomFrom = Math.min(this.triangles.length, NEXT_TRIANGLE_RANDOMNESS);
	      var randomIndex = Math.floor(Math.random() * randomFrom);
	      return this.triangles.splice(randomIndex, 1)[0];
	    }
	  }]);

	  return Triangulator;
	}();

	exports.default = Triangulator;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _pixel = __webpack_require__(18);

	var _pixel2 = _interopRequireDefault(_pixel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ImageReader = function () {
	  function ImageReader(_ref) {
	    var url = _ref.url,
	        _ref$height = _ref.height,
	        height = _ref$height === undefined ? 200 : _ref$height,
	        _ref$width = _ref.width,
	        width = _ref$width === undefined ? 200 : _ref$width;

	    _classCallCheck(this, ImageReader);

	    this.url = url;
	    this.height = height;
	    this.width = width;
	  }

	  _createClass(ImageReader, [{
	    key: 'read',
	    value: function read() {
	      var _this = this;

	      return this._createAndLoadImage().then(function (image) {
	        _this._createCanvasFromImage(image);
	        return _this;
	      });
	    }
	  }, {
	    key: 'pixelAt',
	    value: function pixelAt() {
	      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	      if (!this._context) {
	        throw 'ImageReader: image is still not ready';
	      }
	      x = Math.round(x);
	      x = Math.max(0, x);
	      x = Math.min(this.width, x);
	      y = Math.round(y);
	      y = Math.max(0, y);
	      y = Math.min(this.height, y);
	      return new _pixel2.default(this._context.getImageData(x, y, 1, 1));
	    }
	  }, {
	    key: 'pixelAtPercentage',
	    value: function pixelAtPercentage() {
	      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	      var pixelX = x / 100 * this.width;
	      var pixelY = y / 100 * this.height;
	      return this.pixelAt(pixelX, pixelY);
	    }
	  }, {
	    key: '_createAndLoadImage',
	    value: function _createAndLoadImage() {
	      var _this2 = this;

	      return new Promise(function (resolve, reject) {
	        _this2.img = new Image();
	        _this2.img.style.width = _this2.width + 'px';
	        _this2.img.style.height = _this2.height + 'px';
	        _this2.img.width = _this2.width;
	        _this2.img.height = _this2.height;
	        _this2.img.style.objectFit = 'cover';
	        _this2.img.onload = function () {
	          resolve(_this2.img);
	        };

	        _this2.img.onerror = function (error) {
	          reject(error);
	        };

	        _this2.img.src = _this2.url;
	      });
	    }
	  }, {
	    key: '_createCanvasFromImage',
	    value: function _createCanvasFromImage(image) {
	      var canvas = document.createElement('canvas');
	      canvas.style.display = 'block';
	      canvas.width = this.width;
	      canvas.height = this.height;
	      this._context = canvas.getContext('2d');
	      this._context.drawImage(image, 0, 0);
	    }
	  }]);

	  return ImageReader;
	}();

	;

	exports.default = ImageReader;

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Pixel = function () {
	  function Pixel(imageData) {
	    _classCallCheck(this, Pixel);

	    if (imageData.height !== 1 || imageData.width !== 1) {
	      throw 'Pixel: error, must be created from a 1x1 ImageData';
	    }
	    this.r = imageData.data[0];
	    this.g = imageData.data[1];
	    this.b = imageData.data[2];
	    this.a = imageData.data[3];
	  }

	  _createClass(Pixel, [{
	    key: 'toHex',
	    value: function toHex() {
	      var rPart = this._getHexFromNumber(this.r);
	      var gPart = this._getHexFromNumber(this.g);
	      var bPart = this._getHexFromNumber(this.b);
	      return '#' + rPart + gPart + bPart;
	    }
	  }, {
	    key: '_getHexFromNumber',
	    value: function _getHexFromNumber(number) {
	      return parseInt(number, 10).toString(16).slice(-2);
	    }
	  }]);

	  return Pixel;
	}();

	exports.default = Pixel;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _triangle = __webpack_require__(20);

	var _triangle2 = _interopRequireDefault(_triangle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NAMESPACE = 'http://www.w3.org/2000/svg';
	var DEFAULT_COLOR = '#a1a1a1';

	var SVGTriangle = function () {
	  function SVGTriangle(_ref) {
	    var points = _ref.points,
	        referenceImage = _ref.referenceImage;

	    _classCallCheck(this, SVGTriangle);

	    if (!points || points.length !== 3) {
	      throw 'SVGTriangle: must provide 3 points';
	    }
	    this._points = points;
	    this._referenceImage = referenceImage;
	    this._element = this._createElementFromPoints(points);
	    var color = this._getColorFromImageAtCenter(referenceImage, points);
	    this._applyColorToElement(color, this._element);
	  }

	  _createClass(SVGTriangle, [{
	    key: 'divideByTwo',
	    value: function divideByTwo() {
	      var _divideByTwo = new _triangle2.default(this._points).divideByTwo(),
	          _divideByTwo2 = _slicedToArray(_divideByTwo, 2),
	          points1 = _divideByTwo2[0],
	          points2 = _divideByTwo2[1];

	      return [new SVGTriangle({ points: points1, referenceImage: this._referenceImage }), new SVGTriangle({ points: points2, referenceImage: this._referenceImage })];
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      if (this._element && this._element.parentNode) {
	        this._element.parentNode.removeChild(this._element);
	      }
	      this._element = null;
	    }
	  }, {
	    key: '_createElementFromPoints',
	    value: function _createElementFromPoints(points) {
	      var element = document.createElementNS(NAMESPACE, 'polygon');
	      element.setAttribute('stroke-width', '0');
	      var pointsDefinition = points.map(function (point) {
	        return point.x + ',' + point.y;
	      }).join(' ');
	      element.setAttribute('points', pointsDefinition);
	      return element;
	    }
	  }, {
	    key: '_getColorFromImageAtCenter',
	    value: function _getColorFromImageAtCenter(image, points) {
	      if (!image) {
	        return DEFAULT_COLOR;
	      }
	      var center = this._getCenterOf(points);
	      var color = image.pixelAtPercentage(center.x, center.y);
	      return color.toHex();
	    }
	  }, {
	    key: '_applyColorToElement',
	    value: function _applyColorToElement(color, element) {
	      element.setAttribute('fill', color);
	    }
	  }, {
	    key: '_getCenterOf',
	    value: function _getCenterOf(points) {
	      return {
	        x: (points[0].x + points[1].x + points[2].x) / 3,
	        y: (points[0].y + points[1].y + points[2].y) / 3
	      };
	    }
	  }, {
	    key: 'element',
	    get: function get() {
	      return this._element;
	    }
	  }]);

	  return SVGTriangle;
	}();

	exports.default = SVGTriangle;

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Segment = function () {
	  function Segment(point1, point2) {
	    _classCallCheck(this, Segment);

	    this.point1 = point1;
	    this.point2 = point2;
	  }

	  _createClass(Segment, [{
	    key: "getMiddlePoint",
	    value: function getMiddlePoint() {
	      return {
	        x: (this.point1.x + this.point2.x) / 2,
	        y: (this.point1.y + this.point2.y) / 2
	      };
	    }
	  }, {
	    key: "length",
	    get: function get() {
	      return Math.sqrt((this.point1.x - this.point2.x) * (this.point1.x - this.point2.x) + (this.point1.y - this.point2.y) * (this.point1.y - this.point2.y));
	    }
	  }]);

	  return Segment;
	}();

	var Triangle = function () {
	  function Triangle(points) {
	    _classCallCheck(this, Triangle);

	    this.points = points;
	    this.segments = [new Segment(points[0], points[1]), new Segment(points[1], points[2]), new Segment(points[2], points[0])];
	  }

	  _createClass(Triangle, [{
	    key: "divideByTwo",
	    value: function divideByTwo() {
	      var _getLongestSegment = this.getLongestSegment(),
	          longest = _getLongestSegment.longest,
	          others = _getLongestSegment.others;

	      var middlePoint = longest.getMiddlePoint();
	      return [[middlePoint, others[0].point1, others[0].point2], [middlePoint, others[1].point1, others[1].point2]];
	    }
	  }, {
	    key: "getLongestSegment",
	    value: function getLongestSegment() {
	      var longestSegment = 0;
	      var longestSegmentSize = this.segments[0].length;
	      for (var i = 0; i < this.segments.length; i++) {
	        var currentLength = this.segments[i].length;
	        if (currentLength > longestSegmentSize) {
	          longestSegment = i;
	          longestSegmentSize = currentLength;
	        }
	      }

	      return {
	        longest: this.segments[longestSegment],
	        others: this.segments.filter(function (segment, index) {
	          return index !== longestSegment;
	        })
	      };
	    }
	  }]);

	  return Triangle;
	}();

	exports.default = Triangle;

/***/ }
/******/ ]);