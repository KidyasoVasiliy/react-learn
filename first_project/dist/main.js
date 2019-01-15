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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/helpers/employersNames.js":
/*!***************************************!*\
  !*** ./src/helpers/employersNames.js ***!
  \***************************************/
/*! exports provided: employersNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"employersNames\", function() { return employersNames; });\nconst employers = [\n  'Alex', '', 'ludmila', 'Viktor',\n  '', 'oleg', 'iNna', 'Ivan',\n  'Alex', 'Olga', ' Ann'];\n\n\nconst names = [];\nemployers.forEach((employer) => {\n  if (employer.length > 0 && employer.length !== '') {\n    names.push(employer);\n  }\n});\n\nconst employersNames = names\n  .map(employersName => employersName.toLowerCase().trim());\n\n\n//# sourceURL=webpack:///./src/helpers/employersNames.js?");

/***/ }),

/***/ "./src/helpers/money.js":
/*!******************************!*\
  !*** ./src/helpers/money.js ***!
  \******************************/
/*! exports provided: money, eu, rus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"money\", function() { return money; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"eu\", function() { return eu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rus\", function() { return rus; });\nconst sponsors = {\n  cash: [40000, 5000, 30400, 12000],\n  eu: ['SRL', 'PLO', 'J&K'],\n  rus: ['RusAuto', 'SBO'],\n};\n\nconst calcCash = (own, ...args) => {\n  const [everyCash] = args;\n  const sumEveryCash = everyCash\n    .reduce((accumulator, currentValue) => accumulator + currentValue);\n  const total = own ? sumEveryCash : (own + sumEveryCash);\n\n  return total;\n};\n\nconst money = calcCash(null, sponsors.cash);\n\nconst {\n  eu,\n  rus,\n} = sponsors;\n\n\n\n//# sourceURL=webpack:///./src/helpers/money.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_employersNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/employersNames */ \"./src/helpers/employersNames.js\");\n/* harmony import */ var _helpers_money__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/money */ \"./src/helpers/money.js\");\n\n\n\n\nclass MakeBusiness {\n  constructor(owner, director, cash, emp) {\n    this.owner = owner;\n    this.director = director;\n    this.cash = cash;\n    this.emp = emp;\n\n    this.sponsors = {\n      eu: _helpers_money__WEBPACK_IMPORTED_MODULE_1__[\"eu\"],\n      rus: _helpers_money__WEBPACK_IMPORTED_MODULE_1__[\"rus\"],\n    };\n\n    this.sumSponsors = this.getSumSponsors();\n    this.carefulSponsor = this.getCarefulSponsor();\n  }\n\n  getSumSponsors() {\n    const { eu: europSponsor, rus: russianSponsor } = this.sponsors;\n    return [...europSponsor, ...russianSponsor, 'unexpected sponsor'].join(', ');\n  }\n\n  getCarefulSponsor() {\n    const [carefulSponsor] = this.sponsors.eu;\n    return carefulSponsor;\n  }\n\n  get info() {\n    console.log(`\n    We have a business. Owner: ${this.owner} , director: ${this.director || 'Victor'}. Our budget: ${this.cash}. And our employers: ${this.emp.join(', ')}\n    And we have a sponsors:\n    ${this.sumSponsors}\n    Note. Be careful with ${this.carefulSponsor}. It's a huge risk.\n    `);\n\n    return undefined;\n  }\n}\n\nconst info = new MakeBusiness('Sam', null, _helpers_money__WEBPACK_IMPORTED_MODULE_1__[\"money\"], _helpers_employersNames__WEBPACK_IMPORTED_MODULE_0__[\"employersNames\"]);\n// eslint-disable-next-line\ninfo.info;\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });