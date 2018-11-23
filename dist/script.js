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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2luZGV4LnNjc3M/MTkxYSJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiYSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJBIiwiYiIsImlubmVySGVpZ2h0IiwiQiIsImdldFBvaW50QWxvbmdFbGxpcHNlIiwiaXRlcmF0aW9uIiwiYW5nbGUiLCJNYXRoIiwiUEkiLCJ4IiwiY29zIiwieSIsInNpbiIsInBvaW50VG9Qb3NpdGlvbnMiLCJ0b3BMZWZ0U2NhbGUiLCJ0b3BSaWdodFNjYWxlIiwiYm90dG9tUmlnaHRTY2FsZSIsImJvdHRvbUxlZnRTY2FsZSIsImludmVyc2VTY2FsZXMiLCJtYXAiLCJzIiwicCIsInRvcExlZnRJbnZlcnNlU2NhbGUiLCJ0b3BSaWdodEludmVyc2VTY2FsZSIsImJvdHRvbVJpZ2h0SW52ZXJzZVNjYWxlIiwiYm90dG9tTGVmdEludmVyc2VTY2FsZSIsInBvaW50VG9TY2FsZXMiLCJzY2FsZUFyciIsImludmVyc2VTY2FsZUFyciIsInNjYWxlIiwicm91bmRUbyIsImpvaW4iLCJpbnZlcnNlU2NhbGUiLCJSQUYiLCJMT09QSU5HIiwiSU5URVJWQUwiLCJhbmltYXRlIiwicGFuZWxzIiwicG9pbnQiLCJwb3NpdGlvbnMiLCJzY2FsZXMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJmb3JFYWNoIiwiaW5kZXgiLCJpbm5lciIsIm91dGVyIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJzZXRUaW1lb3V0Iiwia2V5ZnJhbWVzVG9BbmltYXRpb25EZWZpbml0aW9uIiwibmFtZSIsImtleWZyYW1lcyIsImNvbnN0cnVjdENTU0FuaW1hdGlvbnMiLCJudW1iZXJPZktleWZyYW1lcyIsImJhc2VPYmplY3QiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwib3V0ZXJBbmltYXRpb25OYW1lIiwiaW5uZXJBbmltYXRpb25OYW1lIiwib3V0ZXJLZXlmcmFtZXMiLCJpbm5lcktleWZyYW1lcyIsInJlZHVjZSIsImFjYyIsImtleWZyYW1lSW5kZXgiLCJwZXJjZW50YWdlVmFsdWUiLCJwb2ludHMiLCJzY2FsZUluZGV4IiwiYW5pbWF0aW9uQ1NTIiwiY29uZmlnIiwib3V0ZXJBbmltYXRpb24iLCJpbm5lckFuaW1hdGlvbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImluaXQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJudW1iZXIiLCJudW1PZkRlY1BsYWNlcyIsInBvd2VyIiwicG93Iiwicm91bmQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBQSxt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OztBQUNBUSx3QkFBc0I7QUFDdkIsQ0FWRDs7QUFZQXFCLFFBQVEsQ0FBQ1EsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDSCxJQUE5QyxFOzs7Ozs7Ozs7Ozs7QUMvSUE7QUFBQTtBQUFBLElBQU1oRCxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDb0QsTUFBRCxFQUFnQztBQUFBLE1BQXZCQyxjQUF1Qix1RUFBTixDQUFNO0FBQzlDLE1BQU1DLEtBQUssR0FBRzdFLElBQUksQ0FBQzhFLEdBQUwsQ0FBUyxFQUFULEVBQWFGLGNBQWIsQ0FBZDtBQUNBLFNBQU81RSxJQUFJLENBQUMrRSxLQUFMLENBQVdKLE1BQU0sR0FBR0UsS0FBcEIsSUFBNkJBLEtBQXBDO0FBQ0QsQ0FIRDs7Ozs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9pbmRleC5qc1wiKTtcbiIsInJlcXVpcmUoJy4uL3Njc3MvaW5kZXguc2NzcycpO1xuaW1wb3J0IHsgcm91bmRUbyB9IGZyb20gJy4vdXRpbCc7XG5cbmNvbnN0IGEgPSB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuOSAvIDI7XG5jb25zdCBBID0gd2luZG93LmlubmVyV2lkdGg7XG5jb25zdCBiID0gd2luZG93LmlubmVySGVpZ2h0ICogMC45IC8gMjtcbmNvbnN0IEIgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbmNvbnN0IGdldFBvaW50QWxvbmdFbGxpcHNlID0gKGl0ZXJhdGlvbiA9IDApID0+IHtcbiAgLypcbiAgICAoaCwgaykgPSBjZW50ZXJcbiAgICBhID0gaG9yaXpvbnRhbCByYWRpdXNcbiAgICBiID0gdmVydGljYWwgcmFkaXVzXG4gICovXG4gIGNvbnN0IGFuZ2xlID0gKGl0ZXJhdGlvbiAlIDM2MCkgKiAoTWF0aC5QSSAvIDE4MCk7XG4gIGNvbnN0IHggPSAoYSAqIE1hdGguY29zKGFuZ2xlKSArIGEpIC8gQSArIDAuMDU7XG4gIGNvbnN0IHkgPSAoYiAqIE1hdGguc2luKGFuZ2xlKSArIGIpIC8gQiArIDAuMDU7XG4gIHJldHVybiB7XG4gICAgeCwgXG4gICAgeVxuICB9O1xufTtcblxuY29uc3QgcG9pbnRUb1Bvc2l0aW9ucyA9ICh7IHgsIHkgfSkgPT4ge1xuICBjb25zdCB0b3BMZWZ0U2NhbGUgPSBbeCwgeV07XG4gIGNvbnN0IHRvcFJpZ2h0U2NhbGUgPSBbKDEgLSB4KSwgeV07XG4gIGNvbnN0IGJvdHRvbVJpZ2h0U2NhbGUgPSBbMSAtIHgsICgxIC0geSldO1xuICBjb25zdCBib3R0b21MZWZ0U2NhbGUgPSBbeCwgKDEgLSB5KV07XG4gIGNvbnN0IGludmVyc2VTY2FsZXMgPSBbXG4gICAgdG9wTGVmdFNjYWxlLFxuICAgIHRvcFJpZ2h0U2NhbGUsXG4gICAgYm90dG9tUmlnaHRTY2FsZSxcbiAgICBib3R0b21MZWZ0U2NhbGVcbiAgXS5tYXAocyA9PiB7XG4gICAgcmV0dXJuIHMubWFwKHAgPT4gMSAvIHApO1xuICB9KTtcbiAgY29uc3QgW1xuICAgIHRvcExlZnRJbnZlcnNlU2NhbGUsXG4gICAgdG9wUmlnaHRJbnZlcnNlU2NhbGUsXG4gICAgYm90dG9tUmlnaHRJbnZlcnNlU2NhbGUsXG4gICAgYm90dG9tTGVmdEludmVyc2VTY2FsZVxuICBdID0gaW52ZXJzZVNjYWxlcztcbiAgcmV0dXJuIFtcbiAgICBbXG4gICAgICB0b3BMZWZ0U2NhbGUsXG4gICAgICB0b3BMZWZ0SW52ZXJzZVNjYWxlXG4gICAgXSxcbiAgICBbXG4gICAgICB0b3BSaWdodFNjYWxlLFxuICAgICAgdG9wUmlnaHRJbnZlcnNlU2NhbGVcbiAgICBdLFxuICAgIFtcbiAgICAgIGJvdHRvbUxlZnRTY2FsZSxcbiAgICAgIGJvdHRvbUxlZnRJbnZlcnNlU2NhbGVcbiAgICBdLFxuICAgIFtcbiAgICAgIGJvdHRvbVJpZ2h0U2NhbGUsXG4gICAgICBib3R0b21SaWdodEludmVyc2VTY2FsZVxuICAgIF1cbiAgXVxufTtcblxuY29uc3QgcG9pbnRUb1NjYWxlcyA9IChbc2NhbGVBcnIsIGludmVyc2VTY2FsZUFycl0pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzY2FsZSA6IHNjYWxlQXJyLm1hcChzID0+IHJvdW5kVG8ocywgNCkpLmpvaW4oJywgJyksXG4gICAgaW52ZXJzZVNjYWxlIDogaW52ZXJzZVNjYWxlQXJyLm1hcChzID0+IHJvdW5kVG8ocywgNCkpLmpvaW4oJywgJylcbiAgfTtcbn1cblxubGV0IFJBRjtcbmxldCBMT09QSU5HID0gdHJ1ZTtcbmxldCBJTlRFUlZBTCA9IDEwMDAgLyA2MDtcblxuY29uc3QgYW5pbWF0ZSA9IChwYW5lbHMsIGl0ZXJhdGlvbiA9IDApID0+IHtcbiAgLy8gZGVidWdnZXI7XG4gIGNvbnN0IHBvaW50ID0gZ2V0UG9pbnRBbG9uZ0VsbGlwc2UoaXRlcmF0aW9uKTtcbiAgY29uc3QgcG9zaXRpb25zID0gcG9pbnRUb1Bvc2l0aW9ucyhwb2ludCk7XG4gIGNvbnN0IHNjYWxlcyA9IHBvc2l0aW9ucy5tYXAocG9pbnRUb1NjYWxlcyk7XG4gIFxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgIHBhbmVscy5mb3JFYWNoKCh7aW5uZXIsIG91dGVyfSwgaW5kZXgpID0+IHtcbiAgICAgIG91dGVyLnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZSgke3NjYWxlc1tpbmRleF0uc2NhbGV9KWA7XG4gICAgICBpbm5lci5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHtzY2FsZXNbaW5kZXhdLmludmVyc2VTY2FsZX0pYDtcbiAgICB9KVxuICB9KVxuXG4gIGlmIChMT09QSU5HKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBhbmltYXRlKHBhbmVscywgaXRlcmF0aW9uICsgMSk7XG4gICAgfSwgSU5URVJWQUwpO1xuICB9XG59O1xuXG5jb25zdCBrZXlmcmFtZXNUb0FuaW1hdGlvbkRlZmluaXRpb24gPSAobmFtZSwga2V5ZnJhbWVzKSA9PiB7XG4gIHJldHVybiBgQGtleWZyYW1lcyAke25hbWV9IHsgJHtrZXlmcmFtZXN9IH1gXG59O1xuXG5jb25zdCBjb25zdHJ1Y3RDU1NBbmltYXRpb25zID0gKCkgPT4ge1xuICBjb25zdCBudW1iZXJPZktleWZyYW1lcyA9IDEwMDtcbiAgY29uc3QgYmFzZU9iamVjdCA9IEFycmF5LmZyb20oeyBsZW5ndGggOiA0IH0pLm1hcCgoXywgaW5kZXgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgb3V0ZXJBbmltYXRpb25OYW1lIDogYHNjYWxlJHtpbmRleH1vdXRlcmAsXG4gICAgICBpbm5lckFuaW1hdGlvbk5hbWUgOiBgc2NhbGUke2luZGV4fWlubmVyYCxcbiAgICAgIG91dGVyS2V5ZnJhbWVzIDogJycsXG4gICAgICBpbm5lcktleWZyYW1lcyA6ICcnXG4gICAgfVxuICB9KTtcbiAgY29uc3Qga2V5ZnJhbWVzID0gQXJyYXkuZnJvbSh7IGxlbmd0aCA6IG51bWJlck9mS2V5ZnJhbWVzfSlcbiAgICAucmVkdWNlKChhY2MsIF8sIGtleWZyYW1lSW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHBlcmNlbnRhZ2VWYWx1ZSA9IHJvdW5kVG8oa2V5ZnJhbWVJbmRleCAvIChudW1iZXJPZktleWZyYW1lcyAtIDEpICogMTAwLCAwKTtcbiAgICAgIGNvbnN0IHBvaW50ID0gZ2V0UG9pbnRBbG9uZ0VsbGlwc2Uoa2V5ZnJhbWVJbmRleCAvIG51bWJlck9mS2V5ZnJhbWVzICogMzYwKTtcbiAgICAgIGNvbnN0IHBvaW50cyA9IHBvaW50VG9Qb3NpdGlvbnMocG9pbnQpO1xuICAgICAgY29uc3Qgc2NhbGVzID0gcG9pbnRzLm1hcChwb2ludFRvU2NhbGVzKTtcbiAgICAgIHNjYWxlcy5mb3JFYWNoKCh7IHNjYWxlLCBpbnZlcnNlU2NhbGUgfSwgc2NhbGVJbmRleCkgPT4ge1xuICAgICAgICBhY2Nbc2NhbGVJbmRleF0ub3V0ZXJLZXlmcmFtZXMgKz0gYCR7cGVyY2VudGFnZVZhbHVlfSUgeyB0cmFuc2Zvcm06IHNjYWxlKCR7c2NhbGV9KTsgfWA7XG4gICAgICAgIGFjY1tzY2FsZUluZGV4XS5pbm5lcktleWZyYW1lcyArPSBgJHtwZXJjZW50YWdlVmFsdWV9JSB7IHRyYW5zZm9ybTogc2NhbGUoJHtpbnZlcnNlU2NhbGV9KTsgfWA7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgYmFzZU9iamVjdCk7XG4gIGNvbnN0IGFuaW1hdGlvbkNTUyA9IGtleWZyYW1lcy5tYXAoKGNvbmZpZykgPT4ge1xuICAgIGNvbnN0IG91dGVyQW5pbWF0aW9uID0ga2V5ZnJhbWVzVG9BbmltYXRpb25EZWZpbml0aW9uKGNvbmZpZy5vdXRlckFuaW1hdGlvbk5hbWUsIGNvbmZpZy5vdXRlcktleWZyYW1lcyk7XG4gICAgY29uc3QgaW5uZXJBbmltYXRpb24gPSBrZXlmcmFtZXNUb0FuaW1hdGlvbkRlZmluaXRpb24oY29uZmlnLmlubmVyQW5pbWF0aW9uTmFtZSwgY29uZmlnLmlubmVyS2V5ZnJhbWVzKTtcbiAgICByZXR1cm4gb3V0ZXJBbmltYXRpb24gKyBpbm5lckFuaW1hdGlvbjtcbiAgfSkuam9pbignJyk7XG4gIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgc3R5bGUuaW5uZXJIVE1MID0gYW5pbWF0aW9uQ1NTO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0eWxlKTtcblxufVxuXG5cbmNvbnN0IGluaXQgPSAoKSA9PiB7XG4gIGNvbnN0IHBhbmVscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhbmVsJykpLm1hcChvdXRlciA9PiB7XG4gICAgY29uc3QgaW5uZXIgPSBvdXRlci5xdWVyeVNlbGVjdG9yKCcucGFuZWxfX2lubmVyJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG91dGVyLFxuICAgICAgaW5uZXJcbiAgICB9O1xuICB9KTtcbiAgLy8gYW5pbWF0ZShwYW5lbHMpO1xuICBjb25zdHJ1Y3RDU1NBbmltYXRpb25zKClcbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0KTsiLCJjb25zdCByb3VuZFRvID0gKG51bWJlciwgbnVtT2ZEZWNQbGFjZXMgPSAyKSA9PiB7XG4gIGNvbnN0IHBvd2VyID0gTWF0aC5wb3coMTAsIG51bU9mRGVjUGxhY2VzKTtcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtYmVyICogcG93ZXIpIC8gcG93ZXI7XG59O1xuXG5leHBvcnQge1xuICByb3VuZFRvXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==