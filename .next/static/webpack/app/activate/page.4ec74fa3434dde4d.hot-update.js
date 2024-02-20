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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Form: function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib */ \"(app-pages-browser)/./src/lib/index.ts\");\n/* __next_internal_client_entry_do_not_use__ Form auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Form(params) {\n    _s();\n    const formDataDefault = params.fields.reduce((k, v)=>({\n            ...k,\n            [v]: {\n                value: v === \"code\" ? params.code : \"\",\n                dirty: v === \"code\" && params.code !== \"\" ? true : false\n            }\n        }), {});\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(formDataDefault);\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"continue\");\n    const statuses = {\n        loading: \"loading\",\n        success: \"success\",\n        submitted: \"submitted\",\n        error: \"error\"\n    };\n    const handleChange = (event)=>{\n        const { name, value } = event.target;\n        setFormData((values)=>({\n                ...values,\n                [name]: {\n                    value: value,\n                    dirty: true\n                }\n            }));\n    };\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const isDirty = Object.keys(formDataDefault).every((k)=>formData[k].dirty);\n        if (!isDirty) {\n            console.log(\"form is not dirty\");\n            setStatus(statuses.error);\n            return;\n        }\n        setStatus(statuses.submitted);\n        const response = await fetch(\"/api/login\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                \"x-authorization\": \"\".concat(params.auth),\n                \"x-country-code\": \"us\",\n                \"x-network\": \"amcplus\"\n            },\n            body: JSON.stringify(formData)\n        });\n        const res = await response.json();\n        setStatus(response.status === 200 ? statuses.success : statuses.error);\n    };\n    const emailInput = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"email\",\n                className: !formData.email.dirty && status === \"error\" ? \"text-rose-500\" : \"text-black\",\n                children: \"Email\"\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"border-solid border-2 rounded-md p-2 \".concat(!formData.code.dirty && status === \"error\" ? \"border-rose-500\" : \"border-black\"),\n                type: \"email\",\n                name: \"email\",\n                placeholder: \"email address\",\n                value: formData.email.value || \"\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                children: \"ryan.moore@amcnetworks.com\"\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n    const passwordInput = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"password\",\n                className: !formData.password.dirty && status === \"error\" ? \"text-rose-500\" : \"text-black\",\n                children: \"Password\"\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"border-solid border-2 rounded-md p-2 \".concat(!formData.code.dirty && status === \"error\" ? \"border-rose-500\" : \"border-black\"),\n                type: \"password\",\n                name: \"password\",\n                placeholder: \"password\",\n                value: formData.password.value || \"\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                children: \"cejdi6-capnub-Fyzcyz\"\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n    const activationCodeInput = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"code\",\n                className: !formData.code.dirty && status === \"error\" ? \"text-rose-500\" : \"text-black\",\n                children: \"Activation Code\"\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"border-solid border-2 rounded-md p-2 \".concat(!formData.code.dirty && status === \"error\" ? \"border-rose-500\" : \"border-black\"),\n                type: \"text\",\n                name: \"code\",\n                placeholder: \"activation code\",\n                value: formData.code.value || \"\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n    const layoutSelector = (field)=>{\n        switch(field){\n            case \"code\":\n                return activationCodeInput;\n            case \"email\":\n                return emailInput;\n            case \"password\":\n                return passwordInput;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"flex flex-col\",\n                children: [\n                    params.fields.map((field, idx)=>(0,_lib__WEBPACK_IMPORTED_MODULE_2__.addKey)(layoutSelector(field), idx.toString())),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>{\n                            handleSubmit;\n                        },\n                        children: status\n                    }, void 0, false, {\n                        fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                        lineNumber: 150,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 146,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: JSON.stringify(formData, null, 2)\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 158,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n} // cejdi6-capnub-Fyzcyz\n_s(Form, \"SpP038bUy4DtqPuHkTvanOe3f/Y=\");\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Zvcm0vZm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNpQztBQUNGO0FBTXhCLFNBQVNFLEtBQUtDLE1BQVc7O0lBQzlCLE1BQU1DLGtCQUFrQkQsT0FBT0UsTUFBTSxDQUFDQyxNQUFNLENBQzFDLENBQUNDLEdBQVFDLElBQWU7WUFDdEIsR0FBR0QsQ0FBQztZQUNKLENBQUNDLEVBQUUsRUFBRTtnQkFDSEMsT0FBT0QsTUFBTSxTQUFTTCxPQUFPTyxJQUFJLEdBQUc7Z0JBQ3BDQyxPQUFPSCxNQUFNLFVBQVVMLE9BQU9PLElBQUksS0FBSyxLQUFLLE9BQU87WUFDckQ7UUFDRixJQUNBLENBQUM7SUFFSCxNQUFNLENBQUNFLFVBQVVDLFlBQVksR0FBR2IsK0NBQVFBLENBQUNJO0lBQ3pDLE1BQU0sQ0FBQ1UsUUFBUUMsVUFBVSxHQUFHZiwrQ0FBUUEsQ0FBUztJQUM3QyxNQUFNZ0IsV0FBVztRQUNmQyxTQUFTO1FBQ1RDLFNBQVM7UUFDVEMsV0FBVztRQUNYQyxPQUFPO0lBQ1Q7SUFFQSxNQUFNQyxlQUFlLENBQUNDO1FBQ3BCLE1BQU0sRUFBRUMsSUFBSSxFQUFFZCxLQUFLLEVBQUUsR0FBR2EsTUFBTUUsTUFBTTtRQUNwQ1gsWUFBWSxDQUFDWSxTQUFZO2dCQUN2QixHQUFHQSxNQUFNO2dCQUNULENBQUNGLEtBQUssRUFBRTtvQkFBRWQsT0FBT0E7b0JBQU9FLE9BQU87Z0JBQUs7WUFDdEM7SUFDRjtJQUNBLE1BQU1lLGVBQWUsT0FBT0o7UUFDMUJBLE1BQU1LLGNBQWM7UUFDcEIsTUFBTUMsVUFBVUMsT0FBT0MsSUFBSSxDQUFDMUIsaUJBQWlCMkIsS0FBSyxDQUNoRCxDQUFDeEIsSUFBTUssUUFBUSxDQUFDTCxFQUFFLENBQUNJLEtBQUs7UUFFMUIsSUFBSSxDQUFDaUIsU0FBUztZQUNaSSxRQUFRQyxHQUFHLENBQUM7WUFDWmxCLFVBQVVDLFNBQVNJLEtBQUs7WUFDeEI7UUFDRjtRQUNBTCxVQUFVQyxTQUFTRyxTQUFTO1FBRTVCLE1BQU1lLFdBQVcsTUFBTUMsTUFBTSxjQUFjO1lBQ3pDQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO2dCQUNoQixtQkFBbUIsR0FBZSxPQUFabEMsT0FBT21DLElBQUk7Z0JBQ2pDLGtCQUFrQjtnQkFDbEIsYUFBYTtZQUNmO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQzdCO1FBQ3ZCO1FBQ0EsTUFBTThCLE1BQU0sTUFBTVIsU0FBU1MsSUFBSTtRQUMvQjVCLFVBQVVtQixTQUFTcEIsTUFBTSxLQUFLLE1BQU1FLFNBQVNFLE9BQU8sR0FBR0YsU0FBU0ksS0FBSztJQUN2RTtJQUVBLE1BQU13QiwyQkFDSjs7MEJBQ0UsOERBQUNDO2dCQUNDQyxTQUFRO2dCQUNSQyxXQUNFLENBQUNuQyxTQUFTb0MsS0FBSyxDQUFDckMsS0FBSyxJQUFJRyxXQUFXLFVBQ2hDLGtCQUNBOzBCQUVQOzs7Ozs7MEJBR0QsOERBQUNtQztnQkFDQ0YsV0FBVyx3Q0FBd0gsT0FBaEYsQ0FBQ25DLFNBQVNGLElBQUksQ0FBQ0MsS0FBSyxJQUFJRyxXQUFXLFVBQVUsb0JBQW9CO2dCQUNwSG9DLE1BQUs7Z0JBQ0wzQixNQUFLO2dCQUNMNEIsYUFBWTtnQkFDWjFDLE9BQU9HLFNBQVNvQyxLQUFLLENBQUN2QyxLQUFLLElBQUk7Z0JBQy9CMkMsVUFBVS9COzs7Ozs7MEJBRVosOERBQUNnQzswQkFBTTs7Ozs7Ozs7SUFJWCxNQUFNQyw4QkFDSjs7MEJBQ0UsOERBQUNUO2dCQUNDQyxTQUFRO2dCQUNSQyxXQUNFLENBQUNuQyxTQUFTMkMsUUFBUSxDQUFDNUMsS0FBSyxJQUFJRyxXQUFXLFVBQ25DLGtCQUNBOzBCQUVQOzs7Ozs7MEJBR0QsOERBQUNtQztnQkFDQ0YsV0FBVyx3Q0FBd0gsT0FBaEYsQ0FBQ25DLFNBQVNGLElBQUksQ0FBQ0MsS0FBSyxJQUFJRyxXQUFXLFVBQVUsb0JBQW9CO2dCQUNwSG9DLE1BQUs7Z0JBQ0wzQixNQUFLO2dCQUNMNEIsYUFBWTtnQkFDWjFDLE9BQU9HLFNBQVMyQyxRQUFRLENBQUM5QyxLQUFLLElBQUk7Z0JBQ2xDMkMsVUFBVS9COzs7Ozs7MEJBRVosOERBQUNnQzswQkFBTTs7Ozs7Ozs7SUFJWCxNQUFNRyxvQ0FDSjs7MEJBQ0UsOERBQUNYO2dCQUNDQyxTQUFRO2dCQUNSQyxXQUNFLENBQUNuQyxTQUFTRixJQUFJLENBQUNDLEtBQUssSUFBSUcsV0FBVyxVQUMvQixrQkFDQTswQkFFUDs7Ozs7OzBCQUdELDhEQUFDbUM7Z0JBQ0NGLFdBQVcsd0NBQXdILE9BQWhGLENBQUNuQyxTQUFTRixJQUFJLENBQUNDLEtBQUssSUFBSUcsV0FBVyxVQUFVLG9CQUFvQjtnQkFDcEhvQyxNQUFLO2dCQUNMM0IsTUFBSztnQkFDTDRCLGFBQVk7Z0JBQ1oxQyxPQUFPRyxTQUFTRixJQUFJLENBQUNELEtBQUssSUFBSTtnQkFDOUIyQyxVQUFVL0I7Ozs7Ozs7O0lBS2hCLE1BQU1vQyxpQkFBaUIsQ0FBQ0M7UUFDdEIsT0FBUUE7WUFDTixLQUFLO2dCQUNILE9BQU9GO1lBQ1QsS0FBSztnQkFDSCxPQUFPWjtZQUNULEtBQUs7Z0JBQ0gsT0FBT1U7UUFDWDtJQUNGO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDSztnQkFBS0MsVUFBVWxDO2dCQUFjcUIsV0FBVTs7b0JBQ3JDNUMsT0FBT0UsTUFBTSxDQUFDd0QsR0FBRyxDQUFDLENBQUNILE9BQWVJLE1BQ2pDN0QsNENBQU1BLENBQUN3RCxlQUFlQyxRQUF1QkksSUFBSUMsUUFBUTtrQ0FFM0QsOERBQUNDO3dCQUNDQyxTQUFTOzRCQUNQdkM7d0JBQ0Y7a0NBRUNaOzs7Ozs7Ozs7Ozs7MEJBR0wsOERBQUNvRDswQkFBSzFCLEtBQUtDLFNBQVMsQ0FBQzdCLFVBQVUsTUFBTTs7Ozs7Ozs7QUFHM0MsRUFFQSx1QkFBdUI7R0ExSlBWO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Zvcm0vZm9ybS50c3g/N2M3MSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGFkZEtleSB9IGZyb20gJ0AvbGliJztcblxuaW50ZXJmYWNlIFN0YXR1c2VzUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGb3JtKHBhcmFtczogYW55KSB7XG4gIGNvbnN0IGZvcm1EYXRhRGVmYXVsdCA9IHBhcmFtcy5maWVsZHMucmVkdWNlKFxuICAgIChrOiBhbnksIHY6IHN0cmluZykgPT4gKHtcbiAgICAgIC4uLmssXG4gICAgICBbdl06IHtcbiAgICAgICAgdmFsdWU6IHYgPT09ICdjb2RlJyA/IHBhcmFtcy5jb2RlIDogJycsXG4gICAgICAgIGRpcnR5OiB2ID09PSAnY29kZScgJiYgcGFyYW1zLmNvZGUgIT09ICcnID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICB7fVxuICApO1xuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKGZvcm1EYXRhRGVmYXVsdCk7XG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZTxzdHJpbmc+KCdjb250aW51ZScpO1xuICBjb25zdCBzdGF0dXNlcyA9IHtcbiAgICBsb2FkaW5nOiAnbG9hZGluZycsXG4gICAgc3VjY2VzczogJ3N1Y2Nlc3MnLFxuICAgIHN1Ym1pdHRlZDogJ3N1Ym1pdHRlZCcsXG4gICAgZXJyb3I6ICdlcnJvcicsXG4gIH0gYXMgU3RhdHVzZXNQcm9wcztcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgc2V0Rm9ybURhdGEoKHZhbHVlcykgPT4gKHtcbiAgICAgIC4uLnZhbHVlcyxcbiAgICAgIFtuYW1lXTogeyB2YWx1ZTogdmFsdWUsIGRpcnR5OiB0cnVlIH0sXG4gICAgfSkpO1xuICB9O1xuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBpc0RpcnR5ID0gT2JqZWN0LmtleXMoZm9ybURhdGFEZWZhdWx0KS5ldmVyeShcbiAgICAgIChrKSA9PiBmb3JtRGF0YVtrXS5kaXJ0eVxuICAgICk7XG4gICAgaWYgKCFpc0RpcnR5KSB7XG4gICAgICBjb25zb2xlLmxvZygnZm9ybSBpcyBub3QgZGlydHknKTtcbiAgICAgIHNldFN0YXR1cyhzdGF0dXNlcy5lcnJvcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldFN0YXR1cyhzdGF0dXNlcy5zdWJtaXR0ZWQpO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9sb2dpbicsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAneC1hdXRob3JpemF0aW9uJzogYCR7cGFyYW1zLmF1dGh9YCxcbiAgICAgICAgJ3gtY291bnRyeS1jb2RlJzogJ3VzJyxcbiAgICAgICAgJ3gtbmV0d29yayc6ICdhbWNwbHVzJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSksXG4gICAgfSk7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHNldFN0YXR1cyhyZXNwb25zZS5zdGF0dXMgPT09IDIwMCA/IHN0YXR1c2VzLnN1Y2Nlc3MgOiBzdGF0dXNlcy5lcnJvcik7XG4gIH07XG5cbiAgY29uc3QgZW1haWxJbnB1dCA9IChcbiAgICA8PlxuICAgICAgPGxhYmVsXG4gICAgICAgIGh0bWxGb3I9XCJlbWFpbFwiXG4gICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgIWZvcm1EYXRhLmVtYWlsLmRpcnR5ICYmIHN0YXR1cyA9PT0gJ2Vycm9yJ1xuICAgICAgICAgICAgPyAndGV4dC1yb3NlLTUwMCdcbiAgICAgICAgICAgIDogJ3RleHQtYmxhY2snXG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgRW1haWxcbiAgICAgIDwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgY2xhc3NOYW1lPXtgYm9yZGVyLXNvbGlkIGJvcmRlci0yIHJvdW5kZWQtbWQgcC0yICR7IWZvcm1EYXRhLmNvZGUuZGlydHkgJiYgc3RhdHVzID09PSAnZXJyb3InID8gJ2JvcmRlci1yb3NlLTUwMCcgOiAnYm9yZGVyLWJsYWNrJ31gfVxuICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsIGFkZHJlc3NcIlxuICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZW1haWwudmFsdWUgfHwgJyd9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAvPlxuICAgICAgPHNtYWxsPnJ5YW4ubW9vcmVAYW1jbmV0d29ya3MuY29tPC9zbWFsbD5cbiAgICA8Lz5cbiAgKTtcblxuICBjb25zdCBwYXNzd29yZElucHV0ID0gKFxuICAgIDw+XG4gICAgICA8bGFiZWxcbiAgICAgICAgaHRtbEZvcj1cInBhc3N3b3JkXCJcbiAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAhZm9ybURhdGEucGFzc3dvcmQuZGlydHkgJiYgc3RhdHVzID09PSAnZXJyb3InXG4gICAgICAgICAgICA/ICd0ZXh0LXJvc2UtNTAwJ1xuICAgICAgICAgICAgOiAndGV4dC1ibGFjaydcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICBQYXNzd29yZFxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9e2Bib3JkZXItc29saWQgYm9yZGVyLTIgcm91bmRlZC1tZCBwLTIgJHshZm9ybURhdGEuY29kZS5kaXJ0eSAmJiBzdGF0dXMgPT09ICdlcnJvcicgPyAnYm9yZGVyLXJvc2UtNTAwJyA6ICdib3JkZXItYmxhY2snfWB9XG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxuICAgICAgICB2YWx1ZT17Zm9ybURhdGEucGFzc3dvcmQudmFsdWUgfHwgJyd9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAvPlxuICAgICAgPHNtYWxsPmNlamRpNi1jYXBudWItRnl6Y3l6PC9zbWFsbD5cbiAgICA8Lz5cbiAgKTtcblxuICBjb25zdCBhY3RpdmF0aW9uQ29kZUlucHV0ID0gKFxuICAgIDw+XG4gICAgICA8bGFiZWxcbiAgICAgICAgaHRtbEZvcj1cImNvZGVcIlxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICFmb3JtRGF0YS5jb2RlLmRpcnR5ICYmIHN0YXR1cyA9PT0gJ2Vycm9yJ1xuICAgICAgICAgICAgPyAndGV4dC1yb3NlLTUwMCdcbiAgICAgICAgICAgIDogJ3RleHQtYmxhY2snXG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgQWN0aXZhdGlvbiBDb2RlXG4gICAgICA8L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIGNsYXNzTmFtZT17YGJvcmRlci1zb2xpZCBib3JkZXItMiByb3VuZGVkLW1kIHAtMiAkeyFmb3JtRGF0YS5jb2RlLmRpcnR5ICYmIHN0YXR1cyA9PT0gJ2Vycm9yJyA/ICdib3JkZXItcm9zZS01MDAnIDogJ2JvcmRlci1ibGFjayd9YH1cbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBuYW1lPVwiY29kZVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiYWN0aXZhdGlvbiBjb2RlXCJcbiAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmNvZGUudmFsdWUgfHwgJyd9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xuXG4gIGNvbnN0IGxheW91dFNlbGVjdG9yID0gKGZpZWxkOiBzdHJpbmcpOiBKU1guRWxlbWVudCB8IHVuZGVmaW5lZCA9PiB7XG4gICAgc3dpdGNoIChmaWVsZCkge1xuICAgICAgY2FzZSAnY29kZSc6XG4gICAgICAgIHJldHVybiBhY3RpdmF0aW9uQ29kZUlucHV0O1xuICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgICByZXR1cm4gZW1haWxJbnB1dDtcbiAgICAgIGNhc2UgJ3Bhc3N3b3JkJzpcbiAgICAgICAgcmV0dXJuIHBhc3N3b3JkSW5wdXQ7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAge3BhcmFtcy5maWVsZHMubWFwKChmaWVsZDogc3RyaW5nLCBpZHg6IG51bWJlcikgPT5cbiAgICAgICAgICBhZGRLZXkobGF5b3V0U2VsZWN0b3IoZmllbGQpIGFzIEpTWC5FbGVtZW50LCBpZHgudG9TdHJpbmcoKSlcbiAgICAgICAgKX1cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGhhbmRsZVN1Ym1pdDtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge3N0YXR1c31cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShmb3JtRGF0YSwgbnVsbCwgMil9PC9wcmU+XG4gICAgPC8+XG4gICk7XG59XG5cbi8vIGNlamRpNi1jYXBudWItRnl6Y3l6XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJhZGRLZXkiLCJGb3JtIiwicGFyYW1zIiwiZm9ybURhdGFEZWZhdWx0IiwiZmllbGRzIiwicmVkdWNlIiwiayIsInYiLCJ2YWx1ZSIsImNvZGUiLCJkaXJ0eSIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJzdGF0dXNlcyIsImxvYWRpbmciLCJzdWNjZXNzIiwic3VibWl0dGVkIiwiZXJyb3IiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZXMiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImlzRGlydHkiLCJPYmplY3QiLCJrZXlzIiwiZXZlcnkiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJhdXRoIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJqc29uIiwiZW1haWxJbnB1dCIsImxhYmVsIiwiaHRtbEZvciIsImNsYXNzTmFtZSIsImVtYWlsIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInNtYWxsIiwicGFzc3dvcmRJbnB1dCIsInBhc3N3b3JkIiwiYWN0aXZhdGlvbkNvZGVJbnB1dCIsImxheW91dFNlbGVjdG9yIiwiZmllbGQiLCJmb3JtIiwib25TdWJtaXQiLCJtYXAiLCJpZHgiLCJ0b1N0cmluZyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Form/form.tsx\n"));

/***/ })

});