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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Comment = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), name = ref[0], setName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), email = ref1[0], setEmail = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), comment = ref2[0], setComment = ref2[1];\n    var reqBody = {\n        name: name,\n        email: email,\n        comment: comment\n    };\n    var submitHandler = function(e) {\n        e.preventDefault();\n        fetch('/api/comment', {\n            method: 'POST',\n            body: JSON.stringify(reqBody),\n            headers: {\n                'Content-Type': 'application/json'\n            }\n        }).then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            return console.log(data);\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"space-y-4\",\n            onSubmit: submitHandler,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-6 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            onChange: function(e) {\n                                return setName(e.target.value);\n                            },\n                            type: \"text\",\n                            placeholder: \"Name\",\n                            className: \"border-gray-700 border-2 rounded px-4 py-2\"\n                        }, void 0, false, {\n                            fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/comment.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            onChange: function(e) {\n                                return setEmail(e.target.value);\n                            },\n                            type: \"text\",\n                            placeholder: \"Email\",\n                            className: \"border-gray-700 border-2 rounded px-4 py-2\"\n                        }, void 0, false, {\n                            fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/comment.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/comment.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    onChange: function(e) {\n                        return setComment(e.target.value);\n                    },\n                    className: \"border-gray-700 w-full border-2 rounded px-4 py-2\",\n                    name: \"comment\",\n                    id: \"comment\",\n                    placeholder: \"Comment\"\n                }, void 0, false, {\n                    fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/comment.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: \"Add comment\"\n                }, void 0, false, {\n                    fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/comment.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/comment.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/comment.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, _this));\n};\n_s(Comment, \"H0oogsi12FpBP5BGRBJJWCRHc9o=\");\n_c = Comment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comment);\nvar _c;\n$RefreshReg$(_c, \"Comment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1lbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXVDOzs7QUFFdkMsR0FBSyxDQUFDRSxPQUFPLEdBQUcsUUFDaEIsR0FEc0IsQ0FBQzs7SUFDckIsR0FBSyxDQUFtQkQsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBNUJFLElBQUksR0FBYUYsR0FBWSxLQUF2QkcsT0FBTyxHQUFJSCxHQUFZO0lBQ3BDLEdBQUssQ0FBcUJBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQTlCSSxLQUFLLEdBQWNKLElBQVksS0FBeEJLLFFBQVEsR0FBSUwsSUFBWTtJQUN0QyxHQUFLLENBQXlCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUFsQ00sT0FBTyxHQUFnQk4sSUFBWSxLQUExQk8sVUFBVSxHQUFJUCxJQUFZO0lBRTFDLEdBQUssQ0FBQ1EsT0FBTyxHQUFHLENBQUM7UUFDZk4sSUFBSSxFQUFFQSxJQUFJO1FBQ1ZFLEtBQUssRUFBRUEsS0FBSztRQUNaRSxPQUFPLEVBQUVBLE9BQU87SUFDbEIsQ0FBQztJQUVELEdBQUssQ0FBQ0csYUFBYSxHQUFHLFFBQVEsQ0FBUEMsQ0FBQyxFQUFLLENBQUM7UUFDNUJBLENBQUMsQ0FBQ0MsY0FBYztRQUNoQkMsS0FBSyxDQUFDLENBQWMsZUFBRSxDQUFDO1lBQ3JCQyxNQUFNLEVBQUUsQ0FBTTtZQUNkQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDUixPQUFPO1lBQzVCUyxPQUFPLEVBQUUsQ0FBQztnQkFDUixDQUFjLGVBQUUsQ0FBa0I7WUFDcEMsQ0FBQztRQUNILENBQUMsRUFDRUMsSUFBSSxDQUFDLFFBQVEsQ0FBUEMsR0FBRztZQUFLQSxNQUFNLENBQU5BLEdBQUcsQ0FBQ0MsSUFBSTtXQUN0QkYsSUFBSSxDQUFDLFFBQVEsQ0FBUEcsSUFBSTtZQUFLQyxNQUFNLENBQU5BLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJOztJQUNwQyxDQUFDO0lBQ0QsTUFBTSw2RUFDSEcsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBa0M7OEZBQzlDQyxDQUFJO1lBQUNELFNBQVMsRUFBQyxDQUFXO1lBQUNFLFFBQVEsRUFBRWxCLGFBQWE7OzRGQUNoRGUsQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQWE7O29HQUN6QkcsQ0FBSzs0QkFDSkMsUUFBUSxFQUFFLFFBQVEsQ0FBUG5CLENBQUM7Z0NBQUtQLE1BQU0sQ0FBTkEsT0FBTyxDQUFDTyxDQUFDLENBQUNvQixNQUFNLENBQUNDLEtBQUs7OzRCQUN2Q0MsSUFBSSxFQUFDLENBQU07NEJBQ1hDLFdBQVcsRUFBQyxDQUFNOzRCQUNsQlIsU0FBUyxFQUFDLENBQTRDOzs7Ozs7b0dBRXZERyxDQUFLOzRCQUNKQyxRQUFRLEVBQUUsUUFBUSxDQUFQbkIsQ0FBQztnQ0FBS0wsTUFBTSxDQUFOQSxRQUFRLENBQUNLLENBQUMsQ0FBQ29CLE1BQU0sQ0FBQ0MsS0FBSzs7NEJBQ3hDQyxJQUFJLEVBQUMsQ0FBTTs0QkFDWEMsV0FBVyxFQUFDLENBQU87NEJBQ25CUixTQUFTLEVBQUMsQ0FBNEM7Ozs7Ozs7Ozs7Ozs0RkFHekRTLENBQVE7b0JBQ1BMLFFBQVEsRUFBRSxRQUFRLENBQVBuQixDQUFDO3dCQUFLSCxNQUFNLENBQU5BLFVBQVUsQ0FBQ0csQ0FBQyxDQUFDb0IsTUFBTSxDQUFDQyxLQUFLOztvQkFDMUNOLFNBQVMsRUFBQyxDQUFtRDtvQkFDN0R2QixJQUFJLEVBQUMsQ0FBUztvQkFDZGlDLEVBQUUsRUFBQyxDQUFTO29CQUNaRixXQUFXLEVBQUMsQ0FBUzs7Ozs7OzRGQUV0QkcsQ0FBTTs4QkFBRSxDQUFXOzs7Ozs7Ozs7Ozs7Ozs7OztBQUk1QixDQUFDO0dBbkRLbkMsT0FBTztLQUFQQSxPQUFPO0FBcURiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tZW50LmpzPzY1MGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBDb21tZW50ID0gKCkgPT4ge1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbY29tbWVudCwgc2V0Q29tbWVudF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgcmVxQm9keSA9IHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIGVtYWlsOiBlbWFpbCxcbiAgICBjb21tZW50OiBjb21tZW50LFxuICB9O1xuXG4gIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBmZXRjaCgnL2FwaS9jb21tZW50Jywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXFCb2R5KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4gY29uc29sZS5sb2coZGF0YSkpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9J3NwYWNlLXktNCcgb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBnYXAtNiAnPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nTmFtZSdcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nYm9yZGVyLWdyYXktNzAwIGJvcmRlci0yIHJvdW5kZWQgcHgtNCBweS0yJ1xuICAgICAgICAgIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW1haWwnXG4gICAgICAgICAgICBjbGFzc05hbWU9J2JvcmRlci1ncmF5LTcwMCBib3JkZXItMiByb3VuZGVkIHB4LTQgcHktMidcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb21tZW50KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBjbGFzc05hbWU9J2JvcmRlci1ncmF5LTcwMCB3LWZ1bGwgYm9yZGVyLTIgcm91bmRlZCBweC00IHB5LTInXG4gICAgICAgICAgbmFtZT0nY29tbWVudCdcbiAgICAgICAgICBpZD0nY29tbWVudCdcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nQ29tbWVudCdcbiAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgIDxidXR0b24gPkFkZCBjb21tZW50PC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDb21tZW50IiwibmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwiY29tbWVudCIsInNldENvbW1lbnQiLCJyZXFCb2R5Iiwic3VibWl0SGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0Iiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsInRleHRhcmVhIiwiaWQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/comment.js\n");

/***/ })

});