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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
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

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "/lZx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ withAxios_withAxios; });

// UNUSED EXPORTS: AxiosMonad

// EXTERNAL MODULE: external "@saber2pr/next-with-axios"
var next_with_axios_ = __webpack_require__("Cqkl");
var next_with_axios_default = /*#__PURE__*/__webpack_require__.n(next_with_axios_);

// EXTERNAL MODULE: ./api/request.ts + 2 modules
var request = __webpack_require__("eWHO");

// EXTERNAL MODULE: ./utils/constants.ts
var constants = __webpack_require__("Evpv");

// EXTERNAL MODULE: ./utils/createError.ts
var createError = __webpack_require__("/xoJ");

// EXTERNAL MODULE: ./utils/ptbk.ts
var ptbk = __webpack_require__("hwuy");

// EXTERNAL MODULE: ./utils/index.ts
var utils = __webpack_require__("cBaE");

// CONCATENATED MODULE: ./utils/encodeUrl.ts
const encodeUrl = url => {
  if (url.includes('%')) return url;
  return encodeURI(url);
};
// CONCATENATED MODULE: ./plugin/withRedirect.ts



const RedirectMap = {
  '/activity': '/动态',
  '/about': '/关于',
  '/links': '/链接'
};
const withRedirect = Object(next_with_axios_["fmap"])(withAxios => (handler, ctx) => {
  var _ctx$req, _ctx$req2;

  const url = ctx === null || ctx === void 0 ? void 0 : (_ctx$req = ctx.req) === null || _ctx$req === void 0 ? void 0 : _ctx$req.url;
  const reqHeaders = ctx === null || ctx === void 0 ? void 0 : (_ctx$req2 = ctx.req) === null || _ctx$req2 === void 0 ? void 0 : _ctx$req2.headers;
  const agent = reqHeaders === null || reqHeaders === void 0 ? void 0 : reqHeaders['user-agent'];

  if (agent && Object(utils["isMobAgent"])(agent)) {
    const target = RedirectMap[url] || url;
    ctx.res.writeHead(302, {
      Location: `//saber2pr.top/#${encodeUrl(target)}`
    });
    ctx.res.end();
  }

  return withAxios(handler)(ctx);
});
// CONCATENATED MODULE: ./plugin/withAxios.ts






const AxiosMonad = next_with_axios_default()(async (handler, ctx) => {
  var _ctx$req;

  const reqHeaders = ctx === null || ctx === void 0 ? void 0 : (_ctx$req = ctx.req) === null || _ctx$req === void 0 ? void 0 : _ctx$req.headers;
  const requestRoot = Object(request["b" /* createRequestRoot */])(reqHeaders);
  const result = {
    props: {}
  };

  try {
    // 服务端HTTP Exception统一捕获
    result.props = await handler(requestRoot, ctx);
  } catch (error) {
    result.props[constants["a" /* KEYS */].error] = Object(createError["b" /* createError */])(error);
  } finally {
    result.props = ptbk["a" /* ptbk */].encode(result.props);
    return result;
  }
});
const withAxios_withAxios = withRedirect(AxiosMonad);

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

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "0Y3A":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export timeDelta */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return timeDeltaFromNow; });
const timeDelta = (time1, time2) => {
  const seconds = (Number(time1) - Number(time2)) / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const months = days / 30;
  const years = months / 12;
  if (years >= 1) return `${Math.round(years)} 年前.`;
  if (months >= 1) return `${Math.round(months)} 月前.`;
  if (days >= 1) return `${Math.round(days)} 天前.`;
  if (hours >= 1) return `${Math.round(hours)} 小时前.`;
  if (minutes >= 1) return `${Math.round(minutes)} 分钟前.`;
  if (seconds >= 1) return `${Math.round(minutes)} 秒前.`;
};
const timeDeltaFromNow = time => timeDelta(Date.now(), Number(time));

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("23aj");


/***/ }),

/***/ "1Lyd":
/***/ (function(module, exports) {



/***/ }),

/***/ "23aj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./pages/style.less
var style = __webpack_require__("KdDy");

// EXTERNAL MODULE: ./api/getData.ts
var getData = __webpack_require__("s9+w");

// EXTERNAL MODULE: ./common/main-layout/index.tsx + 4 modules
var main_layout = __webpack_require__("j05c");

// EXTERNAL MODULE: ./plugin/withAxios.ts + 2 modules
var withAxios = __webpack_require__("/lZx");

// EXTERNAL MODULE: ./plugin/withPage.tsx
var withPage = __webpack_require__("iULE");

// EXTERNAL MODULE: ./utils/array.ts
var array = __webpack_require__("sF6c");

// EXTERNAL MODULE: ./api/apiUrls.ts
var apiUrls = __webpack_require__("QSsk");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./api/get163Msg.ts


const get163Msg = async () => {
  const res = await external_axios_default.a.get(apiUrls["a" /* ApiUrls */].comments163);
  const text = res.data;

  if (text) {
    const contentEnd = text.indexOf('来自@');
    const anthEnd = text.indexOf('在「');
    return text.slice(0, contentEnd) + '@' + text.slice(contentEnd + 3, anthEnd);
  }
};
// EXTERNAL MODULE: ./components/words-inputing/index.tsx
var words_inputing = __webpack_require__("f2EC");

// CONCATENATED MODULE: ./pages/index.tsx

var __jsx = external_react_default.a.createElement;









const getServerSideProps = Object(withAxios["a" /* withAxios */])(async ({
  get
}, ctx) => {
  return {
    home: await Object(getData["a" /* getData */])('home')
  };
});

const LiveComment = () => {
  const {
    0: msg,
    1: setMsg
  } = Object(external_react_["useState"])();
  Object(external_react_["useEffect"])(() => {
    get163Msg().then(text => {
      setMsg(text);
    });
  }, []);
  return __jsx(external_react_default.a.Fragment, null, msg && __jsx(words_inputing["a" /* WordsInputing */], {
    inputs: msg,
    key: msg,
    next: () => setTimeout(() => get163Msg().then(text => {
      setMsg(text);
    }), 3000)
  }));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (Object(withPage["a" /* withPage */])(({
  home
}) => {
  const {
    title,
    infor,
    pic,
    items
  } = home;
  return __jsx(main_layout["a" /* MainLayout */], {
    className: "PageIndex",
    title: "saber2pr\u306E\u7A9D"
  }, __jsx("ul", {
    className: "PageIndex-Ul"
  }, __jsx("li", {
    className: "PageIndex-Title shd-blue"
  }, __jsx("i", null, title)), __jsx("li", {
    className: "PageIndex-Infor"
  }, __jsx("i", null, infor)), __jsx("li", {
    className: "PageIndex-Img"
  }, __jsx("img", {
    src: pic,
    alt: title
  }))), __jsx("div", {
    className: "PageIndex-Comment"
  }, __jsx(LiveComment, null)), __jsx("div", {
    className: "PageIndex-Content"
  }, __jsx("section", {
    className: "PageIndex-Content-Item"
  }, __jsx("ul", null, Object(array["a" /* getArray */])(items).map(({
    type,
    content
  }) => __jsx("li", {
    key: type
  }, __jsx("h1", {
    className: "PageIndex-Content-Title"
  }, type), __jsx("p", null, content)))))));
}));

/***/ }),

/***/ "25xb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return whenInDEV; });
const whenInDEV = callback => {
  const __DEV__ = false;
  __DEV__ && callback && callback();
  return __DEV__;
};

/***/ }),

/***/ "3PsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

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

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "9I8p":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export parseFixed */
/* unused harmony export parseUnit */
/* unused harmony export parseNumberSplit */
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/B36");

const WAN = 10000;
const YI = 100000000;
/**
 * 保留size位小数
 * 超过省略，不超过不处理
 * 1.0334 -> 1.03
 * 1.0 -> 1.0
 */

const parseFixed = (val, size = 2) => {
  if (Object(_is__WEBPACK_IMPORTED_MODULE_0__[/* isNullOrUndefined */ "b"])(val) || Number.isNaN(val)) {
    return '-';
  }
  /**
   * 判断小数点后位数
   */


  const after = String(val).split('.')[1] || '';
  const afterLength = after.length;
  const isOver = afterLength > size;
  return isOver ? Number(val).toFixed(size) : String(val);
};
/**
 * 单位化
 */

const parseUnit = (val, prefix = '') => {
  if (Object(_is__WEBPACK_IMPORTED_MODULE_0__[/* isNullOrUndefined */ "b"])(val) || Number.isNaN(val)) {
    return '-';
  }

  if (val < 0) {
    prefix += '-';
  }

  val = Math.abs(val);
  const hasWan = val >= WAN; // 小于1万的没有单位

  if (!hasWan) {
    return prefix + parseFixed(val);
  }

  const hasYI = val >= YI;

  if (hasYI) {
    // 大于等于1亿
    const valByYI = val / YI;
    const valByYIFixed = parseFixed(valByYI);
    const resultNum = valByYIFixed;
    const suffix = '亿';
    return prefix + resultNum + suffix;
  } else {
    // 小于1亿大于等于1w
    const valByWan = val / WAN;
    /**
     * 保留size位小数
     */

    const valByWanFixed = parseFixed(valByWan);
    const resultNum = valByWanFixed;
    const suffix = 'w';
    return prefix + resultNum + suffix;
  }
};
/**
 * 数字逗号分割
 */

const parseNumberSplit = (val, split = ',') => {
  const reg = /\.\d+/;
  const num = (val || 0).toString();
  const temp = reg.exec(num);
  const decimal = temp && temp[0] ? temp[0] : '';
  const decimalPointIndex = temp && temp.index ? temp.index : num.length;
  let integerNum = num.slice(0, decimalPointIndex);
  let result = '';

  while (integerNum.length > 3) {
    result = split + integerNum.slice(-3) + result;
    integerNum = integerNum.slice(0, integerNum.length - 3);
  }

  if (integerNum) {
    result = integerNum + result;
  }

  result = result + decimal;
  return result;
};

/***/ }),

/***/ "9OG1":
/***/ (function(module, exports) {



/***/ }),

/***/ "9ubE":
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar");

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+ED":
/***/ (function(module, exports) {

module.exports = require("scroll-doc");

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "Cqkl":
/***/ (function(module, exports) {

module.exports = require("@saber2pr/next-with-axios");

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

/***/ "EKCh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getPrefixCls */
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
 // @ts-ignore

const CommonPrefixCls = 'nextpl';
const getPrefixCls = (suffixCls, ...classes) => {
  const currentCls = suffixCls ? `${CommonPrefixCls}-${suffixCls}` : CommonPrefixCls;
  return classnames__WEBPACK_IMPORTED_MODULE_0___default()(currentCls, ...classes);
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

/***/ "GA4s":
/***/ (function(module, exports) {



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

/***/ "HVO3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return throttle; });
const throttle = (callback, delta = 500, metaKey = "__$$count") => {
  const next = () => Reflect.set(throttle, metaKey, Date.now() + delta);

  Reflect.has(throttle, metaKey) || next();

  if (Date.now() > Reflect.get(throttle, metaKey)) {
    next();
    callback();
  }
};

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "KNus":
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "KQPQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Link; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("GvLQ");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Link = ({
  children,
  className,
  href,
  target,
  onClick,
  style,
  scroll = true
}) => {
  const preLoading = event => {
    nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.start(); // 新窗口就直接结束loading
    // 或没有href

    if (target === '_blank' || !href) {
      nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done();
    }

    onClick && onClick(event);
  };

  if (href) {
    if (href.startsWith('http')) {
      return __jsx("a", {
        href: href,
        onClick: preLoading,
        target: target,
        style: style,
        className: className
      }, children);
    } else {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        as: href,
        href: href,
        passHref: true,
        scroll: scroll
      }, __jsx("a", {
        onClick: preLoading,
        target: target,
        style: style,
        className: className
      }, children));
    }
  } else {
    return __jsx("a", {
      onClick: preLoading,
      target: target,
      style: style,
      className: className
    }, children);
  }
};

/***/ }),

/***/ "KdDy":
/***/ (function(module, exports) {



/***/ }),

/***/ "L4P6":
/***/ (function(module, exports) {

module.exports = require("popmotion");

/***/ }),

/***/ "LqVz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputHistory; });
const InputHistory = {
  max: 5,

  getList(key) {
    const list = localStorage.getItem(key);

    if (list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  },

  pushItem(key, value) {
    const list = InputHistory.getList(key) || [];
    list.unshift(value);
    localStorage.setItem(key, JSON.stringify([...new Set(list)].slice(0, InputHistory.max)));
  }

};

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

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

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "S4j3":
/***/ (function(module, exports) {

module.exports = require("antd/lib/typography");

/***/ }),

/***/ "Uc3Y":
/***/ (function(module, exports) {



/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "VbZ2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export pageRef */
/* unused harmony export goTop */
/* unused harmony export goTopQuick */
/* unused harmony export getElementTop */
/* unused harmony export goElementTop */
/* unused harmony export pushGoTop */
/* unused harmony export pushReplace */
/* unused harmony export pushReplaceTop */
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("L4P6");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(popmotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var scroll_doc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("C+ED");
/* harmony import */ var scroll_doc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(scroll_doc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("XmY1");
/* harmony import */ var _popmotion_easing__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_popmotion_easing__WEBPACK_IMPORTED_MODULE_3__);




const pageRef = scroll_doc__WEBPACK_IMPORTED_MODULE_2___default()();
const goTop = (top = 0, cb) => {
  Object(popmotion__WEBPACK_IMPORTED_MODULE_1__["tween"])({
    from: pageRef.scrollTop,
    to: top,
    ease: _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["easeInOut"]
  }).start(v => {
    pageRef.scrollTop = v;

    if (v === 0) {
      cb && cb();
    }
  });
};
const goTopQuick = (top = 0) => {
  pageRef.scrollTop = top;
};
function getElementTop(elem) {
  let elemTop = elem.offsetTop;
  elem = elem.offsetParent;

  while (elem != null) {
    elemTop += elem.offsetTop;
    elem = elem.offsetParent;
  }

  return elemTop;
}
const goElementTop = (elem, cb) => {
  const eleTop = getElementTop(elem);
  goTop(eleTop, cb);
};
const pushGoTop = url => {
  next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push(url).then(() => goTopQuick());
};
const pushReplace = async (url, cb) => {
  next_router__WEBPACK_IMPORTED_MODULE_0___default.a.replace(url).then(() => {
    cb && cb();
  });
};
const pushReplaceTop = async (url, cb) => {
  pushReplace(url, () => {
    goTopQuick();
    cb && cb();
  });
};

/***/ }),

/***/ "VgxQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return resolveImgSrc; });
/* harmony import */ var _api_apiConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F0z+");

const resolveImgSrc = (src, cdn = false) => {
  const baseUrl = _api_apiConfig__WEBPACK_IMPORTED_MODULE_0__[/* ApiConfig */ "a"].static.replace(/\/$/, '');

  if (cdn) {
    return `${_api_apiConfig__WEBPACK_IMPORTED_MODULE_0__[/* ApiConfig */ "a"].static}/img/${src}`;
  }

  if (src) {
    if (/^\/static\//.test(src)) {
      src = src.replace(/^\/static/, _api_apiConfig__WEBPACK_IMPORTED_MODULE_0__[/* ApiConfig */ "a"].static);
    }
  }

  return src;
};

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

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

/***/ "XmY1":
/***/ (function(module, exports) {

module.exports = require("@popmotion/easing");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "YlCu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return collect; });
/* harmony import */ var _whenInDEV__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("25xb");

function collect(tree, stack = [tree]) {
  const result = [];

  while (stack.length) {
    const node = stack.shift();
    node === tree || result.push(node);
    node.children && stack.push(...node.children);
  }

  Object(_whenInDEV__WEBPACK_IMPORTED_MODULE_0__[/* whenInDEV */ "a"])(() => {
    const chars = ['&', '.', '\\'];
    result.forEach(({
      path
    }) => {
      chars.forEach(ch => {
        if (path.includes(ch)) setTimeout(() => {
          throw TypeError(`path type error: ${path}\ninclude '${ch}'`);
        });
      });
    });
  });
  return result;
}

/***/ }),

/***/ "Zx1J":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TableBlock */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// antd table 列间距
const TableBlock = width => ({
  title: '',
  width: width,
  render: () => __jsx("div", null)
});

/***/ }),

/***/ "cBaE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _addLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wslU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addBlogLink", function() { return _addLink__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addOriginHref", function() { return _addLink__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appendPathExt", function() { return _addLink__WEBPACK_IMPORTED_MODULE_0__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAvatars", function() { return _addLink__WEBPACK_IMPORTED_MODULE_0__["e"]; });

/* harmony import */ var _analytics_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nyK1");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("sF6c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getArray", function() { return _array__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _collect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YlCu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "collect", function() { return _collect__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _console__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("pNwb");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Evpv");
/* harmony import */ var _createError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("/xoJ");
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("DsOh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatTime", function() { return _date__WEBPACK_IMPORTED_MODULE_7__["a"]; });

/* harmony import */ var _getPrefixCls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("EKCh");
/* harmony import */ var _goTop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("VbZ2");
/* harmony import */ var _input_history__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("LqVz");
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("/B36");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMobAgent", function() { return _is__WEBPACK_IMPORTED_MODULE_11__["a"]; });

/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("f/3W");
/* harmony import */ var _next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("fOwK");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("9I8p");
/* harmony import */ var _obj_op__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("uDXG");
/* harmony import */ var _parseCookie__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("y8kM");
/* harmony import */ var _parseTree__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("iAJO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryRootFirstChild", function() { return _parseTree__WEBPACK_IMPORTED_MODULE_17__["b"]; });

/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("XgvE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "join", function() { return _path__WEBPACK_IMPORTED_MODULE_18__["a"]; });

/* harmony import */ var _ptbk__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("hwuy");
/* harmony import */ var _resolveImgSrc__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("VgxQ");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("Zx1J");
/* harmony import */ var _throttle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("HVO3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return _throttle__WEBPACK_IMPORTED_MODULE_22__["a"]; });

/* harmony import */ var _timeDelta__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("0Y3A");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeDeltaFromNow", function() { return _timeDelta__WEBPACK_IMPORTED_MODULE_23__["a"]; });

/* harmony import */ var _timeout__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("y4F4");
/* harmony import */ var _toQueryStr__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("6pq/");
/* harmony import */ var _type_op__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("Uc3Y");
/* harmony import */ var _type_op__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_type_op__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("jR5A");
/* harmony import */ var _whenInDEV__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("25xb");






























/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const localeDomain = (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "dnak":
/***/ (function(module, exports) {



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

/***/ "eaQF":
/***/ (function(module, exports) {



/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      let routeInfo = await this.getRouteInfo(route, pathname, query, addBasePath(addLocale(resolvedAs, this.locale)), routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

            this._resolveHref(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        } // handle SSG data 404


        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (options.scroll ? {
        x: 0,
        y: 0
      } : null)).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

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

/***/ "f2EC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordsInputing; });
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eaQF");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zKz7");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const WordsInputing = ({
  inputs,
  next,
  speed = 100,
  interval = 3000,
  cursor = true
}) => {
  const {
    0: text,
    1: setText
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  Object(react_use__WEBPACK_IMPORTED_MODULE_2__["useInterval"])(() => {
    if (text.length < inputs.length) {
      setText(text + inputs[text.length]);
    }
  }, text.length < inputs.length ? speed : null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (text.length === inputs.length) {
      if (next) {
        next();
      } else {
        setTimeout(() => setText(''), interval);
      }
    }
  }, [text]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setText('');
  }, [inputs]);
  return __jsx("span", {
    className: "WordsInputing"
  }, text, cursor && __jsx("span", {
    className: "cursor"
  }));
};

/***/ }),

/***/ "fOwK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getNoopServerSideProps */
/* unused harmony export disableAutomaticStaticOptimization */
const getNoopServerSideProps = ctx => ({
  props: {}
}); // export const getServerSideProps = disableAutomaticStaticOptimization

const disableAutomaticStaticOptimization = getNoopServerSideProps;

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

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

/***/ "iAJO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return findNodeByPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return queryRootFirstChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return queryRootFirstChildMemo; });
/* harmony import */ var _saber2pr_memo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ll7R");
/* harmony import */ var _saber2pr_memo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_saber2pr_memo__WEBPACK_IMPORTED_MODULE_0__);

const findNodeByPath = (path, entry) => {
  const stack = entry ? [entry] : [];

  while (stack.length) {
    const node = stack.pop();
    if (node.path === path) return node;
    node.children && stack.push(...node.children);
  }
};
const queryRootFirstChild = entry => {
  if (entry) {
    const children = entry.children;

    for (const ch of children) {
      if (!ch.children) return ch;
    }
  }
};
const queryRootFirstChildMemo = _saber2pr_memo__WEBPACK_IMPORTED_MODULE_0___default()(queryRootFirstChild);

/***/ }),

/***/ "iDQ1":
/***/ (function(module, exports) {

module.exports = require("lru-cache");

/***/ }),

/***/ "iULE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_apiConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("F0z+");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Evpv");
/* harmony import */ var _utils_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("f/3W");
/* harmony import */ var _utils_obj_op__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("uDXG");
/* harmony import */ var _utils_ptbk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("hwuy");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






/**
 * 拦截所有页面的props
 */

function withPage(Component) {
  return props => {
    if (_utils_ptbk__WEBPACK_IMPORTED_MODULE_5__[/* ptbk */ "a"].isPtbk(props)) {
      props = _utils_ptbk__WEBPACK_IMPORTED_MODULE_5__[/* ptbk */ "a"].decode(props);
    }

    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
      if (_api_apiConfig__WEBPACK_IMPORTED_MODULE_1__[/* ApiConfig */ "a"].log) {
        var _props;

        console.log(props);

        if (new RegExp(`\\${_utils_constants__WEBPACK_IMPORTED_MODULE_2__[/* KEYS */ "a"].error}`).test(JSON.stringify((_props = props) !== null && _props !== void 0 ? _props : {}))) {
          const error = Object(_utils_obj_op__WEBPACK_IMPORTED_MODULE_4__[/* deepGet */ "a"])(props, _utils_constants__WEBPACK_IMPORTED_MODULE_2__[/* KEYS */ "a"].error);

          if (error) {
            _utils_message__WEBPACK_IMPORTED_MODULE_3__[/* Messager */ "a"].error(error);
          }
        }
      }
    }, []);
    return __jsx(Component, props);
  };
}

/***/ }),

/***/ "j05c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ MainLayout; });

// EXTERNAL MODULE: ./common/main-layout/style.less
var style = __webpack_require__("GA4s");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd/lib/typography"
var typography_ = __webpack_require__("S4j3");
var typography_default = /*#__PURE__*/__webpack_require__.n(typography_);

// EXTERNAL MODULE: ./common/main-footer/style.less
var main_footer_style = __webpack_require__("dnak");

// CONCATENATED MODULE: ./common/main-footer/index.tsx

var __jsx = external_react_default.a.createElement;


const {
  Paragraph
} = typography_default.a;
const MainFooter = ({}) => {
  return __jsx("div", {
    className: "MainFooter"
  }, __jsx(Paragraph, {
    className: "MainFooter-Content"
  }, `Copyright © 2019-${new Date().getFullYear()} saber2pr`));
};
// EXTERNAL MODULE: external "antd/lib/space"
var space_ = __webpack_require__("kpIo");
var space_default = /*#__PURE__*/__webpack_require__.n(space_);

// EXTERNAL MODULE: external "antd/lib/avatar"
var avatar_ = __webpack_require__("9ubE");
var avatar_default = /*#__PURE__*/__webpack_require__.n(avatar_);

// EXTERNAL MODULE: ./common/main-header/style.less
var main_header_style = __webpack_require__("9OG1");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./components/link/index.tsx
var components_link = __webpack_require__("KQPQ");

// EXTERNAL MODULE: ./components/header-message/style.less
var header_message_style = __webpack_require__("1Lyd");

// CONCATENATED MODULE: ./utils/checkTime.ts
const checkDarkTime = () => {
  const hour = new Date().getHours();
  return hour < 6 || hour > 18;
};
const checkDarknessTime = () => {
  const hour = new Date().getHours();
  return hour < 6 || hour > 24;
};
const getTimeMessage = () => {
  const hour = new Date().getHours();

  if (hour < 6) {
    return '不要熬夜哦~身体健康最重要~';
  }

  if (hour < 12) {
    return '早上好~新的一天也要努力~';
  }

  if (hour < 13) {
    return '中午好~吃过饭了吗~';
  }

  if (hour < 18) {
    return '下午好~';
  }

  if (hour <= 21) {
    return '晚上好~马上进入夜晚了哦...';
  }

  if (hour <= 24) {
    return '已经很晚了...';
  }
};
// CONCATENATED MODULE: ./components/header-message/index.tsx
var header_message_jsx = external_react_default.a.createElement;



const TimeMessageInterval = 6000;
const TimeMessage = ({
  msg
}) => {
  const ref = Object(external_react_["useRef"])();
  Object(external_react_["useEffect"])(() => {
    if (msg) {
      const el = ref.current;

      if (el) {
        el.style.display = 'inline';
      }

      setTimeout(() => {
        if (el) {
          el.style.display = 'none';
        }
      }, TimeMessageInterval);
    }
  }, [msg]);
  return header_message_jsx("span", {
    className: "time-message",
    ref: ref
  }, msg);
};
const HeaderMessage = ({}) => {
  const {
    0: msg,
    1: setMsg
  } = Object(external_react_["useState"])(getTimeMessage());
  return header_message_jsx("div", {
    className: "HeaderMessage"
  }, header_message_jsx(TimeMessage, {
    msg: msg
  }));
};
// CONCATENATED MODULE: ./common/main-header/index.tsx



var main_header_jsx = external_react_default.a.createElement;






const {
  Text
} = typography_default.a;
const NavLinks = [{
  name: '首页',
  href: '/'
}, {
  name: '动态',
  href: '/activity'
}, {
  name: '笔记',
  href: '/blog/永恒の幻想乡'
}, {
  name: '文档',
  href: '/learn'
}, {
  name: '数据',
  href: '/datav'
}, {
  name: '关于',
  href: '/about'
}, {
  name: '链接',
  href: '/links'
}];
const MainHeader = ({}) => {
  const router = Object(router_["useRouter"])();
  const pathname = router.asPath;
  return main_header_jsx("div", {
    className: "MainHeader flex"
  }, main_header_jsx("nav", {
    className: "MainHeader-Nav"
  }, main_header_jsx("ul", {
    className: "NavList flex align-items-center"
  }, NavLinks.map(({
    name,
    href
  }) => {
    const isActive = href === '/' ? pathname === href : href === NavLinks[2].href ? pathname.startsWith('/blog') : href === pathname;

    let content = main_header_jsx(external_react_default.a.Fragment, null, name);

    if (href === '/') {
      content = main_header_jsx(space_default.a, {
        style: {
          height: '100%'
        },
        direction: "horizontal"
      }, main_header_jsx(avatar_default.a, {
        size: 32,
        shape: "circle",
        src: "https://saber2pr.top/MyWeb/resource/image/saber2pr.webp"
      }), main_header_jsx(Text, {
        style: {
          color: '#d5d5d7'
        }
      }, "saber2pr"));
    }

    return main_header_jsx("li", {
      key: href,
      className: external_classnames_default()('NavList-Item', {
        active: href === '/' ? false : isActive
      })
    }, main_header_jsx(components_link["a" /* Link */], {
      className: "NavList-Item-Anchor",
      href: href
    }, content));
  })), main_header_jsx("div", {
    className: "NavList-Block"
  }, main_header_jsx(HeaderMessage, null))), main_header_jsx("div", {
    className: "MainHeader-Right"
  }, main_header_jsx("a", {
    className: "NavList-Item-Anchor",
    href: "https://saber2pr.top/"
  }, "\u8BBF\u95EEPWA\u7248")));
};
// CONCATENATED MODULE: ./common/main-layout/index.tsx
var main_layout_jsx = external_react_default.a.createElement;






const MainLayout = ({
  className,
  rootClassName,
  children,
  title = '标题'
}) => {
  return main_layout_jsx("div", {
    className: external_classnames_default()('MainLayout', rootClassName)
  }, main_layout_jsx(head_default.a, null, main_layout_jsx("title", null, title)), main_layout_jsx("div", {
    className: "MainLayout-Header"
  }, main_layout_jsx(MainHeader, null)), main_layout_jsx("main", {
    className: "MainLayout-Main"
  }, main_layout_jsx("picture", {
    className: "MainLayout-Main-Bg"
  }), main_layout_jsx("div", {
    className: external_classnames_default()('MainContent', className)
  }, children)), main_layout_jsx("div", {
    className: "MainLayout-Footer"
  }, main_layout_jsx(MainFooter, null)));
};

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

/***/ "kpIo":
/***/ (function(module, exports) {

module.exports = require("antd/lib/space");

/***/ }),

/***/ "ll7R":
/***/ (function(module, exports) {

module.exports = require("@saber2pr/memo");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "nyK1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export registerAnalyticsGoogle */
// @ts-nocheck

/**
 * 谷歌分析加载
 * ```ts
 * // 示例
 * registerAnalyticsGoogle('UA-XXX')
 * ```
 */
const registerAnalyticsGoogle = id => {
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    dataLayer.push(arguments);
  }

  gtag('js', new Date());
  gtag('config', id);
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

/***/ "rlPI":
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),

/***/ "s9+w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getData; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cBaE");
/* harmony import */ var _apiUrls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("QSsk");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("eWHO");



const getData = async (type, contentType = 'json') => {
  const res = await _request__WEBPACK_IMPORTED_MODULE_2__[/* requestUri */ "d"].get(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["join"])(_apiUrls__WEBPACK_IMPORTED_MODULE_1__[/* ApiUrls */ "a"].data_, `${type}.${contentType}`));
  return res.data;
};

/***/ }),

/***/ "sF6c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export splitArray */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getArray; });
/* unused harmony export dedup */
/**
 * 将数组等分割
 */
const splitArray = (array, interval = 4) => {
  const result = [];
  let temp = [];

  for (const item of array) {
    temp.push(item);

    if (temp.length === interval) {
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length) {
    result.push(temp);
  }

  return result;
};
const getArray = array => Array.isArray(array) ? array : [];
/**
 * 对象数组去重
 */

const dedup = (array, compare) => array.reduce((acc, item) => acc.find(i => compare(i, item)) ? acc : acc.concat(item), []);

/***/ }),

/***/ "uDXG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deepGet; });
const deepGet = (obj, key) => {
  if (key in obj) {
    return obj[key];
  } else {
    for (const k in obj) {
      if (Object.prototype.toString.call(obj[k]) === '[object Object]') {
        const result = deepGet(obj[k], key);

        if (result) {
          return result;
        }
      }
    }
  }
};

/***/ }),

/***/ "v0fQ":
/***/ (function(module, exports) {

module.exports = require("json-bigint");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

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

/***/ "y4F4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return timeout; });
const timeout = (delay = 1000) => new Promise(resolve => setTimeout(resolve, delay));

/***/ }),

/***/ "y8kM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export parseCookie */
/* unused harmony export stringifyCookie */
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rlPI");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);

const parseCookie = cookie => {
  if (!cookie) return null;
  return cookie__WEBPACK_IMPORTED_MODULE_0___default.a.parse(cookie);
};
const stringifyCookie = (name, value, options) => {
  cookie__WEBPACK_IMPORTED_MODULE_0___default.a.serialize(name, value, options);
};

/***/ }),

/***/ "zKz7":
/***/ (function(module, exports) {

module.exports = require("react-use");

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