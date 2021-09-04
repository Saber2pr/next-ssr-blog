module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("baFf");


/***/ }),

/***/ "F0z+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiConfig; });
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("KNus");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);

const {
  publicRuntimeConfig
} = next_config__WEBPACK_IMPORTED_MODULE_0___default()();

const isBrowser = () => false;

const testLog = () => {
  // if (
  //   publicRuntimeConfig.env === 'development' ||
  //   publicRuntimeConfig.env === 'testing'
  // ) {
  //   return true
  // }
  if (isBrowser()) {
    return localStorage.getItem('__DEV__') === 'saber2pr';
  }

  return true;
}; // @ts-expect-error


publicRuntimeConfig.log = testLog();
const ApiConfig = publicRuntimeConfig;

/***/ }),

/***/ "KNus":
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "baFf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "config", function() { return /* binding */ config; });

// CONCATENATED MODULE: ./api/visitors.ts
let visitors = [];
const MAX = 10000;
const pushVisitor = item => {
  visitors = [item, ...visitors];
  visitors = visitors.slice(0, MAX);
  return visitors;
};
const getVisitors = () => visitors.slice();
const clearVisitors = () => visitors = [];
// EXTERNAL MODULE: ./api/utils.ts
var utils = __webpack_require__("oxPU");

// CONCATENATED MODULE: ./pages/api/v.ts



const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb'
    }
  }
};
/* harmony default export */ var v = __webpack_exports__["default"] = (async (req, res) => {
  try {
    const method = req.method.toLowerCase();
    res.writeHead(200, {
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Origin': Object(utils["b" /* getOrigin */])()
    });

    if (method === 'post') {
      res.end(JSON.stringify({
        status: 200,
        data: pushVisitor(JSON.parse(req.body)),
        message: 'push ok.'
      }));
    }

    if (method === 'get') {
      var _req$query;

      const clear = req === null || req === void 0 ? void 0 : (_req$query = req.query) === null || _req$query === void 0 ? void 0 : _req$query.clear;
      return res.end(JSON.stringify({
        status: 200,
        data: clear ? clearVisitors() : getVisitors(),
        message: 'get ok.'
      }));
    }
  } catch (error) {
    console.log(error);
    res.end(JSON.stringify({
      status: 500,
      data: {},
      message: 'error'
    }));
  }
});

/***/ }),

/***/ "oxPU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isDev */
/* unused harmony export isTest */
/* unused harmony export isProd */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getOrigin; });
/* unused harmony export getDomain */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return rewriteUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setMetadata; });
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("KNus");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("F0z+");


const {
  publicRuntimeConfig
} = next_config__WEBPACK_IMPORTED_MODULE_0___default()();
const isDev = () => (publicRuntimeConfig === null || publicRuntimeConfig === void 0 ? void 0 : publicRuntimeConfig.env) === 'development';
const isTest = () => (publicRuntimeConfig === null || publicRuntimeConfig === void 0 ? void 0 : publicRuntimeConfig.env) === 'testing';
const isProd = () => (publicRuntimeConfig === null || publicRuntimeConfig === void 0 ? void 0 : publicRuntimeConfig.env) === 'production';
const getOrigin = () => _apiConfig__WEBPACK_IMPORTED_MODULE_1__[/* ApiConfig */ "a"].allowOrigin;
const getDomain = () => _apiConfig__WEBPACK_IMPORTED_MODULE_1__[/* ApiConfig */ "a"].domain;
const rewriteUrl = (url, prefix = _apiConfig__WEBPACK_IMPORTED_MODULE_1__[/* ApiConfig */ "a"].proxyApi) => {
  return url.replace(new RegExp(`^${prefix}`), '');
};
const META_KEY = '__$$metadata';
const getMetadata = (resOrReq, key) => {
  let metadata = {};

  if (typeof resOrReq === 'object') {
    var _metadata;

    if ('config' in resOrReq) {
      var _resOrReq$config;

      metadata = resOrReq === null || resOrReq === void 0 ? void 0 : (_resOrReq$config = resOrReq.config) === null || _resOrReq$config === void 0 ? void 0 : _resOrReq$config[META_KEY];
    } else {
      metadata = resOrReq === null || resOrReq === void 0 ? void 0 : resOrReq[META_KEY];
    }

    return (_metadata = metadata) === null || _metadata === void 0 ? void 0 : _metadata[key];
  }
};
const setMetadata = (resOrReq, key, value) => {
  let metadata = {};

  if (typeof resOrReq === 'object') {
    if ('config' in resOrReq) {
      var _resOrReq$config$META, _resOrReq$config2;

      metadata = (_resOrReq$config$META = resOrReq === null || resOrReq === void 0 ? void 0 : (_resOrReq$config2 = resOrReq.config) === null || _resOrReq$config2 === void 0 ? void 0 : _resOrReq$config2[META_KEY]) !== null && _resOrReq$config$META !== void 0 ? _resOrReq$config$META : {};
    } else {
      var _resOrReq$META_KEY;

      metadata = (_resOrReq$META_KEY = resOrReq === null || resOrReq === void 0 ? void 0 : resOrReq[META_KEY]) !== null && _resOrReq$META_KEY !== void 0 ? _resOrReq$META_KEY : {};
    }

    metadata[key] = value;
    resOrReq[META_KEY] = metadata;
  }
};

/***/ })

/******/ });