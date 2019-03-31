exports.id = "main";
exports.modules = {

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "babel-runtime/helpers/toConsumableArray");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "babel-runtime/helpers/slicedToArray");
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home */ "./src/Home.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/Users/jashoshulwathon/my-app/src/App.js";
// import React from 'react';
// import Route from 'react-router-dom/Route';
// import Switch from 'react-router-dom/Switch';





var Todo = function Todo(_ref) {
  var list = _ref.list,
      index = _ref.index,
      complete = _ref.complete,
      remove = _ref.remove;

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
    "div",
    { className: "todo",
      style: { textDecoration: list.isCompleted ? "line-through" : "" }, __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    },
    list.text,
    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
      "div",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      },
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
        "button",
        { onClick: function onClick() {
            return complete(index);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        },
        "Done"
      ),
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
        "button",
        { onClick: function onClick() {
            return remove(index);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        },
        "x"
      )
    )
  );
};

function TodoForm(_ref2) {
  var fff = _ref2.fff;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      _useState2 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    if (!value) return;
    fff(value);
    setValue("");
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
    "form",
    { onSubmit: handleSubmit, __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      }
    },
    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
      type: "text",
      className: "input",
      value: value,
      onChange: function onChange(e) {
        return setValue(e.target.value);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      }
    })
  );
}

function App() {
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([{ text: "Learn about React", isCompleted: false }, { text: "Meet friend for lunch", isCompleted: false }, { text: "Build really cool todo app", isCompleted: false }]),
      _useState4 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      todos = _useState4[0],
      setTodos = _useState4[1];

  var addTodo = function addTodo(text) {
    var _console, _console2;

    var newTodos = [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(todos), [{ text: text }]);
    setTodos(newTodos);
    (_console = console).log.apply(_console, babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(todos).concat([{ text: text }]));
    (_console2 = console).log.apply(_console2, babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(todos).concat([{ text: text }]));
  };

  var completeTodo = function completeTodo(index) {
    var newTodos = [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(todos));
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  var removeTodo = function removeTodo(index) {
    var newTodos = [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(todos));
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
    "div",
    { className: "app", __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      }
    },
    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
      "div",
      { className: "todo-list", __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      },
      todos.map(function (r, index) {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Todo, {
          key: index,
          index: index,
          list: r,
          complete: completeTodo,
          remove: removeTodo,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        });
      }),
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(TodoForm, { fff: addTodo, __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      })
    ),
    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Home__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      }
    })
  );
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Home.css":
/*!**********************!*\
  !*** ./src/Home.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Home {\n  text-align: center;\n}\n\n.Home-logo {\n  animation: Home-logo-spin infinite 20s linear;\n  height: 80px;\n}\n\n.Home-header {\n  background-color: #222;\n  height: 150px;\n  padding: 20px;\n  color: white;\n}\n\n.Home-intro {\n  font-size: large;\n}\n\n.Home-resources {\n  list-style: none;\n}\n\n.Home-resources > li {\n  display: inline-block;\n  padding: 1rem;\n}\n\n@keyframes Home-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _react_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./react.svg */ "./src/react.svg");
/* harmony import */ var _react_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_react_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Home.css */ "./src/Home.css");
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Home_css__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = '/Users/jashoshulwathon/my-app/src/Home.js';




var Home = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Home, _React$Component);

  function Home() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Home);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (Home.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(Home)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Home, [{
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        'div',
        { className: 'Home', __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'div',
          { className: 'Home-header', __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            }
          },
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('img', { src: _react_svg__WEBPACK_IMPORTED_MODULE_6___default.a, className: 'Home-logo', alt: 'logo', __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            'h2',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 11
              }
            },
            'Welcome to Razzle'
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'p',
          { className: 'Home-intro', __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            }
          },
          'To get started, edit ',
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            'code',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 14
              }
            },
            'src/App.js'
          ),
          ' or',
          ' ',
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            'code',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              }
            },
            'src/Home.js'
          ),
          ' and save to reload.'
        ),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'ul',
          { className: 'Home-resources', __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          },
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            'li',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 18
              }
            },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              'a',
              { href: 'https://github.com/jaredpalmer/razzle', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 19
                }
              },
              'Docs'
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            'li',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              }
            },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              'a',
              { href: 'https://github.com/jaredpalmer/razzle/issues', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22
                }
              },
              'Issues'
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            'li',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              }
            },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              'a',
              { href: 'https://palmer.chat', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 25
                }
              },
              'Community Slack'
            )
          )
        )
      );
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/react.svg":
/*!***********************!*\
  !*** ./src/react.svg ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/react.9a28da9f.svg";

/***/ }),

/***/ "babel-runtime/core-js/object/get-prototype-of":
/*!****************************************************************!*\
  !*** external "babel-runtime/core-js/object/get-prototype-of" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),

/***/ "babel-runtime/helpers/asyncToGenerator":
false,

/***/ "babel-runtime/helpers/classCallCheck":
/*!*******************************************************!*\
  !*** external "babel-runtime/helpers/classCallCheck" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),

/***/ "babel-runtime/helpers/createClass":
/*!****************************************************!*\
  !*** external "babel-runtime/helpers/createClass" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),

/***/ "babel-runtime/helpers/inherits":
/*!*************************************************!*\
  !*** external "babel-runtime/helpers/inherits" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),

/***/ "babel-runtime/helpers/possibleConstructorReturn":
/*!******************************************************************!*\
  !*** external "babel-runtime/helpers/possibleConstructorReturn" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "babel-runtime/regenerator":
false

};
//# sourceMappingURL=main.1d728d30a165780bf6d3.hot-update.js.map