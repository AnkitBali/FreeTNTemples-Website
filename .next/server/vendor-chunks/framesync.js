"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/framesync";
exports.ids = ["vendor-chunks/framesync"];
exports.modules = {

/***/ "(ssr)/./node_modules/framesync/dist/es/create-render-step.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/framesync/dist/es/create-render-step.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createRenderStep: () => (/* binding */ createRenderStep)\n/* harmony export */ });\nfunction createRenderStep(runNextFrame) {\n    let toRun = [];\n    let toRunNextFrame = [];\n    let numToRun = 0;\n    let isProcessing = false;\n    let flushNextFrame = false;\n    const toKeepAlive = new WeakSet();\n    const step = {\n        schedule: (callback, keepAlive = false, immediate = false)=>{\n            const addToCurrentFrame = immediate && isProcessing;\n            const buffer = addToCurrentFrame ? toRun : toRunNextFrame;\n            if (keepAlive) toKeepAlive.add(callback);\n            if (buffer.indexOf(callback) === -1) {\n                buffer.push(callback);\n                if (addToCurrentFrame && isProcessing) numToRun = toRun.length;\n            }\n            return callback;\n        },\n        cancel: (callback)=>{\n            const index = toRunNextFrame.indexOf(callback);\n            if (index !== -1) toRunNextFrame.splice(index, 1);\n            toKeepAlive.delete(callback);\n        },\n        process: (frameData)=>{\n            if (isProcessing) {\n                flushNextFrame = true;\n                return;\n            }\n            isProcessing = true;\n            [toRun, toRunNextFrame] = [\n                toRunNextFrame,\n                toRun\n            ];\n            toRunNextFrame.length = 0;\n            numToRun = toRun.length;\n            if (numToRun) {\n                for(let i = 0; i < numToRun; i++){\n                    const callback = toRun[i];\n                    callback(frameData);\n                    if (toKeepAlive.has(callback)) {\n                        step.schedule(callback);\n                        runNextFrame();\n                    }\n                }\n            }\n            isProcessing = false;\n            if (flushNextFrame) {\n                flushNextFrame = false;\n                step.process(frameData);\n            }\n        }\n    };\n    return step;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZnJhbWVzeW5jL2Rpc3QvZXMvY3JlYXRlLXJlbmRlci1zdGVwLm1qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsU0FBU0EsaUJBQWlCQyxZQUFZO0lBQ2xDLElBQUlDLFFBQVEsRUFBRTtJQUNkLElBQUlDLGlCQUFpQixFQUFFO0lBQ3ZCLElBQUlDLFdBQVc7SUFDZixJQUFJQyxlQUFlO0lBQ25CLElBQUlDLGlCQUFpQjtJQUNyQixNQUFNQyxjQUFjLElBQUlDO0lBQ3hCLE1BQU1DLE9BQU87UUFDVEMsVUFBVSxDQUFDQyxVQUFVQyxZQUFZLEtBQUssRUFBRUMsWUFBWSxLQUFLO1lBQ3JELE1BQU1DLG9CQUFvQkQsYUFBYVI7WUFDdkMsTUFBTVUsU0FBU0Qsb0JBQW9CWixRQUFRQztZQUMzQyxJQUFJUyxXQUNBTCxZQUFZUyxHQUFHLENBQUNMO1lBQ3BCLElBQUlJLE9BQU9FLE9BQU8sQ0FBQ04sY0FBYyxDQUFDLEdBQUc7Z0JBQ2pDSSxPQUFPRyxJQUFJLENBQUNQO2dCQUNaLElBQUlHLHFCQUFxQlQsY0FDckJELFdBQVdGLE1BQU1pQixNQUFNO1lBQy9CO1lBQ0EsT0FBT1I7UUFDWDtRQUNBUyxRQUFRLENBQUNUO1lBQ0wsTUFBTVUsUUFBUWxCLGVBQWVjLE9BQU8sQ0FBQ047WUFDckMsSUFBSVUsVUFBVSxDQUFDLEdBQ1hsQixlQUFlbUIsTUFBTSxDQUFDRCxPQUFPO1lBQ2pDZCxZQUFZZ0IsTUFBTSxDQUFDWjtRQUN2QjtRQUNBYSxTQUFTLENBQUNDO1lBQ04sSUFBSXBCLGNBQWM7Z0JBQ2RDLGlCQUFpQjtnQkFDakI7WUFDSjtZQUNBRCxlQUFlO1lBQ2YsQ0FBQ0gsT0FBT0MsZUFBZSxHQUFHO2dCQUFDQTtnQkFBZ0JEO2FBQU07WUFDakRDLGVBQWVnQixNQUFNLEdBQUc7WUFDeEJmLFdBQVdGLE1BQU1pQixNQUFNO1lBQ3ZCLElBQUlmLFVBQVU7Z0JBQ1YsSUFBSyxJQUFJc0IsSUFBSSxHQUFHQSxJQUFJdEIsVUFBVXNCLElBQUs7b0JBQy9CLE1BQU1mLFdBQVdULEtBQUssQ0FBQ3dCLEVBQUU7b0JBQ3pCZixTQUFTYztvQkFDVCxJQUFJbEIsWUFBWW9CLEdBQUcsQ0FBQ2hCLFdBQVc7d0JBQzNCRixLQUFLQyxRQUFRLENBQUNDO3dCQUNkVjtvQkFDSjtnQkFDSjtZQUNKO1lBQ0FJLGVBQWU7WUFDZixJQUFJQyxnQkFBZ0I7Z0JBQ2hCQSxpQkFBaUI7Z0JBQ2pCRyxLQUFLZSxPQUFPLENBQUNDO1lBQ2pCO1FBQ0o7SUFDSjtJQUNBLE9BQU9oQjtBQUNYO0FBRTRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZyYW1lc3luYy9kaXN0L2VzL2NyZWF0ZS1yZW5kZXItc3RlcC5tanM/MzJiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVSZW5kZXJTdGVwKHJ1bk5leHRGcmFtZSkge1xuICAgIGxldCB0b1J1biA9IFtdO1xuICAgIGxldCB0b1J1bk5leHRGcmFtZSA9IFtdO1xuICAgIGxldCBudW1Ub1J1biA9IDA7XG4gICAgbGV0IGlzUHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgIGxldCBmbHVzaE5leHRGcmFtZSA9IGZhbHNlO1xuICAgIGNvbnN0IHRvS2VlcEFsaXZlID0gbmV3IFdlYWtTZXQoKTtcbiAgICBjb25zdCBzdGVwID0ge1xuICAgICAgICBzY2hlZHVsZTogKGNhbGxiYWNrLCBrZWVwQWxpdmUgPSBmYWxzZSwgaW1tZWRpYXRlID0gZmFsc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFkZFRvQ3VycmVudEZyYW1lID0gaW1tZWRpYXRlICYmIGlzUHJvY2Vzc2luZztcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlciA9IGFkZFRvQ3VycmVudEZyYW1lID8gdG9SdW4gOiB0b1J1bk5leHRGcmFtZTtcbiAgICAgICAgICAgIGlmIChrZWVwQWxpdmUpXG4gICAgICAgICAgICAgICAgdG9LZWVwQWxpdmUuYWRkKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIGlmIChidWZmZXIuaW5kZXhPZihjYWxsYmFjaykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyLnB1c2goY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIGlmIChhZGRUb0N1cnJlbnRGcmFtZSAmJiBpc1Byb2Nlc3NpbmcpXG4gICAgICAgICAgICAgICAgICAgIG51bVRvUnVuID0gdG9SdW4ubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrO1xuICAgICAgICB9LFxuICAgICAgICBjYW5jZWw6IChjYWxsYmFjaykgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0b1J1bk5leHRGcmFtZS5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpXG4gICAgICAgICAgICAgICAgdG9SdW5OZXh0RnJhbWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHRvS2VlcEFsaXZlLmRlbGV0ZShjYWxsYmFjayk7XG4gICAgICAgIH0sXG4gICAgICAgIHByb2Nlc3M6IChmcmFtZURhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChpc1Byb2Nlc3NpbmcpIHtcbiAgICAgICAgICAgICAgICBmbHVzaE5leHRGcmFtZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXNQcm9jZXNzaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIFt0b1J1biwgdG9SdW5OZXh0RnJhbWVdID0gW3RvUnVuTmV4dEZyYW1lLCB0b1J1bl07XG4gICAgICAgICAgICB0b1J1bk5leHRGcmFtZS5sZW5ndGggPSAwO1xuICAgICAgICAgICAgbnVtVG9SdW4gPSB0b1J1bi5sZW5ndGg7XG4gICAgICAgICAgICBpZiAobnVtVG9SdW4pIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVRvUnVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSB0b1J1bltpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZnJhbWVEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvS2VlcEFsaXZlLmhhcyhjYWxsYmFjaykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXAuc2NoZWR1bGUoY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgcnVuTmV4dEZyYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpc1Byb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChmbHVzaE5leHRGcmFtZSkge1xuICAgICAgICAgICAgICAgIGZsdXNoTmV4dEZyYW1lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc3RlcC5wcm9jZXNzKGZyYW1lRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfTtcbiAgICByZXR1cm4gc3RlcDtcbn1cblxuZXhwb3J0IHsgY3JlYXRlUmVuZGVyU3RlcCB9O1xuIl0sIm5hbWVzIjpbImNyZWF0ZVJlbmRlclN0ZXAiLCJydW5OZXh0RnJhbWUiLCJ0b1J1biIsInRvUnVuTmV4dEZyYW1lIiwibnVtVG9SdW4iLCJpc1Byb2Nlc3NpbmciLCJmbHVzaE5leHRGcmFtZSIsInRvS2VlcEFsaXZlIiwiV2Vha1NldCIsInN0ZXAiLCJzY2hlZHVsZSIsImNhbGxiYWNrIiwia2VlcEFsaXZlIiwiaW1tZWRpYXRlIiwiYWRkVG9DdXJyZW50RnJhbWUiLCJidWZmZXIiLCJhZGQiLCJpbmRleE9mIiwicHVzaCIsImxlbmd0aCIsImNhbmNlbCIsImluZGV4Iiwic3BsaWNlIiwiZGVsZXRlIiwicHJvY2VzcyIsImZyYW1lRGF0YSIsImkiLCJoYXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/framesync/dist/es/create-render-step.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/framesync/dist/es/index.mjs":
/*!**************************************************!*\
  !*** ./node_modules/framesync/dist/es/index.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cancelSync: () => (/* binding */ cancelSync),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   flushSync: () => (/* binding */ flushSync),\n/* harmony export */   getFrameData: () => (/* binding */ getFrameData)\n/* harmony export */ });\n/* harmony import */ var _on_next_frame_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./on-next-frame.mjs */ \"(ssr)/./node_modules/framesync/dist/es/on-next-frame.mjs\");\n/* harmony import */ var _create_render_step_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-render-step.mjs */ \"(ssr)/./node_modules/framesync/dist/es/create-render-step.mjs\");\n\n\nconst maxElapsed = 40;\nlet useDefaultElapsed = true;\nlet runNextFrame = false;\nlet isProcessing = false;\nconst frame = {\n    delta: 0,\n    timestamp: 0\n};\nconst stepsOrder = [\n    \"read\",\n    \"update\",\n    \"preRender\",\n    \"render\",\n    \"postRender\"\n];\nconst steps = stepsOrder.reduce((acc, key)=>{\n    acc[key] = (0,_create_render_step_mjs__WEBPACK_IMPORTED_MODULE_1__.createRenderStep)(()=>runNextFrame = true);\n    return acc;\n}, {});\nconst sync = stepsOrder.reduce((acc, key)=>{\n    const step = steps[key];\n    acc[key] = (process, keepAlive = false, immediate = false)=>{\n        if (!runNextFrame) startLoop();\n        return step.schedule(process, keepAlive, immediate);\n    };\n    return acc;\n}, {});\nconst cancelSync = stepsOrder.reduce((acc, key)=>{\n    acc[key] = steps[key].cancel;\n    return acc;\n}, {});\nconst flushSync = stepsOrder.reduce((acc, key)=>{\n    acc[key] = ()=>steps[key].process(frame);\n    return acc;\n}, {});\nconst processStep = (stepId)=>steps[stepId].process(frame);\nconst processFrame = (timestamp)=>{\n    runNextFrame = false;\n    frame.delta = useDefaultElapsed ? _on_next_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.defaultTimestep : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);\n    frame.timestamp = timestamp;\n    isProcessing = true;\n    stepsOrder.forEach(processStep);\n    isProcessing = false;\n    if (runNextFrame) {\n        useDefaultElapsed = false;\n        (0,_on_next_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.onNextFrame)(processFrame);\n    }\n};\nconst startLoop = ()=>{\n    runNextFrame = true;\n    useDefaultElapsed = true;\n    if (!isProcessing) (0,_on_next_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.onNextFrame)(processFrame);\n};\nconst getFrameData = ()=>frame;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sync);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZnJhbWVzeW5jL2Rpc3QvZXMvaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFtRTtBQUNQO0FBRTVELE1BQU1HLGFBQWE7QUFDbkIsSUFBSUMsb0JBQW9CO0FBQ3hCLElBQUlDLGVBQWU7QUFDbkIsSUFBSUMsZUFBZTtBQUNuQixNQUFNQyxRQUFRO0lBQ1ZDLE9BQU87SUFDUEMsV0FBVztBQUNmO0FBQ0EsTUFBTUMsYUFBYTtJQUNmO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDSDtBQUNELE1BQU1DLFFBQVFELFdBQVdFLE1BQU0sQ0FBQyxDQUFDQyxLQUFLQztJQUNsQ0QsR0FBRyxDQUFDQyxJQUFJLEdBQUdaLHlFQUFnQkEsQ0FBQyxJQUFPRyxlQUFlO0lBQ2xELE9BQU9RO0FBQ1gsR0FBRyxDQUFDO0FBQ0osTUFBTUUsT0FBT0wsV0FBV0UsTUFBTSxDQUFDLENBQUNDLEtBQUtDO0lBQ2pDLE1BQU1FLE9BQU9MLEtBQUssQ0FBQ0csSUFBSTtJQUN2QkQsR0FBRyxDQUFDQyxJQUFJLEdBQUcsQ0FBQ0csU0FBU0MsWUFBWSxLQUFLLEVBQUVDLFlBQVksS0FBSztRQUNyRCxJQUFJLENBQUNkLGNBQ0RlO1FBQ0osT0FBT0osS0FBS0ssUUFBUSxDQUFDSixTQUFTQyxXQUFXQztJQUM3QztJQUNBLE9BQU9OO0FBQ1gsR0FBRyxDQUFDO0FBQ0osTUFBTVMsYUFBYVosV0FBV0UsTUFBTSxDQUFDLENBQUNDLEtBQUtDO0lBQ3ZDRCxHQUFHLENBQUNDLElBQUksR0FBR0gsS0FBSyxDQUFDRyxJQUFJLENBQUNTLE1BQU07SUFDNUIsT0FBT1Y7QUFDWCxHQUFHLENBQUM7QUFDSixNQUFNVyxZQUFZZCxXQUFXRSxNQUFNLENBQUMsQ0FBQ0MsS0FBS0M7SUFDdENELEdBQUcsQ0FBQ0MsSUFBSSxHQUFHLElBQU1ILEtBQUssQ0FBQ0csSUFBSSxDQUFDRyxPQUFPLENBQUNWO0lBQ3BDLE9BQU9NO0FBQ1gsR0FBRyxDQUFDO0FBQ0osTUFBTVksY0FBYyxDQUFDQyxTQUFXZixLQUFLLENBQUNlLE9BQU8sQ0FBQ1QsT0FBTyxDQUFDVjtBQUN0RCxNQUFNb0IsZUFBZSxDQUFDbEI7SUFDbEJKLGVBQWU7SUFDZkUsTUFBTUMsS0FBSyxHQUFHSixvQkFDUkgsK0RBQWVBLEdBQ2YyQixLQUFLQyxHQUFHLENBQUNELEtBQUtFLEdBQUcsQ0FBQ3JCLFlBQVlGLE1BQU1FLFNBQVMsRUFBRU4sYUFBYTtJQUNsRUksTUFBTUUsU0FBUyxHQUFHQTtJQUNsQkgsZUFBZTtJQUNmSSxXQUFXcUIsT0FBTyxDQUFDTjtJQUNuQm5CLGVBQWU7SUFDZixJQUFJRCxjQUFjO1FBQ2RELG9CQUFvQjtRQUNwQkosK0RBQVdBLENBQUMyQjtJQUNoQjtBQUNKO0FBQ0EsTUFBTVAsWUFBWTtJQUNkZixlQUFlO0lBQ2ZELG9CQUFvQjtJQUNwQixJQUFJLENBQUNFLGNBQ0ROLCtEQUFXQSxDQUFDMkI7QUFDcEI7QUFDQSxNQUFNSyxlQUFlLElBQU16QjtBQUUzQixpRUFBZVEsSUFBSUEsRUFBQztBQUMyQiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mcmFtZXN5bmMvZGlzdC9lcy9pbmRleC5tanM/ZGY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvbk5leHRGcmFtZSwgZGVmYXVsdFRpbWVzdGVwIH0gZnJvbSAnLi9vbi1uZXh0LWZyYW1lLm1qcyc7XG5pbXBvcnQgeyBjcmVhdGVSZW5kZXJTdGVwIH0gZnJvbSAnLi9jcmVhdGUtcmVuZGVyLXN0ZXAubWpzJztcblxuY29uc3QgbWF4RWxhcHNlZCA9IDQwO1xubGV0IHVzZURlZmF1bHRFbGFwc2VkID0gdHJ1ZTtcbmxldCBydW5OZXh0RnJhbWUgPSBmYWxzZTtcbmxldCBpc1Byb2Nlc3NpbmcgPSBmYWxzZTtcbmNvbnN0IGZyYW1lID0ge1xuICAgIGRlbHRhOiAwLFxuICAgIHRpbWVzdGFtcDogMCxcbn07XG5jb25zdCBzdGVwc09yZGVyID0gW1xuICAgIFwicmVhZFwiLFxuICAgIFwidXBkYXRlXCIsXG4gICAgXCJwcmVSZW5kZXJcIixcbiAgICBcInJlbmRlclwiLFxuICAgIFwicG9zdFJlbmRlclwiLFxuXTtcbmNvbnN0IHN0ZXBzID0gc3RlcHNPcmRlci5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgYWNjW2tleV0gPSBjcmVhdGVSZW5kZXJTdGVwKCgpID0+IChydW5OZXh0RnJhbWUgPSB0cnVlKSk7XG4gICAgcmV0dXJuIGFjYztcbn0sIHt9KTtcbmNvbnN0IHN5bmMgPSBzdGVwc09yZGVyLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICBjb25zdCBzdGVwID0gc3RlcHNba2V5XTtcbiAgICBhY2Nba2V5XSA9IChwcm9jZXNzLCBrZWVwQWxpdmUgPSBmYWxzZSwgaW1tZWRpYXRlID0gZmFsc2UpID0+IHtcbiAgICAgICAgaWYgKCFydW5OZXh0RnJhbWUpXG4gICAgICAgICAgICBzdGFydExvb3AoKTtcbiAgICAgICAgcmV0dXJuIHN0ZXAuc2NoZWR1bGUocHJvY2Vzcywga2VlcEFsaXZlLCBpbW1lZGlhdGUpO1xuICAgIH07XG4gICAgcmV0dXJuIGFjYztcbn0sIHt9KTtcbmNvbnN0IGNhbmNlbFN5bmMgPSBzdGVwc09yZGVyLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICBhY2Nba2V5XSA9IHN0ZXBzW2tleV0uY2FuY2VsO1xuICAgIHJldHVybiBhY2M7XG59LCB7fSk7XG5jb25zdCBmbHVzaFN5bmMgPSBzdGVwc09yZGVyLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICBhY2Nba2V5XSA9ICgpID0+IHN0ZXBzW2tleV0ucHJvY2VzcyhmcmFtZSk7XG4gICAgcmV0dXJuIGFjYztcbn0sIHt9KTtcbmNvbnN0IHByb2Nlc3NTdGVwID0gKHN0ZXBJZCkgPT4gc3RlcHNbc3RlcElkXS5wcm9jZXNzKGZyYW1lKTtcbmNvbnN0IHByb2Nlc3NGcmFtZSA9ICh0aW1lc3RhbXApID0+IHtcbiAgICBydW5OZXh0RnJhbWUgPSBmYWxzZTtcbiAgICBmcmFtZS5kZWx0YSA9IHVzZURlZmF1bHRFbGFwc2VkXG4gICAgICAgID8gZGVmYXVsdFRpbWVzdGVwXG4gICAgICAgIDogTWF0aC5tYXgoTWF0aC5taW4odGltZXN0YW1wIC0gZnJhbWUudGltZXN0YW1wLCBtYXhFbGFwc2VkKSwgMSk7XG4gICAgZnJhbWUudGltZXN0YW1wID0gdGltZXN0YW1wO1xuICAgIGlzUHJvY2Vzc2luZyA9IHRydWU7XG4gICAgc3RlcHNPcmRlci5mb3JFYWNoKHByb2Nlc3NTdGVwKTtcbiAgICBpc1Byb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICBpZiAocnVuTmV4dEZyYW1lKSB7XG4gICAgICAgIHVzZURlZmF1bHRFbGFwc2VkID0gZmFsc2U7XG4gICAgICAgIG9uTmV4dEZyYW1lKHByb2Nlc3NGcmFtZSk7XG4gICAgfVxufTtcbmNvbnN0IHN0YXJ0TG9vcCA9ICgpID0+IHtcbiAgICBydW5OZXh0RnJhbWUgPSB0cnVlO1xuICAgIHVzZURlZmF1bHRFbGFwc2VkID0gdHJ1ZTtcbiAgICBpZiAoIWlzUHJvY2Vzc2luZylcbiAgICAgICAgb25OZXh0RnJhbWUocHJvY2Vzc0ZyYW1lKTtcbn07XG5jb25zdCBnZXRGcmFtZURhdGEgPSAoKSA9PiBmcmFtZTtcblxuZXhwb3J0IGRlZmF1bHQgc3luYztcbmV4cG9ydCB7IGNhbmNlbFN5bmMsIGZsdXNoU3luYywgZ2V0RnJhbWVEYXRhIH07XG4iXSwibmFtZXMiOlsib25OZXh0RnJhbWUiLCJkZWZhdWx0VGltZXN0ZXAiLCJjcmVhdGVSZW5kZXJTdGVwIiwibWF4RWxhcHNlZCIsInVzZURlZmF1bHRFbGFwc2VkIiwicnVuTmV4dEZyYW1lIiwiaXNQcm9jZXNzaW5nIiwiZnJhbWUiLCJkZWx0YSIsInRpbWVzdGFtcCIsInN0ZXBzT3JkZXIiLCJzdGVwcyIsInJlZHVjZSIsImFjYyIsImtleSIsInN5bmMiLCJzdGVwIiwicHJvY2VzcyIsImtlZXBBbGl2ZSIsImltbWVkaWF0ZSIsInN0YXJ0TG9vcCIsInNjaGVkdWxlIiwiY2FuY2VsU3luYyIsImNhbmNlbCIsImZsdXNoU3luYyIsInByb2Nlc3NTdGVwIiwic3RlcElkIiwicHJvY2Vzc0ZyYW1lIiwiTWF0aCIsIm1heCIsIm1pbiIsImZvckVhY2giLCJnZXRGcmFtZURhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/framesync/dist/es/index.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/framesync/dist/es/on-next-frame.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/framesync/dist/es/on-next-frame.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   defaultTimestep: () => (/* binding */ defaultTimestep),\n/* harmony export */   onNextFrame: () => (/* binding */ onNextFrame)\n/* harmony export */ });\nconst defaultTimestep = 1 / 60 * 1000;\nconst getCurrentTime = typeof performance !== \"undefined\" ? ()=>performance.now() : ()=>Date.now();\nconst onNextFrame =  false ? 0 : (callback)=>setTimeout(()=>callback(getCurrentTime()), defaultTimestep);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZnJhbWVzeW5jL2Rpc3QvZXMvb24tbmV4dC1mcmFtZS5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNQSxrQkFBa0IsSUFBSyxLQUFNO0FBQ25DLE1BQU1DLGlCQUFpQixPQUFPQyxnQkFBZ0IsY0FDeEMsSUFBTUEsWUFBWUMsR0FBRyxLQUNyQixJQUFNQyxLQUFLRCxHQUFHO0FBQ3BCLE1BQU1FLGNBQWMsTUFBNkIsR0FDM0MsQ0FBb0RDLEdBQ3BELENBQUNBLFdBQWFHLFdBQVcsSUFBTUgsU0FBU0wsbUJBQW1CRDtBQUV6QiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mcmFtZXN5bmMvZGlzdC9lcy9vbi1uZXh0LWZyYW1lLm1qcz80YWZmIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRlZmF1bHRUaW1lc3RlcCA9ICgxIC8gNjApICogMTAwMDtcbmNvbnN0IGdldEN1cnJlbnRUaW1lID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSBcInVuZGVmaW5lZFwiXG4gICAgPyAoKSA9PiBwZXJmb3JtYW5jZS5ub3coKVxuICAgIDogKCkgPT4gRGF0ZS5ub3coKTtcbmNvbnN0IG9uTmV4dEZyYW1lID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIlxuICAgID8gKGNhbGxiYWNrKSA9PiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKVxuICAgIDogKGNhbGxiYWNrKSA9PiBzZXRUaW1lb3V0KCgpID0+IGNhbGxiYWNrKGdldEN1cnJlbnRUaW1lKCkpLCBkZWZhdWx0VGltZXN0ZXApO1xuXG5leHBvcnQgeyBkZWZhdWx0VGltZXN0ZXAsIG9uTmV4dEZyYW1lIH07XG4iXSwibmFtZXMiOlsiZGVmYXVsdFRpbWVzdGVwIiwiZ2V0Q3VycmVudFRpbWUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIkRhdGUiLCJvbk5leHRGcmFtZSIsImNhbGxiYWNrIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2V0VGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/framesync/dist/es/on-next-frame.mjs\n");

/***/ })

};
;