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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Form: function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib */ \"(app-pages-browser)/./src/lib/index.ts\");\n/* harmony import */ var _form_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.module.scss */ \"(app-pages-browser)/./src/components/Form/form.module.scss\");\n/* harmony import */ var _form_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_form_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ Form auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Form(params) {\n    _s();\n    const [dirty, setDirty] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const formDataDefault = params.fields.reduce((k, v)=>({\n            ...k,\n            [v]: {\n                value: v === \"code\" ? params.code : \"\",\n                dirty: v === \"code\" && params.code !== \"\" ? true : false\n            }\n        }), {});\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(formDataDefault);\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"continue\");\n    const statuses = {\n        loading: \"loading\",\n        success: \"success\",\n        submitted: \"submitted\",\n        error: \"error\"\n    };\n    const handleChange = (event)=>{\n        const { name, value } = event.target;\n        setFormData((values)=>({\n                ...values,\n                [name]: {\n                    value: value,\n                    dirty: true\n                }\n            }));\n        setDirty(Object.keys(formData).every((k)=>formData[k].dirty));\n    };\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        setDirty(Object.keys(formData).every((k)=>formData[k].dirty));\n        if (!dirty) {\n            setStatus(statuses.error);\n            return;\n        }\n        setStatus(statuses.submitted);\n        const response = await fetch(\"/api/login\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                \"x-authorization\": \"\".concat(params.auth),\n                \"x-country-code\": \"us\",\n                \"x-network\": \"amcplus\"\n            },\n            body: JSON.stringify(formData)\n        });\n        const res = await response.json();\n        setStatus(response.status === 200 ? statuses.success : statuses.error);\n    };\n    const emailInput = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"border-solid border-2 rounded-md p-2 \".concat(!formData.email.dirty && status === \"error\" ? \"border-rose-700 \".concat((_form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().placeholderError)) : \"border-black\"),\n                type: \"email\",\n                name: \"email\",\n                placeholder: \"email address\",\n                value: formData.email.value || \"\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                children: \"ryan.moore@amcnetworks.com\"\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n    const passwordInput = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"border-solid border-2 rounded-md p-2 \".concat(!formData.password.dirty && status === \"error\" ? \"border-rose-700 \".concat((_form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().placeholderError)) : \"border-black\"),\n                type: \"password\",\n                name: \"password\",\n                placeholder: \"password\",\n                value: formData.password.value || \"\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                children: \"cejdi6-capnub-Fyzcyz\"\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n    const activationCodeInput = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            className: \"border-solid border-2 rounded-md p-2 \".concat(!formData.code.dirty && status === \"error\" ? \"border-rose-700 \".concat((_form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().placeholderError)) : \"border-black\"),\n            type: \"text\",\n            name: \"code\",\n            placeholder: \"activation code\",\n            value: formData.code.value || \"\",\n            onChange: handleChange\n        }, void 0, false, {\n            fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n            lineNumber: 92,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n    const layoutSelector = (field)=>{\n        switch(field){\n            case \"code\":\n                return activationCodeInput;\n            case \"email\":\n                return emailInput;\n            case \"password\":\n                return passwordInput;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            className: \"flex flex-col\",\n            children: [\n                params.fields.map((field, idx)=>(0,_lib__WEBPACK_IMPORTED_MODULE_2__.addKey)(layoutSelector(field), idx.toString())),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"text-white\",\n                    disabled: !dirty,\n                    onClick: ()=>{\n                        handleSubmit;\n                    },\n                    children: status\n                }, void 0, false, {\n                    fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                    lineNumber: 120,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n            lineNumber: 116,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Form, \"PTKMhewzksuLRJ2Ks2SBtPsBWuU=\");\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Zvcm0vZm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ2lDO0FBQ0Y7QUFDUztBQU1qQyxTQUFTRyxLQUFLQyxNQUFXOztJQUM5QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUM7SUFDbkMsTUFBTU8sa0JBQWtCSCxPQUFPSSxNQUFNLENBQUNDLE1BQU0sQ0FDMUMsQ0FBQ0MsR0FBUUMsSUFBZTtZQUN0QixHQUFHRCxDQUFDO1lBQ0osQ0FBQ0MsRUFBRSxFQUFFO2dCQUNIQyxPQUFPRCxNQUFNLFNBQVNQLE9BQU9TLElBQUksR0FBRztnQkFDcENSLE9BQU9NLE1BQU0sVUFBVVAsT0FBT1MsSUFBSSxLQUFLLEtBQUssT0FBTztZQUNyRDtRQUNGLElBQ0EsQ0FBQztJQUVILE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHZiwrQ0FBUUEsQ0FBQ087SUFDekMsTUFBTSxDQUFDUyxRQUFRQyxVQUFVLEdBQUdqQiwrQ0FBUUEsQ0FBUztJQUM3QyxNQUFNa0IsV0FBVztRQUNmQyxTQUFTO1FBQ1RDLFNBQVM7UUFDVEMsV0FBVztRQUNYQyxPQUFPO0lBQ1Q7SUFFQSxNQUFNQyxlQUFlLENBQUNDO1FBQ3BCLE1BQU0sRUFBRUMsSUFBSSxFQUFFYixLQUFLLEVBQUUsR0FBR1ksTUFBTUUsTUFBTTtRQUNwQ1gsWUFBWSxDQUFDWSxTQUFpQjtnQkFDNUIsR0FBR0EsTUFBTTtnQkFDVCxDQUFDRixLQUFLLEVBQUU7b0JBQUViLE9BQU9BO29CQUFPUCxPQUFPO2dCQUFLO1lBQ3RDO1FBQ0FDLFNBQVNzQixPQUFPQyxJQUFJLENBQUNmLFVBQVVnQixLQUFLLENBQUMsQ0FBQ3BCLElBQU1JLFFBQVEsQ0FBQ0osRUFBRSxDQUFDTCxLQUFLO0lBQy9EO0lBQ0EsTUFBTTBCLGVBQWUsT0FBT1A7UUFDMUJBLE1BQU1RLGNBQWM7UUFDcEIxQixTQUFTc0IsT0FBT0MsSUFBSSxDQUFDZixVQUFVZ0IsS0FBSyxDQUFDLENBQUNwQixJQUFNSSxRQUFRLENBQUNKLEVBQUUsQ0FBQ0wsS0FBSztRQUM3RCxJQUFJLENBQUNBLE9BQU87WUFDVlksVUFBVUMsU0FBU0ksS0FBSztZQUN4QjtRQUNGO1FBQ0FMLFVBQVVDLFNBQVNHLFNBQVM7UUFFNUIsTUFBTVksV0FBVyxNQUFNQyxNQUFNLGNBQWM7WUFDekNDLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7Z0JBQ2hCLG1CQUFtQixHQUFlLE9BQVpoQyxPQUFPaUMsSUFBSTtnQkFDakMsa0JBQWtCO2dCQUNsQixhQUFhO1lBQ2Y7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDMUI7UUFDdkI7UUFDQSxNQUFNMkIsTUFBTSxNQUFNUixTQUFTUyxJQUFJO1FBQy9CekIsVUFBVWdCLFNBQVNqQixNQUFNLEtBQUssTUFBTUUsU0FBU0UsT0FBTyxHQUFHRixTQUFTSSxLQUFLO0lBQ3ZFO0lBRUEsTUFBTXFCLDJCQUNKOzswQkFDRSw4REFBQ0M7Z0JBQ0NDLFdBQVcsd0NBQW9KLE9BQTVHLENBQUMvQixTQUFTZ0MsS0FBSyxDQUFDekMsS0FBSyxJQUFJVyxXQUFXLFVBQVUsbUJBQTJDLE9BQXhCZCwyRUFBdUIsSUFBSztnQkFDaEo4QyxNQUFLO2dCQUNMdkIsTUFBSztnQkFDTHdCLGFBQVk7Z0JBQ1pyQyxPQUFPRSxTQUFTZ0MsS0FBSyxDQUFDbEMsS0FBSyxJQUFJO2dCQUMvQnNDLFVBQVUzQjs7Ozs7OzBCQUVaLDhEQUFDNEI7MEJBQU07Ozs7Ozs7O0lBSVgsTUFBTUMsOEJBQ0o7OzBCQUNFLDhEQUFDUjtnQkFDQ0MsV0FBVyx3Q0FBdUosT0FBL0csQ0FBQy9CLFNBQVN1QyxRQUFRLENBQUNoRCxLQUFLLElBQUlXLFdBQVcsVUFBVSxtQkFBMkMsT0FBeEJkLDJFQUF1QixJQUFLO2dCQUNuSjhDLE1BQUs7Z0JBQ0x2QixNQUFLO2dCQUNMd0IsYUFBWTtnQkFDWnJDLE9BQU9FLFNBQVN1QyxRQUFRLENBQUN6QyxLQUFLLElBQUk7Z0JBQ2xDc0MsVUFBVTNCOzs7Ozs7MEJBRVosOERBQUM0QjswQkFBTTs7Ozs7Ozs7SUFJWCxNQUFNRyxvQ0FDSjtrQkFDRSw0RUFBQ1Y7WUFDQ0MsV0FBVyx3Q0FBbUosT0FBM0csQ0FBQy9CLFNBQVNELElBQUksQ0FBQ1IsS0FBSyxJQUFJVyxXQUFXLFVBQVUsbUJBQTJDLE9BQXhCZCwyRUFBdUIsSUFBSztZQUMvSThDLE1BQUs7WUFDTHZCLE1BQUs7WUFDTHdCLGFBQVk7WUFDWnJDLE9BQU9FLFNBQVNELElBQUksQ0FBQ0QsS0FBSyxJQUFJO1lBQzlCc0MsVUFBVTNCOzs7Ozs7O0lBS2hCLE1BQU1nQyxpQkFBaUIsQ0FBQ0M7UUFDdEIsT0FBUUE7WUFDTixLQUFLO2dCQUNILE9BQU9GO1lBQ1QsS0FBSztnQkFDSCxPQUFPWDtZQUNULEtBQUs7Z0JBQ0gsT0FBT1M7UUFDWDtJQUNGO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNLO1lBQUtDLFVBQVUzQjtZQUFjYyxXQUFVOztnQkFDckN6QyxPQUFPSSxNQUFNLENBQUNtRCxHQUFHLENBQUMsQ0FBQ0gsT0FBZUksTUFDakMzRCw0Q0FBTUEsQ0FBQ3NELGVBQWVDLFFBQXVCSSxJQUFJQyxRQUFROzhCQUUzRCw4REFBQ0M7b0JBQ0NqQixXQUFVO29CQUNWa0IsVUFBVSxDQUFDMUQ7b0JBQ1gyRCxTQUFTO3dCQUNQakM7b0JBQ0Y7OEJBRUNmOzs7Ozs7Ozs7Ozs7O0FBS1g7R0ExSGdCYjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb3JtL2Zvcm0udHN4PzdjNzEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBhZGRLZXkgfSBmcm9tICdAL2xpYic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZm9ybS5tb2R1bGUuc2Nzcyc7XG5cbmludGVyZmFjZSBTdGF0dXNlc1Byb3BzIHtcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRm9ybShwYXJhbXM6IGFueSkge1xuICBjb25zdCBbZGlydHksIHNldERpcnR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgZm9ybURhdGFEZWZhdWx0ID0gcGFyYW1zLmZpZWxkcy5yZWR1Y2UoXG4gICAgKGs6IGFueSwgdjogc3RyaW5nKSA9PiAoe1xuICAgICAgLi4uayxcbiAgICAgIFt2XToge1xuICAgICAgICB2YWx1ZTogdiA9PT0gJ2NvZGUnID8gcGFyYW1zLmNvZGUgOiAnJyxcbiAgICAgICAgZGlydHk6IHYgPT09ICdjb2RlJyAmJiBwYXJhbXMuY29kZSAhPT0gJycgPyB0cnVlIDogZmFsc2UsXG4gICAgICB9LFxuICAgIH0pLFxuICAgIHt9XG4gICk7XG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoZm9ybURhdGFEZWZhdWx0KTtcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlPHN0cmluZz4oJ2NvbnRpbnVlJyk7XG4gIGNvbnN0IHN0YXR1c2VzID0ge1xuICAgIGxvYWRpbmc6ICdsb2FkaW5nJyxcbiAgICBzdWNjZXNzOiAnc3VjY2VzcycsXG4gICAgc3VibWl0dGVkOiAnc3VibWl0dGVkJyxcbiAgICBlcnJvcjogJ2Vycm9yJyxcbiAgfSBhcyBTdGF0dXNlc1Byb3BzO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBzZXRGb3JtRGF0YSgodmFsdWVzOiBhbnkpID0+ICh7XG4gICAgICAuLi52YWx1ZXMsXG4gICAgICBbbmFtZV06IHsgdmFsdWU6IHZhbHVlLCBkaXJ0eTogdHJ1ZSB9LFxuICAgIH0pKTtcbiAgICBzZXREaXJ0eShPYmplY3Qua2V5cyhmb3JtRGF0YSkuZXZlcnkoKGspID0+IGZvcm1EYXRhW2tdLmRpcnR5KSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldERpcnR5KE9iamVjdC5rZXlzKGZvcm1EYXRhKS5ldmVyeSgoaykgPT4gZm9ybURhdGFba10uZGlydHkpKTtcbiAgICBpZiAoIWRpcnR5KSB7XG4gICAgICBzZXRTdGF0dXMoc3RhdHVzZXMuZXJyb3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRTdGF0dXMoc3RhdHVzZXMuc3VibWl0dGVkKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvbG9naW4nLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYXV0aG9yaXphdGlvbic6IGAke3BhcmFtcy5hdXRofWAsXG4gICAgICAgICd4LWNvdW50cnktY29kZSc6ICd1cycsXG4gICAgICAgICd4LW5ldHdvcmsnOiAnYW1jcGx1cycsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpLFxuICAgIH0pO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBzZXRTdGF0dXMocmVzcG9uc2Uuc3RhdHVzID09PSAyMDAgPyBzdGF0dXNlcy5zdWNjZXNzIDogc3RhdHVzZXMuZXJyb3IpO1xuICB9O1xuXG4gIGNvbnN0IGVtYWlsSW5wdXQgPSAoXG4gICAgPD5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9e2Bib3JkZXItc29saWQgYm9yZGVyLTIgcm91bmRlZC1tZCBwLTIgJHshZm9ybURhdGEuZW1haWwuZGlydHkgJiYgc3RhdHVzID09PSAnZXJyb3InID8gYGJvcmRlci1yb3NlLTcwMCAke3N0eWxlcy5wbGFjZWhvbGRlckVycm9yfWAgOiAnYm9yZGVyLWJsYWNrJ31gfVxuICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsIGFkZHJlc3NcIlxuICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZW1haWwudmFsdWUgfHwgJyd9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAvPlxuICAgICAgPHNtYWxsPnJ5YW4ubW9vcmVAYW1jbmV0d29ya3MuY29tPC9zbWFsbD5cbiAgICA8Lz5cbiAgKTtcblxuICBjb25zdCBwYXNzd29yZElucHV0ID0gKFxuICAgIDw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgY2xhc3NOYW1lPXtgYm9yZGVyLXNvbGlkIGJvcmRlci0yIHJvdW5kZWQtbWQgcC0yICR7IWZvcm1EYXRhLnBhc3N3b3JkLmRpcnR5ICYmIHN0YXR1cyA9PT0gJ2Vycm9yJyA/IGBib3JkZXItcm9zZS03MDAgJHtzdHlsZXMucGxhY2Vob2xkZXJFcnJvcn1gIDogJ2JvcmRlci1ibGFjayd9YH1cbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXG4gICAgICAgIHZhbHVlPXtmb3JtRGF0YS5wYXNzd29yZC52YWx1ZSB8fCAnJ31cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgIC8+XG4gICAgICA8c21hbGw+Y2VqZGk2LWNhcG51Yi1GeXpjeXo8L3NtYWxsPlxuICAgIDwvPlxuICApO1xuXG4gIGNvbnN0IGFjdGl2YXRpb25Db2RlSW5wdXQgPSAoXG4gICAgPD5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9e2Bib3JkZXItc29saWQgYm9yZGVyLTIgcm91bmRlZC1tZCBwLTIgJHshZm9ybURhdGEuY29kZS5kaXJ0eSAmJiBzdGF0dXMgPT09ICdlcnJvcicgPyBgYm9yZGVyLXJvc2UtNzAwICR7c3R5bGVzLnBsYWNlaG9sZGVyRXJyb3J9YCA6ICdib3JkZXItYmxhY2snfWB9XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cImNvZGVcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cImFjdGl2YXRpb24gY29kZVwiXG4gICAgICAgIHZhbHVlPXtmb3JtRGF0YS5jb2RlLnZhbHVlIHx8ICcnfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcblxuICBjb25zdCBsYXlvdXRTZWxlY3RvciA9IChmaWVsZDogc3RyaW5nKTogSlNYLkVsZW1lbnQgfCB1bmRlZmluZWQgPT4ge1xuICAgIHN3aXRjaCAoZmllbGQpIHtcbiAgICAgIGNhc2UgJ2NvZGUnOlxuICAgICAgICByZXR1cm4gYWN0aXZhdGlvbkNvZGVJbnB1dDtcbiAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgcmV0dXJuIGVtYWlsSW5wdXQ7XG4gICAgICBjYXNlICdwYXNzd29yZCc6XG4gICAgICAgIHJldHVybiBwYXNzd29yZElucHV0O1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgIHtwYXJhbXMuZmllbGRzLm1hcCgoZmllbGQ6IHN0cmluZywgaWR4OiBudW1iZXIpID0+XG4gICAgICAgICAgYWRkS2V5KGxheW91dFNlbGVjdG9yKGZpZWxkKSBhcyBKU1guRWxlbWVudCwgaWR4LnRvU3RyaW5nKCkpXG4gICAgICAgICl9XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCJcbiAgICAgICAgICBkaXNhYmxlZD17IWRpcnR5fVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGhhbmRsZVN1Ym1pdDtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge3N0YXR1c31cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJhZGRLZXkiLCJzdHlsZXMiLCJGb3JtIiwicGFyYW1zIiwiZGlydHkiLCJzZXREaXJ0eSIsImZvcm1EYXRhRGVmYXVsdCIsImZpZWxkcyIsInJlZHVjZSIsImsiLCJ2IiwidmFsdWUiLCJjb2RlIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsInN0YXR1cyIsInNldFN0YXR1cyIsInN0YXR1c2VzIiwibG9hZGluZyIsInN1Y2Nlc3MiLCJzdWJtaXR0ZWQiLCJlcnJvciIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwibmFtZSIsInRhcmdldCIsInZhbHVlcyIsIk9iamVjdCIsImtleXMiLCJldmVyeSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJhdXRoIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJqc29uIiwiZW1haWxJbnB1dCIsImlucHV0IiwiY2xhc3NOYW1lIiwiZW1haWwiLCJwbGFjZWhvbGRlckVycm9yIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJzbWFsbCIsInBhc3N3b3JkSW5wdXQiLCJwYXNzd29yZCIsImFjdGl2YXRpb25Db2RlSW5wdXQiLCJsYXlvdXRTZWxlY3RvciIsImZpZWxkIiwiZm9ybSIsIm9uU3VibWl0IiwibWFwIiwiaWR4IiwidG9TdHJpbmciLCJidXR0b24iLCJkaXNhYmxlZCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Form/form.tsx\n"));

/***/ })

});