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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/hooks/dist/chunk-7JBTTEVG.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-KRPLQIP4.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/button/dist/chunk-UVUR7MCU.mjs\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll */ \"(app-pages-browser)/./node_modules/react-scroll/modules/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// import React, {useEffect, useState} from 'react';\n// import { Flex, Link as ChakraLink, Box } from '@chakra-ui/react';\n// import { Link } from 'react-scroll';\n// const Header = () => {\n//     const [isSticky, setSticky] = useState(false);\n//     // const [scrollY, setScrollY] = useState(0);\n//     useEffect(() => {\n//         const handleScroll = () => {\n//             setSticky(window.scrollY > 100);\n//         };\n//         window.addEventListener('scroll', handleScroll);\n//         return () => {\n//             window.removeEventListener('scroll', handleScroll);\n//         };\n//     }, []);\n//     return (\n//         <Box as=\"nav\" \n//         position=\"sticky\" \n//             top={0} left={0} right={0} bg=\"transparent\"\n//             //  zIndex=\"sticky\"\n//             transition=\"transform 0.3s ease-in-out\"\n//             transform={`translateY(${isSticky ? 0 : '100%'})`}\n//             boxShadow=\"md\"\n//         // bg=\"transparent\"\n//         // color=\"white\" \n//         p={4}\n//         >\n//             <Flex justify=\"space-around\" wrap=\"wrap\">\n//                 <ChakraLink as={Link} to=\"topBanner\" smooth={true} duration={500} style={{ cursor: 'pointer' }} px={2}>\n//                     Top Banner\n//                 </ChakraLink>\n//                 <ChakraLink as={Link} to=\"topDescription\" smooth={true} duration={500} style={{ cursor: 'pointer' }} px={2}>\n//                     Top Description\n//                 </ChakraLink>\n//                 {/* Add more ChakraLink items as needed */}\n//             </Flex>\n//         </Box>\n//     );\n// };\n// export default Header;\n// Import necessary Chakra UI components\n\n\n// Your navigation data\nconst navData = [\n    {\n        id: 1,\n        title: \"Dying Temple\",\n        path: \"topDescription\"\n    },\n    {\n        id: 2,\n        title: \"Free Temple\",\n        path: \"freetemple\"\n    },\n    {\n        id: 3,\n        title: \"Heartbreaking Stories\",\n        path: \"heartbreakingStories\"\n    },\n    {\n        id: 4,\n        title: \"HR&CE\",\n        path: \"hrce\"\n    },\n    {\n        id: 5,\n        title: \"Past Glory\",\n        path: \"glory\"\n    },\n    {\n        id: 6,\n        title: \"Get In Touch\",\n        path: \"\"\n    },\n    {\n        id: 7,\n        title: \"Media\",\n        path: \"media\"\n    }\n];\nconst Navbar = ()=>{\n    _s();\n    const { isOpen, onToggle } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                as: \"nav\",\n                id: \"abc\",\n                align: \"center\",\n                justify: \"space-between\",\n                wrap: \"wrap\",\n                w: \"1450px\",\n                p: 4,\n                // bg=\"customBrown\"\n                bg: \"rgba(101, 67, 33, 0.8)\" // Dark brown color with 80% opacity\n                ,\n                color: \"white\",\n                position: \"fixed\",\n                top: \"0\",\n                zIndex: 999,\n                boxShadow: \"md\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                        display: {\n                            base: \"block\",\n                            md: \"none\"\n                        },\n                        onClick: onToggle,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            fill: \"white\",\n                            width: \"12px\",\n                            viewBox: \"0 0 20 20\",\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            mr: \"12px\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                                    children: \"Menu\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    d: \"M0 0h20v20H0V0z\",\n                                    fill: \"none\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                                    lineNumber: 94,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    fill: \"white\",\n                                    d: \"M2.5 5h15M2.5 10h15m-15 5h15\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                            lineNumber: 86,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                        display: {\n                            base: isOpen ? \"block\" : \"none\",\n                            md: \"flex\"\n                        },\n                        width: {\n                            base: \"full\",\n                            md: \"auto\"\n                        },\n                        alignItems: \"center\",\n                        flexGrow: 1,\n                        ml: 0,\n                        // justify=\"space-around\"\n                        p: 20,\n                        children: navData.map((el, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                                to: el.path,\n                                smooth: true,\n                                duration: 500,\n                                spy: true,\n                                offset: -68,\n                                activeClass: \"text-[#fac654]\",\n                                px: 2,\n                                py: 2,\n                                fontWeight: \"bold\",\n                                color: \"white\",\n                                mr: index !== navData.length - 1 ? 4 : 0,\n                                _hover: {\n                                    textDecoration: \"none\",\n                                    color: \"#febd2c\"\n                                },\n                                children: el.title\n                            }, el.id, false, {\n                                fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                                lineNumber: 111,\n                                columnNumber: 25\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                        lineNumber: 101,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                        display: {\n                            base: isOpen ? \"block\" : \"none\",\n                            md: \"block\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                            bg: \"#febd2c\",\n                            color: \"black\",\n                            children: \"English\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                            lineNumber: 134,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                        lineNumber: 133,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, undefined),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                display: {\n                    base: \"block\",\n                    md: \"none\"\n                },\n                bg: \"white\",\n                position: \"fixed\",\n                top: 0,\n                left: 0,\n                right: 0,\n                zIndex: \"100\",\n                p: 4,\n                boxShadow: \"md\",\n                children: navData.map((el)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                        to: el.path,\n                        smooth: true,\n                        duration: 500,\n                        spy: true,\n                        offset: -68,\n                        activeClass: \"text-[#fac654]\",\n                        onClick: onToggle,\n                        display: \"block\",\n                        py: 2,\n                        fontWeight: \"bold\",\n                        color: \"black\",\n                        _hover: {\n                            textDecoration: \"none\",\n                            color: \"#febd2c\"\n                        },\n                        children: el.title\n                    }, el.id, false, {\n                        fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                        lineNumber: 154,\n                        columnNumber: 25\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                lineNumber: 142,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Navbar, \"44O9wNEwX9BktM+/meuF93YLjYY=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL21haW4tcGFnZS1jb21wb25lbnRzL0hlYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQSxvREFBb0Q7QUFDcEQsb0VBQW9FO0FBQ3BFLHVDQUF1QztBQUV2Qyx5QkFBeUI7QUFDekIscURBQXFEO0FBQ3JELG9EQUFvRDtBQUVwRCx3QkFBd0I7QUFDeEIsdUNBQXVDO0FBQ3ZDLCtDQUErQztBQUMvQyxhQUFhO0FBRWIsMkRBQTJEO0FBQzNELHlCQUF5QjtBQUN6QixrRUFBa0U7QUFDbEUsYUFBYTtBQUNiLGNBQWM7QUFDZCxlQUFlO0FBQ2YseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3QiwwREFBMEQ7QUFDMUQsa0NBQWtDO0FBQ2xDLHNEQUFzRDtBQUN0RCxpRUFBaUU7QUFDakUsNkJBQTZCO0FBQzdCLDhCQUE4QjtBQUM5Qiw0QkFBNEI7QUFDNUIsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWix3REFBd0Q7QUFDeEQsMEhBQTBIO0FBQzFILGlDQUFpQztBQUNqQyxnQ0FBZ0M7QUFDaEMsK0hBQStIO0FBQy9ILHNDQUFzQztBQUN0QyxnQ0FBZ0M7QUFDaEMsOERBQThEO0FBQzlELHNCQUFzQjtBQUN0QixpQkFBaUI7QUFDakIsU0FBUztBQUNULEtBQUs7QUFFTCx5QkFBeUI7QUFFekIsd0NBQXdDO0FBQ2lDO0FBQ3ZCO0FBRWxELHVCQUF1QjtBQUN2QixNQUFNTyxVQUFVO0lBQ1o7UUFBRUMsSUFBSTtRQUFHQyxPQUFPO1FBQWdCQyxNQUFNO0lBQWlCO0lBQ3ZEO1FBQUVGLElBQUk7UUFBR0MsT0FBTztRQUFlQyxNQUFNO0lBQWE7SUFDbEQ7UUFBRUYsSUFBSTtRQUFHQyxPQUFPO1FBQXlCQyxNQUFNO0lBQXVCO0lBQ3RFO1FBQUVGLElBQUk7UUFBR0MsT0FBTztRQUFTQyxNQUFNO0lBQU87SUFDdEM7UUFBRUYsSUFBSTtRQUFHQyxPQUFPO1FBQWNDLE1BQU07SUFBUTtJQUM1QztRQUFFRixJ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dEM7R0E1SE1HOztRQUMyQlAsMkRBQWFBOzs7S0FEeENPO0FBOEhOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL21haW4tcGFnZS1jb21wb25lbnRzL0hlYWRlci5qcz9iMzFlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuLy8gaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IHsgRmxleCwgTGluayBhcyBDaGFrcmFMaW5rLCBCb3ggfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0Jztcbi8vIGltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xuXG4vLyBjb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4vLyAgICAgY29uc3QgW2lzU3RpY2t5LCBzZXRTdGlja3ldID0gdXNlU3RhdGUoZmFsc2UpO1xuLy8gICAgIC8vIGNvbnN0IFtzY3JvbGxZLCBzZXRTY3JvbGxZXSA9IHVzZVN0YXRlKDApO1xuXG4vLyAgICAgdXNlRWZmZWN0KCgpID0+IHtcbi8vICAgICAgICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuLy8gICAgICAgICAgICAgc2V0U3RpY2t5KHdpbmRvdy5zY3JvbGxZID4gMTAwKTtcbi8vICAgICAgICAgfTtcblxuLy8gICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbi8vICAgICAgICAgcmV0dXJuICgpID0+IHtcbi8vICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuLy8gICAgICAgICB9O1xuLy8gICAgIH0sIFtdKTtcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8Qm94IGFzPVwibmF2XCIgXG4vLyAgICAgICAgIHBvc2l0aW9uPVwic3RpY2t5XCIgXG4vLyAgICAgICAgICAgICB0b3A9ezB9IGxlZnQ9ezB9IHJpZ2h0PXswfSBiZz1cInRyYW5zcGFyZW50XCJcbi8vICAgICAgICAgICAgIC8vICB6SW5kZXg9XCJzdGlja3lcIlxuLy8gICAgICAgICAgICAgdHJhbnNpdGlvbj1cInRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0XCJcbi8vICAgICAgICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZVkoJHtpc1N0aWNreSA/IDAgOiAnMTAwJSd9KWB9XG4vLyAgICAgICAgICAgICBib3hTaGFkb3c9XCJtZFwiXG4vLyAgICAgICAgIC8vIGJnPVwidHJhbnNwYXJlbnRcIlxuLy8gICAgICAgICAvLyBjb2xvcj1cIndoaXRlXCIgXG4vLyAgICAgICAgIHA9ezR9XG4vLyAgICAgICAgID5cbi8vICAgICAgICAgICAgIDxGbGV4IGp1c3RpZnk9XCJzcGFjZS1hcm91bmRcIiB3cmFwPVwid3JhcFwiPlxuLy8gICAgICAgICAgICAgICAgIDxDaGFrcmFMaW5rIGFzPXtMaW5rfSB0bz1cInRvcEJhbm5lclwiIHNtb290aD17dHJ1ZX0gZHVyYXRpb249ezUwMH0gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gcHg9ezJ9PlxuLy8gICAgICAgICAgICAgICAgICAgICBUb3AgQmFubmVyXG4vLyAgICAgICAgICAgICAgICAgPC9DaGFrcmFMaW5rPlxuLy8gICAgICAgICAgICAgICAgIDxDaGFrcmFMaW5rIGFzPXtMaW5rfSB0bz1cInRvcERlc2NyaXB0aW9uXCIgc21vb3RoPXt0cnVlfSBkdXJhdGlvbj17NTAwfSBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBweD17Mn0+XG4vLyAgICAgICAgICAgICAgICAgICAgIFRvcCBEZXNjcmlwdGlvblxuLy8gICAgICAgICAgICAgICAgIDwvQ2hha3JhTGluaz5cbi8vICAgICAgICAgICAgICAgICB7LyogQWRkIG1vcmUgQ2hha3JhTGluayBpdGVtcyBhcyBuZWVkZWQgKi99XG4vLyAgICAgICAgICAgICA8L0ZsZXg+XG4vLyAgICAgICAgIDwvQm94PlxuLy8gICAgICk7XG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBIZWFkZXI7XG5cbi8vIEltcG9ydCBuZWNlc3NhcnkgQ2hha3JhIFVJIGNvbXBvbmVudHNcbmltcG9ydCB7IEJveCwgRmxleCwgVGV4dCwgQnV0dG9uLCB1c2VEaXNjbG9zdXJlfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IExpbmsgYXMgU2Nyb2xsTGluayB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5cbi8vIFlvdXIgbmF2aWdhdGlvbiBkYXRhXG5jb25zdCBuYXZEYXRhID0gW1xuICAgIHsgaWQ6IDEsIHRpdGxlOiBcIkR5aW5nIFRlbXBsZVwiLCBwYXRoOiBcInRvcERlc2NyaXB0aW9uXCIgfSxcbiAgICB7IGlkOiAyLCB0aXRsZTogXCJGcmVlIFRlbXBsZVwiLCBwYXRoOiBcImZyZWV0ZW1wbGVcIiB9LFxuICAgIHsgaWQ6IDMsIHRpdGxlOiBcIkhlYXJ0YnJlYWtpbmcgU3Rvcmllc1wiLCBwYXRoOiBcImhlYXJ0YnJlYWtpbmdTdG9yaWVzXCIgfSxcbiAgICB7IGlkOiA0LCB0aXRsZTogXCJIUiZDRVwiLCBwYXRoOiBcImhyY2VcIiB9LFxuICAgIHsgaWQ6IDUsIHRpdGxlOiBcIlBhc3QgR2xvcnlcIiwgcGF0aDogXCJnbG9yeVwiIH0sXG4gICAgeyBpZDogNiwgdGl0bGU6IFwiR2V0IEluIFRvdWNoXCIsIHBhdGg6IFwiXCIgfSxcbiAgICB7IGlkOiA3LCB0aXRsZTogXCJNZWRpYVwiLCBwYXRoOiBcIm1lZGlhXCIgfSxcbl07XG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcbiAgICBjb25zdCB7IGlzT3Blbiwgb25Ub2dnbGUgfSA9IHVzZURpc2Nsb3N1cmUoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7LyogRGVza3RvcCBOYXZiYXIgKi99XG4gICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgIGFzPVwibmF2XCJcbiAgICAgICAgICAgICAgICBpZD0nYWJjJ1xuICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgd3JhcD1cIndyYXBcIlxuICAgICAgICAgICAgICAgIHc9XCIxNDUwcHhcIlxuICAgICAgICAgICAgICAgIHA9ezR9XG4gICAgICAgICAgICAgICAgLy8gYmc9XCJjdXN0b21Ccm93blwiXG4gICAgICAgICAgICAgICAgYmc9XCJyZ2JhKDEwMSwgNjcsIDMzLCAwLjgpXCIgLy8gRGFyayBicm93biBjb2xvciB3aXRoIDgwJSBvcGFjaXR5XG4gICAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgcG9zaXRpb249e1wiZml4ZWRcIn1cbiAgICAgICAgICAgICAgICB0b3A9eycwJ31cbiAgICAgICAgICAgICAgICB6SW5kZXg9ezk5OX1cbiAgICAgICAgICAgICAgICBib3hTaGFkb3c9XCJtZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEJveCBkaXNwbGF5PXt7IGJhc2U6ICdibG9jaycsIG1kOiAnbm9uZScgfX0gb25DbGljaz17b25Ub2dnbGV9PlxuICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMnB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBtcj1cIjEycHhcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+TWVudTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTAgMGgyMHYyMEgwVjB6XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMi41IDVoMTVNMi41IDEwaDE1bS0xNSA1aDE1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9e3sgYmFzZTogaXNPcGVuID8gJ2Jsb2NrJyA6ICdub25lJywgbWQ6ICdmbGV4JyB9fVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17eyBiYXNlOiAnZnVsbCcsIG1kOiAnYXV0bycgfX1cbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIGZsZXhHcm93PXsxfVxuICAgICAgICAgICAgICAgICAgICBtbD17MH1cbiAgICAgICAgICAgICAgICAgICAgLy8ganVzdGlmeT1cInNwYWNlLWFyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgIHA9ezIwfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge25hdkRhdGEubWFwKChlbCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTY3JvbGxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtlbC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17ZWwucGF0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcHk9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PXstNjh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJ0ZXh0LVsjZmFjNjU0XVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHg9ezJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHk9ezJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1yPXtpbmRleCAhPT0gbmF2RGF0YS5sZW5ndGggLSAxID8gNCA6IDB9IC8vIEFkZCBtYXJnaW4gdG8gdGhlIHJpZ2h0IGV4Y2VwdCBmb3IgdGhlIGxhc3QgaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9ob3Zlcj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZWJkMmMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TY3JvbGxMaW5rPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgPEJveCBkaXNwbGF5PXt7IGJhc2U6IGlzT3BlbiA/ICdibG9jaycgOiAnbm9uZScsIG1kOiAnYmxvY2snIH19PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGJnPVwiI2ZlYmQyY1wiIGNvbG9yPVwiYmxhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEVuZ2xpc2hcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0ZsZXg+XG5cbiAgICAgICAgICAgIHsvKiBNb2JpbGUgTmF2YmFyICovfVxuICAgICAgICAgICAge2lzT3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PXt7IGJhc2U6ICdibG9jaycsIG1kOiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgICAgICAgYmc9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPXtcImZpeGVkXCJ9XG4gICAgICAgICAgICAgICAgICAgIHRvcD17MH1cbiAgICAgICAgICAgICAgICAgICAgbGVmdD17MH1cbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ9ezB9XG4gICAgICAgICAgICAgICAgICAgIHpJbmRleD1cIjEwMFwiXG4gICAgICAgICAgICAgICAgICAgIHA9ezR9XG4gICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdz1cIm1kXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtuYXZEYXRhLm1hcCgoZWwpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTY3JvbGxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtlbC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17ZWwucGF0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcHk9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PXstNjh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJ0ZXh0LVsjZmFjNjU0XVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25Ub2dnbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheT1cImJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBweT17Mn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJibGFja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2hvdmVyPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZlYmQyYycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWwudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Njcm9sbExpbms+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHsvKiA8c3R5bGUgZ2xvYmFsIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAjYWJjIHtcbiAgICAgICAgICAgIHBvc2l0aW9uIDogZml4ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+ICovfVxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl0sIm5hbWVzIjpbIkJveCIsIkZsZXgiLCJUZXh0IiwiQnV0dG9uIiwidXNlRGlzY2xvc3VyZSIsIkxpbmsiLCJTY3JvbGxMaW5rIiwibmF2RGF0YSIsImlkIiwidGl0bGUiLCJwYXRoIiwiTmF2YmFyIiwiaXNPcGVuIiwib25Ub2dnbGUiLCJhcyIsImFsaWduIiwianVzdGlmeSIsIndyYXAiLCJ3IiwicCIsImJnIiwiY29sb3IiLCJwb3NpdGlvbiIsInRvcCIsInpJbmRleCIsImJveFNoYWRvdyIsImRpc3BsYXkiLCJiYXNlIiwibWQiLCJvbkNsaWNrIiwic3ZnIiwiZmlsbCIsIndpZHRoIiwidmlld0JveCIsInhtbG5zIiwibXIiLCJkIiwiYWxpZ25JdGVtcyIsImZsZXhHcm93IiwibWwiLCJtYXAiLCJlbCIsImluZGV4IiwidG8iLCJzbW9vdGgiLCJkdXJhdGlvbiIsInNweSIsIm9mZnNldCIsImFjdGl2ZUNsYXNzIiwicHgiLCJweSIsImZvbnRXZWlnaHQiLCJsZW5ndGgiLCJfaG92ZXIiLCJ0ZXh0RGVjb3JhdGlvbiIsImxlZnQiLCJyaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/main-page-components/Header.js\n"));

/***/ })

});