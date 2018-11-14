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
  return [topLeftScale, topRightScale, bottomRightScale, bottomLeftScale];
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
  var keyframes = positions.reduce(function (acc, panelPosition, keyframeIndex, list) {
    var percentage = Object(_util__WEBPACK_IMPORTED_MODULE_0__["roundTo"])(keyframeIndex / list.length * 100, 0);
    panelPosition.forEach(function (scaleArr, panelIndex) {
      var scale = scaleArr.map(function (s) {
        return Object(_util__WEBPACK_IMPORTED_MODULE_0__["roundTo"])(s, 0);
      }).join(', ');
      var value = "transform: scale(".concat(scale, ");");
      acc[panelIndex] += "".concat(percentage, "% { ").concat(value, " }");
    });
    return acc;
  }, ['', '', '', '']);
  var animationNames = ['topLeft', 'topRight', 'bottomRight', 'bottomLeft'];
  var animationCss = animationNames.map(function (name, i) {
    // const animationApplication = animationNameToApplication(name, i);
    // const animationDefinition = keyframesToAnimation(name, keyframes[i]);
    // return animationApplication + animationDefinition;
    return keyframesToAnimation(name, keyframes[i]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsicmVxdWlyZSIsImdldFBvaW50QWxvbmdFbGxpcHNlIiwiaXRlcmF0aW9uIiwiYW5nbGUiLCJNYXRoIiwiUEkiLCJhIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImIiLCJpbm5lckhlaWdodCIsIngiLCJjb3MiLCJ5Iiwic2luIiwicG9pbnRUb1Bvc2l0aW9ucyIsInRvcExlZnRTY2FsZSIsInRvcFJpZ2h0U2NhbGUiLCJib3R0b21SaWdodFNjYWxlIiwiYm90dG9tTGVmdFNjYWxlIiwia2V5ZnJhbWVzVG9BbmltYXRpb24iLCJuYW1lIiwia2V5ZnJhbWVzIiwiYW5pbWF0aW9uTmFtZVRvQXBwbGljYXRpb24iLCJpbmRleCIsImNyZWF0ZUFuaW1hdGlvbnMiLCJudW1iZXJPZktleWZyYW1lcyIsInBvaW50cyIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIm1hcCIsIl8iLCJwb3NpdGlvbnMiLCJjb29yZHMiLCJyZWR1Y2UiLCJhY2MiLCJwYW5lbFBvc2l0aW9uIiwia2V5ZnJhbWVJbmRleCIsImxpc3QiLCJwZXJjZW50YWdlIiwicm91bmRUbyIsImZvckVhY2giLCJzY2FsZUFyciIsInBhbmVsSW5kZXgiLCJzY2FsZSIsInMiLCJqb2luIiwidmFsdWUiLCJhbmltYXRpb25OYW1lcyIsImFuaW1hdGlvbkNzcyIsImkiLCJkb2N1bWVudCIsImJvZHkiLCJpbm5lckhUTUwiLCJpbml0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm51bWJlciIsIm51bU9mRGVjUGxhY2VzIiwicG93ZXIiLCJwb3ciLCJyb3VuZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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R0QsY0FBYyxDQUFDbEIsR0FBZixDQUFtQixVQUFDVixJQUFELEVBQU84QixDQUFQLEVBQWE7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsV0FBTy9CLG9CQUFvQixDQUFDQyxJQUFELEVBQU9DLFNBQVMsQ0FBQzZCLENBQUQsQ0FBaEIsQ0FBM0I7QUFDRCxHQUxvQixFQUtsQkosSUFMa0IsQ0FLYixFQUxhLENBQXJCO0FBTUFLLFVBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxTQUFkLHFCQUFxQ0osWUFBckM7QUFHRCxDQS9CRDs7QUFpQ0EsSUFBTUssSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTlCLGtCQUFnQjtBQUNqQixDQVhEOztBQWFBMkIsUUFBUSxDQUFDSSxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOENELElBQTlDLEU7Ozs7Ozs7Ozs7OztBQzVGQTtBQUFBO0FBQUEsSUFBTWQsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ2dCLE1BQUQsRUFBZ0M7QUFBQSxNQUF2QkMsY0FBdUIsdUVBQU4sQ0FBTTtBQUM5QyxNQUFNQyxLQUFLLEdBQUd2RCxJQUFJLENBQUN3RCxHQUFMLENBQVMsRUFBVCxFQUFhLENBQWIsQ0FBZDtBQUNBLFNBQU94RCxJQUFJLENBQUN5RCxLQUFMLENBQVdKLE1BQU0sR0FBR0UsS0FBcEIsSUFBNkJBLEtBQXBDO0FBQ0QsQ0FIRDs7Ozs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9pbmRleC5qc1wiKTtcbiIsInJlcXVpcmUoJy4uL3Njc3MvaW5kZXguc2NzcycpO1xuaW1wb3J0IHsgcm91bmRUbyB9IGZyb20gJy4vdXRpbCc7XG5cbmNvbnN0IGdldFBvaW50QWxvbmdFbGxpcHNlID0gKGl0ZXJhdGlvbiA9IDApID0+IHtcbiAgLypcbiAgICAoaCwgaykgPSBjZW50ZXJcbiAgICBhID0gaG9yaXpvbnRhbCByYWRpdXNcbiAgICBiID0gdmVydGljYWwgcmFkaXVzXG4gICovXG4gIGNvbnN0IGFuZ2xlID0gKGl0ZXJhdGlvbiAlIDM2MCkgKiAoTWF0aC5QSSAvIDE4MCk7XG4gIGNvbnN0IGEgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIDI7XG4gIGNvbnN0IGIgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyO1xuICAvLyBjb25zdCBmb29YID0gKGEgKiBNYXRoLmNvcyhhbmdsZSkpO1xuICAvLyBjb25zdCBmb29ZID0gKGIgKiBNYXRoLnNpbihhbmdsZSkpO1xuICAvLyBjb25zb2xlLmxvZyhbZm9vWCwgZm9vWV0pO1xuICBjb25zdCB4ID0gKGEgKiBNYXRoLmNvcyhhbmdsZSkgKyBhKSAvIHdpbmRvdy5pbm5lcldpZHRoO1xuICBjb25zdCB5ID0gKGIgKiBNYXRoLnNpbihhbmdsZSkgKyBiKSAvIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgcmV0dXJuIHtcbiAgICB4LCBcbiAgICB5XG4gIH07XG59O1xuXG5jb25zdCBwb2ludFRvUG9zaXRpb25zID0gKHsgeCwgeSB9KSA9PiB7XG4gIGNvbnN0IHRvcExlZnRTY2FsZSA9IFt4LCB5XTtcbiAgY29uc3QgdG9wUmlnaHRTY2FsZSA9IFsoMSAtIHgpLCB5XTtcbiAgY29uc3QgYm90dG9tUmlnaHRTY2FsZSA9IFsxIC0geCwgKDEgLSB5KV07XG4gIGNvbnN0IGJvdHRvbUxlZnRTY2FsZSA9IFt4LCAoMSAtIHkpXTtcbiAgcmV0dXJuIFtcbiAgICB0b3BMZWZ0U2NhbGUsXG4gICAgdG9wUmlnaHRTY2FsZSxcbiAgICBib3R0b21SaWdodFNjYWxlLFxuICAgIGJvdHRvbUxlZnRTY2FsZVxuICBdO1xufTtcblxuY29uc3Qga2V5ZnJhbWVzVG9BbmltYXRpb24gPSAobmFtZSwga2V5ZnJhbWVzKSA9PiB7XG4gIHJldHVybiBgQGtleWZyYW1lcyAke25hbWV9IHsgJHtrZXlmcmFtZXN9IH1gO1xufTtcblxuY29uc3QgYW5pbWF0aW9uTmFtZVRvQXBwbGljYXRpb24gPSAobmFtZSwgaW5kZXgpID0+IHtcbiAgcmV0dXJuIGAucGFuZWw6bnRoLWNoaWxkKCR7aW5kZXggKyAxfSkge1xuICAgIGFuaW1hdGlvbi1uYW1lOiAke25hbWV9O1xuICB9YDtcbn1cblxuY29uc3QgY3JlYXRlQW5pbWF0aW9ucyA9ICgpID0+IHtcbiAgY29uc3QgbnVtYmVyT2ZLZXlmcmFtZXMgPSA1MDtcbiAgY29uc3QgcG9pbnRzID0gQXJyYXkuZnJvbSh7IGxlbmd0aCA6IG51bWJlck9mS2V5ZnJhbWVzIH0pXG4gICAgLm1hcCgoXywgaW5kZXgpID0+IGdldFBvaW50QWxvbmdFbGxpcHNlKGluZGV4IC8gbnVtYmVyT2ZLZXlmcmFtZXMgKiAzNjApKTtcbiAgLyogQW4gYXJyYXkgb2Ygc2NhbGVzICh3aGljaCBhcmUgYXJyYXlzKSAqL1xuICBjb25zdCBwb3NpdGlvbnMgPSBwb2ludHNcbiAgICAubWFwKGNvb3JkcyA9PiBwb2ludFRvUG9zaXRpb25zKGNvb3JkcykpO1xuICBjb25zdCBrZXlmcmFtZXMgPSBwb3NpdGlvbnMucmVkdWNlKChhY2MsIHBhbmVsUG9zaXRpb24sIGtleWZyYW1lSW5kZXgsIGxpc3QpID0+IHtcbiAgICBjb25zdCBwZXJjZW50YWdlID0gcm91bmRUbyhrZXlmcmFtZUluZGV4IC8gbGlzdC5sZW5ndGggKiAxMDAsIDApO1xuICAgIHBhbmVsUG9zaXRpb24uZm9yRWFjaCgoc2NhbGVBcnIsIHBhbmVsSW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHNjYWxlID0gc2NhbGVBcnIubWFwKHMgPT4gcm91bmRUbyhzLCAwKSkuam9pbignLCAnKTtcbiAgICAgIGNvbnN0IHZhbHVlID0gYHRyYW5zZm9ybTogc2NhbGUoJHtzY2FsZX0pO2A7XG4gICAgICBhY2NbcGFuZWxJbmRleF0gKz0gYCR7cGVyY2VudGFnZX0lIHsgJHt2YWx1ZX0gfWA7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwgW1xuICAgICcnLFxuICAgICcnLFxuICAgICcnLFxuICAgICcnXG4gIF0pO1xuICBjb25zdCBhbmltYXRpb25OYW1lcyA9IFsndG9wTGVmdCcsICd0b3BSaWdodCcsICdib3R0b21SaWdodCcsICdib3R0b21MZWZ0J107XG4gIGNvbnN0IGFuaW1hdGlvbkNzcyA9IGFuaW1hdGlvbk5hbWVzLm1hcCgobmFtZSwgaSkgPT4ge1xuICAgIC8vIGNvbnN0IGFuaW1hdGlvbkFwcGxpY2F0aW9uID0gYW5pbWF0aW9uTmFtZVRvQXBwbGljYXRpb24obmFtZSwgaSk7XG4gICAgLy8gY29uc3QgYW5pbWF0aW9uRGVmaW5pdGlvbiA9IGtleWZyYW1lc1RvQW5pbWF0aW9uKG5hbWUsIGtleWZyYW1lc1tpXSk7XG4gICAgLy8gcmV0dXJuIGFuaW1hdGlvbkFwcGxpY2F0aW9uICsgYW5pbWF0aW9uRGVmaW5pdGlvbjtcbiAgICByZXR1cm4ga2V5ZnJhbWVzVG9BbmltYXRpb24obmFtZSwga2V5ZnJhbWVzW2ldKTtcbiAgfSkuam9pbignJyk7XG4gIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MICs9IGA8c3R5bGU+JHthbmltYXRpb25Dc3N9PC9zdHlsZT5gXG5cblxufTtcblxuY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgLy8gY29uc3QgZGVidWdDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVidWcnKTtcbiAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCAzNjA7IGkrKykge1xuICAvLyAgIGNvbnN0IGNvb3JkcyA9IGdldFBvaW50QWxvbmdFbGxpcHNlKGkpO1xuICAvLyAgIGNvbnN0IGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAvLyAgIGRvdC5jbGFzc05hbWUgPSAnZG90JztcbiAgLy8gICBkb3Quc3R5bGUubGVmdCA9IGAke2Nvb3Jkcy54ICogMTAwfXZ3YDtcbiAgLy8gICBkb3Quc3R5bGUudG9wID0gYCR7Y29vcmRzLnkgKiAxMDB9dmhgO1xuICAvLyAgIGRlYnVnQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvdCk7XG4gIC8vIH1cbiAgY3JlYXRlQW5pbWF0aW9ucygpXG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdCk7IiwiY29uc3Qgcm91bmRUbyA9IChudW1iZXIsIG51bU9mRGVjUGxhY2VzID0gMikgPT4ge1xuICBjb25zdCBwb3dlciA9IE1hdGgucG93KDEwLCAyKTtcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtYmVyICogcG93ZXIpIC8gcG93ZXI7XG59O1xuXG5leHBvcnQge1xuICByb3VuZFRvXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==