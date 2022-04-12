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
exports.id = "pages/api/comment/[eventId]";
exports.ids = ["pages/api/comment/[eventId]"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/comment/[eventId].js":
/*!****************************************!*\
  !*** ./pages/api/comment/[eventId].js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect('mongodb+srv://admin:admin@cluster0.xir2j.mongodb.net/newsletter?retryWrites=true&w=majority');\n    if (req.method === 'POST') {\n        const id = req.query.eventId;\n        const data = await req.body;\n        const userEmail = data.email;\n        const userName = data.name;\n        const userComment = data.comment;\n        const newComment = {\n            eventId: id,\n            email: userEmail,\n            name: userName,\n            comment: userComment\n        };\n        if (!/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/.test(userEmail)) {\n            res.status(422).json({\n                message: 'Invalid email address'\n            });\n        } else {\n            const db = client.db();\n            await db.collection('comments').insertOne(newComment);\n            res.status(201).json({\n                myData: newComment\n            });\n        }\n    }\n    if (req.method === 'GET') {\n        const db = client.db();\n        const commentsArray = await db.collection('comments').find().sort({\n            _id: -1\n        }).toArray();\n        res.status(200).json({\n            comments: commentsArray\n        });\n    }\n    client.close();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29tbWVudC9bZXZlbnRJZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFDO0FBRXRCLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUMvQyxLQUFLLENBQUNDLE1BQU0sR0FBRyxLQUFLLENBQUNKLHdEQUFtQixDQUN0QyxDQUE2RjtJQUUvRixFQUFFLEVBQUVFLEdBQUcsQ0FBQ0ksTUFBTSxLQUFLLENBQU0sT0FBRSxDQUFDO1FBQzFCLEtBQUssQ0FBQ0MsRUFBRSxHQUFHTCxHQUFHLENBQUNNLEtBQUssQ0FBQ0MsT0FBTztRQUM1QixLQUFLLENBQUNDLElBQUksR0FBRyxLQUFLLENBQUNSLEdBQUcsQ0FBQ1MsSUFBSTtRQUMzQixLQUFLLENBQUNDLFNBQVMsR0FBR0YsSUFBSSxDQUFDRyxLQUFLO1FBQzVCLEtBQUssQ0FBQ0MsUUFBUSxHQUFHSixJQUFJLENBQUNLLElBQUk7UUFDMUIsS0FBSyxDQUFDQyxXQUFXLEdBQUdOLElBQUksQ0FBQ08sT0FBTztRQUNoQyxLQUFLLENBQUNDLFVBQVUsR0FBRyxDQUFDO1lBQ2xCVCxPQUFPLEVBQUVGLEVBQUU7WUFDWE0sS0FBSyxFQUFFRCxTQUFTO1lBQ2hCRyxJQUFJLEVBQUVELFFBQVE7WUFDZEcsT0FBTyxFQUFFRCxXQUFXO1FBQ3RCLENBQUM7UUFFRCxFQUFFLG1EQUFtREcsSUFBSSxDQUFDUCxTQUFTLEdBQUcsQ0FBQztZQUNyRVQsR0FBRyxDQUFDaUIsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7Z0JBQUNDLE9BQU8sRUFBRSxDQUF1QjtZQUFDLENBQUM7UUFDM0QsQ0FBQyxNQUFNLENBQUM7WUFDTixLQUFLLENBQUNDLEVBQUUsR0FBR25CLE1BQU0sQ0FBQ21CLEVBQUU7WUFDcEIsS0FBSyxDQUFDQSxFQUFFLENBQUNDLFVBQVUsQ0FBQyxDQUFVLFdBQUVDLFNBQVMsQ0FBQ1AsVUFBVTtZQUVwRGYsR0FBRyxDQUFDaUIsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7Z0JBQUNLLE1BQU0sRUFBRVIsVUFBVTtZQUFDLENBQUM7UUFDN0MsQ0FBQztJQUNILENBQUM7SUFFRCxFQUFFLEVBQUVoQixHQUFHLENBQUNJLE1BQU0sS0FBSyxDQUFLLE1BQUUsQ0FBQztRQUN6QixLQUFLLENBQUNpQixFQUFFLEdBQUduQixNQUFNLENBQUNtQixFQUFFO1FBQ3BCLEtBQUssQ0FBQ0ksYUFBYSxHQUFHLEtBQUssQ0FBQ0osRUFBRSxDQUMzQkMsVUFBVSxDQUFDLENBQVUsV0FDckJJLElBQUksR0FDSkMsSUFBSSxDQUFDLENBQUM7WUFBQ0MsR0FBRyxHQUFHLENBQUM7UUFBQyxDQUFDLEVBQ2hCQyxPQUFPO1FBQ1Y1QixHQUFHLENBQUNpQixNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDVyxRQUFRLEVBQUVMLGFBQWE7UUFBQyxDQUFDO0lBQ2xELENBQUM7SUFDRHZCLE1BQU0sQ0FBQzZCLEtBQUs7QUFDZCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm91dGluZy1hcHAvLi9wYWdlcy9hcGkvY29tbWVudC9bZXZlbnRJZF0uanM/OWM4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4gICAgJ21vbmdvZGIrc3J2Oi8vYWRtaW46YWRtaW5AY2x1c3RlcjAueGlyMmoubW9uZ29kYi5uZXQvbmV3c2xldHRlcj9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknXG4gICk7XG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICBjb25zdCBpZCA9IHJlcS5xdWVyeS5ldmVudElkO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXEuYm9keTtcbiAgICBjb25zdCB1c2VyRW1haWwgPSBkYXRhLmVtYWlsO1xuICAgIGNvbnN0IHVzZXJOYW1lID0gZGF0YS5uYW1lO1xuICAgIGNvbnN0IHVzZXJDb21tZW50ID0gZGF0YS5jb21tZW50O1xuICAgIGNvbnN0IG5ld0NvbW1lbnQgPSB7XG4gICAgICBldmVudElkOiBpZCxcbiAgICAgIGVtYWlsOiB1c2VyRW1haWwsXG4gICAgICBuYW1lOiB1c2VyTmFtZSxcbiAgICAgIGNvbW1lbnQ6IHVzZXJDb21tZW50LFxuICAgIH07XG5cbiAgICBpZiAoIS9eXFx3KyhbXFwuLV0/XFx3KykqQFxcdysoW1xcLi1dP1xcdyspKihcXC5cXHd7MiwzfSkrJC8udGVzdCh1c2VyRW1haWwpKSB7XG4gICAgICByZXMuc3RhdHVzKDQyMikuanNvbih7IG1lc3NhZ2U6ICdJbnZhbGlkIGVtYWlsIGFkZHJlc3MnIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuICAgICAgYXdhaXQgZGIuY29sbGVjdGlvbignY29tbWVudHMnKS5pbnNlcnRPbmUobmV3Q29tbWVudCk7XG5cbiAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbXlEYXRhOiBuZXdDb21tZW50IH0pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG4gICAgY29uc3QgY29tbWVudHNBcnJheSA9IGF3YWl0IGRiXG4gICAgICAuY29sbGVjdGlvbignY29tbWVudHMnKVxuICAgICAgLmZpbmQoKVxuICAgICAgLnNvcnQoeyBfaWQ6IC0xIH0pXG4gICAgICAudG9BcnJheSgpO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgY29tbWVudHM6IGNvbW1lbnRzQXJyYXkgfSk7XG4gIH1cbiAgY2xpZW50LmNsb3NlKCk7XG59XG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY2xpZW50IiwiY29ubmVjdCIsIm1ldGhvZCIsImlkIiwicXVlcnkiLCJldmVudElkIiwiZGF0YSIsImJvZHkiLCJ1c2VyRW1haWwiLCJlbWFpbCIsInVzZXJOYW1lIiwibmFtZSIsInVzZXJDb21tZW50IiwiY29tbWVudCIsIm5ld0NvbW1lbnQiLCJ0ZXN0Iiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJkYiIsImNvbGxlY3Rpb24iLCJpbnNlcnRPbmUiLCJteURhdGEiLCJjb21tZW50c0FycmF5IiwiZmluZCIsInNvcnQiLCJfaWQiLCJ0b0FycmF5IiwiY29tbWVudHMiLCJjbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/comment/[eventId].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/comment/[eventId].js"));
module.exports = __webpack_exports__;

})();