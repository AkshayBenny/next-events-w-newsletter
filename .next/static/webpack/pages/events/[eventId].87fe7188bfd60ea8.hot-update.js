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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Comment = function(props) {\n    _s();\n    var emailRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var commentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var nameRef = use;\n    var reqBody = {\n        eventId: props.eventId,\n        name: name,\n        email: email,\n        comment: comment\n    };\n    var submitHandler = function(e) {\n        e.preventDefault();\n        fetch('/api/comment', {\n            method: 'POST',\n            body: JSON.stringify(reqBody),\n            headers: {\n                'Content-Type': 'application/json'\n            }\n        }).then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            return console.log(data);\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"space-y-4\",\n            onSubmit: submitHandler,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-6 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            onChange: function(e) {\n                                return setName(e.target.value);\n                            },\n                            type: \"text\",\n                            placeholder: \"Name\",\n                            className: \"border-gray-700 border-2 rounded px-4 py-2\"\n                        }, void 0, false, {\n                            fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/comment.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            onChange: function(e) {\n                                return setEmail(e.target.value);\n                            },\n                            type: \"text\",\n                            placeholder: \"Email\",\n                            className: \"border-gray-700 border-2 rounded px-4 py-2\"\n                        }, void 0, false, {\n                            fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/comment.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/comment.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    onChange: function(e) {\n                        return setComment(e.target.value);\n                    },\n                    className: \"border-gray-700 w-full border-2 rounded px-4 py-2\",\n                    name: \"comment\",\n                    id: \"comment\",\n                    placeholder: \"Comment\"\n                }, void 0, false, {\n                    fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/comment.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-black px-4 py-2 text-white rounded\",\n                    children: \"Add comment\"\n                }, void 0, false, {\n                    fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/comment.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/comment.js\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/comment.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, _this));\n};\n_s(Comment, \"euWfpkHLX6UhpN+VHE2SgDiNXck=\");\n_c = Comment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comment);\nvar _c;\n$RefreshReg$(_c, \"Comment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1lbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFDOzs7QUFFckMsR0FBSyxDQUFDRSxPQUFPLEdBQUcsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQzs7SUFDMUIsR0FBSyxDQUFDQyxRQUFRLEdBQUdILDZDQUFNO0lBQ3JCLEdBQUssQ0FBQ0ksVUFBVSxHQUFHSiw2Q0FBTTtJQUN6QixHQUFLLENBQUNLLE9BQU8sR0FBR0MsR0FBRztJQUVyQixHQUFLLENBQUNDLE9BQU8sR0FBRyxDQUFDO1FBQ2ZDLE9BQU8sRUFBRU4sS0FBSyxDQUFDTSxPQUFPO1FBQ3RCQyxJQUFJLEVBQUVBLElBQUk7UUFDVkMsS0FBSyxFQUFFQSxLQUFLO1FBQ1pDLE9BQU8sRUFBRUEsT0FBTztJQUNsQixDQUFDO0lBRUQsR0FBSyxDQUFDQyxhQUFhLEdBQUcsUUFBUSxDQUFQQyxDQUFDLEVBQUssQ0FBQztRQUM1QkEsQ0FBQyxDQUFDQyxjQUFjO1FBQ2hCQyxLQUFLLENBQUMsQ0FBYyxlQUFFLENBQUM7WUFDckJDLE1BQU0sRUFBRSxDQUFNO1lBQ2RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNaLE9BQU87WUFDNUJhLE9BQU8sRUFBRSxDQUFDO2dCQUNSLENBQWMsZUFBRSxDQUFrQjtZQUNwQyxDQUFDO1FBQ0gsQ0FBQyxFQUNFQyxJQUFJLENBQUMsUUFBUSxDQUFQQyxHQUFHO1lBQUtBLE1BQU0sQ0FBTkEsR0FBRyxDQUFDQyxJQUFJO1dBQ3RCRixJQUFJLENBQUMsUUFBUSxDQUFQRyxJQUFJO1lBQUtDLE1BQU0sQ0FBTkEsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUk7O0lBQ3BDLENBQUM7SUFDRCxNQUFNLDZFQUNIRyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFrQzs4RkFDOUNDLENBQUk7WUFBQ0QsU0FBUyxFQUFDLENBQVc7WUFBQ0UsUUFBUSxFQUFFbEIsYUFBYTs7NEZBQ2hEZSxDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBYTs7b0dBQ3pCRyxDQUFLOzRCQUNKQyxRQUFRLEVBQUUsUUFBUSxDQUFQbkIsQ0FBQztnQ0FBS29CLE1BQU0sQ0FBTkEsT0FBTyxDQUFDcEIsQ0FBQyxDQUFDcUIsTUFBTSxDQUFDQyxLQUFLOzs0QkFDdkNDLElBQUksRUFBQyxDQUFNOzRCQUNYQyxXQUFXLEVBQUMsQ0FBTTs0QkFDbEJULFNBQVMsRUFBQyxDQUE0Qzs7Ozs7O29HQUV2REcsQ0FBSzs0QkFDSkMsUUFBUSxFQUFFLFFBQVEsQ0FBUG5CLENBQUM7Z0NBQUt5QixNQUFNLENBQU5BLFFBQVEsQ0FBQ3pCLENBQUMsQ0FBQ3FCLE1BQU0sQ0FBQ0MsS0FBSzs7NEJBQ3hDQyxJQUFJLEVBQUMsQ0FBTTs0QkFDWEMsV0FBVyxFQUFDLENBQU87NEJBQ25CVCxTQUFTLEVBQUMsQ0FBNEM7Ozs7Ozs7Ozs7Ozs0RkFHekRXLENBQVE7b0JBQ1BQLFFBQVEsRUFBRSxRQUFRLENBQVBuQixDQUFDO3dCQUFLMkIsTUFBTSxDQUFOQSxVQUFVLENBQUMzQixDQUFDLENBQUNxQixNQUFNLENBQUNDLEtBQUs7O29CQUMxQ1AsU0FBUyxFQUFDLENBQW1EO29CQUM3RG5CLElBQUksRUFBQyxDQUFTO29CQUNkZ0MsRUFBRSxFQUFDLENBQVM7b0JBQ1pKLFdBQVcsRUFBQyxDQUFTOzs7Ozs7NEZBRXRCSyxDQUFNO29CQUFDZCxTQUFTLEVBQUMsQ0FBdUM7OEJBQUMsQ0FFMUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSVIsQ0FBQztHQXRESzNCLE9BQU87S0FBUEEsT0FBTztBQXdEYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29tbWVudC5qcz82NTBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IENvbW1lbnQgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgZW1haWxSZWYgPSB1c2VSZWYoKVxuICAgIGNvbnN0IGNvbW1lbnRSZWYgPSB1c2VSZWYoKVxuICAgIGNvbnN0IG5hbWVSZWYgPSB1c2VcblxuICBjb25zdCByZXFCb2R5ID0ge1xuICAgIGV2ZW50SWQ6IHByb3BzLmV2ZW50SWQsXG4gICAgbmFtZTogbmFtZSxcbiAgICBlbWFpbDogZW1haWwsXG4gICAgY29tbWVudDogY29tbWVudCxcbiAgfTtcblxuICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZmV0Y2goJy9hcGkvY29tbWVudCcsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxQm9keSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IGNvbnNvbGUubG9nKGRhdGEpKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPSdzcGFjZS15LTQnIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZ2FwLTYgJz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J05hbWUnXG4gICAgICAgICAgICBjbGFzc05hbWU9J2JvcmRlci1ncmF5LTcwMCBib3JkZXItMiByb3VuZGVkIHB4LTQgcHktMidcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VtYWlsJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPSdib3JkZXItZ3JheS03MDAgYm9yZGVyLTIgcm91bmRlZCBweC00IHB5LTInXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29tbWVudChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgY2xhc3NOYW1lPSdib3JkZXItZ3JheS03MDAgdy1mdWxsIGJvcmRlci0yIHJvdW5kZWQgcHgtNCBweS0yJ1xuICAgICAgICAgIG5hbWU9J2NvbW1lbnQnXG4gICAgICAgICAgaWQ9J2NvbW1lbnQnXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J0NvbW1lbnQnXG4gICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYmctYmxhY2sgcHgtNCBweS0yIHRleHQtd2hpdGUgcm91bmRlZCc+XG4gICAgICAgICAgQWRkIGNvbW1lbnRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwiQ29tbWVudCIsInByb3BzIiwiZW1haWxSZWYiLCJjb21tZW50UmVmIiwibmFtZVJlZiIsInVzZSIsInJlcUJvZHkiLCJldmVudElkIiwibmFtZSIsImVtYWlsIiwiY29tbWVudCIsInN1Ym1pdEhhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsIm9uQ2hhbmdlIiwic2V0TmFtZSIsInRhcmdldCIsInZhbHVlIiwidHlwZSIsInBsYWNlaG9sZGVyIiwic2V0RW1haWwiLCJ0ZXh0YXJlYSIsInNldENvbW1lbnQiLCJpZCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/comment.js\n");

/***/ })

});