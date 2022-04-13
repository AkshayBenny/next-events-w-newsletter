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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Subs = ()=>{\n    const { 0: data1 , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const dataFetcher = async ()=>{\n            try {\n                await fetch('/api/subs').then((res)=>res.json()\n                ).then((data)=>setData(data.myData)\n                );\n            } catch (error) {\n                console.log('Error fetching data>>>>', error);\n            }\n        };\n        dataFetcher();\n    });\n    console.log(loading);\n    if (!data1) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"No data found\"\n        }, void 0, false, {\n            fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/pages/events/subs.js\",\n            lineNumber: 22,\n            columnNumber: 12\n        }, undefined));\n    }\n    if (data1.length === 0) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/pages/events/subs.js\",\n            lineNumber: 26,\n            columnNumber: 12\n        }, undefined));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"space-y-2 px-12\",\n            children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading\"\n            }, void 0, false, {\n                fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/pages/events/subs.js\",\n                lineNumber: 33,\n                columnNumber: 11\n            }, undefined) : data1.map((item, index)=>{\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"border-b-2 border rounded \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-bold\",\n                            children: item.name\n                        }, void 0, false, {\n                            fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/pages/events/subs.js\",\n                            lineNumber: 38,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-light\",\n                            children: item.email\n                        }, void 0, false, {\n                            fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/pages/events/subs.js\",\n                            lineNumber: 39,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, index, true, {\n                    fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/pages/events/subs.js\",\n                    lineNumber: 37,\n                    columnNumber: 15\n                }, undefined));\n            })\n        }, void 0, false, {\n            fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/pages/events/subs.js\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/akshay/Other/my-repos/next-events-w-newsletter/pages/events/subs.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Subs);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ldmVudHMvc3Vicy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBa0Q7QUFFbEQsS0FBSyxDQUFDRyxJQUFJLE9BQVMsQ0FBQztJQUNsQixLQUFLLE1BQUVDLEtBQUksTUFBRUMsT0FBTyxNQUFJSiwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUNuQyxLQUFLLE1BQUVLLE9BQU8sTUFBRUMsVUFBVSxNQUFJTiwrQ0FBUSxDQUFDLEtBQUs7SUFFNUNDLGdEQUFTLEtBQU8sQ0FBQztRQUNmLEtBQUssQ0FBQ00sV0FBVyxhQUFlLENBQUM7WUFDL0IsR0FBRyxDQUFDLENBQUM7Z0JBQ0gsS0FBSyxDQUFDQyxLQUFLLENBQUMsQ0FBVyxZQUNwQkMsSUFBSSxFQUFFQyxHQUFHLEdBQUtBLEdBQUcsQ0FBQ0MsSUFBSTtrQkFDdEJGLElBQUksRUFBRU4sSUFBSSxHQUFLQyxPQUFPLENBQUNELElBQUksQ0FBQ1MsTUFBTTs7WUFDdkMsQ0FBQyxDQUFDLEtBQUssRUFBRUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQXlCLDBCQUFFRixLQUFLO1lBQzlDLENBQUM7UUFDSCxDQUFDO1FBQ0ROLFdBQVc7SUFDYixDQUFDO0lBQ0RPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVixPQUFPO0lBRW5CLEVBQUUsR0FBR0YsS0FBSSxFQUFFLENBQUM7UUFDVixNQUFNLDZFQUFFYSxDQUFDO3NCQUFDLENBQWE7Ozs7OztJQUN6QixDQUFDO0lBRUQsRUFBRSxFQUFFYixLQUFJLENBQUNjLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUN0QixNQUFNLDZFQUFFQyxDQUFHO3NCQUFDLENBQVU7Ozs7OztJQUN4QixDQUFDO0lBRUQsTUFBTSw2RUFDSEEsQ0FBRzs4RkFDREMsQ0FBRTtZQUFDQyxTQUFTLEVBQUMsQ0FBaUI7c0JBQzVCZixPQUFPLCtFQUNMVyxDQUFDOzBCQUFDLENBQU87Ozs7OzRCQUVWYixLQUFJLENBQUNrQixHQUFHLEVBQUVDLElBQUksRUFBRUMsS0FBSyxHQUFLLENBQUM7Z0JBQ3pCLE1BQU0sNkVBQ0hDLENBQUU7b0JBQWFKLFNBQVMsRUFBQyxDQUE0Qjs7b0dBQ25ESixDQUFDOzRCQUFDSSxTQUFTLEVBQUMsQ0FBVztzQ0FBRUUsSUFBSSxDQUFDRyxJQUFJOzs7Ozs7b0dBQ2xDVCxDQUFDOzRCQUFDSSxTQUFTLEVBQUMsQ0FBWTtzQ0FBRUUsSUFBSSxDQUFDSSxLQUFLOzs7Ozs7O21CQUY5QkgsS0FBSzs7Ozs7WUFLbEIsQ0FBQzs7Ozs7Ozs7Ozs7QUFLWCxDQUFDO0FBRUQsaUVBQWVyQixJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb3V0aW5nLWFwcC8uL3BhZ2VzL2V2ZW50cy9zdWJzLmpzPzRlNTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFN1YnMgPSAoKSA9PiB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZGF0YUZldGNoZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBmZXRjaCgnL2FwaS9zdWJzJylcbiAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBzZXREYXRhKGRhdGEubXlEYXRhKSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgZmV0Y2hpbmcgZGF0YT4+Pj4nLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcbiAgICBkYXRhRmV0Y2hlcigpO1xuICB9KTtcbiAgY29uc29sZS5sb2cobG9hZGluZyk7XG5cbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIDxwPk5vIGRhdGEgZm91bmQ8L3A+O1xuICB9XG5cbiAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDx1bCBjbGFzc05hbWU9J3NwYWNlLXktMiBweC0xMic+XG4gICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgIDxwPkxvYWRpbmc8L3A+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPSdib3JkZXItYi0yIGJvcmRlciByb3VuZGVkICc+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmb250LWJvbGQnPntpdGVtLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC1saWdodCc+e2l0ZW0uZW1haWx9PC9wPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICApfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN1YnM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlN1YnMiLCJkYXRhIiwic2V0RGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGF0YUZldGNoZXIiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwibXlEYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicCIsImxlbmd0aCIsImRpdiIsInVsIiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsImluZGV4IiwibGkiLCJuYW1lIiwiZW1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/events/subs.js\n");

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