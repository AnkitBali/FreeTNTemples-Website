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

/***/ "(app-pages-browser)/./app/components/main-page-components/Header.js":
/*!*******************************************************!*\
  !*** ./app/components/main-page-components/Header.js ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/hooks/dist/chunk-7JBTTEVG.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-KRPLQIP4.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-K7XRJ7NL.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/button/dist/chunk-UVUR7MCU.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// import React, {useEffect, useState} from 'react';\n// import { Flex, Link as ChakraLink, Box } from '@chakra-ui/react';\n// import { Link } from 'react-scroll';\n// const Header = () => {\n//     const [isSticky, setSticky] = useState(false);\n//     // const [scrollY, setScrollY] = useState(0);\n//     useEffect(() => {\n//         const handleScroll = () => {\n//             setSticky(window.scrollY > 100);\n//         };\n//         window.addEventListener('scroll', handleScroll);\n//         return () => {\n//             window.removeEventListener('scroll', handleScroll);\n//         };\n//     }, []);\n//     return (\n//         <Box as=\"nav\" \n//         position=\"sticky\" \n//             top={0} left={0} right={0} bg=\"transparent\"\n//             //  zIndex=\"sticky\"\n//             transition=\"transform 0.3s ease-in-out\"\n//             transform={`translateY(${isSticky ? 0 : '100%'})`}\n//             boxShadow=\"md\"\n//         // bg=\"transparent\"\n//         // color=\"white\" \n//         p={4}\n//         >\n//             <Flex justify=\"space-around\" wrap=\"wrap\">\n//                 <ChakraLink as={Link} to=\"topBanner\" smooth={true} duration={500} style={{ cursor: 'pointer' }} px={2}>\n//                     Top Banner\n//                 </ChakraLink>\n//                 <ChakraLink as={Link} to=\"topDescription\" smooth={true} duration={500} style={{ cursor: 'pointer' }} px={2}>\n//                     Top Description\n//                 </ChakraLink>\n//                 {/* Add more ChakraLink items as needed */}\n//             </Flex>\n//         </Box>\n//     );\n// };\n// export default Header;\n// Import necessary Chakra UI components\n\n// Your navigation data\nconst navData = [\n    {\n        id: 1,\n        title: \"Dying Temple\",\n        path: \"topDescription\"\n    },\n    {\n        id: 2,\n        title: \"Free Temple\",\n        path: \"freetemple\"\n    },\n    {\n        id: 3,\n        title: \"Heartbreaking Stories\",\n        path: \"heartbreakingStories\"\n    },\n    {\n        id: 4,\n        title: \"HR&CE\",\n        path: \"hrce\"\n    },\n    {\n        id: 5,\n        title: \"Past Glory\",\n        path: \"glory\"\n    },\n    {\n        id: 6,\n        title: \"Get In Touch\",\n        path: \"\"\n    },\n    {\n        id: 7,\n        title: \"Media\",\n        path: \"media\"\n    }\n];\nconst Navbar = ()=>{\n    _s();\n    const { isOpen, onToggle } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useDisclosure)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                as: \"nav\",\n                id: \"abc\",\n                align: \"center\",\n                justify: \"space-between\",\n                wrap: \"wrap\",\n                w: \"1450px\",\n                p: 4,\n                // bg=\"customBrown\"\n                bg: \"rgba(101, 67, 33, 0.8)\" // Dark brown color with 80% opacity\n                ,\n                color: \"white\",\n                position: \"fixed\",\n                top: \"0\",\n                zIndex: 999,\n                boxShadow: \"md\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        display: {\n                            base: \"block\",\n                            md: \"none\"\n                        },\n                        onClick: onToggle,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            fill: \"white\",\n                            width: \"12px\",\n                            viewBox: \"0 0 20 20\",\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            mr: \"12px\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                                    children: \"Menu\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    d: \"M0 0h20v20H0V0z\",\n                                    fill: \"none\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    fill: \"white\",\n                                    d: \"M2.5 5h15M2.5 10h15m-15 5h15\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                                    lineNumber: 94,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                            lineNumber: 85,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                        lineNumber: 84,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        display: {\n                            base: isOpen ? \"block\" : \"none\",\n                            md: \"flex\"\n                        },\n                        width: {\n                            base: \"full\",\n                            md: \"auto\"\n                        },\n                        alignItems: \"center\",\n                        flexGrow: 1,\n                        children: navData.map((el)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Link, {\n                                to: el.path,\n                                smooth: true,\n                                duration: 500,\n                                spy: true,\n                                offset: -68,\n                                activeClass: \"text-[#fac654]\",\n                                px: 2,\n                                py: 1,\n                                fontWeight: \"bold\",\n                                color: \"white\",\n                                _hover: {\n                                    textDecoration: \"none\",\n                                    color: \"#febd2c\"\n                                },\n                                children: el.title\n                            }, el.id, false, {\n                                fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                                lineNumber: 107,\n                                columnNumber: 25\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                        lineNumber: 100,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        display: {\n                            base: isOpen ? \"block\" : \"none\",\n                            md: \"block\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                            bg: \"#febd2c\",\n                            color: \"black\",\n                            children: \"English\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                            lineNumber: 129,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                        lineNumber: 128,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, undefined),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                display: {\n                    base: \"block\",\n                    md: \"none\"\n                },\n                bg: \"white\",\n                position: \"fixed\",\n                top: 0,\n                left: 0,\n                right: 0,\n                zIndex: \"100\",\n                p: 4,\n                boxShadow: \"md\",\n                children: navData.map((el)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Link, {\n                        to: el.path,\n                        smooth: true,\n                        duration: 500,\n                        spy: true,\n                        offset: -68,\n                        activeClass: \"text-[#fac654]\",\n                        onClick: onToggle,\n                        display: \"block\",\n                        py: 2,\n                        fontWeight: \"bold\",\n                        color: \"black\",\n                        _hover: {\n                            textDecoration: \"none\",\n                            color: \"#febd2c\"\n                        },\n                        children: el.title\n                    }, el.id, false, {\n                        fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                        lineNumber: 149,\n                        columnNumber: 25\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                lineNumber: 137,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Navbar, \"44O9wNEwX9BktM+/meuF93YLjYY=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useDisclosure\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL21haW4tcGFnZS1jb21wb25lbnRzL0hlYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQSxvREFBb0Q7QUFDcEQsb0VBQW9FO0FBQ3BFLHVDQUF1QztBQUV2Qyx5QkFBeUI7QUFDekIscURBQXFEO0FBQ3JELG9EQUFvRDtBQUVwRCx3QkFBd0I7QUFDeEIsdUNBQXVDO0FBQ3ZDLCtDQUErQztBQUMvQyxhQUFhO0FBRWIsMkRBQTJEO0FBQzNELHlCQUF5QjtBQUN6QixrRUFBa0U7QUFDbEUsYUFBYTtBQUNiLGNBQWM7QUFDZCxlQUFlO0FBQ2YseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3QiwwREFBMEQ7QUFDMUQsa0NBQWtDO0FBQ2xDLHNEQUFzRDtBQUN0RCxpRUFBaUU7QUFDakUsNkJBQTZCO0FBQzdCLDhCQUE4QjtBQUM5Qiw0QkFBNEI7QUFDNUIsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWix3REFBd0Q7QUFDeEQsMEhBQTBIO0FBQzFILGlDQUFpQztBQUNqQyxnQ0FBZ0M7QUFDaEMsK0hBQStIO0FBQy9ILHNDQUFzQztBQUN0QyxnQ0FBZ0M7QUFDaEMsOERBQThEO0FBQzlELHNCQUFzQjtBQUN0QixpQkFBaUI7QUFDakIsU0FBUztBQUNULEtBQUs7QUFFTCx5QkFBeUI7QUFFekIsd0NBQXdDO0FBQ29EO0FBRTVGLHVCQUF1QjtBQUN2QixNQUFNTyxVQUFVO0lBQ1o7UUFBRUMsSUFBSTtRQUFHQyxPQUFPO1FBQWdCQyxNQUFNO0lBQWlCO0lBQ3ZEO1FBQUVGLElBQUk7UUFBR0MsT0FBTztRQUFlQyxNQUFNO0lBQWE7SUFDbEQ7UUFBRUYsSUFBSTtRQUFHQyxPQUFPO1FBQXlCQyxNQUFNO0lBQXVCO0lBQ3RFO1FBQUVGLElBQUk7UUFBR0MsT0FBTztRQUFTQyxNQUFNO0lBQU87SUFDdEM7UUFBRUYsSUFBSTtRQUFHQyxPQUFPO1FBQWNDLE1BQU07SUFBUTtJQUM1QztRQUFFRixJQUFJO1FB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bmVudHMvbWFpbi1wYWdlLWNvbXBvbmVudHMvSGVhZGVyLmpzP2IzMWUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG4vLyBpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgeyBGbGV4LCBMaW5rIGFzIENoYWtyYUxpbmssIEJveCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuLy8gaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5cbi8vIGNvbnN0IEhlYWRlciA9ICgpID0+IHtcbi8vICAgICBjb25zdCBbaXNTdGlja3ksIHNldFN0aWNreV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4vLyAgICAgLy8gY29uc3QgW3Njcm9sbFksIHNldFNjcm9sbFldID0gdXNlU3RhdGUoMCk7XG5cbi8vICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuLy8gICAgICAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4vLyAgICAgICAgICAgICBzZXRTdGlja3kod2luZG93LnNjcm9sbFkgPiAxMDApO1xuLy8gICAgICAgICB9O1xuXG4vLyAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuLy8gICAgICAgICByZXR1cm4gKCkgPT4ge1xuLy8gICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4vLyAgICAgICAgIH07XG4vLyAgICAgfSwgW10pO1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDxCb3ggYXM9XCJuYXZcIiBcbi8vICAgICAgICAgcG9zaXRpb249XCJzdGlja3lcIiBcbi8vICAgICAgICAgICAgIHRvcD17MH0gbGVmdD17MH0gcmlnaHQ9ezB9IGJnPVwidHJhbnNwYXJlbnRcIlxuLy8gICAgICAgICAgICAgLy8gIHpJbmRleD1cInN0aWNreVwiXG4vLyAgICAgICAgICAgICB0cmFuc2l0aW9uPVwidHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXRcIlxuLy8gICAgICAgICAgICAgdHJhbnNmb3JtPXtgdHJhbnNsYXRlWSgke2lzU3RpY2t5ID8gMCA6ICcxMDAlJ30pYH1cbi8vICAgICAgICAgICAgIGJveFNoYWRvdz1cIm1kXCJcbi8vICAgICAgICAgLy8gYmc9XCJ0cmFuc3BhcmVudFwiXG4vLyAgICAgICAgIC8vIGNvbG9yPVwid2hpdGVcIiBcbi8vICAgICAgICAgcD17NH1cbi8vICAgICAgICAgPlxuLy8gICAgICAgICAgICAgPEZsZXgganVzdGlmeT1cInNwYWNlLWFyb3VuZFwiIHdyYXA9XCJ3cmFwXCI+XG4vLyAgICAgICAgICAgICAgICAgPENoYWtyYUxpbmsgYXM9e0xpbmt9IHRvPVwidG9wQmFubmVyXCIgc21vb3RoPXt0cnVlfSBkdXJhdGlvbj17NTAwfSBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBweD17Mn0+XG4vLyAgICAgICAgICAgICAgICAgICAgIFRvcCBCYW5uZXJcbi8vICAgICAgICAgICAgICAgICA8L0NoYWtyYUxpbms+XG4vLyAgICAgICAgICAgICAgICAgPENoYWtyYUxpbmsgYXM9e0xpbmt9IHRvPVwidG9wRGVzY3JpcHRpb25cIiBzbW9vdGg9e3RydWV9IGR1cmF0aW9uPXs1MDB9IHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IHB4PXsyfT5cbi8vICAgICAgICAgICAgICAgICAgICAgVG9wIERlc2NyaXB0aW9uXG4vLyAgICAgICAgICAgICAgICAgPC9DaGFrcmFMaW5rPlxuLy8gICAgICAgICAgICAgICAgIHsvKiBBZGQgbW9yZSBDaGFrcmFMaW5rIGl0ZW1zIGFzIG5lZWRlZCAqL31cbi8vICAgICAgICAgICAgIDwvRmxleD5cbi8vICAgICAgICAgPC9Cb3g+XG4vLyAgICAgKTtcbi8vIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcblxuLy8gSW1wb3J0IG5lY2Vzc2FyeSBDaGFrcmEgVUkgY29tcG9uZW50c1xuaW1wb3J0IHsgQm94LCBGbGV4LCBUZXh0LCBCdXR0b24sIHVzZURpc2Nsb3N1cmUsIExpbmssIENoYWtyYUxpbmsgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcblxuLy8gWW91ciBuYXZpZ2F0aW9uIGRhdGFcbmNvbnN0IG5hdkRhdGEgPSBbXG4gICAgeyBpZDogMSwgdGl0bGU6IFwiRHlpbmcgVGVtcGxlXCIsIHBhdGg6IFwidG9wRGVzY3JpcHRpb25cIiB9LFxuICAgIHsgaWQ6IDIsIHRpdGxlOiBcIkZyZWUgVGVtcGxlXCIsIHBhdGg6IFwiZnJlZXRlbXBsZVwiIH0sXG4gICAgeyBpZDogMywgdGl0bGU6IFwiSGVhcnRicmVha2luZyBTdG9yaWVzXCIsIHBhdGg6IFwiaGVhcnRicmVha2luZ1N0b3JpZXNcIiB9LFxuICAgIHsgaWQ6IDQsIHRpdGxlOiBcIkhSJkNFXCIsIHBhdGg6IFwiaHJjZVwiIH0sXG4gICAgeyBpZDogNSwgdGl0bGU6IFwiUGFzdCBHbG9yeVwiLCBwYXRoOiBcImdsb3J5XCIgfSxcbiAgICB7IGlkOiA2LCB0aXRsZTogXCJHZXQgSW4gVG91Y2hcIiwgcGF0aDogXCJcIiB9LFxuICAgIHsgaWQ6IDcsIHRpdGxlOiBcIk1lZGlhXCIsIHBhdGg6IFwibWVkaWFcIiB9LFxuXTtcblxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaXNPcGVuLCBvblRvZ2dsZSB9ID0gdXNlRGlzY2xvc3VyZSgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHsvKiBEZXNrdG9wIE5hdmJhciAqL31cbiAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgYXM9XCJuYXZcIlxuICAgICAgICAgICAgICAgIGlkPSdhYmMnXG4gICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICB3cmFwPVwid3JhcFwiXG4gICAgICAgICAgICAgICAgdz1cIjE0NTBweFwiXG4gICAgICAgICAgICAgICAgcD17NH1cbiAgICAgICAgICAgICAgICAvLyBiZz1cImN1c3RvbUJyb3duXCJcbiAgICAgICAgICAgICAgICBiZz1cInJnYmEoMTAxLCA2NywgMzMsIDAuOClcIiAvLyBEYXJrIGJyb3duIGNvbG9yIHdpdGggODAlIG9wYWNpdHlcbiAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbj17XCJmaXhlZFwifVxuICAgICAgICAgICAgICAgIHRvcD17JzAnfVxuICAgICAgICAgICAgICAgIHpJbmRleD17OTk5fVxuICAgICAgICAgICAgICAgIGJveFNoYWRvdz1cIm1kXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Qm94IGRpc3BsYXk9e3sgYmFzZTogJ2Jsb2NrJywgbWQ6ICdub25lJyB9fSBvbkNsaWNrPXtvblRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEycHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1yPVwiMTJweFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5NZW51PC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMCAwaDIwdjIwSDBWMHpcIiBmaWxsPVwibm9uZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0yLjUgNWgxNU0yLjUgMTBoMTVtLTE1IDVoMTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PXt7IGJhc2U6IGlzT3BlbiA/ICdibG9jaycgOiAnbm9uZScsIG1kOiAnZmxleCcgfX1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3sgYmFzZTogJ2Z1bGwnLCBtZDogJ2F1dG8nIH19XG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICBmbGV4R3Jvdz17MX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtuYXZEYXRhLm1hcCgoZWwpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtlbC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17ZWwucGF0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcHk9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PXstNjh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJ0ZXh0LVsjZmFjNjU0XVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHg9ezJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHk9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9ob3Zlcj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZWJkMmMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8Qm94IGRpc3BsYXk9e3sgYmFzZTogaXNPcGVuID8gJ2Jsb2NrJyA6ICdub25lJywgbWQ6ICdibG9jaycgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gYmc9XCIjZmViZDJjXCIgY29sb3I9XCJibGFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRW5nbGlzaFxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvRmxleD5cblxuICAgICAgICAgICAgey8qIE1vYmlsZSBOYXZiYXIgKi99XG4gICAgICAgICAgICB7aXNPcGVuICYmIChcbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9e3sgYmFzZTogJ2Jsb2NrJywgbWQ6ICdub25lJyB9fVxuICAgICAgICAgICAgICAgICAgICBiZz1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249e1wiZml4ZWRcIn1cbiAgICAgICAgICAgICAgICAgICAgdG9wPXswfVxuICAgICAgICAgICAgICAgICAgICBsZWZ0PXswfVxuICAgICAgICAgICAgICAgICAgICByaWdodD17MH1cbiAgICAgICAgICAgICAgICAgICAgekluZGV4PVwiMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgcD17NH1cbiAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93PVwibWRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge25hdkRhdGEubWFwKChlbCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2VsLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtlbC5wYXRofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ9ey02OH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cInRleHQtWyNmYWM2NTRdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblRvZ2dsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PVwiYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB5PXsyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaG92ZXI9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmViZDJjJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbC50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgey8qIDxzdHlsZSBnbG9iYWwganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICNhYmMge1xuICAgICAgICAgICAgcG9zaXRpb24gOiBmaXhlZDtcbiAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT4gKi99XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iXSwibmFtZXMiOlsiQm94IiwiRmxleCIsIlRleHQiLCJCdXR0b24iLCJ1c2VEaXNjbG9zdXJlIiwiTGluayIsIkNoYWtyYUxpbmsiLCJuYXZEYXRhIiwiaWQiLCJ0aXRsZSIsInBhdGgiLCJOYXZiYXIiLCJpc09wZW4iLCJvblRvZ2dsZSIsImFzIiwiYWxpZ24iLCJqdXN0aWZ5Iiwid3JhcCIsInciLCJwIiwiYmciLCJjb2xvciIsInBvc2l0aW9uIiwidG9wIiwiekluZGV4IiwiYm94U2hhZG93IiwiZGlzcGxheSIsImJhc2UiLCJtZCIsIm9uQ2xpY2siLCJzdmciLCJmaWxsIiwid2lkdGgiLCJ2aWV3Qm94IiwieG1sbnMiLCJtciIsImQiLCJhbGlnbkl0ZW1zIiwiZmxleEdyb3ciLCJtYXAiLCJlbCIsInRvIiwic21vb3RoIiwiZHVyYXRpb24iLCJzcHkiLCJvZmZzZXQiLCJhY3RpdmVDbGFzcyIsInB4IiwicHkiLCJmb250V2VpZ2h0IiwiX2hvdmVyIiwidGV4dERlY29yYXRpb24iLCJsZWZ0IiwicmlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/main-page-components/Header.js\n"));

/***/ })

});