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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/esm/server/web/exports/next-response.js\");\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib */ \"(middleware)/./src/lib/index.ts\");\n/* harmony import */ var _public_data_partners_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/data/partners.json */ \"(middleware)/./public/data/partners.json\");\n\n\n\nconst { GEOLOCATION_URL } = process.env;\nasync function middleware(request) {\n    const currentHost = request.headers.get(\"host\")?.split(\".\").slice(-2).join(\".\");\n    const pathname = request.nextUrl.pathname;\n    const location = await (await fetch(GEOLOCATION_URL)).json();\n    const network = await (0,_lib__WEBPACK_IMPORTED_MODULE_1__.getHostname)(currentHost);\n    const authentication = await (await fetch(new URL(\"/api/unauth\", request.url), {\n        method: \"POST\"\n    })).json();\n    console.log(location, network, authentication);\n    if (pathname in _public_data_partners_json__WEBPACK_IMPORTED_MODULE_2__) {\n        const redirectEntry = _public_data_partners_json__WEBPACK_IMPORTED_MODULE_2__[pathname];\n        const statusCode = redirectEntry.permanent ? 308 : 307;\n        const response = next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(redirectEntry.destination, request.nextUrl.origin), statusCode);\n        response.cookies.set({\n            name: \"partner\",\n            value: redirectEntry.value,\n            path: \"/\"\n        });\n        return response;\n    }\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next();\n}\nconst config = {\n    matcher: [\n        \"/((?!api/|_next/|_static/|_vercel|[\\\\w-]+\\\\.\\\\w+).*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMkM7QUFFNEI7QUFDbkI7QUFFcEQsTUFBTSxFQUFFRyxlQUFlLEVBQUUsR0FBR0MsUUFBUUMsR0FBRztBQU1oQyxlQUFlQyxXQUFXQyxPQUFvQjtJQUNuRCxNQUFNQyxjQUFjRCxRQUFRRSxPQUFPLENBQ2hDQyxHQUFHLENBQUMsU0FDSEMsTUFBTSxLQUNQQyxNQUFNLENBQUMsR0FDUEMsS0FBSztJQUNSLE1BQU1DLFdBQVdQLFFBQVFRLE9BQU8sQ0FBQ0QsUUFBUTtJQUN6QyxNQUFNRSxXQUFXLE1BQU0sQ0FBQyxNQUFNQyxNQUFNZCxnQkFBZSxFQUFHZSxJQUFJO0lBQzFELE1BQU1DLFVBQVUsTUFBTWxCLGlEQUFXQSxDQUFDTztJQUNsQyxNQUFNWSxpQkFBa0IsTUFBTSxDQUM1QixNQUFNSCxNQUFNLElBQUlJLElBQUksZUFBZWQsUUFBUWUsR0FBRyxHQUFHO1FBQy9DQyxRQUFRO0lBQ1YsRUFBQyxFQUNETCxJQUFJO0lBRU5NLFFBQVFDLEdBQUcsQ0FBQ1QsVUFBVUcsU0FBU0M7SUFDL0IsSUFBSU4sWUFBWVosdURBQVFBLEVBQUU7UUFDeEIsTUFBTXdCLGdCQUFnQnhCLHVEQUFRLENBQUNZLFNBQVM7UUFDeEMsTUFBTWEsYUFBYUQsY0FBY0UsU0FBUyxHQUFHLE1BQU07UUFDbkQsTUFBTUMsV0FBVzdCLGtGQUFZQSxDQUFDOEIsUUFBUSxDQUNwQyxJQUFJVCxJQUFJSyxjQUFjSyxXQUFXLEVBQUV4QixRQUFRUSxPQUFPLENBQUNpQixNQUFNLEdBQ3pETDtRQUVGRSxTQUFTSSxPQUFPLENBQUNDLEdBQUcsQ0FBQztZQUNuQkMsTUFBTTtZQUNOQyxPQUFPVixjQUFjVSxLQUFLO1lBQzFCQyxNQUFNO1FBQ1I7UUFDQSxPQUFPUjtJQUNUO0lBQ0EsT0FBTzdCLGtGQUFZQSxDQUFDc0MsSUFBSTtBQUMxQjtBQUVPLE1BQU1DLFNBQVM7SUFDcEJDLFNBQVM7UUFBQztLQUF1RDtBQUNuRSxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9taWRkbGV3YXJlLnRzP2QxOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IHsgTmV4dFJlcXVlc3QgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyBnZXRIb3N0bmFtZSwgdHlwZSBJRW52UHJvcHMsIEF1dGhSZXNwb25zZVByb3BzIH0gZnJvbSAnQC9saWInO1xuaW1wb3J0IHBhcnRuZXJzIGZyb20gJy4uL3B1YmxpYy9kYXRhL3BhcnRuZXJzLmpzb24nO1xuXG5jb25zdCB7IEdFT0xPQ0FUSU9OX1VSTCB9ID0gcHJvY2Vzcy5lbnYgYXMgSUVudlByb3BzO1xuXG5pbnRlcmZhY2UgTXlPYmplY3RXaXRoSW5kZXgge1xuICBba2V5OiBzdHJpbmddOiB7IGRlc3RpbmF0aW9uOiBzdHJpbmc7IHBlcm1hbmVudDogYm9vbGVhbiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWlkZGxld2FyZShyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuICBjb25zdCBjdXJyZW50SG9zdCA9IHJlcXVlc3QuaGVhZGVyc1xuICAgIC5nZXQoJ2hvc3QnKVxuICAgID8uc3BsaXQoJy4nKVxuICAgIC5zbGljZSgtMilcbiAgICAuam9pbignLicpO1xuICBjb25zdCBwYXRobmFtZSA9IHJlcXVlc3QubmV4dFVybC5wYXRobmFtZTtcbiAgY29uc3QgbG9jYXRpb24gPSBhd2FpdCAoYXdhaXQgZmV0Y2goR0VPTE9DQVRJT05fVVJMKSkuanNvbigpO1xuICBjb25zdCBuZXR3b3JrID0gYXdhaXQgZ2V0SG9zdG5hbWUoY3VycmVudEhvc3QpO1xuICBjb25zdCBhdXRoZW50aWNhdGlvbiA9IChhd2FpdCAoXG4gICAgYXdhaXQgZmV0Y2gobmV3IFVSTCgnL2FwaS91bmF1dGgnLCByZXF1ZXN0LnVybCksIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIH0pXG4gICkuanNvbigpKSBhcyBBdXRoUmVzcG9uc2VQcm9wcztcblxuICBjb25zb2xlLmxvZyhsb2NhdGlvbiwgbmV0d29yaywgYXV0aGVudGljYXRpb24pO1xuICBpZiAocGF0aG5hbWUgaW4gcGFydG5lcnMpIHtcbiAgICBjb25zdCByZWRpcmVjdEVudHJ5ID0gcGFydG5lcnNbcGF0aG5hbWVdO1xuICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZWRpcmVjdEVudHJ5LnBlcm1hbmVudCA/IDMwOCA6IDMwNztcbiAgICBjb25zdCByZXNwb25zZSA9IE5leHRSZXNwb25zZS5yZWRpcmVjdChcbiAgICAgIG5ldyBVUkwocmVkaXJlY3RFbnRyeS5kZXN0aW5hdGlvbiwgcmVxdWVzdC5uZXh0VXJsLm9yaWdpbiksXG4gICAgICBzdGF0dXNDb2RlXG4gICAgKTtcbiAgICByZXNwb25zZS5jb29raWVzLnNldCh7XG4gICAgICBuYW1lOiAncGFydG5lcicsXG4gICAgICB2YWx1ZTogcmVkaXJlY3RFbnRyeS52YWx1ZSxcbiAgICAgIHBhdGg6ICcvJyxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cbiAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KCk7XG59XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIG1hdGNoZXI6IFsnLygoPyFhcGkvfF9uZXh0L3xfc3RhdGljL3xfdmVyY2VsfFtcXFxcdy1dK1xcXFwuXFxcXHcrKS4qKSddLFxufTtcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJnZXRIb3N0bmFtZSIsInBhcnRuZXJzIiwiR0VPTE9DQVRJT05fVVJMIiwicHJvY2VzcyIsImVudiIsIm1pZGRsZXdhcmUiLCJyZXF1ZXN0IiwiY3VycmVudEhvc3QiLCJoZWFkZXJzIiwiZ2V0Iiwic3BsaXQiLCJzbGljZSIsImpvaW4iLCJwYXRobmFtZSIsIm5leHRVcmwiLCJsb2NhdGlvbiIsImZldGNoIiwianNvbiIsIm5ldHdvcmsiLCJhdXRoZW50aWNhdGlvbiIsIlVSTCIsInVybCIsIm1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJyZWRpcmVjdEVudHJ5Iiwic3RhdHVzQ29kZSIsInBlcm1hbmVudCIsInJlc3BvbnNlIiwicmVkaXJlY3QiLCJkZXN0aW5hdGlvbiIsIm9yaWdpbiIsImNvb2tpZXMiLCJzZXQiLCJuYW1lIiwidmFsdWUiLCJwYXRoIiwibmV4dCIsImNvbmZpZyIsIm1hdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});