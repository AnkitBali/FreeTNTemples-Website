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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/hooks/dist/chunk-7JBTTEVG.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-KRPLQIP4.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/button/dist/chunk-UVUR7MCU.mjs\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll */ \"(app-pages-browser)/./node_modules/react-scroll/modules/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// import React, {useEffect, useState} from 'react';\n// import { Flex, Link as ChakraLink, Box } from '@chakra-ui/react';\n// import { Link } from 'react-scroll';\n// const Header = () => {\n//     const [isSticky, setSticky] = useState(false);\n//     // const [scrollY, setScrollY] = useState(0);\n//     useEffect(() => {\n//         const handleScroll = () => {\n//             setSticky(window.scrollY > 100);\n//         };\n//         window.addEventListener('scroll', handleScroll);\n//         return () => {\n//             window.removeEventListener('scroll', handleScroll);\n//         };\n//     }, []);\n//     return (\n//         <Box as=\"nav\" \n//         position=\"sticky\" \n//             top={0} left={0} right={0} bg=\"transparent\"\n//             //  zIndex=\"sticky\"\n//             transition=\"transform 0.3s ease-in-out\"\n//             transform={`translateY(${isSticky ? 0 : '100%'})`}\n//             boxShadow=\"md\"\n//         // bg=\"transparent\"\n//         // color=\"white\" \n//         p={4}\n//         >\n//             <Flex justify=\"space-around\" wrap=\"wrap\">\n//                 <ChakraLink as={Link} to=\"topBanner\" smooth={true} duration={500} style={{ cursor: 'pointer' }} px={2}>\n//                     Top Banner\n//                 </ChakraLink>\n//                 <ChakraLink as={Link} to=\"topDescription\" smooth={true} duration={500} style={{ cursor: 'pointer' }} px={2}>\n//                     Top Description\n//                 </ChakraLink>\n//                 {/* Add more ChakraLink items as needed */}\n//             </Flex>\n//         </Box>\n//     );\n// };\n// export default Header;\n// Import necessary Chakra UI components\n\n\n// Your navigation data\nconst navData = [\n    {\n        id: 1,\n        title: \"Dying Temple\",\n        path: \"topDescription\"\n    },\n    {\n        id: 2,\n        title: \"Free Temple\",\n        path: \"freetemple\"\n    },\n    {\n        id: 3,\n        title: \"Heartbreaking Stories\",\n        path: \"heartbreakingStories\"\n    },\n    {\n        id: 4,\n        title: \"HR&CE\",\n        path: \"hrce\"\n    },\n    {\n        id: 5,\n        title: \"Past Glory\",\n        path: \"glory\"\n    },\n    {\n        id: 6,\n        title: \"Get In Touch\",\n        path: \"\"\n    },\n    {\n        id: 7,\n        title: \"Media\",\n        path: \"media\"\n    }\n];\nconst Navbar = ()=>{\n    _s();\n    const { isOpen, onToggle } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                as: \"nav\",\n                id: \"abc\",\n                align: \"center\",\n                justify: \"space-between\",\n                wrap: \"wrap\",\n                w: \"1450px\",\n                p: 4,\n                // bg=\"customBrown\"\n                bg: \"rgba(101, 67, 33, 0.8)\" // Dark brown color with 80% opacity\n                ,\n                color: \"white\",\n                position: \"fixed\",\n                top: \"0\",\n                zIndex: 999,\n                boxShadow: \"md\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                        display: {\n                            base: \"block\",\n                            md: \"none\"\n                        },\n                        onClick: onToggle,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            fill: \"white\",\n                            width: \"12px\",\n                            viewBox: \"0 0 20 20\",\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            mr: \"12px\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                                    children: \"Menu\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    d: \"M0 0h20v20H0V0z\",\n                                    fill: \"none\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                                    lineNumber: 94,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    fill: \"white\",\n                                    d: \"M2.5 5h15M2.5 10h15m-15 5h15\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                            lineNumber: 86,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                        display: {\n                            base: isOpen ? \"block\" : \"none\",\n                            md: \"flex\"\n                        },\n                        width: {\n                            base: \"full\",\n                            md: \"auto\"\n                        },\n                        alignItems: \"center\",\n                        flexGrow: 1,\n                        children: navData.map((el)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                                to: el.path,\n                                smooth: true,\n                                duration: 500,\n                                spy: true,\n                                offset: -68,\n                                activeClass: \"text-[#fac654]\",\n                                px: 12,\n                                py: 12,\n                                fontWeight: \"bold\",\n                                color: \"white\",\n                                _hover: {\n                                    textDecoration: \"none\",\n                                    color: \"#febd2c\"\n                                },\n                                children: el.title\n                            }, el.id, false, {\n                                fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                                lineNumber: 108,\n                                columnNumber: 25\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                        lineNumber: 101,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                        display: {\n                            base: isOpen ? \"block\" : \"none\",\n                            md: \"block\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                            bg: \"#febd2c\",\n                            color: \"black\",\n                            children: \"English\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                            lineNumber: 130,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                        lineNumber: 129,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, undefined),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                display: {\n                    base: \"block\",\n                    md: \"none\"\n                },\n                bg: \"white\",\n                position: \"fixed\",\n                top: 0,\n                left: 0,\n                right: 0,\n                zIndex: \"100\",\n                p: 4,\n                boxShadow: \"md\",\n                children: navData.map((el)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                        to: el.path,\n                        smooth: true,\n                        duration: 500,\n                        spy: true,\n                        offset: -68,\n                        activeClass: \"text-[#fac654]\",\n                        onClick: onToggle,\n                        display: \"block\",\n                        py: 2,\n                        fontWeight: \"bold\",\n                        color: \"black\",\n                        _hover: {\n                            textDecoration: \"none\",\n                            color: \"#febd2c\"\n                        },\n                        children: el.title\n                    }, el.id, false, {\n                        fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                        lineNumber: 150,\n                        columnNumber: 25\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/ankitbali/Desktop/Next-setup/app/components/main-page-components/Header.js\",\n                lineNumber: 138,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Navbar, \"44O9wNEwX9BktM+/meuF93YLjYY=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL21haW4tcGFnZS1jb21wb25lbnRzL0hlYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQSxvREFBb0Q7QUFDcEQsb0VBQW9FO0FBQ3BFLHVDQUF1QztBQUV2Qyx5QkFBeUI7QUFDekIscURBQXFEO0FBQ3JELG9EQUFvRDtBQUVwRCx3QkFBd0I7QUFDeEIsdUNBQXVDO0FBQ3ZDLCtDQUErQztBQUMvQyxhQUFhO0FBRWIsMkRBQTJEO0FBQzNELHlCQUF5QjtBQUN6QixrRUFBa0U7QUFDbEUsYUFBYTtBQUNiLGNBQWM7QUFDZCxlQUFlO0FBQ2YseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3QiwwREFBMEQ7QUFDMUQsa0NBQWtDO0FBQ2xDLHNEQUFzRDtBQUN0RCxpRUFBaUU7QUFDakUsNkJBQTZCO0FBQzdCLDhCQUE4QjtBQUM5Qiw0QkFBNEI7QUFDNUIsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWix3REFBd0Q7QUFDeEQsMEhBQTBIO0FBQzFILGlDQUFpQztBQUNqQyxnQ0FBZ0M7QUFDaEMsK0hBQStIO0FBQy9ILHNDQUFzQztBQUN0QyxnQ0FBZ0M7QUFDaEMsOERBQThEO0FBQzlELHNCQUFzQjtBQUN0QixpQkFBaUI7QUFDakIsU0FBUztBQUNULEtBQUs7QUFFTCx5QkFBeUI7QUFFekIsd0NBQXdDO0FBQ2lDO0FBQ3ZCO0FBRWxELHVCQUF1QjtBQUN2QixNQUFNTyxVQUFVO0lBQ1o7UUFBRUMsSUFBSTtRQUFHQyxPQUFPO1FBQWdCQyxNQUFNO0lBQWlCO0lBQ3ZEO1FBQUVGLElBQUk7UUFBR0MsT0FBTztRQUFlQyxNQUFNO0lBQWE7SUFDbEQ7UUFBRUYsSUFBSTtRQUFHQyxPQUFPO1FBQXlCQyxNQUFNO0lBQXVCO0lBQ3RFO1FBQUVGLElBQUk7UUFBR0MsT0FBTztRQUFTQyxNQUFNO0lBQU87SUFDdEM7UUFBRUYsSUFBSTtRQUFHQyxPQUFPO1FBQWNDLE1BQU07SUFBUTtJQUM1QztRQUFFRixJ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ZW50cy9tYWluLXBhZ2UtY29tcG9uZW50cy9IZWFkZXIuanM/YjMxZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbi8vIGltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCB7IEZsZXgsIExpbmsgYXMgQ2hha3JhTGluaywgQm94IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG4vLyBpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcblxuLy8gY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuLy8gICAgIGNvbnN0IFtpc1N0aWNreSwgc2V0U3RpY2t5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbi8vICAgICAvLyBjb25zdCBbc2Nyb2xsWSwgc2V0U2Nyb2xsWV0gPSB1c2VTdGF0ZSgwKTtcblxuLy8gICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbi8vICAgICAgICAgICAgIHNldFN0aWNreSh3aW5kb3cuc2Nyb2xsWSA+IDEwMCk7XG4vLyAgICAgICAgIH07XG5cbi8vICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4vLyAgICAgICAgIHJldHVybiAoKSA9PiB7XG4vLyAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbi8vICAgICAgICAgfTtcbi8vICAgICB9LCBbXSk7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPEJveCBhcz1cIm5hdlwiIFxuLy8gICAgICAgICBwb3NpdGlvbj1cInN0aWNreVwiIFxuLy8gICAgICAgICAgICAgdG9wPXswfSBsZWZ0PXswfSByaWdodD17MH0gYmc9XCJ0cmFuc3BhcmVudFwiXG4vLyAgICAgICAgICAgICAvLyAgekluZGV4PVwic3RpY2t5XCJcbi8vICAgICAgICAgICAgIHRyYW5zaXRpb249XCJ0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dFwiXG4vLyAgICAgICAgICAgICB0cmFuc2Zvcm09e2B0cmFuc2xhdGVZKCR7aXNTdGlja3kgPyAwIDogJzEwMCUnfSlgfVxuLy8gICAgICAgICAgICAgYm94U2hhZG93PVwibWRcIlxuLy8gICAgICAgICAvLyBiZz1cInRyYW5zcGFyZW50XCJcbi8vICAgICAgICAgLy8gY29sb3I9XCJ3aGl0ZVwiIFxuLy8gICAgICAgICBwPXs0fVxuLy8gICAgICAgICA+XG4vLyAgICAgICAgICAgICA8RmxleCBqdXN0aWZ5PVwic3BhY2UtYXJvdW5kXCIgd3JhcD1cIndyYXBcIj5cbi8vICAgICAgICAgICAgICAgICA8Q2hha3JhTGluayBhcz17TGlua30gdG89XCJ0b3BCYW5uZXJcIiBzbW9vdGg9e3RydWV9IGR1cmF0aW9uPXs1MDB9IHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IHB4PXsyfT5cbi8vICAgICAgICAgICAgICAgICAgICAgVG9wIEJhbm5lclxuLy8gICAgICAgICAgICAgICAgIDwvQ2hha3JhTGluaz5cbi8vICAgICAgICAgICAgICAgICA8Q2hha3JhTGluayBhcz17TGlua30gdG89XCJ0b3BEZXNjcmlwdGlvblwiIHNtb290aD17dHJ1ZX0gZHVyYXRpb249ezUwMH0gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gcHg9ezJ9PlxuLy8gICAgICAgICAgICAgICAgICAgICBUb3AgRGVzY3JpcHRpb25cbi8vICAgICAgICAgICAgICAgICA8L0NoYWtyYUxpbms+XG4vLyAgICAgICAgICAgICAgICAgey8qIEFkZCBtb3JlIENoYWtyYUxpbmsgaXRlbXMgYXMgbmVlZGVkICovfVxuLy8gICAgICAgICAgICAgPC9GbGV4PlxuLy8gICAgICAgICA8L0JveD5cbi8vICAgICApO1xuLy8gfTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuXG4vLyBJbXBvcnQgbmVjZXNzYXJ5IENoYWtyYSBVSSBjb21wb25lbnRzXG5pbXBvcnQgeyBCb3gsIEZsZXgsIFRleHQsIEJ1dHRvbiwgdXNlRGlzY2xvc3VyZX0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyBMaW5rIGFzIFNjcm9sbExpbmsgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xuXG4vLyBZb3VyIG5hdmlnYXRpb24gZGF0YVxuY29uc3QgbmF2RGF0YSA9IFtcbiAgICB7IGlkOiAxLCB0aXRsZTogXCJEeWluZyBUZW1wbGVcIiwgcGF0aDogXCJ0b3BEZXNjcmlwdGlvblwiIH0sXG4gICAgeyBpZDogMiwgdGl0bGU6IFwiRnJlZSBUZW1wbGVcIiwgcGF0aDogXCJmcmVldGVtcGxlXCIgfSxcbiAgICB7IGlkOiAzLCB0aXRsZTogXCJIZWFydGJyZWFraW5nIFN0b3JpZXNcIiwgcGF0aDogXCJoZWFydGJyZWFraW5nU3Rvcmllc1wiIH0sXG4gICAgeyBpZDogNCwgdGl0bGU6IFwiSFImQ0VcIiwgcGF0aDogXCJocmNlXCIgfSxcbiAgICB7IGlkOiA1LCB0aXRsZTogXCJQYXN0IEdsb3J5XCIsIHBhdGg6IFwiZ2xvcnlcIiB9LFxuICAgIHsgaWQ6IDYsIHRpdGxlOiBcIkdldCBJbiBUb3VjaFwiLCBwYXRoOiBcIlwiIH0sXG4gICAgeyBpZDogNywgdGl0bGU6IFwiTWVkaWFcIiwgcGF0aDogXCJtZWRpYVwiIH0sXG5dO1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBpc09wZW4sIG9uVG9nZ2xlIH0gPSB1c2VEaXNjbG9zdXJlKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgey8qIERlc2t0b3AgTmF2YmFyICovfVxuICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICBhcz1cIm5hdlwiXG4gICAgICAgICAgICAgICAgaWQ9J2FiYydcbiAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgICAgIHdyYXA9XCJ3cmFwXCJcbiAgICAgICAgICAgICAgICB3PVwiMTQ1MHB4XCJcbiAgICAgICAgICAgICAgICBwPXs0fVxuICAgICAgICAgICAgICAgIC8vIGJnPVwiY3VzdG9tQnJvd25cIlxuICAgICAgICAgICAgICAgIGJnPVwicmdiYSgxMDEsIDY3LCAzMywgMC44KVwiIC8vIERhcmsgYnJvd24gY29sb3Igd2l0aCA4MCUgb3BhY2l0eVxuICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPXtcImZpeGVkXCJ9XG4gICAgICAgICAgICAgICAgdG9wPXsnMCd9XG4gICAgICAgICAgICAgICAgekluZGV4PXs5OTl9XG4gICAgICAgICAgICAgICAgYm94U2hhZG93PVwibWRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCb3ggZGlzcGxheT17eyBiYXNlOiAnYmxvY2snLCBtZDogJ25vbmUnIH19IG9uQ2xpY2s9e29uVG9nZ2xlfT5cbiAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTJweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbXI9XCIxMnB4XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPk1lbnU8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0wIDBoMjB2MjBIMFYwelwiIGZpbGw9XCJub25lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTIuNSA1aDE1TTIuNSAxMGgxNW0tMTUgNWgxNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9e3sgYmFzZTogaXNPcGVuID8gJ2Jsb2NrJyA6ICdub25lJywgbWQ6ICdmbGV4JyB9fVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17eyBiYXNlOiAnZnVsbCcsIG1kOiAnYXV0bycgfX1cbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIGZsZXhHcm93PXsxfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge25hdkRhdGEubWFwKChlbCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFNjcm9sbExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2VsLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtlbC5wYXRofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ9ey02OH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cInRleHQtWyNmYWM2NTRdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBweD17MTJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHk9ezEyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaG92ZXI9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmViZDJjJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbC50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2Nyb2xsTGluaz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveCBkaXNwbGF5PXt7IGJhc2U6IGlzT3BlbiA/ICdibG9jaycgOiAnbm9uZScsIG1kOiAnYmxvY2snIH19PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGJnPVwiI2ZlYmQyY1wiIGNvbG9yPVwiYmxhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEVuZ2xpc2hcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0ZsZXg+XG5cbiAgICAgICAgICAgIHsvKiBNb2JpbGUgTmF2YmFyICovfVxuICAgICAgICAgICAge2lzT3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PXt7IGJhc2U6ICdibG9jaycsIG1kOiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgICAgICAgYmc9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPXtcImZpeGVkXCJ9XG4gICAgICAgICAgICAgICAgICAgIHRvcD17MH1cbiAgICAgICAgICAgICAgICAgICAgbGVmdD17MH1cbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ9ezB9XG4gICAgICAgICAgICAgICAgICAgIHpJbmRleD1cIjEwMFwiXG4gICAgICAgICAgICAgICAgICAgIHA9ezR9XG4gICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdz1cIm1kXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtuYXZEYXRhLm1hcCgoZWwpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtlbC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17ZWwucGF0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcHk9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PXstNjh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJ0ZXh0LVsjZmFjNjU0XVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25Ub2dnbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheT1cImJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBweT17Mn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJibGFja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2hvdmVyPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZlYmQyYycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWwudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHsvKiA8c3R5bGUgZ2xvYmFsIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAjYWJjIHtcbiAgICAgICAgICAgIHBvc2l0aW9uIDogZml4ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+ICovfVxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl0sIm5hbWVzIjpbIkJveCIsIkZsZXgiLCJUZXh0IiwiQnV0dG9uIiwidXNlRGlzY2xvc3VyZSIsIkxpbmsiLCJTY3JvbGxMaW5rIiwibmF2RGF0YSIsImlkIiwidGl0bGUiLCJwYXRoIiwiTmF2YmFyIiwiaXNPcGVuIiwib25Ub2dnbGUiLCJhcyIsImFsaWduIiwianVzdGlmeSIsIndyYXAiLCJ3IiwicCIsImJnIiwiY29sb3IiLCJwb3NpdGlvbiIsInRvcCIsInpJbmRleCIsImJveFNoYWRvdyIsImRpc3BsYXkiLCJiYXNlIiwibWQiLCJvbkNsaWNrIiwic3ZnIiwiZmlsbCIsIndpZHRoIiwidmlld0JveCIsInhtbG5zIiwibXIiLCJkIiwiYWxpZ25JdGVtcyIsImZsZXhHcm93IiwibWFwIiwiZWwiLCJ0byIsInNtb290aCIsImR1cmF0aW9uIiwic3B5Iiwib2Zmc2V0IiwiYWN0aXZlQ2xhc3MiLCJweCIsInB5IiwiZm9udFdlaWdodCIsIl9ob3ZlciIsInRleHREZWNvcmF0aW9uIiwibGVmdCIsInJpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/main-page-components/Header.js\n"));

/***/ })

});