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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Form: function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib */ \"(app-pages-browser)/./src/lib/index.ts\");\n/* __next_internal_client_entry_do_not_use__ Form auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Form(params) {\n    _s();\n    const formDataDefault = params.fields.reduce((k, v)=>({\n            ...k,\n            [v]: {\n                value: v === \"code\" ? params.code : \"\",\n                dirty: v === \"code\" && params.code !== \"\" ? true : false\n            }\n        }), {});\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(formDataDefault);\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"continue\");\n    const statuses = {\n        loading: \"loading\",\n        success: \"success\",\n        submitted: \"submitted\",\n        error: \"error\"\n    };\n    const handleChange = (event)=>{\n        const { name, value } = event.target;\n        setFormData((values)=>({\n                ...values,\n                [name]: {\n                    value: value,\n                    dirty: true\n                }\n            }));\n    };\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const isDirty = Object.keys(formDataDefault).every((k)=>formData[k].dirty);\n        if (!isDirty) {\n            console.log(\"form is not dirty\");\n            setStatus(statuses.error);\n            return;\n        }\n        setStatus(statuses.submitted);\n        const response = await fetch(\"/api/login\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                \"x-authorization\": \"\".concat(params.auth),\n                \"x-country-code\": \"us\",\n                \"x-network\": \"amcplus\"\n            },\n            body: JSON.stringify(formData)\n        });\n        const res = await response.json();\n        setStatus(response.status === 200 ? statuses.success : statuses.error);\n    };\n    const emailInput = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"border-solid border-2 rounded-md p-2 \".concat(!formData.email.dirty && status === \"error\" ? \"border-rose-500\" : \"border-black\"),\n                type: \"email\",\n                name: \"email\",\n                placeholder: \"email address\",\n                value: formData.email.value || \"\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                children: \"ryan.moore@amcnetworks.com\"\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n    const passwordInput = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"border-solid border-2 rounded-md p-2 \".concat(!formData.password.dirty && status === \"error\" ? \"border-rose-500\" : \"border-black\"),\n                type: \"password\",\n                name: \"password\",\n                placeholder: \"password\",\n                value: formData.password.value || \"\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                children: \"cejdi6-capnub-Fyzcyz\"\n            }, void 0, false, {\n                fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n    const activationCodeInput = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            className: \"border-solid border-2 rounded-md p-2 \".concat(!formData.code.dirty && status === \"error\" ? \"border-rose-500\" : \"border-black\"),\n            type: \"text\",\n            name: \"code\",\n            placeholder: \"activation code\",\n            value: formData.code.value || \"\",\n            onChange: handleChange\n        }, void 0, false, {\n            fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n            lineNumber: 92,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n    const layoutSelector = (field)=>{\n        switch(field){\n            case \"code\":\n                return activationCodeInput;\n            case \"email\":\n                return emailInput;\n            case \"password\":\n                return passwordInput;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            className: \"flex flex-col\",\n            children: [\n                params.fields.map((field, idx)=>(0,_lib__WEBPACK_IMPORTED_MODULE_2__.addKey)(layoutSelector(field), idx.toString())),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>{\n                        handleSubmit;\n                    },\n                    children: status\n                }, void 0, false, {\n                    fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n                    lineNumber: 120,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/components/Form/form.tsx\",\n            lineNumber: 116,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Form, \"SpP038bUy4DtqPuHkTvanOe3f/Y=\");\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Zvcm0vZm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNpQztBQUNGO0FBTXhCLFNBQVNFLEtBQUtDLE1BQVc7O0lBQzlCLE1BQU1DLGtCQUFrQkQsT0FBT0UsTUFBTSxDQUFDQyxNQUFNLENBQzFDLENBQUNDLEdBQVFDLElBQWU7WUFDdEIsR0FBR0QsQ0FBQztZQUNKLENBQUNDLEVBQUUsRUFBRTtnQkFDSEMsT0FBT0QsTUFBTSxTQUFTTCxPQUFPTyxJQUFJLEdBQUc7Z0JBQ3BDQyxPQUFPSCxNQUFNLFVBQVVMLE9BQU9PLElBQUksS0FBSyxLQUFLLE9BQU87WUFDckQ7UUFDRixJQUNBLENBQUM7SUFFSCxNQUFNLENBQUNFLFVBQVVDLFlBQVksR0FBR2IsK0NBQVFBLENBQUNJO0lBQ3pDLE1BQU0sQ0FBQ1UsUUFBUUMsVUFBVSxHQUFHZiwrQ0FBUUEsQ0FBUztJQUM3QyxNQUFNZ0IsV0FBVztRQUNmQyxTQUFTO1FBQ1RDLFNBQVM7UUFDVEMsV0FBVztRQUNYQyxPQUFPO0lBQ1Q7SUFFQSxNQUFNQyxlQUFlLENBQUNDO1FBQ3BCLE1BQU0sRUFBRUMsSUFBSSxFQUFFZCxLQUFLLEVBQUUsR0FBR2EsTUFBTUUsTUFBTTtRQUNwQ1gsWUFBWSxDQUFDWSxTQUFZO2dCQUN2QixHQUFHQSxNQUFNO2dCQUNULENBQUNGLEtBQUssRUFBRTtvQkFBRWQsT0FBT0E7b0JBQU9FLE9BQU87Z0JBQUs7WUFDdEM7SUFDRjtJQUNBLE1BQU1lLGVBQWUsT0FBT0o7UUFDMUJBLE1BQU1LLGNBQWM7UUFDcEIsTUFBTUMsVUFBVUMsT0FBT0MsSUFBSSxDQUFDMUIsaUJBQWlCMkIsS0FBSyxDQUNoRCxDQUFDeEIsSUFBTUssUUFBUSxDQUFDTCxFQUFFLENBQUNJLEtBQUs7UUFFMUIsSUFBSSxDQUFDaUIsU0FBUztZQUNaSSxRQUFRQyxHQUFHLENBQUM7WUFDWmxCLFVBQVVDLFNBQVNJLEtBQUs7WUFDeEI7UUFDRjtRQUNBTCxVQUFVQyxTQUFTRyxTQUFTO1FBRTVCLE1BQU1lLFdBQVcsTUFBTUMsTUFBTSxjQUFjO1lBQ3pDQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO2dCQUNoQixtQkFBbUIsR0FBZSxPQUFabEMsT0FBT21DLElBQUk7Z0JBQ2pDLGtCQUFrQjtnQkFDbEIsYUFBYTtZQUNmO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQzdCO1FBQ3ZCO1FBQ0EsTUFBTThCLE1BQU0sTUFBTVIsU0FBU1MsSUFBSTtRQUMvQjVCLFVBQVVtQixTQUFTcEIsTUFBTSxLQUFLLE1BQU1FLFNBQVNFLE9BQU8sR0FBR0YsU0FBU0ksS0FBSztJQUN2RTtJQUVBLE1BQU13QiwyQkFDSjs7MEJBQ0UsOERBQUNDO2dCQUNDQyxXQUFXLHdDQUF5SCxPQUFqRixDQUFDbEMsU0FBU21DLEtBQUssQ0FBQ3BDLEtBQUssSUFBSUcsV0FBVyxVQUFVLG9CQUFvQjtnQkFDckhrQyxNQUFLO2dCQUNMekIsTUFBSztnQkFDTDBCLGFBQVk7Z0JBQ1p4QyxPQUFPRyxTQUFTbUMsS0FBSyxDQUFDdEMsS0FBSyxJQUFJO2dCQUMvQnlDLFVBQVU3Qjs7Ozs7OzBCQUVaLDhEQUFDOEI7MEJBQU07Ozs7Ozs7O0lBSVgsTUFBTUMsOEJBQ0o7OzBCQUNFLDhEQUFDUDtnQkFDQ0MsV0FBVyx3Q0FBNEgsT0FBcEYsQ0FBQ2xDLFNBQVN5QyxRQUFRLENBQUMxQyxLQUFLLElBQUlHLFdBQVcsVUFBVSxvQkFBb0I7Z0JBQ3hIa0MsTUFBSztnQkFDTHpCLE1BQUs7Z0JBQ0wwQixhQUFZO2dCQUNaeEMsT0FBT0csU0FBU3lDLFFBQVEsQ0FBQzVDLEtBQUssSUFBSTtnQkFDbEN5QyxVQUFVN0I7Ozs7OzswQkFFWiw4REFBQzhCOzBCQUFNOzs7Ozs7OztJQUlYLE1BQU1HLG9DQUNKO2tCQUNFLDRFQUFDVDtZQUNDQyxXQUFXLHdDQUF3SCxPQUFoRixDQUFDbEMsU0FBU0YsSUFBSSxDQUFDQyxLQUFLLElBQUlHLFdBQVcsVUFBVSxvQkFBb0I7WUFDcEhrQyxNQUFLO1lBQ0x6QixNQUFLO1lBQ0wwQixhQUFZO1lBQ1p4QyxPQUFPRyxTQUFTRixJQUFJLENBQUNELEtBQUssSUFBSTtZQUM5QnlDLFVBQVU3Qjs7Ozs7OztJQUtoQixNQUFNa0MsaUJBQWlCLENBQUNDO1FBQ3RCLE9BQVFBO1lBQ04sS0FBSztnQkFDSCxPQUFPRjtZQUNULEtBQUs7Z0JBQ0gsT0FBT1Y7WUFDVCxLQUFLO2dCQUNILE9BQU9RO1FBQ1g7SUFDRjtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDSztZQUFLQyxVQUFVaEM7WUFBY29CLFdBQVU7O2dCQUNyQzNDLE9BQU9FLE1BQU0sQ0FBQ3NELEdBQUcsQ0FBQyxDQUFDSCxPQUFlSSxNQUNqQzNELDRDQUFNQSxDQUFDc0QsZUFBZUMsUUFBdUJJLElBQUlDLFFBQVE7OEJBRTNELDhEQUFDQztvQkFDQ0MsU0FBUzt3QkFDUHJDO29CQUNGOzhCQUVDWjs7Ozs7Ozs7Ozs7OztBQUtYO0dBekhnQlo7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybS9mb3JtLnRzeD83YzcxIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYWRkS2V5IH0gZnJvbSAnQC9saWInO1xuXG5pbnRlcmZhY2UgU3RhdHVzZXNQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEZvcm0ocGFyYW1zOiBhbnkpIHtcbiAgY29uc3QgZm9ybURhdGFEZWZhdWx0ID0gcGFyYW1zLmZpZWxkcy5yZWR1Y2UoXG4gICAgKGs6IGFueSwgdjogc3RyaW5nKSA9PiAoe1xuICAgICAgLi4uayxcbiAgICAgIFt2XToge1xuICAgICAgICB2YWx1ZTogdiA9PT0gJ2NvZGUnID8gcGFyYW1zLmNvZGUgOiAnJyxcbiAgICAgICAgZGlydHk6IHYgPT09ICdjb2RlJyAmJiBwYXJhbXMuY29kZSAhPT0gJycgPyB0cnVlIDogZmFsc2UsXG4gICAgICB9LFxuICAgIH0pLFxuICAgIHt9XG4gICk7XG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoZm9ybURhdGFEZWZhdWx0KTtcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlPHN0cmluZz4oJ2NvbnRpbnVlJyk7XG4gIGNvbnN0IHN0YXR1c2VzID0ge1xuICAgIGxvYWRpbmc6ICdsb2FkaW5nJyxcbiAgICBzdWNjZXNzOiAnc3VjY2VzcycsXG4gICAgc3VibWl0dGVkOiAnc3VibWl0dGVkJyxcbiAgICBlcnJvcjogJ2Vycm9yJyxcbiAgfSBhcyBTdGF0dXNlc1Byb3BzO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBzZXRGb3JtRGF0YSgodmFsdWVzKSA9PiAoe1xuICAgICAgLi4udmFsdWVzLFxuICAgICAgW25hbWVdOiB7IHZhbHVlOiB2YWx1ZSwgZGlydHk6IHRydWUgfSxcbiAgICB9KSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGlzRGlydHkgPSBPYmplY3Qua2V5cyhmb3JtRGF0YURlZmF1bHQpLmV2ZXJ5KFxuICAgICAgKGspID0+IGZvcm1EYXRhW2tdLmRpcnR5XG4gICAgKTtcbiAgICBpZiAoIWlzRGlydHkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdmb3JtIGlzIG5vdCBkaXJ0eScpO1xuICAgICAgc2V0U3RhdHVzKHN0YXR1c2VzLmVycm9yKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0U3RhdHVzKHN0YXR1c2VzLnN1Ym1pdHRlZCk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2xvZ2luJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWF1dGhvcml6YXRpb24nOiBgJHtwYXJhbXMuYXV0aH1gLFxuICAgICAgICAneC1jb3VudHJ5LWNvZGUnOiAndXMnLFxuICAgICAgICAneC1uZXR3b3JrJzogJ2FtY3BsdXMnLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKSxcbiAgICB9KTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgc2V0U3RhdHVzKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwID8gc3RhdHVzZXMuc3VjY2VzcyA6IHN0YXR1c2VzLmVycm9yKTtcbiAgfTtcblxuICBjb25zdCBlbWFpbElucHV0ID0gKFxuICAgIDw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgY2xhc3NOYW1lPXtgYm9yZGVyLXNvbGlkIGJvcmRlci0yIHJvdW5kZWQtbWQgcC0yICR7IWZvcm1EYXRhLmVtYWlsLmRpcnR5ICYmIHN0YXR1cyA9PT0gJ2Vycm9yJyA/ICdib3JkZXItcm9zZS01MDAnIDogJ2JvcmRlci1ibGFjayd9YH1cbiAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbCBhZGRyZXNzXCJcbiAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsLnZhbHVlIHx8ICcnfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgLz5cbiAgICAgIDxzbWFsbD5yeWFuLm1vb3JlQGFtY25ldHdvcmtzLmNvbTwvc21hbGw+XG4gICAgPC8+XG4gICk7XG5cbiAgY29uc3QgcGFzc3dvcmRJbnB1dCA9IChcbiAgICA8PlxuICAgICAgPGlucHV0XG4gICAgICAgIGNsYXNzTmFtZT17YGJvcmRlci1zb2xpZCBib3JkZXItMiByb3VuZGVkLW1kIHAtMiAkeyFmb3JtRGF0YS5wYXNzd29yZC5kaXJ0eSAmJiBzdGF0dXMgPT09ICdlcnJvcicgPyAnYm9yZGVyLXJvc2UtNTAwJyA6ICdib3JkZXItYmxhY2snfWB9XG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxuICAgICAgICB2YWx1ZT17Zm9ybURhdGEucGFzc3dvcmQudmFsdWUgfHwgJyd9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAvPlxuICAgICAgPHNtYWxsPmNlamRpNi1jYXBudWItRnl6Y3l6PC9zbWFsbD5cbiAgICA8Lz5cbiAgKTtcblxuICBjb25zdCBhY3RpdmF0aW9uQ29kZUlucHV0ID0gKFxuICAgIDw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgY2xhc3NOYW1lPXtgYm9yZGVyLXNvbGlkIGJvcmRlci0yIHJvdW5kZWQtbWQgcC0yICR7IWZvcm1EYXRhLmNvZGUuZGlydHkgJiYgc3RhdHVzID09PSAnZXJyb3InID8gJ2JvcmRlci1yb3NlLTUwMCcgOiAnYm9yZGVyLWJsYWNrJ31gfVxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIG5hbWU9XCJjb2RlXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJhY3RpdmF0aW9uIGNvZGVcIlxuICAgICAgICB2YWx1ZT17Zm9ybURhdGEuY29kZS52YWx1ZSB8fCAnJ31cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG5cbiAgY29uc3QgbGF5b3V0U2VsZWN0b3IgPSAoZmllbGQ6IHN0cmluZyk6IEpTWC5FbGVtZW50IHwgdW5kZWZpbmVkID0+IHtcbiAgICBzd2l0Y2ggKGZpZWxkKSB7XG4gICAgICBjYXNlICdjb2RlJzpcbiAgICAgICAgcmV0dXJuIGFjdGl2YXRpb25Db2RlSW5wdXQ7XG4gICAgICBjYXNlICdlbWFpbCc6XG4gICAgICAgIHJldHVybiBlbWFpbElucHV0O1xuICAgICAgY2FzZSAncGFzc3dvcmQnOlxuICAgICAgICByZXR1cm4gcGFzc3dvcmRJbnB1dDtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICB7cGFyYW1zLmZpZWxkcy5tYXAoKGZpZWxkOiBzdHJpbmcsIGlkeDogbnVtYmVyKSA9PlxuICAgICAgICAgIGFkZEtleShsYXlvdXRTZWxlY3RvcihmaWVsZCkgYXMgSlNYLkVsZW1lbnQsIGlkeC50b1N0cmluZygpKVxuICAgICAgICApfVxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgaGFuZGxlU3VibWl0O1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7c3RhdHVzfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImFkZEtleSIsIkZvcm0iLCJwYXJhbXMiLCJmb3JtRGF0YURlZmF1bHQiLCJmaWVsZHMiLCJyZWR1Y2UiLCJrIiwidiIsInZhbHVlIiwiY29kZSIsImRpcnR5IiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsInN0YXR1cyIsInNldFN0YXR1cyIsInN0YXR1c2VzIiwibG9hZGluZyIsInN1Y2Nlc3MiLCJzdWJtaXR0ZWQiLCJlcnJvciIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwibmFtZSIsInRhcmdldCIsInZhbHVlcyIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiaXNEaXJ0eSIsIk9iamVjdCIsImtleXMiLCJldmVyeSIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImF1dGgiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImpzb24iLCJlbWFpbElucHV0IiwiaW5wdXQiLCJjbGFzc05hbWUiLCJlbWFpbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwic21hbGwiLCJwYXNzd29yZElucHV0IiwicGFzc3dvcmQiLCJhY3RpdmF0aW9uQ29kZUlucHV0IiwibGF5b3V0U2VsZWN0b3IiLCJmaWVsZCIsImZvcm0iLCJvblN1Ym1pdCIsIm1hcCIsImlkeCIsInRvU3RyaW5nIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Form/form.tsx\n"));

/***/ })

});