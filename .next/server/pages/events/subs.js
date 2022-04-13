"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/events/subs";
exports.ids = ["pages/events/subs"];
exports.modules = {

/***/ "./pages/events/subs.js":
/*!******************************!*\
  !*** ./pages/events/subs.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Subs = ()=>{\n    const { 0: data1 , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const dataFetcher = async ()=>{\n            setLoading(true);\n            try {\n                await fetch('/api/subs').then((res)=>res.json()\n                ).then((data)=>setData(data.myData)\n                );\n            } catch (error) {\n                console.log('Error fetching data>>>>', error);\n            }\n        };\n        dataFetcher();\n        setLoading(false);\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/pages/events/subs.js\",\n                lineNumber: 24,\n                columnNumber: 19\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"space-y-2 px-12\",\n                children: data1.map((item, index)=>{\n                    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"border-b-2 border rounded \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-bold\",\n                                children: item.name\n                            }, void 0, false, {\n                                fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/pages/events/subs.js\",\n                                lineNumber: 29,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-light\",\n                                children: item.email\n                            }, void 0, false, {\n                                fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/pages/events/subs.js\",\n                                lineNumber: 30,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/pages/events/subs.js\",\n                        lineNumber: 28,\n                        columnNumber: 13\n                    }, undefined));\n                })\n            }, void 0, false, {\n                fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/pages/events/subs.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/pages/events/subs.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Subs);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ldmVudHMvc3Vicy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBa0Q7QUFFbEQsS0FBSyxDQUFDRyxJQUFJLE9BQVMsQ0FBQztJQUNsQixLQUFLLE1BQUVDLEtBQUksTUFBRUMsT0FBTyxNQUFJSiwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUNuQyxLQUFLLE1BQUVLLE9BQU8sTUFBRUMsVUFBVSxNQUFJTiwrQ0FBUSxDQUFDLEtBQUs7SUFFNUNDLGdEQUFTLEtBQU8sQ0FBQztRQUNmLEtBQUssQ0FBQ00sV0FBVyxhQUFlLENBQUM7WUFDL0JELFVBQVUsQ0FBQyxJQUFJO1lBQ2YsR0FBRyxDQUFDLENBQUM7Z0JBQ0gsS0FBSyxDQUFDRSxLQUFLLENBQUMsQ0FBVyxZQUNwQkMsSUFBSSxFQUFFQyxHQUFHLEdBQUtBLEdBQUcsQ0FBQ0MsSUFBSTtrQkFDdEJGLElBQUksRUFBRU4sSUFBSSxHQUFLQyxPQUFPLENBQUNELElBQUksQ0FBQ1MsTUFBTTs7WUFFdkMsQ0FBQyxDQUFDLEtBQUssRUFBRUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQXlCLDBCQUFFRixLQUFLO1lBQzlDLENBQUM7UUFDSCxDQUFDO1FBQ0ROLFdBQVc7UUFDWEQsVUFBVSxDQUFDLEtBQUs7SUFDbEIsQ0FBQztJQUNELE1BQU0sNkVBQ0hVLENBQUc7O1lBQ0RYLE9BQU8sZ0ZBQUtZLENBQUM7MEJBQUMsQ0FBVTs7Ozs7O3dGQUN4QkMsQ0FBRTtnQkFBQ0MsU0FBUyxFQUFDLENBQWlCOzBCQUM1QmhCLEtBQUksQ0FBQ2lCLEdBQUcsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEdBQUssQ0FBQztvQkFDMUIsTUFBTSw2RUFDSEMsQ0FBRTt3QkFBYUosU0FBUyxFQUFDLENBQTRCOzt3R0FDbkRGLENBQUM7Z0NBQUNFLFNBQVMsRUFBQyxDQUFXOzBDQUFFRSxJQUFJLENBQUNHLElBQUk7Ozs7Ozt3R0FDbENQLENBQUM7Z0NBQUNFLFNBQVMsRUFBQyxDQUFZOzBDQUFFRSxJQUFJLENBQUNJLEtBQUs7Ozs7Ozs7dUJBRjlCSCxLQUFLOzs7OztnQkFLbEIsQ0FBQzs7Ozs7Ozs7Ozs7O0FBSVQsQ0FBQztBQUVELGlFQUFlcEIsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm91dGluZy1hcHAvLi9wYWdlcy9ldmVudHMvc3Vicy5qcz80ZTU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTdWJzID0gKCkgPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGRhdGFGZXRjaGVyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGZldGNoKCcvYXBpL3N1YnMnKVxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHNldERhdGEoZGF0YS5teURhdGEpKTtcbiAgICAgICBcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBmZXRjaGluZyBkYXRhPj4+PicsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGRhdGFGZXRjaGVyKCk7XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7bG9hZGluZyAmJiA8cD5Mb2FkaW5nLi4uPC9wPn1cbiAgICAgIDx1bCBjbGFzc05hbWU9J3NwYWNlLXktMiBweC0xMic+XG4gICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT0nYm9yZGVyLWItMiBib3JkZXIgcm91bmRlZCAnPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+e2l0ZW0ubmFtZX08L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC1saWdodCc+e2l0ZW0uZW1haWx9PC9wPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdWJzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTdWJzIiwiZGF0YSIsInNldERhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImRhdGFGZXRjaGVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsIm15RGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImRpdiIsInAiLCJ1bCIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImxpIiwibmFtZSIsImVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/events/subs.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/events/subs.js"));
module.exports = __webpack_exports__;

})();