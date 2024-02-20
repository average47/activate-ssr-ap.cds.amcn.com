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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/esm/server/web/exports/next-response.js\");\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib */ \"(middleware)/./src/lib/index.ts\");\n/* harmony import */ var _public_data_partners_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/data/partners.json */ \"(middleware)/./public/data/partners.json\");\n\n\n\nconst { GEOLOCATION_URL } = process.env;\nasync function middleware(request) {\n    const currentHost = request.headers.get(\"host\")?.split(\".\").slice(-2).join(\".\");\n    const pathname = request.nextUrl.pathname;\n    const location = await (await fetch(GEOLOCATION_URL)).json();\n    const network = await (0,_lib__WEBPACK_IMPORTED_MODULE_1__.getHostname)(currentHost);\n    const authentication = await (await fetch(new URL(\"/api/unauth\", request.url), {\n        method: \"POST\"\n    })).json();\n    const session = {\n        geolocation: location.data.geolocation,\n        networkPath: network?.networkPath,\n        token: authentication.access_token\n    };\n    console.log(session);\n    if (pathname in _public_data_partners_json__WEBPACK_IMPORTED_MODULE_2__) {\n        const redirectEntry = _public_data_partners_json__WEBPACK_IMPORTED_MODULE_2__[pathname];\n        const statusCode = redirectEntry.permanent ? 308 : 307;\n        const response = next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(redirectEntry.destination, request.nextUrl.origin), statusCode);\n        response.cookies.set({\n            name: \"partner\",\n            value: redirectEntry.value,\n            path: \"/\"\n        });\n        return response;\n    }\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next();\n}\nconst config = {\n    matcher: [\n        \"/((?!api/|_next/|_static/|_vercel|[\\\\w-]+\\\\.\\\\w+).*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMkM7QUFFNEI7QUFDbkI7QUFFcEQsTUFBTSxFQUFFRyxlQUFlLEVBQUUsR0FBR0MsUUFBUUMsR0FBRztBQU1oQyxlQUFlQyxXQUFXQyxPQUFvQjtJQUNuRCxNQUFNQyxjQUFjRCxRQUFRRSxPQUFPLENBQ2hDQyxHQUFHLENBQUMsU0FDSEMsTUFBTSxLQUNQQyxNQUFNLENBQUMsR0FDUEMsS0FBSztJQUNSLE1BQU1DLFdBQVdQLFFBQVFRLE9BQU8sQ0FBQ0QsUUFBUTtJQUN6QyxNQUFNRSxXQUFXLE1BQU0sQ0FBQyxNQUFNQyxNQUFNZCxnQkFBZSxFQUFHZSxJQUFJO0lBQzFELE1BQU1DLFVBQVUsTUFBTWxCLGlEQUFXQSxDQUFDTztJQUNsQyxNQUFNWSxpQkFBa0IsTUFBTSxDQUM1QixNQUFNSCxNQUFNLElBQUlJLElBQUksZUFBZWQsUUFBUWUsR0FBRyxHQUFHO1FBQy9DQyxRQUFRO0lBQ1YsRUFBQyxFQUNETCxJQUFJO0lBQ04sTUFBTU0sVUFBVTtRQUNkQyxhQUFhVCxTQUFTVSxJQUFJLENBQUNELFdBQVc7UUFDdENFLGFBQWFSLFNBQVNRO1FBQ3RCQyxPQUFPUixlQUFlUyxZQUFZO0lBQ3BDO0lBQ0FDLFFBQVFDLEdBQUcsQ0FBQ1A7SUFDWixJQUFJVixZQUFZWix1REFBUUEsRUFBRTtRQUN4QixNQUFNOEIsZ0JBQWdCOUIsdURBQVEsQ0FBQ1ksU0FBUztRQUN4QyxNQUFNbUIsYUFBYUQsY0FBY0UsU0FBUyxHQUFHLE1BQU07UUFDbkQsTUFBTUMsV0FBV25DLGtGQUFZQSxDQUFDb0MsUUFBUSxDQUNwQyxJQUFJZixJQUFJVyxjQUFjSyxXQUFXLEVBQUU5QixRQUFRUSxPQUFPLENBQUN1QixNQUFNLEdBQ3pETDtRQUVGRSxTQUFTSSxPQUFPLENBQUNDLEdBQUcsQ0FBQztZQUNuQkMsTUFBTTtZQUNOQyxPQUFPVixjQUFjVSxLQUFLO1lBQzFCQyxNQUFNO1FBQ1I7UUFDQSxPQUFPUjtJQUNUO0lBQ0EsT0FBT25DLGtGQUFZQSxDQUFDNEMsSUFBSTtBQUMxQjtBQUVPLE1BQU1DLFNBQVM7SUFDcEJDLFNBQVM7UUFBQztLQUF1RDtBQUNuRSxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9taWRkbGV3YXJlLnRzP2QxOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IHsgTmV4dFJlcXVlc3QgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyBnZXRIb3N0bmFtZSwgdHlwZSBJRW52UHJvcHMsIEF1dGhSZXNwb25zZVByb3BzIH0gZnJvbSAnQC9saWInO1xuaW1wb3J0IHBhcnRuZXJzIGZyb20gJy4uL3B1YmxpYy9kYXRhL3BhcnRuZXJzLmpzb24nO1xuXG5jb25zdCB7IEdFT0xPQ0FUSU9OX1VSTCB9ID0gcHJvY2Vzcy5lbnYgYXMgSUVudlByb3BzO1xuXG5pbnRlcmZhY2UgTXlPYmplY3RXaXRoSW5kZXgge1xuICBba2V5OiBzdHJpbmddOiB7IGRlc3RpbmF0aW9uOiBzdHJpbmc7IHBlcm1hbmVudDogYm9vbGVhbiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWlkZGxld2FyZShyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuICBjb25zdCBjdXJyZW50SG9zdCA9IHJlcXVlc3QuaGVhZGVyc1xuICAgIC5nZXQoJ2hvc3QnKVxuICAgID8uc3BsaXQoJy4nKVxuICAgIC5zbGljZSgtMilcbiAgICAuam9pbignLicpO1xuICBjb25zdCBwYXRobmFtZSA9IHJlcXVlc3QubmV4dFVybC5wYXRobmFtZTtcbiAgY29uc3QgbG9jYXRpb24gPSBhd2FpdCAoYXdhaXQgZmV0Y2goR0VPTE9DQVRJT05fVVJMKSkuanNvbigpO1xuICBjb25zdCBuZXR3b3JrID0gYXdhaXQgZ2V0SG9zdG5hbWUoY3VycmVudEhvc3QpO1xuICBjb25zdCBhdXRoZW50aWNhdGlvbiA9IChhd2FpdCAoXG4gICAgYXdhaXQgZmV0Y2gobmV3IFVSTCgnL2FwaS91bmF1dGgnLCByZXF1ZXN0LnVybCksIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIH0pXG4gICkuanNvbigpKSBhcyBBdXRoUmVzcG9uc2VQcm9wcztcbiAgY29uc3Qgc2Vzc2lvbiA9IHtcbiAgICBnZW9sb2NhdGlvbjogbG9jYXRpb24uZGF0YS5nZW9sb2NhdGlvbixcbiAgICBuZXR3b3JrUGF0aDogbmV0d29yaz8ubmV0d29ya1BhdGgsXG4gICAgdG9rZW46IGF1dGhlbnRpY2F0aW9uLmFjY2Vzc190b2tlbixcbiAgfTtcbiAgY29uc29sZS5sb2coc2Vzc2lvbik7XG4gIGlmIChwYXRobmFtZSBpbiBwYXJ0bmVycykge1xuICAgIGNvbnN0IHJlZGlyZWN0RW50cnkgPSBwYXJ0bmVyc1twYXRobmFtZV07XG4gICAgY29uc3Qgc3RhdHVzQ29kZSA9IHJlZGlyZWN0RW50cnkucGVybWFuZW50ID8gMzA4IDogMzA3O1xuICAgIGNvbnN0IHJlc3BvbnNlID0gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KFxuICAgICAgbmV3IFVSTChyZWRpcmVjdEVudHJ5LmRlc3RpbmF0aW9uLCByZXF1ZXN0Lm5leHRVcmwub3JpZ2luKSxcbiAgICAgIHN0YXR1c0NvZGVcbiAgICApO1xuICAgIHJlc3BvbnNlLmNvb2tpZXMuc2V0KHtcbiAgICAgIG5hbWU6ICdwYXJ0bmVyJyxcbiAgICAgIHZhbHVlOiByZWRpcmVjdEVudHJ5LnZhbHVlLFxuICAgICAgcGF0aDogJy8nLFxuICAgIH0pO1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKTtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgbWF0Y2hlcjogWycvKCg/IWFwaS98X25leHQvfF9zdGF0aWMvfF92ZXJjZWx8W1xcXFx3LV0rXFxcXC5cXFxcdyspLiopJ10sXG59O1xuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImdldEhvc3RuYW1lIiwicGFydG5lcnMiLCJHRU9MT0NBVElPTl9VUkwiLCJwcm9jZXNzIiwiZW52IiwibWlkZGxld2FyZSIsInJlcXVlc3QiLCJjdXJyZW50SG9zdCIsImhlYWRlcnMiLCJnZXQiLCJzcGxpdCIsInNsaWNlIiwiam9pbiIsInBhdGhuYW1lIiwibmV4dFVybCIsImxvY2F0aW9uIiwiZmV0Y2giLCJqc29uIiwibmV0d29yayIsImF1dGhlbnRpY2F0aW9uIiwiVVJMIiwidXJsIiwibWV0aG9kIiwic2Vzc2lvbiIsImdlb2xvY2F0aW9uIiwiZGF0YSIsIm5ldHdvcmtQYXRoIiwidG9rZW4iLCJhY2Nlc3NfdG9rZW4iLCJjb25zb2xlIiwibG9nIiwicmVkaXJlY3RFbnRyeSIsInN0YXR1c0NvZGUiLCJwZXJtYW5lbnQiLCJyZXNwb25zZSIsInJlZGlyZWN0IiwiZGVzdGluYXRpb24iLCJvcmlnaW4iLCJjb29raWVzIiwic2V0IiwibmFtZSIsInZhbHVlIiwicGF0aCIsIm5leHQiLCJjb25maWciLCJtYXRjaGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});