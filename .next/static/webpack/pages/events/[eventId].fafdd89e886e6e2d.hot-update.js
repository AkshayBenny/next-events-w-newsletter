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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar GetComment = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), comments = ref[0], setComments = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showComments = ref1[0], setShowComments = ref1[1];\n    var getData = function() {\n        setShowComments(!showComments);\n        try {\n            fetch(\"/api/comment/\".concat(props.eventId)).then(function(res) {\n                return res.json();\n            }).then(function(data) {\n                return setComments(data);\n            });\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    console.log('Res commments dta>>>>>>>>>>>>', comments.comments[2]);\n    //   const filteredComments = comments.comments.filter(\n    //     (item) => item.eventId === props.event.Id\n    //   );\n    //   console.log('Filtered Comments>>>', filteredComments);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"px-2 py-2 rounded bg-black text-white border-black hover:bg-white hover:text-black\",\n            onClick: getData,\n            children: \"Show comments\"\n        }, void 0, false, {\n            fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/getcomment.js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/getcomment.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, _this));\n};\n_s(GetComment, \"zGjb7Xs7Z25YSj8JpzkeLqwVDf8=\");\n_c = GetComment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GetComment);\nvar _c;\n$RefreshReg$(_c, \"GetComment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dldGNvbW1lbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXVDOzs7QUFFdkMsR0FBSyxDQUFDRSxVQUFVLEdBQUcsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQzs7SUFDN0IsR0FBSyxDQUEyQkYsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUFwQ0csUUFBUSxHQUFpQkgsR0FBWSxLQUEzQkksV0FBVyxHQUFJSixHQUFZO0lBQzVDLEdBQUssQ0FBbUNBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQS9DSyxZQUFZLEdBQXFCTCxJQUFlLEtBQWxDTSxlQUFlLEdBQUlOLElBQWU7SUFFdkQsR0FBSyxDQUFDTyxPQUFPLEdBQUcsUUFDbEIsR0FEd0IsQ0FBQztRQUNyQkQsZUFBZSxFQUFFRCxZQUFZO1FBQzdCLEdBQUcsQ0FBQyxDQUFDO1lBQ0hHLEtBQUssQ0FBRSxDQUFhLGVBQWdCLE9BQWROLEtBQUssQ0FBQ08sT0FBTyxHQUNoQ0MsSUFBSSxDQUFDLFFBQVEsQ0FBUEMsR0FBRztnQkFBS0EsTUFBTSxDQUFOQSxHQUFHLENBQUNDLElBQUk7ZUFDdEJGLElBQUksQ0FBQyxRQUFRLENBQVBHLElBQUk7Z0JBQUtULE1BQU0sQ0FBTkEsV0FBVyxDQUFDUyxJQUFJOztRQUNwQyxDQUFDLENBQUMsS0FBSyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztZQUNiQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRztRQUNqQixDQUFDO0lBQ0gsQ0FBQztJQUNEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUErQixnQ0FBRWIsUUFBUSxDQUFDQSxRQUFRLENBQUMsQ0FBQztJQUNsRSxFQUF1RDtJQUN2RCxFQUFnRDtJQUNoRCxFQUFPO0lBQ1AsRUFBMkQ7SUFFekQsTUFBTSw2RUFDSGMsQ0FBRzs4RkFDREMsQ0FBTTtZQUNMQyxTQUFTLEVBQUMsQ0FBb0Y7WUFDOUZDLE9BQU8sRUFBRWIsT0FBTztzQkFDakIsQ0FFRDs7Ozs7Ozs7Ozs7QUFlTixDQUFDO0dBMUNLTixVQUFVO0tBQVZBLFVBQVU7QUE0Q2hCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRjb21tZW50LmpzP2FiNzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBHZXRDb21tZW50ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtjb21tZW50cywgc2V0Q29tbWVudHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2hvd0NvbW1lbnRzLCBzZXRTaG93Q29tbWVudHNdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGdldERhdGEgPSAoKSA9PiB7XG4gICAgc2V0U2hvd0NvbW1lbnRzKCFzaG93Q29tbWVudHMpO1xuICAgIHRyeSB7XG4gICAgICBmZXRjaChgL2FwaS9jb21tZW50LyR7cHJvcHMuZXZlbnRJZH1gKVxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4gc2V0Q29tbWVudHMoZGF0YSkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH07XG4gIGNvbnNvbGUubG9nKCdSZXMgY29tbW1lbnRzIGR0YT4+Pj4+Pj4+Pj4+PicsIGNvbW1lbnRzLmNvbW1lbnRzWzJdKTtcbi8vICAgY29uc3QgZmlsdGVyZWRDb21tZW50cyA9IGNvbW1lbnRzLmNvbW1lbnRzLmZpbHRlcihcbi8vICAgICAoaXRlbSkgPT4gaXRlbS5ldmVudElkID09PSBwcm9wcy5ldmVudC5JZFxuLy8gICApO1xuLy8gICBjb25zb2xlLmxvZygnRmlsdGVyZWQgQ29tbWVudHM+Pj4nLCBmaWx0ZXJlZENvbW1lbnRzKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT0ncHgtMiBweS0yIHJvdW5kZWQgYmctYmxhY2sgdGV4dC13aGl0ZSBib3JkZXItYmxhY2sgaG92ZXI6Ymctd2hpdGUgaG92ZXI6dGV4dC1ibGFjaydcbiAgICAgICAgb25DbGljaz17Z2V0RGF0YX1cbiAgICAgID5cbiAgICAgICAgU2hvdyBjb21tZW50c1xuICAgICAgPC9idXR0b24+XG4gICAgICB7Lyoge3Nob3dDb21tZW50cyAmJlxuICAgICAgICBjb21tZW50cy5sZW5ndGggPiAwICYmXG4gICAgICAgIGNvbW1lbnRzXG4gICAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5ldmVudElkID09PSBwcm9wcy5ldmVudC5JZClcbiAgICAgICAgICAubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9J2JvcmRlciByb3VuZGVkIG15LTInPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC1saWdodCc+Q29tbWVudCBieSB7aXRlbS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQgcHQtNCc+e2l0ZW0uY29tbWVudH08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX0gKi99XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHZXRDb21tZW50O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJHZXRDb21tZW50IiwicHJvcHMiLCJjb21tZW50cyIsInNldENvbW1lbnRzIiwic2hvd0NvbW1lbnRzIiwic2V0U2hvd0NvbW1lbnRzIiwiZ2V0RGF0YSIsImZldGNoIiwiZXZlbnRJZCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/getcomment.js\n");

/***/ })

});