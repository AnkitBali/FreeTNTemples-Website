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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/hooks/dist/chunk-7JBTTEVG.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-KRPLQIP4.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-3ASUQ6PA.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-BL2ZZSHG.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/button/dist/chunk-UVUR7MCU.mjs\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll */ \"(app-pages-browser)/./node_modules/react-scroll/modules/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// import React, {useEffect, useState} from 'react';\n// import { Flex, Link as ChakraLink, Box } from '@chakra-ui/react';\n// import { Link } from 'react-scroll';\n// const Header = () => {\n//     const [isSticky, setSticky] = useState(false);\n//     // const [scrollY, setScrollY] = useState(0);\n//     useEffect(() => {\n//         const handleScroll = () => {\n//             setSticky(window.scrollY > 100);\n//         };\n//         window.addEventListener('scroll', handleScroll);\n//         return () => {\n//             window.removeEventListener('scroll', handleScroll);\n//         };\n//     }, []);\n//     return (\n//         <Box as=\"nav\" \n//         position=\"sticky\" \n//             top={0} left={0} right={0} bg=\"transparent\"\n//             //  zIndex=\"sticky\"\n//             transition=\"transform 0.3s ease-in-out\"\n//             transform={`translateY(${isSticky ? 0 : '100%'})`}\n//             boxShadow=\"md\"\n//         // bg=\"transparent\"\n//         // color=\"white\" \n//         p={4}\n//         >\n//             <Flex justify=\"space-around\" wrap=\"wrap\">\n//                 <ChakraLink as={Link} to=\"topBanner\" smooth={true} duration={500} style={{ cursor: 'pointer' }} px={2}>\n//                     Top Banner\n//                 </ChakraLink>\n//                 <ChakraLink as={Link} to=\"topDescription\" smooth={true} duration={500} style={{ cursor: 'pointer' }} px={2}>\n//                     Top Description\n//                 </ChakraLink>\n//                 {/* Add more ChakraLink items as needed */}\n//             </Flex>\n//         </Box>\n//     );\n// };\n// export default Header;\n// Import necessary Chakra UI components\n\n\n// Your navigation data\nconst navData = [\n    {\n        id: 1,\n        title: \"Dying Temple\",\n        path: \"topDescription\"\n    },\n    {\n        id: 2,\n        title: \"Free Temple\",\n        path: \"freetemple\"\n    },\n    {\n        id: 3,\n        title: \"Heartbreaking Stories\",\n        path: \"heartbreakingStories\"\n    },\n    {\n        id: 4,\n        title: \"HR&CE\",\n        path: \"hrce\"\n    },\n    {\n        id: 5,\n        title: \"Past Glory\",\n        path: \"glory\"\n    },\n    {\n        id: 6,\n        title: \"Get In Touch\",\n        path: \"\"\n    },\n    {\n        id: 7,\n        title: \"Media\",\n        path: \"media\"\n    }\n];\nconst Navbar = ()=>{\n    _s();\n    const { isOpen, onToggle } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                as: \"nav\",\n                id: \"abc\",\n                align: \"center\",\n                justify: \"space-between\",\n                wrap: \"wrap\",\n                w: \"1450px\",\n                p: 4,\n                // bg=\"customBrown\"\n                bg: \"rgba(101, 67, 33, 0.8)\" // Dark brown color with 80% opacity\n                ,\n                color: \"white\",\n                position: \"fixed\",\n                top: \"0\",\n                zIndex: 999,\n                boxShadow: \"md\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                        display: {\n                            base: \"block\",\n                            md: \"none\"\n                        },\n                        onClick: onToggle,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            fill: \"white\",\n                            width: \"12px\",\n                            viewBox: \"0 0 20 20\",\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            mr: \"12px\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                                    children: \"Menu\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    d: \"M0 0h20v20H0V0z\",\n                                    fill: \"none\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                                    lineNumber: 94,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    fill: \"white\",\n                                    d: \"M2.5 5h15M2.5 10h15m-15 5h15\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                            lineNumber: 86,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.HStack, {\n                        display: {\n                            base: isOpen ? \"block\" : \"none\",\n                            md: \"flex\"\n                        },\n                        width: {\n                            base: \"full\",\n                            md: \"auto\"\n                        },\n                        // alignItems=\"center\"\n                        // flexGrow={1}\n                        ml: {\n                            base: \"auto\",\n                            md: \"20px\"\n                        },\n                        children: navData.map((el, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                                        to: el.path,\n                                        smooth: true,\n                                        duration: 500,\n                                        spy: true,\n                                        offset: -68,\n                                        activeClass: \"text-[#fac654]\",\n                                        px: 2,\n                                        py: 2,\n                                        fontWeight: \"bold\",\n                                        color: \"white\",\n                                        mr: index !== navData.length - 1 ? 4 : 0,\n                                        _hover: {\n                                            textDecoration: \"none\",\n                                            color: \"#febd2c\"\n                                        },\n                                        children: el.title\n                                    }, el.id, false, {\n                                        fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                                        lineNumber: 116,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Spacer, {}, void 0, false, {\n                                        fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                                        lineNumber: 136,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true))\n                    }, void 0, false, {\n                        fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                        lineNumber: 102,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                        display: {\n                            base: isOpen ? \"block\" : \"none\",\n                            md: \"block\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                            bg: \"#febd2c\",\n                            color: \"black\",\n                            children: \"English\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                            lineNumber: 141,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                        lineNumber: 140,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, undefined),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                display: {\n                    base: \"block\",\n                    md: \"none\"\n                },\n                bg: \"white\",\n                position: \"fixed\",\n                top: 0,\n                left: 0,\n                right: 0,\n                zIndex: \"100\",\n                p: 4,\n                boxShadow: \"md\",\n                children: navData.map((el)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                        to: el.path,\n                        smooth: true,\n                        duration: 500,\n                        spy: true,\n                        offset: -68,\n                        activeClass: \"text-[#fac654]\",\n                        onClick: onToggle,\n                        display: \"block\",\n                        py: 2,\n                        fontWeight: \"bold\",\n                        color: \"black\",\n                        _hover: {\n                            textDecoration: \"none\",\n                            color: \"#febd2c\"\n                        },\n                        children: el.title\n                    }, el.id, false, {\n                        fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                        lineNumber: 161,\n                        columnNumber: 25\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                lineNumber: 149,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Navbar, \"44O9wNEwX9BktM+/meuF93YLjYY=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL21haW4tcGFnZS1jb21wb25lbnRzL0hlYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBLG9EQUFvRDtBQUNwRCxvRUFBb0U7QUFDcEUsdUNBQXVDO0FBRXZDLHlCQUF5QjtBQUN6QixxREFBcUQ7QUFDckQsb0RBQW9EO0FBRXBELHdCQUF3QjtBQUN4Qix1Q0FBdUM7QUFDdkMsK0NBQStDO0FBQy9DLGFBQWE7QUFFYiwyREFBMkQ7QUFDM0QseUJBQXlCO0FBQ3pCLGtFQUFrRTtBQUNsRSxhQUFhO0FBQ2IsY0FBYztBQUNkLGVBQWU7QUFDZix5QkFBeUI7QUFDekIsNkJBQTZCO0FBQzdCLDBEQUEwRDtBQUMxRCxrQ0FBa0M7QUFDbEMsc0RBQXNEO0FBQ3RELGlFQUFpRTtBQUNqRSw2QkFBNkI7QUFDN0IsOEJBQThCO0FBQzlCLDRCQUE0QjtBQUM1QixnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLHdEQUF3RDtBQUN4RCwwSEFBMEg7QUFDMUgsaUNBQWlDO0FBQ2pDLGdDQUFnQztBQUNoQywrSEFBK0g7QUFDL0gsc0NBQXNDO0FBQ3RDLGdDQUFnQztBQUNoQyw4REFBOEQ7QUFDOUQsc0JBQXNCO0FBQ3RCLGlCQUFpQjtBQUNqQixTQUFTO0FBQ1QsS0FBSztBQUVMLHlCQUF5QjtBQUV6Qix3Q0FBd0M7QUFDaUQ7QUFDdkM7QUFFbEQsdUJBQXVCO0FBQ3ZCLE1BQU1TLFVBQVU7SUFDWjtRQUFFQyxJQUFJO1FBQUdDLE9BQU87UUFBZ0JDLE1BQU07SUFBaUI7SUFDdkQ7UUFBRUYsSUFBSTtRQUFHQyxPQUFPO1FBQWVDLE1BQU07SUFBYTtJQUNsRDtRQUFFRixJQUFJO1FBQUdDLE9BQU87UUFBeUJDLE1BQU07SUFBdUI7SUFDdEU7UUFBRUYsSUFBSTtRQUFHQyxPQUFPO1FBQVNDLE1BQU07SUFBTztJQUN0QztRQUFFRixJQUFJO1FBQUdDLE9BQU87UUFBY0MsTUFBTTtJQUFRO0lBQzVDO1FBQUVG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QUFLO3VCQWpCSjhCLEdBQUcvQixFQUFFOzs7Ozs7Ozs7Ozs7QUFnQ3RDO0dBbklNRzs7UUFDMkJULDJEQUFhQTs7O0tBRHhDUztBQXFJTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9tYWluLXBhZ2UtY29tcG9uZW50cy9IZWFkZXIuanM/YjMxZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbi8vIGltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCB7IEZsZXgsIExpbmsgYXMgQ2hha3JhTGluaywgQm94IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG4vLyBpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcblxuLy8gY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuLy8gICAgIGNvbnN0IFtpc1N0aWNreSwgc2V0U3RpY2t5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbi8vICAgICAvLyBjb25zdCBbc2Nyb2xsWSwgc2V0U2Nyb2xsWV0gPSB1c2VTdGF0ZSgwKTtcblxuLy8gICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbi8vICAgICAgICAgICAgIHNldFN0aWNreSh3aW5kb3cuc2Nyb2xsWSA+IDEwMCk7XG4vLyAgICAgICAgIH07XG5cbi8vICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4vLyAgICAgICAgIHJldHVybiAoKSA9PiB7XG4vLyAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbi8vICAgICAgICAgfTtcbi8vICAgICB9LCBbXSk7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPEJveCBhcz1cIm5hdlwiIFxuLy8gICAgICAgICBwb3NpdGlvbj1cInN0aWNreVwiIFxuLy8gICAgICAgICAgICAgdG9wPXswfSBsZWZ0PXswfSByaWdodD17MH0gYmc9XCJ0cmFuc3BhcmVudFwiXG4vLyAgICAgICAgICAgICAvLyAgekluZGV4PVwic3RpY2t5XCJcbi8vICAgICAgICAgICAgIHRyYW5zaXRpb249XCJ0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dFwiXG4vLyAgICAgICAgICAgICB0cmFuc2Zvcm09e2B0cmFuc2xhdGVZKCR7aXNTdGlja3kgPyAwIDogJzEwMCUnfSlgfVxuLy8gICAgICAgICAgICAgYm94U2hhZG93PVwibWRcIlxuLy8gICAgICAgICAvLyBiZz1cInRyYW5zcGFyZW50XCJcbi8vICAgICAgICAgLy8gY29sb3I9XCJ3aGl0ZVwiIFxuLy8gICAgICAgICBwPXs0fVxuLy8gICAgICAgICA+XG4vLyAgICAgICAgICAgICA8RmxleCBqdXN0aWZ5PVwic3BhY2UtYXJvdW5kXCIgd3JhcD1cIndyYXBcIj5cbi8vICAgICAgICAgICAgICAgICA8Q2hha3JhTGluayBhcz17TGlua30gdG89XCJ0b3BCYW5uZXJcIiBzbW9vdGg9e3RydWV9IGR1cmF0aW9uPXs1MDB9IHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IHB4PXsyfT5cbi8vICAgICAgICAgICAgICAgICAgICAgVG9wIEJhbm5lclxuLy8gICAgICAgICAgICAgICAgIDwvQ2hha3JhTGluaz5cbi8vICAgICAgICAgICAgICAgICA8Q2hha3JhTGluayBhcz17TGlua30gdG89XCJ0b3BEZXNjcmlwdGlvblwiIHNtb290aD17dHJ1ZX0gZHVyYXRpb249ezUwMH0gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gcHg9ezJ9PlxuLy8gICAgICAgICAgICAgICAgICAgICBUb3AgRGVzY3JpcHRpb25cbi8vICAgICAgICAgICAgICAgICA8L0NoYWtyYUxpbms+XG4vLyAgICAgICAgICAgICAgICAgey8qIEFkZCBtb3JlIENoYWtyYUxpbmsgaXRlbXMgYXMgbmVlZGVkICovfVxuLy8gICAgICAgICAgICAgPC9GbGV4PlxuLy8gICAgICAgICA8L0JveD5cbi8vICAgICApO1xuLy8gfTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuXG4vLyBJbXBvcnQgbmVjZXNzYXJ5IENoYWtyYSBVSSBjb21wb25lbnRzXG5pbXBvcnQgeyBCb3gsIEZsZXgsIFRleHQsIEJ1dHRvbiwgdXNlRGlzY2xvc3VyZSwgU3BhY2VyLCBIU3RhY2t9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgTGluayBhcyBTY3JvbGxMaW5rIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcblxuLy8gWW91ciBuYXZpZ2F0aW9uIGRhdGFcbmNvbnN0IG5hdkRhdGEgPSBbXG4gICAgeyBpZDogMSwgdGl0bGU6IFwiRHlpbmcgVGVtcGxlXCIsIHBhdGg6IFwidG9wRGVzY3JpcHRpb25cIiB9LFxuICAgIHsgaWQ6IDIsIHRpdGxlOiBcIkZyZWUgVGVtcGxlXCIsIHBhdGg6IFwiZnJlZXRlbXBsZVwiIH0sXG4gICAgeyBpZDogMywgdGl0bGU6IFwiSGVhcnRicmVha2luZyBTdG9yaWVzXCIsIHBhdGg6IFwiaGVhcnRicmVha2luZ1N0b3JpZXNcIiB9LFxuICAgIHsgaWQ6IDQsIHRpdGxlOiBcIkhSJkNFXCIsIHBhdGg6IFwiaHJjZVwiIH0sXG4gICAgeyBpZDogNSwgdGl0bGU6IFwiUGFzdCBHbG9yeVwiLCBwYXRoOiBcImdsb3J5XCIgfSxcbiAgICB7IGlkOiA2LCB0aXRsZTogXCJHZXQgSW4gVG91Y2hcIiwgcGF0aDogXCJcIiB9LFxuICAgIHsgaWQ6IDcsIHRpdGxlOiBcIk1lZGlhXCIsIHBhdGg6IFwibWVkaWFcIiB9LFxuXTtcblxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaXNPcGVuLCBvblRvZ2dsZSB9ID0gdXNlRGlzY2xvc3VyZSgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHsvKiBEZXNrdG9wIE5hdmJhciAqL31cbiAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgYXM9XCJuYXZcIlxuICAgICAgICAgICAgICAgIGlkPSdhYmMnXG4gICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICB3cmFwPVwid3JhcFwiXG4gICAgICAgICAgICAgICAgdz1cIjE0NTBweFwiXG4gICAgICAgICAgICAgICAgcD17NH1cbiAgICAgICAgICAgICAgICAvLyBiZz1cImN1c3RvbUJyb3duXCJcbiAgICAgICAgICAgICAgICBiZz1cInJnYmEoMTAxLCA2NywgMzMsIDAuOClcIiAvLyBEYXJrIGJyb3duIGNvbG9yIHdpdGggODAlIG9wYWNpdHlcbiAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbj17XCJmaXhlZFwifVxuICAgICAgICAgICAgICAgIHRvcD17JzAnfVxuICAgICAgICAgICAgICAgIHpJbmRleD17OTk5fVxuICAgICAgICAgICAgICAgIGJveFNoYWRvdz1cIm1kXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Qm94IGRpc3BsYXk9e3sgYmFzZTogJ2Jsb2NrJywgbWQ6ICdub25lJyB9fSBvbkNsaWNrPXtvblRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEycHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1yPVwiMTJweFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5NZW51PC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMCAwaDIwdjIwSDBWMHpcIiBmaWxsPVwibm9uZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0yLjUgNWgxNU0yLjUgMTBoMTVtLTE1IDVoMTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPEhTdGFja1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PXt7IGJhc2U6IGlzT3BlbiA/ICdibG9jaycgOiAnbm9uZScsIG1kOiAnZmxleCcgfX1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3sgYmFzZTogJ2Z1bGwnLCBtZDogJ2F1dG8nIH19XG4gICAgICAgICAgICAgICAgICAgIC8vIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAvLyBmbGV4R3Jvdz17MX1cbiAgICAgICAgICAgICAgICAgICAgbWw9e3tiYXNlOiAnYXV0bycsIG1kOiAnMjBweCd9fVxuICAgICAgICAgICAgICAgICAgICAvLyBqdXN0aWZ5PVwic3BhY2UtYXJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3BhY2UteD17NDB9XG4gICAgICAgICAgICAgICAgICAgIC8vIG1yPXs0MH1cbiAgICAgICAgICAgICAgICAgICAgLy8gd3JhcD1cIndyYXBcIlxuICAgICAgICAgICAgICAgICAgICAvLyBzcGFjaW5nPXsnMjBweCd9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7bmF2RGF0YS5tYXAoKGVsLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTY3JvbGxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtlbC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17ZWwucGF0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcHk9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PXstNjh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJ0ZXh0LVsjZmFjNjU0XVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHg9ezJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHk9ezJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1yPXtpbmRleCAhPT0gbmF2RGF0YS5sZW5ndGggLSAxID8gNCA6IDB9IC8vIEFkZCBtYXJnaW4gdG8gdGhlIHJpZ2h0IGV4Y2VwdCBmb3IgdGhlIGxhc3QgaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9ob3Zlcj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZWJkMmMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TY3JvbGxMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYWNlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvSFN0YWNrPlxuICAgICAgICAgICAgICAgIDxCb3ggZGlzcGxheT17eyBiYXNlOiBpc09wZW4gPyAnYmxvY2snIDogJ25vbmUnLCBtZDogJ2Jsb2NrJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBiZz1cIiNmZWJkMmNcIiBjb2xvcj1cImJsYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBFbmdsaXNoXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9GbGV4PlxuXG4gICAgICAgICAgICB7LyogTW9iaWxlIE5hdmJhciAqL31cbiAgICAgICAgICAgIHtpc09wZW4gJiYgKFxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheT17eyBiYXNlOiAnYmxvY2snLCBtZDogJ25vbmUnIH19XG4gICAgICAgICAgICAgICAgICAgIGJnPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj17XCJmaXhlZFwifVxuICAgICAgICAgICAgICAgICAgICB0b3A9ezB9XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ9ezB9XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0PXswfVxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg9XCIxMDBcIlxuICAgICAgICAgICAgICAgICAgICBwPXs0fVxuICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c9XCJtZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7bmF2RGF0YS5tYXAoKGVsKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsTGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZWwuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e2VsLnBhdGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldD17LTY4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzPVwidGV4dC1bI2ZhYzY1NF1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uVG9nZ2xlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHk9ezJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9ob3Zlcj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZWJkMmMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TY3JvbGxMaW5rPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7LyogPHN0eWxlIGdsb2JhbCBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgI2FiYyB7XG4gICAgICAgICAgICBwb3NpdGlvbiA6IGZpeGVkO1xuICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPiAqL31cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdLCJuYW1lcyI6WyJCb3giLCJGbGV4IiwiVGV4dCIsIkJ1dHRvbiIsInVzZURpc2Nsb3N1cmUiLCJTcGFjZXIiLCJIU3RhY2siLCJMaW5rIiwiU2Nyb2xsTGluayIsIm5hdkRhdGEiLCJpZCIsInRpdGxlIiwicGF0aCIsIk5hdmJhciIsImlzT3BlbiIsIm9uVG9nZ2xlIiwiYXMiLCJhbGlnbiIsImp1c3RpZnkiLCJ3cmFwIiwidyIsInAiLCJiZyIsImNvbG9yIiwicG9zaXRpb24iLCJ0b3AiLCJ6SW5kZXgiLCJib3hTaGFkb3ciLCJkaXNwbGF5IiwiYmFzZSIsIm1kIiwib25DbGljayIsInN2ZyIsImZpbGwiLCJ3aWR0aCIsInZpZXdCb3giLCJ4bWxucyIsIm1yIiwiZCIsIm1sIiwibWFwIiwiZWwiLCJpbmRleCIsInRvIiwic21vb3RoIiwiZHVyYXRpb24iLCJzcHkiLCJvZmZzZXQiLCJhY3RpdmVDbGFzcyIsInB4IiwicHkiLCJmb250V2VpZ2h0IiwibGVuZ3RoIiwiX2hvdmVyIiwidGV4dERlY29yYXRpb24iLCJsZWZ0IiwicmlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/main-page-components/Header.js\n"));

/***/ })

});