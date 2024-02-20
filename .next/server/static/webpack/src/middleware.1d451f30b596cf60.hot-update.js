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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/esm/server/web/exports/next-response.js\");\n/* harmony import */ var _public_data_partners_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/data/partners.json */ \"(middleware)/./public/data/partners.json\");\n\n\n// interface Partner {\n//   destination: string;\n//   permanent: boolean;\n// }\n// interface Partners {\n//   [key: string]: Partner;\n// }\nfunction middleware(request) {\n    const pathname = request.nextUrl.pathname;\n    console.log(\"pathname\", pathname);\n    console.log(\"partners\", _public_data_partners_json__WEBPACK_IMPORTED_MODULE_1__);\n    // if (redirectData && typeof redirectData === 'string') {\n    //   const redirectEntry: RedirectEntry = JSON.parse(redirectData);\n    //   const statusCode = redirectEntry.permanent ? 308 : 307;\n    //   return NextResponse.redirect(redirectEntry.destination, statusCode);\n    // }\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next();\n}\nconst config = {\n    matcher: [\n        \"/((?!api/|_next/|_static/|_vercel|[\\\\w-]+\\\\.\\\\w+).*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEyQztBQUVTO0FBRXBELHNCQUFzQjtBQUN0Qix5QkFBeUI7QUFDekIsd0JBQXdCO0FBQ3hCLElBQUk7QUFDSix1QkFBdUI7QUFDdkIsNEJBQTRCO0FBQzVCLElBQUk7QUFFRyxTQUFTRSxXQUFXQyxPQUFvQjtJQUM3QyxNQUFNQyxXQUFXRCxRQUFRRSxPQUFPLENBQUNELFFBQVE7SUFDekNFLFFBQVFDLEdBQUcsQ0FBQyxZQUFZSDtJQUN4QkUsUUFBUUMsR0FBRyxDQUFDLFlBQVlOLHVEQUFRQTtJQUVoQywwREFBMEQ7SUFDMUQsbUVBQW1FO0lBQ25FLDREQUE0RDtJQUM1RCx5RUFBeUU7SUFDekUsSUFBSTtJQUNKLE9BQU9ELGtGQUFZQSxDQUFDUSxJQUFJO0FBQzFCO0FBRU8sTUFBTUMsU0FBUztJQUNwQkMsU0FBUztRQUFDO0tBQXVEO0FBQ25FLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21pZGRsZXdhcmUudHM/ZDE5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyBOZXh0UmVxdWVzdCB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCBwYXJ0bmVycyBmcm9tICcuLi9wdWJsaWMvZGF0YS9wYXJ0bmVycy5qc29uJztcblxuLy8gaW50ZXJmYWNlIFBhcnRuZXIge1xuLy8gICBkZXN0aW5hdGlvbjogc3RyaW5nO1xuLy8gICBwZXJtYW5lbnQ6IGJvb2xlYW47XG4vLyB9XG4vLyBpbnRlcmZhY2UgUGFydG5lcnMge1xuLy8gICBba2V5OiBzdHJpbmddOiBQYXJ0bmVyO1xuLy8gfVxuXG5leHBvcnQgZnVuY3Rpb24gbWlkZGxld2FyZShyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuICBjb25zdCBwYXRobmFtZSA9IHJlcXVlc3QubmV4dFVybC5wYXRobmFtZTtcbiAgY29uc29sZS5sb2coJ3BhdGhuYW1lJywgcGF0aG5hbWUpO1xuICBjb25zb2xlLmxvZygncGFydG5lcnMnLCBwYXJ0bmVycyk7XG5cbiAgLy8gaWYgKHJlZGlyZWN0RGF0YSAmJiB0eXBlb2YgcmVkaXJlY3REYXRhID09PSAnc3RyaW5nJykge1xuICAvLyAgIGNvbnN0IHJlZGlyZWN0RW50cnk6IFJlZGlyZWN0RW50cnkgPSBKU09OLnBhcnNlKHJlZGlyZWN0RGF0YSk7XG4gIC8vICAgY29uc3Qgc3RhdHVzQ29kZSA9IHJlZGlyZWN0RW50cnkucGVybWFuZW50ID8gMzA4IDogMzA3O1xuICAvLyAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QocmVkaXJlY3RFbnRyeS5kZXN0aW5hdGlvbiwgc3RhdHVzQ29kZSk7XG4gIC8vIH1cbiAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KCk7XG59XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIG1hdGNoZXI6IFsnLygoPyFhcGkvfF9uZXh0L3xfc3RhdGljL3xfdmVyY2VsfFtcXFxcdy1dK1xcXFwuXFxcXHcrKS4qKSddLFxufTtcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJwYXJ0bmVycyIsIm1pZGRsZXdhcmUiLCJyZXF1ZXN0IiwicGF0aG5hbWUiLCJuZXh0VXJsIiwiY29uc29sZSIsImxvZyIsIm5leHQiLCJjb25maWciLCJtYXRjaGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ }),

/***/ "(middleware)/./public/data/partners.json":
/*!***********************************!*\
  !*** ./public/data/partners.json ***!
  \***********************************/
/***/ ((module) => {

module.exports = JSON.parse('{"/comcast":{"destination":"/activate","permanent":true},"/lg":{"destination":"/activate","permanent":true},"/rogers":{"destination":"/activate","permanent":true},"/samsung":{"destination":"/activate","permanent":true},"/shaw":{"destination":"/activate","permanent":true},"/vizio":{"destination":"/activate","permanent":true},"/x1":{"destination":"/activate","permanent":true},"/xumo":{"destination":"/activate","permanent":true}}');

/***/ })

});