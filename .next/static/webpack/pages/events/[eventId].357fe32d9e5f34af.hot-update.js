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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar GetComment = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), comments = ref[0], setComments = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showComments = ref1[0], setShowComments = ref1[1];\n    var getData = function() {\n        setShowComments(!showComments);\n        fetch(\"/api/comment/\".concat(props.eventId)).then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            return setComments(data);\n        });\n    };\n    console.log('Res commments dta>>>>>>>>>>>>', comments);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"px-2 py-2 rounded bg-black text-white border-black hover:bg-white hover:text-black\",\n                onClick: getData,\n                children: \"Show comments\"\n            }, void 0, false, {\n                fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/getcomment.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            showComments && comments.filter()\n        ]\n    }, void 0, true, {\n        fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/getcomment.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this));\n};\n_s(GetComment, \"zGjb7Xs7Z25YSj8JpzkeLqwVDf8=\");\n_c = GetComment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GetComment);\nvar _c;\n$RefreshReg$(_c, \"GetComment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dldGNvbW1lbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXVDOzs7QUFFdkMsR0FBSyxDQUFDRSxVQUFVLEdBQUcsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQzs7SUFDN0IsR0FBSyxDQUEyQkYsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUFwQ0csUUFBUSxHQUFpQkgsR0FBWSxLQUEzQkksV0FBVyxHQUFJSixHQUFZO0lBQzVDLEdBQUssQ0FBbUNBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQS9DSyxZQUFZLEdBQXFCTCxJQUFlLEtBQWxDTSxlQUFlLEdBQUlOLElBQWU7SUFFdkQsR0FBSyxDQUFDTyxPQUFPLEdBQUcsUUFDbEIsR0FEd0IsQ0FBQztRQUNyQkQsZUFBZSxFQUFFRCxZQUFZO1FBQzdCRyxLQUFLLENBQUUsQ0FBYSxlQUFnQixPQUFkTixLQUFLLENBQUNPLE9BQU8sR0FDaENDLElBQUksQ0FBQyxRQUFRLENBQVBDLEdBQUc7WUFBS0EsTUFBTSxDQUFOQSxHQUFHLENBQUNDLElBQUk7V0FDdEJGLElBQUksQ0FBQyxRQUFRLENBQVBHLElBQUk7WUFBS1QsTUFBTSxDQUFOQSxXQUFXLENBQUNTLElBQUk7O0lBQ3BDLENBQUM7SUFDREMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBK0IsZ0NBQUVaLFFBQVE7SUFFckQsTUFBTSw2RUFDSGEsQ0FBRzs7d0ZBQ0RDLENBQU07Z0JBQ0xDLFNBQVMsRUFBQyxDQUFvRjtnQkFDOUZDLE9BQU8sRUFBRVosT0FBTzswQkFDakIsQ0FFRDs7Ozs7O1lBQ0NGLFlBQVksSUFBSUYsUUFBUSxDQUFDaUIsTUFBTTs7Ozs7OztBQUd0QyxDQUFDO0dBdkJLbkIsVUFBVTtLQUFWQSxVQUFVO0FBeUJoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2V0Y29tbWVudC5qcz9hYjczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgR2V0Q29tbWVudCA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbY29tbWVudHMsIHNldENvbW1lbnRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3Nob3dDb21tZW50cywgc2V0U2hvd0NvbW1lbnRzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBnZXREYXRhID0gKCkgPT4ge1xuICAgIHNldFNob3dDb21tZW50cyghc2hvd0NvbW1lbnRzKTtcbiAgICBmZXRjaChgL2FwaS9jb21tZW50LyR7cHJvcHMuZXZlbnRJZH1gKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiBzZXRDb21tZW50cyhkYXRhKSk7XG4gIH07XG4gIGNvbnNvbGUubG9nKCdSZXMgY29tbW1lbnRzIGR0YT4+Pj4+Pj4+Pj4+PicsIGNvbW1lbnRzKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT0ncHgtMiBweS0yIHJvdW5kZWQgYmctYmxhY2sgdGV4dC13aGl0ZSBib3JkZXItYmxhY2sgaG92ZXI6Ymctd2hpdGUgaG92ZXI6dGV4dC1ibGFjaydcbiAgICAgICAgb25DbGljaz17Z2V0RGF0YX1cbiAgICAgID5cbiAgICAgICAgU2hvdyBjb21tZW50c1xuICAgICAgPC9idXR0b24+XG4gICAgICB7c2hvd0NvbW1lbnRzICYmIGNvbW1lbnRzLmZpbHRlcigpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2V0Q29tbWVudDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiR2V0Q29tbWVudCIsInByb3BzIiwiY29tbWVudHMiLCJzZXRDb21tZW50cyIsInNob3dDb21tZW50cyIsInNldFNob3dDb21tZW50cyIsImdldERhdGEiLCJmZXRjaCIsImV2ZW50SWQiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsImZpbHRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/getcomment.js\n");

/***/ })

});