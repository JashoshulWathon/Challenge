exports.id = "main";
exports.modules = {

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "babel-runtime/helpers/slicedToArray");
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.css */ "./src/Home.css");
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Home_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = '/Users/jashoshulwathon/my-app/src/Home.js';

// import logo from './react.svg';



var post = function post() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState2 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      post = _useState2[0],
      setPost = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('https://jsonplaceholder.typicode.com/posts').then(function (res) {
      setPost(res.data);
      console.log(post);
    });
  });
};

function Home() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    },
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('post', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    })
  );
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "babel-runtime/core-js/object/get-prototype-of":
false,

/***/ "babel-runtime/helpers/classCallCheck":
false,

/***/ "babel-runtime/helpers/createClass":
false,

/***/ "babel-runtime/helpers/inherits":
false,

/***/ "babel-runtime/helpers/possibleConstructorReturn":
false

};
//# sourceMappingURL=main.595e18e18f432cc0a597.hot-update.js.map