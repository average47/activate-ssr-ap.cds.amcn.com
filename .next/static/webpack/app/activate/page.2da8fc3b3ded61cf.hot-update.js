"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/activate/page",{

/***/ "(app-pages-browser)/./src/components/Form/form.tsx":
/*!**************************************!*\
  !*** ./src/components/Form/form.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Form: function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib */ \"(app-pages-browser)/./src/lib/index.ts\");\n/* __next_internal_client_entry_do_not_use__ Form auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Form(params) {\n    _s();\n    const formDataDefault = params.fields.reduce((k, v)=>({\n            ...k,\n            [v]: \"\"\n        }), {});\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(formDataDefault);\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"continue\");\n    const statuses = {\n        loading: \"loading\",\n        success: \"success\",\n        submitted: \"submitted\",\n        error: \"error\"\n    };\n    setFormData(code = \"\");\n    const handleChange = (event)=>{\n        const { name, value } = event.target;\n        console.log(name, value);\n        setFormData((values)=>({\n                ...values,\n                [name]: value\n            }));\n    };\n    const handleSubmit = async (event)=>{\n        // const isDirty = Object.keys(formDataDefault).every((k) => {\n        //   console.log(k);\n        //   return formDataDefault[k] !== '';\n        // });\n        console.log(formDataDefault);\n        setStatus(statuses.submitted);\n        event.preventDefault();\n        const response = await fetch(\"/api/login\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                \"x-authorization\": \"\".concat(params.auth),\n                \"x-country-code\": \"us\",\n                \"x-network\": \"amcplus\"\n            },\n            body: JSON.stringify(formData)\n        });\n        const res = await response.json();\n        setStatus(response.status === 200 ? statuses.success : statuses.error);\n    };\n    const emailInput = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"email\",\n                children: \"Email\"\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"email\",\n                name: \"email\",\n                placeholder: \"email address\",\n                value: formData.email || \"\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                children: \"ryan.moore@amcnetworks.com\"\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n    const passwordInput = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"password\",\n                children: \"Password\"\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"password\",\n                name: \"password\",\n                placeholder: \"password\",\n                value: formData.password || \"\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                children: \"cejdi6-capnub-Fyzcyz\"\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n    const activationCodeInput = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"code\",\n                children: \"Activation Code\"\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"code\",\n                placeholder: \"activation code\",\n                value: formData.code || \"\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n    const layoutSelector = (field)=>{\n        switch(field){\n            case \"code\":\n                return activationCodeInput;\n            case \"email\":\n                return emailInput;\n            case \"password\":\n                return passwordInput;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"flex flex-col\",\n                children: [\n                    params.fields.map((field, idx)=>(0,_lib__WEBPACK_IMPORTED_MODULE_2__.addKey)(layoutSelector(field), idx.toString())),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>{\n                            handleSubmit;\n                        },\n                        children: status\n                    }, void 0, false, {\n                        fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: JSON.stringify(formData, null, 2)\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n} // cejdi6-capnub-Fyzcyz\n_s(Form, \"SpP038bUy4DtqPuHkTvanOe3f/Y=\");\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Zvcm0vZm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNpQztBQUNGO0FBTXhCLFNBQVNFLEtBQUtDLE1BQVc7O0lBQzlCLE1BQU1DLGtCQUFrQkQsT0FBT0UsTUFBTSxDQUFDQyxNQUFNLENBQzFDLENBQUNDLEdBQVFDLElBQWU7WUFBRSxHQUFHRCxDQUFDO1lBQUUsQ0FBQ0MsRUFBRSxFQUFFO1FBQUcsSUFDeEMsQ0FBQztJQUdILE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQ0k7SUFDekMsTUFBTSxDQUFDTyxRQUFRQyxVQUFVLEdBQUdaLCtDQUFRQSxDQUFTO0lBQzdDLE1BQU1hLFdBQVc7UUFDZkMsU0FBUztRQUNUQyxTQUFTO1FBQ1RDLFdBQVc7UUFDWEMsT0FBTztJQUNUO0lBQ0FQLFlBQWFRLE9BQU87SUFFcEIsTUFBTUMsZUFBZSxDQUFDQztRQUNwQixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdGLE1BQU1HLE1BQU07UUFDcENDLFFBQVFDLEdBQUcsQ0FBQ0osTUFBTUM7UUFDbEJaLFlBQVksQ0FBQ2dCLFNBQVk7Z0JBQUUsR0FBR0EsTUFBTTtnQkFBRSxDQUFDTCxLQUFLLEVBQUVDO1lBQU07SUFDdEQ7SUFDQSxNQUFNSyxlQUFlLE9BQU9QO1FBQzFCLDhEQUE4RDtRQUM5RCxvQkFBb0I7UUFFcEIsc0NBQXNDO1FBQ3RDLE1BQU07UUFDTkksUUFBUUMsR0FBRyxDQUFDckI7UUFDWlEsVUFBVUMsU0FBU0csU0FBUztRQUM1QkksTUFBTVEsY0FBYztRQUNwQixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sY0FBYztZQUN6Q0MsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtnQkFDaEIsbUJBQW1CLEdBQWUsT0FBWjdCLE9BQU84QixJQUFJO2dCQUNqQyxrQkFBa0I7Z0JBQ2xCLGFBQWE7WUFDZjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUMzQjtRQUN2QjtRQUNBLE1BQU00QixNQUFNLE1BQU1SLFNBQVNTLElBQUk7UUFDL0IxQixVQUFVaUIsU0FBU2xCLE1BQU0sS0FBSyxNQUFNRSxTQUFTRSxPQUFPLEdBQUdGLFNBQVNJLEtBQUs7SUFDdkU7SUFFQSxNQUFNc0IsMkJBQ0o7OzBCQUNFLDhEQUFDQztnQkFBTUMsU0FBUTswQkFBUTs7Ozs7OzBCQUN2Qiw4REFBQ0M7Z0JBQ0NDLE1BQUs7Z0JBQ0x0QixNQUFLO2dCQUNMdUIsYUFBWTtnQkFDWnRCLE9BQU9iLFNBQVNvQyxLQUFLLElBQUk7Z0JBQ3pCQyxVQUFVM0I7Ozs7OzswQkFFWiw4REFBQzRCOzBCQUFNOzs7Ozs7OztJQUlYLE1BQU1DLDhCQUNKOzswQkFDRSw4REFBQ1I7Z0JBQU1DLFNBQVE7MEJBQVc7Ozs7OzswQkFDMUIsOERBQUNDO2dCQUNDQyxNQUFLO2dCQUNMdEIsTUFBSztnQkFDTHVCLGFBQVk7Z0JBQ1p0QixPQUFPYixTQUFTd0MsUUFBUSxJQUFJO2dCQUM1QkgsVUFBVTNCOzs7Ozs7MEJBRVosOERBQUM0QjswQkFBTTs7Ozs7Ozs7SUFJWCxNQUFNRyxvQ0FDSjs7MEJBQ0UsOERBQUNWO2dCQUFNQyxTQUFROzBCQUFPOzs7Ozs7MEJBQ3RCLDhEQUFDQztnQkFDQ0MsTUFBSztnQkFDTHRCLE1BQUs7Z0JBQ0x1QixhQUFZO2dCQUNadEIsT0FBT2IsU0FBU1MsSUFBSSxJQUFJO2dCQUN4QjRCLFVBQVUzQjs7Ozs7Ozs7SUFLaEIsTUFBTWdDLGlCQUFpQixDQUFDQztRQUN0QixPQUFRQTtZQUNOLEtBQUs7Z0JBQ0gsT0FBT0Y7WUFDVCxLQUFLO2dCQUNILE9BQU9YO1lBQ1QsS0FBSztnQkFDSCxPQUFPUztRQUNYO0lBQ0Y7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNLO2dCQUFLQyxVQUFVM0I7Z0JBQWM0QixXQUFVOztvQkFDckNwRCxPQUFPRSxNQUFNLENBQUNtRCxHQUFHLENBQUMsQ0FBQ0osT0FBZUssTUFDakN4RCw0Q0FBTUEsQ0FBQ2tELGVBQWVDLFFBQXVCSyxJQUFJQyxRQUFRO2tDQUUzRCw4REFBQ0M7d0JBQ0NDLFNBQVM7NEJBQ1BqQzt3QkFDRjtrQ0FFQ2hCOzs7Ozs7Ozs7Ozs7MEJBR0wsOERBQUNrRDswQkFBSzFCLEtBQUtDLFNBQVMsQ0FBQzNCLFVBQVUsTUFBTTs7Ozs7Ozs7QUFHM0MsRUFFQSx1QkFBdUI7R0FuSFBQO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Zvcm0vZm9ybS50c3g/N2M3MSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGFkZEtleSB9IGZyb20gJ0AvbGliJztcblxuaW50ZXJmYWNlIFN0YXR1c2VzUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGb3JtKHBhcmFtczogYW55KSB7XG4gIGNvbnN0IGZvcm1EYXRhRGVmYXVsdCA9IHBhcmFtcy5maWVsZHMucmVkdWNlKFxuICAgIChrOiBhbnksIHY6IHN0cmluZykgPT4gKHsgLi4uaywgW3ZdOiAnJyB9KSxcbiAgICB7fVxuICApO1xuXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoZm9ybURhdGFEZWZhdWx0KTtcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlPHN0cmluZz4oJ2NvbnRpbnVlJyk7XG4gIGNvbnN0IHN0YXR1c2VzID0ge1xuICAgIGxvYWRpbmc6ICdsb2FkaW5nJyxcbiAgICBzdWNjZXNzOiAnc3VjY2VzcycsXG4gICAgc3VibWl0dGVkOiAnc3VibWl0dGVkJyxcbiAgICBlcnJvcjogJ2Vycm9yJyxcbiAgfSBhcyBTdGF0dXNlc1Byb3BzO1xuICBzZXRGb3JtRGF0YSgoY29kZSA9ICcnKSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnNvbGUubG9nKG5hbWUsIHZhbHVlKTtcbiAgICBzZXRGb3JtRGF0YSgodmFsdWVzKSA9PiAoeyAuLi52YWx1ZXMsIFtuYW1lXTogdmFsdWUgfSkpO1xuICB9O1xuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgLy8gY29uc3QgaXNEaXJ0eSA9IE9iamVjdC5rZXlzKGZvcm1EYXRhRGVmYXVsdCkuZXZlcnkoKGspID0+IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGspO1xuXG4gICAgLy8gICByZXR1cm4gZm9ybURhdGFEZWZhdWx0W2tdICE9PSAnJztcbiAgICAvLyB9KTtcbiAgICBjb25zb2xlLmxvZyhmb3JtRGF0YURlZmF1bHQpO1xuICAgIHNldFN0YXR1cyhzdGF0dXNlcy5zdWJtaXR0ZWQpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9sb2dpbicsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAneC1hdXRob3JpemF0aW9uJzogYCR7cGFyYW1zLmF1dGh9YCxcbiAgICAgICAgJ3gtY291bnRyeS1jb2RlJzogJ3VzJyxcbiAgICAgICAgJ3gtbmV0d29yayc6ICdhbWNwbHVzJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSksXG4gICAgfSk7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHNldFN0YXR1cyhyZXNwb25zZS5zdGF0dXMgPT09IDIwMCA/IHN0YXR1c2VzLnN1Y2Nlc3MgOiBzdGF0dXNlcy5lcnJvcik7XG4gIH07XG5cbiAgY29uc3QgZW1haWxJbnB1dCA9IChcbiAgICA8PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsIGFkZHJlc3NcIlxuICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZW1haWwgfHwgJyd9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAvPlxuICAgICAgPHNtYWxsPnJ5YW4ubW9vcmVAYW1jbmV0d29ya3MuY29tPC9zbWFsbD5cbiAgICA8Lz5cbiAgKTtcblxuICBjb25zdCBwYXNzd29yZElucHV0ID0gKFxuICAgIDw+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxuICAgICAgICB2YWx1ZT17Zm9ybURhdGEucGFzc3dvcmQgfHwgJyd9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAvPlxuICAgICAgPHNtYWxsPmNlamRpNi1jYXBudWItRnl6Y3l6PC9zbWFsbD5cbiAgICA8Lz5cbiAgKTtcblxuICBjb25zdCBhY3RpdmF0aW9uQ29kZUlucHV0ID0gKFxuICAgIDw+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImNvZGVcIj5BY3RpdmF0aW9uIENvZGU8L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cImNvZGVcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cImFjdGl2YXRpb24gY29kZVwiXG4gICAgICAgIHZhbHVlPXtmb3JtRGF0YS5jb2RlIHx8ICcnfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcblxuICBjb25zdCBsYXlvdXRTZWxlY3RvciA9IChmaWVsZDogc3RyaW5nKTogSlNYLkVsZW1lbnQgfCB1bmRlZmluZWQgPT4ge1xuICAgIHN3aXRjaCAoZmllbGQpIHtcbiAgICAgIGNhc2UgJ2NvZGUnOlxuICAgICAgICByZXR1cm4gYWN0aXZhdGlvbkNvZGVJbnB1dDtcbiAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgcmV0dXJuIGVtYWlsSW5wdXQ7XG4gICAgICBjYXNlICdwYXNzd29yZCc6XG4gICAgICAgIHJldHVybiBwYXNzd29yZElucHV0O1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgIHtwYXJhbXMuZmllbGRzLm1hcCgoZmllbGQ6IHN0cmluZywgaWR4OiBudW1iZXIpID0+XG4gICAgICAgICAgYWRkS2V5KGxheW91dFNlbGVjdG9yKGZpZWxkKSBhcyBKU1guRWxlbWVudCwgaWR4LnRvU3RyaW5nKCkpXG4gICAgICAgICl9XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBoYW5kbGVTdWJtaXQ7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtzdGF0dXN9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkoZm9ybURhdGEsIG51bGwsIDIpfTwvcHJlPlxuICAgIDwvPlxuICApO1xufVxuXG4vLyBjZWpkaTYtY2FwbnViLUZ5emN5elxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiYWRkS2V5IiwiRm9ybSIsInBhcmFtcyIsImZvcm1EYXRhRGVmYXVsdCIsImZpZWxkcyIsInJlZHVjZSIsImsiLCJ2IiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsInN0YXR1cyIsInNldFN0YXR1cyIsInN0YXR1c2VzIiwibG9hZGluZyIsInN1Y2Nlc3MiLCJzdWJtaXR0ZWQiLCJlcnJvciIsImNvZGUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZXMiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYXV0aCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzIiwianNvbiIsImVtYWlsSW5wdXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImVtYWlsIiwib25DaGFuZ2UiLCJzbWFsbCIsInBhc3N3b3JkSW5wdXQiLCJwYXNzd29yZCIsImFjdGl2YXRpb25Db2RlSW5wdXQiLCJsYXlvdXRTZWxlY3RvciIsImZpZWxkIiwiZm9ybSIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwibWFwIiwiaWR4IiwidG9TdHJpbmciLCJidXR0b24iLCJvbkNsaWNrIiwicHJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Form/form.tsx\n"));

/***/ })

});