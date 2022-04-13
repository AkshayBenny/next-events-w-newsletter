"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/events/subs",{

/***/ "./pages/events/subs.js":
/*!******************************!*\
  !*** ./pages/events/subs.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_akshay_Other_my_repos_next_events_w_newsletter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_akshay_Other_my_repos_next_events_w_newsletter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_akshay_Other_my_repos_next_events_w_newsletter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Subs = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), data1 = ref[0], setData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), loading = ref1[0], setLoading = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var dataFetcher = function() {\n            var _ref = _asyncToGenerator(_home_akshay_Other_my_repos_next_events_w_newsletter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                return _home_akshay_Other_my_repos_next_events_w_newsletter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            setLoading(true);\n                            _ctx.prev = 1;\n                            _ctx.next = 4;\n                            return fetch('/api/subs').then(function(res) {\n                                return res.json();\n                            }).then(function(data) {\n                                return setData(data.myData);\n                            });\n                        case 4:\n                            _ctx.next = 9;\n                            break;\n                        case 6:\n                            _ctx.prev = 6;\n                            _ctx.t0 = _ctx[\"catch\"](1);\n                            console.log('Error fetching data>>>>', _ctx.t0);\n                        case 9:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        1,\n                        6\n                    ]\n                ]);\n            }));\n            return function dataFetcher() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        dataFetcher();\n        setLoading(false);\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n            className: \"space-y-2 px-12\",\n            children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: \"Loading\"\n            }, void 0, false, {\n                fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/pages/events/subs.js\",\n                lineNumber: 26,\n                columnNumber: 11\n            }, _this) : data1.map(function(item, index) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                    className: \"border-b-2 border rounded \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            className: \"font-bold\",\n                            children: item.name\n                        }, void 0, false, {\n                            fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/pages/events/subs.js\",\n                            lineNumber: 31,\n                            columnNumber: 17\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            className: \"font-light\",\n                            children: item.email\n                        }, void 0, false, {\n                            fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/pages/events/subs.js\",\n                            lineNumber: 32,\n                            columnNumber: 17\n                        }, _this1)\n                    ]\n                }, index, true, {\n                    fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/pages/events/subs.js\",\n                    lineNumber: 30,\n                    columnNumber: 15\n                }, _this1));\n            })\n        }, void 0, false, {\n            fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/pages/events/subs.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/pages/events/subs.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this));\n};\n_s(Subs, \"e+Qj8lEadTQIYcROuVnJ4J/+oDY=\");\n_c = Subs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Subs);\nvar _c;\n$RefreshReg$(_c, \"Subs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ldmVudHMvc3Vicy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBa0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxELEdBQUssQ0FBQ0csSUFBSSxHQUFHLFFBQ2IsR0FEbUIsQ0FBQzs7O0lBQ2xCLEdBQUssQ0FBbUJGLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBNUJHLEtBQUksR0FBYUgsR0FBWSxLQUF2QkksT0FBTyxHQUFJSixHQUFZO0lBQ3BDLEdBQUssQ0FBeUJBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQXJDSyxPQUFPLEdBQWdCTCxJQUFlLEtBQTdCTSxVQUFVLEdBQUlOLElBQWU7SUFFN0NDLGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2YsR0FBSyxDQUFDTSxXQUFXO3lNQUFHLFFBQVEsV0FBSSxDQUFDOzs7OzRCQUMvQkQsVUFBVSxDQUFDLElBQUk7OzttQ0FFUEUsS0FBSyxDQUFDLENBQVcsWUFDcEJDLElBQUksQ0FBQyxRQUFRLENBQVBDLEdBQUc7Z0NBQUtBLE1BQU0sQ0FBTkEsR0FBRyxDQUFDQyxJQUFJOytCQUN0QkYsSUFBSSxDQUFDLFFBQVEsQ0FBUE4sSUFBSTtnQ0FBS0MsTUFBTSxDQUFOQSxPQUFPLENBQUNELElBQUksQ0FBQ1MsTUFBTTs7Ozs7Ozs7NEJBRXJDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUF5Qjs7Ozs7Ozs7Ozs7WUFFekMsQ0FBQzs0QkFUS1AsV0FBVzs7OztRQVVqQkEsV0FBVztRQUNYRCxVQUFVLENBQUMsS0FBSztJQUNsQixDQUFDO0lBRUQsTUFBTSw2RUFDSFMsQ0FBRzs4RkFDREMsQ0FBRTtZQUFDQyxTQUFTLEVBQUMsQ0FBaUI7c0JBQzVCWixPQUFPLCtFQUNMYSxDQUFDOzBCQUFDLENBQU87Ozs7O3dCQUVWZixLQUFJLENBQUNnQixHQUFHLENBQUMsUUFBUSxDQUFQQyxJQUFJLEVBQUVDLEtBQUssRUFBSyxDQUFDO2dCQUN6QixNQUFNLDZFQUNIQyxDQUFFO29CQUFhTCxTQUFTLEVBQUMsQ0FBNEI7O29HQUNuREMsQ0FBQzs0QkFBQ0QsU0FBUyxFQUFDLENBQVc7c0NBQUVHLElBQUksQ0FBQ0csSUFBSTs7Ozs7O29HQUNsQ0wsQ0FBQzs0QkFBQ0QsU0FBUyxFQUFDLENBQVk7c0NBQUVHLElBQUksQ0FBQ0ksS0FBSzs7Ozs7OzttQkFGOUJILEtBQUs7Ozs7O1lBS2xCLENBQUM7Ozs7Ozs7Ozs7O0FBS1gsQ0FBQztHQXJDS25CLElBQUk7S0FBSkEsSUFBSTtBQXVDViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2V2ZW50cy9zdWJzLmpzPzRlNTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFN1YnMgPSAoKSA9PiB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZGF0YUZldGNoZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZmV0Y2goJy9hcGkvc3VicycpXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4gc2V0RGF0YShkYXRhLm15RGF0YSkpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGZldGNoaW5nIGRhdGE+Pj4+JywgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG4gICAgZGF0YUZldGNoZXIoKTtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfSk7XG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8dWwgY2xhc3NOYW1lPSdzcGFjZS15LTIgcHgtMTInPlxuICAgICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgICA8cD5Mb2FkaW5nPC9wPlxuICAgICAgICApIDogKFxuICAgICAgICAgIGRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT0nYm9yZGVyLWItMiBib3JkZXIgcm91bmRlZCAnPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC1ib2xkJz57aXRlbS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtbGlnaHQnPntpdGVtLmVtYWlsfTwvcD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdWJzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTdWJzIiwiZGF0YSIsInNldERhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImRhdGFGZXRjaGVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsIm15RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJ1bCIsImNsYXNzTmFtZSIsInAiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJsaSIsIm5hbWUiLCJlbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/events/subs.js\n");

/***/ })

});