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

/***/ "./components/getcomment.js":
/*!**********************************!*\
  !*** ./components/getcomment.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar GetComment = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), comments = ref[0], setComments = ref[1];\n    var getData = function() {\n        fetch(\"/api/comment/\".concat(props.eventId)).then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            return setComments(data);\n        });\n    };\n    console.log('Res commments dta>>>>>>>>>>>>', comments);\n    var _obj;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", (_obj = {\n            onClick: function() {\n                return setShowComments(!showComments);\n            },\n            className: \"px-2 py-2 rounded bg-black text-white border-black hover:bg-white hover:text-black\"\n        }, _defineProperty(_obj, \"onClick\", getData), _defineProperty(_obj, \"children\", \"Show comments\"), _obj), void 0, false, {\n            fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/getcomment.js\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/getcomment.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this));\n};\n_s(GetComment, \"4bWmwqNpSmwrWYwBxf0uO8LDcFo=\");\n_c = GetComment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GetComment);\nvar _c;\n$RefreshReg$(_c, \"GetComment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dldGNvbW1lbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXVDOzs7Ozs7Ozs7Ozs7Ozs7O0FBRXZDLEdBQUssQ0FBQ0UsVUFBVSxHQUFHLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7O0lBQzdCLEdBQUssQ0FBMkJGLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBcENHLFFBQVEsR0FBaUJILEdBQVksS0FBM0JJLFdBQVcsR0FBSUosR0FBWTtJQUU1QyxHQUFLLENBQUNLLE9BQU8sR0FBRyxRQUNsQixHQUR3QixDQUFDO1FBQ3JCQyxLQUFLLENBQUUsQ0FBYSxlQUFnQixPQUFkSixLQUFLLENBQUNLLE9BQU8sR0FDaENDLElBQUksQ0FBQyxRQUFRLENBQVBDLEdBQUc7WUFBS0EsTUFBTSxDQUFOQSxHQUFHLENBQUNDLElBQUk7V0FDdEJGLElBQUksQ0FBQyxRQUFRLENBQVBHLElBQUk7WUFBS1AsTUFBTSxDQUFOQSxXQUFXLENBQUNPLElBQUk7O0lBQ3BDLENBQUM7SUFDREMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBK0IsZ0NBQUVWLFFBQVE7O0lBRXJELE1BQU0sNkVBQ0hXLENBQUc7OEZBQ0RDLENBQU07WUFDUEMsT0FBTyxFQUFFLFFBQVE7Z0JBQUpDLE1BQU0sQ0FBTkEsZUFBZSxFQUFFQyxZQUFZOztZQUN4Q0MsU0FBUyxFQUFDLENBQW9GO2lDQUM5RkgsQ0FBTyxVQUFFWCxPQUFPLHFDQUNqQixDQUVEOzs7Ozs7Ozs7O0FBR04sQ0FBQztHQXJCS0osVUFBVTtLQUFWQSxVQUFVO0FBdUJoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2V0Y29tbWVudC5qcz9hYjczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgR2V0Q29tbWVudCA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbY29tbWVudHMsIHNldENvbW1lbnRzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBnZXREYXRhID0gKCkgPT4ge1xuICAgIGZldGNoKGAvYXBpL2NvbW1lbnQvJHtwcm9wcy5ldmVudElkfWApXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHNldENvbW1lbnRzKGRhdGEpKTtcbiAgfTtcbiAgY29uc29sZS5sb2coJ1JlcyBjb21tbWVudHMgZHRhPj4+Pj4+Pj4+Pj4+JywgY29tbWVudHMpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxidXR0b25cbiAgICAgIG9uQ2xpY2s9eygpPT5zZXRTaG93Q29tbWVudHMoIXNob3dDb21tZW50cyl9XG4gICAgICAgIGNsYXNzTmFtZT0ncHgtMiBweS0yIHJvdW5kZWQgYmctYmxhY2sgdGV4dC13aGl0ZSBib3JkZXItYmxhY2sgaG92ZXI6Ymctd2hpdGUgaG92ZXI6dGV4dC1ibGFjaydcbiAgICAgICAgb25DbGljaz17Z2V0RGF0YX1cbiAgICAgID5cbiAgICAgICAgU2hvdyBjb21tZW50c1xuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHZXRDb21tZW50O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJHZXRDb21tZW50IiwicHJvcHMiLCJjb21tZW50cyIsInNldENvbW1lbnRzIiwiZ2V0RGF0YSIsImZldGNoIiwiZXZlbnRJZCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwic2V0U2hvd0NvbW1lbnRzIiwic2hvd0NvbW1lbnRzIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/getcomment.js\n");

/***/ })

});