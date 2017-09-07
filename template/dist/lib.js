(function webpackUniversalModuleDefinition(root, factory) {
	if (typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if (typeof define === 'function' && define.amd)
		define("lib", [], factory);
	else if (typeof exports === 'object')
		exports["lib"] = factory();
	else
		root["lib"] = factory();
})(this, function () {
	return /******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
				/******/
};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
			/******/
}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
		/******/
})
/************************************************************************/
/******/({

/***/ 0:
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function (module, exports, __webpack_require__) {

				"use strict";

				Object.defineProperty(exports, "__esModule", { value: true });
				var second_1 = __webpack_require__(/*! ./second */ 326);
				/**
				 * A variable that is made private via comment.
				 */
				exports.fakePrivateVariable = second_1["default"];
				/**
				 * A variable that is made protected via comment.
				 */
				exports.fakeProtectedVariable = "test";
				/**
				 * A function that is made private via comment.
				 */
				function _fakePrivateFunction() { }
				/**
				 * A function that is made private via comment.
				 */
				function fakePrivateFunction() { }
				exports.fakePrivateFunction = fakePrivateFunction;
				/**
				 * A function that is made protected via comment.
				 */
				function fakeProtectedFunction() { }
				exports.fakeProtectedFunction = fakeProtectedFunction;
				/**
				 * A class that is documented as being private.
				 */
				var PrivateClass = /** @class */function () {
					function PrivateClass() { }
					/**
					 * privateclass_c description
					 * @returns {string}
					 * @memberof PrivateClass
					 */
					PrivateClass.prototype.privateclass_c = function () {
						return "aaa";
					};
					/**
					 * @param {string} param
					 * @returns {string} return desc
					 * @memberof PrivateClass
					 */
					PrivateClass.prototype.privateclass_d = function (param) {
						return param;
					};
					return PrivateClass;
				}();
				exports.PrivateClass = PrivateClass;

				/***/
}),

/***/ 326:
/*!***********************!*\
  !*** ./src/second.ts ***!
  \***********************/
/***/ (function (module, exports) {

				"use strict";

				//Object.defineProperty(exports, "__esModule", { value: true });
				var Bork = /** @class */function () {
					function Bork() {
						this.x = "bar";
					}
					Bork.a = "foo";
					return Bork;
				}();
				var test = "test";
				exports["default"] = test;

				/***/
})

			/******/
})
});
;
//# sourceMappingURL=lib.js.map