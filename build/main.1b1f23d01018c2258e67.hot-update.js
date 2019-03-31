exports.id = "main";
exports.modules = {

/***/ "./src/components/TodoForm.js":
/*!************************************!*\
  !*** ./src/components/TodoForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "babel-runtime/helpers/slicedToArray");
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/jashoshulwathon/my-app/src/components/TodoForm.js";




var TodoForm = function TodoForm(_ref) {
	var addTodo = _ref.addTodo;

	var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
	    _useState2 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
	    value = _useState2[0],
	    setValue = _useState2[1];

	var handleSubmit = function handleSubmit(e) {
		e.preventDefault();
		if (!value) return;
		addTodo(value);
		setValue("");
	};

	return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
		"form",
		{ onSubmit: handleSubmit, __source: {
				fileName: _jsxFileName,
				lineNumber: 16
			}
		},
		react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
			type: "text",
			className: "input",
			value: value,
			onChange: function onChange(e) {
				return setValue(e.target.value);
			},
			__source: {
				fileName: _jsxFileName,
				lineNumber: 17
			}
		})
	);
};

/* harmony default export */ __webpack_exports__["default"] = (TodoForm);

/***/ })

};
//# sourceMappingURL=main.1b1f23d01018c2258e67.hot-update.js.map