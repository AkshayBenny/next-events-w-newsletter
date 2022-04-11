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

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/newsletter.js":
/*!*********************************!*\
  !*** ./pages/api/newsletter.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const url = 'mongodb+srv://admin:admin@cluster0.xir2j.mongodb.net/newsletter?retryWrites=true&w=majority';\n    if (req.method === 'POST') {\n        const email = await req.body.email;\n        if (!email) {\n            res.json({\n                message: 'No email added'\n            });\n        } else if (!/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/.test(email)) {\n            res.status(422).json({\n                message: 'Invalid email address'\n            });\n        } else {\n            const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(url);\n            const db = client.db();\n            await db.collection('emails').insertOne({\n                email: email\n            });\n            client.close();\n            res.status(201).json({\n                email: email\n            });\n        }\n    } else {\n        res.status(200).json({\n            message: 'Request recieved'\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3c2xldHRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFFdEIsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQy9DLEtBQUssQ0FBQ0MsR0FBRyxHQUNQLENBQTZGO0lBQy9GLEVBQUUsRUFBRUYsR0FBRyxDQUFDRyxNQUFNLEtBQUssQ0FBTSxPQUFFLENBQUM7UUFDMUIsS0FBSyxDQUFDQyxLQUFLLEdBQUcsS0FBSyxDQUFDSixHQUFHLENBQUNLLElBQUksQ0FBQ0QsS0FBSztRQUNsQyxFQUFFLEdBQUdBLEtBQUssRUFBRSxDQUFDO1lBQ1hILEdBQUcsQ0FBQ0ssSUFBSSxDQUFDLENBQUM7Z0JBQUNDLE9BQU8sRUFBRSxDQUFnQjtZQUFDLENBQUM7UUFDeEMsQ0FBQyxNQUFNLEVBQUUsbURBQW1EQyxJQUFJLENBQUNKLEtBQUssR0FBRyxDQUFDO1lBQ3hFSCxHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLEVBQUVILElBQUksQ0FBQyxDQUFDO2dCQUFDQyxPQUFPLEVBQUUsQ0FBdUI7WUFBQyxDQUFDO1FBQzNELENBQUMsTUFBTSxDQUFDO1lBQ04sS0FBSyxDQUFDRyxNQUFNLEdBQUcsS0FBSyxDQUFDWix3REFBbUIsQ0FBQ0ksR0FBRztZQUU1QyxLQUFLLENBQUNVLEVBQUUsR0FBR0YsTUFBTSxDQUFDRSxFQUFFO1lBQ3BCLEtBQUssQ0FBQ0EsRUFBRSxDQUFDQyxVQUFVLENBQUMsQ0FBUSxTQUFFQyxTQUFTLENBQUMsQ0FBQztnQkFBQ1YsS0FBSyxFQUFFQSxLQUFLO1lBQUMsQ0FBQztZQUN4RE0sTUFBTSxDQUFDSyxLQUFLO1lBQ1pkLEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLEdBQUcsRUFBRUgsSUFBSSxDQUFDLENBQUM7Z0JBQUNGLEtBQUssRUFBRUEsS0FBSztZQUFDLENBQUM7UUFDdkMsQ0FBQztJQUNILENBQUMsTUFBTSxDQUFDO1FBQ05ILEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLEdBQUcsRUFBRUgsSUFBSSxDQUFDLENBQUM7WUFBQ0MsT0FBTyxFQUFFLENBQWtCO1FBQUMsQ0FBQztJQUN0RCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JvdXRpbmctYXBwLy4vcGFnZXMvYXBpL25ld3NsZXR0ZXIuanM/MTBhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHVybCA9XG4gICAgJ21vbmdvZGIrc3J2Oi8vYWRtaW46YWRtaW5AY2x1c3RlcjAueGlyMmoubW9uZ29kYi5uZXQvbmV3c2xldHRlcj9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknO1xuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgY29uc3QgZW1haWwgPSBhd2FpdCByZXEuYm9keS5lbWFpbDtcbiAgICBpZiAoIWVtYWlsKSB7XG4gICAgICByZXMuanNvbih7IG1lc3NhZ2U6ICdObyBlbWFpbCBhZGRlZCcgfSk7XG4gICAgfSBlbHNlIGlmICghL15cXHcrKFtcXC4tXT9cXHcrKSpAXFx3KyhbXFwuLV0/XFx3KykqKFxcLlxcd3syLDN9KSskLy50ZXN0KGVtYWlsKSkge1xuICAgICAgcmVzLnN0YXR1cyg0MjIpLmpzb24oeyBtZXNzYWdlOiAnSW52YWxpZCBlbWFpbCBhZGRyZXNzJyB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCh1cmwpO1xuXG4gICAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuICAgICAgYXdhaXQgZGIuY29sbGVjdGlvbignZW1haWxzJykuaW5zZXJ0T25lKHsgZW1haWw6IGVtYWlsIH0pO1xuICAgICAgY2xpZW50LmNsb3NlKCk7XG4gICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IGVtYWlsOiBlbWFpbCB9KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnUmVxdWVzdCByZWNpZXZlZCcgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ1cmwiLCJtZXRob2QiLCJlbWFpbCIsImJvZHkiLCJqc29uIiwibWVzc2FnZSIsInRlc3QiLCJzdGF0dXMiLCJjbGllbnQiLCJjb25uZWN0IiwiZGIiLCJjb2xsZWN0aW9uIiwiaW5zZXJ0T25lIiwiY2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/newsletter.js\n");

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