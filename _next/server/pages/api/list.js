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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/xoJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createError; });
/* unused harmony export createWrapperError */
/* unused harmony export isObject */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return unWrapError; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Evpv");

const createError = error => {
  const axiosError = error;
  const axiosResponse = axiosError === null || axiosError === void 0 ? void 0 : axiosError.response;

  if (axiosResponse) {
    const {
      status,
      statusText = '',
      data
    } = axiosResponse;
    const apiError = {
      status,
      statusText,
      data
    };
    return apiError;
  } else {
    const {
      code: statusText = '',
      message: data
    } = axiosError;
    const apiError = {
      statusText,
      data
    };
    return apiError;
  }
};
const createWrapperError = (error = {}) => ({
  [_constants__WEBPACK_IMPORTED_MODULE_0__[/* KEYS */ "a"].error]: error
});
const isObject = data => typeof data === 'object';
const TestError = data => data && isObject(data) && _constants__WEBPACK_IMPORTED_MODULE_0__[/* KEYS */ "a"].error in data;
const unWrapError = error => error && error[_constants__WEBPACK_IMPORTED_MODULE_0__[/* KEYS */ "a"].error];

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ydMn");


/***/ }),

/***/ "Evpv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HOUR */
/* unused harmony export DAY */
/* unused harmony export MIN */
/* unused harmony export WAIT */
/* unused harmony export COOKIE_MAX_AGE */
/* unused harmony export LS_KEY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KEYS; });
const HOUR = 3600;
const DAY = 86400;
const MIN = 60;
const WAIT = 100;
const COOKIE_MAX_AGE = DAY * 30;
const LS_KEY = {
  LOG: '__DEV__'
};
const KEYS = {
  error: '$error',
  token: 'token',
  authKey: 'Authorization'
};

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

/***/ "HGni":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getToken; });
/* unused harmony export saveToken */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getHeaderAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setHeaderAuth; });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Evpv");

const getToken = () => {
  return localStorage.getItem(_utils_constants__WEBPACK_IMPORTED_MODULE_0__[/* KEYS */ "a"].token);
};
const saveToken = () => {
  return localStorage.getItem(_utils_constants__WEBPACK_IMPORTED_MODULE_0__[/* KEYS */ "a"].token);
};
const getHeaderAuth = headers => {
  var _headers$KEYS$authKey;

  return (_headers$KEYS$authKey = headers === null || headers === void 0 ? void 0 : headers[_utils_constants__WEBPACK_IMPORTED_MODULE_0__[/* KEYS */ "a"].authKey]) !== null && _headers$KEYS$authKey !== void 0 ? _headers$KEYS$authKey : headers === null || headers === void 0 ? void 0 : headers[_utils_constants__WEBPACK_IMPORTED_MODULE_0__[/* KEYS */ "a"].authKey.toLowerCase()];
};
const setHeaderAuth = (headers, token) => {
  if (headers) {
    headers[_utils_constants__WEBPACK_IMPORTED_MODULE_0__[/* KEYS */ "a"].authKey] = token;
  }

  return headers;
};

/***/ }),

/***/ "KNus":
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "hwuy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ptbk; });
/* harmony import */ var _saber2pr_ptbk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zWCZ");
/* harmony import */ var _saber2pr_ptbk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_saber2pr_ptbk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_apiConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("F0z+");

 // 如果被破解，请更改以下加密方法

const ptbk = _saber2pr_ptbk__WEBPACK_IMPORTED_MODULE_0___default.a.create(([pri, pub]) => {
  return pri + pub;
}, ptbk => {
  const m = ptbk.length / 2;
  return [ptbk.slice(0, m), ptbk.slice(m)];
});
ptbk.setEnable(_api_apiConfig__WEBPACK_IMPORTED_MODULE_1__[/* ApiConfig */ "a"].enablePtbk);


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

/***/ }),

/***/ "y4F4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return timeout; });
const timeout = (delay = 1000) => new Promise(resolve => setTimeout(resolve, delay));

/***/ }),

/***/ "ydMn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var _api_getToken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HGni");
/* harmony import */ var _api_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oxPU");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Evpv");
/* harmony import */ var _utils_createError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/xoJ");
/* harmony import */ var _utils_ptbk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("hwuy");
/* harmony import */ var _utils_timeout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("y4F4");






const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb'
    }
  }
};
/**
 * 捕获所有路由
 * > 用于客户端请求的反向代理
 */

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  try {
    let data = [1, 2, 3];
    const authorization = Object(_api_getToken__WEBPACK_IMPORTED_MODULE_0__[/* getHeaderAuth */ "a"])(req.headers);

    if (authorization) {
      data = [1, 2, 3, 4, 5, 6];
    }

    res.writeHead(200, {
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Origin': Object(_api_utils__WEBPACK_IMPORTED_MODULE_1__[/* getOrigin */ "b"])()
    });
    await Object(_utils_timeout__WEBPACK_IMPORTED_MODULE_5__[/* timeout */ "a"])(2000);
    const result = _utils_ptbk__WEBPACK_IMPORTED_MODULE_4__[/* ptbk */ "a"].encode(data);
    res.end(JSON.stringify(result));
  } catch (error) {
    res.end(JSON.stringify({
      [_utils_constants__WEBPACK_IMPORTED_MODULE_2__[/* KEYS */ "a"].error]: Object(_utils_createError__WEBPACK_IMPORTED_MODULE_3__[/* createError */ "b"])(error)
    }));
  }
});

/***/ }),

/***/ "zWCZ":
/***/ (function(module, exports) {

module.exports = require("@saber2pr/ptbk");

/***/ })

/******/ });