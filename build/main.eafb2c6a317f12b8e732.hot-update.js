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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "/Users/jashoshulwathon/my-app/src/App.js";
// import React from 'react';
// import Route from 'react-router-dom/Route';
// import Switch from 'react-router-dom/Switch';
// import Home from './Home';



var Todo = function Todo(_ref) {
	var todo = _ref.todo;
	return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
		"div",
		{ className: "todo", __source: {
				fileName: _jsxFileName,
				lineNumber: 8
			}
		},
		todo.text
	);
};

function TodoForm(_ref2) {
	var addTodo = _ref2.addTodo;

	var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
	    _useState2 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
	    value = _useState2[0],
	    setValue = _useState2[1];

	var handleSubmit = function handleSubmit(e) {
		e.preventDefault();
		if (!value) return;
		addTodo(value);
		setValue("");
	};

	return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
		"form",
		{ onSubmit: handleSubmit, __source: {
				fileName: _jsxFileName,
				lineNumber: 21
			}
		},
		react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
			type: "text",
			className: "input",
			value: value,
			onChange: function onChange(e) {
				return setValue(e.target.value);
			},
			__source: {
				fileName: _jsxFileName,
				lineNumber: 22
			}
		})
	);
};

function App() {
	var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([{ text: "Learn about React" }, { text: "Meet friend for lunch" }, { text: "Build really cool todo app" }]),
	    _useState4 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
	    todos = _useState4[0],
	    setTodos = _useState4[1];

	var addTodo = function addTodo(text) {
		var _console;

		var newTodos = [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(todos), [{ text: text }]);
		setTodos(newTodos);
		console.log(text);
		(_console = console).log.apply(_console, babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(todos));
	};

	return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
		"div",
		{ className: "app", __source: {
				fileName: _jsxFileName,
				lineNumber: 49
			}
		},
		react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
			"div",
			{ className: "todo-list", __source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			},
			todos.map(function (todo, index) {
				return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Todo, {
					key: index
					// index={index}
					, todo: todo,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 52
					}
				});
			}),
			react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TodoForm, { addTodo: addTodo, __source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			})
		)
	);
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

};
//# sourceMappingURL=main.eafb2c6a317f12b8e732.hot-update.js.map