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
exports.id = "pages/api/comment";
exports.ids = ["pages/api/comment"];
exports.modules = {

/***/ "(api)/./pages/api/comment.js":
/*!******************************!*\
  !*** ./pages/api/comment.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    if (req.method === 'POST') {\n        const data = await req.body;\n        const userEmail = data.email;\n        const userName = data.name;\n        const userComment = data.comment;\n        if (!/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/.test(userEmail)) {\n            res.json({\n                message: 'Invalid email address'\n            });\n        }\n        res.status(201).json({\n            email: userEmail\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29tbWVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsZUFBZUEsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQy9DLEVBQUUsRUFBRUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssQ0FBTSxPQUFFLENBQUM7UUFDMUIsS0FBSyxDQUFDQyxJQUFJLEdBQUcsS0FBSyxDQUFDSCxHQUFHLENBQUNJLElBQUk7UUFDM0IsS0FBSyxDQUFDQyxTQUFTLEdBQUdGLElBQUksQ0FBQ0csS0FBSztRQUM1QixLQUFLLENBQUNDLFFBQVEsR0FBR0osSUFBSSxDQUFDSyxJQUFJO1FBQzFCLEtBQUssQ0FBQ0MsV0FBVyxHQUFHTixJQUFJLENBQUNPLE9BQU87UUFFaEMsRUFBRSxtREFBbURDLElBQUksQ0FBQ04sU0FBUyxHQUFHLENBQUM7WUFDckVKLEdBQUcsQ0FBQ1csSUFBSSxDQUFDLENBQUM7Z0JBQUNDLE9BQU8sRUFBRSxDQUF1QjtZQUFDLENBQUM7UUFDL0MsQ0FBQztRQUdEWixHQUFHLENBQUNhLE1BQU0sQ0FBQyxHQUFHLEVBQUVGLElBQUksQ0FBQyxDQUFDO1lBQUNOLEtBQUssRUFBRUQsU0FBUztRQUFDLENBQUM7SUFDM0MsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb3V0aW5nLWFwcC8uL3BhZ2VzL2FwaS9jb21tZW50LmpzPzMzZTMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcS5ib2R5O1xuICAgIGNvbnN0IHVzZXJFbWFpbCA9IGRhdGEuZW1haWw7XG4gICAgY29uc3QgdXNlck5hbWUgPSBkYXRhLm5hbWU7XG4gICAgY29uc3QgdXNlckNvbW1lbnQgPSBkYXRhLmNvbW1lbnQ7XG5cbiAgICBpZiAoIS9eXFx3KyhbXFwuLV0/XFx3KykqQFxcdysoW1xcLi1dP1xcdyspKihcXC5cXHd7MiwzfSkrJC8udGVzdCh1c2VyRW1haWwpKSB7XG4gICAgICByZXMuanNvbih7IG1lc3NhZ2U6ICdJbnZhbGlkIGVtYWlsIGFkZHJlc3MnIH0pO1xuICAgIH0gXG5cblxuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgZW1haWw6IHVzZXJFbWFpbCB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsInVzZXJFbWFpbCIsImVtYWlsIiwidXNlck5hbWUiLCJuYW1lIiwidXNlckNvbW1lbnQiLCJjb21tZW50IiwidGVzdCIsImpzb24iLCJtZXNzYWdlIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/comment.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/comment.js"));
module.exports = __webpack_exports__;

})();