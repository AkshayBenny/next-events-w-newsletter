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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar GetComment = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), comments = ref[0], setComments = ref[1];\n    var getData = function() {\n        fetch(\"/api/comment/\".concat(props.eventId)).then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            return setComments(data);\n        });\n    };\n    console.log(\"Res commments dta>>>>>>>>>>>>\", comments);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"px-2 py-2 rounded bg-black text-white border-black hover:bg-white hover:text-black\",\n            onClick: getData,\n            children: \"Show comments\"\n        }, void 0, false, {\n            fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/getcomment.js\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/getcomment.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this));\n};\n_s(GetComment, \"4bWmwqNpSmwrWYwBxf0uO8LDcFo=\");\n_c = GetComment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GetComment);\nvar _c;\n$RefreshReg$(_c, \"GetComment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dldGNvbW1lbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXVDOzs7QUFFdkMsR0FBSyxDQUFDRSxVQUFVLEdBQUcsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQzs7SUFDN0IsR0FBSyxDQUEyQkYsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUFwQ0csUUFBUSxHQUFpQkgsR0FBWSxLQUEzQkksV0FBVyxHQUFJSixHQUFZO0lBRTVDLEdBQUssQ0FBQ0ssT0FBTyxHQUFHLFFBQ2xCLEdBRHdCLENBQUM7UUFDckJDLEtBQUssQ0FBRSxDQUFhLGVBQWdCLE9BQWRKLEtBQUssQ0FBQ0ssT0FBTyxHQUNoQ0MsSUFBSSxDQUFDLFFBQVEsQ0FBUEMsR0FBRztZQUFLQSxNQUFNLENBQU5BLEdBQUcsQ0FBQ0MsSUFBSTtXQUN0QkYsSUFBSSxDQUFDLFFBQVEsQ0FBUEcsSUFBSTtZQUFLUCxNQUFNLENBQU5BLFdBQVcsQ0FBQ08sSUFBSTs7SUFDcEMsQ0FBQztJQUNEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUErQixnQ0FBQ1YsUUFBUTtJQUVwRCxNQUFNLDZFQUNIVyxDQUFHOzhGQUNEQyxDQUFNO1lBQ0xDLFNBQVMsRUFBQyxDQUFvRjtZQUM5RkMsT0FBTyxFQUFFWixPQUFPO3NCQUNqQixDQUVEOzs7Ozs7Ozs7OztBQUdOLENBQUM7R0FwQktKLFVBQVU7S0FBVkEsVUFBVTtBQXNCaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dldGNvbW1lbnQuanM/YWI3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEdldENvbW1lbnQgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2NvbW1lbnRzLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcbiAgICBmZXRjaChgL2FwaS9jb21tZW50LyR7cHJvcHMuZXZlbnRJZH1gKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiBzZXRDb21tZW50cyhkYXRhKSk7XG4gIH07XG4gIGNvbnNvbGUubG9nKFwiUmVzIGNvbW1tZW50cyBkdGE+Pj4+Pj4+Pj4+Pj5cIixjb21tZW50cyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9J3B4LTIgcHktMiByb3VuZGVkIGJnLWJsYWNrIHRleHQtd2hpdGUgYm9yZGVyLWJsYWNrIGhvdmVyOmJnLXdoaXRlIGhvdmVyOnRleHQtYmxhY2snXG4gICAgICAgIG9uQ2xpY2s9e2dldERhdGF9XG4gICAgICA+XG4gICAgICAgIFNob3cgY29tbWVudHNcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2V0Q29tbWVudDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiR2V0Q29tbWVudCIsInByb3BzIiwiY29tbWVudHMiLCJzZXRDb21tZW50cyIsImdldERhdGEiLCJmZXRjaCIsImV2ZW50SWQiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/getcomment.js\n");

/***/ })

});