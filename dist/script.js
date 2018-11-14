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



var getPointAlongEllipse = function getPointAlongEllipse() {
  var iteration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  /*
    (h, k) = center
    a = horizontal radius
    b = vertical radius
  */
  var angle = iteration % 360 * (Math.PI / 180);
  var a = window.innerWidth / 2;
  var b = window.innerHeight / 2; // const fooX = (a * Math.cos(angle));
  // const fooY = (b * Math.sin(angle));
  // console.log([fooX, fooY]);

  var x = (a * Math.cos(angle) + a) / window.innerWidth;
  var y = (b * Math.sin(angle) + b) / window.innerHeight;
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

  return [[topLeftScale, topLeftInverseScale], [topRightScale, topRightInverseScale], [bottomRightScale, bottomRightInverseScale], [bottomLeftScale, bottomLeftInverseScale]];
};

var keyframesToAnimation = function keyframesToAnimation(name, keyframes) {
  return "@keyframes ".concat(name, " { ").concat(keyframes, " }");
};

var animationNameToApplication = function animationNameToApplication(name, index) {
  return ".panel:nth-child(".concat(index + 1, ") {\n    animation-name: ").concat(name, ";\n  }");
};

var createAnimations = function createAnimations() {
  var numberOfKeyframes = 50;
  var points = Array.from({
    length: numberOfKeyframes
  }).map(function (_, index) {
    return getPointAlongEllipse(index / numberOfKeyframes * 360);
  });
  /* An array of scales (which are arrays) */

  var positions = points.map(function (coords) {
    return pointToPositions(coords);
  });
  console.log({
    positions: positions
  });
  var keyframes = positions.reduce(function (acc, panelPosition, keyframeIndex, list) {
    var percentage = Object(_util__WEBPACK_IMPORTED_MODULE_0__["roundTo"])(keyframeIndex / list.length * 100, 0);
    panelPosition.forEach(function (_ref2, panelIndex) {
      var _ref3 = _slicedToArray(_ref2, 2),
          scaleArr = _ref3[0],
          inverseScaleArr = _ref3[1];

      console.log({
        scaleArr: scaleArr,
        inverseScaleArr: inverseScaleArr
      });
      var scale = scaleArr.map(function (s) {
        return Object(_util__WEBPACK_IMPORTED_MODULE_0__["roundTo"])(s, 0);
      }).join(', ');
      var inverseScale = inverseScaleArr.map(function (s) {
        return Object(_util__WEBPACK_IMPORTED_MODULE_0__["roundTo"])(s, 0);
      }).join(', ');
      acc[panelIndex].scaleAnimation += "".concat(percentage, "% { transform: scale(").concat(scale, "); }");
      acc[panelIndex].inverseScaleAnimation += "".concat(percentage, "% { transform: scale(").concat(inverseScale, "); }");
    });
    return acc;
  }, [{
    scaleAnimation: '',
    inverseScaleAnimation: ''
  }, {
    scaleAnimation: '',
    inverseScaleAnimation: ''
  }, {
    scaleAnimation: '',
    inverseScaleAnimation: ''
  }, {
    scaleAnimation: '',
    inverseScaleAnimation: ''
  }]);
  var animationNames = [{
    animationName: 'topLeft',
    inverseAnimationName: 'topLeftInverse'
  }, {
    animationName: 'topRight',
    inverseAnimationName: 'topRightInverse'
  }, {
    animationName: 'bottomRight',
    inverseAnimationName: 'bottomRightInverse'
  }, {
    animationName: 'bottomLeft',
    inverseAnimationName: 'bottomLeftInverse'
  }];
  var animationCss = animationNames.map(function (name, i) {
    var animationName = name.animationName,
        inverseAnimationName = name.inverseAnimationName; // const animationApplication = animationNameToApplication(name, i);
    // const animationDefinition = keyframesToAnimation(name, keyframes[i]);
    // return animationApplication + animationDefinition;

    var animationDefintion = keyframesToAnimation(animationName, keyframes[i].scaleAnimation);
    var inverseAnimationDefintion = keyframesToAnimation(inverseAnimationName, keyframes[i].inverseScaleAnimation);
    return animationDefintion + inverseAnimationDefintion;
  }).join('');
  document.body.innerHTML += "<style>".concat(animationCss, "</style>");
};

var init = function init() {
  // const debugContainer = document.getElementById('debug');
  // for (let i = 0; i < 360; i++) {
  //   const coords = getPointAlongEllipse(i);
  //   const dot = document.createElement('div');
  //   dot.className = 'dot';
  //   dot.style.left = `${coords.x * 100}vw`;
  //   dot.style.top = `${coords.y * 100}vh`;
  //   debugContainer.appendChild(dot);
  // }
  createAnimations();
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
  var power = Math.pow(10, 2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2luZGV4LnNjc3M/MTkxYSJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiZ2V0UG9pbnRBbG9uZ0VsbGlwc2UiLCJpdGVyYXRpb24iLCJhbmdsZSIsIk1hdGgiLCJQSSIsImEiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYiIsImlubmVySGVpZ2h0IiwieCIsImNvcyIsInkiLCJzaW4iLCJwb2ludFRvUG9zaXRpb25zIiwidG9wTGVmdFNjYWxlIiwidG9wUmlnaHRTY2FsZSIsImJvdHRvbVJpZ2h0U2NhbGUiLCJib3R0b21MZWZ0U2NhbGUiLCJpbnZlcnNlU2NhbGVzIiwibWFwIiwicyIsInAiLCJ0b3BMZWZ0SW52ZXJzZVNjYWxlIiwidG9wUmlnaHRJbnZlcnNlU2NhbGUiLCJib3R0b21SaWdodEludmVyc2VTY2FsZSIsImJvdHRvbUxlZnRJbnZlcnNlU2NhbGUiLCJrZXlmcmFtZXNUb0FuaW1hdGlvbiIsIm5hbWUiLCJrZXlmcmFtZXMiLCJhbmltYXRpb25OYW1lVG9BcHBsaWNhdGlvbiIsImluZGV4IiwiY3JlYXRlQW5pbWF0aW9ucyIsIm51bWJlck9mS2V5ZnJhbWVzIiwicG9pbnRzIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsInBvc2l0aW9ucyIsImNvb3JkcyIsImNvbnNvbGUiLCJsb2ciLCJyZWR1Y2UiLCJhY2MiLCJwYW5lbFBvc2l0aW9uIiwia2V5ZnJhbWVJbmRleCIsImxpc3QiLCJwZXJjZW50YWdlIiwicm91bmRUbyIsImZvckVhY2giLCJwYW5lbEluZGV4Iiwic2NhbGVBcnIiLCJpbnZlcnNlU2NhbGVBcnIiLCJzY2FsZSIsImpvaW4iLCJpbnZlcnNlU2NhbGUiLCJzY2FsZUFuaW1hdGlvbiIsImludmVyc2VTY2FsZUFuaW1hdGlvbiIsImFuaW1hdGlvbk5hbWVzIiwiYW5pbWF0aW9uTmFtZSIsImludmVyc2VBbmltYXRpb25OYW1lIiwiYW5pbWF0aW9uQ3NzIiwiaSIsImFuaW1hdGlvbkRlZmludGlvbiIsImludmVyc2VBbmltYXRpb25EZWZpbnRpb24iLCJkb2N1bWVudCIsImJvZHkiLCJpbm5lckhUTUwiLCJpbml0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm51bWJlciIsIm51bU9mRGVjUGxhY2VzIiwicG93ZXIiLCJwb3ciLCJyb3VuZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkFBLG1CQUFPLENBQUMsaURBQUQsQ0FBUDs7QUFDQTs7QUFFQSxJQUFNQyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLEdBQW1CO0FBQUEsTUFBbEJDLFNBQWtCLHVFQUFOLENBQU07O0FBQzlDOzs7OztBQUtBLE1BQU1DLEtBQUssR0FBSUQsU0FBUyxHQUFHLEdBQWIsSUFB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QkFBa0IsR0FBR0MseUJBQTVCO0FBQ0QsR0FSb0IsRUFRbEJWLElBUmtCLENBUWIsRUFSYSxDQUFyQjtBQVNBVyxVQUFRLENBQUNDLElBQVQsQ0FBY0MsU0FBZCxxQkFBcUNOLFlBQXJDO0FBR0QsQ0FyQ0Q7O0FBdUNBLElBQU1PLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FyQyxrQkFBZ0I7QUFDakIsQ0FYRDs7QUFhQWtDLFFBQVEsQ0FBQ0ksZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDRCxJQUE5QyxFOzs7Ozs7Ozs7Ozs7QUM1SEE7QUFBQTtBQUFBLElBQU1wQixPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDc0IsTUFBRCxFQUFnQztBQUFBLE1BQXZCQyxjQUF1Qix1RUFBTixDQUFNO0FBQzlDLE1BQU1DLEtBQUssR0FBR3RFLElBQUksQ0FBQ3VFLEdBQUwsQ0FBUyxFQUFULEVBQWEsQ0FBYixDQUFkO0FBQ0EsU0FBT3ZFLElBQUksQ0FBQ3dFLEtBQUwsQ0FBV0osTUFBTSxHQUFHRSxLQUFwQixJQUE2QkEsS0FBcEM7QUFDRCxDQUhEOzs7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2luZGV4LmpzXCIpO1xuIiwicmVxdWlyZSgnLi4vc2Nzcy9pbmRleC5zY3NzJyk7XG5pbXBvcnQgeyByb3VuZFRvIH0gZnJvbSAnLi91dGlsJztcblxuY29uc3QgZ2V0UG9pbnRBbG9uZ0VsbGlwc2UgPSAoaXRlcmF0aW9uID0gMCkgPT4ge1xuICAvKlxuICAgIChoLCBrKSA9IGNlbnRlclxuICAgIGEgPSBob3Jpem9udGFsIHJhZGl1c1xuICAgIGIgPSB2ZXJ0aWNhbCByYWRpdXNcbiAgKi9cbiAgY29uc3QgYW5nbGUgPSAoaXRlcmF0aW9uICUgMzYwKSAqIChNYXRoLlBJIC8gMTgwKTtcbiAgY29uc3QgYSA9IHdpbmRvdy5pbm5lcldpZHRoIC8gMjtcbiAgY29uc3QgYiA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDI7XG4gIC8vIGNvbnN0IGZvb1ggPSAoYSAqIE1hdGguY29zKGFuZ2xlKSk7XG4gIC8vIGNvbnN0IGZvb1kgPSAoYiAqIE1hdGguc2luKGFuZ2xlKSk7XG4gIC8vIGNvbnNvbGUubG9nKFtmb29YLCBmb29ZXSk7XG4gIGNvbnN0IHggPSAoYSAqIE1hdGguY29zKGFuZ2xlKSArIGEpIC8gd2luZG93LmlubmVyV2lkdGg7XG4gIGNvbnN0IHkgPSAoYiAqIE1hdGguc2luKGFuZ2xlKSArIGIpIC8gd2luZG93LmlubmVySGVpZ2h0O1xuICByZXR1cm4ge1xuICAgIHgsIFxuICAgIHlcbiAgfTtcbn07XG5cbmNvbnN0IHBvaW50VG9Qb3NpdGlvbnMgPSAoeyB4LCB5IH0pID0+IHtcbiAgY29uc3QgdG9wTGVmdFNjYWxlID0gW3gsIHldO1xuICBjb25zdCB0b3BSaWdodFNjYWxlID0gWygxIC0geCksIHldO1xuICBjb25zdCBib3R0b21SaWdodFNjYWxlID0gWzEgLSB4LCAoMSAtIHkpXTtcbiAgY29uc3QgYm90dG9tTGVmdFNjYWxlID0gW3gsICgxIC0geSldO1xuICBjb25zdCBpbnZlcnNlU2NhbGVzID0gW1xuICAgIHRvcExlZnRTY2FsZSxcbiAgICB0b3BSaWdodFNjYWxlLFxuICAgIGJvdHRvbVJpZ2h0U2NhbGUsXG4gICAgYm90dG9tTGVmdFNjYWxlXG4gIF0ubWFwKHMgPT4ge1xuICAgIHJldHVybiBzLm1hcChwID0+IDEgLyBwKTtcbiAgfSk7XG4gIGNvbnN0IFtcbiAgICB0b3BMZWZ0SW52ZXJzZVNjYWxlLFxuICAgIHRvcFJpZ2h0SW52ZXJzZVNjYWxlLFxuICAgIGJvdHRvbVJpZ2h0SW52ZXJzZVNjYWxlLFxuICAgIGJvdHRvbUxlZnRJbnZlcnNlU2NhbGVcbiAgXSA9IGludmVyc2VTY2FsZXM7XG4gIHJldHVybiBbXG4gICAgW1xuICAgICAgdG9wTGVmdFNjYWxlLFxuICAgICAgdG9wTGVmdEludmVyc2VTY2FsZVxuICAgIF0sXG4gICAgW1xuICAgICAgdG9wUmlnaHRTY2FsZSxcbiAgICAgIHRvcFJpZ2h0SW52ZXJzZVNjYWxlXG4gICAgXSxcbiAgICBbXG4gICAgICBib3R0b21SaWdodFNjYWxlLFxuICAgICAgYm90dG9tUmlnaHRJbnZlcnNlU2NhbGVcbiAgICBdLFxuICAgIFtcbiAgICAgIGJvdHRvbUxlZnRTY2FsZSxcbiAgICAgIGJvdHRvbUxlZnRJbnZlcnNlU2NhbGVcbiAgICBdLFxuICBdXG59O1xuXG5jb25zdCBrZXlmcmFtZXNUb0FuaW1hdGlvbiA9IChuYW1lLCBrZXlmcmFtZXMpID0+IHtcbiAgcmV0dXJuIGBAa2V5ZnJhbWVzICR7bmFtZX0geyAke2tleWZyYW1lc30gfWA7XG59O1xuXG5jb25zdCBhbmltYXRpb25OYW1lVG9BcHBsaWNhdGlvbiA9IChuYW1lLCBpbmRleCkgPT4ge1xuICByZXR1cm4gYC5wYW5lbDpudGgtY2hpbGQoJHtpbmRleCArIDF9KSB7XG4gICAgYW5pbWF0aW9uLW5hbWU6ICR7bmFtZX07XG4gIH1gO1xufTtcblxuY29uc3QgY3JlYXRlQW5pbWF0aW9ucyA9ICgpID0+IHtcbiAgY29uc3QgbnVtYmVyT2ZLZXlmcmFtZXMgPSA1MDtcbiAgY29uc3QgcG9pbnRzID0gQXJyYXkuZnJvbSh7IGxlbmd0aCA6IG51bWJlck9mS2V5ZnJhbWVzIH0pXG4gICAgLm1hcCgoXywgaW5kZXgpID0+IGdldFBvaW50QWxvbmdFbGxpcHNlKGluZGV4IC8gbnVtYmVyT2ZLZXlmcmFtZXMgKiAzNjApKTtcbiAgLyogQW4gYXJyYXkgb2Ygc2NhbGVzICh3aGljaCBhcmUgYXJyYXlzKSAqL1xuICBjb25zdCBwb3NpdGlvbnMgPSBwb2ludHNcbiAgICAubWFwKGNvb3JkcyA9PiBwb2ludFRvUG9zaXRpb25zKGNvb3JkcykpO1xuICBjb25zb2xlLmxvZyh7IHBvc2l0aW9ucyB9KTtcbiAgY29uc3Qga2V5ZnJhbWVzID0gcG9zaXRpb25zLnJlZHVjZSgoYWNjLCBwYW5lbFBvc2l0aW9uLCBrZXlmcmFtZUluZGV4LCBsaXN0KSA9PiB7XG4gICAgY29uc3QgcGVyY2VudGFnZSA9IHJvdW5kVG8oa2V5ZnJhbWVJbmRleCAvIGxpc3QubGVuZ3RoICogMTAwLCAwKTtcbiAgICBwYW5lbFBvc2l0aW9uLmZvckVhY2goKFtzY2FsZUFyciwgaW52ZXJzZVNjYWxlQXJyXSwgcGFuZWxJbmRleCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coeyBzY2FsZUFyciwgaW52ZXJzZVNjYWxlQXJyIH0pO1xuICAgICAgY29uc3Qgc2NhbGUgPSBzY2FsZUFyci5tYXAocyA9PiByb3VuZFRvKHMsIDApKS5qb2luKCcsICcpO1xuICAgICAgY29uc3QgaW52ZXJzZVNjYWxlID0gaW52ZXJzZVNjYWxlQXJyLm1hcChzID0+IHJvdW5kVG8ocywgMCkpLmpvaW4oJywgJyk7XG4gICAgICBhY2NbcGFuZWxJbmRleF0uc2NhbGVBbmltYXRpb24gKz0gYCR7cGVyY2VudGFnZX0lIHsgdHJhbnNmb3JtOiBzY2FsZSgke3NjYWxlfSk7IH1gO1xuICAgICAgYWNjW3BhbmVsSW5kZXhdLmludmVyc2VTY2FsZUFuaW1hdGlvbiArPSBgJHtwZXJjZW50YWdlfSUgeyB0cmFuc2Zvcm06IHNjYWxlKCR7aW52ZXJzZVNjYWxlfSk7IH1gO1xuICAgIH0pO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIFtcbiAgICB7c2NhbGVBbmltYXRpb24gOiAnJywgaW52ZXJzZVNjYWxlQW5pbWF0aW9uIDogJyd9LFxuICAgIHtzY2FsZUFuaW1hdGlvbiA6ICcnLCBpbnZlcnNlU2NhbGVBbmltYXRpb24gOiAnJ30sXG4gICAge3NjYWxlQW5pbWF0aW9uIDogJycsIGludmVyc2VTY2FsZUFuaW1hdGlvbiA6ICcnfSxcbiAgICB7c2NhbGVBbmltYXRpb24gOiAnJywgaW52ZXJzZVNjYWxlQW5pbWF0aW9uIDogJyd9XG4gIF0pO1xuICBjb25zdCBhbmltYXRpb25OYW1lcyA9IFt7IGFuaW1hdGlvbk5hbWUgOiAndG9wTGVmdCcsIGludmVyc2VBbmltYXRpb25OYW1lIDogJ3RvcExlZnRJbnZlcnNlJ30sIHsgYW5pbWF0aW9uTmFtZSA6ICd0b3BSaWdodCcsIGludmVyc2VBbmltYXRpb25OYW1lIDogJ3RvcFJpZ2h0SW52ZXJzZSd9LCB7IGFuaW1hdGlvbk5hbWUgOiAnYm90dG9tUmlnaHQnLCBpbnZlcnNlQW5pbWF0aW9uTmFtZSA6ICdib3R0b21SaWdodEludmVyc2UnfSwgeyBhbmltYXRpb25OYW1lIDogJ2JvdHRvbUxlZnQnLCBpbnZlcnNlQW5pbWF0aW9uTmFtZSA6ICdib3R0b21MZWZ0SW52ZXJzZSd9XTtcbiAgY29uc3QgYW5pbWF0aW9uQ3NzID0gYW5pbWF0aW9uTmFtZXMubWFwKChuYW1lLCBpKSA9PiB7XG4gICAgY29uc3QgeyBhbmltYXRpb25OYW1lLCBpbnZlcnNlQW5pbWF0aW9uTmFtZSB9ID0gbmFtZTtcbiAgICAvLyBjb25zdCBhbmltYXRpb25BcHBsaWNhdGlvbiA9IGFuaW1hdGlvbk5hbWVUb0FwcGxpY2F0aW9uKG5hbWUsIGkpO1xuICAgIC8vIGNvbnN0IGFuaW1hdGlvbkRlZmluaXRpb24gPSBrZXlmcmFtZXNUb0FuaW1hdGlvbihuYW1lLCBrZXlmcmFtZXNbaV0pO1xuICAgIC8vIHJldHVybiBhbmltYXRpb25BcHBsaWNhdGlvbiArIGFuaW1hdGlvbkRlZmluaXRpb247XG4gICAgY29uc3QgYW5pbWF0aW9uRGVmaW50aW9uID0ga2V5ZnJhbWVzVG9BbmltYXRpb24oYW5pbWF0aW9uTmFtZSwga2V5ZnJhbWVzW2ldLnNjYWxlQW5pbWF0aW9uKTtcbiAgICBjb25zdCBpbnZlcnNlQW5pbWF0aW9uRGVmaW50aW9uID0ga2V5ZnJhbWVzVG9BbmltYXRpb24oaW52ZXJzZUFuaW1hdGlvbk5hbWUsIGtleWZyYW1lc1tpXS5pbnZlcnNlU2NhbGVBbmltYXRpb24pO1xuICAgIHJldHVybiBhbmltYXRpb25EZWZpbnRpb24gKyBpbnZlcnNlQW5pbWF0aW9uRGVmaW50aW9uO1xuICB9KS5qb2luKCcnKTtcbiAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgKz0gYDxzdHlsZT4ke2FuaW1hdGlvbkNzc308L3N0eWxlPmBcblxuXG59O1xuXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuICAvLyBjb25zdCBkZWJ1Z0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWJ1ZycpO1xuICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IDM2MDsgaSsrKSB7XG4gIC8vICAgY29uc3QgY29vcmRzID0gZ2V0UG9pbnRBbG9uZ0VsbGlwc2UoaSk7XG4gIC8vICAgY29uc3QgZG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIC8vICAgZG90LmNsYXNzTmFtZSA9ICdkb3QnO1xuICAvLyAgIGRvdC5zdHlsZS5sZWZ0ID0gYCR7Y29vcmRzLnggKiAxMDB9dndgO1xuICAvLyAgIGRvdC5zdHlsZS50b3AgPSBgJHtjb29yZHMueSAqIDEwMH12aGA7XG4gIC8vICAgZGVidWdDb250YWluZXIuYXBwZW5kQ2hpbGQoZG90KTtcbiAgLy8gfVxuICBjcmVhdGVBbmltYXRpb25zKClcbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0KTsiLCJjb25zdCByb3VuZFRvID0gKG51bWJlciwgbnVtT2ZEZWNQbGFjZXMgPSAyKSA9PiB7XG4gIGNvbnN0IHBvd2VyID0gTWF0aC5wb3coMTAsIDIpO1xuICByZXR1cm4gTWF0aC5yb3VuZChudW1iZXIgKiBwb3dlcikgLyBwb3dlcjtcbn07XG5cbmV4cG9ydCB7XG4gIHJvdW5kVG9cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9