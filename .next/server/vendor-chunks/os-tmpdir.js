"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/os-tmpdir";
exports.ids = ["vendor-chunks/os-tmpdir"];
exports.modules = {

/***/ "(ssr)/./node_modules/os-tmpdir/index.js":
/*!*****************************************!*\
  !*** ./node_modules/os-tmpdir/index.js ***!
  \*****************************************/
/***/ ((module) => {

eval("\nvar isWindows = process.platform === \"win32\";\nvar trailingSlashRe = isWindows ? /[^:]\\\\$/ : /.\\/$/;\n// https://github.com/nodejs/node/blob/3e7a14381497a3b73dda68d05b5130563cdab420/lib/os.js#L25-L43\nmodule.exports = function() {\n    var path;\n    if (isWindows) {\n        path = process.env.TEMP || process.env.TMP || (process.env.SystemRoot || process.env.windir) + \"\\\\temp\";\n    } else {\n        path = process.env.TMPDIR || process.env.TMP || process.env.TEMP || \"/tmp\";\n    }\n    if (trailingSlashRe.test(path)) {\n        path = path.slice(0, -1);\n    }\n    return path;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvb3MtdG1wZGlyL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsSUFBSUEsWUFBWUMsUUFBUUMsUUFBUSxLQUFLO0FBQ3JDLElBQUlDLGtCQUFrQkgsWUFBWSxZQUFZO0FBRTlDLGlHQUFpRztBQUNqR0ksT0FBT0MsT0FBTyxHQUFHO0lBQ2hCLElBQUlDO0lBRUosSUFBSU4sV0FBVztRQUNkTSxPQUFPTCxRQUFRTSxHQUFHLENBQUNDLElBQUksSUFDdEJQLFFBQVFNLEdBQUcsQ0FBQ0UsR0FBRyxJQUNmLENBQUNSLFFBQVFNLEdBQUcsQ0FBQ0csVUFBVSxJQUFJVCxRQUFRTSxHQUFHLENBQUNJLE1BQU0sSUFBSTtJQUNuRCxPQUFPO1FBQ05MLE9BQU9MLFFBQVFNLEdBQUcsQ0FBQ0ssTUFBTSxJQUN4QlgsUUFBUU0sR0FBRyxDQUFDRSxHQUFHLElBQ2ZSLFFBQVFNLEdBQUcsQ0FBQ0MsSUFBSSxJQUNoQjtJQUNGO0lBRUEsSUFBSUwsZ0JBQWdCVSxJQUFJLENBQUNQLE9BQU87UUFDL0JBLE9BQU9BLEtBQUtRLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDdkI7SUFFQSxPQUFPUjtBQUNSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29zLXRtcGRpci9pbmRleC5qcz8xZGYzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbnZhciBpc1dpbmRvd3MgPSBwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInO1xudmFyIHRyYWlsaW5nU2xhc2hSZSA9IGlzV2luZG93cyA/IC9bXjpdXFxcXCQvIDogLy5cXC8kLztcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL2Jsb2IvM2U3YTE0MzgxNDk3YTNiNzNkZGE2OGQwNWI1MTMwNTYzY2RhYjQyMC9saWIvb3MuanMjTDI1LUw0M1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBwYXRoO1xuXG5cdGlmIChpc1dpbmRvd3MpIHtcblx0XHRwYXRoID0gcHJvY2Vzcy5lbnYuVEVNUCB8fFxuXHRcdFx0cHJvY2Vzcy5lbnYuVE1QIHx8XG5cdFx0XHQocHJvY2Vzcy5lbnYuU3lzdGVtUm9vdCB8fCBwcm9jZXNzLmVudi53aW5kaXIpICsgJ1xcXFx0ZW1wJztcblx0fSBlbHNlIHtcblx0XHRwYXRoID0gcHJvY2Vzcy5lbnYuVE1QRElSIHx8XG5cdFx0XHRwcm9jZXNzLmVudi5UTVAgfHxcblx0XHRcdHByb2Nlc3MuZW52LlRFTVAgfHxcblx0XHRcdCcvdG1wJztcblx0fVxuXG5cdGlmICh0cmFpbGluZ1NsYXNoUmUudGVzdChwYXRoKSkge1xuXHRcdHBhdGggPSBwYXRoLnNsaWNlKDAsIC0xKTtcblx0fVxuXG5cdHJldHVybiBwYXRoO1xufTtcbiJdLCJuYW1lcyI6WyJpc1dpbmRvd3MiLCJwcm9jZXNzIiwicGxhdGZvcm0iLCJ0cmFpbGluZ1NsYXNoUmUiLCJtb2R1bGUiLCJleHBvcnRzIiwicGF0aCIsImVudiIsIlRFTVAiLCJUTVAiLCJTeXN0ZW1Sb290Iiwid2luZGlyIiwiVE1QRElSIiwidGVzdCIsInNsaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/os-tmpdir/index.js\n");

/***/ })

};
;