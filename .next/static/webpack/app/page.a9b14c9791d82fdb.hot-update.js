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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/image/dist/chunk-QINAG4RG.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/button/dist/chunk-UVUR7MCU.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/modal/dist/chunk-MSA2NPQT.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/modal/dist/chunk-JQMJHPZH.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/modal/dist/chunk-EL2VKIZQ.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/modal/dist/chunk-5FG5SY5K.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/modal/dist/chunk-4FCEGNGT.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/modal/dist/chunk-OFOVX77R.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/modal/dist/chunk-RAWN7VJ3.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// Posts.js\n\n\nconst Posts = (param)=>{\n    let { posts } = param;\n    _s();\n    const [selectedPost, setSelectedPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleReadMore = (post)=>{\n        setSelectedPost(post);\n        setIsOpen(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        children: [\n            posts.map((post, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                    backgroundColor: \"white\",\n                    boxShadow: \"md\",\n                    borderRadius: \"md\",\n                    padding: \"4\",\n                    marginBottom: \"4\",\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {\n                            src: post.image,\n                            alt: post.title,\n                            width: \"50px\",\n                            height: \"50px\",\n                            marginRight: \"4\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/other-components/Posts.js\",\n                            lineNumber: 30,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                            flex: \"1\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                    fontSize: \"xl\",\n                                    fontWeight: \"bold\",\n                                    children: post.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/other-components/Posts.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                    children: [\n                                        post.content.substring(0, 100),\n                                        \"...\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/other-components/Posts.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/other-components/Posts.js\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                            onClick: ()=>handleReadMore(post),\n                            children: \"Read More\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/other-components/Posts.js\",\n                            lineNumber: 41,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/other-components/Posts.js\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, undefined)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Modal, {\n                isOpen: isOpen,\n                onClose: ()=>setIsOpen(false),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.ModalOverlay, {}, void 0, false, {\n                        fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/other-components/Posts.js\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.ModalContent, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.ModalHeader, {\n                                children: selectedPost && selectedPost.title\n                            }, void 0, false, {\n                                fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/other-components/Posts.js\",\n                                lineNumber: 49,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.ModalCloseButton, {}, void 0, false, {\n                                fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/other-components/Posts.js\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.ModalBody, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {\n                                        src: selectedPost && selectedPost.image,\n                                        alt: selectedPost && selectedPost.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/other-components/Posts.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                        children: selectedPost && selectedPost.content\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/other-components/Posts.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/other-components/Posts.js\",\n                                lineNumber: 51,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.ModalFooter, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                    colorScheme: \"blue\",\n                                    mr: 3,\n                                    onClick: ()=>setIsOpen(false),\n                                    children: \"Close\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/other-components/Posts.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/other-components/Posts.js\",\n                                lineNumber: 55,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/other-components/Posts.js\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/other-components/Posts.js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/other-components/Posts.js\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Posts, \"jf8WKPUh6vPetu6DjP14azX3nuY=\");\n_c = Posts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL290aGVyLWNvbXBvbmVudHMvUG9zdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxXQUFXO0FBRTZCO0FBQzhHO0FBRXRKLE1BQU1hLFFBQVE7UUFBQyxFQUFFQyxLQUFLLEVBQUU7O0lBQ3BCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ2dCLFFBQVFDLFVBQVUsR0FBR2pCLCtDQUFRQSxDQUFDO0lBRXJDLE1BQU1rQixpQkFBaUIsQ0FBQ0M7UUFDcEJKLGdCQUFnQkk7UUFDaEJGLFVBQVU7SUFDZDtJQUVBLHFCQUNJLDhEQUFDaEIsaURBQUdBOztZQUNDWSxNQUFNTyxHQUFHLENBQUMsQ0FBQ0QsTUFBTUUsc0JBQ2QsOERBQUNwQixpREFBR0E7b0JBRUFxQixpQkFBZ0I7b0JBQ2hCQyxXQUFVO29CQUNWQyxjQUFhO29CQUNiQyxTQUFRO29CQUNSQyxjQUFhO29CQUNiQyxTQUFRO29CQUNSQyxZQUFXOztzQ0FFWCw4REFBQ3pCLG1EQUFLQTs0QkFDRjBCLEtBQUtWLEtBQUtXLEtBQUs7NEJBQ2ZDLEtBQUtaLEtBQUthLEtBQUs7NEJBQ2ZDLE9BQU07NEJBQ05DLFFBQU87NEJBQ1BDLGFBQVk7Ozs7OztzQ0FFaEIsOERBQUNsQyxpREFBR0E7NEJBQUNtQyxNQUFLOzs4Q0FDTiw4REFBQ2xDLGtEQUFJQTtvQ0FBQ21DLFVBQVM7b0NBQUtDLFlBQVc7OENBQVFuQixLQUFLYSxLQUFLOzs7Ozs7OENBQ2pELDhEQUFDOUIsa0RBQUlBOzt3Q0FBRWlCLEtBQUtvQixPQUFPLENBQUNDLFNBQVMsQ0FBQyxHQUFHO3dDQUFLOzs7Ozs7Ozs7Ozs7O3NDQUUxQyw4REFBQ3BDLG9EQUFNQTs0QkFBQ3FDLFNBQVMsSUFBTXZCLGVBQWVDO3NDQUFPOzs7Ozs7O21CQXBCeENFOzs7OzswQkF5QmIsOERBQUNoQixtREFBS0E7Z0JBQUNXLFFBQVFBO2dCQUFRMEIsU0FBUyxJQUFNekIsVUFBVTs7a0NBQzVDLDhEQUFDWCwwREFBWUE7Ozs7O2tDQUNiLDhEQUFDQywwREFBWUE7OzBDQUNULDhEQUFDQyx5REFBV0E7MENBQUVNLGdCQUFnQkEsYUFBYWtCLEtBQUs7Ozs7OzswQ0FDaEQsOERBQUN2QiwrREFBZ0JBOzs7OzswQ0FDakIsOERBQUNDLHdEQUFTQTs7a0RBQ04sOERBQUNQLG1EQUFLQTt3Q0FBQzBCLEtBQUtmLGdCQUFnQkEsYUFBYWdCLEtBQUs7d0NBQUVDLEtBQUtqQixnQkFBZ0JBLGFBQWFrQixLQUFLOzs7Ozs7a0RBQ3ZGLDhEQUFDOUIsa0RBQUlBO2tEQUFFWSxnQkFBZ0JBLGFBQWF5QixPQUFPOzs7Ozs7Ozs7Ozs7MENBRS9DLDhEQUFDNUIsMERBQVdBOzBDQUNSLDRFQUFDUCxvREFBTUE7b0NBQUN1QyxhQUFZO29DQUFPQyxJQUFJO29DQUFHSCxTQUFTLElBQU14QixVQUFVOzhDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVEzRjtHQXhETUw7S0FBQUE7QUEwRE4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvb3RoZXItY29tcG9uZW50cy9Qb3N0cy5qcz9kYmE4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuLy8gUG9zdHMuanNcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBUZXh0LCBJbWFnZSwgQnV0dG9uLCBNb2RhbCwgTW9kYWxPdmVybGF5LCBNb2RhbENvbnRlbnQsIE1vZGFsSGVhZGVyLCBNb2RhbENsb3NlQnV0dG9uLCBNb2RhbEJvZHksIE1vZGFsRm9vdGVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5cbmNvbnN0IFBvc3RzID0gKHsgcG9zdHMgfSkgPT4ge1xuICAgIGNvbnN0IFtzZWxlY3RlZFBvc3QsIHNldFNlbGVjdGVkUG9zdF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgaGFuZGxlUmVhZE1vcmUgPSAocG9zdCkgPT4ge1xuICAgICAgICBzZXRTZWxlY3RlZFBvc3QocG9zdCk7XG4gICAgICAgIHNldElzT3Blbih0cnVlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveD5cbiAgICAgICAgICAgIHtwb3N0cy5tYXAoKHBvc3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdz1cIm1kXCJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwibWRcIlxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nPVwiNFwiXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbT1cIjRcIlxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Bvc3QuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjUwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNTBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodD1cIjRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8Qm94IGZsZXg9XCIxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cInhsXCIgZm9udFdlaWdodD1cImJvbGRcIj57cG9zdC50aXRsZX08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dD57cG9zdC5jb250ZW50LnN1YnN0cmluZygwLCAxMDApfS4uLjwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlUmVhZE1vcmUocG9zdCl9PlJlYWQgTW9yZTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICAgIHsvKiBNb2RhbCAqL31cbiAgICAgICAgICAgIDxNb2RhbCBpc09wZW49e2lzT3Blbn0gb25DbG9zZT17KCkgPT4gc2V0SXNPcGVuKGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgPE1vZGFsT3ZlcmxheSAvPlxuICAgICAgICAgICAgICAgIDxNb2RhbENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbEhlYWRlcj57c2VsZWN0ZWRQb3N0ICYmIHNlbGVjdGVkUG9zdC50aXRsZX08L01vZGFsSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxDbG9zZUJ1dHRvbiAvPlxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17c2VsZWN0ZWRQb3N0ICYmIHNlbGVjdGVkUG9zdC5pbWFnZX0gYWx0PXtzZWxlY3RlZFBvc3QgJiYgc2VsZWN0ZWRQb3N0LnRpdGxlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQ+e3NlbGVjdGVkUG9zdCAmJiBzZWxlY3RlZFBvc3QuY29udGVudH08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWxCb2R5PlxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxGb290ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPVwiYmx1ZVwiIG1yPXszfSBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWxGb290ZXI+XG4gICAgICAgICAgICAgICAgPC9Nb2RhbENvbnRlbnQ+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICA8L0JveD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdHM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJveCIsIlRleHQiLCJJbWFnZSIsIkJ1dHRvbiIsIk1vZGFsIiwiTW9kYWxPdmVybGF5IiwiTW9kYWxDb250ZW50IiwiTW9kYWxIZWFkZXIiLCJNb2RhbENsb3NlQnV0dG9uIiwiTW9kYWxCb2R5IiwiTW9kYWxGb290ZXIiLCJQb3N0cyIsInBvc3RzIiwic2VsZWN0ZWRQb3N0Iiwic2V0U2VsZWN0ZWRQb3N0IiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiaGFuZGxlUmVhZE1vcmUiLCJwb3N0IiwibWFwIiwiaW5kZXgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwibWFyZ2luQm90dG9tIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJzcmMiLCJpbWFnZSIsImFsdCIsInRpdGxlIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW5SaWdodCIsImZsZXgiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJjb250ZW50Iiwic3Vic3RyaW5nIiwib25DbGljayIsIm9uQ2xvc2UiLCJjb2xvclNjaGVtZSIsIm1yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/other-components/Posts.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/@chakra-ui/modal/dist/chunk-5FG5SY5K.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/@chakra-ui/modal/dist/chunk-5FG5SY5K.mjs ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ModalHeader: function() { return /* binding */ ModalHeader; }\n/* harmony export */ });\n/* harmony import */ var _chunk_MSA2NPQT_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chunk-MSA2NPQT.mjs */ \"(app-pages-browser)/./node_modules/@chakra-ui/modal/dist/chunk-MSA2NPQT.mjs\");\n/* harmony import */ var _chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/shared-utils */ \"(app-pages-browser)/./node_modules/@chakra-ui/shared-utils/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/system */ \"(app-pages-browser)/./node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs\");\n/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/system */ \"(app-pages-browser)/./node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-runtime.js\");\n'use client'\n;\n\n// src/modal-header.tsx\n\n\n\n\nvar ModalHeader = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(\n  (props, ref) => {\n    const { className, ...rest } = props;\n    const { headerId, setHeaderMounted } = (0,_chunk_MSA2NPQT_mjs__WEBPACK_IMPORTED_MODULE_3__.useModalContext)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n      setHeaderMounted(true);\n      return () => setHeaderMounted(false);\n    }, [setHeaderMounted]);\n    const _className = (0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.cx)(\"chakra-modal__header\", className);\n    const styles = (0,_chunk_MSA2NPQT_mjs__WEBPACK_IMPORTED_MODULE_3__.useModalStyles)();\n    const headerStyles = {\n      flex: 0,\n      ...styles.header\n    };\n    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\n      _chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__.chakra.header,\n      {\n        ref,\n        className: _className,\n        id: headerId,\n        ...rest,\n        __css: headerStyles\n      }\n    );\n  }\n);\nModalHeader.displayName = \"ModalHeader\";\n\n\n//# sourceMappingURL=chunk-5FG5SY5K.mjs.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9AY2hha3JhLXVpL21vZGFsL2Rpc3QvY2h1bmstNUZHNVNZNUsubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBLENBRzhCOztBQUU5QjtBQUM2QztBQUlsQjtBQUNPO0FBQ007QUFDeEMsa0JBQWtCLDZEQUFVO0FBQzVCO0FBQ0EsWUFBWSxxQkFBcUI7QUFDakMsWUFBWSw2QkFBNkIsRUFBRSxvRUFBZTtBQUMxRCxJQUFJLGdEQUFTO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTCx1QkFBdUIsMkRBQUU7QUFDekIsbUJBQW1CLG1FQUFjO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHNEQUFHO0FBQzlCLE1BQU0scURBQU07QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BjaGFrcmEtdWkvbW9kYWwvZGlzdC9jaHVuay01Rkc1U1k1Sy5tanM/ZDRhYiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7XG4gIHVzZU1vZGFsQ29udGV4dCxcbiAgdXNlTW9kYWxTdHlsZXNcbn0gZnJvbSBcIi4vY2h1bmstTVNBMk5QUVQubWpzXCI7XG5cbi8vIHNyYy9tb2RhbC1oZWFkZXIudHN4XG5pbXBvcnQgeyBjeCB9IGZyb20gXCJAY2hha3JhLXVpL3NoYXJlZC11dGlsc1wiO1xuaW1wb3J0IHtcbiAgY2hha3JhLFxuICBmb3J3YXJkUmVmXG59IGZyb20gXCJAY2hha3JhLXVpL3N5c3RlbVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBqc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbnZhciBNb2RhbEhlYWRlciA9IGZvcndhcmRSZWYoXG4gIChwcm9wcywgcmVmKSA9PiB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IHByb3BzO1xuICAgIGNvbnN0IHsgaGVhZGVySWQsIHNldEhlYWRlck1vdW50ZWQgfSA9IHVzZU1vZGFsQ29udGV4dCgpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBzZXRIZWFkZXJNb3VudGVkKHRydWUpO1xuICAgICAgcmV0dXJuICgpID0+IHNldEhlYWRlck1vdW50ZWQoZmFsc2UpO1xuICAgIH0sIFtzZXRIZWFkZXJNb3VudGVkXSk7XG4gICAgY29uc3QgX2NsYXNzTmFtZSA9IGN4KFwiY2hha3JhLW1vZGFsX19oZWFkZXJcIiwgY2xhc3NOYW1lKTtcbiAgICBjb25zdCBzdHlsZXMgPSB1c2VNb2RhbFN0eWxlcygpO1xuICAgIGNvbnN0IGhlYWRlclN0eWxlcyA9IHtcbiAgICAgIGZsZXg6IDAsXG4gICAgICAuLi5zdHlsZXMuaGVhZGVyXG4gICAgfTtcbiAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIGpzeChcbiAgICAgIGNoYWtyYS5oZWFkZXIsXG4gICAgICB7XG4gICAgICAgIHJlZixcbiAgICAgICAgY2xhc3NOYW1lOiBfY2xhc3NOYW1lLFxuICAgICAgICBpZDogaGVhZGVySWQsXG4gICAgICAgIC4uLnJlc3QsXG4gICAgICAgIF9fY3NzOiBoZWFkZXJTdHlsZXNcbiAgICAgIH1cbiAgICApO1xuICB9XG4pO1xuTW9kYWxIZWFkZXIuZGlzcGxheU5hbWUgPSBcIk1vZGFsSGVhZGVyXCI7XG5cbmV4cG9ydCB7XG4gIE1vZGFsSGVhZGVyXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2h1bmstNUZHNVNZNUsubWpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/@chakra-ui/modal/dist/chunk-5FG5SY5K.mjs\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/@chakra-ui/modal/dist/chunk-RAWN7VJ3.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/@chakra-ui/modal/dist/chunk-RAWN7VJ3.mjs ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ModalFooter: function() { return /* binding */ ModalFooter; }\n/* harmony export */ });\n/* harmony import */ var _chunk_MSA2NPQT_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chunk-MSA2NPQT.mjs */ \"(app-pages-browser)/./node_modules/@chakra-ui/modal/dist/chunk-MSA2NPQT.mjs\");\n/* harmony import */ var _chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/shared-utils */ \"(app-pages-browser)/./node_modules/@chakra-ui/shared-utils/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/system */ \"(app-pages-browser)/./node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs\");\n/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/system */ \"(app-pages-browser)/./node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-runtime.js\");\n'use client'\n;\n\n// src/modal-footer.tsx\n\n\n\nvar ModalFooter = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(\n  (props, ref) => {\n    const { className, ...rest } = props;\n    const _className = (0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_2__.cx)(\"chakra-modal__footer\", className);\n    const styles = (0,_chunk_MSA2NPQT_mjs__WEBPACK_IMPORTED_MODULE_3__.useModalStyles)();\n    const footerStyles = {\n      display: \"flex\",\n      alignItems: \"center\",\n      justifyContent: \"flex-end\",\n      ...styles.footer\n    };\n    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\n      _chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.chakra.footer,\n      {\n        ref,\n        ...rest,\n        __css: footerStyles,\n        className: _className\n      }\n    );\n  }\n);\nModalFooter.displayName = \"ModalFooter\";\n\n\n//# sourceMappingURL=chunk-RAWN7VJ3.mjs.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9AY2hha3JhLXVpL21vZGFsL2Rpc3QvY2h1bmstUkFXTjdWSjMubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0EsQ0FFOEI7O0FBRTlCO0FBQzZDO0FBSWxCO0FBQ2E7QUFDeEMsa0JBQWtCLDZEQUFVO0FBQzVCO0FBQ0EsWUFBWSxxQkFBcUI7QUFDakMsdUJBQXVCLDJEQUFFO0FBQ3pCLG1CQUFtQixtRUFBYztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsc0RBQUc7QUFDOUIsTUFBTSxxREFBTTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BjaGFrcmEtdWkvbW9kYWwvZGlzdC9jaHVuay1SQVdON1ZKMy5tanM/YWIxOSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7XG4gIHVzZU1vZGFsU3R5bGVzXG59IGZyb20gXCIuL2NodW5rLU1TQTJOUFFULm1qc1wiO1xuXG4vLyBzcmMvbW9kYWwtZm9vdGVyLnRzeFxuaW1wb3J0IHsgY3ggfSBmcm9tIFwiQGNoYWtyYS11aS9zaGFyZWQtdXRpbHNcIjtcbmltcG9ydCB7XG4gIGNoYWtyYSxcbiAgZm9yd2FyZFJlZlxufSBmcm9tIFwiQGNoYWtyYS11aS9zeXN0ZW1cIjtcbmltcG9ydCB7IGpzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xudmFyIE1vZGFsRm9vdGVyID0gZm9yd2FyZFJlZihcbiAgKHByb3BzLCByZWYpID0+IHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ucmVzdCB9ID0gcHJvcHM7XG4gICAgY29uc3QgX2NsYXNzTmFtZSA9IGN4KFwiY2hha3JhLW1vZGFsX19mb290ZXJcIiwgY2xhc3NOYW1lKTtcbiAgICBjb25zdCBzdHlsZXMgPSB1c2VNb2RhbFN0eWxlcygpO1xuICAgIGNvbnN0IGZvb3RlclN0eWxlcyA9IHtcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIsXG4gICAgICAuLi5zdHlsZXMuZm9vdGVyXG4gICAgfTtcbiAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIGpzeChcbiAgICAgIGNoYWtyYS5mb290ZXIsXG4gICAgICB7XG4gICAgICAgIHJlZixcbiAgICAgICAgLi4ucmVzdCxcbiAgICAgICAgX19jc3M6IGZvb3RlclN0eWxlcyxcbiAgICAgICAgY2xhc3NOYW1lOiBfY2xhc3NOYW1lXG4gICAgICB9XG4gICAgKTtcbiAgfVxuKTtcbk1vZGFsRm9vdGVyLmRpc3BsYXlOYW1lID0gXCJNb2RhbEZvb3RlclwiO1xuXG5leHBvcnQge1xuICBNb2RhbEZvb3RlclxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNodW5rLVJBV043VkozLm1qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/@chakra-ui/modal/dist/chunk-RAWN7VJ3.mjs\n"));

/***/ })

});