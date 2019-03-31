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
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "babel-runtime/helpers/defineProperty");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);






var _jsxFileName = '/Users/jashoshulwathon/my-app/src/App.js';



var App = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(App, _Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (_ref = App.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      name: [],
      isEdit: false,
      clickName: null
    }, _this.editInput = function (clickId) {
      // console.log(clickId);
      _this.setState({ isEdit: !_this.state.isEdit, clickName: clickId });
    }, _this.saveInput = function () {
      var name = _this.state.name;
      // console.log("name", ...name)

      _this.setState({ name: name, isEdit: false });
    }, _this.handleChange = function (idVal, e) {
      _this.setState(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, e.target.name, e.target.value));
      console.log(e.target.value);
    }, _this.handlefocus = function (event) {
      event.target.select();
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_7___default.a.get('https://jsonplaceholder.typicode.com/users').then(function (res) {
        var name = res.data;
        // console.log(name);
        _this2.setState({ name: name });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var name = this.state.name;
      // console.log(name);

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        },
        name.map(function (user) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
            'div',
            { key: user.id, __source: {
                fileName: _jsxFileName,
                lineNumber: 47
              }
            },
            _this3.state.isEdit && _this3.state.clickName === user.id ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement('input', { name: user.id, style: { display: 'inline', marginRight: 10 },
              onFocus: _this3.handlefocus, autoFocus: true,
              onChange: function onChange(e) {
                return _this3.handleChange(user.id, e);
              },
              type: 'text', value: user.name,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 49
              }
            }) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
              'h1',
              { style: { display: 'inline', marginRight: 10 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 54
                }
              },
              user.name
            ),
            _this3.state.isEdit && _this3.state.clickName === user.id ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
              'button',
              { onClick: function onClick() {
                  return _this3.saveInput();
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 57
                }
              },
              'Save'
            ) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
              'button',
              { onClick: function onClick() {
                  return _this3.editInput(user.id);
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 58
                }
              },
              'Edit'
            ),
            react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement('br', {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 60
              }
            }),
            react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement('br', {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 61
              }
            })
          );
        })
      );
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "babel-runtime/helpers/defineProperty":
/*!*******************************************************!*\
  !*** external "babel-runtime/helpers/defineProperty" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/defineProperty");

/***/ })

};
//# sourceMappingURL=main.64036a0ded43b5967a89.hot-update.js.map