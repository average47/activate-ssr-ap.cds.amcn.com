"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/grid/page",{

/***/ "(app-pages-browser)/./src/app/grid/page.tsx":
/*!*******************************!*\
  !*** ./src/app/grid/page.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.module.scss */ \"(app-pages-browser)/./src/app/grid/page.module.scss\");\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_page_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Page() {\n    _s();\n    const [expanded, setExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggle = ()=>{\n        setExpanded((prev)=>!prev);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container), \" \").concat(expanded ? (_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().withLongAside) : (_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().withoutLongAside)),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        className: \"\".concat((_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().region), \" \").concat((_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().header)),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().headerLabel),\n                            children: \"header\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/app/grid/page.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/app/grid/page.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n                        className: \"\".concat((_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().region), \" \").concat((_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().aside)),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>{\n                                toggle();\n                            },\n                            \"aria-label\": \"click here or use ArrowUp key to toggle expansion\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().asideLabel),\n                                    children: \"aside\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/app/grid/page.tsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().asideInstructions),\n                                    \"aria-hidden\": \"true\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().clickIconContainer),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                className: \"\".concat((_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().icon), \" \").concat((_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().clickIcon)),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"use\", {\n                                                    xlinkHref: \"#click-icon\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/app/grid/page.tsx\",\n                                                    lineNumber: 31,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/app/grid/page.tsx\",\n                                                lineNumber: 30,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/app/grid/page.tsx\",\n                                            lineNumber: 29,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().iconSeparator),\n                                            children: \"or\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/app/grid/page.tsx\",\n                                            lineNumber: 34,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().chevronIconContainer),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                    className: \"\".concat((_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().icon), \" \").concat((_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().chevronContourIcon)),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"use\", {\n                                                        xlinkHref: \"#chevron-icon\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/app/grid/page.tsx\",\n                                                        lineNumber: 37,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/app/grid/page.tsx\",\n                                                    lineNumber: 36,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                    className: \"\".concat((_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().icon), \" \").concat((_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().chevronIcon)),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"use\", {\n                                                        xlinkHref: \"#chevron-icon\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/app/grid/page.tsx\",\n                                                        lineNumber: 40,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/app/grid/page.tsx\",\n                                                    lineNumber: 39,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/app/grid/page.tsx\",\n                                            lineNumber: 35,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/app/grid/page.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/app/grid/page.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/app/grid/page.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"\".concat((_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().region), \" \").concat((_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().main)),\n                        children: \"main\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/app/grid/page.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                        className: \"\".concat((_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().region), \" \").concat((_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().footer)),\n                        children: \"footer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/app/grid/page.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/app/grid/page.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                style: {\n                    display: \"none\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"symbol\", {\n                        id: \"click-icon\",\n                        viewBox: \"0 0 448 512\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            fill: \"currentColor\",\n                            d: \"M448 240v96c0 3.084-.356 6.159-1.063 9.162l-32 136C410.686 499.23 394.562 512 376 512H168a40.004 40.004 0 0 1-32.35-16.473l-127.997-176c-12.993-17.866-9.043-42.883 8.822-55.876 17.867-12.994 42.884-9.043 55.877 8.823L104 315.992V40c0-22.091 17.908-40 40-40s40 17.909 40 40v200h8v-40c0-22.091 17.908-40 40-40s40 17.909 40 40v40h8v-24c0-22.091 17.908-40 40-40s40 17.909 40 40v24h8c0-22.091 17.908-40 40-40s40 17.909 40 40zm-256 80h-8v96h8v-96zm88 0h-8v96h8v-96zm88 0h-8v96h8v-96z\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/app/grid/page.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/app/grid/page.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"symbol\", {\n                        id: \"chevron-icon\",\n                        viewBox: \"0 0 448 512\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            fill: \"currentColor\",\n                            d: \"M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/app/grid/page.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/app/grid/page.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/app/grid/page.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/app/grid/page.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"DuL5jiiQQFgbn7gBKAyxwS/H4Ek=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ3JpZC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNpQztBQUNPO0FBRXpCLFNBQVNFOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0osK0NBQVFBLENBQUM7SUFDekMsTUFBTUssU0FBUztRQUNiRCxZQUFZLENBQUNFLE9BQVMsQ0FBQ0E7SUFDekI7SUFFQSxxQkFDRSw4REFBQ0M7UUFBS0MsV0FBVTs7MEJBQ2QsOERBQUNDO2dCQUNDRCxXQUFXLEdBQXVCTCxPQUFwQkYsb0VBQWdCLEVBQUMsS0FBNkQsT0FBMURFLFdBQVdGLHdFQUFvQixHQUFHQSwyRUFBdUI7O2tDQUUzRiw4REFBQ1k7d0JBQU9MLFdBQVcsR0FBb0JQLE9BQWpCQSxpRUFBYSxFQUFDLEtBQWlCLE9BQWRBLGlFQUFhO2tDQUNsRCw0RUFBQ2M7NEJBQUtQLFdBQVdQLHNFQUFrQjtzQ0FBRTs7Ozs7Ozs7Ozs7a0NBR3ZDLDhEQUFDZ0I7d0JBQU1ULFdBQVcsR0FBb0JQLE9BQWpCQSxpRUFBYSxFQUFDLEtBQWdCLE9BQWJBLGdFQUFZO2tDQUNoRCw0RUFBQ2lCOzRCQUNDQyxTQUFTO2dDQUNQZDs0QkFDRjs0QkFDQWUsY0FBVzs7OENBRVgsOERBQUNMO29DQUFLUCxXQUFXUCxxRUFBaUI7OENBQUU7Ozs7Ozs4Q0FDcEMsOERBQUNjO29DQUFLUCxXQUFXUCw0RUFBd0I7b0NBQUVzQixlQUFZOztzREFDckQsOERBQUNSOzRDQUFLUCxXQUFXUCw2RUFBeUI7c0RBQ3hDLDRFQUFDd0I7Z0RBQUlqQixXQUFXLEdBQWtCUCxPQUFmQSwrREFBVyxFQUFDLEtBQW9CLE9BQWpCQSxvRUFBZ0I7MERBQ2hELDRFQUFDMkI7b0RBQUlDLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBR25CLDhEQUFDZDs0Q0FBS1AsV0FBV1Asd0VBQW9CO3NEQUFFOzs7Ozs7c0RBQ3ZDLDhEQUFDYzs0Q0FBS1AsV0FBV1AsK0VBQTJCOzs4REFDMUMsOERBQUN3QjtvREFBSWpCLFdBQVcsR0FBa0JQLE9BQWZBLCtEQUFXLEVBQUMsS0FBNkIsT0FBMUJBLDZFQUF5Qjs4REFDekQsNEVBQUMyQjt3REFBSUMsV0FBVTs7Ozs7Ozs7Ozs7OERBRWpCLDhEQUFDSjtvREFBSWpCLFdBQVcsR0FBa0JQLE9BQWZBLCtEQUFXLEVBQUMsS0FBc0IsT0FBbkJBLHNFQUFrQjs4REFDbEQsNEVBQUMyQjt3REFBSUMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FNekIsOERBQUN0Qjt3QkFBS0MsV0FBVyxHQUFvQlAsT0FBakJBLGlFQUFhLEVBQUMsS0FBZSxPQUFaQSwrREFBVztrQ0FBSTs7Ozs7O2tDQUNwRCw4REFBQ2lDO3dCQUFPMUIsV0FBVyxHQUFvQlAsT0FBakJBLGlFQUFhLEVBQUMsS0FBaUIsT0FBZEEsaUVBQWE7a0NBQUk7Ozs7Ozs7Ozs7OzswQkFHMUQsOERBQUN3QjtnQkFBSVUsT0FBTztvQkFBRUMsU0FBUztnQkFBTzs7a0NBQzVCLDhEQUFDQzt3QkFBT0MsSUFBRzt3QkFBYUMsU0FBUTtrQ0FDOUIsNEVBQUNDOzRCQUNDQyxNQUFLOzRCQUNMQyxHQUFFOzs7Ozs7Ozs7OztrQ0FHTiw4REFBQ0w7d0JBQU9DLElBQUc7d0JBQWVDLFNBQVE7a0NBQ2hDLDRFQUFDQzs0QkFDQ0MsTUFBSzs0QkFDTEMsR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNZDtHQTdEd0J4QztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2dyaWQvcGFnZS50c3g/YzZkYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wYWdlLm1vZHVsZS5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcbiAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHtcbiAgICBzZXRFeHBhbmRlZCgocHJldikgPT4gIXByZXYpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW5cIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGFpbmVyfSAke2V4cGFuZGVkID8gc3R5bGVzLndpdGhMb25nQXNpZGUgOiBzdHlsZXMud2l0aG91dExvbmdBc2lkZX1gfVxuICAgICAgPlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17YCR7c3R5bGVzLnJlZ2lvbn0gJHtzdHlsZXMuaGVhZGVyfWB9PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckxhYmVsfT5oZWFkZXI8L3NwYW4+XG4gICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgIDxhc2lkZSBjbGFzc05hbWU9e2Ake3N0eWxlcy5yZWdpb259ICR7c3R5bGVzLmFzaWRlfWB9PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgdG9nZ2xlKCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cImNsaWNrIGhlcmUgb3IgdXNlIEFycm93VXAga2V5IHRvIHRvZ2dsZSBleHBhbnNpb25cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmFzaWRlTGFiZWx9PmFzaWRlPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYXNpZGVJbnN0cnVjdGlvbnN9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jbGlja0ljb25Db250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaWNvbn0gJHtzdHlsZXMuY2xpY2tJY29ufWB9PlxuICAgICAgICAgICAgICAgICAgPHVzZSB4bGlua0hyZWY9XCIjY2xpY2staWNvblwiPjwvdXNlPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmljb25TZXBhcmF0b3J9Pm9yPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jaGV2cm9uSWNvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9e2Ake3N0eWxlcy5pY29ufSAke3N0eWxlcy5jaGV2cm9uQ29udG91ckljb259YH0+XG4gICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rSHJlZj1cIiNjaGV2cm9uLWljb25cIj48L3VzZT5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT17YCR7c3R5bGVzLmljb259ICR7c3R5bGVzLmNoZXZyb25JY29ufWB9PlxuICAgICAgICAgICAgICAgICAgPHVzZSB4bGlua0hyZWY9XCIjY2hldnJvbi1pY29uXCI+PC91c2U+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtgJHtzdHlsZXMucmVnaW9ufSAke3N0eWxlcy5tYWlufWB9Pm1haW48L21haW4+XG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtgJHtzdHlsZXMucmVnaW9ufSAke3N0eWxlcy5mb290ZXJ9YH0+Zm9vdGVyPC9mb290ZXI+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN2ZyBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0+XG4gICAgICAgIDxzeW1ib2wgaWQ9XCJjbGljay1pY29uXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgZD1cIk00NDggMjQwdjk2YzAgMy4wODQtLjM1NiA2LjE1OS0xLjA2MyA5LjE2MmwtMzIgMTM2QzQxMC42ODYgNDk5LjIzIDM5NC41NjIgNTEyIDM3NiA1MTJIMTY4YTQwLjAwNCA0MC4wMDQgMCAwIDEtMzIuMzUtMTYuNDczbC0xMjcuOTk3LTE3NmMtMTIuOTkzLTE3Ljg2Ni05LjA0My00Mi44ODMgOC44MjItNTUuODc2IDE3Ljg2Ny0xMi45OTQgNDIuODg0LTkuMDQzIDU1Ljg3NyA4LjgyM0wxMDQgMzE1Ljk5MlY0MGMwLTIyLjA5MSAxNy45MDgtNDAgNDAtNDBzNDAgMTcuOTA5IDQwIDQwdjIwMGg4di00MGMwLTIyLjA5MSAxNy45MDgtNDAgNDAtNDBzNDAgMTcuOTA5IDQwIDQwdjQwaDh2LTI0YzAtMjIuMDkxIDE3LjkwOC00MCA0MC00MHM0MCAxNy45MDkgNDAgNDB2MjRoOGMwLTIyLjA5MSAxNy45MDgtNDAgNDAtNDBzNDAgMTcuOTA5IDQwIDQwem0tMjU2IDgwaC04djk2aDh2LTk2em04OCAwaC04djk2aDh2LTk2em04OCAwaC04djk2aDh2LTk2elwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zeW1ib2w+XG4gICAgICAgIDxzeW1ib2wgaWQ9XCJjaGV2cm9uLWljb25cIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICBkPVwiTTI0MC45NzEgMTMwLjUyNGwxOTQuMzQzIDE5NC4zNDNjOS4zNzMgOS4zNzMgOS4zNzMgMjQuNTY5IDAgMzMuOTQxbC0yMi42NjcgMjIuNjY3Yy05LjM1NyA5LjM1Ny0yNC41MjIgOS4zNzUtMzMuOTAxLjA0TDIyNCAyMjcuNDk1IDY5LjI1NSAzODEuNTE2Yy05LjM3OSA5LjMzNS0yNC41NDQgOS4zMTctMzMuOTAxLS4wNGwtMjIuNjY3LTIyLjY2N2MtOS4zNzMtOS4zNzMtOS4zNzMtMjQuNTY5IDAtMzMuOTQxTDIwNy4wMyAxMzAuNTI1YzkuMzcyLTkuMzczIDI0LjU2OC05LjM3MyAzMy45NDEtLjAwMXpcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ltYm9sPlxuICAgICAgPC9zdmc+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwiUGFnZSIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJ0b2dnbGUiLCJwcmV2IiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImNvbnRhaW5lciIsIndpdGhMb25nQXNpZGUiLCJ3aXRob3V0TG9uZ0FzaWRlIiwiaGVhZGVyIiwicmVnaW9uIiwic3BhbiIsImhlYWRlckxhYmVsIiwiYXNpZGUiLCJidXR0b24iLCJvbkNsaWNrIiwiYXJpYS1sYWJlbCIsImFzaWRlTGFiZWwiLCJhc2lkZUluc3RydWN0aW9ucyIsImFyaWEtaGlkZGVuIiwiY2xpY2tJY29uQ29udGFpbmVyIiwic3ZnIiwiaWNvbiIsImNsaWNrSWNvbiIsInVzZSIsInhsaW5rSHJlZiIsImljb25TZXBhcmF0b3IiLCJjaGV2cm9uSWNvbkNvbnRhaW5lciIsImNoZXZyb25Db250b3VySWNvbiIsImNoZXZyb25JY29uIiwiZm9vdGVyIiwic3R5bGUiLCJkaXNwbGF5Iiwic3ltYm9sIiwiaWQiLCJ2aWV3Qm94IiwicGF0aCIsImZpbGwiLCJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/grid/page.tsx\n"));

/***/ })

});