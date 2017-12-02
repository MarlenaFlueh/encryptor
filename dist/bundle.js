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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _encryptor = __webpack_require__(1);

var input = document.querySelector('input');
var p = document.querySelector('p');
var abc = 'abcdefghijklmnopqrstuvwxyz';

input.addEventListener('input', function (event) {
  p.innerHTML = (0, _encryptor.rot13)(event.target.value);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var shiftChar = exports.shiftChar = function shiftChar(char, shift) {
  if (abc.indexOf(char) === -1) {
    return char;
  }

  return abc[(abc.indexOf(char) + shift) % abc.length];
};

// shiftByValue(message: string, shift: number): string -> shifts a whole message
var shiftByValue = exports.shiftByValue = function shiftByValue(message, shift) {
  return message.split('').reduce(function (result, char) {
    return result += shiftChar(char, shift);
  }, '');
};

// rot13(message: string): string -> shifts message by 13
var rot13 = exports.rot13 = function rot13(message) {
  return shiftByValue(message, 13);
};

// vigenere(message: string, key: string): string -> shifts a message by another string
var vigenere = exports.vigenere = function vigenere(message, key) {
  return message.split('').reduce(function (result, char, i) {
    return result += shiftChar(char, abc.indexOf(key[i % key.length]));
  }, '');
};

/***/ })
/******/ ]);