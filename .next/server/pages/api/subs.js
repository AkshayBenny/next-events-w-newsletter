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
exports.id = "pages/api/subs";
exports.ids = ["pages/api/subs"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/subs.js":
/*!***************************!*\
  !*** ./pages/api/subs.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const connectDB = async ()=>{\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect('mongodb+srv://admin:admin@cluster0.xir2j.mongodb.net/newsletter?retryWrites=true&w=majority');\n        return client;\n    };\n    const getComment = async (client)=>{\n        const db = client.db();\n        const commentsArray = await db.collection('comments').find().sort({\n            _id: -1\n        }).toArray();\n        return commentsArray;\n    };\n    if (req.method === 'GET') {\n        let client;\n        try {\n            client = await connectDB();\n        } catch (error) {\n            res.status(500).json({\n                message: 'Could not connect to DB'\n            });\n            return;\n        }\n        try {\n            const commentsArray = await getComment(client);\n            res.status(201).json({\n                myData: commentsArray\n            });\n            client.close();\n        } catch (error1) {\n            res.status(500).json({\n                message: 'Could no fetch data'\n            });\n            return;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3Vicy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFFdEIsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQy9DLEtBQUssQ0FBQ0MsU0FBUyxhQUFlLENBQUM7UUFDN0IsS0FBSyxDQUFDQyxNQUFNLEdBQUcsS0FBSyxDQUFDTCx3REFBbUIsQ0FDdEMsQ0FBNkY7UUFFL0YsTUFBTSxDQUFDSyxNQUFNO0lBQ2YsQ0FBQztJQUVELEtBQUssQ0FBQ0UsVUFBVSxVQUFVRixNQUFNLEdBQUssQ0FBQztRQUNwQyxLQUFLLENBQUNHLEVBQUUsR0FBR0gsTUFBTSxDQUFDRyxFQUFFO1FBQ3BCLEtBQUssQ0FBQ0MsYUFBYSxHQUFHLEtBQUssQ0FBQ0QsRUFBRSxDQUMzQkUsVUFBVSxDQUFDLENBQVUsV0FDckJDLElBQUksR0FDSkMsSUFBSSxDQUFDLENBQUM7WUFBQ0MsR0FBRyxHQUFHLENBQUM7UUFBQyxDQUFDLEVBQ2hCQyxPQUFPO1FBRVYsTUFBTSxDQUFDTCxhQUFhO0lBQ3RCLENBQUM7SUFFRCxFQUFFLEVBQUVQLEdBQUcsQ0FBQ2EsTUFBTSxLQUFLLENBQUssTUFBRSxDQUFDO1FBQ3pCLEdBQUcsQ0FBQ1YsTUFBTTtRQUNWLEdBQUcsQ0FBQyxDQUFDO1lBQ0hBLE1BQU0sR0FBRyxLQUFLLENBQUNELFNBQVM7UUFDMUIsQ0FBQyxDQUFDLEtBQUssRUFBRVksS0FBSyxFQUFFLENBQUM7WUFDZmIsR0FBRyxDQUFDYyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztnQkFBQ0MsT0FBTyxFQUFFLENBQXlCO1lBQUMsQ0FBQztZQUMzRCxNQUFNO1FBQ1IsQ0FBQztRQUVELEdBQUcsQ0FBQyxDQUFDO1lBQ0gsS0FBSyxDQUFDVixhQUFhLEdBQUcsS0FBSyxDQUFDRixVQUFVLENBQUNGLE1BQU07WUFDN0NGLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7Z0JBQUNFLE1BQU0sRUFBRVgsYUFBYTtZQUFDLENBQUM7WUFDOUNKLE1BQU0sQ0FBQ2dCLEtBQUs7UUFDZCxDQUFDLENBQUMsS0FBSyxFQUFFTCxNQUFLLEVBQUUsQ0FBQztZQUNmYixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO2dCQUFDQyxPQUFPLEVBQUUsQ0FBcUI7WUFBQyxDQUFDO1lBQ3ZELE1BQU07UUFDUixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb3V0aW5nLWFwcC8uL3BhZ2VzL2FwaS9zdWJzLmpzPzdmNDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCBjb25uZWN0REIgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcbiAgICAgICdtb25nb2RiK3NydjovL2FkbWluOmFkbWluQGNsdXN0ZXIwLnhpcjJqLm1vbmdvZGIubmV0L25ld3NsZXR0ZXI/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5J1xuICAgICk7XG4gICAgcmV0dXJuIGNsaWVudDtcbiAgfTtcblxuICBjb25zdCBnZXRDb21tZW50ID0gYXN5bmMgKGNsaWVudCkgPT4ge1xuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG4gICAgY29uc3QgY29tbWVudHNBcnJheSA9IGF3YWl0IGRiXG4gICAgICAuY29sbGVjdGlvbignY29tbWVudHMnKVxuICAgICAgLmZpbmQoKVxuICAgICAgLnNvcnQoeyBfaWQ6IC0xIH0pXG4gICAgICAudG9BcnJheSgpO1xuXG4gICAgcmV0dXJuIGNvbW1lbnRzQXJyYXk7XG4gIH07XG5cbiAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgbGV0IGNsaWVudDtcbiAgICB0cnkge1xuICAgICAgY2xpZW50ID0gYXdhaXQgY29ubmVjdERCKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogJ0NvdWxkIG5vdCBjb25uZWN0IHRvIERCJyB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgY29tbWVudHNBcnJheSA9IGF3YWl0IGdldENvbW1lbnQoY2xpZW50KTtcbiAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbXlEYXRhOiBjb21tZW50c0FycmF5IH0pO1xuICAgICAgY2xpZW50LmNsb3NlKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogJ0NvdWxkIG5vIGZldGNoIGRhdGEnIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNvbm5lY3REQiIsImNsaWVudCIsImNvbm5lY3QiLCJnZXRDb21tZW50IiwiZGIiLCJjb21tZW50c0FycmF5IiwiY29sbGVjdGlvbiIsImZpbmQiLCJzb3J0IiwiX2lkIiwidG9BcnJheSIsIm1ldGhvZCIsImVycm9yIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJteURhdGEiLCJjbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/subs.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/subs.js"));
module.exports = __webpack_exports__;

})();