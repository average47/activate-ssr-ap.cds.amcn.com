"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/middleware.ts":
/*!***************************!*\
  !*** ./src/middleware.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/esm/server/web/exports/next-response.js\");\n/* harmony import */ var _public_data_partners_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/data/partners.json */ \"(middleware)/./public/data/partners.json\");\n\n\nfunction middleware(request) {\n    const pathname = request.nextUrl.pathname;\n    if (pathname in _public_data_partners_json__WEBPACK_IMPORTED_MODULE_1__) {\n        const redirectEntry = _public_data_partners_json__WEBPACK_IMPORTED_MODULE_1__[pathname];\n        const statusCode = redirectEntry.permanent ? 308 : 307;\n        const response = next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(redirectEntry.destination, request.nextUrl.origin), statusCode);\n        response.cookies.set({\n            name: \"partner\",\n            value: redirectEntry.value,\n            path: \"/\"\n        });\n    }\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next();\n}\nconst config = {\n    matcher: [\n        \"/((?!api/|_next/|_static/|_vercel|[\\\\w-]+\\\\.\\\\w+).*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEyQztBQUVTO0FBVTdDLFNBQVNFLFdBQVdDLE9BQW9CO0lBQzdDLE1BQU1DLFdBQVdELFFBQVFFLE9BQU8sQ0FBQ0QsUUFBUTtJQUN6QyxJQUFJQSxZQUFZSCx1REFBUUEsRUFBRTtRQUN4QixNQUFNSyxnQkFBZ0JMLHVEQUFRLENBQUNHLFNBQVM7UUFDeEMsTUFBTUcsYUFBYUQsY0FBY0UsU0FBUyxHQUFHLE1BQU07UUFDbkQsTUFBTUMsV0FBV1Qsa0ZBQVlBLENBQUNVLFFBQVEsQ0FDcEMsSUFBSUMsSUFBSUwsY0FBY00sV0FBVyxFQUFFVCxRQUFRRSxPQUFPLENBQUNRLE1BQU0sR0FDekROO1FBRUZFLFNBQVNLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO1lBQ25CQyxNQUFNO1lBQ05DLE9BQU9YLGNBQWNXLEtBQUs7WUFDMUJDLE1BQU07UUFDUjtJQUNGO0lBQ0EsT0FBT2xCLGtGQUFZQSxDQUFDbUIsSUFBSTtBQUMxQjtBQUVPLE1BQU1DLFNBQVM7SUFDcEJDLFNBQVM7UUFBQztLQUF1RDtBQUNuRSxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9taWRkbGV3YXJlLnRzP2QxOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IHsgTmV4dFJlcXVlc3QgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgcGFydG5lcnMgZnJvbSAnLi4vcHVibGljL2RhdGEvcGFydG5lcnMuanNvbic7XG5cbmludGVyZmFjZSBQYXJ0bmVyIHtcbiAgZGVzdGluYXRpb246IHN0cmluZztcbiAgcGVybWFuZW50OiBib29sZWFuO1xufVxuaW50ZXJmYWNlIFBhcnRuZXJzIHtcbiAgW2tleTogc3RyaW5nXTogUGFydG5lcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcbiAgY29uc3QgcGF0aG5hbWUgPSByZXF1ZXN0Lm5leHRVcmwucGF0aG5hbWU7XG4gIGlmIChwYXRobmFtZSBpbiBwYXJ0bmVycykge1xuICAgIGNvbnN0IHJlZGlyZWN0RW50cnkgPSBwYXJ0bmVyc1twYXRobmFtZV07XG4gICAgY29uc3Qgc3RhdHVzQ29kZSA9IHJlZGlyZWN0RW50cnkucGVybWFuZW50ID8gMzA4IDogMzA3O1xuICAgIGNvbnN0IHJlc3BvbnNlID0gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KFxuICAgICAgbmV3IFVSTChyZWRpcmVjdEVudHJ5LmRlc3RpbmF0aW9uLCByZXF1ZXN0Lm5leHRVcmwub3JpZ2luKSxcbiAgICAgIHN0YXR1c0NvZGVcbiAgICApO1xuICAgIHJlc3BvbnNlLmNvb2tpZXMuc2V0KHtcbiAgICAgIG5hbWU6ICdwYXJ0bmVyJyxcbiAgICAgIHZhbHVlOiByZWRpcmVjdEVudHJ5LnZhbHVlLFxuICAgICAgcGF0aDogJy8nLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpO1xufVxuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBtYXRjaGVyOiBbJy8oKD8hYXBpL3xfbmV4dC98X3N0YXRpYy98X3ZlcmNlbHxbXFxcXHctXStcXFxcLlxcXFx3KykuKiknXSxcbn07XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwicGFydG5lcnMiLCJtaWRkbGV3YXJlIiwicmVxdWVzdCIsInBhdGhuYW1lIiwibmV4dFVybCIsInJlZGlyZWN0RW50cnkiLCJzdGF0dXNDb2RlIiwicGVybWFuZW50IiwicmVzcG9uc2UiLCJyZWRpcmVjdCIsIlVSTCIsImRlc3RpbmF0aW9uIiwib3JpZ2luIiwiY29va2llcyIsInNldCIsIm5hbWUiLCJ2YWx1ZSIsInBhdGgiLCJuZXh0IiwiY29uZmlnIiwibWF0Y2hlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});