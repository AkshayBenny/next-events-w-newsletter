"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/events",{

/***/ "./components/newsletter/newsletter.js":
/*!*********************************************!*\
  !*** ./components/newsletter/newsletter.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar NewsLetter = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), email = ref[0], setEmail = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = ref1[0], setLoading = ref1[1];\n    var reqBody = {\n        email: email\n    };\n    var submitHandler = function(e) {\n        e.preventDefault();\n        setLoading(true);\n        fetch('/api/newsletter', {\n            method: 'POST',\n            body: JSON.stringify(reqBody),\n            headers: {\n                'Content-Type': 'application/json'\n            }\n        }).then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            return setLoading(false);\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"email\",\n                children: \"Enter your email:\"\n            }, void 0, false, {\n                fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/newsletter/newsletter.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"email\",\n                name: \"email\",\n                onChange: function(e) {\n                    return setEmail(e.target.value);\n                },\n                className: \"border-2\",\n                placeholder: \"email\"\n            }, void 0, false, {\n                fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/newsletter/newsletter.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this),\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-green-500 font-light\",\n                children: \"Submitting data...\"\n            }, void 0, false, {\n                fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/newsletter/newsletter.js\",\n                lineNumber: 34,\n                columnNumber: 19\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-black text-white\",\n                onClick: submitHandler,\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/newsletter/newsletter.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/newsletter/newsletter.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this));\n};\n_s(NewsLetter, \"LjTeG6EEli3Sv/iwhJV2XSUlq9s=\");\n_c = NewsLetter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsLetter);\nvar _c;\n$RefreshReg$(_c, \"NewsLetter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25ld3NsZXR0ZXIvbmV3c2xldHRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7OztBQUVoQyxHQUFLLENBQUNDLFVBQVUsR0FBRyxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDOztJQUM3QixHQUFLLENBQXFCRixHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUE5QkcsS0FBSyxHQUFjSCxHQUFZLEtBQXhCSSxRQUFRLEdBQUlKLEdBQVk7SUFDdEMsR0FBSyxDQUF5QkEsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBckNLLE9BQU8sR0FBZ0JMLElBQWUsS0FBN0JNLFVBQVUsR0FBSU4sSUFBZTtJQUU3QyxHQUFLLENBQUNPLE9BQU8sR0FBRyxDQUFDO1FBQ2ZKLEtBQUssRUFBRUEsS0FBSztJQUNkLENBQUM7SUFFRCxHQUFLLENBQUNLLGFBQWEsR0FBRyxRQUFRLENBQVBDLENBQUMsRUFBSyxDQUFDO1FBQzVCQSxDQUFDLENBQUNDLGNBQWM7UUFDaEJKLFVBQVUsQ0FBQyxJQUFJO1FBQ2ZLLEtBQUssQ0FBQyxDQUFpQixrQkFBRSxDQUFDO1lBQ3hCQyxNQUFNLEVBQUUsQ0FBTTtZQUNkQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDUixPQUFPO1lBQzVCUyxPQUFPLEVBQUUsQ0FBQztnQkFDUixDQUFjLGVBQUUsQ0FBa0I7WUFDcEMsQ0FBQztRQUNILENBQUMsRUFDRUMsSUFBSSxDQUFDLFFBQVEsQ0FBUEMsR0FBRztZQUFLQSxNQUFNLENBQU5BLEdBQUcsQ0FBQ0MsSUFBSTtXQUN0QkYsSUFBSSxDQUFDLFFBQVEsQ0FBUEcsSUFBSTtZQUFLZCxNQUFNLENBQU5BLFVBQVUsQ0FBQyxLQUFLOztJQUNwQyxDQUFDO0lBQ0QsTUFBTSw2RUFDSGUsQ0FBSTs7d0ZBQ0ZDLENBQUs7Z0JBQUNDLE9BQU8sRUFBQyxDQUFPOzBCQUFDLENBQWlCOzs7Ozs7d0ZBQ3ZDQyxDQUFLO2dCQUNKQyxJQUFJLEVBQUMsQ0FBTztnQkFDWkMsSUFBSSxFQUFDLENBQU87Z0JBQ1pDLFFBQVEsRUFBRSxRQUFRLENBQVBsQixDQUFDO29CQUFLTCxNQUFNLENBQU5BLFFBQVEsQ0FBQ0ssQ0FBQyxDQUFDbUIsTUFBTSxDQUFDQyxLQUFLOztnQkFDeENDLFNBQVMsRUFBQyxDQUFVO2dCQUNwQkMsV0FBVyxFQUFDLENBQU87Ozs7OztZQUVwQjFCLE9BQU8sZ0ZBQUsyQixDQUFDO2dCQUFDRixTQUFTLEVBQUMsQ0FBMkI7MEJBQUMsQ0FBa0I7Ozs7Ozt3RkFDdEVHLENBQU07Z0JBQUNILFNBQVMsRUFBQyxDQUFxQjtnQkFBQ0ksT0FBTyxFQUFFMUIsYUFBYTswQkFBRSxDQUVoRTs7Ozs7Ozs7Ozs7O0FBR04sQ0FBQztHQXJDS1AsVUFBVTtLQUFWQSxVQUFVO0FBdUNoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmV3c2xldHRlci9uZXdzbGV0dGVyLmpzPzRjOWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IE5ld3NMZXR0ZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCByZXFCb2R5ID0ge1xuICAgIGVtYWlsOiBlbWFpbCxcbiAgfTtcblxuICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBmZXRjaCgnL2FwaS9uZXdzbGV0dGVyJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXFCb2R5KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4gc2V0TG9hZGluZyhmYWxzZSkpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxmb3JtPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9J2VtYWlsJz5FbnRlciB5b3VyIGVtYWlsOjwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT0nZW1haWwnXG4gICAgICAgIG5hbWU9J2VtYWlsJ1xuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgY2xhc3NOYW1lPSdib3JkZXItMidcbiAgICAgICAgcGxhY2Vob2xkZXI9J2VtYWlsJ1xuICAgICAgLz5cbiAgICAgIHtsb2FkaW5nICYmIDxwIGNsYXNzTmFtZT0ndGV4dC1ncmVlbi01MDAgZm9udC1saWdodCc+U3VibWl0dGluZyBkYXRhLi4uPC9wPn1cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdiZy1ibGFjayB0ZXh0LXdoaXRlJyBvbkNsaWNrPXtzdWJtaXRIYW5kbGVyfT5cbiAgICAgICAgU3VibWl0XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXdzTGV0dGVyO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTmV3c0xldHRlciIsInByb3BzIiwiZW1haWwiLCJzZXRFbWFpbCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVxQm9keSIsInN1Ym1pdEhhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImZvcm0iLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNsYXNzTmFtZSIsInBsYWNlaG9sZGVyIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/newsletter/newsletter.js\n");

/***/ })

});