/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/safe-eval";
exports.ids = ["vendor-chunks/safe-eval"];
exports.modules = {

/***/ "(ssr)/./node_modules/safe-eval/index.js":
/*!*****************************************!*\
  !*** ./node_modules/safe-eval/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var vm = __webpack_require__(/*! vm */ \"vm\");\nmodule.exports = function safeEval(code, context, opts) {\n    var sandbox = {};\n    var resultKey = \"SAFE_EVAL_\" + Math.floor(Math.random() * 1000000);\n    sandbox[resultKey] = {};\n    code = resultKey + \"=\" + code;\n    if (context) {\n        Object.keys(context).forEach(function(key) {\n            sandbox[key] = context[key];\n        });\n    }\n    vm.runInNewContext(code, sandbox, opts);\n    return sandbox[resultKey];\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2FmZS1ldmFsL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLElBQUlBLEtBQUtDLG1CQUFPQSxDQUFDO0FBRWpCQyxPQUFPQyxPQUFPLEdBQUcsU0FBU0MsU0FBVUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLElBQUk7SUFDckQsSUFBSUMsVUFBVSxDQUFDO0lBQ2YsSUFBSUMsWUFBWSxlQUFlQyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBSztJQUMxREosT0FBTyxDQUFDQyxVQUFVLEdBQUcsQ0FBQztJQUN0QkosT0FBT0ksWUFBWSxNQUFNSjtJQUN6QixJQUFJQyxTQUFTO1FBQ1hPLE9BQU9DLElBQUksQ0FBQ1IsU0FBU1MsT0FBTyxDQUFDLFNBQVVDLEdBQUc7WUFDeENSLE9BQU8sQ0FBQ1EsSUFBSSxHQUFHVixPQUFPLENBQUNVLElBQUk7UUFDN0I7SUFDRjtJQUNBaEIsR0FBR2lCLGVBQWUsQ0FBQ1osTUFBTUcsU0FBU0Q7SUFDbEMsT0FBT0MsT0FBTyxDQUFDQyxVQUFVO0FBQzNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NhZmUtZXZhbC9pbmRleC5qcz83NTIxIl0sInNvdXJjZXNDb250ZW50IjpbInZhciB2bSA9IHJlcXVpcmUoJ3ZtJylcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzYWZlRXZhbCAoY29kZSwgY29udGV4dCwgb3B0cykge1xuICB2YXIgc2FuZGJveCA9IHt9XG4gIHZhciByZXN1bHRLZXkgPSAnU0FGRV9FVkFMXycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwKVxuICBzYW5kYm94W3Jlc3VsdEtleV0gPSB7fVxuICBjb2RlID0gcmVzdWx0S2V5ICsgJz0nICsgY29kZVxuICBpZiAoY29udGV4dCkge1xuICAgIE9iamVjdC5rZXlzKGNvbnRleHQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgc2FuZGJveFtrZXldID0gY29udGV4dFtrZXldXG4gICAgfSlcbiAgfVxuICB2bS5ydW5Jbk5ld0NvbnRleHQoY29kZSwgc2FuZGJveCwgb3B0cylcbiAgcmV0dXJuIHNhbmRib3hbcmVzdWx0S2V5XVxufVxuIl0sIm5hbWVzIjpbInZtIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJzYWZlRXZhbCIsImNvZGUiLCJjb250ZXh0Iiwib3B0cyIsInNhbmRib3giLCJyZXN1bHRLZXkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInJ1bkluTmV3Q29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/safe-eval/index.js\n");

/***/ })

};
;