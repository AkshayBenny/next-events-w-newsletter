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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar GetComment = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), comments = ref[0], setComments = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showComments = ref1[0], setShowComments = ref1[1];\n    var getData = function() {\n        setShowComments(!showComments);\n        try {\n            fetch(\"/api/comment/\".concat(props.eventId)).then(function(res) {\n                return res.json();\n            }).then(function(data) {\n                return setComments(data.comments);\n            });\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    console.log('Res commments dta>>>>>>>>>>>>', comments.comments);\n    var filteredComments = comments.comments.filter(function(item) {\n        return item.eventId === props.event.Id;\n    });\n    console.log('Filtered Comments>>>', filteredComments);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"px-2 py-2 rounded bg-black text-white border-black hover:bg-white hover:text-black\",\n            onClick: getData,\n            children: \"Show comments\"\n        }, void 0, false, {\n            fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/getcomment.js\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/getcomment.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this));\n};\n_s(GetComment, \"zGjb7Xs7Z25YSj8JpzkeLqwVDf8=\");\n_c = GetComment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GetComment);\nvar _c;\n$RefreshReg$(_c, \"GetComment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dldGNvbW1lbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXVDOzs7QUFFdkMsR0FBSyxDQUFDRSxVQUFVLEdBQUcsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQzs7SUFDN0IsR0FBSyxDQUEyQkYsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUFwQ0csUUFBUSxHQUFpQkgsR0FBWSxLQUEzQkksV0FBVyxHQUFJSixHQUFZO0lBQzVDLEdBQUssQ0FBbUNBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQS9DSyxZQUFZLEdBQXFCTCxJQUFlLEtBQWxDTSxlQUFlLEdBQUlOLElBQWU7SUFFdkQsR0FBSyxDQUFDTyxPQUFPLEdBQUcsUUFDbEIsR0FEd0IsQ0FBQztRQUNyQkQsZUFBZSxFQUFFRCxZQUFZO1FBQzdCLEdBQUcsQ0FBQyxDQUFDO1lBQ0hHLEtBQUssQ0FBRSxDQUFhLGVBQWdCLE9BQWROLEtBQUssQ0FBQ08sT0FBTyxHQUNoQ0MsSUFBSSxDQUFDLFFBQVEsQ0FBUEMsR0FBRztnQkFBS0EsTUFBTSxDQUFOQSxHQUFHLENBQUNDLElBQUk7ZUFDdEJGLElBQUksQ0FBQyxRQUFRLENBQVBHLElBQUk7Z0JBQUtULE1BQU0sQ0FBTkEsV0FBVyxDQUFDUyxJQUFJLENBQUNWLFFBQVE7O1FBQzdDLENBQUMsQ0FBQyxLQUFLLEVBQUVXLEdBQUcsRUFBRSxDQUFDO1lBQ2JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHO1FBQ2pCLENBQUM7SUFDSCxDQUFDO0lBQ0RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQStCLGdDQUFFYixRQUFRLENBQUNBLFFBQVE7SUFFOUQsR0FBSyxDQUFDYyxnQkFBZ0IsR0FBR2QsUUFBUSxDQUFDQSxRQUFRLENBQUNlLE1BQU0sQ0FDL0MsUUFBUSxDQUFQQyxJQUFJO1FBQUtBLE1BQU0sQ0FBTkEsSUFBSSxDQUFDVixPQUFPLEtBQUtQLEtBQUssQ0FBQ2tCLEtBQUssQ0FBQ0MsRUFBRTs7SUFFM0NOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQXNCLHVCQUFFQyxnQkFBZ0I7SUFFcEQsTUFBTSw2RUFDSEssQ0FBRzs4RkFDREMsQ0FBTTtZQUNMQyxTQUFTLEVBQUMsQ0FBb0Y7WUFDOUZDLE9BQU8sRUFBRWxCLE9BQU87c0JBQ2pCLENBRUQ7Ozs7Ozs7Ozs7O0FBZU4sQ0FBQztHQTNDS04sVUFBVTtLQUFWQSxVQUFVO0FBNkNoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2V0Y29tbWVudC5qcz9hYjczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgR2V0Q29tbWVudCA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbY29tbWVudHMsIHNldENvbW1lbnRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3Nob3dDb21tZW50cywgc2V0U2hvd0NvbW1lbnRzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBnZXREYXRhID0gKCkgPT4ge1xuICAgIHNldFNob3dDb21tZW50cyghc2hvd0NvbW1lbnRzKTtcbiAgICB0cnkge1xuICAgICAgZmV0Y2goYC9hcGkvY29tbWVudC8ke3Byb3BzLmV2ZW50SWR9YClcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHNldENvbW1lbnRzKGRhdGEuY29tbWVudHMpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9O1xuICBjb25zb2xlLmxvZygnUmVzIGNvbW1tZW50cyBkdGE+Pj4+Pj4+Pj4+Pj4nLCBjb21tZW50cy5jb21tZW50cyk7XG4gIFxuICBjb25zdCBmaWx0ZXJlZENvbW1lbnRzID0gY29tbWVudHMuY29tbWVudHMuZmlsdGVyKFxuICAgIChpdGVtKSA9PiBpdGVtLmV2ZW50SWQgPT09IHByb3BzLmV2ZW50LklkXG4gICk7XG4gIGNvbnNvbGUubG9nKCdGaWx0ZXJlZCBDb21tZW50cz4+PicsIGZpbHRlcmVkQ29tbWVudHMpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPSdweC0yIHB5LTIgcm91bmRlZCBiZy1ibGFjayB0ZXh0LXdoaXRlIGJvcmRlci1ibGFjayBob3ZlcjpiZy13aGl0ZSBob3Zlcjp0ZXh0LWJsYWNrJ1xuICAgICAgICBvbkNsaWNrPXtnZXREYXRhfVxuICAgICAgPlxuICAgICAgICBTaG93IGNvbW1lbnRzXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHsvKiB7c2hvd0NvbW1lbnRzICYmXG4gICAgICAgIGNvbW1lbnRzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgY29tbWVudHNcbiAgICAgICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmV2ZW50SWQgPT09IHByb3BzLmV2ZW50LklkKVxuICAgICAgICAgIC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT0nYm9yZGVyIHJvdW5kZWQgbXktMic+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmb250LWxpZ2h0Jz5Db21tZW50IGJ5IHtpdGVtLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC1zZW1pYm9sZCBwdC00Jz57aXRlbS5jb21tZW50fTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfSAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdldENvbW1lbnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkdldENvbW1lbnQiLCJwcm9wcyIsImNvbW1lbnRzIiwic2V0Q29tbWVudHMiLCJzaG93Q29tbWVudHMiLCJzZXRTaG93Q29tbWVudHMiLCJnZXREYXRhIiwiZmV0Y2giLCJldmVudElkIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImZpbHRlcmVkQ29tbWVudHMiLCJmaWx0ZXIiLCJpdGVtIiwiZXZlbnQiLCJJZCIsImRpdiIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/getcomment.js\n");

/***/ })

});