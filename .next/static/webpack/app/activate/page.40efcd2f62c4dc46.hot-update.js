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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Form: function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib */ \"(app-pages-browser)/./src/lib/index.ts\");\n/* __next_internal_client_entry_do_not_use__ Form auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Form(params) {\n    _s();\n    const formDataDefault = params.fields.reduce((k, v)=>({\n            ...k,\n            [v]: \"\"\n        }), {});\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(formDataDefault);\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"continue\");\n    const statuses = {\n        loading: \"loading\",\n        success: \"success\",\n        submitted: \"submitted\",\n        error: \"error\"\n    };\n    console.log(params);\n    const handleChange = (event)=>{\n        const { name, value } = event.target;\n        console.log(name, value);\n        setFormData((values)=>({\n                ...values,\n                [name]: value\n            }));\n    };\n    const handleSubmit = async (event)=>{\n        // const isDirty = Object.keys(formDataDefault).every((k) => {\n        //   console.log(k);\n        //   return formDataDefault[k] !== '';\n        // });\n        console.log(formDataDefault);\n        setStatus(statuses.submitted);\n        event.preventDefault();\n        const response = await fetch(\"/api/login\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                \"x-authorization\": \"\".concat(params.auth),\n                \"x-country-code\": \"us\",\n                \"x-network\": \"amcplus\"\n            },\n            body: JSON.stringify(formData)\n        });\n        const res = await response.json();\n        setStatus(response.status === 200 ? statuses.success : statuses.error);\n    };\n    const emailInput = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"email\",\n                children: \"Email\"\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"email\",\n                name: \"email\",\n                placeholder: \"email address\",\n                value: formData.email || \"\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                children: \"ryan.moore@amcnetworks.com\"\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n    const passwordInput = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"password\",\n                children: \"Password\"\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"password\",\n                name: \"password\",\n                placeholder: \"password\",\n                value: formData.password || \"\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                children: \"cejdi6-capnub-Fyzcyz\"\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n    const activationCodeInput = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"code\",\n                children: \"Activation Code\"\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"code\",\n                placeholder: \"activation code\",\n                value: formData.code || \"\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n    const layoutSelector = (field)=>{\n        switch(field){\n            case \"code\":\n                return activationCodeInput;\n            case \"email\":\n                return emailInput;\n            case \"password\":\n                return passwordInput;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"flex flex-col\",\n                children: [\n                    params.fields.map((field, idx)=>(0,_lib__WEBPACK_IMPORTED_MODULE_2__.addKey)(layoutSelector(field), idx.toString())),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>{\n                            handleSubmit;\n                        },\n                        children: status\n                    }, void 0, false, {\n                        fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: JSON.stringify(formData, null, 2)\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n} // cejdi6-capnub-Fyzcyz\n_s(Form, \"SpP038bUy4DtqPuHkTvanOe3f/Y=\");\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Zvcm0vZm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNpQztBQUNGO0FBTXhCLFNBQVNFLEtBQUtDLE1BQVc7O0lBQzlCLE1BQU1DLGtCQUFrQkQsT0FBT0UsTUFBTSxDQUFDQyxNQUFNLENBQzFDLENBQUNDLEdBQVFDLElBQWU7WUFBRSxHQUFHRCxDQUFDO1lBQUUsQ0FBQ0MsRUFBRSxFQUFFO1FBQUcsSUFDeEMsQ0FBQztJQUdILE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQ0k7SUFDekMsTUFBTSxDQUFDTyxRQUFRQyxVQUFVLEdBQUdaLCtDQUFRQSxDQUFTO0lBQzdDLE1BQU1hLFdBQVc7UUFDZkMsU0FBUztRQUNUQyxTQUFTO1FBQ1RDLFdBQVc7UUFDWEMsT0FBTztJQUNUO0lBQ0FDLFFBQVFDLEdBQUcsQ0FBQ2hCO0lBRVosTUFBTWlCLGVBQWUsQ0FBQ0M7UUFDcEIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHRixNQUFNRyxNQUFNO1FBQ3BDTixRQUFRQyxHQUFHLENBQUNHLE1BQU1DO1FBQ2xCYixZQUFZLENBQUNlLFNBQVk7Z0JBQUUsR0FBR0EsTUFBTTtnQkFBRSxDQUFDSCxLQUFLLEVBQUVDO1lBQU07SUFDdEQ7SUFDQSxNQUFNRyxlQUFlLE9BQU9MO1FBQzFCLDhEQUE4RDtRQUM5RCxvQkFBb0I7UUFFcEIsc0NBQXNDO1FBQ3RDLE1BQU07UUFDTkgsUUFBUUMsR0FBRyxDQUFDZjtRQUNaUSxVQUFVQyxTQUFTRyxTQUFTO1FBQzVCSyxNQUFNTSxjQUFjO1FBQ3BCLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxjQUFjO1lBQ3pDQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO2dCQUNoQixtQkFBbUIsR0FBZSxPQUFaNUIsT0FBTzZCLElBQUk7Z0JBQ2pDLGtCQUFrQjtnQkFDbEIsYUFBYTtZQUNmO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQzFCO1FBQ3ZCO1FBQ0EsTUFBTTJCLE1BQU0sTUFBTVIsU0FBU1MsSUFBSTtRQUMvQnpCLFVBQVVnQixTQUFTakIsTUFBTSxLQUFLLE1BQU1FLFNBQVNFLE9BQU8sR0FBR0YsU0FBU0ksS0FBSztJQUN2RTtJQUVBLE1BQU1xQiwyQkFDSjs7MEJBQ0UsOERBQUNDO2dCQUFNQyxTQUFROzBCQUFROzs7Ozs7MEJBQ3ZCLDhEQUFDQztnQkFDQ0MsTUFBSztnQkFDTHBCLE1BQUs7Z0JBQ0xxQixhQUFZO2dCQUNacEIsT0FBT2QsU0FBU21DLEtBQUssSUFBSTtnQkFDekJDLFVBQVV6Qjs7Ozs7OzBCQUVaLDhEQUFDMEI7MEJBQU07Ozs7Ozs7O0lBSVgsTUFBTUMsOEJBQ0o7OzBCQUNFLDhEQUFDUjtnQkFBTUMsU0FBUTswQkFBVzs7Ozs7OzBCQUMxQiw4REFBQ0M7Z0JBQ0NDLE1BQUs7Z0JBQ0xwQixNQUFLO2dCQUNMcUIsYUFBWTtnQkFDWnBCLE9BQU9kLFNBQVN1QyxRQUFRLElBQUk7Z0JBQzVCSCxVQUFVekI7Ozs7OzswQkFFWiw4REFBQzBCOzBCQUFNOzs7Ozs7OztJQUlYLE1BQU1HLG9DQUNKOzswQkFDRSw4REFBQ1Y7Z0JBQU1DLFNBQVE7MEJBQU87Ozs7OzswQkFDdEIsOERBQUNDO2dCQUNDQyxNQUFLO2dCQUNMcEIsTUFBSztnQkFDTHFCLGFBQVk7Z0JBQ1pwQixPQUFPZCxTQUFTeUMsSUFBSSxJQUFJO2dCQUN4QkwsVUFBVXpCOzs7Ozs7OztJQUtoQixNQUFNK0IsaUJBQWlCLENBQUNDO1FBQ3RCLE9BQVFBO1lBQ04sS0FBSztnQkFDSCxPQUFPSDtZQUNULEtBQUs7Z0JBQ0gsT0FBT1g7WUFDVCxLQUFLO2dCQUNILE9BQU9TO1FBQ1g7SUFDRjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ007Z0JBQUtDLFVBQVU1QjtnQkFBYzZCLFdBQVU7O29CQUNyQ3BELE9BQU9FLE1BQU0sQ0FBQ21ELEdBQUcsQ0FBQyxDQUFDSixPQUFlSyxNQUNqQ3hELDRDQUFNQSxDQUFDa0QsZUFBZUMsUUFBdUJLLElBQUlDLFFBQVE7a0NBRTNELDhEQUFDQzt3QkFDQ0MsU0FBUzs0QkFDUGxDO3dCQUNGO2tDQUVDZjs7Ozs7Ozs7Ozs7OzBCQUdMLDhEQUFDa0Q7MEJBQUszQixLQUFLQyxTQUFTLENBQUMxQixVQUFVLE1BQU07Ozs7Ozs7O0FBRzNDLEVBRUEsdUJBQXVCO0dBbkhQUDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb3JtL2Zvcm0udHN4PzdjNzEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBhZGRLZXkgfSBmcm9tICdAL2xpYic7XG5cbmludGVyZmFjZSBTdGF0dXNlc1Byb3BzIHtcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRm9ybShwYXJhbXM6IGFueSkge1xuICBjb25zdCBmb3JtRGF0YURlZmF1bHQgPSBwYXJhbXMuZmllbGRzLnJlZHVjZShcbiAgICAoazogYW55LCB2OiBzdHJpbmcpID0+ICh7IC4uLmssIFt2XTogJycgfSksXG4gICAge31cbiAgKTtcblxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKGZvcm1EYXRhRGVmYXVsdCk7XG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZTxzdHJpbmc+KCdjb250aW51ZScpO1xuICBjb25zdCBzdGF0dXNlcyA9IHtcbiAgICBsb2FkaW5nOiAnbG9hZGluZycsXG4gICAgc3VjY2VzczogJ3N1Y2Nlc3MnLFxuICAgIHN1Ym1pdHRlZDogJ3N1Ym1pdHRlZCcsXG4gICAgZXJyb3I6ICdlcnJvcicsXG4gIH0gYXMgU3RhdHVzZXNQcm9wcztcbiAgY29uc29sZS5sb2cocGFyYW1zKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc29sZS5sb2cobmFtZSwgdmFsdWUpO1xuICAgIHNldEZvcm1EYXRhKCh2YWx1ZXMpID0+ICh7IC4uLnZhbHVlcywgW25hbWVdOiB2YWx1ZSB9KSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICAvLyBjb25zdCBpc0RpcnR5ID0gT2JqZWN0LmtleXMoZm9ybURhdGFEZWZhdWx0KS5ldmVyeSgoaykgPT4ge1xuICAgIC8vICAgY29uc29sZS5sb2coayk7XG5cbiAgICAvLyAgIHJldHVybiBmb3JtRGF0YURlZmF1bHRba10gIT09ICcnO1xuICAgIC8vIH0pO1xuICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhRGVmYXVsdCk7XG4gICAgc2V0U3RhdHVzKHN0YXR1c2VzLnN1Ym1pdHRlZCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2xvZ2luJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWF1dGhvcml6YXRpb24nOiBgJHtwYXJhbXMuYXV0aH1gLFxuICAgICAgICAneC1jb3VudHJ5LWNvZGUnOiAndXMnLFxuICAgICAgICAneC1uZXR3b3JrJzogJ2FtY3BsdXMnLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKSxcbiAgICB9KTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgc2V0U3RhdHVzKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwID8gc3RhdHVzZXMuc3VjY2VzcyA6IHN0YXR1c2VzLmVycm9yKTtcbiAgfTtcblxuICBjb25zdCBlbWFpbElucHV0ID0gKFxuICAgIDw+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWwgYWRkcmVzc1wiXG4gICAgICAgIHZhbHVlPXtmb3JtRGF0YS5lbWFpbCB8fCAnJ31cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgIC8+XG4gICAgICA8c21hbGw+cnlhbi5tb29yZUBhbWNuZXR3b3Jrcy5jb208L3NtYWxsPlxuICAgIDwvPlxuICApO1xuXG4gIGNvbnN0IHBhc3N3b3JkSW5wdXQgPSAoXG4gICAgPD5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXG4gICAgICAgIHZhbHVlPXtmb3JtRGF0YS5wYXNzd29yZCB8fCAnJ31cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgIC8+XG4gICAgICA8c21hbGw+Y2VqZGk2LWNhcG51Yi1GeXpjeXo8L3NtYWxsPlxuICAgIDwvPlxuICApO1xuXG4gIGNvbnN0IGFjdGl2YXRpb25Db2RlSW5wdXQgPSAoXG4gICAgPD5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29kZVwiPkFjdGl2YXRpb24gQ29kZTwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBuYW1lPVwiY29kZVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiYWN0aXZhdGlvbiBjb2RlXCJcbiAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmNvZGUgfHwgJyd9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xuXG4gIGNvbnN0IGxheW91dFNlbGVjdG9yID0gKGZpZWxkOiBzdHJpbmcpOiBKU1guRWxlbWVudCB8IHVuZGVmaW5lZCA9PiB7XG4gICAgc3dpdGNoIChmaWVsZCkge1xuICAgICAgY2FzZSAnY29kZSc6XG4gICAgICAgIHJldHVybiBhY3RpdmF0aW9uQ29kZUlucHV0O1xuICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgICByZXR1cm4gZW1haWxJbnB1dDtcbiAgICAgIGNhc2UgJ3Bhc3N3b3JkJzpcbiAgICAgICAgcmV0dXJuIHBhc3N3b3JkSW5wdXQ7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAge3BhcmFtcy5maWVsZHMubWFwKChmaWVsZDogc3RyaW5nLCBpZHg6IG51bWJlcikgPT5cbiAgICAgICAgICBhZGRLZXkobGF5b3V0U2VsZWN0b3IoZmllbGQpIGFzIEpTWC5FbGVtZW50LCBpZHgudG9TdHJpbmcoKSlcbiAgICAgICAgKX1cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGhhbmRsZVN1Ym1pdDtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge3N0YXR1c31cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShmb3JtRGF0YSwgbnVsbCwgMil9PC9wcmU+XG4gICAgPC8+XG4gICk7XG59XG5cbi8vIGNlamRpNi1jYXBudWItRnl6Y3l6XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJhZGRLZXkiLCJGb3JtIiwicGFyYW1zIiwiZm9ybURhdGFEZWZhdWx0IiwiZmllbGRzIiwicmVkdWNlIiwiayIsInYiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwic3RhdHVzIiwic2V0U3RhdHVzIiwic3RhdHVzZXMiLCJsb2FkaW5nIiwic3VjY2VzcyIsInN1Ym1pdHRlZCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwidmFsdWVzIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImF1dGgiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImpzb24iLCJlbWFpbElucHV0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJlbWFpbCIsIm9uQ2hhbmdlIiwic21hbGwiLCJwYXNzd29yZElucHV0IiwicGFzc3dvcmQiLCJhY3RpdmF0aW9uQ29kZUlucHV0IiwiY29kZSIsImxheW91dFNlbGVjdG9yIiwiZmllbGQiLCJmb3JtIiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJtYXAiLCJpZHgiLCJ0b1N0cmluZyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Form/form.tsx\n"));

/***/ })

});