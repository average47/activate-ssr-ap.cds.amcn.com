/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/grid/page",{

/***/ "(app-pages-browser)/./node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/mini-css-extract-plugin/hmr/hotModuleReplacement.js":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/mini-css-extract-plugin/hmr/hotModuleReplacement.js ***!
  \**********************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("var __dirname = \"/\";\n\n(()=>{\n    \"use strict\";\n    var e = {\n        686: (e, r, t)=>{\n            var n = t(808);\n            var i = Object.create(null);\n            var a = typeof document === \"undefined\";\n            var o = Array.prototype.forEach;\n            function debounce(e, r) {\n                var t = 0;\n                return function() {\n                    var n = this;\n                    var i = arguments;\n                    var a = function functionCall() {\n                        return e.apply(n, i);\n                    };\n                    clearTimeout(t);\n                    t = setTimeout(a, r);\n                };\n            }\n            function noop() {}\n            function getCurrentScriptUrl(e) {\n                var r = i[e];\n                if (!r) {\n                    if (document.currentScript) {\n                        r = document.currentScript.src;\n                    } else {\n                        var t = document.getElementsByTagName(\"script\");\n                        var a = t[t.length - 1];\n                        if (a) {\n                            r = a.src;\n                        }\n                    }\n                    i[e] = r;\n                }\n                return function(e) {\n                    if (!r) {\n                        return null;\n                    }\n                    var t = r.split(/([^\\\\/]+)\\.js$/);\n                    var i = t && t[1];\n                    if (!i) {\n                        return [\n                            r.replace(\".js\", \".css\")\n                        ];\n                    }\n                    if (!e) {\n                        return [\n                            r.replace(\".js\", \".css\")\n                        ];\n                    }\n                    return e.split(\",\").map(function(e) {\n                        var t = new RegExp(\"\".concat(i, \"\\\\.js$\"), \"g\");\n                        return n(r.replace(t, \"\".concat(e.replace(/{fileName}/g, i), \".css\")));\n                    });\n                };\n            }\n            function updateCss(e, r) {\n                if (!r) {\n                    if (!e.href) {\n                        return;\n                    }\n                    r = e.href.split(\"?\")[0];\n                }\n                if (!isUrlRequest(r)) {\n                    return;\n                }\n                if (e.isLoaded === false) {\n                    return;\n                }\n                if (!r || !(r.indexOf(\".css\") > -1)) {\n                    return;\n                }\n                e.visited = true;\n                var t = e.cloneNode();\n                t.isLoaded = false;\n                t.addEventListener(\"load\", function() {\n                    if (t.isLoaded) {\n                        return;\n                    }\n                    t.isLoaded = true;\n                    e.parentNode.removeChild(e);\n                });\n                t.addEventListener(\"error\", function() {\n                    if (t.isLoaded) {\n                        return;\n                    }\n                    t.isLoaded = true;\n                    e.parentNode.removeChild(e);\n                });\n                t.href = \"\".concat(r, \"?\").concat(Date.now());\n                if (e.nextSibling) {\n                    e.parentNode.insertBefore(t, e.nextSibling);\n                } else {\n                    e.parentNode.appendChild(t);\n                }\n            }\n            function getReloadUrl(e, r) {\n                var t;\n                e = n(e, {\n                    stripWWW: false\n                });\n                r.some(function(n) {\n                    if (e.indexOf(r) > -1) {\n                        t = n;\n                    }\n                });\n                return t;\n            }\n            function reloadStyle(e) {\n                if (!e) {\n                    return false;\n                }\n                var r = document.querySelectorAll(\"link\");\n                var t = false;\n                o.call(r, function(r) {\n                    if (!r.href) {\n                        return;\n                    }\n                    var n = getReloadUrl(r.href, e);\n                    if (!isUrlRequest(n)) {\n                        return;\n                    }\n                    if (r.visited === true) {\n                        return;\n                    }\n                    if (n) {\n                        updateCss(r, n);\n                        t = true;\n                    }\n                });\n                return t;\n            }\n            function reloadAll() {\n                var e = document.querySelectorAll(\"link\");\n                o.call(e, function(e) {\n                    if (e.visited === true) {\n                        return;\n                    }\n                    updateCss(e);\n                });\n            }\n            function isUrlRequest(e) {\n                if (!/^[a-zA-Z][a-zA-Z\\d+\\-.]*:/.test(e)) {\n                    return false;\n                }\n                return true;\n            }\n            e.exports = function(e, r) {\n                if (a) {\n                    console.log(\"no window.document found, will not HMR CSS\");\n                    return noop;\n                }\n                var t = getCurrentScriptUrl(e);\n                function update() {\n                    var e = t(r.filename);\n                    var n = reloadStyle(e);\n                    if (r.locals) {\n                        console.log(\"[HMR] Detected local css modules. Reload all css\");\n                        reloadAll();\n                        return;\n                    }\n                    if (n) {\n                        console.log(\"[HMR] css reload %s\", e.join(\" \"));\n                    } else {\n                        console.log(\"[HMR] Reload all css\");\n                        reloadAll();\n                    }\n                }\n                return debounce(update, 50);\n            };\n        },\n        808: (e)=>{\n            function normalizeUrl(e) {\n                return e.reduce(function(e, r) {\n                    switch(r){\n                        case \"..\":\n                            e.pop();\n                            break;\n                        case \".\":\n                            break;\n                        default:\n                            e.push(r);\n                    }\n                    return e;\n                }, []).join(\"/\");\n            }\n            e.exports = function(e) {\n                e = e.trim();\n                if (/^data:/i.test(e)) {\n                    return e;\n                }\n                var r = e.indexOf(\"//\") !== -1 ? e.split(\"//\")[0] + \"//\" : \"\";\n                var t = e.replace(new RegExp(r, \"i\"), \"\").split(\"/\");\n                var n = t[0].toLowerCase().replace(/\\.$/, \"\");\n                t[0] = \"\";\n                var i = normalizeUrl(t);\n                return r + n + i;\n            };\n        }\n    };\n    var r = {};\n    function __nccwpck_require__(t) {\n        var n = r[t];\n        if (n !== undefined) {\n            return n.exports;\n        }\n        var i = r[t] = {\n            exports: {}\n        };\n        var a = true;\n        try {\n            e[t](i, i.exports, __nccwpck_require__);\n            a = false;\n        } finally{\n            if (a) delete r[t];\n        }\n        return i.exports;\n    }\n    if (typeof __nccwpck_require__ !== \"undefined\") __nccwpck_require__.ab = __dirname + \"/\";\n    var t = __nccwpck_require__(686);\n    module.exports = t;\n})();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy8ucG5wbS9uZXh0QDE0LjEuMF9yZWFjdC1kb21AMTguMi4wX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qcyIsIm1hcHBpbmdzIjoiOztBQUFDO0lBQUs7SUFBYSxJQUFJQSxJQUFFO1FBQUMsS0FBSSxDQUFDQSxHQUFFQyxHQUFFQztZQUFLLElBQUlDLElBQUVELEVBQUU7WUFBSyxJQUFJRSxJQUFFQyxPQUFPQyxNQUFNLENBQUM7WUFBTSxJQUFJQyxJQUFFLE9BQU9DLGFBQVc7WUFBWSxJQUFJQyxJQUFFQyxNQUFNQyxTQUFTLENBQUNDLE9BQU87WUFBQyxTQUFTQyxTQUFTYixDQUFDLEVBQUNDLENBQUM7Z0JBQUUsSUFBSUMsSUFBRTtnQkFBRSxPQUFPO29CQUFXLElBQUlDLElBQUUsSUFBSTtvQkFBQyxJQUFJQyxJQUFFVTtvQkFBVSxJQUFJUCxJQUFFLFNBQVNRO3dCQUFlLE9BQU9mLEVBQUVnQixLQUFLLENBQUNiLEdBQUVDO29CQUFFO29CQUFFYSxhQUFhZjtvQkFBR0EsSUFBRWdCLFdBQVdYLEdBQUVOO2dCQUFFO1lBQUM7WUFBQyxTQUFTa0IsUUFBTztZQUFDLFNBQVNDLG9CQUFvQnBCLENBQUM7Z0JBQUUsSUFBSUMsSUFBRUcsQ0FBQyxDQUFDSixFQUFFO2dCQUFDLElBQUcsQ0FBQ0MsR0FBRTtvQkFBQyxJQUFHTyxTQUFTYSxhQUFhLEVBQUM7d0JBQUNwQixJQUFFTyxTQUFTYSxhQUFhLENBQUNDLEdBQUc7b0JBQUEsT0FBSzt3QkFBQyxJQUFJcEIsSUFBRU0sU0FBU2Usb0JBQW9CLENBQUM7d0JBQVUsSUFBSWhCLElBQUVMLENBQUMsQ0FBQ0EsRUFBRXNCLE1BQU0sR0FBQyxFQUFFO3dCQUFDLElBQUdqQixHQUFFOzRCQUFDTixJQUFFTSxFQUFFZSxHQUFHO3dC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SWdFLFdBQVU7WUFBQyxPQUFPaEUsRUFBRWtELE9BQU87UUFBQTtRQUFDLElBQUlqRCxJQUFFSCxDQUFDLENBQUNDLEVBQUUsR0FBQztZQUFDbUQsU0FBUSxDQUFDO1FBQUM7UUFBRSxJQUFJOUMsSUFBRTtRQUFLLElBQUc7WUFBQ1AsQ0FBQyxDQUFDRSxFQUFFLENBQUNFLEdBQUVBLEVBQUVpRCxPQUFPLEVBQUNhO1lBQXFCM0QsSUFBRTtRQUFLLFNBQVE7WUFBQyxJQUFHQSxHQUFFLE9BQU9OLENBQUMsQ0FBQ0MsRUFBRTtRQUFBO1FBQUMsT0FBT0UsRUFBRWlELE9BQU87SUFBQTtJQUFDLElBQUcsT0FBT2Esd0JBQXNCLGFBQVlBLG9CQUFvQkUsRUFBRSxHQUFDQyxTQUFTQSxHQUFDO0lBQUksSUFBSW5FLElBQUVnRSxvQkFBb0I7SUFBS0ksT0FBT2pCLE9BQU8sR0FBQ25EO0FBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzLy5wbnBtL25leHRAMTQuMS4wX3JlYWN0LWRvbUAxOC4yLjBfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzPzUxM2MiXSwic291cmNlc0NvbnRlbnQiOlsiKCgpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9ezY4NjooZSxyLHQpPT57dmFyIG49dCg4MDgpO3ZhciBpPU9iamVjdC5jcmVhdGUobnVsbCk7dmFyIGE9dHlwZW9mIGRvY3VtZW50PT09XCJ1bmRlZmluZWRcIjt2YXIgbz1BcnJheS5wcm90b3R5cGUuZm9yRWFjaDtmdW5jdGlvbiBkZWJvdW5jZShlLHIpe3ZhciB0PTA7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIG49dGhpczt2YXIgaT1hcmd1bWVudHM7dmFyIGE9ZnVuY3Rpb24gZnVuY3Rpb25DYWxsKCl7cmV0dXJuIGUuYXBwbHkobixpKX07Y2xlYXJUaW1lb3V0KHQpO3Q9c2V0VGltZW91dChhLHIpfX1mdW5jdGlvbiBub29wKCl7fWZ1bmN0aW9uIGdldEN1cnJlbnRTY3JpcHRVcmwoZSl7dmFyIHI9aVtlXTtpZighcil7aWYoZG9jdW1lbnQuY3VycmVudFNjcmlwdCl7cj1kb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY31lbHNle3ZhciB0PWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO3ZhciBhPXRbdC5sZW5ndGgtMV07aWYoYSl7cj1hLnNyY319aVtlXT1yfXJldHVybiBmdW5jdGlvbihlKXtpZighcil7cmV0dXJuIG51bGx9dmFyIHQ9ci5zcGxpdCgvKFteXFxcXC9dKylcXC5qcyQvKTt2YXIgaT10JiZ0WzFdO2lmKCFpKXtyZXR1cm5bci5yZXBsYWNlKFwiLmpzXCIsXCIuY3NzXCIpXX1pZighZSl7cmV0dXJuW3IucmVwbGFjZShcIi5qc1wiLFwiLmNzc1wiKV19cmV0dXJuIGUuc3BsaXQoXCIsXCIpLm1hcCgoZnVuY3Rpb24oZSl7dmFyIHQ9bmV3IFJlZ0V4cChcIlwiLmNvbmNhdChpLFwiXFxcXC5qcyRcIiksXCJnXCIpO3JldHVybiBuKHIucmVwbGFjZSh0LFwiXCIuY29uY2F0KGUucmVwbGFjZSgve2ZpbGVOYW1lfS9nLGkpLFwiLmNzc1wiKSkpfSkpfX1mdW5jdGlvbiB1cGRhdGVDc3MoZSxyKXtpZighcil7aWYoIWUuaHJlZil7cmV0dXJufXI9ZS5ocmVmLnNwbGl0KFwiP1wiKVswXX1pZighaXNVcmxSZXF1ZXN0KHIpKXtyZXR1cm59aWYoZS5pc0xvYWRlZD09PWZhbHNlKXtyZXR1cm59aWYoIXJ8fCEoci5pbmRleE9mKFwiLmNzc1wiKT4tMSkpe3JldHVybn1lLnZpc2l0ZWQ9dHJ1ZTt2YXIgdD1lLmNsb25lTm9kZSgpO3QuaXNMb2FkZWQ9ZmFsc2U7dC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLChmdW5jdGlvbigpe2lmKHQuaXNMb2FkZWQpe3JldHVybn10LmlzTG9hZGVkPXRydWU7ZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfSkpO3QuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsKGZ1bmN0aW9uKCl7aWYodC5pc0xvYWRlZCl7cmV0dXJufXQuaXNMb2FkZWQ9dHJ1ZTtlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSl9KSk7dC5ocmVmPVwiXCIuY29uY2F0KHIsXCI/XCIpLmNvbmNhdChEYXRlLm5vdygpKTtpZihlLm5leHRTaWJsaW5nKXtlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyl9ZWxzZXtlLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodCl9fWZ1bmN0aW9uIGdldFJlbG9hZFVybChlLHIpe3ZhciB0O2U9bihlLHtzdHJpcFdXVzpmYWxzZX0pO3Iuc29tZSgoZnVuY3Rpb24obil7aWYoZS5pbmRleE9mKHIpPi0xKXt0PW59fSkpO3JldHVybiB0fWZ1bmN0aW9uIHJlbG9hZFN0eWxlKGUpe2lmKCFlKXtyZXR1cm4gZmFsc2V9dmFyIHI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpbmtcIik7dmFyIHQ9ZmFsc2U7by5jYWxsKHIsKGZ1bmN0aW9uKHIpe2lmKCFyLmhyZWYpe3JldHVybn12YXIgbj1nZXRSZWxvYWRVcmwoci5ocmVmLGUpO2lmKCFpc1VybFJlcXVlc3Qobikpe3JldHVybn1pZihyLnZpc2l0ZWQ9PT10cnVlKXtyZXR1cm59aWYobil7dXBkYXRlQ3NzKHIsbik7dD10cnVlfX0pKTtyZXR1cm4gdH1mdW5jdGlvbiByZWxvYWRBbGwoKXt2YXIgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGlua1wiKTtvLmNhbGwoZSwoZnVuY3Rpb24oZSl7aWYoZS52aXNpdGVkPT09dHJ1ZSl7cmV0dXJufXVwZGF0ZUNzcyhlKX0pKX1mdW5jdGlvbiBpc1VybFJlcXVlc3QoZSl7aWYoIS9eW2EtekEtWl1bYS16QS1aXFxkK1xcLS5dKjovLnRlc3QoZSkpe3JldHVybiBmYWxzZX1yZXR1cm4gdHJ1ZX1lLmV4cG9ydHM9ZnVuY3Rpb24oZSxyKXtpZihhKXtjb25zb2xlLmxvZyhcIm5vIHdpbmRvdy5kb2N1bWVudCBmb3VuZCwgd2lsbCBub3QgSE1SIENTU1wiKTtyZXR1cm4gbm9vcH12YXIgdD1nZXRDdXJyZW50U2NyaXB0VXJsKGUpO2Z1bmN0aW9uIHVwZGF0ZSgpe3ZhciBlPXQoci5maWxlbmFtZSk7dmFyIG49cmVsb2FkU3R5bGUoZSk7aWYoci5sb2NhbHMpe2NvbnNvbGUubG9nKFwiW0hNUl0gRGV0ZWN0ZWQgbG9jYWwgY3NzIG1vZHVsZXMuIFJlbG9hZCBhbGwgY3NzXCIpO3JlbG9hZEFsbCgpO3JldHVybn1pZihuKXtjb25zb2xlLmxvZyhcIltITVJdIGNzcyByZWxvYWQgJXNcIixlLmpvaW4oXCIgXCIpKX1lbHNle2NvbnNvbGUubG9nKFwiW0hNUl0gUmVsb2FkIGFsbCBjc3NcIik7cmVsb2FkQWxsKCl9fXJldHVybiBkZWJvdW5jZSh1cGRhdGUsNTApfX0sODA4OmU9PntmdW5jdGlvbiBub3JtYWxpemVVcmwoZSl7cmV0dXJuIGUucmVkdWNlKChmdW5jdGlvbihlLHIpe3N3aXRjaChyKXtjYXNlXCIuLlwiOmUucG9wKCk7YnJlYWs7Y2FzZVwiLlwiOmJyZWFrO2RlZmF1bHQ6ZS5wdXNoKHIpfXJldHVybiBlfSksW10pLmpvaW4oXCIvXCIpfWUuZXhwb3J0cz1mdW5jdGlvbihlKXtlPWUudHJpbSgpO2lmKC9eZGF0YTovaS50ZXN0KGUpKXtyZXR1cm4gZX12YXIgcj1lLmluZGV4T2YoXCIvL1wiKSE9PS0xP2Uuc3BsaXQoXCIvL1wiKVswXStcIi8vXCI6XCJcIjt2YXIgdD1lLnJlcGxhY2UobmV3IFJlZ0V4cChyLFwiaVwiKSxcIlwiKS5zcGxpdChcIi9cIik7dmFyIG49dFswXS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xcLiQvLFwiXCIpO3RbMF09XCJcIjt2YXIgaT1ub3JtYWxpemVVcmwodCk7cmV0dXJuIHIrbitpfX19O3ZhciByPXt9O2Z1bmN0aW9uIF9fbmNjd3Bja19yZXF1aXJlX18odCl7dmFyIG49clt0XTtpZihuIT09dW5kZWZpbmVkKXtyZXR1cm4gbi5leHBvcnRzfXZhciBpPXJbdF09e2V4cG9ydHM6e319O3ZhciBhPXRydWU7dHJ5e2VbdF0oaSxpLmV4cG9ydHMsX19uY2N3cGNrX3JlcXVpcmVfXyk7YT1mYWxzZX1maW5hbGx5e2lmKGEpZGVsZXRlIHJbdF19cmV0dXJuIGkuZXhwb3J0c31pZih0eXBlb2YgX19uY2N3cGNrX3JlcXVpcmVfXyE9PVwidW5kZWZpbmVkXCIpX19uY2N3cGNrX3JlcXVpcmVfXy5hYj1fX2Rpcm5hbWUrXCIvXCI7dmFyIHQ9X19uY2N3cGNrX3JlcXVpcmVfXyg2ODYpO21vZHVsZS5leHBvcnRzPXR9KSgpOyJdLCJuYW1lcyI6WyJlIiwiciIsInQiLCJuIiwiaSIsIk9iamVjdCIsImNyZWF0ZSIsImEiLCJkb2N1bWVudCIsIm8iLCJBcnJheSIsInByb3RvdHlwZSIsImZvckVhY2giLCJkZWJvdW5jZSIsImFyZ3VtZW50cyIsImZ1bmN0aW9uQ2FsbCIsImFwcGx5IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIm5vb3AiLCJnZXRDdXJyZW50U2NyaXB0VXJsIiwiY3VycmVudFNjcmlwdCIsInNyYyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibGVuZ3RoIiwic3BsaXQiLCJyZXBsYWNlIiwibWFwIiwiUmVnRXhwIiwiY29uY2F0IiwidXBkYXRlQ3NzIiwiaHJlZiIsImlzVXJsUmVxdWVzdCIsImlzTG9hZGVkIiwiaW5kZXhPZiIsInZpc2l0ZWQiLCJjbG9uZU5vZGUiLCJhZGRFdmVudExpc3RlbmVyIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiRGF0ZSIsIm5vdyIsIm5leHRTaWJsaW5nIiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJnZXRSZWxvYWRVcmwiLCJzdHJpcFdXVyIsInNvbWUiLCJyZWxvYWRTdHlsZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjYWxsIiwicmVsb2FkQWxsIiwidGVzdCIsImV4cG9ydHMiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlIiwiZmlsZW5hbWUiLCJsb2NhbHMiLCJqb2luIiwibm9ybWFsaXplVXJsIiwicmVkdWNlIiwicG9wIiwicHVzaCIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsIl9fbmNjd3Bja19yZXF1aXJlX18iLCJ1bmRlZmluZWQiLCJhYiIsIl9fZGlybmFtZSIsIm1vZHVsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/mini-css-extract-plugin/hmr/hotModuleReplacement.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/grid/page.module.scss":
/*!***************************************!*\
  !*** ./src/app/grid/page.module.scss ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// extracted by mini-css-extract-plugin\nmodule.exports = {\"box\":\"page_box__L76zj\",\"test\":\"page_test__bQihG\"};\n    if(true) {\n      // 1708029554887\n      var cssReload = __webpack_require__(/*! ./node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/mini-css-extract-plugin/hmr/hotModuleReplacement.js */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/mini-css-extract-plugin/hmr/hotModuleReplacement.js\")(module.id, {\"publicPath\":\"/_next/\",\"esModule\":false,\"locals\":true});\n      module.hot.dispose(cssReload);\n      \n    }\n  \nmodule.exports.__checksum = \"3910a0f81968\"\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ3JpZC9wYWdlLm1vZHVsZS5zY3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0JBQWtCO0FBQ2xCLE9BQU8sSUFBVTtBQUNqQjtBQUNBLHNCQUFzQixtQkFBTyxDQUFDLGtVQUEyTSxjQUFjLHNEQUFzRDtBQUM3UyxNQUFNLFVBQVU7QUFDaEI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ3JpZC9wYWdlLm1vZHVsZS5zY3NzP2YwNzQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImJveFwiOlwicGFnZV9ib3hfX0w3NnpqXCIsXCJ0ZXN0XCI6XCJwYWdlX3Rlc3RfX2JRaWhHXCJ9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE3MDgwMjk1NTQ4ODdcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL1VzZXJzL1J5YW4uTW9vcmUvV29yay9TaXRlL2FjdGl2YXRlLXNzci1hcC5jZHMuYW1jbi5jb20vbm9kZV9tb2R1bGVzLy5wbnBtL25leHRAMTQuMS4wX3JlYWN0LWRvbUAxOC4yLjBfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wicHVibGljUGF0aFwiOlwiL19uZXh0L1wiLFwiZXNNb2R1bGVcIjpmYWxzZSxcImxvY2Fsc1wiOnRydWV9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgXG4gICAgfVxuICBcbm1vZHVsZS5leHBvcnRzLl9fY2hlY2tzdW0gPSBcIjM5MTBhMGY4MTk2OFwiXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/grid/page.module.scss\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/grid/page.tsx":
/*!*******************************!*\
  !*** ./src/app/grid/page.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.module.scss */ \"(app-pages-browser)/./src/app/grid/page.module.scss\");\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_page_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Page() {\n    _s();\n    const [expanded, setExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggle = ()=>{\n        setExpanded((prev)=>!prev);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().box),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        backgroundColor: \"greenyellow\"\n                    },\n                    children: \"1\"\n                }, void 0, false, {\n                    fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/app/grid/page.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        backgroundColor: \"goldenrod\"\n                    },\n                    children: \"2\"\n                }, void 0, false, {\n                    fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/app/grid/page.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        backgroundColor: \"green\"\n                    },\n                    children: \"3\"\n                }, void 0, false, {\n                    fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/app/grid/page.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        backgroundColor: \"red\"\n                    },\n                    children: \"4\"\n                }, void 0, false, {\n                    fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/app/grid/page.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        flexBasis: \"350px\"\n                    },\n                    children: \"5\"\n                }, void 0, false, {\n                    fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/app/grid/page.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        backgroundColor: \"grey\"\n                    },\n                    children: \"6\"\n                }, void 0, false, {\n                    fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/app/grid/page.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        backgroundColor: \"plum\"\n                    },\n                    children: \"7\"\n                }, void 0, false, {\n                    fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/app/grid/page.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        backgroundColor: \"darkorchid\"\n                    },\n                    children: \"8\"\n                }, void 0, false, {\n                    fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/app/grid/page.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        backgroundColor: \"sandybrown\"\n                    },\n                    children: \"9\"\n                }, void 0, false, {\n                    fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/app/grid/page.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        backgroundColor: \"brown\"\n                    },\n                    children: \"10\"\n                }, void 0, false, {\n                    fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/app/grid/page.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/app/grid/page.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/Ryan.Moore/Work/Site/activate-ssr-ap.cds.amcn.com/src/app/grid/page.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"DuL5jiiQQFgbn7gBKAyxwS/H4Ek=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ3JpZC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNpQztBQUNPO0FBRXpCLFNBQVNFOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0osK0NBQVFBLENBQUM7SUFDekMsTUFBTUssU0FBUztRQUNiRCxZQUFZLENBQUNFLE9BQVMsQ0FBQ0E7SUFDekI7SUFFQSxxQkFDRSw4REFBQ0M7UUFBS0MsV0FBVTtrQkFDZCw0RUFBQ0M7WUFBSUQsV0FBV1AsOERBQVU7OzhCQUN4Qiw4REFBQ1E7b0JBQUlFLE9BQU87d0JBQUVDLGlCQUFpQjtvQkFBYzs4QkFBRzs7Ozs7OzhCQUNoRCw4REFBQ0g7b0JBQUlFLE9BQU87d0JBQUVDLGlCQUFpQjtvQkFBWTs4QkFBRzs7Ozs7OzhCQUM5Qyw4REFBQ0g7b0JBQUlFLE9BQU87d0JBQUVDLGlCQUFpQjtvQkFBUTs4QkFBRzs7Ozs7OzhCQUMxQyw4REFBQ0g7b0JBQUlFLE9BQU87d0JBQUVDLGlCQUFpQjtvQkFBTTs4QkFBRzs7Ozs7OzhCQUN4Qyw4REFBQ0g7b0JBQUlFLE9BQU87d0JBQUVFLFdBQVc7b0JBQVE7OEJBQUc7Ozs7Ozs4QkFDcEMsOERBQUNKO29CQUFJRSxPQUFPO3dCQUFFQyxpQkFBaUI7b0JBQU87OEJBQUc7Ozs7Ozs4QkFDekMsOERBQUNIO29CQUFJRSxPQUFPO3dCQUFFQyxpQkFBaUI7b0JBQU87OEJBQUc7Ozs7Ozs4QkFDekMsOERBQUNIO29CQUFJRSxPQUFPO3dCQUFFQyxpQkFBaUI7b0JBQWE7OEJBQUc7Ozs7Ozs4QkFDL0MsOERBQUNIO29CQUFJRSxPQUFPO3dCQUFFQyxpQkFBaUI7b0JBQWE7OEJBQUc7Ozs7Ozs4QkFDL0MsOERBQUNIO29CQUFJRSxPQUFPO3dCQUFFQyxpQkFBaUI7b0JBQVE7OEJBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWxEO0dBdEJ3QlY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9ncmlkL3BhZ2UudHN4P2M2ZGMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcGFnZS5tb2R1bGUuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0b2dnbGUgPSAoKSA9PiB7XG4gICAgc2V0RXhwYW5kZWQoKHByZXYpID0+ICFwcmV2KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveH0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnZ3JlZW55ZWxsb3cnIH19PjE8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdnb2xkZW5yb2QnIH19PjI8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdncmVlbicgfX0+MzwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3JlZCcgfX0+NDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXhCYXNpczogJzM1MHB4JyB9fT41PC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnZ3JleScgfX0+NjwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3BsdW0nIH19Pjc8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdkYXJrb3JjaGlkJyB9fT44PC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnc2FuZHlicm93bicgfX0+OTwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ2Jyb3duJyB9fT4xMDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwiUGFnZSIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJ0b2dnbGUiLCJwcmV2IiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImJveCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZmxleEJhc2lzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/grid/page.tsx\n"));

/***/ })

});