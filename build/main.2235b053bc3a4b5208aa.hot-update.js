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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/Users/jashoshulwathon/my-app/src/App.js";





var Todo = function Todo(_ref) {
  var list = _ref.list,
      index = _ref.index,
      complete = _ref.complete,
      remove = _ref.remove;

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
    "div",
    { className: "todo",
      style: { textDecoration: list.isCompleted ? "line-through" : "" }, __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    },
    list.title,
    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      "div",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      },
      react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
        "button",
        { onClick: function onClick() {
            return complete(index);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        },
        "Edit"
      ),
      react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
        "button",
        { onClick: function onClick() {
            return remove(index);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        "x"
      )
    )
  );
};

function TodoForm(_ref2) {
  var fff = _ref2.fff;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      _useState2 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    if (!value) return;
    fff(value);
    setValue("");
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
    "form",
    { onSubmit: handleSubmit, __source: {
        fileName: _jsxFileName,
        lineNumber: 31
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
        lineNumber: 32
      }
    })
  );
}

function App() {
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([{}]),
      _useState4 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      todos = _useState4[0],
      setTodos = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("https://jsonplaceholder.typicode.com/posts").then(function (res) {
      console.log(res.data);
    });
  }, []);

  var addTodo = function addTodo(text) {
    var _console, _console2;

    var newTodos = [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(todos), [{ text: text }]);
    setTodos(newTodos);
    (_console = console).log.apply(_console, babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(todos).concat([{ text: text }]));
    (_console2 = console).log.apply(_console2, babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(todos).concat([{ text: text }]));
  };

  var completeTodo = function completeTodo(index) {
    var newTodos = [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(todos));
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  var removeTodo = function removeTodo(index) {
    var newTodos = [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(todos));
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
    "div",
    { className: "app", __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      }
    },
    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      "div",
      { className: "todo-list", __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      },
      todos.map(function (r, index) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Todo, {
          key: index,
          index: index,
          list: r,
          complete: completeTodo,
          remove: removeTodo,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        });
      }),
      react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TodoForm, { fff: addTodo, __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      })
    )
  );
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

};
//# sourceMappingURL=main.2235b053bc3a4b5208aa.hot-update.js.map