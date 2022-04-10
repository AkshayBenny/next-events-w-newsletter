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
exports.id = "pages/api/newsletter";
exports.ids = ["pages/api/newsletter"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/newsletter.js":
/*!*********************************!*\
  !*** ./pages/api/newsletter.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\n// const extractDataFromFile = async (path) => {\n//   return JSON.parse(fs.readFileSync(path, 'utf-8'));\n// };\nasync function handler(req, res) {\n    if (req.method === 'POST') {\n        // const path = await path.join(process.cwd(), 'data.json');\n        const email = await req.body.email;\n        // const data = await extractDataFromFile(path);\n        // const newData = {\n        //   email: email,\n        // };\n        // data.push(newData);\n        // fs.writeFileSync(path, JSON.stringify(data));\n        res.status(201).json({\n            email: email\n        });\n    } else {\n        res.status(200).json({\n            message: 'Request recieved'\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3c2xldHRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLEVBQTZFO0FBRXREO0FBQ0o7QUFFbkIsRUFBZ0Q7QUFDaEQsRUFBdUQ7QUFDdkQsRUFBSztBQUVVLGVBQWVFLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUMvQyxFQUFFLEVBQUVELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLENBQU0sT0FBRSxDQUFDO1FBQzFCLEVBQTREO1FBQzVELEtBQUssQ0FBQ0MsS0FBSyxHQUFHLEtBQUssQ0FBQ0gsR0FBRyxDQUFDSSxJQUFJLENBQUNELEtBQUs7UUFDbEMsRUFBZ0Q7UUFDaEQsRUFBb0I7UUFDcEIsRUFBa0I7UUFDbEIsRUFBSztRQUNMLEVBQXNCO1FBQ3RCLEVBQWdEO1FBRWhERixHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNILEtBQUssRUFBRUEsS0FBSztRQUFDLENBQUM7SUFDdkMsQ0FBQyxNQUFNLENBQUM7UUFDTkYsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDQyxPQUFPLEVBQUUsQ0FBa0I7UUFBQyxDQUFDO0lBQ3RELENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm91dGluZy1hcHAvLi9wYWdlcy9hcGkvbmV3c2xldHRlci5qcz8xMGFiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5cbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcblxuLy8gY29uc3QgZXh0cmFjdERhdGFGcm9tRmlsZSA9IGFzeW5jIChwYXRoKSA9PiB7XG4vLyAgIHJldHVybiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhwYXRoLCAndXRmLTgnKSk7XG4vLyB9O1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAvLyBjb25zdCBwYXRoID0gYXdhaXQgcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdkYXRhLmpzb24nKTtcbiAgICBjb25zdCBlbWFpbCA9IGF3YWl0IHJlcS5ib2R5LmVtYWlsO1xuICAgIC8vIGNvbnN0IGRhdGEgPSBhd2FpdCBleHRyYWN0RGF0YUZyb21GaWxlKHBhdGgpO1xuICAgIC8vIGNvbnN0IG5ld0RhdGEgPSB7XG4gICAgLy8gICBlbWFpbDogZW1haWwsXG4gICAgLy8gfTtcbiAgICAvLyBkYXRhLnB1c2gobmV3RGF0YSk7XG4gICAgLy8gZnMud3JpdGVGaWxlU3luYyhwYXRoLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG5cbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IGVtYWlsOiBlbWFpbCB9KTtcbiAgfSBlbHNlIHtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICdSZXF1ZXN0IHJlY2lldmVkJyB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInBhdGgiLCJmcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJlbWFpbCIsImJvZHkiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/newsletter.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/newsletter.js"));
module.exports = __webpack_exports__;

})();