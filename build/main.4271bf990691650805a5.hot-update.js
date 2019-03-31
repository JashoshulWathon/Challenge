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
/* harmony import */ var _components_TodoForm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/TodoForm.js */ "./src/components/TodoForm.js");


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
				lineNumber: 9
			}
		},
		todo.text
	);
};

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
		lineNumber: 32
	}
});

function App() {
	var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([{ text: "Learn about React" }, { text: "Meet friend for lunch" }, { text: "Build really cool todo app" }]),
	    _useState2 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
	    todos = _useState2[0],
	    setTodos = _useState2[1];

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
				lineNumber: 51
			}
		},
		react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
			"div",
			{ className: "todo-list", __source: {
					fileName: _jsxFileName,
					lineNumber: 52
				}
			},
			todos.map(function (todo, index) {
				return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Todo, {
					key: index
					// index={index}
					, todo: todo,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 54
					}
				});
			}),
			react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_TodoForm_js__WEBPACK_IMPORTED_MODULE_4__["default"], { addTodo: addTodo, __source: {
					fileName: _jsxFileName,
					lineNumber: 61
				}
			})
		)
	);
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

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
!(function webpackMissingModule() { var e = new Error("Cannot find module './App.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

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
//# sourceMappingURL=main.4271bf990691650805a5.hot-update.js.map