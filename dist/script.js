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


var a = window.innerWidth / 2;
var A = window.innerWidth;
var b = window.innerHeight / 2;
var B = window.innerHeight;

var getPointAlongEllipse = function getPointAlongEllipse() {
  var iteration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  /*
    (h, k) = center
    a = horizontal radius
    b = vertical radius
  */
  var angle = iteration % 360 * (Math.PI / 180);
  var x = (a * Math.cos(angle) + a) / A;
  var y = (b * Math.sin(angle) + b) / B;
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

var init = function init() {
  var panels = Array.from(document.querySelectorAll('.panel')).map(function (outer) {
    var inner = outer.querySelector('.panel__inner');
    return {
      outer: outer,
      inner: inner
    };
  });
  animate(panels);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsicmVxdWlyZSIsImEiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiQSIsImIiLCJpbm5lckhlaWdodCIsIkIiLCJnZXRQb2ludEFsb25nRWxsaXBzZSIsIml0ZXJhdGlvbiIsImFuZ2xlIiwiTWF0aCIsIlBJIiwieCIsImNvcyIsInkiLCJzaW4iLCJwb2ludFRvUG9zaXRpb25zIiwidG9wTGVmdFNjYWxlIiwidG9wUmlnaHRTY2FsZSIsImJvdHRvbVJpZ2h0U2NhbGUiLCJib3R0b21MZWZ0U2NhbGUiLCJpbnZlcnNlU2NhbGVzIiwibWFwIiwicyIsInAiLCJ0b3BMZWZ0SW52ZXJzZVNjYWxlIiwidG9wUmlnaHRJbnZlcnNlU2NhbGUiLCJib3R0b21SaWdodEludmVyc2VTY2FsZSIsImJvdHRvbUxlZnRJbnZlcnNlU2NhbGUiLCJwb2ludFRvU2NhbGVzIiwic2NhbGVBcnIiLCJpbnZlcnNlU2NhbGVBcnIiLCJzY2FsZSIsInJvdW5kVG8iLCJqb2luIiwiaW52ZXJzZVNjYWxlIiwiUkFGIiwiTE9PUElORyIsIklOVEVSVkFMIiwiYW5pbWF0ZSIsInBhbmVscyIsInBvaW50IiwicG9zaXRpb25zIiwic2NhbGVzIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZm9yRWFjaCIsImluZGV4IiwiaW5uZXIiLCJvdXRlciIsInN0eWxlIiwidHJhbnNmb3JtIiwic2V0VGltZW91dCIsImluaXQiLCJBcnJheSIsImZyb20iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm51bWJlciIsIm51bU9mRGVjUGxhY2VzIiwicG93ZXIiLCJwb3ciLCJyb3VuZCJdLCJt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Y0FBYixDQUFkO0FBQ0EsU0FBT2xELElBQUksQ0FBQ3FELEtBQUwsQ0FBV0osTUFBTSxHQUFHRSxLQUFwQixJQUE2QkEsS0FBcEM7QUFDRCxDQUhEOzs7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2luZGV4LmpzXCIpO1xuIiwicmVxdWlyZSgnLi4vc2Nzcy9pbmRleC5zY3NzJyk7XG5pbXBvcnQgeyByb3VuZFRvIH0gZnJvbSAnLi91dGlsJztcblxuY29uc3QgYSA9IHdpbmRvdy5pbm5lcldpZHRoIC8gMjtcbmNvbnN0IEEgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbmNvbnN0IGIgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyO1xuY29uc3QgQiA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuY29uc3QgZ2V0UG9pbnRBbG9uZ0VsbGlwc2UgPSAoaXRlcmF0aW9uID0gMCkgPT4ge1xuICAvKlxuICAgIChoLCBrKSA9IGNlbnRlclxuICAgIGEgPSBob3Jpem9udGFsIHJhZGl1c1xuICAgIGIgPSB2ZXJ0aWNhbCByYWRpdXNcbiAgKi9cbiAgY29uc3QgYW5nbGUgPSAoaXRlcmF0aW9uICUgMzYwKSAqIChNYXRoLlBJIC8gMTgwKTtcbiAgY29uc3QgeCA9IChhICogTWF0aC5jb3MoYW5nbGUpICsgYSkgLyBBO1xuICBjb25zdCB5ID0gKGIgKiBNYXRoLnNpbihhbmdsZSkgKyBiKSAvIEI7XG4gIHJldHVybiB7XG4gICAgeCwgXG4gICAgeVxuICB9O1xufTtcblxuY29uc3QgcG9pbnRUb1Bvc2l0aW9ucyA9ICh7IHgsIHkgfSkgPT4ge1xuICBjb25zdCB0b3BMZWZ0U2NhbGUgPSBbeCwgeV07XG4gIGNvbnN0IHRvcFJpZ2h0U2NhbGUgPSBbKDEgLSB4KSwgeV07XG4gIGNvbnN0IGJvdHRvbVJpZ2h0U2NhbGUgPSBbMSAtIHgsICgxIC0geSldO1xuICBjb25zdCBib3R0b21MZWZ0U2NhbGUgPSBbeCwgKDEgLSB5KV07XG4gIGNvbnN0IGludmVyc2VTY2FsZXMgPSBbXG4gICAgdG9wTGVmdFNjYWxlLFxuICAgIHRvcFJpZ2h0U2NhbGUsXG4gICAgYm90dG9tUmlnaHRTY2FsZSxcbiAgICBib3R0b21MZWZ0U2NhbGVcbiAgXS5tYXAocyA9PiB7XG4gICAgcmV0dXJuIHMubWFwKHAgPT4gMSAvIHApO1xuICB9KTtcbiAgY29uc3QgW1xuICAgIHRvcExlZnRJbnZlcnNlU2NhbGUsXG4gICAgdG9wUmlnaHRJbnZlcnNlU2NhbGUsXG4gICAgYm90dG9tUmlnaHRJbnZlcnNlU2NhbGUsXG4gICAgYm90dG9tTGVmdEludmVyc2VTY2FsZVxuICBdID0gaW52ZXJzZVNjYWxlcztcbiAgcmV0dXJuIFtcbiAgICBbXG4gICAgICB0b3BMZWZ0U2NhbGUsXG4gICAgICB0b3BMZWZ0SW52ZXJzZVNjYWxlXG4gICAgXSxcbiAgICBbXG4gICAgICB0b3BSaWdodFNjYWxlLFxuICAgICAgdG9wUmlnaHRJbnZlcnNlU2NhbGVcbiAgICBdLFxuICAgIFtcbiAgICAgIGJvdHRvbUxlZnRTY2FsZSxcbiAgICAgIGJvdHRvbUxlZnRJbnZlcnNlU2NhbGVcbiAgICBdLFxuICAgIFtcbiAgICAgIGJvdHRvbVJpZ2h0U2NhbGUsXG4gICAgICBib3R0b21SaWdodEludmVyc2VTY2FsZVxuICAgIF1cbiAgXVxufTtcblxuY29uc3QgcG9pbnRUb1NjYWxlcyA9IChbc2NhbGVBcnIsIGludmVyc2VTY2FsZUFycl0pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzY2FsZSA6IHNjYWxlQXJyLm1hcChzID0+IHJvdW5kVG8ocywgNCkpLmpvaW4oJywgJyksXG4gICAgaW52ZXJzZVNjYWxlIDogaW52ZXJzZVNjYWxlQXJyLm1hcChzID0+IHJvdW5kVG8ocywgNCkpLmpvaW4oJywgJylcbiAgfTtcbn1cblxubGV0IFJBRjtcbmxldCBMT09QSU5HID0gdHJ1ZTtcbmxldCBJTlRFUlZBTCA9IDEwMDAgLyA2MDtcblxuY29uc3QgYW5pbWF0ZSA9IChwYW5lbHMsIGl0ZXJhdGlvbiA9IDApID0+IHtcbiAgLy8gZGVidWdnZXI7XG4gIGNvbnN0IHBvaW50ID0gZ2V0UG9pbnRBbG9uZ0VsbGlwc2UoaXRlcmF0aW9uKTtcbiAgY29uc3QgcG9zaXRpb25zID0gcG9pbnRUb1Bvc2l0aW9ucyhwb2ludCk7XG4gIGNvbnN0IHNjYWxlcyA9IHBvc2l0aW9ucy5tYXAocG9pbnRUb1NjYWxlcyk7XG4gIFxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgIHBhbmVscy5mb3JFYWNoKCh7aW5uZXIsIG91dGVyfSwgaW5kZXgpID0+IHtcbiAgICAgIG91dGVyLnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZSgke3NjYWxlc1tpbmRleF0uc2NhbGV9KWA7XG4gICAgICBpbm5lci5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHtzY2FsZXNbaW5kZXhdLmludmVyc2VTY2FsZX0pYDtcbiAgICB9KVxuICB9KVxuXG4gIGlmIChMT09QSU5HKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBhbmltYXRlKHBhbmVscywgaXRlcmF0aW9uICsgMSk7XG4gICAgfSwgSU5URVJWQUwpO1xuICB9XG59XG5cblxuY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgY29uc3QgcGFuZWxzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFuZWwnKSkubWFwKG91dGVyID0+IHtcbiAgICBjb25zdCBpbm5lciA9IG91dGVyLnF1ZXJ5U2VsZWN0b3IoJy5wYW5lbF9faW5uZXInKTtcbiAgICByZXR1cm4ge1xuICAgICAgb3V0ZXIsXG4gICAgICBpbm5lclxuICAgIH07XG4gIH0pO1xuICBhbmltYXRlKHBhbmVscyk7XG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdCk7IiwiY29uc3Qgcm91bmRUbyA9IChudW1iZXIsIG51bU9mRGVjUGxhY2VzID0gMikgPT4ge1xuICBjb25zdCBwb3dlciA9IE1hdGgucG93KDEwLCBudW1PZkRlY1BsYWNlcyk7XG4gIHJldHVybiBNYXRoLnJvdW5kKG51bWJlciAqIHBvd2VyKSAvIHBvd2VyO1xufTtcblxuZXhwb3J0IHtcbiAgcm91bmRUb1xufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=