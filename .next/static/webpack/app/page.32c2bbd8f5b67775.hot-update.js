"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/other-components/Posts.js":
/*!**************************************************!*\
  !*** ./app/components/other-components/Posts.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/image/dist/chunk-QINAG4RG.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/button/dist/chunk-UVUR7MCU.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/modal/dist/chunk-MSA2NPQT.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/modal/dist/chunk-JQMJHPZH.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/modal/dist/chunk-EL2VKIZQ.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/modal/dist/chunk-5FG5SY5K.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/modal/dist/chunk-4FCEGNGT.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/modal/dist/chunk-OFOVX77R.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/modal/dist/chunk-RAWN7VJ3.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// Posts.js\n\n\nconst Posts = (param)=>{\n    let { posts } = param;\n    _s();\n    // Check if posts are provided and not empty\n    if (!posts || posts.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                textAlign: \"center\",\n                fontSize: \"23px\",\n                fontWeight: \"bold\",\n                children: \"No Posts!\"\n            }, void 0, false, {\n                fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/other-components/Posts.js\",\n                lineNumber: 13,\n                columnNumber: 14\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/other-components/Posts.js\",\n            lineNumber: 12,\n            columnNumber: 9\n        }, undefined);\n    }\n    const [selectedPost, setSelectedPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleReadMore = (post)=>{\n        setSelectedPost(post);\n        setIsOpen(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        children: [\n            posts.map((post, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                    backgroundColor: \"white\",\n                    boxShadow: \"md\",\n                    borderRadius: \"md\",\n                    padding: \"4\",\n                    marginBottom: \"4\",\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Image, {\n                            src: post.image,\n                            alt: post.title,\n                            width: \"50px\",\n                            height: \"50px\",\n                            marginRight: \"4\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/other-components/Posts.js\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                            flex: \"1\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                    color: \"gray.600\",\n                                    fontSize: \"xl\",\n                                    fontWeight: \"bold\",\n                                    children: post.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/other-components/Posts.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                    color: \"gray.500\",\n                                    children: [\n                                        post.content.substring(0, 100),\n                                        \"...\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/other-components/Posts.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/other-components/Posts.js\",\n                            lineNumber: 46,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                            onClick: ()=>handleReadMore(post),\n                            children: \"Read More\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/other-components/Posts.js\",\n                            lineNumber: 50,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/other-components/Posts.js\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, undefined)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Modal, {\n                isOpen: isOpen,\n                onClose: ()=>setIsOpen(false),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.ModalOverlay, {}, void 0, false, {\n                        fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/other-components/Posts.js\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.ModalContent, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.ModalHeader, {\n                                children: selectedPost && selectedPost.title\n                            }, void 0, false, {\n                                fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/other-components/Posts.js\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.ModalCloseButton, {}, void 0, false, {\n                                fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/other-components/Posts.js\",\n                                lineNumber: 59,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.ModalBody, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Image, {\n                                        src: selectedPost && selectedPost.image,\n                                        alt: selectedPost && selectedPost.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/other-components/Posts.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                        children: selectedPost && selectedPost.content\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/other-components/Posts.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/other-components/Posts.js\",\n                                lineNumber: 60,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.ModalFooter, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                    colorScheme: \"blue\",\n                                    mr: 3,\n                                    onClick: ()=>setIsOpen(false),\n                                    children: \"Close\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/other-components/Posts.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/other-components/Posts.js\",\n                                lineNumber: 64,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/other-components/Posts.js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/other-components/Posts.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/other-components/Posts.js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Posts, \"jf8WKPUh6vPetu6DjP14azX3nuY=\");\n_c = Posts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL290aGVyLWNvbXBvbmVudHMvUG9zdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxXQUFXO0FBRTZCO0FBQzhHO0FBRXRKLE1BQU1hLFFBQVE7UUFBQyxFQUFFQyxLQUFLLEVBQUU7O0lBQ3BCLDRDQUE0QztJQUM1QyxJQUFJLENBQUNBLFNBQVNBLE1BQU1DLE1BQU0sS0FBSyxHQUFHO1FBQzlCLHFCQUNBLDhEQUFDYixpREFBR0E7c0JBQ0MsNEVBQUNDLGtEQUFJQTtnQkFBRWEsV0FBVTtnQkFBU0MsVUFBUztnQkFBT0MsWUFBVzswQkFBTzs7Ozs7Ozs7Ozs7SUFFckU7SUFFQSxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHbkIsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDb0IsUUFBUUMsVUFBVSxHQUFHckIsK0NBQVFBLENBQUM7SUFFckMsTUFBTXNCLGlCQUFpQixDQUFDQztRQUNwQkosZ0JBQWdCSTtRQUNoQkYsVUFBVTtJQUNkO0lBR0EscUJBQ0ksOERBQUNwQixpREFBR0E7O1lBQ0NZLE1BQU1XLEdBQUcsQ0FBQyxDQUFDRCxNQUFNRSxzQkFDZCw4REFBQ3hCLGlEQUFHQTtvQkFFQXlCLGlCQUFnQjtvQkFDaEJDLFdBQVU7b0JBQ1ZDLGNBQWE7b0JBQ2JDLFNBQVE7b0JBQ1JDLGNBQWE7b0JBQ2JDLFNBQVE7b0JBQ1JDLFlBQVc7O3NDQUVYLDhEQUFDN0IsbURBQUtBOzRCQUNGOEIsS0FBS1YsS0FBS1csS0FBSzs0QkFDZkMsS0FBS1osS0FBS2EsS0FBSzs0QkFDZkMsT0FBTTs0QkFDTkMsUUFBTzs0QkFDUEMsYUFBWTs7Ozs7O3NDQUVoQiw4REFBQ3RDLGlEQUFHQTs0QkFBQ3VDLE1BQUs7OzhDQUNOLDhEQUFDdEMsa0RBQUlBO29DQUFDdUMsT0FBTztvQ0FBWXpCLFVBQVM7b0NBQUtDLFlBQVc7OENBQVFNLEtBQUthLEtBQUs7Ozs7Ozs4Q0FDcEUsOERBQUNsQyxrREFBSUE7b0NBQUN1QyxPQUFPOzt3Q0FBYWxCLEtBQUttQixPQUFPLENBQUNDLFNBQVMsQ0FBQyxHQUFHO3dDQUFLOzs7Ozs7Ozs7Ozs7O3NDQUU3RCw4REFBQ3ZDLG9EQUFNQTs0QkFBQ3dDLFNBQVMsSUFBTXRCLGVBQWVDO3NDQUFPOzs7Ozs7O21CQXBCeENFOzs7OzswQkF5QmIsOERBQUNwQixtREFBS0E7Z0JBQUNlLFFBQVFBO2dCQUFReUIsU0FBUyxJQUFNeEIsVUFBVTs7a0NBQzVDLDhEQUFDZiwwREFBWUE7Ozs7O2tDQUNiLDhEQUFDQywwREFBWUE7OzBDQUNULDhEQUFDQyx5REFBV0E7MENBQUVVLGdCQUFnQkEsYUFBYWtCLEtBQUs7Ozs7OzswQ0FDaEQsOERBQUMzQiwrREFBZ0JBOzs7OzswQ0FDakIsOERBQUNDLHdEQUFTQTs7a0RBQ04sOERBQUNQLG1EQUFLQTt3Q0FBQzhCLEtBQUtmLGdCQUFnQkEsYUFBYWdCLEtBQUs7d0NBQUVDLEtBQUtqQixnQkFBZ0JBLGFBQWFrQixLQUFLOzs7Ozs7a0RBQ3ZGLDhEQUFDbEMsa0RBQUlBO2tEQUFFZ0IsZ0JBQWdCQSxhQUFhd0IsT0FBTzs7Ozs7Ozs7Ozs7OzBDQUUvQyw4REFBQy9CLDBEQUFXQTswQ0FDUiw0RUFBQ1Asb0RBQU1BO29DQUFDMEMsYUFBWTtvQ0FBT0MsSUFBSTtvQ0FBR0gsU0FBUyxJQUFNdkIsVUFBVTs4Q0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRM0Y7R0FqRU1UO0tBQUFBO0FBbUVOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL290aGVyLWNvbXBvbmVudHMvUG9zdHMuanM/ZGJhOCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbi8vIFBvc3RzLmpzXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgVGV4dCwgSW1hZ2UsIEJ1dHRvbiwgTW9kYWwsIE1vZGFsT3ZlcmxheSwgTW9kYWxDb250ZW50LCBNb2RhbEhlYWRlciwgTW9kYWxDbG9zZUJ1dHRvbiwgTW9kYWxCb2R5LCBNb2RhbEZvb3RlciB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuXG5jb25zdCBQb3N0cyA9ICh7IHBvc3RzIH0pID0+IHtcbiAgICAvLyBDaGVjayBpZiBwb3N0cyBhcmUgcHJvdmlkZWQgYW5kIG5vdCBlbXB0eVxuICAgIGlmICghcG9zdHMgfHwgcG9zdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgPEJveFxuICAgICAgICAgICAgPjxUZXh0ICB0ZXh0QWxpZ249XCJjZW50ZXJcIiBmb250U2l6ZT1cIjIzcHhcIiBmb250V2VpZ2h0PVwiYm9sZFwiPk5vIFBvc3RzITwvVGV4dD5cbiAgICAgICAgPC9Cb3g+KVxuICAgIH1cblxuICAgIGNvbnN0IFtzZWxlY3RlZFBvc3QsIHNldFNlbGVjdGVkUG9zdF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgaGFuZGxlUmVhZE1vcmUgPSAocG9zdCkgPT4ge1xuICAgICAgICBzZXRTZWxlY3RlZFBvc3QocG9zdCk7XG4gICAgICAgIHNldElzT3Blbih0cnVlKTtcbiAgICB9O1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94PlxuICAgICAgICAgICAge3Bvc3RzLm1hcCgocG9zdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93PVwibWRcIlxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCJtZFwiXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc9XCI0XCJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tPVwiNFwiXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cG9zdC5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNTBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI1MHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0PVwiNFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggZmxleD1cIjFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPXtcImdyYXkuNjAwXCJ9IGZvbnRTaXplPVwieGxcIiBmb250V2VpZ2h0PVwiYm9sZFwiPntwb3N0LnRpdGxlfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPXtcImdyYXkuNTAwXCJ9Pntwb3N0LmNvbnRlbnQuc3Vic3RyaW5nKDAsIDEwMCl9Li4uPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZWFkTW9yZShwb3N0KX0+UmVhZCBNb3JlPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApKX1cblxuICAgICAgICAgICAgey8qIE1vZGFsICovfVxuICAgICAgICAgICAgPE1vZGFsIGlzT3Blbj17aXNPcGVufSBvbkNsb3NlPXsoKSA9PiBzZXRJc09wZW4oZmFsc2UpfT5cbiAgICAgICAgICAgICAgICA8TW9kYWxPdmVybGF5IC8+XG4gICAgICAgICAgICAgICAgPE1vZGFsQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsSGVhZGVyPntzZWxlY3RlZFBvc3QgJiYgc2VsZWN0ZWRQb3N0LnRpdGxlfTwvTW9kYWxIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbENsb3NlQnV0dG9uIC8+XG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbEJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtzZWxlY3RlZFBvc3QgJiYgc2VsZWN0ZWRQb3N0LmltYWdlfSBhbHQ9e3NlbGVjdGVkUG9zdCAmJiBzZWxlY3RlZFBvc3QudGl0bGV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dD57c2VsZWN0ZWRQb3N0ICYmIHNlbGVjdGVkUG9zdC5jb250ZW50fTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbEJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbEZvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9XCJibHVlXCIgbXI9ezN9IG9uQ2xpY2s9eygpID0+IHNldElzT3BlbihmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbEZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8L01vZGFsQ29udGVudD5cbiAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgIDwvQm94PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0czsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJveCIsIlRleHQiLCJJbWFnZSIsIkJ1dHRvbiIsIk1vZGFsIiwiTW9kYWxPdmVybGF5IiwiTW9kYWxDb250ZW50IiwiTW9kYWxIZWFkZXIiLCJNb2RhbENsb3NlQnV0dG9uIiwiTW9kYWxCb2R5IiwiTW9kYWxGb290ZXIiLCJQb3N0cyIsInBvc3RzIiwibGVuZ3RoIiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJmb250V2VpZ2h0Iiwic2VsZWN0ZWRQb3N0Iiwic2V0U2VsZWN0ZWRQb3N0IiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiaGFuZGxlUmVhZE1vcmUiLCJwb3N0IiwibWFwIiwiaW5kZXgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwibWFyZ2luQm90dG9tIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJzcmMiLCJpbWFnZSIsImFsdCIsInRpdGxlIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW5SaWdodCIsImZsZXgiLCJjb2xvciIsImNvbnRlbnQiLCJzdWJzdHJpbmciLCJvbkNsaWNrIiwib25DbG9zZSIsImNvbG9yU2NoZW1lIiwibXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/other-components/Posts.js\n"));

/***/ })

});