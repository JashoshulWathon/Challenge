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


// import TodoForm from "./components/TodoForm.js";

// const Todo = ({ todo }) => <div className="todo">{todo.text}</div>;	

function Todo(_ref) {
		var todo = _ref.todo,
		    index = _ref.index,
		    completeTodo = _ref.completeTodo;

		return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
				"div",
				{
						className: "todo",
						style: { textDecoration: todo.isCompleted ? "line-through" : "" },
						__source: {
								fileName: _jsxFileName,
								lineNumber: 13
						}
				},
				todo.text,
				react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
						"div",
						{
								__source: {
										fileName: _jsxFileName,
										lineNumber: 19
								}
						},
						react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
								"button",
								{ onClick: function onClick() {
												return completeTodo(index);
										}, __source: {
												fileName: _jsxFileName,
												lineNumber: 20
										}
								},
								"Complete"
						)
				)
		);
}

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
								lineNumber: 37
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
								lineNumber: 38
						}
				})
		);
};
// <TodoForm />


function App() {
		var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([{
				text: "Learn about React",
				isCompleted: false
		}, {
				text: "Meet friend for lunch",
				isCompleted: false
		}, {
				text: "Build really cool todo app",
				isCompleted: false
		}]),
		    _useState4 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
		    todos = _useState4[0],
		    setTodos = _useState4[1];

		var addTodo = function addTodo(text) {
				var newTodos = [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(todos), [{ text: text }]);
				setTodos(newTodos);
				// console.log(text);
				// console.log(...todos);
		};

		var completeTodo = function completeTodo(index) {
				var newTodos = [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(todos));
				newTodos[index].isCompleted = true;
				setTodos(newTodos);
		};

		return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
				"div",
				{ className: "app", __source: {
								fileName: _jsxFileName,
								lineNumber: 82
						}
				},
				react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
						"div",
						{ className: "todo-list", __source: {
										fileName: _jsxFileName,
										lineNumber: 83
								}
						},
						todos.map(function (todo, index) {
								return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Todo, {
										key: index,
										index: index,
										todo: todo,
										completeTodo: completeTodo,
										__source: {
												fileName: _jsxFileName,
												lineNumber: 85
										}
								});
						}),
						react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TodoForm, { addTodo: addTodo, __source: {
										fileName: _jsxFileName,
										lineNumber: 93
								}
						})
				)
		);
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

};
//# sourceMappingURL=main.7cdb08d80db9279dc025.hot-update.js.map