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
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "babel-runtime/helpers/toConsumableArray");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_TodoForm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/TodoForm.js */ "./src/components/TodoForm.js");


var _jsxFileName = "/Users/jashoshulwathon/my-app/src/App.js";
// import React from 'react';
// import Route from 'react-router-dom/Route';
// import Switch from 'react-router-dom/Switch';
// import Home from './Home';




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

/*function TodoForm({ addTodo }) {
	const [value, setValue] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		if(!value) return;
		addTodo(value);
		setValue("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
			type="text"
			className="input"
			value={value}
			onChange={e => setValue(e.target.value)}
			/>
		</form>
	);	
};*/
react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_TodoForm_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
		__source: {
				fileName: _jsxFileName,
				lineNumber: 47
		}
});

var completeTodo = function completeTodo(index) {
		var newTodos = [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(todos));
		newTodos[index].isCompleted = true;
		setTodos(newTodos);
};

function App() {
		var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([{
				text: "Learn about React",
				isCompleted: false
		}, {
				text: "Meet friend for lunch",
				isCompleted: false
		}, {
				text: "Build really cool todo app",
				isCompleted: false
		}]),
		    _useState2 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
		    todos = _useState2[0],
		    setTodos = _useState2[1];

		var addTodo = function addTodo(text) {
				var _console;

				var newTodos = [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(todos), [{ text: text }]);
				setTodos(newTodos);
				console.log(text);
				(_console = console).log.apply(_console, babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(todos));
		};

		return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
				"div",
				{ className: "app", __source: {
								fileName: _jsxFileName,
								lineNumber: 81
						}
				},
				react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
						"div",
						{ className: "todo-list", __source: {
										fileName: _jsxFileName,
										lineNumber: 82
								}
						},
						todos.map(function (todo, index) {
								return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Todo, {
										key: index
										// index={index}
										, todo: todo,
										completeTodo: completeTodo,
										__source: {
												fileName: _jsxFileName,
												lineNumber: 84
										}
								});
						}),
						react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_TodoForm_js__WEBPACK_IMPORTED_MODULE_4__["default"], { addTodo: addTodo, __source: {
										fileName: _jsxFileName,
										lineNumber: 92
								}
						})
				)
		);
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

};
//# sourceMappingURL=main.077ca318c1ea33c78a3c.hot-update.js.map