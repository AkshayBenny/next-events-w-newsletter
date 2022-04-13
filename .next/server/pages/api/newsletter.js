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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const connectDB = async ()=>{\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect('mongodb+srv://admin:admin@cluster0.xir2j.mongodb.net/newsletter?retryWrites=true&w=majority');\n        return client;\n    };\n    const insertDocument = async (client, document)=>{\n        const db = client.db();\n        await db.collection('emails').insertOne(document);\n    };\n    if (req.method === 'POST') {\n        const email = await req.body.email;\n        if (!email) {\n            res.json({\n                message: 'No email added'\n            });\n        } else if (!/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/.test(email)) {\n            res.status(422).json({\n                message: 'Invalid email address'\n            });\n        } else {\n            let client;\n            try {\n                client = await connectDB();\n            } catch (error) {\n                res.status(500).json({\n                    message: 'Error connecting to database'\n                });\n                return;\n            }\n            try {\n                await insertDocument(client, {\n                    email: email\n                });\n                client.close();\n            } catch (error1) {\n                res.status(500).json({\n                    message: 'Error inserting data'\n                });\n                return;\n            }\n            res.status(201).json({\n                email: email\n            });\n        }\n    } else {\n        res.status(200).json({\n            message: 'Request recieved'\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3c2xldHRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFFdEIsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQy9DLEtBQUssQ0FBQ0MsU0FBUyxhQUFlLENBQUM7UUFDN0IsS0FBSyxDQUFDQyxNQUFNLEdBQUcsS0FBSyxDQUFDTCx3REFBbUIsQ0FDdEMsQ0FBNkY7UUFFL0YsTUFBTSxDQUFDSyxNQUFNO0lBQ2YsQ0FBQztJQUVELEtBQUssQ0FBQ0UsY0FBYyxVQUFVRixNQUFNLEVBQUVHLFFBQVEsR0FBSyxDQUFDO1FBQ2xELEtBQUssQ0FBQ0MsRUFBRSxHQUFHSixNQUFNLENBQUNJLEVBQUU7UUFDcEIsS0FBSyxDQUFDQSxFQUFFLENBQUNDLFVBQVUsQ0FBQyxDQUFRLFNBQUVDLFNBQVMsQ0FBQ0gsUUFBUTtJQUNsRCxDQUFDO0lBRUQsRUFBRSxFQUFFTixHQUFHLENBQUNVLE1BQU0sS0FBSyxDQUFNLE9BQUUsQ0FBQztRQUMxQixLQUFLLENBQUNDLEtBQUssR0FBRyxLQUFLLENBQUNYLEdBQUcsQ0FBQ1ksSUFBSSxDQUFDRCxLQUFLO1FBQ2xDLEVBQUUsR0FBR0EsS0FBSyxFQUFFLENBQUM7WUFDWFYsR0FBRyxDQUFDWSxJQUFJLENBQUMsQ0FBQztnQkFBQ0MsT0FBTyxFQUFFLENBQWdCO1lBQUMsQ0FBQztRQUN4QyxDQUFDLE1BQU0sRUFBRSxtREFBbURDLElBQUksQ0FBQ0osS0FBSyxHQUFHLENBQUM7WUFDeEVWLEdBQUcsQ0FBQ2UsTUFBTSxDQUFDLEdBQUcsRUFBRUgsSUFBSSxDQUFDLENBQUM7Z0JBQUNDLE9BQU8sRUFBRSxDQUF1QjtZQUFDLENBQUM7UUFDM0QsQ0FBQyxNQUFNLENBQUM7WUFDTixHQUFHLENBQUNYLE1BQU07WUFFVixHQUFHLENBQUMsQ0FBQztnQkFDSEEsTUFBTSxHQUFHLEtBQUssQ0FBQ0QsU0FBUztZQUMxQixDQUFDLENBQUMsS0FBSyxFQUFFZSxLQUFLLEVBQUUsQ0FBQztnQkFDZmhCLEdBQUcsQ0FBQ2UsTUFBTSxDQUFDLEdBQUcsRUFBRUgsSUFBSSxDQUFDLENBQUM7b0JBQUNDLE9BQU8sRUFBRSxDQUE4QjtnQkFBQyxDQUFDO2dCQUNoRSxNQUFNO1lBQ1IsQ0FBQztZQUVELEdBQUcsQ0FBQyxDQUFDO2dCQUNILEtBQUssQ0FBQ1QsY0FBYyxDQUFDRixNQUFNLEVBQUUsQ0FBQztvQkFBQ1EsS0FBSyxFQUFFQSxLQUFLO2dCQUFDLENBQUM7Z0JBQzdDUixNQUFNLENBQUNlLEtBQUs7WUFDZCxDQUFDLENBQUMsS0FBSyxFQUFFRCxNQUFLLEVBQUUsQ0FBQztnQkFDZmhCLEdBQUcsQ0FBQ2UsTUFBTSxDQUFDLEdBQUcsRUFBRUgsSUFBSSxDQUFDLENBQUM7b0JBQUNDLE9BQU8sRUFBRSxDQUFzQjtnQkFBQyxDQUFDO2dCQUN4RCxNQUFNO1lBQ1IsQ0FBQztZQUVEYixHQUFHLENBQUNlLE1BQU0sQ0FBQyxHQUFHLEVBQUVILElBQUksQ0FBQyxDQUFDO2dCQUFDRixLQUFLLEVBQUVBLEtBQUs7WUFBQyxDQUFDO1FBQ3ZDLENBQUM7SUFDSCxDQUFDLE1BQU0sQ0FBQztRQUNOVixHQUFHLENBQUNlLE1BQU0sQ0FBQyxHQUFHLEVBQUVILElBQUksQ0FBQyxDQUFDO1lBQUNDLE9BQU8sRUFBRSxDQUFrQjtRQUFDLENBQUM7SUFDdEQsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb3V0aW5nLWFwcC8uL3BhZ2VzL2FwaS9uZXdzbGV0dGVyLmpzPzEwYWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCBjb25uZWN0REIgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcbiAgICAgICdtb25nb2RiK3NydjovL2FkbWluOmFkbWluQGNsdXN0ZXIwLnhpcjJqLm1vbmdvZGIubmV0L25ld3NsZXR0ZXI/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5J1xuICAgICk7XG4gICAgcmV0dXJuIGNsaWVudDtcbiAgfTtcblxuICBjb25zdCBpbnNlcnREb2N1bWVudCA9IGFzeW5jIChjbGllbnQsIGRvY3VtZW50KSA9PiB7XG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKCdlbWFpbHMnKS5pbnNlcnRPbmUoZG9jdW1lbnQpO1xuICB9O1xuXG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICBjb25zdCBlbWFpbCA9IGF3YWl0IHJlcS5ib2R5LmVtYWlsO1xuICAgIGlmICghZW1haWwpIHtcbiAgICAgIHJlcy5qc29uKHsgbWVzc2FnZTogJ05vIGVtYWlsIGFkZGVkJyB9KTtcbiAgICB9IGVsc2UgaWYgKCEvXlxcdysoW1xcLi1dP1xcdyspKkBcXHcrKFtcXC4tXT9cXHcrKSooXFwuXFx3ezIsM30pKyQvLnRlc3QoZW1haWwpKSB7XG4gICAgICByZXMuc3RhdHVzKDQyMikuanNvbih7IG1lc3NhZ2U6ICdJbnZhbGlkIGVtYWlsIGFkZHJlc3MnIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgY2xpZW50O1xuXG4gICAgICB0cnkge1xuICAgICAgICBjbGllbnQgPSBhd2FpdCBjb25uZWN0REIoKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogJ0Vycm9yIGNvbm5lY3RpbmcgdG8gZGF0YWJhc2UnIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGluc2VydERvY3VtZW50KGNsaWVudCwgeyBlbWFpbDogZW1haWwgfSk7XG4gICAgICAgIGNsaWVudC5jbG9zZSgpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnRXJyb3IgaW5zZXJ0aW5nIGRhdGEnIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgZW1haWw6IGVtYWlsIH0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICdSZXF1ZXN0IHJlY2lldmVkJyB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNvbm5lY3REQiIsImNsaWVudCIsImNvbm5lY3QiLCJpbnNlcnREb2N1bWVudCIsImRvY3VtZW50IiwiZGIiLCJjb2xsZWN0aW9uIiwiaW5zZXJ0T25lIiwibWV0aG9kIiwiZW1haWwiLCJib2R5IiwianNvbiIsIm1lc3NhZ2UiLCJ0ZXN0Iiwic3RhdHVzIiwiZXJyb3IiLCJjbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/newsletter.js\n");

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