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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\nvar Comment = function() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Name\",\n                        className: \"border-gray-700 border-2 rounded px-2 \"\n                    }, void 0, false, {\n                        fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/comment.js\",\n                        lineNumber: 7,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Email\",\n                        className: \"border-gray-700 border-2 rounded\"\n                    }, void 0, false, {\n                        fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/comment.js\",\n                        lineNumber: 8,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/comment.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                className: \"border-gray-700 border-2 rounded\",\n                name: \"comment\",\n                id: \"comment\",\n                cols: \"30\",\n                rows: \"10\",\n                placeholder: \"Comment\"\n            }, void 0, false, {\n                fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/comment.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/comment.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, _this));\n};\n_c = Comment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comment);\nvar _c;\n$RefreshReg$(_c, \"Comment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1lbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlCOztBQUV6QixHQUFLLENBQUNDLE9BQU8sR0FBRyxRQUNoQixHQURzQixDQUFDO0lBQ3JCLE1BQU0sNkVBQ0hDLENBQUk7O3dGQUNGQyxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBWTs7Z0dBQ3hCQyxDQUFLO3dCQUFDQyxJQUFJLEVBQUMsQ0FBTTt3QkFBQ0MsV0FBVyxFQUFDLENBQU07d0JBQUNILFNBQVMsRUFBQyxDQUF3Qzs7Ozs7O2dHQUN2RkMsQ0FBSzt3QkFBQ0MsSUFBSSxFQUFDLENBQU07d0JBQUNDLFdBQVcsRUFBQyxDQUFPO3dCQUFDSCxTQUFTLEVBQUMsQ0FBa0M7Ozs7Ozs7Ozs7Ozt3RkFFcEZJLENBQVE7Z0JBQ1BKLFNBQVMsRUFBQyxDQUFrQztnQkFDNUNLLElBQUksRUFBQyxDQUFTO2dCQUNkQyxFQUFFLEVBQUMsQ0FBUztnQkFDWkMsSUFBSSxFQUFDLENBQUk7Z0JBQ1RDLElBQUksRUFBQyxDQUFJO2dCQUNUTCxXQUFXLEVBQUMsQ0FBUzs7Ozs7Ozs7Ozs7O0FBSTdCLENBQUM7S0FqQktOLE9BQU87QUFtQmIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbW1lbnQuanM/NjUwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBDb21tZW50ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxmb3JtPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZ2FwLTYnPlxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J05hbWUnIGNsYXNzTmFtZT0nYm9yZGVyLWdyYXktNzAwIGJvcmRlci0yIHJvdW5kZWQgcHgtMiAnICAvPlxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J0VtYWlsJyBjbGFzc05hbWU9J2JvcmRlci1ncmF5LTcwMCBib3JkZXItMiByb3VuZGVkJyAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8dGV4dGFyZWFcbiAgICAgICAgY2xhc3NOYW1lPSdib3JkZXItZ3JheS03MDAgYm9yZGVyLTIgcm91bmRlZCdcbiAgICAgICAgbmFtZT0nY29tbWVudCdcbiAgICAgICAgaWQ9J2NvbW1lbnQnXG4gICAgICAgIGNvbHM9JzMwJ1xuICAgICAgICByb3dzPScxMCdcbiAgICAgICAgcGxhY2Vob2xkZXI9J0NvbW1lbnQnXG4gICAgICA+PC90ZXh0YXJlYT5cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tbWVudCIsImZvcm0iLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInRleHRhcmVhIiwibmFtZSIsImlkIiwiY29scyIsInJvd3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/comment.js\n");

/***/ })

});