"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/os-homedir";
exports.ids = ["vendor-chunks/os-homedir"];
exports.modules = {

/***/ "(ssr)/./node_modules/os-homedir/index.js":
/*!******************************************!*\
  !*** ./node_modules/os-homedir/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar os = __webpack_require__(/*! os */ \"os\");\nfunction homedir() {\n    var env = process.env;\n    var home = env.HOME;\n    var user = env.LOGNAME || env.USER || env.LNAME || env.USERNAME;\n    if (process.platform === \"win32\") {\n        return env.USERPROFILE || env.HOMEDRIVE + env.HOMEPATH || home || null;\n    }\n    if (process.platform === \"darwin\") {\n        return home || (user ? \"/Users/\" + user : null);\n    }\n    if (process.platform === \"linux\") {\n        return home || (process.getuid() === 0 ? \"/root\" : user ? \"/home/\" + user : null);\n    }\n    return home || null;\n}\nmodule.exports = typeof os.homedir === \"function\" ? os.homedir : homedir;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvb3MtaG9tZWRpci9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUlBLEtBQUtDLG1CQUFPQSxDQUFDO0FBRWpCLFNBQVNDO0lBQ1IsSUFBSUMsTUFBTUMsUUFBUUQsR0FBRztJQUNyQixJQUFJRSxPQUFPRixJQUFJRyxJQUFJO0lBQ25CLElBQUlDLE9BQU9KLElBQUlLLE9BQU8sSUFBSUwsSUFBSU0sSUFBSSxJQUFJTixJQUFJTyxLQUFLLElBQUlQLElBQUlRLFFBQVE7SUFFL0QsSUFBSVAsUUFBUVEsUUFBUSxLQUFLLFNBQVM7UUFDakMsT0FBT1QsSUFBSVUsV0FBVyxJQUFJVixJQUFJVyxTQUFTLEdBQUdYLElBQUlZLFFBQVEsSUFBSVYsUUFBUTtJQUNuRTtJQUVBLElBQUlELFFBQVFRLFFBQVEsS0FBSyxVQUFVO1FBQ2xDLE9BQU9QLFFBQVNFLENBQUFBLE9BQU8sWUFBWUEsT0FBTyxJQUFHO0lBQzlDO0lBRUEsSUFBSUgsUUFBUVEsUUFBUSxLQUFLLFNBQVM7UUFDakMsT0FBT1AsUUFBU0QsQ0FBQUEsUUFBUVksTUFBTSxPQUFPLElBQUksVUFBV1QsT0FBTyxXQUFXQSxPQUFPLElBQUk7SUFDbEY7SUFFQSxPQUFPRixRQUFRO0FBQ2hCO0FBRUFZLE9BQU9DLE9BQU8sR0FBRyxPQUFPbEIsR0FBR0UsT0FBTyxLQUFLLGFBQWFGLEdBQUdFLE9BQU8sR0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb3MtaG9tZWRpci9pbmRleC5qcz8xNWNlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbnZhciBvcyA9IHJlcXVpcmUoJ29zJyk7XG5cbmZ1bmN0aW9uIGhvbWVkaXIoKSB7XG5cdHZhciBlbnYgPSBwcm9jZXNzLmVudjtcblx0dmFyIGhvbWUgPSBlbnYuSE9NRTtcblx0dmFyIHVzZXIgPSBlbnYuTE9HTkFNRSB8fCBlbnYuVVNFUiB8fCBlbnYuTE5BTUUgfHwgZW52LlVTRVJOQU1FO1xuXG5cdGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInKSB7XG5cdFx0cmV0dXJuIGVudi5VU0VSUFJPRklMRSB8fCBlbnYuSE9NRURSSVZFICsgZW52LkhPTUVQQVRIIHx8IGhvbWUgfHwgbnVsbDtcblx0fVxuXG5cdGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnZGFyd2luJykge1xuXHRcdHJldHVybiBob21lIHx8ICh1c2VyID8gJy9Vc2Vycy8nICsgdXNlciA6IG51bGwpO1xuXHR9XG5cblx0aWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICdsaW51eCcpIHtcblx0XHRyZXR1cm4gaG9tZSB8fCAocHJvY2Vzcy5nZXR1aWQoKSA9PT0gMCA/ICcvcm9vdCcgOiAodXNlciA/ICcvaG9tZS8nICsgdXNlciA6IG51bGwpKTtcblx0fVxuXG5cdHJldHVybiBob21lIHx8IG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIG9zLmhvbWVkaXIgPT09ICdmdW5jdGlvbicgPyBvcy5ob21lZGlyIDogaG9tZWRpcjtcbiJdLCJuYW1lcyI6WyJvcyIsInJlcXVpcmUiLCJob21lZGlyIiwiZW52IiwicHJvY2VzcyIsImhvbWUiLCJIT01FIiwidXNlciIsIkxPR05BTUUiLCJVU0VSIiwiTE5BTUUiLCJVU0VSTkFNRSIsInBsYXRmb3JtIiwiVVNFUlBST0ZJTEUiLCJIT01FRFJJVkUiLCJIT01FUEFUSCIsImdldHVpZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/os-homedir/index.js\n");

/***/ })

};
;