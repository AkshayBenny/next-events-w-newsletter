"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/events/[eventId]",{

/***/ "./components/comment.js":
/*!*******************************!*\
  !*** ./components/comment.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Comment = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), name = ref[0], setName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), email = ref1[0], setEmail = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), comment = ref2[0], setComment = ref2[1];\n    var submitHandler = function(e) {\n        e.preventDefault();\n        var reqBody = fetch('/api/comment', {\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/json'\n            }\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"space-y-4\",\n            onSubmit: submitHandler,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-6 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            onChange: function(e) {\n                                return setName(e.target.value);\n                            },\n                            type: \"text\",\n                            placeholder: \"Name\",\n                            className: \"border-gray-700 border-2 rounded px-4 py-2\"\n                        }, void 0, false, {\n                            fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/comment.js\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            onChange: function(e) {\n                                return setEmail(e.target.value);\n                            },\n                            type: \"text\",\n                            placeholder: \"Email\",\n                            className: \"border-gray-700 border-2 rounded px-4 py-2\"\n                        }, void 0, false, {\n                            fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/comment.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/comment.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    className: \"border-gray-700 w-full border-2 rounded px-4 py-2\",\n                    name: \"comment\",\n                    id: \"comment\",\n                    placeholder: \"Comment\"\n                }, void 0, false, {\n                    fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/comment.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: \"Add comment\"\n                }, void 0, false, {\n                    fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/comment.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/comment.js\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/comment.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this));\n};\n_s(Comment, \"H0oogsi12FpBP5BGRBJJWCRHc9o=\");\n_c = Comment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comment);\nvar _c;\n$RefreshReg$(_c, \"Comment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1lbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXVDOzs7QUFFdkMsR0FBSyxDQUFDRSxPQUFPLEdBQUcsUUFDaEIsR0FEc0IsQ0FBQzs7SUFDckIsR0FBSyxDQUFtQkQsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBNUJFLElBQUksR0FBYUYsR0FBWSxLQUF2QkcsT0FBTyxHQUFJSCxHQUFZO0lBQ3BDLEdBQUssQ0FBcUJBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQTlCSSxLQUFLLEdBQWNKLElBQVksS0FBeEJLLFFBQVEsR0FBSUwsSUFBWTtJQUN0QyxHQUFLLENBQXlCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUFsQ00sT0FBTyxHQUFnQk4sSUFBWSxLQUExQk8sVUFBVSxHQUFJUCxJQUFZO0lBRTFDLEdBQUssQ0FBQ1EsYUFBYSxHQUFHLFFBQVEsQ0FBUEMsQ0FBQyxFQUFLLENBQUM7UUFDNUJBLENBQUMsQ0FBQ0MsY0FBYztRQUNoQixHQUFLLENBQUNDLE9BQU8sR0FBR0MsS0FBSyxDQUFDLENBQWMsZUFBRSxDQUFDO1lBQ3JDQyxNQUFNLEVBQUUsQ0FBTTtZQUVkQyxPQUFPLEVBQUUsQ0FBQztnQkFDUixDQUFjLGVBQUUsQ0FBa0I7WUFDcEMsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBQ0QsTUFBTSw2RUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBa0M7OEZBQzlDQyxDQUFJO1lBQUNELFNBQVMsRUFBQyxDQUFXO1lBQUNFLFFBQVEsRUFBRVYsYUFBYTs7NEZBQ2hETyxDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBYTs7b0dBQ3pCRyxDQUFLOzRCQUNOQyxRQUFRLEVBQUUsUUFBUSxDQUFQWCxDQUFDO2dDQUFHTixNQUFNLENBQU5BLE9BQU8sQ0FBQ00sQ0FBQyxDQUFDWSxNQUFNLENBQUNDLEtBQUs7OzRCQUNuQ0MsSUFBSSxFQUFDLENBQU07NEJBQ1hDLFdBQVcsRUFBQyxDQUFNOzRCQUNsQlIsU0FBUyxFQUFDLENBQTRDOzs7Ozs7b0dBRXZERyxDQUFLOzRCQUFFQyxRQUFRLEVBQUUsUUFBUSxDQUFQWCxDQUFDO2dDQUFHSixNQUFNLENBQU5BLFFBQVEsQ0FBQ0ksQ0FBQyxDQUFDWSxNQUFNLENBQUNDLEtBQUs7OzRCQUM1Q0MsSUFBSSxFQUFDLENBQU07NEJBQ1hDLFdBQVcsRUFBQyxDQUFPOzRCQUNuQlIsU0FBUyxFQUFDLENBQTRDOzs7Ozs7Ozs7Ozs7NEZBR3pEUyxDQUFRO29CQUVQVCxTQUFTLEVBQUMsQ0FBbUQ7b0JBQzdEZCxJQUFJLEVBQUMsQ0FBUztvQkFDZHdCLEVBQUUsRUFBQyxDQUFTO29CQUNaRixXQUFXLEVBQUMsQ0FBUzs7Ozs7OzRGQUV0QkcsQ0FBTTs4QkFBQyxDQUFXOzs7Ozs7Ozs7Ozs7Ozs7OztBQUkzQixDQUFDO0dBMUNLMUIsT0FBTztLQUFQQSxPQUFPO0FBNENiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tZW50LmpzPzY1MGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBDb21tZW50ID0gKCkgPT4ge1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbY29tbWVudCwgc2V0Q29tbWVudF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3Qgc3VibWl0SGFuZGxlciA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHJlcUJvZHkgPSBmZXRjaCgnL2FwaS9jb21tZW50Jywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG5cbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJz5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT0nc3BhY2UteS00JyBvblN1Ym1pdD17c3VibWl0SGFuZGxlcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGdhcC02ICc+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKT0+c2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J05hbWUnXG4gICAgICAgICAgICBjbGFzc05hbWU9J2JvcmRlci1ncmF5LTcwMCBib3JkZXItMiByb3VuZGVkIHB4LTQgcHktMidcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dCAgb25DaGFuZ2U9eyhlKT0+c2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbCdcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nYm9yZGVyLWdyYXktNzAwIGJvcmRlci0yIHJvdW5kZWQgcHgtNCBweS0yJ1xuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgXG4gICAgICAgICAgY2xhc3NOYW1lPSdib3JkZXItZ3JheS03MDAgdy1mdWxsIGJvcmRlci0yIHJvdW5kZWQgcHgtNCBweS0yJ1xuICAgICAgICAgIG5hbWU9J2NvbW1lbnQnXG4gICAgICAgICAgaWQ9J2NvbW1lbnQnXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J0NvbW1lbnQnXG4gICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICA8YnV0dG9uPkFkZCBjb21tZW50PC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDb21tZW50IiwibmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwiY29tbWVudCIsInNldENvbW1lbnQiLCJzdWJtaXRIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVxQm9keSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0Iiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsInRleHRhcmVhIiwiaWQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/comment.js\n");

/***/ })

});