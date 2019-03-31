exports.id = "main";
exports.modules = {

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n}\n\n.app {\n  background: #209cee;\n  padding: 30px;\n  height: 100vh;\n}\n\n.todo-list {\n  background: #e8e8e8;\n  border-radius: 4px;\n  padding: 5px;\n  max-width: 400px;\n}\n\n.todo {\n  background: #fff;\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);\n  padding: 3px 10px;\n  font-size: 12px;\n  margin-bottom: 6px;\n  border-radius: 3px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}", ""]);

// exports


/***/ }),

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

/***/ }),

/***/ "babel-runtime/helpers/slicedToArray":
/*!******************************************************!*\
  !*** external "babel-runtime/helpers/slicedToArray" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),

/***/ "babel-runtime/helpers/toConsumableArray":
/*!**********************************************************!*\
  !*** external "babel-runtime/helpers/toConsumableArray" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ })

};
//# sourceMappingURL=main.74fa1f20f99279393c3a.hot-update.js.map