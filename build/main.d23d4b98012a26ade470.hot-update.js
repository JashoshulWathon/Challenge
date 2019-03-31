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
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "babel-runtime/helpers/slicedToArray");
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Home.css */ "./src/Home.css");
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Home_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = '/Users/jashoshulwathon/my-app/src/Home.js';

// import logo from './react.svg';



var post = function post(_ref) {
  var list = _ref.list;

  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    },
    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
      'h4',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      },
      'title'
    ),
    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
      'p',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      },
      'body'
    ),
    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
      'button',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      },
      'Edit'
    )
  );
};

function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({ posts: [] }),
      _useState2 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      post = _useState2[0],
      setPost = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var fetchData = function () {
      var _ref2 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var result;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                result = axios__WEBPACK_IMPORTED_MODULE_5___default.a.get('https://jsonplaceholder.typicode.com/posts');

                if (!ignore) setPost(result.data);

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function fetchData() {
        return _ref2.apply(this, arguments);
      };
    }();

    var ignore = false;

    fetchData();
    return function () {
      ignore = true;
    };
  });

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      }
    },
    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement('post', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      }
    })
  );
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "babel-runtime/helpers/objectDestructuringEmpty":
false

};
//# sourceMappingURL=main.d23d4b98012a26ade470.hot-update.js.map