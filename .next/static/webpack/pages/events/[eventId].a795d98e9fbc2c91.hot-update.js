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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar GetComment = function(props) {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), comments = ref[0], setComments = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showComments = ref1[0], setShowComments = ref1[1];\n    var getData = function() {\n        setShowComments(!showComments);\n        try {\n            fetch(\"/api/comment/\".concat(props.eventId)).then(function(res) {\n                return res.json();\n            }).then(function(data) {\n                return setComments(data.comments);\n            });\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    console.log('Res commments dta>>>>>>>>>>>>', comments);\n    //   const filteredComments = comments.comments.filter(\n    //     (item) => item.eventId === props.event.Id\n    //   );\n    //   console.log('Filtered Comments>>>', filteredComments);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"px-2 py-2 rounded bg-black text-white border-black hover:bg-white hover:text-black\",\n                onClick: getData,\n                children: \"Show comments\"\n            }, void 0, false, {\n                fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/getcomment.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            showComments && comments.length > 0 && comments.filter(function(item) {\n                return item.eventId === props.eventId;\n            }).map(function(item, index) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"border rounded my-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-light\",\n                            children: [\n                                \"Comment by \",\n                                item.name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/getcomment.js\",\n                            lineNumber: 39,\n                            columnNumber: 17\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-semibold pt-4\",\n                            children: item.comment\n                        }, void 0, false, {\n                            fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/getcomment.js\",\n                            lineNumber: 40,\n                            columnNumber: 17\n                        }, _this1)\n                    ]\n                }, index, true, {\n                    fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/getcomment.js\",\n                    lineNumber: 38,\n                    columnNumber: 15\n                }, _this1));\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/getcomment.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this));\n};\n_s(GetComment, \"zGjb7Xs7Z25YSj8JpzkeLqwVDf8=\");\n_c = GetComment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GetComment);\nvar _c;\n$RefreshReg$(_c, \"GetComment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dldGNvbW1lbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXVDOzs7QUFFdkMsR0FBSyxDQUFDRSxVQUFVLEdBQUcsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQzs7O0lBQzdCLEdBQUssQ0FBMkJGLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBcENHLFFBQVEsR0FBaUJILEdBQVksS0FBM0JJLFdBQVcsR0FBSUosR0FBWTtJQUM1QyxHQUFLLENBQW1DQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUEvQ0ssWUFBWSxHQUFxQkwsSUFBZSxLQUFsQ00sZUFBZSxHQUFJTixJQUFlO0lBRXZELEdBQUssQ0FBQ08sT0FBTyxHQUFHLFFBQ2xCLEdBRHdCLENBQUM7UUFDckJELGVBQWUsRUFBRUQsWUFBWTtRQUM3QixHQUFHLENBQUMsQ0FBQztZQUNIRyxLQUFLLENBQUUsQ0FBYSxlQUFnQixPQUFkTixLQUFLLENBQUNPLE9BQU8sR0FDaENDLElBQUksQ0FBQyxRQUFRLENBQVBDLEdBQUc7Z0JBQUtBLE1BQU0sQ0FBTkEsR0FBRyxDQUFDQyxJQUFJO2VBQ3RCRixJQUFJLENBQUMsUUFBUSxDQUFQRyxJQUFJO2dCQUFLVCxNQUFNLENBQU5BLFdBQVcsQ0FBQ1MsSUFBSSxDQUFDVixRQUFROztRQUM3QyxDQUFDLENBQUMsS0FBSyxFQUFFVyxHQUFHLEVBQUUsQ0FBQztZQUNiQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRztRQUNqQixDQUFDO0lBQ0gsQ0FBQztJQUNEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUErQixnQ0FBRWIsUUFBUTtJQUVyRCxFQUF1RDtJQUN2RCxFQUFnRDtJQUNoRCxFQUFPO0lBQ1AsRUFBMkQ7SUFFM0QsTUFBTSw2RUFDSGMsQ0FBRzs7d0ZBQ0RDLENBQU07Z0JBQ0xDLFNBQVMsRUFBQyxDQUFvRjtnQkFDOUZDLE9BQU8sRUFBRWIsT0FBTzswQkFDakIsQ0FFRDs7Ozs7O1lBQ0NGLFlBQVksSUFDWEYsUUFBUSxDQUFDa0IsTUFBTSxHQUFHLENBQUMsSUFDbkJsQixRQUFRLENBQ0xtQixNQUFNLENBQUMsUUFBUSxDQUFQQyxJQUFJO2dCQUFLQSxNQUFNLENBQU5BLElBQUksQ0FBQ2QsT0FBTyxLQUFLUCxLQUFLLENBQUNPLE9BQU87ZUFDL0NlLEdBQUcsQ0FBQyxRQUFRLENBQVBELElBQUksRUFBRUUsS0FBSyxFQUFLLENBQUM7Z0JBQ3JCLE1BQU0sNkVBQ0hSLENBQUc7b0JBQWFFLFNBQVMsRUFBQyxDQUFxQjs7b0dBQzdDTyxDQUFDOzRCQUFDUCxTQUFTLEVBQUMsQ0FBWTs7Z0NBQUMsQ0FBVztnQ0FBQ0ksSUFBSSxDQUFDSSxJQUFJOzs7Ozs7O29HQUM5Q0QsQ0FBQzs0QkFBQ1AsU0FBUyxFQUFDLENBQW9CO3NDQUFFSSxJQUFJLENBQUNLLE9BQU87Ozs7Ozs7bUJBRnZDSCxLQUFLOzs7OztZQUtuQixDQUFDOzs7Ozs7O0FBR1gsQ0FBQztHQTNDS3hCLFVBQVU7S0FBVkEsVUFBVTtBQTZDaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dldGNvbW1lbnQuanM/YWI3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEdldENvbW1lbnQgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2NvbW1lbnRzLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzaG93Q29tbWVudHMsIHNldFNob3dDb21tZW50c10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcbiAgICBzZXRTaG93Q29tbWVudHMoIXNob3dDb21tZW50cyk7XG4gICAgdHJ5IHtcbiAgICAgIGZldGNoKGAvYXBpL2NvbW1lbnQvJHtwcm9wcy5ldmVudElkfWApXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiBzZXRDb21tZW50cyhkYXRhLmNvbW1lbnRzKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgfTtcbiAgY29uc29sZS5sb2coJ1JlcyBjb21tbWVudHMgZHRhPj4+Pj4+Pj4+Pj4+JywgY29tbWVudHMpO1xuXG4gIC8vICAgY29uc3QgZmlsdGVyZWRDb21tZW50cyA9IGNvbW1lbnRzLmNvbW1lbnRzLmZpbHRlcihcbiAgLy8gICAgIChpdGVtKSA9PiBpdGVtLmV2ZW50SWQgPT09IHByb3BzLmV2ZW50LklkXG4gIC8vICAgKTtcbiAgLy8gICBjb25zb2xlLmxvZygnRmlsdGVyZWQgQ29tbWVudHM+Pj4nLCBmaWx0ZXJlZENvbW1lbnRzKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT0ncHgtMiBweS0yIHJvdW5kZWQgYmctYmxhY2sgdGV4dC13aGl0ZSBib3JkZXItYmxhY2sgaG92ZXI6Ymctd2hpdGUgaG92ZXI6dGV4dC1ibGFjaydcbiAgICAgICAgb25DbGljaz17Z2V0RGF0YX1cbiAgICAgID5cbiAgICAgICAgU2hvdyBjb21tZW50c1xuICAgICAgPC9idXR0b24+XG4gICAgICB7c2hvd0NvbW1lbnRzICYmXG4gICAgICAgIGNvbW1lbnRzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgY29tbWVudHNcbiAgICAgICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmV2ZW50SWQgPT09IHByb3BzLmV2ZW50SWQpXG4gICAgICAgICAgLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPSdib3JkZXIgcm91bmRlZCBteS0yJz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtbGlnaHQnPkNvbW1lbnQgYnkge2l0ZW0ubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmb250LXNlbWlib2xkIHB0LTQnPntpdGVtLmNvbW1lbnR9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHZXRDb21tZW50O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJHZXRDb21tZW50IiwicHJvcHMiLCJjb21tZW50cyIsInNldENvbW1lbnRzIiwic2hvd0NvbW1lbnRzIiwic2V0U2hvd0NvbW1lbnRzIiwiZ2V0RGF0YSIsImZldGNoIiwiZXZlbnRJZCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwibGVuZ3RoIiwiZmlsdGVyIiwiaXRlbSIsIm1hcCIsImluZGV4IiwicCIsIm5hbWUiLCJjb21tZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/getcomment.js\n");

/***/ })

});