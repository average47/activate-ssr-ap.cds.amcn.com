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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/esm/server/web/exports/next-response.js\");\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib */ \"(middleware)/./src/lib/index.ts\");\n/* harmony import */ var _public_data_partners_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/data/partners.json */ \"(middleware)/./public/data/partners.json\");\n\n\n\nconst { GEOLOCATION_URL } = process.env;\nasync function middleware(request) {\n    const currentHost = request.headers.get(\"host\")?.split(\".\").slice(-2).join(\".\");\n    const pathname = request.nextUrl.pathname;\n    const location = await (await fetch(GEOLOCATION_URL)).json();\n    const network = await (0,_lib__WEBPACK_IMPORTED_MODULE_1__.getHostname)(currentHost);\n    const authentication = request.cookies.get(\"access_token\");\n    console.log(location, network, pathname);\n    if (pathname in _public_data_partners_json__WEBPACK_IMPORTED_MODULE_2__) {\n        const redirectEntry = _public_data_partners_json__WEBPACK_IMPORTED_MODULE_2__[pathname];\n        const statusCode = redirectEntry.permanent ? 308 : 307;\n        const response = next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(redirectEntry.destination, request.nextUrl.origin), statusCode);\n        response.cookies.set({\n            name: \"partner\",\n            value: redirectEntry.value,\n            path: \"/\"\n        });\n        return response;\n    }\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next();\n}\nconst config = {\n    matcher: [\n        \"/((?!api/|_next/|_static/|_vercel|[\\\\w-]+\\\\.\\\\w+).*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMkM7QUFFb0I7QUFDWDtBQUVwRCxNQUFNLEVBQUVHLGVBQWUsRUFBRSxHQUFHQyxRQUFRQyxHQUFHO0FBTWhDLGVBQWVDLFdBQVdDLE9BQW9CO0lBQ25ELE1BQU1DLGNBQWNELFFBQVFFLE9BQU8sQ0FDaENDLEdBQUcsQ0FBQyxTQUNIQyxNQUFNLEtBQ1BDLE1BQU0sQ0FBQyxHQUNQQyxLQUFLO0lBQ1IsTUFBTUMsV0FBV1AsUUFBUVEsT0FBTyxDQUFDRCxRQUFRO0lBQ3pDLE1BQU1FLFdBQVcsTUFBTSxDQUFDLE1BQU1DLE1BQU1kLGdCQUFlLEVBQUdlLElBQUk7SUFDMUQsTUFBTUMsVUFBVSxNQUFNbEIsaURBQVdBLENBQUNPO0lBQ2xDLE1BQU1ZLGlCQUFpQmIsUUFBUWMsT0FBTyxDQUFDWCxHQUFHLENBQUM7SUFFM0NZLFFBQVFDLEdBQUcsQ0FBQ1AsVUFBVUcsU0FBU0w7SUFDL0IsSUFBSUEsWUFBWVosdURBQVFBLEVBQUU7UUFDeEIsTUFBTXNCLGdCQUFnQnRCLHVEQUFRLENBQUNZLFNBQVM7UUFDeEMsTUFBTVcsYUFBYUQsY0FBY0UsU0FBUyxHQUFHLE1BQU07UUFDbkQsTUFBTUMsV0FBVzNCLGtGQUFZQSxDQUFDNEIsUUFBUSxDQUNwQyxJQUFJQyxJQUFJTCxjQUFjTSxXQUFXLEVBQUV2QixRQUFRUSxPQUFPLENBQUNnQixNQUFNLEdBQ3pETjtRQUVGRSxTQUFTTixPQUFPLENBQUNXLEdBQUcsQ0FBQztZQUNuQkMsTUFBTTtZQUNOQyxPQUFPVixjQUFjVSxLQUFLO1lBQzFCQyxNQUFNO1FBQ1I7UUFDQSxPQUFPUjtJQUNUO0lBQ0EsT0FBTzNCLGtGQUFZQSxDQUFDb0MsSUFBSTtBQUMxQjtBQUVPLE1BQU1DLFNBQVM7SUFDcEJDLFNBQVM7UUFBQztLQUF1RDtBQUNuRSxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9taWRkbGV3YXJlLnRzP2QxOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IHsgTmV4dFJlcXVlc3QgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyBnZXRIb3N0bmFtZSwgdHlwZSBJRW52UHJvcHMsIEF1dGhQcm9wcyB9IGZyb20gJ0AvbGliJztcbmltcG9ydCBwYXJ0bmVycyBmcm9tICcuLi9wdWJsaWMvZGF0YS9wYXJ0bmVycy5qc29uJztcblxuY29uc3QgeyBHRU9MT0NBVElPTl9VUkwgfSA9IHByb2Nlc3MuZW52IGFzIElFbnZQcm9wcztcblxuaW50ZXJmYWNlIE15T2JqZWN0V2l0aEluZGV4IHtcbiAgW2tleTogc3RyaW5nXTogeyBkZXN0aW5hdGlvbjogc3RyaW5nOyBwZXJtYW5lbnQ6IGJvb2xlYW4gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcbiAgY29uc3QgY3VycmVudEhvc3QgPSByZXF1ZXN0LmhlYWRlcnNcbiAgICAuZ2V0KCdob3N0JylcbiAgICA/LnNwbGl0KCcuJylcbiAgICAuc2xpY2UoLTIpXG4gICAgLmpvaW4oJy4nKTtcbiAgY29uc3QgcGF0aG5hbWUgPSByZXF1ZXN0Lm5leHRVcmwucGF0aG5hbWU7XG4gIGNvbnN0IGxvY2F0aW9uID0gYXdhaXQgKGF3YWl0IGZldGNoKEdFT0xPQ0FUSU9OX1VSTCkpLmpzb24oKTtcbiAgY29uc3QgbmV0d29yayA9IGF3YWl0IGdldEhvc3RuYW1lKGN1cnJlbnRIb3N0KTtcbiAgY29uc3QgYXV0aGVudGljYXRpb24gPSByZXF1ZXN0LmNvb2tpZXMuZ2V0KCdhY2Nlc3NfdG9rZW4nKTtcblxuICBjb25zb2xlLmxvZyhsb2NhdGlvbiwgbmV0d29yaywgcGF0aG5hbWUpO1xuICBpZiAocGF0aG5hbWUgaW4gcGFydG5lcnMpIHtcbiAgICBjb25zdCByZWRpcmVjdEVudHJ5ID0gcGFydG5lcnNbcGF0aG5hbWVdO1xuICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZWRpcmVjdEVudHJ5LnBlcm1hbmVudCA/IDMwOCA6IDMwNztcbiAgICBjb25zdCByZXNwb25zZSA9IE5leHRSZXNwb25zZS5yZWRpcmVjdChcbiAgICAgIG5ldyBVUkwocmVkaXJlY3RFbnRyeS5kZXN0aW5hdGlvbiwgcmVxdWVzdC5uZXh0VXJsLm9yaWdpbiksXG4gICAgICBzdGF0dXNDb2RlXG4gICAgKTtcbiAgICByZXNwb25zZS5jb29raWVzLnNldCh7XG4gICAgICBuYW1lOiAncGFydG5lcicsXG4gICAgICB2YWx1ZTogcmVkaXJlY3RFbnRyeS52YWx1ZSxcbiAgICAgIHBhdGg6ICcvJyxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cbiAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KCk7XG59XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIG1hdGNoZXI6IFsnLygoPyFhcGkvfF9uZXh0L3xfc3RhdGljL3xfdmVyY2VsfFtcXFxcdy1dK1xcXFwuXFxcXHcrKS4qKSddLFxufTtcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJnZXRIb3N0bmFtZSIsInBhcnRuZXJzIiwiR0VPTE9DQVRJT05fVVJMIiwicHJvY2VzcyIsImVudiIsIm1pZGRsZXdhcmUiLCJyZXF1ZXN0IiwiY3VycmVudEhvc3QiLCJoZWFkZXJzIiwiZ2V0Iiwic3BsaXQiLCJzbGljZSIsImpvaW4iLCJwYXRobmFtZSIsIm5leHRVcmwiLCJsb2NhdGlvbiIsImZldGNoIiwianNvbiIsIm5ldHdvcmsiLCJhdXRoZW50aWNhdGlvbiIsImNvb2tpZXMiLCJjb25zb2xlIiwibG9nIiwicmVkaXJlY3RFbnRyeSIsInN0YXR1c0NvZGUiLCJwZXJtYW5lbnQiLCJyZXNwb25zZSIsInJlZGlyZWN0IiwiVVJMIiwiZGVzdGluYXRpb24iLCJvcmlnaW4iLCJzZXQiLCJuYW1lIiwidmFsdWUiLCJwYXRoIiwibmV4dCIsImNvbmZpZyIsIm1hdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});