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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = '/Users/jashoshulwathon/my-app/src/App.js';



var App = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(App, _Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_ref = App.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      name: [],
      isEdit: false
    }, _this.editInput = function (user, e) {
      // console.log(user);
      // console.log(e.target.id);
      // console.log(this.state);
      var newUser = _this.state.name.find(function (nme) {
        console.log(nme.id);
        if (nme.id === e.target.id) {
          // this.setState({ isEdit: true, name: newUser.name });
          // return nme;
        }
      });
    }, _this.saveInput = function () {
      var name = _this.state.name;
      // console.log("name", ...name)

      _this.setState({ name: name, isEdit: false });
    }, _this.handleChange = function (e) {
      // console.log(e.target.value);
      _this.setState({ name: e.target.value });
    }, _this.handlefocus = function (event) {
      event.target.select();
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_6___default.a.get('https://jsonplaceholder.typicode.com/users').then(function (res) {
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

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        },
        name.map(function (user) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            'div',
            { key: user.id, __source: {
                fileName: _jsxFileName,
                lineNumber: 56
              }
            },
            !_this3.state.isEdit ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              'h1',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 58
                }
              },
              user.name
            ) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('input', { onFocus: _this3.handlefocus, autoFocus: true, onChange: function onChange(e) {
                return _this3.handleChange(e);
              }, type: 'text', value: user.name, __source: {
                fileName: _jsxFileName,
                lineNumber: 59
              }
            }),
            !_this3.state.isEdit ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              'button',
              { onClick: function onClick(e) {
                  return _this3.editInput(user, e);
                }, id: user.id, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 62
                }
              },
              'Edit'
            ) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              'button',
              { onClick: function onClick() {
                  return _this3.saveInput();
                }, id: user.id, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 63
                }
              },
              'Save'
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 65
              }
            }),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 66
              }
            })
          );
        })
      );
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

};
//# sourceMappingURL=main.76232139849573fcd9b2.hot-update.js.map