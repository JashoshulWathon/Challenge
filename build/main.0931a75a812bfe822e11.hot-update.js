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
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "babel-runtime/helpers/slicedToArray");
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/jashoshulwathon/my-app/src/App.js";
// import React from 'react';
// import Route from 'react-router-dom/Route';
// import Switch from 'react-router-dom/Switch';
// import Home from './Home';



function App() {
	var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{ text: "Learn about React" }, { text: "Meet friend for lunch" }, { text: "Build really cool todo app" }]),
	    _useState2 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
	    todos = _useState2[0],
	    setTodos = _useState2[1];

	var Todo = function Todo(_ref) {
		var todo = _ref.todo;
		return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
			"div",
			{ className: "todo", __source: {
					fileName: _jsxFileName,
					lineNumber: 16
				}
			},
			todo.text
		);
	};

	return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
		"div",
		{ className: "app", __source: {
				fileName: _jsxFileName,
				lineNumber: 19
			}
		},
		console.log(todos),
		";"
	);
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

};
//# sourceMappingURL=main.0931a75a812bfe822e11.hot-update.js.map