/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/js/util.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

__webpack_require__(/*! ../scss/index.scss */ "./src/scss/index.scss");


var a = window.innerWidth * 0.9 / 2;
var A = window.innerWidth;
var b = window.innerHeight * 0.9 / 2;
var B = window.innerHeight;

var getPointAlongEllipse = function getPointAlongEllipse() {
  var iteration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  /*
    (h, k) = center
    a = horizontal radius
    b = vertical radius
  */
  var angle = iteration % 360 * (Math.PI / 180);
  var x = (a * Math.cos(angle) + a) / A + 0.05;
  var y = (b * Math.sin(angle) + b) / B + 0.05;
  return {
    x: x,
    y: y
  };
};

var pointToPositions = function pointToPositions(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var topLeftScale = [x, y];
  var topRightScale = [1 - x, y];
  var bottomRightScale = [1 - x, 1 - y];
  var bottomLeftScale = [x, 1 - y];
  var inverseScales = [topLeftScale, topRightScale, bottomRightScale, bottomLeftScale].map(function (s) {
    return s.map(function (p) {
      return 1 / p;
    });
  });

  var _inverseScales = _slicedToArray(inverseScales, 4),
      topLeftInverseScale = _inverseScales[0],
      topRightInverseScale = _inverseScales[1],
      bottomRightInverseScale = _inverseScales[2],
      bottomLeftInverseScale = _inverseScales[3];

  return [[topLeftScale, topLeftInverseScale], [topRightScale, topRightInverseScale], [bottomLeftScale, bottomLeftInverseScale], [bottomRightScale, bottomRightInverseScale]];
};

var pointToScales = function pointToScales(_ref2) {
  var _ref3 = _slicedToArray(_ref2, 2),
      scaleArr = _ref3[0],
      inverseScaleArr = _ref3[1];

  return {
    scale: scaleArr.map(function (s) {
      return Object(_util__WEBPACK_IMPORTED_MODULE_0__["roundTo"])(s, 4);
    }).join(', '),
    inverseScale: inverseScaleArr.map(function (s) {
      return Object(_util__WEBPACK_IMPORTED_MODULE_0__["roundTo"])(s, 4);
    }).join(', ')
  };
};

var RAF;
var LOOPING = true;
var INTERVAL = 1000 / 60;

var animate = function animate(panels) {
  var iteration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // debugger;
  var point = getPointAlongEllipse(iteration);
  var positions = pointToPositions(point);
  var scales = positions.map(pointToScales);
  requestAnimationFrame(function () {
    panels.forEach(function (_ref4, index) {
      var inner = _ref4.inner,
          outer = _ref4.outer;
      outer.style.transform = "scale(".concat(scales[index].scale, ")");
      inner.style.transform = "scale(".concat(scales[index].inverseScale, ")");
    });
  });

  if (LOOPING) {
    setTimeout(function () {
      animate(panels, iteration + 1);
    }, INTERVAL);
  }
};

var keyframesToAnimationDefinition = function keyframesToAnimationDefinition(name, keyframes) {
  return "@keyframes ".concat(name, " { ").concat(keyframes, " }");
};

var constructCSSAnimations = function constructCSSAnimations() {
  var numberOfKeyframes = 100;
  var baseObject = Array.from({
    length: 4
  }).map(function (_, index) {
    return {
      outerAnimationName: "scale".concat(index, "outer"),
      innerAnimationName: "scale".concat(index, "inner"),
      outerKeyframes: '',
      innerKeyframes: ''
    };
  });
  var keyframes = Array.from({
    length: numberOfKeyframes
  }).reduce(function (acc, _, keyframeIndex) {
    var percentageValue = Object(_util__WEBPACK_IMPORTED_MODULE_0__["roundTo"])(keyframeIndex / (numberOfKeyframes - 1) * 100, 0);
    var point = getPointAlongEllipse(keyframeIndex / numberOfKeyframes * 360);
    var points = pointToPositions(point);
    var scales = points.map(pointToScales);
    scales.forEach(function (_ref5, scaleIndex) {
      var scale = _ref5.scale,
          inverseScale = _ref5.inverseScale;
      acc[scaleIndex].outerKeyframes += "".concat(percentageValue, "% { transform: scale(").concat(scale, "); }");
      acc[scaleIndex].innerKeyframes += "".concat(percentageValue, "% { transform: scale(").concat(inverseScale, "); }");
    });
    return acc;
  }, baseObject);
  var animationCSS = keyframes.map(function (config) {
    var outerAnimation = keyframesToAnimationDefinition(config.outerAnimationName, config.outerKeyframes);
    var innerAnimation = keyframesToAnimationDefinition(config.innerAnimationName, config.innerKeyframes);
    return outerAnimation + innerAnimation;
  }).join('');
  var style = document.createElement('style');
  style.innerHTML = animationCSS;
  document.body.appendChild(style);
};

var init = function init() {
  var panels = Array.from(document.querySelectorAll('.panel')).map(function (outer) {
    var inner = outer.querySelector('.panel__inner');
    return {
      outer: outer,
      inner: inner
    };
  }); // animate(panels);

  constructCSSAnimations();
};

document.addEventListener('DOMContentLoaded', init);

/***/ }),

/***/ "./src/js/util.js":
/*!************************!*\
  !*** ./src/js/util.js ***!
  \************************/
/*! exports provided: roundTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundTo", function() { return roundTo; });
var roundTo = function roundTo(number) {
  var numOfDecPlaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var power = Math.pow(10, numOfDecPlaces);
  return Math.round(number * power) / power;
};



/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsicmVxdWlyZSIsImEiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiQSIsImIiLCJpbm5lckhlaWdodCIsIkIiLCJnZXRQb2ludEFsb25nRWxsaXBzZSIsIml0ZXJhdGlvbiIsImFuZ2xlIiwiTWF0aCIsIlBJIiwieCIsImNvcyIsInkiLCJzaW4iLCJwb2ludFRvUG9zaXRpb25zIiwidG9wTGVmdFNjYWxlIiwidG9wUmlnaHRTY2FsZSIsImJvdHRvbVJpZ2h0U2NhbGUiLCJib3R0b21MZWZ0U2NhbGUiLCJpbnZlcnNlU2NhbGVzIiwibWFwIiwicyIsInAiLCJ0b3BMZWZ0SW52ZXJzZVNjYWxlIiwidG9wUmlnaHRJbnZlcnNlU2NhbGUiLCJib3R0b21SaWdodEludmVyc2VTY2FsZSIsImJvdHRvbUxlZnRJbnZlcnNlU2NhbGUiLCJwb2ludFRvU2NhbGVzIiwic2NhbGVBcnIiLCJpbnZlcnNlU2NhbGVBcnIiLCJzY2FsZSIsInJvdW5kVG8iLCJqb2luIiwiaW52ZXJzZVNjYWxlIiwiUkFGIiwiTE9PUElORyIsIklOVEVSVkFMIiwiYW5pbWF0ZSIsInBhbmVscyIsInBvaW50IiwicG9zaXRpb25zIiwic2NhbGVzIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZm9yRWFjaCIsImluZGV4IiwiaW5uZXIiLCJvdXRlciIsInN0eWxlIiwidHJhbnNmb3JtIiwic2V0VGltZW91dCIsImtleWZyYW1lc1RvQW5pbWF0aW9uRGVmaW5pdGlvbiIsIm5hbWUiLCJrZXlmcmFtZXMiLCJjb25zdHJ1Y3RDU1NBbmltYXRpb25zIiwibnVtYmVyT2ZLZXlmcmFtZXMiLCJiYXNlT2JqZWN0IiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsIm91dGVyQW5pbWF0aW9uTmFtZSIsImlubmVyQW5pbWF0aW9uTmFtZSIsIm91dGVyS2V5ZnJhbWVzIiwiaW5uZXJLZXlmcmFtZXMiLCJyZWR1Y2UiLCJhY2MiLCJrZXlmcmFtZUluZGV4IiwicGVyY2VudGFnZVZhbHVlIiwicG9pbnRzIiwic2NhbGVJbmRleCIsImFuaW1hdGlvbkNTUyIsImNvbmZpZyIsIm91dGVyQW5pbWF0aW9uIiwiaW5uZXJBbmltYXRpb24iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJpbml0IiwicXVlcnlTZWxlY3RvckFsbCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwibnVtYmVyIiwibnVtT2ZEZWNQbGFjZXMiLCJwb3dlciIsInBvdyIsInJvdW5kIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQUEsbUJBQU8s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QVEsd0JBQXNCO0FBQ3ZCLENBVkQ7O0FBWUFxQixRQUFRLENBQUNRLGdCQUFULENBQTBCLGtCQUExQixFQUE4Q0gsSUFBOUMsRTs7Ozs7Ozs7Ozs7O0FDL0lBO0FBQUE7QUFBQSxJQUFNaEQsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ29ELE1BQUQsRUFBZ0M7QUFBQSxNQUF2QkMsY0FBdUIsdUVBQU4sQ0FBTTtBQUM5QyxNQUFNQyxLQUFLLEdBQUc3RSxJQUFJLENBQUM4RSxHQUFMLENBQVMsRUFBVCxFQUFhRixjQUFiLENBQWQ7QUFDQSxTQUFPNUUsSUFBSSxDQUFDK0UsS0FBTCxDQUFXSixNQUFNLEdBQUdFLEtBQXBCLElBQTZCQSxLQUFwQztBQUNELENBSEQ7Ozs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvaW5kZXguanNcIik7XG4iLCJyZXF1aXJlKCcuLi9zY3NzL2luZGV4LnNjc3MnKTtcbmltcG9ydCB7IHJvdW5kVG8gfSBmcm9tICcuL3V0aWwnO1xuXG5jb25zdCBhID0gd2luZG93LmlubmVyV2lkdGggKiAwLjkgLyAyO1xuY29uc3QgQSA9IHdpbmRvdy5pbm5lcldpZHRoO1xuY29uc3QgYiA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuOSAvIDI7XG5jb25zdCBCID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG5jb25zdCBnZXRQb2ludEFsb25nRWxsaXBzZSA9IChpdGVyYXRpb24gPSAwKSA9PiB7XG4gIC8qXG4gICAgKGgsIGspID0gY2VudGVyXG4gICAgYSA9IGhvcml6b250YWwgcmFkaXVzXG4gICAgYiA9IHZlcnRpY2FsIHJhZGl1c1xuICAqL1xuICBjb25zdCBhbmdsZSA9IChpdGVyYXRpb24gJSAzNjApICogKE1hdGguUEkgLyAxODApO1xuICBjb25zdCB4ID0gKGEgKiBNYXRoLmNvcyhhbmdsZSkgKyBhKSAvIEEgKyAwLjA1O1xuICBjb25zdCB5ID0gKGIgKiBNYXRoLnNpbihhbmdsZSkgKyBiKSAvIEIgKyAwLjA1O1xuICByZXR1cm4ge1xuICAgIHgsIFxuICAgIHlcbiAgfTtcbn07XG5cbmNvbnN0IHBvaW50VG9Qb3NpdGlvbnMgPSAoeyB4LCB5IH0pID0+IHtcbiAgY29uc3QgdG9wTGVmdFNjYWxlID0gW3gsIHldO1xuICBjb25zdCB0b3BSaWdodFNjYWxlID0gWygxIC0geCksIHldO1xuICBjb25zdCBib3R0b21SaWdodFNjYWxlID0gWzEgLSB4LCAoMSAtIHkpXTtcbiAgY29uc3QgYm90dG9tTGVmdFNjYWxlID0gW3gsICgxIC0geSldO1xuICBjb25zdCBpbnZlcnNlU2NhbGVzID0gW1xuICAgIHRvcExlZnRTY2FsZSxcbiAgICB0b3BSaWdodFNjYWxlLFxuICAgIGJvdHRvbVJpZ2h0U2NhbGUsXG4gICAgYm90dG9tTGVmdFNjYWxlXG4gIF0ubWFwKHMgPT4ge1xuICAgIHJldHVybiBzLm1hcChwID0+IDEgLyBwKTtcbiAgfSk7XG4gIGNvbnN0IFtcbiAgICB0b3BMZWZ0SW52ZXJzZVNjYWxlLFxuICAgIHRvcFJpZ2h0SW52ZXJzZVNjYWxlLFxuICAgIGJvdHRvbVJpZ2h0SW52ZXJzZVNjYWxlLFxuICAgIGJvdHRvbUxlZnRJbnZlcnNlU2NhbGVcbiAgXSA9IGludmVyc2VTY2FsZXM7XG4gIHJldHVybiBbXG4gICAgW1xuICAgICAgdG9wTGVmdFNjYWxlLFxuICAgICAgdG9wTGVmdEludmVyc2VTY2FsZVxuICAgIF0sXG4gICAgW1xuICAgICAgdG9wUmlnaHRTY2FsZSxcbiAgICAgIHRvcFJpZ2h0SW52ZXJzZVNjYWxlXG4gICAgXSxcbiAgICBbXG4gICAgICBib3R0b21MZWZ0U2NhbGUsXG4gICAgICBib3R0b21MZWZ0SW52ZXJzZVNjYWxlXG4gICAgXSxcbiAgICBbXG4gICAgICBib3R0b21SaWdodFNjYWxlLFxuICAgICAgYm90dG9tUmlnaHRJbnZlcnNlU2NhbGVcbiAgICBdXG4gIF1cbn07XG5cbmNvbnN0IHBvaW50VG9TY2FsZXMgPSAoW3NjYWxlQXJyLCBpbnZlcnNlU2NhbGVBcnJdKSA9PiB7XG4gIHJldHVybiB7XG4gICAgc2NhbGUgOiBzY2FsZUFyci5tYXAocyA9PiByb3VuZFRvKHMsIDQpKS5qb2luKCcsICcpLFxuICAgIGludmVyc2VTY2FsZSA6IGludmVyc2VTY2FsZUFyci5tYXAocyA9PiByb3VuZFRvKHMsIDQpKS5qb2luKCcsICcpXG4gIH07XG59XG5cbmxldCBSQUY7XG5sZXQgTE9PUElORyA9IHRydWU7XG5sZXQgSU5URVJWQUwgPSAxMDAwIC8gNjA7XG5cbmNvbnN0IGFuaW1hdGUgPSAocGFuZWxzLCBpdGVyYXRpb24gPSAwKSA9PiB7XG4gIC8vIGRlYnVnZ2VyO1xuICBjb25zdCBwb2ludCA9IGdldFBvaW50QWxvbmdFbGxpcHNlKGl0ZXJhdGlvbik7XG4gIGNvbnN0IHBvc2l0aW9ucyA9IHBvaW50VG9Qb3NpdGlvbnMocG9pbnQpO1xuICBjb25zdCBzY2FsZXMgPSBwb3NpdGlvbnMubWFwKHBvaW50VG9TY2FsZXMpO1xuICBcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICBwYW5lbHMuZm9yRWFjaCgoe2lubmVyLCBvdXRlcn0sIGluZGV4KSA9PiB7XG4gICAgICBvdXRlci5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHtzY2FsZXNbaW5kZXhdLnNjYWxlfSlgO1xuICAgICAgaW5uZXIuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKCR7c2NhbGVzW2luZGV4XS5pbnZlcnNlU2NhbGV9KWA7XG4gICAgfSlcbiAgfSlcblxuICBpZiAoTE9PUElORykge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYW5pbWF0ZShwYW5lbHMsIGl0ZXJhdGlvbiArIDEpO1xuICAgIH0sIElOVEVSVkFMKTtcbiAgfVxufTtcblxuY29uc3Qga2V5ZnJhbWVzVG9BbmltYXRpb25EZWZpbml0aW9uID0gKG5hbWUsIGtleWZyYW1lcykgPT4ge1xuICByZXR1cm4gYEBrZXlmcmFtZXMgJHtuYW1lfSB7ICR7a2V5ZnJhbWVzfSB9YFxufTtcblxuY29uc3QgY29uc3RydWN0Q1NTQW5pbWF0aW9ucyA9ICgpID0+IHtcbiAgY29uc3QgbnVtYmVyT2ZLZXlmcmFtZXMgPSAxMDA7XG4gIGNvbnN0IGJhc2VPYmplY3QgPSBBcnJheS5mcm9tKHsgbGVuZ3RoIDogNCB9KS5tYXAoKF8sIGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG91dGVyQW5pbWF0aW9uTmFtZSA6IGBzY2FsZSR7aW5kZXh9b3V0ZXJgLFxuICAgICAgaW5uZXJBbmltYXRpb25OYW1lIDogYHNjYWxlJHtpbmRleH1pbm5lcmAsXG4gICAgICBvdXRlcktleWZyYW1lcyA6ICcnLFxuICAgICAgaW5uZXJLZXlmcmFtZXMgOiAnJ1xuICAgIH1cbiAgfSk7XG4gIGNvbnN0IGtleWZyYW1lcyA9IEFycmF5LmZyb20oeyBsZW5ndGggOiBudW1iZXJPZktleWZyYW1lc30pXG4gICAgLnJlZHVjZSgoYWNjLCBfLCBrZXlmcmFtZUluZGV4KSA9PiB7XG4gICAgICBjb25zdCBwZXJjZW50YWdlVmFsdWUgPSByb3VuZFRvKGtleWZyYW1lSW5kZXggLyAobnVtYmVyT2ZLZXlmcmFtZXMgLSAxKSAqIDEwMCwgMCk7XG4gICAgICBjb25zdCBwb2ludCA9IGdldFBvaW50QWxvbmdFbGxpcHNlKGtleWZyYW1lSW5kZXggLyBudW1iZXJPZktleWZyYW1lcyAqIDM2MCk7XG4gICAgICBjb25zdCBwb2ludHMgPSBwb2ludFRvUG9zaXRpb25zKHBvaW50KTtcbiAgICAgIGNvbnN0IHNjYWxlcyA9IHBvaW50cy5tYXAocG9pbnRUb1NjYWxlcyk7XG4gICAgICBzY2FsZXMuZm9yRWFjaCgoeyBzY2FsZSwgaW52ZXJzZVNjYWxlIH0sIHNjYWxlSW5kZXgpID0+IHtcbiAgICAgICAgYWNjW3NjYWxlSW5kZXhdLm91dGVyS2V5ZnJhbWVzICs9IGAke3BlcmNlbnRhZ2VWYWx1ZX0lIHsgdHJhbnNmb3JtOiBzY2FsZSgke3NjYWxlfSk7IH1gO1xuICAgICAgICBhY2Nbc2NhbGVJbmRleF0uaW5uZXJLZXlmcmFtZXMgKz0gYCR7cGVyY2VudGFnZVZhbHVlfSUgeyB0cmFuc2Zvcm06IHNjYWxlKCR7aW52ZXJzZVNjYWxlfSk7IH1gO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIGJhc2VPYmplY3QpO1xuICBjb25zdCBhbmltYXRpb25DU1MgPSBrZXlmcmFtZXMubWFwKChjb25maWcpID0+IHtcbiAgICBjb25zdCBvdXRlckFuaW1hdGlvbiA9IGtleWZyYW1lc1RvQW5pbWF0aW9uRGVmaW5pdGlvbihjb25maWcub3V0ZXJBbmltYXRpb25OYW1lLCBjb25maWcub3V0ZXJLZXlmcmFtZXMpO1xuICAgIGNvbnN0IGlubmVyQW5pbWF0aW9uID0ga2V5ZnJhbWVzVG9BbmltYXRpb25EZWZpbml0aW9uKGNvbmZpZy5pbm5lckFuaW1hdGlvbk5hbWUsIGNvbmZpZy5pbm5lcktleWZyYW1lcyk7XG4gICAgcmV0dXJuIG91dGVyQW5pbWF0aW9uICsgaW5uZXJBbmltYXRpb247XG4gIH0pLmpvaW4oJycpO1xuICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlLmlubmVySFRNTCA9IGFuaW1hdGlvbkNTUztcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdHlsZSk7XG5cbn1cblxuXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuICBjb25zdCBwYW5lbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYW5lbCcpKS5tYXAob3V0ZXIgPT4ge1xuICAgIGNvbnN0IGlubmVyID0gb3V0ZXIucXVlcnlTZWxlY3RvcignLnBhbmVsX19pbm5lcicpO1xuICAgIHJldHVybiB7XG4gICAgICBvdXRlcixcbiAgICAgIGlubmVyXG4gICAgfTtcbiAgfSk7XG4gIC8vIGFuaW1hdGUocGFuZWxzKTtcbiAgY29uc3RydWN0Q1NTQW5pbWF0aW9ucygpXG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdCk7IiwiY29uc3Qgcm91bmRUbyA9IChudW1iZXIsIG51bU9mRGVjUGxhY2VzID0gMikgPT4ge1xuICBjb25zdCBwb3dlciA9IE1hdGgucG93KDEwLCBudW1PZkRlY1BsYWNlcyk7XG4gIHJldHVybiBNYXRoLnJvdW5kKG51bWJlciAqIHBvd2VyKSAvIHBvd2VyO1xufTtcblxuZXhwb3J0IHtcbiAgcm91bmRUb1xufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=