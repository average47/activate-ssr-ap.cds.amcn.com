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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Form: function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib */ \"(app-pages-browser)/./src/lib/index.ts\");\n/* __next_internal_client_entry_do_not_use__ Form auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Form(params) {\n    _s();\n    const formDataDefault = params.fields.reduce((k, v)=>({\n            ...k,\n            [v]: {\n                value: v === \"code\" ? params.code : \"\",\n                dirty: v === \"code\" && params.code !== \"\" ? true : false\n            }\n        }), {});\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(formDataDefault);\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"continue\");\n    const statuses = {\n        loading: \"loading\",\n        success: \"success\",\n        submitted: \"submitted\",\n        error: \"error\"\n    };\n    const handleChange = (event)=>{\n        const { name, value } = event.target;\n        setFormData((values)=>({\n                ...values,\n                [name]: {\n                    value: value,\n                    dirty: true\n                }\n            }));\n    };\n    const handleSubmit = async (event)=>{\n        const isDirty = Object.keys(formDataDefault).every((k)=>!formData[k].dirty);\n        console.log(isDirty);\n        setStatus(statuses.submitted);\n        event.preventDefault();\n        const response = await fetch(\"/api/login\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                \"x-authorization\": \"\".concat(params.auth),\n                \"x-country-code\": \"us\",\n                \"x-network\": \"amcplus\"\n            },\n            body: JSON.stringify(formData)\n        });\n        const res = await response.json();\n        setStatus(response.status === 200 ? statuses.success : statuses.error);\n    };\n    const emailInput = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"email\",\n                children: \"Email\"\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"email\",\n                name: \"email\",\n                placeholder: \"email address\",\n                value: formData.email.value || \"\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                children: \"ryan.moore@amcnetworks.com\"\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n    const passwordInput = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"password\",\n                children: \"Password\"\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"password\",\n                name: \"password\",\n                placeholder: \"password\",\n                value: formData.password.value || \"\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                children: \"cejdi6-capnub-Fyzcyz\"\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n    const activationCodeInput = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"code\",\n                children: \"Activation Code\"\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"code\",\n                placeholder: \"activation code\",\n                value: formData.code.value || \"\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n    const layoutSelector = (field)=>{\n        switch(field){\n            case \"code\":\n                return activationCodeInput;\n            case \"email\":\n                return emailInput;\n            case \"password\":\n                return passwordInput;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"flex flex-col\",\n                children: [\n                    params.fields.map((field, idx)=>(0,_lib__WEBPACK_IMPORTED_MODULE_2__.addKey)(layoutSelector(field), idx.toString())),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>{\n                            handleSubmit;\n                        },\n                        children: status\n                    }, void 0, false, {\n                        fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: JSON.stringify(formData, null, 2)\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n} // cejdi6-capnub-Fyzcyz\n_s(Form, \"SpP038bUy4DtqPuHkTvanOe3f/Y=\");\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Zvcm0vZm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNpQztBQUNGO0FBTXhCLFNBQVNFLEtBQUtDLE1BQVc7O0lBQzlCLE1BQU1DLGtCQUFrQkQsT0FBT0UsTUFBTSxDQUFDQyxNQUFNLENBQzFDLENBQUNDLEdBQVFDLElBQWU7WUFDdEIsR0FBR0QsQ0FBQztZQUNKLENBQUNDLEVBQUUsRUFBRTtnQkFDSEMsT0FBT0QsTUFBTSxTQUFTTCxPQUFPTyxJQUFJLEdBQUc7Z0JBQ3BDQyxPQUFPSCxNQUFNLFVBQVVMLE9BQU9PLElBQUksS0FBSyxLQUFLLE9BQU87WUFDckQ7UUFDRixJQUNBLENBQUM7SUFFSCxNQUFNLENBQUNFLFVBQVVDLFlBQVksR0FBR2IsK0NBQVFBLENBQUNJO0lBQ3pDLE1BQU0sQ0FBQ1UsUUFBUUMsVUFBVSxHQUFHZiwrQ0FBUUEsQ0FBUztJQUM3QyxNQUFNZ0IsV0FBVztRQUNmQyxTQUFTO1FBQ1RDLFNBQVM7UUFDVEMsV0FBVztRQUNYQyxPQUFPO0lBQ1Q7SUFFQSxNQUFNQyxlQUFlLENBQUNDO1FBQ3BCLE1BQU0sRUFBRUMsSUFBSSxFQUFFZCxLQUFLLEVBQUUsR0FBR2EsTUFBTUUsTUFBTTtRQUNwQ1gsWUFBWSxDQUFDWSxTQUFZO2dCQUN2QixHQUFHQSxNQUFNO2dCQUNULENBQUNGLEtBQUssRUFBRTtvQkFBRWQsT0FBT0E7b0JBQU9FLE9BQU87Z0JBQUs7WUFDdEM7SUFDRjtJQUNBLE1BQU1lLGVBQWUsT0FBT0o7UUFDMUIsTUFBTUssVUFBVUMsT0FBT0MsSUFBSSxDQUFDekIsaUJBQWlCMEIsS0FBSyxDQUNoRCxDQUFDdkIsSUFBTSxDQUFDSyxRQUFRLENBQUNMLEVBQUUsQ0FBQ0ksS0FBSztRQUUzQm9CLFFBQVFDLEdBQUcsQ0FBQ0w7UUFDWlosVUFBVUMsU0FBU0csU0FBUztRQUM1QkcsTUFBTVcsY0FBYztRQUNwQixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sY0FBYztZQUN6Q0MsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtnQkFDaEIsbUJBQW1CLEdBQWUsT0FBWmxDLE9BQU9tQyxJQUFJO2dCQUNqQyxrQkFBa0I7Z0JBQ2xCLGFBQWE7WUFDZjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM3QjtRQUN2QjtRQUNBLE1BQU04QixNQUFNLE1BQU1SLFNBQVNTLElBQUk7UUFDL0I1QixVQUFVbUIsU0FBU3BCLE1BQU0sS0FBSyxNQUFNRSxTQUFTRSxPQUFPLEdBQUdGLFNBQVNJLEtBQUs7SUFDdkU7SUFFQSxNQUFNd0IsMkJBQ0o7OzBCQUNFLDhEQUFDQztnQkFBTUMsU0FBUTswQkFBUTs7Ozs7OzBCQUN2Qiw4REFBQ0M7Z0JBQ0NDLE1BQUs7Z0JBQ0x6QixNQUFLO2dCQUNMMEIsYUFBWTtnQkFDWnhDLE9BQU9HLFNBQVNzQyxLQUFLLENBQUN6QyxLQUFLLElBQUk7Z0JBQy9CMEMsVUFBVTlCOzs7Ozs7MEJBRVosOERBQUMrQjswQkFBTTs7Ozs7Ozs7SUFJWCxNQUFNQyw4QkFDSjs7MEJBQ0UsOERBQUNSO2dCQUFNQyxTQUFROzBCQUFXOzs7Ozs7MEJBQzFCLDhEQUFDQztnQkFDQ0MsTUFBSztnQkFDTHpCLE1BQUs7Z0JBQ0wwQixhQUFZO2dCQUNaeEMsT0FBT0csU0FBUzBDLFFBQVEsQ0FBQzdDLEtBQUssSUFBSTtnQkFDbEMwQyxVQUFVOUI7Ozs7OzswQkFFWiw4REFBQytCOzBCQUFNOzs7Ozs7OztJQUlYLE1BQU1HLG9DQUNKOzswQkFDRSw4REFBQ1Y7Z0JBQU1DLFNBQVE7MEJBQU87Ozs7OzswQkFDdEIsOERBQUNDO2dCQUNDQyxNQUFLO2dCQUNMekIsTUFBSztnQkFDTDBCLGFBQVk7Z0JBQ1p4QyxPQUFPRyxTQUFTRixJQUFJLENBQUNELEtBQUssSUFBSTtnQkFDOUIwQyxVQUFVOUI7Ozs7Ozs7O0lBS2hCLE1BQU1tQyxpQkFBaUIsQ0FBQ0M7UUFDdEIsT0FBUUE7WUFDTixLQUFLO2dCQUNILE9BQU9GO1lBQ1QsS0FBSztnQkFDSCxPQUFPWDtZQUNULEtBQUs7Z0JBQ0gsT0FBT1M7UUFDWDtJQUNGO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDSztnQkFBS0MsVUFBVWpDO2dCQUFja0MsV0FBVTs7b0JBQ3JDekQsT0FBT0UsTUFBTSxDQUFDd0QsR0FBRyxDQUFDLENBQUNKLE9BQWVLLE1BQ2pDN0QsNENBQU1BLENBQUN1RCxlQUFlQyxRQUF1QkssSUFBSUMsUUFBUTtrQ0FFM0QsOERBQUNDO3dCQUNDQyxTQUFTOzRCQUNQdkM7d0JBQ0Y7a0NBRUNaOzs7Ozs7Ozs7Ozs7MEJBR0wsOERBQUNvRDswQkFBSzFCLEtBQUtDLFNBQVMsQ0FBQzdCLFVBQVUsTUFBTTs7Ozs7Ozs7QUFHM0MsRUFFQSx1QkFBdUI7R0F2SFBWO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Zvcm0vZm9ybS50c3g/N2M3MSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGFkZEtleSB9IGZyb20gJ0AvbGliJztcblxuaW50ZXJmYWNlIFN0YXR1c2VzUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGb3JtKHBhcmFtczogYW55KSB7XG4gIGNvbnN0IGZvcm1EYXRhRGVmYXVsdCA9IHBhcmFtcy5maWVsZHMucmVkdWNlKFxuICAgIChrOiBhbnksIHY6IHN0cmluZykgPT4gKHtcbiAgICAgIC4uLmssXG4gICAgICBbdl06IHtcbiAgICAgICAgdmFsdWU6IHYgPT09ICdjb2RlJyA/IHBhcmFtcy5jb2RlIDogJycsXG4gICAgICAgIGRpcnR5OiB2ID09PSAnY29kZScgJiYgcGFyYW1zLmNvZGUgIT09ICcnID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICB7fVxuICApO1xuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKGZvcm1EYXRhRGVmYXVsdCk7XG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZTxzdHJpbmc+KCdjb250aW51ZScpO1xuICBjb25zdCBzdGF0dXNlcyA9IHtcbiAgICBsb2FkaW5nOiAnbG9hZGluZycsXG4gICAgc3VjY2VzczogJ3N1Y2Nlc3MnLFxuICAgIHN1Ym1pdHRlZDogJ3N1Ym1pdHRlZCcsXG4gICAgZXJyb3I6ICdlcnJvcicsXG4gIH0gYXMgU3RhdHVzZXNQcm9wcztcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgc2V0Rm9ybURhdGEoKHZhbHVlcykgPT4gKHtcbiAgICAgIC4uLnZhbHVlcyxcbiAgICAgIFtuYW1lXTogeyB2YWx1ZTogdmFsdWUsIGRpcnR5OiB0cnVlIH0sXG4gICAgfSkpO1xuICB9O1xuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgaXNEaXJ0eSA9IE9iamVjdC5rZXlzKGZvcm1EYXRhRGVmYXVsdCkuZXZlcnkoXG4gICAgICAoaykgPT4gIWZvcm1EYXRhW2tdLmRpcnR5XG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyhpc0RpcnR5KTtcbiAgICBzZXRTdGF0dXMoc3RhdHVzZXMuc3VibWl0dGVkKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvbG9naW4nLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYXV0aG9yaXphdGlvbic6IGAke3BhcmFtcy5hdXRofWAsXG4gICAgICAgICd4LWNvdW50cnktY29kZSc6ICd1cycsXG4gICAgICAgICd4LW5ldHdvcmsnOiAnYW1jcGx1cycsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpLFxuICAgIH0pO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBzZXRTdGF0dXMocmVzcG9uc2Uuc3RhdHVzID09PSAyMDAgPyBzdGF0dXNlcy5zdWNjZXNzIDogc3RhdHVzZXMuZXJyb3IpO1xuICB9O1xuXG4gIGNvbnN0IGVtYWlsSW5wdXQgPSAoXG4gICAgPD5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbCBhZGRyZXNzXCJcbiAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsLnZhbHVlIHx8ICcnfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgLz5cbiAgICAgIDxzbWFsbD5yeWFuLm1vb3JlQGFtY25ldHdvcmtzLmNvbTwvc21hbGw+XG4gICAgPC8+XG4gICk7XG5cbiAgY29uc3QgcGFzc3dvcmRJbnB1dCA9IChcbiAgICA8PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcbiAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnBhc3N3b3JkLnZhbHVlIHx8ICcnfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgLz5cbiAgICAgIDxzbWFsbD5jZWpkaTYtY2FwbnViLUZ5emN5ejwvc21hbGw+XG4gICAgPC8+XG4gICk7XG5cbiAgY29uc3QgYWN0aXZhdGlvbkNvZGVJbnB1dCA9IChcbiAgICA8PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb2RlXCI+QWN0aXZhdGlvbiBDb2RlPC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIG5hbWU9XCJjb2RlXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJhY3RpdmF0aW9uIGNvZGVcIlxuICAgICAgICB2YWx1ZT17Zm9ybURhdGEuY29kZS52YWx1ZSB8fCAnJ31cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG5cbiAgY29uc3QgbGF5b3V0U2VsZWN0b3IgPSAoZmllbGQ6IHN0cmluZyk6IEpTWC5FbGVtZW50IHwgdW5kZWZpbmVkID0+IHtcbiAgICBzd2l0Y2ggKGZpZWxkKSB7XG4gICAgICBjYXNlICdjb2RlJzpcbiAgICAgICAgcmV0dXJuIGFjdGl2YXRpb25Db2RlSW5wdXQ7XG4gICAgICBjYXNlICdlbWFpbCc6XG4gICAgICAgIHJldHVybiBlbWFpbElucHV0O1xuICAgICAgY2FzZSAncGFzc3dvcmQnOlxuICAgICAgICByZXR1cm4gcGFzc3dvcmRJbnB1dDtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICB7cGFyYW1zLmZpZWxkcy5tYXAoKGZpZWxkOiBzdHJpbmcsIGlkeDogbnVtYmVyKSA9PlxuICAgICAgICAgIGFkZEtleShsYXlvdXRTZWxlY3RvcihmaWVsZCkgYXMgSlNYLkVsZW1lbnQsIGlkeC50b1N0cmluZygpKVxuICAgICAgICApfVxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgaGFuZGxlU3VibWl0O1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7c3RhdHVzfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KGZvcm1EYXRhLCBudWxsLCAyKX08L3ByZT5cbiAgICA8Lz5cbiAgKTtcbn1cblxuLy8gY2VqZGk2LWNhcG51Yi1GeXpjeXpcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImFkZEtleSIsIkZvcm0iLCJwYXJhbXMiLCJmb3JtRGF0YURlZmF1bHQiLCJmaWVsZHMiLCJyZWR1Y2UiLCJrIiwidiIsInZhbHVlIiwiY29kZSIsImRpcnR5IiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsInN0YXR1cyIsInNldFN0YXR1cyIsInN0YXR1c2VzIiwibG9hZGluZyIsInN1Y2Nlc3MiLCJzdWJtaXR0ZWQiLCJlcnJvciIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwibmFtZSIsInRhcmdldCIsInZhbHVlcyIsImhhbmRsZVN1Ym1pdCIsImlzRGlydHkiLCJPYmplY3QiLCJrZXlzIiwiZXZlcnkiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImF1dGgiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImpzb24iLCJlbWFpbElucHV0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJlbWFpbCIsIm9uQ2hhbmdlIiwic21hbGwiLCJwYXNzd29yZElucHV0IiwicGFzc3dvcmQiLCJhY3RpdmF0aW9uQ29kZUlucHV0IiwibGF5b3V0U2VsZWN0b3IiLCJmaWVsZCIsImZvcm0iLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsIm1hcCIsImlkeCIsInRvU3RyaW5nIiwiYnV0dG9uIiwib25DbGljayIsInByZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Form/form.tsx\n"));

/***/ })

});