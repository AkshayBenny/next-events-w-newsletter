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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Comment = function(props) {\n    _s();\n    var emailRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var commentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var nameRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var email = emailRef.current.value;\n    var comment = commentRef.current.value;\n    var name = nameRef.current.value;\n    var reqBody = {\n        eventId: props.eventId,\n        name: name,\n        email: email,\n        comment: comment\n    };\n    var submitHandler = function(e) {\n        e.preventDefault();\n        fetch('/api/comment', {\n            method: 'POST',\n            body: JSON.stringify(reqBody),\n            headers: {\n                'Content-Type': 'application/json'\n            }\n        }).then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            return console.log(data);\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"space-y-4\",\n            onSubmit: submitHandler,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-6 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            ref: nameRef,\n                            type: \"text\",\n                            placeholder: \"Name\",\n                            className: \"border-gray-700 border-2 rounded px-4 py-2\"\n                        }, void 0, false, {\n                            fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/comment.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            ref: emailRef,\n                            type: \"text\",\n                            placeholder: \"Email\",\n                            className: \"border-gray-700 border-2 rounded px-4 py-2\"\n                        }, void 0, false, {\n                            fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/comment.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/comment.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    onChange: function(e) {\n                        return setComment(e.target.value);\n                    },\n                    className: \"border-gray-700 w-full border-2 rounded px-4 py-2\",\n                    name: \"comment\",\n                    id: \"comment\",\n                    placeholder: \"Comment\"\n                }, void 0, false, {\n                    fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/comment.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-black px-4 py-2 text-white rounded\",\n                    children: \"Add comment\"\n                }, void 0, false, {\n                    fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/comment.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/comment.js\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/components/comment.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, _this));\n};\n_s(Comment, \"IxFvtAuXkc8HfO2nnH6ZwW1dMtg=\");\n_c = Comment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comment);\nvar _c;\n$RefreshReg$(_c, \"Comment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1lbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFDOzs7QUFFckMsR0FBSyxDQUFDRSxPQUFPLEdBQUcsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQzs7SUFDMUIsR0FBSyxDQUFDQyxRQUFRLEdBQUdILDZDQUFNO0lBQ3ZCLEdBQUssQ0FBQ0ksVUFBVSxHQUFHSiw2Q0FBTTtJQUN6QixHQUFLLENBQUNLLE9BQU8sR0FBR0wsNkNBQU07SUFFdEIsR0FBSyxDQUFDTSxLQUFLLEdBQUdILFFBQVEsQ0FBQ0ksT0FBTyxDQUFDQyxLQUFLO0lBQ3BDLEdBQUssQ0FBQ0MsT0FBTyxHQUFHTCxVQUFVLENBQUNHLE9BQU8sQ0FBQ0MsS0FBSztJQUN4QyxHQUFLLENBQUNFLElBQUksR0FBR0wsT0FBTyxDQUFDRSxPQUFPLENBQUNDLEtBQUs7SUFFbEMsR0FBSyxDQUFDRyxPQUFPLEdBQUcsQ0FBQztRQUNmQyxPQUFPLEVBQUVWLEtBQUssQ0FBQ1UsT0FBTztRQUN0QkYsSUFBSSxFQUFFQSxJQUFJO1FBQ1ZKLEtBQUssRUFBRUEsS0FBSztRQUNaRyxPQUFPLEVBQUVBLE9BQU87SUFDbEIsQ0FBQztJQUVELEdBQUssQ0FBQ0ksYUFBYSxHQUFHLFFBQVEsQ0FBUEMsQ0FBQyxFQUFLLENBQUM7UUFDNUJBLENBQUMsQ0FBQ0MsY0FBYztRQUNoQkMsS0FBSyxDQUFDLENBQWMsZUFBRSxDQUFDO1lBQ3JCQyxNQUFNLEVBQUUsQ0FBTTtZQUNkQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDVCxPQUFPO1lBQzVCVSxPQUFPLEVBQUUsQ0FBQztnQkFDUixDQUFjLGVBQUUsQ0FBa0I7WUFDcEMsQ0FBQztRQUNILENBQUMsRUFDRUMsSUFBSSxDQUFDLFFBQVEsQ0FBUEMsR0FBRztZQUFLQSxNQUFNLENBQU5BLEdBQUcsQ0FBQ0MsSUFBSTtXQUN0QkYsSUFBSSxDQUFDLFFBQVEsQ0FBUEcsSUFBSTtZQUFLQyxNQUFNLENBQU5BLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJOztJQUNwQyxDQUFDO0lBQ0QsTUFBTSw2RUFDSEcsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBa0M7OEZBQzlDQyxDQUFJO1lBQUNELFNBQVMsRUFBQyxDQUFXO1lBQUNFLFFBQVEsRUFBRWxCLGFBQWE7OzRGQUNoRGUsQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQWE7O29HQUN6QkcsQ0FBSzs0QkFDSkMsR0FBRyxFQUFFNUIsT0FBTzs0QkFDWjZCLElBQUksRUFBQyxDQUFNOzRCQUNYQyxXQUFXLEVBQUMsQ0FBTTs0QkFDbEJOLFNBQVMsRUFBQyxDQUE0Qzs7Ozs7O29HQUV2REcsQ0FBSzs0QkFDSkMsR0FBRyxFQUFFOUIsUUFBUTs0QkFDYitCLElBQUksRUFBQyxDQUFNOzRCQUNYQyxXQUFXLEVBQUMsQ0FBTzs0QkFDbkJOLFNBQVMsRUFBQyxDQUE0Qzs7Ozs7Ozs7Ozs7OzRGQUd6RE8sQ0FBUTtvQkFDUEMsUUFBUSxFQUFFLFFBQVEsQ0FBUHZCLENBQUM7d0JBQUt3QixNQUFNLENBQU5BLFVBQVUsQ0FBQ3hCLENBQUMsQ0FBQ3lCLE1BQU0sQ0FBQy9CLEtBQUs7O29CQUMxQ3FCLFNBQVMsRUFBQyxDQUFtRDtvQkFDN0RuQixJQUFJLEVBQUMsQ0FBUztvQkFDZDhCLEVBQUUsRUFBQyxDQUFTO29CQUNaTCxXQUFXLEVBQUMsQ0FBUzs7Ozs7OzRGQUV0Qk0sQ0FBTTtvQkFBQ1osU0FBUyxFQUFDLENBQXVDOzhCQUFDLENBRTFEOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlSLENBQUM7R0ExREs1QixPQUFPO0tBQVBBLE9BQU87QUE0RGIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbW1lbnQuanM/NjUwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBDb21tZW50ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGVtYWlsUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGNvbW1lbnRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgbmFtZVJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IGVtYWlsID0gZW1haWxSZWYuY3VycmVudC52YWx1ZTtcbiAgY29uc3QgY29tbWVudCA9IGNvbW1lbnRSZWYuY3VycmVudC52YWx1ZTtcbiAgY29uc3QgbmFtZSA9IG5hbWVSZWYuY3VycmVudC52YWx1ZTtcblxuICBjb25zdCByZXFCb2R5ID0ge1xuICAgIGV2ZW50SWQ6IHByb3BzLmV2ZW50SWQsXG4gICAgbmFtZTogbmFtZSxcbiAgICBlbWFpbDogZW1haWwsXG4gICAgY29tbWVudDogY29tbWVudCxcbiAgfTtcblxuICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZmV0Y2goJy9hcGkvY29tbWVudCcsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxQm9keSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IGNvbnNvbGUubG9nKGRhdGEpKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPSdzcGFjZS15LTQnIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZ2FwLTYgJz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHJlZj17bmFtZVJlZn1cbiAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nTmFtZSdcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nYm9yZGVyLWdyYXktNzAwIGJvcmRlci0yIHJvdW5kZWQgcHgtNCBweS0yJ1xuICAgICAgICAgIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICByZWY9e2VtYWlsUmVmfVxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbCdcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nYm9yZGVyLWdyYXktNzAwIGJvcmRlci0yIHJvdW5kZWQgcHgtNCBweS0yJ1xuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvbW1lbnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIGNsYXNzTmFtZT0nYm9yZGVyLWdyYXktNzAwIHctZnVsbCBib3JkZXItMiByb3VuZGVkIHB4LTQgcHktMidcbiAgICAgICAgICBuYW1lPSdjb21tZW50J1xuICAgICAgICAgIGlkPSdjb21tZW50J1xuICAgICAgICAgIHBsYWNlaG9sZGVyPSdDb21tZW50J1xuICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JnLWJsYWNrIHB4LTQgcHktMiB0ZXh0LXdoaXRlIHJvdW5kZWQnPlxuICAgICAgICAgIEFkZCBjb21tZW50XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsIkNvbW1lbnQiLCJwcm9wcyIsImVtYWlsUmVmIiwiY29tbWVudFJlZiIsIm5hbWVSZWYiLCJlbWFpbCIsImN1cnJlbnQiLCJ2YWx1ZSIsImNvbW1lbnQiLCJuYW1lIiwicmVxQm9keSIsImV2ZW50SWQiLCJzdWJtaXRIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJyZWYiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ0ZXh0YXJlYSIsIm9uQ2hhbmdlIiwic2V0Q29tbWVudCIsInRhcmdldCIsImlkIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/comment.js\n");

/***/ })

});