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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\n// interface Partner {\n//   destination: string;\n//   permanent: boolean;\n// }\n// interface Partners {\n//   [key: string]: Partner;\n// }\nfunction middleware(request) {\n    const pathname = request.nextUrl.pathname;\n    console.log(\"pathname\", pathname);\n    if (redirectData && typeof redirectData === \"string\") {\n        const redirectEntry = JSON.parse(redirectData);\n        const statusCode = redirectEntry.permanent ? 308 : 307;\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(redirectEntry.destination, statusCode);\n    }\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next();\n}\nconst config = {\n    matcher: [\n        \"/((?!api/|_next/|_static/|_vercel|[\\\\w-]+\\\\.\\\\w+).*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBSTNDLHNCQUFzQjtBQUN0Qix5QkFBeUI7QUFDekIsd0JBQXdCO0FBQ3hCLElBQUk7QUFDSix1QkFBdUI7QUFDdkIsNEJBQTRCO0FBQzVCLElBQUk7QUFFRyxTQUFTQyxXQUFXQyxPQUFvQjtJQUM3QyxNQUFNQyxXQUFXRCxRQUFRRSxPQUFPLENBQUNELFFBQVE7SUFDekNFLFFBQVFDLEdBQUcsQ0FBQyxZQUFZSDtJQUV4QixJQUFJSSxnQkFBZ0IsT0FBT0EsaUJBQWlCLFVBQVU7UUFDcEQsTUFBTUMsZ0JBQStCQyxLQUFLQyxLQUFLLENBQUNIO1FBQ2hELE1BQU1JLGFBQWFILGNBQWNJLFNBQVMsR0FBRyxNQUFNO1FBQ25ELE9BQU9aLGtGQUFZQSxDQUFDYSxRQUFRLENBQUNMLGNBQWNNLFdBQVcsRUFBRUg7SUFDMUQ7SUFDQSxPQUFPWCxrRkFBWUEsQ0FBQ2UsSUFBSTtBQUMxQjtBQUVPLE1BQU1DLFNBQVM7SUFDcEJDLFNBQVM7UUFBQztLQUF1RDtBQUNuRSxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9taWRkbGV3YXJlLnRzP2QxOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IHsgTmV4dFJlcXVlc3QgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgcGFydG5lcnMgZnJvbSAnLi4vcHVibGljL2RhdGEvcGFydG5lcnMuanNvbic7XG5cbi8vIGludGVyZmFjZSBQYXJ0bmVyIHtcbi8vICAgZGVzdGluYXRpb246IHN0cmluZztcbi8vICAgcGVybWFuZW50OiBib29sZWFuO1xuLy8gfVxuLy8gaW50ZXJmYWNlIFBhcnRuZXJzIHtcbi8vICAgW2tleTogc3RyaW5nXTogUGFydG5lcjtcbi8vIH1cblxuZXhwb3J0IGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcbiAgY29uc3QgcGF0aG5hbWUgPSByZXF1ZXN0Lm5leHRVcmwucGF0aG5hbWU7XG4gIGNvbnNvbGUubG9nKCdwYXRobmFtZScsIHBhdGhuYW1lKTtcblxuICBpZiAocmVkaXJlY3REYXRhICYmIHR5cGVvZiByZWRpcmVjdERhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgcmVkaXJlY3RFbnRyeTogUmVkaXJlY3RFbnRyeSA9IEpTT04ucGFyc2UocmVkaXJlY3REYXRhKTtcbiAgICBjb25zdCBzdGF0dXNDb2RlID0gcmVkaXJlY3RFbnRyeS5wZXJtYW5lbnQgPyAzMDggOiAzMDc7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChyZWRpcmVjdEVudHJ5LmRlc3RpbmF0aW9uLCBzdGF0dXNDb2RlKTtcbiAgfVxuICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKTtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgbWF0Y2hlcjogWycvKCg/IWFwaS98X25leHQvfF9zdGF0aWMvfF92ZXJjZWx8W1xcXFx3LV0rXFxcXC5cXFxcdyspLiopJ10sXG59O1xuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIm1pZGRsZXdhcmUiLCJyZXF1ZXN0IiwicGF0aG5hbWUiLCJuZXh0VXJsIiwiY29uc29sZSIsImxvZyIsInJlZGlyZWN0RGF0YSIsInJlZGlyZWN0RW50cnkiLCJKU09OIiwicGFyc2UiLCJzdGF0dXNDb2RlIiwicGVybWFuZW50IiwicmVkaXJlY3QiLCJkZXN0aW5hdGlvbiIsIm5leHQiLCJjb25maWciLCJtYXRjaGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});