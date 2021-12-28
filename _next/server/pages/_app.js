module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "3PsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "AsrZ":
/***/ (function(module, exports) {



/***/ }),

/***/ "DsOh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getNowMon; });
/* unused harmony export getNow */
/* unused harmony export formatTimestamp */
/* unused harmony export formatSeconds */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatTime; });
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
const formatTime = time => `${time.slice(0, 4)}/${time.slice(4)}`;

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

/***/ "GvLQ":
/***/ (function(module, exports) {

module.exports = require("nprogress");

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

/***/ "Jhpi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return requestProxy; });
/* harmony import */ var _utils_addLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wslU");
/* harmony import */ var _utils_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("XgvE");
/* harmony import */ var _apiUrls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("QSsk");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("eWHO");




const requestProxy = async ({
  baseUrl,
  url,
  params,
  method = 'get',
  data
}) => {
  const path = baseUrl ? Object(_utils_path__WEBPACK_IMPORTED_MODULE_1__[/* join */ "a"])(baseUrl, url) : url;
  return Object(_request__WEBPACK_IMPORTED_MODULE_3__[/* requestApi */ "c"])({
    method,
    data,
    url: _apiUrls__WEBPACK_IMPORTED_MODULE_2__[/* ApiUrls */ "a"].utils_proxy,
    params: {
      url: params ? Object(_utils_addLink__WEBPACK_IMPORTED_MODULE_0__[/* appendParams */ "c"])(path, params) : path
    }
  });
};

/***/ }),

/***/ "JuiC":
/***/ (function(module, exports) {

module.exports = require("@saber2pr/plain-redux");

/***/ }),

/***/ "KNus":
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "PWtr":
/***/ (function(module, exports) {



/***/ }),

/***/ "PlYH":
/***/ (function(module, exports) {



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
  comments163: 'https://api.uomg.com/api/comments.163?format=text',
  // github
  data_: 'https://saber2pr.top/static/data/',
  content_: 'https://saber2pr.top/blog'
};
const resolveApiUrl = (apiUrl, params) => apiUrl && apiUrl.replace(/\{(\w+)\}/g, (_, n) => params[n]);
const getAbsoluteUrl = apiUrl => Object(_utils_path__WEBPACK_IMPORTED_MODULE_0__[/* join */ "a"])(_apiConfig__WEBPACK_IMPORTED_MODULE_1__[/* ApiConfig */ "a"].target, apiUrl);
const getProxyUrl = apiUrl => Object(_utils_path__WEBPACK_IMPORTED_MODULE_0__[/* join */ "a"])(_apiConfig__WEBPACK_IMPORTED_MODULE_1__[/* ApiConfig */ "a"].proxyApi, apiUrl);
const cachelist = ['content_', 'data_'];

/***/ }),

/***/ "Qemm":
/***/ (function(module, exports) {



/***/ }),

/***/ "SAkk":
/***/ (function(module, exports) {



/***/ }),

/***/ "WYo3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useDispatchState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useSelectState; });
/* unused harmony export initState */
/* unused harmony export useFetchState */
/* unused harmony export store */
/* harmony import */ var _saber2pr_plain_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("JuiC");
/* harmony import */ var _saber2pr_plain_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_saber2pr_plain_redux__WEBPACK_IMPORTED_MODULE_0__);

const {
  useStore,
  useDispatchState,
  useSelectState,
  getStore,
  initState,
  useFetchState
} = _saber2pr_plain_redux__WEBPACK_IMPORTED_MODULE_0___default()({
  userInfo: null,
  blogScrollTop: 0
});

const store = getStore();

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

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_dist_antd_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("SAkk");
/* harmony import */ var antd_dist_antd_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pnhs");
/* harmony import */ var moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("pdi6");
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_utils_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("eoyC");
/* harmony import */ var _styles_utils_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_less__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_global_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Qemm");
/* harmony import */ var _styles_global_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_global_less__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_reset_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("sFC6");
/* harmony import */ var _styles_reset_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_reset_less__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_animation_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("PlYH");
/* harmony import */ var _styles_animation_less__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_animation_less__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_components_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("AsrZ");
/* harmony import */ var _styles_components_less__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_components_less__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_shadow_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("PWtr");
/* harmony import */ var _styles_shadow_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_shadow_less__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("GvLQ");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _api_apiConfig__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("F0z+");
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("eWHO");
/* harmony import */ var _api_requestProxy__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("Jhpi");
/* harmony import */ var _hooks_useRouterChange__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("sd1U");
/* harmony import */ var _hooks_useUserDingtalk__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("oKKt");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("WYo3");
/* harmony import */ var _utils_console__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("pNwb");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// antd
 // moment


 // styles



















const ComponentWrapper = ({
  Component,
  pageProps
}) => {
  const send = Object(_hooks_useUserDingtalk__WEBPACK_IMPORTED_MODULE_17__[/* useUserDingtalkFn */ "a"])();
  Object(_hooks_useRouterChange__WEBPACK_IMPORTED_MODULE_16__[/* useRouterChange */ "a"])({
    start: () => nprogress__WEBPACK_IMPORTED_MODULE_11___default.a.start(),
    end: () => {
      nprogress__WEBPACK_IMPORTED_MODULE_11___default.a.done();
      send(`正在浏览页面->${document.title}`);
    },
    error: () => nprogress__WEBPACK_IMPORTED_MODULE_11___default.a.done()
  }, [send]);
  return __jsx(Component, pageProps);
};

function App(AppProps) {
  var _AppProps$pageProps;

  const store = Object(_store__WEBPACK_IMPORTED_MODULE_18__[/* useStore */ "c"])(AppProps === null || AppProps === void 0 ? void 0 : (_AppProps$pageProps = AppProps.pageProps) === null || _AppProps$pageProps === void 0 ? void 0 : _AppProps$pageProps.initialReduxState);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // registerAnalyticsGoogle('UA-XXX')
    Object(_utils_console__WEBPACK_IMPORTED_MODULE_19__[/* printLogo */ "a"])();
    nprogress__WEBPACK_IMPORTED_MODULE_11___default.a.configure({
      minimum: 0.08,
      easing: 'linear',
      speed: 200,
      trickleSpeed: 200
    });

    if (_api_apiConfig__WEBPACK_IMPORTED_MODULE_13__[/* ApiConfig */ "a"].log) {
      window['__store'] = store;
      window['__config'] = _api_apiConfig__WEBPACK_IMPORTED_MODULE_13__[/* ApiConfig */ "a"];
      window['__requestApi'] = _api_request__WEBPACK_IMPORTED_MODULE_14__[/* requestApi */ "c"];
      window['__requestUri'] = _api_request__WEBPACK_IMPORTED_MODULE_14__[/* requestUri */ "d"];
      window['__requestProxy'] = _api_requestProxy__WEBPACK_IMPORTED_MODULE_15__[/* requestProxy */ "a"];
      window['__NProgress'] = nprogress__WEBPACK_IMPORTED_MODULE_11___default.a;
    }
  }, []);
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_12__["Provider"], {
    store: store
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, null, __jsx("meta", {
    "http-equiv": "Content-Security-Policy",
    content: "upgrade-insecure-requests"
  }), __jsx("meta", {
    name: "keywords",
    content: "react,antd,typescript,javascript,css,html,\u524D\u7AEF\u5B66\u4E60,\u524D\u7AEF\u8FDB\u9636,\u4E2A\u4EBA\u535A\u5BA2"
  }), __jsx("meta", {
    name: "description",
    content: "\u957F\u671F\u66F4\u65B0\u524D\u7AEF\u6280\u672F\u6587\u7AE0,\u5206\u4EAB\u524D\u7AEF\u6280\u672F\u7ECF\u9A8C"
  }), __jsx("link", {
    rel: "manifest",
    href: "./manifest.json"
  }), __jsx("script", {
    src: "//cdn.jsdelivr.net/gh/Saber2pr/loading@master/index.min.js"
  }), __jsx("script", {
    async: true,
    src: "//cdn.jsdelivr.net/gh/saber2pr/click-mask@master/click-mask.min.js"
  }), __jsx("script", {
    async: true,
    src: "//cdn.jsdelivr.net/gh/saber2pr/test@master/tools/debug.min.js"
  }), __jsx("script", {
    async: true,
    src: "http://pv.sohu.com/cityjson?ie=utf-8"
  })), __jsx(ComponentWrapper, AppProps));
}

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
      let optionalParams = [Object(date["b" /* getNowMon */])().format('YYYY-MM-DD HH:mm:ss'), reqUrl];

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

/***/ "eoyC":
/***/ (function(module, exports) {



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

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

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

/***/ "oKKt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ useUserDingtalkFn; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./utils/ptbk.ts
var ptbk = __webpack_require__("hwuy");

// EXTERNAL MODULE: ./api/apiConfig.ts
var apiConfig = __webpack_require__("F0z+");

// EXTERNAL MODULE: ./api/apiUrls.ts
var apiUrls = __webpack_require__("QSsk");

// EXTERNAL MODULE: ./api/request.ts + 2 modules
var request = __webpack_require__("eWHO");

// CONCATENATED MODULE: ./api/dingtalk.ts




let Dingtalk;

(function (_Dingtalk) {
  const sendMessage = _Dingtalk.sendMessage = content => {
    if (apiConfig["a" /* ApiConfig */].blockDingtalk) {
      return;
    }

    request["c" /* requestApi */].post(apiUrls["a" /* ApiUrls */].dingtalkSendMessage, {
      data: ptbk["a" /* ptbk */].encode({
        content: `${apiConfig["a" /* ApiConfig */].dingtalkKey} ${content}`
      })
    });
  };
})(Dingtalk || (Dingtalk = {}));
// EXTERNAL MODULE: ./store/index.ts
var store = __webpack_require__("WYo3");

// CONCATENATED MODULE: ./hooks/useUserDingtalk.ts



const useUserDingtalkFn = () => {
  // user应从store中获取(useSelector)
  const user = Object(store["b" /* useSelectState */])('userInfo');
  const send = Object(external_react_["useCallback"])(message => {
    var _user$nickName, _user$role$notes, _user$role;

    const nickName = (_user$nickName = user === null || user === void 0 ? void 0 : user.nickName) !== null && _user$nickName !== void 0 ? _user$nickName : '游客用户';
    const notes = (_user$role$notes = user === null || user === void 0 ? void 0 : (_user$role = user.role) === null || _user$role === void 0 ? void 0 : _user$role.notes) !== null && _user$role$notes !== void 0 ? _user$role$notes : '-';
    Dingtalk.sendMessage(`用户[${nickName}, ${notes}]: ${message}`);
  }, [user]);
  return send;
};

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

/***/ "pNwb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Logo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return printLogo; });
// http://patorjk.com/software/taag/
const Logo = `by saber2pr`;
const printLogo = () => console.log(Logo, 'color: black');

/***/ }),

/***/ "pdi6":
/***/ (function(module, exports) {



/***/ }),

/***/ "pnhs":
/***/ (function(module, exports) {

module.exports = require("moment/locale/zh-cn");

/***/ }),

/***/ "sFC6":
/***/ (function(module, exports) {



/***/ }),

/***/ "sd1U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useRouterChange; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const useRouterChange = ({
  start,
  end,
  error
}, deps) => {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (start) {
      next_router__WEBPACK_IMPORTED_MODULE_0__["Router"].events.on('routeChangeStart', start);
    }

    if (end) {
      next_router__WEBPACK_IMPORTED_MODULE_0__["Router"].events.on('routeChangeComplete', end);
    }

    if (error) {
      next_router__WEBPACK_IMPORTED_MODULE_0__["Router"].events.on('routeChangeError', error);
    }

    return () => {
      if (start) {
        next_router__WEBPACK_IMPORTED_MODULE_0__["Router"].events.off('routeChangeStart', start);
      }

      if (end) {
        next_router__WEBPACK_IMPORTED_MODULE_0__["Router"].events.off('routeChangeComplete', end);
      }

      if (error) {
        next_router__WEBPACK_IMPORTED_MODULE_0__["Router"].events.off('routeChangeError', error);
      }
    };
  }, deps);
};

/***/ }),

/***/ "v0fQ":
/***/ (function(module, exports) {

module.exports = require("json-bigint");

/***/ }),

/***/ "wslU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return appendParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addBlogLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addOriginHref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return appendPathExt; });
/* unused harmony export clearPathExt */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createAvatars; });
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("XgvE");
/* harmony import */ var _toQueryStr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("6pq/");


/**
 * url添加参数方法
 * ```ts
 * // 示例
 * appendParams('/user', { id: 1, name: null })
 * // 输出 /user?id=1
 * ```
 */

const appendParams = (url, params) => {
  if (url && params) {
    if (url.indexOf('?') !== -1) {
      return `${url}&${Object(_toQueryStr__WEBPACK_IMPORTED_MODULE_1__[/* toQueryStr */ "a"])(params)}`;
    } else {
      return `${url}?${Object(_toQueryStr__WEBPACK_IMPORTED_MODULE_1__[/* toQueryStr */ "a"])(params)}`;
    }
  }

  return url;
};
const addBlogLink = ({
  path
}) => {
  if (path) {
    const url = Object(_path__WEBPACK_IMPORTED_MODULE_0__[/* join */ "a"])('/blog', clearPathExt(path));
    return url;
  }
};
const addOriginHref = ({
  path
}) => {
  return `https://github.com/saber2pr/saber2pr.github.io/blob/master${appendPathExt(path)}`;
};
const appendPathExt = path => {
  if (path) {
    if (/\.md$/.test(path)) return path;
    return `${path}.md`;
  }
};
const clearPathExt = path => {
  if (path) {
    return path.replace(/\.md$/, '');
  }
};
const createAvatars = (name, size = 70) => `https://avatars.githubusercontent.com/${name}?size=${size}`;

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

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