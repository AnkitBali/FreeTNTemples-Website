"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/xdg-basedir";
exports.ids = ["vendor-chunks/xdg-basedir"];
exports.modules = {

/***/ "(ssr)/./node_modules/xdg-basedir/index.js":
/*!*******************************************!*\
  !*** ./node_modules/xdg-basedir/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nvar path = __webpack_require__(/*! path */ \"path\");\nvar osHomedir = __webpack_require__(/*! os-homedir */ \"(ssr)/./node_modules/os-homedir/index.js\");\nvar home = osHomedir();\nvar env = process.env;\nexports.data = env.XDG_DATA_HOME || (home ? path.join(home, \".local\", \"share\") : null);\nexports.config = env.XDG_CONFIG_HOME || (home ? path.join(home, \".config\") : null);\nexports.cache = env.XDG_CACHE_HOME || (home ? path.join(home, \".cache\") : null);\nexports.runtime = env.XDG_RUNTIME_DIR || null;\nexports.dataDirs = (env.XDG_DATA_DIRS || \"/usr/local/share/:/usr/share/\").split(\":\");\nif (exports.data) {\n    exports.dataDirs.unshift(exports.data);\n}\nexports.configDirs = (env.XDG_CONFIG_DIRS || \"/etc/xdg\").split(\":\");\nif (exports.config) {\n    exports.configDirs.unshift(exports.config);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMveGRnLWJhc2VkaXIvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxJQUFJQSxPQUFPQyxtQkFBT0EsQ0FBQztBQUNuQixJQUFJQyxZQUFZRCxtQkFBT0EsQ0FBQztBQUN4QixJQUFJRSxPQUFPRDtBQUNYLElBQUlFLE1BQU1DLFFBQVFELEdBQUc7QUFFckJFLFlBQVksR0FBR0YsSUFBSUksYUFBYSxJQUM5QkwsQ0FBQUEsT0FBT0gsS0FBS1MsSUFBSSxDQUFDTixNQUFNLFVBQVUsV0FBVyxJQUFHO0FBRWpERyxjQUFjLEdBQUdGLElBQUlPLGVBQWUsSUFDbENSLENBQUFBLE9BQU9ILEtBQUtTLElBQUksQ0FBQ04sTUFBTSxhQUFhLElBQUc7QUFFekNHLGFBQWEsR0FBR0YsSUFBSVMsY0FBYyxJQUFLVixDQUFBQSxPQUFPSCxLQUFLUyxJQUFJLENBQUNOLE1BQU0sWUFBWSxJQUFHO0FBRTdFRyxlQUFlLEdBQUdGLElBQUlXLGVBQWUsSUFBSTtBQUV6Q1QsZ0JBQWdCLEdBQUcsQ0FBQ0YsSUFBSWEsYUFBYSxJQUFJLCtCQUE4QixFQUFHQyxLQUFLLENBQUM7QUFFaEYsSUFBSVosUUFBUUMsSUFBSSxFQUFFO0lBQ2pCRCxRQUFRVSxRQUFRLENBQUNHLE9BQU8sQ0FBQ2IsUUFBUUMsSUFBSTtBQUN0QztBQUVBRCxrQkFBa0IsR0FBRyxDQUFDRixJQUFJaUIsZUFBZSxJQUFJLFVBQVMsRUFBR0gsS0FBSyxDQUFDO0FBRS9ELElBQUlaLFFBQVFJLE1BQU0sRUFBRTtJQUNuQkosUUFBUWMsVUFBVSxDQUFDRCxPQUFPLENBQUNiLFFBQVFJLE1BQU07QUFDMUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveGRnLWJhc2VkaXIvaW5kZXguanM/YTcyZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG52YXIgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbnZhciBvc0hvbWVkaXIgPSByZXF1aXJlKCdvcy1ob21lZGlyJyk7XG52YXIgaG9tZSA9IG9zSG9tZWRpcigpO1xudmFyIGVudiA9IHByb2Nlc3MuZW52O1xuXG5leHBvcnRzLmRhdGEgPSBlbnYuWERHX0RBVEFfSE9NRSB8fFxuXHQoaG9tZSA/IHBhdGguam9pbihob21lLCAnLmxvY2FsJywgJ3NoYXJlJykgOiBudWxsKTtcblxuZXhwb3J0cy5jb25maWcgPSBlbnYuWERHX0NPTkZJR19IT01FIHx8XG5cdChob21lID8gcGF0aC5qb2luKGhvbWUsICcuY29uZmlnJykgOiBudWxsKTtcblxuZXhwb3J0cy5jYWNoZSA9IGVudi5YREdfQ0FDSEVfSE9NRSB8fCAoaG9tZSA/IHBhdGguam9pbihob21lLCAnLmNhY2hlJykgOiBudWxsKTtcblxuZXhwb3J0cy5ydW50aW1lID0gZW52LlhER19SVU5USU1FX0RJUiB8fCBudWxsO1xuXG5leHBvcnRzLmRhdGFEaXJzID0gKGVudi5YREdfREFUQV9ESVJTIHx8ICcvdXNyL2xvY2FsL3NoYXJlLzovdXNyL3NoYXJlLycpLnNwbGl0KCc6Jyk7XG5cbmlmIChleHBvcnRzLmRhdGEpIHtcblx0ZXhwb3J0cy5kYXRhRGlycy51bnNoaWZ0KGV4cG9ydHMuZGF0YSk7XG59XG5cbmV4cG9ydHMuY29uZmlnRGlycyA9IChlbnYuWERHX0NPTkZJR19ESVJTIHx8ICcvZXRjL3hkZycpLnNwbGl0KCc6Jyk7XG5cbmlmIChleHBvcnRzLmNvbmZpZykge1xuXHRleHBvcnRzLmNvbmZpZ0RpcnMudW5zaGlmdChleHBvcnRzLmNvbmZpZyk7XG59XG4iXSwibmFtZXMiOlsicGF0aCIsInJlcXVpcmUiLCJvc0hvbWVkaXIiLCJob21lIiwiZW52IiwicHJvY2VzcyIsImV4cG9ydHMiLCJkYXRhIiwiWERHX0RBVEFfSE9NRSIsImpvaW4iLCJjb25maWciLCJYREdfQ09ORklHX0hPTUUiLCJjYWNoZSIsIlhER19DQUNIRV9IT01FIiwicnVudGltZSIsIlhER19SVU5USU1FX0RJUiIsImRhdGFEaXJzIiwiWERHX0RBVEFfRElSUyIsInNwbGl0IiwidW5zaGlmdCIsImNvbmZpZ0RpcnMiLCJYREdfQ09ORklHX0RJUlMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/xdg-basedir/index.js\n");

/***/ })

};
;