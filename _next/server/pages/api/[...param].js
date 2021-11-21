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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/B36":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isUndefined */
/* unused harmony export isNull */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isNullOrUndefined; });
/* unused harmony export isNotNullOrUndefined */
/* unused harmony export isBrowser */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isMobAgent; });
/* unused harmony export isJSON */
/* unused harmony export compareId */
const isUndefined = val => typeof val === 'undefined';
const isNull = val => val === null;
/**
 * 值不存在
 */

const isNullOrUndefined = val => isNull(val) || isUndefined(val);
/**
 * 值存在
 */

const isNotNullOrUndefined = val => !isNullOrUndefined(val);
const isBrowser = () => false;
const isMobAgent = userAgent => /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(userAgent) || userAgent.toLowerCase().indexOf('micromessenger') !== -1;
const isJSON = str => {
  if (typeof str == 'string') {
    try {
      const obj = JSON.parse(str);

      if (typeof obj === 'object' && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  } else {
    return false;
  }
};
const compareId = (a, b) => a == b;

/***/ }),

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

/***/ "1fWI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eWHO");
/* harmony import */ var _api_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oxPU");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Evpv");
/* harmony import */ var _utils_createError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/xoJ");
/* harmony import */ var _utils_ptbk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("hwuy");





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
  const requestRoot = Object(_api_request__WEBPACK_IMPORTED_MODULE_0__[/* createRequestRoot */ "b"])(req.headers);

  try {
    const apiRes = await requestRoot({
      url: req.url,
      method: req.method,
      data: req.body
    });
    const {
      data
    } = apiRes;
    res.writeHead(200, {
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Origin': Object(_api_utils__WEBPACK_IMPORTED_MODULE_1__[/* getOrigin */ "b"])()
    });
    const result = _utils_ptbk__WEBPACK_IMPORTED_MODULE_4__[/* ptbk */ "a"].encode(data);
    res.end(JSON.stringify(result));
  } catch (error) {
    res.end(JSON.stringify({
      [_utils_constants__WEBPACK_IMPORTED_MODULE_2__[/* KEYS */ "a"].error]: Object(_utils_createError__WEBPACK_IMPORTED_MODULE_3__[/* createError */ "b"])(error)
    }));
  }
});

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1fWI");


/***/ }),

/***/ "3PsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "6pq/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toQueryStr; });
/**
 * 序列化url参数
 * ```ts
 * // 示例
 * toQueryStr({ id: 1, name: null, age: 18 })
 * // 输出 id=1&age=18
 * ```
 */
const toQueryStr = obj => {
  if (obj) {
    for (const key in obj) {
      if (obj[key] === null || obj[key] === undefined) {
        delete obj[key];
      }
    }

    return new URLSearchParams(obj).toString();
  } else {
    return '';
  }
};

/***/ }),

/***/ "DsOh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getNowMon; });
/* unused harmony export getNow */
/* unused harmony export formatTimestamp */
/* unused harmony export formatSeconds */
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/B36");


const getNowMon = () => moment__WEBPACK_IMPORTED_MODULE_0___default()();
const getNow = (format = 'YYYY-MM-DD HH:mm:ss') => getNowMon().format(format);
const formatTimestamp = (timestamp, format = 'MM-DD HH:mm') => {
  if (Object(_is__WEBPACK_IMPORTED_MODULE_1__[/* isNullOrUndefined */ "b"])(timestamp)) {
    return '-';
  }

  if (String(timestamp).length === 10) {
    timestamp = timestamp * 1000;
  }

  return moment__WEBPACK_IMPORTED_MODULE_0___default()(timestamp).format(format);
};
const formatSeconds = (seconds, split = ':') => {
  if (Object(_is__WEBPACK_IMPORTED_MODULE_1__[/* isNullOrUndefined */ "b"])(seconds) || Number.isNaN(seconds)) {
    return '-';
  }

  const h = Math.floor(seconds / 3600);
  const m = Math.floor(seconds % 3600 / 60);
  const s = Math.floor(seconds % 60);
  return [h, m, s].map(v => String(v).padStart(2, '0')).join(split);
};

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

/***/ "QSsk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiUrls; });
/* unused harmony export resolveApiUrl */
/* unused harmony export getAbsoluteUrl */
/* unused harmony export getProxyUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cachelist; });
/* harmony import */ var _utils_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("XgvE");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("F0z+");


const ApiUrls = {
  // 工具api
  utils_proxy: '/utils/proxy',
  // 钉钉
  dingtalkSendMessage: '/dingtalk/sendMessage',
  // apis
  list: '/list',
  // github
  data_: 'https://saber2pr.top/static/data/',
  content_: 'https://saber2pr.top/blog'
};
const resolveApiUrl = (apiUrl, params) => apiUrl && apiUrl.replace(/\{(\w+)\}/g, (_, n) => params[n]);
const getAbsoluteUrl = apiUrl => Object(_utils_path__WEBPACK_IMPORTED_MODULE_0__[/* join */ "a"])(_apiConfig__WEBPACK_IMPORTED_MODULE_1__[/* ApiConfig */ "a"].target, apiUrl);
const getProxyUrl = apiUrl => Object(_utils_path__WEBPACK_IMPORTED_MODULE_0__[/* join */ "a"])(_apiConfig__WEBPACK_IMPORTED_MODULE_1__[/* ApiConfig */ "a"].proxyApi, apiUrl);
const cachelist = ['content_', 'data_'];

/***/ }),

/***/ "XgvE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return join; });
const join = (base, path) => {
  if (base && path) {
    base = base.replace(/\/$/, '');
    path = path.replace(/^\//, '');
    return `${base}/${path}`;
  }

  return base || path;
};

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "eGmO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "eWHO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ requestApi; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ createRequestRoot; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ createPureRequest; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ requestUri; });

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./utils/url.ts
var utils_url = __webpack_require__("jR5A");

// EXTERNAL MODULE: ./api/apiConfig.ts
var apiConfig = __webpack_require__("F0z+");

// EXTERNAL MODULE: external "lru-cache"
var external_lru_cache_ = __webpack_require__("iDQ1");
var external_lru_cache_default = /*#__PURE__*/__webpack_require__.n(external_lru_cache_);

// EXTERNAL MODULE: ./utils/createError.ts
var createError = __webpack_require__("/xoJ");

// EXTERNAL MODULE: ./utils/toQueryStr.ts
var toQueryStr = __webpack_require__("6pq/");

// EXTERNAL MODULE: ./api/apiUrls.ts
var apiUrls = __webpack_require__("QSsk");

// CONCATENATED MODULE: ./api/cache.ts





const HOUR_MS = 3600000; // 同构缓存

const cache = new external_lru_cache_default.a({
  max: 1000,
  maxAge: 1 * HOUR_MS // 毫秒

});

const matchCache = url => {
  const api = url.split('?')[0];
  return !!apiUrls["b" /* cachelist */].find(key => api.startsWith(apiUrls["a" /* ApiUrls */][key]));
};

const getCacheSize = () => cache.itemCount;
const getCache = url => {
  if (url && matchCache(url)) {
    const data = cache.get(url);

    if (data) {
      if (apiConfig["a" /* ApiConfig */].log) {
        console.log(`[Get-Cache]: ${url}`);
      }

      return data;
    }
  }
};
const setCache = (url, data) => {
  if (url && matchCache(url)) {
    if (apiConfig["a" /* ApiConfig */].log) {
      console.log(`[Set-Cache]: ${url}`);
    }

    cache.set(url, data);
  }
};
const delCache = url => {
  if (url && matchCache(url)) {
    if (apiConfig["a" /* ApiConfig */].log) {
      console.log(`[Del-Cache]: ${url}`);
    }

    cache.del(url);
  }
};
const clearCache = () => {
  cache.reset();
};
/**
 * axios实例必须handleError，此方法不负责异常处理
 */

const enhanceAxiosCache = axios => {
  const originGet = axios.get;

  axios.get = async (url, config) => {
    const queryStr = config !== null && config !== void 0 && config.params ? `?${Object(toQueryStr["a" /* toQueryStr */])(config.params)}` : '';
    const cacheKey = `${url}${queryStr}`;
    const result = getCache(cacheKey); // 超过maxAge这里result会变成null

    if (result) {
      return result;
    }

    const apiRes = await originGet(url, config); // 异常已处理

    if (Object(createError["a" /* TestError */])(apiRes.data)) {
      // 如果异常，直接返回
      delCache(cacheKey);
      return apiRes;
    } else {
      // 添加缓存
      setCache(cacheKey, apiRes);
      return apiRes;
    }
  };

  return axios;
};
// EXTERNAL MODULE: ./utils/constants.ts
var constants = __webpack_require__("Evpv");

// EXTERNAL MODULE: ./utils/date.ts
var date = __webpack_require__("DsOh");

// EXTERNAL MODULE: ./utils/message.tsx
var message = __webpack_require__("f/3W");

// EXTERNAL MODULE: ./utils/ptbk.ts
var ptbk = __webpack_require__("hwuy");

// EXTERNAL MODULE: ./api/getToken.ts
var getToken = __webpack_require__("HGni");

// EXTERNAL MODULE: ./api/utils.ts
var utils = __webpack_require__("oxPU");

// CONCATENATED MODULE: ./api/interceptors.ts











/**
 * 输出调试信息
 */
const printResUrlTime = res => {
  if (apiConfig["a" /* ApiConfig */].log) {
    const req = res.config;

    if (req) {
      let reqUrl = req.baseURL + req.url;

      if (req.params) {
        let queryUrl = Object(toQueryStr["a" /* toQueryStr */])(req.params);

        if (reqUrl.includes('?')) {
          queryUrl = '&' + queryUrl;
        } else {
          queryUrl = '?' + queryUrl;
        }

        reqUrl += queryUrl;
      }

      if (true) {
        reqUrl = Object(utils["c" /* rewriteUrl */])(reqUrl);
      }

      const duration = Object(utils["a" /* getMetadata */])(res, 'duration');
      let optionalParams = [Object(date["a" /* getNowMon */])().format('YYYY-MM-DD HH:mm:ss'), reqUrl];

      if (duration) {
        optionalParams = optionalParams.concat(`[duration]: ${duration}ms`);
        Object(utils["d" /* setMetadata */])(res, 'duration', duration);
      }

      console.log(...optionalParams);
    }
  }

  return res;
};
const printResData = res => {
  if (apiConfig["a" /* ApiConfig */].log) {
    console.log(res);
  }

  return res;
};
/**
 * 客户端重新抛出被服务端吞掉的错误
 */

const reThrowError = res => {
  const error = Object(createError["c" /* unWrapError */])(res === null || res === void 0 ? void 0 : res.data);

  if (error) {
    return Promise.reject(error);
  }

  return res;
};
/**
 * 去掉代理用的 ^/api
 */

const rewriteApiUrl = req => {
  req.url = Object(utils["c" /* rewriteUrl */])(req.url, apiConfig["a" /* ApiConfig */].proxyApi);
  return req;
};
/**
 * 客户端报错提示
 */

const setClientErrorMessage = res => {
  const error = res.data[constants["a" /* KEYS */].error];

  if (error) {
    if (apiConfig["a" /* ApiConfig */].log) {
      // 输出错误信息
      message["a" /* Messager */].error(error);
    }
  }

  return res;
};
/**
 * 计算接口请求时间
 */

const calcRequestTimeStart = req => {
  if (apiConfig["a" /* ApiConfig */].log) {
    Object(utils["d" /* setMetadata */])(req, 'startTime', new Date());
  }

  return req;
};
/**
 * 计算接口请求时间
 */

const calcRequestTimeEnd = res => {
  if (apiConfig["a" /* ApiConfig */].log) {
    const endTime = new Date();
    const startTime = Object(utils["a" /* getMetadata */])(res, 'startTime');
    Object(utils["d" /* setMetadata */])(res, 'duration', Number(endTime) - Number(startTime));
  }

  return res;
};
/**
 * 转发时如果需要，代理验证host
 */

const changeOrigin = req => {
  var _req$headers;

  const headers = (_req$headers = req.headers) !== null && _req$headers !== void 0 ? _req$headers : {};
  headers.host = Object(utils_url["a" /* getHost */])(req.baseURL);
  req.headers = headers;
  return req;
};
/**
 * axios异常全局处理（服务端渲染）
 */

const handleError = error => {
  var _error$request, _error$request$res;

  console.log('[error]:', error === null || error === void 0 ? void 0 : error.message, error === null || error === void 0 ? void 0 : (_error$request = error.request) === null || _error$request === void 0 ? void 0 : (_error$request$res = _error$request.res) === null || _error$request$res === void 0 ? void 0 : _error$request$res.responseUrl);
  return {
    data: {
      [constants["a" /* KEYS */].error]: Object(createError["b" /* createError */])(error)
    }
  };
};
const decodeApiPtbk = res => {
  if (ptbk["a" /* ptbk */].isPtbk(res === null || res === void 0 ? void 0 : res.data)) {
    res.data = ptbk["a" /* ptbk */].decode(res === null || res === void 0 ? void 0 : res.data);
  }

  return res;
};
/**
 * 客户端自动携带token
 */

const autoWithClientToken = req => {
  const headers = req.headers;

  if (headers) {
    const token = Object(getToken["b" /* getToken */])();

    if (token) {
      Object(getToken["c" /* setHeaderAuth */])(headers, token);
    }
  }

  return req;
};
/**
 * 代理服务端如何发送token
 */

const resolveServerToken = req => {
  const headers = req.headers;

  if (headers) {
    const token = Object(getToken["a" /* getHeaderAuth */])(headers);

    if (token) {// 例如放到cookie中
      // 不处理就是auth header
    }
  }

  return req;
};
// CONCATENATED MODULE: ./api/request.ts






const JSONbigString = __webpack_require__("v0fQ")({
  storeAsString: true
});

// nextjs不支持BigInt,需要这里转换为string
const HTMLTAG = /^\</;
external_axios_default.a.defaults.transformResponse = [text => {
  try {
    // java报错会返回html
    if (HTMLTAG.test(text)) {
      return text;
    } else {
      return JSONbigString.parse(text);
    }
  } catch (error) {
    return text;
  }
}];
/**
 * 用于客户端请求(Ajax)使用的axios实例
 * > 请求proxy
 */

const requestApiConfig = {
  baseURL: apiConfig["a" /* ApiConfig */].proxyApi,
  timeout: apiConfig["a" /* ApiConfig */].timeout,
  withCredentials: true
};
const requestApi = external_axios_default.a.create(requestApiConfig); // 自动携带token

requestApi.interceptors.request.use(autoWithClientToken); // 开始计算请求时间

requestApi.interceptors.request.use(calcRequestTimeStart); // 结束计算请求时间

requestApi.interceptors.response.use(calcRequestTimeEnd); // api解密

requestApi.interceptors.response.use(decodeApiPtbk); // 打印请求url

requestApi.interceptors.response.use(printResUrlTime); // 打印返回值信息

requestApi.interceptors.response.use(printResData); // 提示错误

requestApi.interceptors.response.use(setClientErrorMessage, setClientErrorMessage); // 抛出被服务端吞掉的错误

requestApi.interceptors.response.use(reThrowError);
/**
 * 工厂函数
 * 用于服务端请求使用的axios实例
 * 代理服务端无状态,所以使用函数式,保证每个请求都是新的实例
 */

const createRequestRoot = headers => {
  let baseURL = apiConfig["a" /* ApiConfig */].target;

  if (apiConfig["a" /* ApiConfig */].changeOrigin) {
    headers.host = Object(utils_url["a" /* getHost */])(apiConfig["a" /* ApiConfig */].target);

    if (apiConfig["a" /* ApiConfig */].useProxyOrigin) {
      baseURL += apiConfig["a" /* ApiConfig */].proxyApi;
    }
  }

  const requestRoot = external_axios_default.a.create({
    baseURL,
    timeout: apiConfig["a" /* ApiConfig */].timeout,
    headers
  }); // 转发到target前，去除^/api前缀

  requestRoot.interceptors.request.use(rewriteApiUrl); // 开始计算请求时间

  requestRoot.interceptors.request.use(calcRequestTimeStart); // 结束计算请求时间

  requestRoot.interceptors.response.use(calcRequestTimeEnd); // api解密

  requestRoot.interceptors.response.use(decodeApiPtbk); // 打印请求url， 捕获异常

  requestRoot.interceptors.response.use(printResUrlTime, handleError);
  return requestRoot;
};

const createPureRequest = config => {
  const request = external_axios_default.a.create(config);
  request.interceptors.request.use(calcRequestTimeStart);
  request.interceptors.request.use(rewriteApiUrl);
  request.interceptors.response.use(calcRequestTimeEnd);
  request.interceptors.response.use(printResUrlTime, handleError);
  return request;
};

const requestUri = enhanceAxiosCache(createPureRequest());


/***/ }),

/***/ "f/3W":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Messager; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("eGmO");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("3PsY");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_apiConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("F0z+");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Messager = {
  error(error) {
    console.error(error);

    if (_api_apiConfig__WEBPACK_IMPORTED_MODULE_3__[/* ApiConfig */ "a"].log) {
      const {
        status,
        statusText,
        data
      } = error;
      const message = (data === null || data === void 0 ? void 0 : data.message) || (data === null || data === void 0 ? void 0 : data.error) || data;

      if (typeof message === 'string') {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default.a.error(__jsx("div", null, __jsx("div", null, "\u9519\u8BEF: ", status), statusText && __jsx("div", null, statusText), message && __jsx("div", {
          dangerouslySetInnerHTML: {
            __html: message
          }
        }), __jsx("br", null), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
          onClick: () => antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default.a.destroy()
        }, "\u5173\u95ED")), 0);
      }
    }
  }

};

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

/***/ "iDQ1":
/***/ (function(module, exports) {

module.exports = require("lru-cache");

/***/ }),

/***/ "jR5A":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getHost; });
/* unused harmony export clearApiVersion */
const getHost = url => {
  if (url) {
    const urlMatched = url.match(/https?:\/\/([^/]+)\//i);
    let domain = '';

    if (url && urlMatched && urlMatched[1]) {
      domain = urlMatched[1];
    }

    return domain;
  }
};
const clearApiVersion = api => api && api.replace(/\/v\d$/, '');

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

/***/ "v0fQ":
/***/ (function(module, exports) {

module.exports = require("json-bigint");

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "zWCZ":
/***/ (function(module, exports) {

module.exports = require("@saber2pr/ptbk");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });