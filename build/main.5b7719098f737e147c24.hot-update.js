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
!(function webpackMissingModule() { var e = new Error("Cannot find module '../../App.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

var _jsxFileName = "/Users/jashoshulwathon/my-app/src/components/TodoForm.js";
// import React from 'react';
// import Route from 'react-router-dom/Route';
// import Switch from 'react-router-dom/Switch';
// import Home from './Home';



function TodoForm(_ref) {
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
				lineNumber: 19
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
				lineNumber: 20
			}
		})
	);
}

/* harmony default export */ __webpack_exports__["default"] = (TodoForm);

/***/ })

};
//# sourceMappingURL=main.5b7719098f737e147c24.hot-update.js.map