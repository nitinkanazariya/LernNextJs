"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"0777e2665c33\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIkU6XFxuaXRpblxcTklUSU5cXE5leHRKc1xcbGVhcm5uZXh0XFxhcHBcXGdsb2JhbHMuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiMDc3N2UyNjY1YzMzXCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/component/header.jsx":
/*!**********************************!*\
  !*** ./app/component/header.jsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/client/app-dir/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Header = ()=>{\n    _s();\n    const [isScrolled, setIsScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [openDrawer, setOpenDrawer] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)({\n        \"Header.useEffect\": ()=>{\n            const handleScroll = {\n                \"Header.useEffect.handleScroll\": ()=>{\n                    if (window.scrollY > 100) {\n                        setIsScrolled(true);\n                    } else {\n                        setIsScrolled(false);\n                    }\n                }\n            }[\"Header.useEffect.handleScroll\"];\n            window.addEventListener('scroll', handleScroll);\n            return ({\n                \"Header.useEffect\": ()=>{\n                    window.removeEventListener('scroll', handleScroll);\n                }\n            })[\"Header.useEffect\"];\n        }\n    }[\"Header.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-between items-center fixed top-0 right-0 left-0 py-[25px] px-[28px] sm:px-[50px] md:px-[100px] lg:px-[100px] xl:px-[200px] 2xl:px-[370px] transition-all duration-300 \".concat(isScrolled ? 'bg-[#053C4B]' : 'bg-transparent'),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                src: \"/images/logo.png\",\n                alt: \"Logo\",\n                width: 199,\n                height: 50,\n                className: \"h-[40px] w-[160px] sm:h-[50px] sm:w-[199px]\"\n            }, void 0, false, {\n                fileName: \"E:\\\\nitin\\\\NITIN\\\\NextJs\\\\learnnext\\\\app\\\\component\\\\header.jsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" md:space-x-10 justify-center items-center hidden md:hidden lg:flex  text-lg font-semibold text-white text-[17px] \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/home\",\n                        children: \"Advisors\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\nitin\\\\NITIN\\\\NextJs\\\\learnnext\\\\app\\\\component\\\\header.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/about\",\n                        children: \"Insights\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\nitin\\\\NITIN\\\\NextJs\\\\learnnext\\\\app\\\\component\\\\header.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/services\",\n                        children: \"About\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\nitin\\\\NITIN\\\\NextJs\\\\learnnext\\\\app\\\\component\\\\header.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/services\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\nitin\\\\NITIN\\\\NextJs\\\\learnnext\\\\app\\\\component\\\\header.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/services\",\n                        className: \"flex h-[14px] w-[14px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            src: '/images/search.png',\n                            alt: \"search\",\n                            height: 14,\n                            width: 14\n                        }, void 0, false, {\n                            fileName: \"E:\\\\nitin\\\\NITIN\\\\NextJs\\\\learnnext\\\\app\\\\component\\\\header.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\nitin\\\\NITIN\\\\NextJs\\\\learnnext\\\\app\\\\component\\\\header.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"h-[40px] w-[114px] border-2 border-white\",\n                        children: \"Join now\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\nitin\\\\NITIN\\\\NextJs\\\\learnnext\\\\app\\\\component\\\\header.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\nitin\\\\NITIN\\\\NextJs\\\\learnnext\\\\app\\\\component\\\\header.jsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex lg:hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>{\n                            setOpenDrawer(true);\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            src: '/images/menu.png',\n                            alt: \"search\",\n                            height: 20,\n                            width: 20\n                        }, void 0, false, {\n                            fileName: \"E:\\\\nitin\\\\NITIN\\\\NextJs\\\\learnnext\\\\app\\\\component\\\\header.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\nitin\\\\NITIN\\\\NextJs\\\\learnnext\\\\app\\\\component\\\\header.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/services\",\n                        className: \"ml-[20px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            src: '/images/search.png',\n                            alt: \"search\",\n                            height: 20,\n                            width: 20\n                        }, void 0, false, {\n                            fileName: \"E:\\\\nitin\\\\NITIN\\\\NextJs\\\\learnnext\\\\app\\\\component\\\\header.jsx\",\n                            lineNumber: 68,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\nitin\\\\NITIN\\\\NextJs\\\\learnnext\\\\app\\\\component\\\\header.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\nitin\\\\NITIN\\\\NextJs\\\\learnnext\\\\app\\\\component\\\\header.jsx\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-0 right-0 w-full h-full bg-gray-800 text-white transform \".concat(openDrawer ? 'translate-x-0' : 'translate-x-full', \" transition-transform duration-500 ease-in-out\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"self-\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        src: '/images/close.png',\n                        alt: \"close\",\n                        height: 20,\n                        width: 20\n                    }, void 0, false, {\n                        fileName: \"E:\\\\nitin\\\\NITIN\\\\NextJs\\\\learnnext\\\\app\\\\component\\\\header.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"E:\\\\nitin\\\\NITIN\\\\NextJs\\\\learnnext\\\\app\\\\component\\\\header.jsx\",\n                    lineNumber: 77,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\nitin\\\\NITIN\\\\NextJs\\\\learnnext\\\\app\\\\component\\\\header.jsx\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\nitin\\\\NITIN\\\\NextJs\\\\learnnext\\\\app\\\\component\\\\header.jsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Header, \"TxrAVFrLJzKUBcQtJTuSFJj7xVQ=\");\n_c = Header;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnQvaGVhZGVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDOEI7QUFDRjtBQUNzQjtBQUVsRCxNQUFNSyxTQUFTOztJQUNYLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHSCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNJLFlBQVlDLGNBQWMsR0FBR0wsK0NBQVFBLENBQUM7SUFFN0NELGdEQUFTQTs0QkFBQztZQUNOLE1BQU1PO2lEQUFlO29CQUNqQixJQUFJQyxPQUFPQyxPQUFPLEdBQUcsS0FBSzt3QkFDdEJMLGNBQWM7b0JBQ2xCLE9BQU87d0JBQ0hBLGNBQWM7b0JBQ2xCO2dCQUNKOztZQUNBSSxPQUFPRSxnQkFBZ0IsQ0FBQyxVQUFVSDtZQUNsQztvQ0FBTztvQkFDSEMsT0FBT0csbUJBQW1CLENBQUMsVUFBVUo7Z0JBQ3pDOztRQUNKOzJCQUFHLEVBQUU7SUFDTCxxQkFDSSw4REFBQ0s7UUFBSUMsV0FBVyxzTEFBcU8sT0FBL0NWLGFBQWEsaUJBQWlCOzswQkFDaE8sOERBQUNOLGtEQUFLQTtnQkFDRmlCLEtBQUk7Z0JBQ0pDLEtBQUk7Z0JBQ0pDLE9BQU87Z0JBQ1BDLFFBQVE7Z0JBQ1JKLFdBQVU7Ozs7OzswQkFHZCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDZixrREFBSUE7d0JBQUNvQixNQUFLO2tDQUFTOzs7Ozs7a0NBR3BCLDhEQUFDcEIsa0RBQUlBO3dCQUFDb0IsTUFBSztrQ0FBVTs7Ozs7O2tDQUdyQiw4REFBQ3BCLGtEQUFJQTt3QkFBQ29CLE1BQUs7a0NBQVk7Ozs7OztrQ0FHdkIsOERBQUNwQixrREFBSUE7d0JBQUNvQixNQUFLO2tDQUFhOzs7Ozs7a0NBR3hCLDhEQUFDcEIsa0RBQUlBO3dCQUFDb0IsTUFBSzt3QkFBWUwsV0FBVTtrQ0FDN0IsNEVBQUNoQixrREFBS0E7NEJBQUNpQixLQUFLOzRCQUNSQyxLQUFJOzRCQUNKRSxRQUFROzRCQUNSRCxPQUFPOzs7Ozs7Ozs7OztrQ0FHZiw4REFBQ0c7d0JBQU9OLFdBQVU7a0NBQTJDOzs7Ozs7Ozs7Ozs7MEJBTWpFLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNNO3dCQUFPQyxTQUFTOzRCQUFRZCxjQUFjO3dCQUFNO2tDQUN6Qyw0RUFBQ1Qsa0RBQUtBOzRCQUFDaUIsS0FBSzs0QkFDUkMsS0FBSTs0QkFDSkUsUUFBUTs0QkFDUkQsT0FBTzs7Ozs7Ozs7Ozs7a0NBR2YsOERBQUNsQixrREFBSUE7d0JBQUNvQixNQUFLO3dCQUFZTCxXQUFVO2tDQUM3Qiw0RUFBQ2hCLGtEQUFLQTs0QkFBQ2lCLEtBQUs7NEJBQ1JDLEtBQUk7NEJBQ0pFLFFBQVE7NEJBQ1JELE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUluQiw4REFBQ0o7Z0JBQUlDLFdBQVcsc0VBQ1gsT0FEaUZSLGFBQWEsa0JBQWtCLG9CQUNoSDswQkFDRCw0RUFBQ2M7b0JBQU9OLFdBQVU7OEJBQ2QsNEVBQUNoQixrREFBS0E7d0JBQ0ZpQixLQUFLO3dCQUNMQyxLQUFJO3dCQUNKRSxRQUFRO3dCQUNSRCxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTy9CO0dBbkZNZDtLQUFBQTtBQXFGTixpRUFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsiRTpcXG5pdGluXFxOSVRJTlxcTmV4dEpzXFxsZWFybm5leHRcXGFwcFxcY29tcG9uZW50XFxoZWFkZXIuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2lzU2Nyb2xsZWQsIHNldElzU2Nyb2xsZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbb3BlbkRyYXdlciwgc2V0T3BlbkRyYXdlcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc1Njcm9sbGVkKHRydWUpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc1Njcm9sbGVkKGZhbHNlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbClcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgZml4ZWQgdG9wLTAgcmlnaHQtMCBsZWZ0LTAgcHktWzI1cHhdIHB4LVsyOHB4XSBzbTpweC1bNTBweF0gbWQ6cHgtWzEwMHB4XSBsZzpweC1bMTAwcHhdIHhsOnB4LVsyMDBweF0gMnhsOnB4LVszNzBweF0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwICR7aXNTY3JvbGxlZCA/ICdiZy1bIzA1M0M0Ql0nIDogJ2JnLXRyYW5zcGFyZW50J31gfT5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIkxvZ29cIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezE5OX1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17NTB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2gtWzQwcHhdIHctWzE2MHB4XSBzbTpoLVs1MHB4XSBzbTp3LVsxOTlweF0nXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtZDpzcGFjZS14LTEwIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoaWRkZW4gbWQ6aGlkZGVuIGxnOmZsZXggIHRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIHRleHQtWzE3cHhdIFwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ob21lXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIEFkdmlzb3JzXHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIEluc2lnaHRzXHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NlcnZpY2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQWJvdXRcclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2VydmljZXNcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2VydmljZXNcIiBjbGFzc05hbWU9J2ZsZXggaC1bMTRweF0gdy1bMTRweF0nID5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXsnL2ltYWdlcy9zZWFyY2gucG5nJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSdzZWFyY2gnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxNH0gLz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0naC1bNDBweF0gdy1bMTE0cHhdIGJvcmRlci0yIGJvcmRlci13aGl0ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgSm9pbiBub3dcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBsZzpoaWRkZW4nPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHNldE9wZW5EcmF3ZXIodHJ1ZSkgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17Jy9pbWFnZXMvbWVudS5wbmcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J3NlYXJjaCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zZXJ2aWNlc1wiIGNsYXNzTmFtZT0nbWwtWzIwcHhdJyAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9eycvaW1hZ2VzL3NlYXJjaC5wbmcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J3NlYXJjaCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZml4ZWQgdG9wLTAgcmlnaHQtMCB3LWZ1bGwgaC1mdWxsIGJnLWdyYXktODAwIHRleHQtd2hpdGUgdHJhbnNmb3JtICR7b3BlbkRyYXdlciA/ICd0cmFuc2xhdGUteC0wJyA6ICd0cmFuc2xhdGUteC1mdWxsJ1xyXG4gICAgICAgICAgICAgICAgfSB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXRgfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdzZWxmLSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Jy9pbWFnZXMvY2xvc2UucG5nJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSdjbG9zZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZGVyIiwiaXNTY3JvbGxlZCIsInNldElzU2Nyb2xsZWQiLCJvcGVuRHJhd2VyIiwic2V0T3BlbkRyYXdlciIsImhhbmRsZVNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaHJlZiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/component/header.jsx\n"));

/***/ })

});