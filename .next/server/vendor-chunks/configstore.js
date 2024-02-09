"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/configstore";
exports.ids = ["vendor-chunks/configstore"];
exports.modules = {

/***/ "(ssr)/./node_modules/configstore/index.js":
/*!*******************************************!*\
  !*** ./node_modules/configstore/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar path = __webpack_require__(/*! path */ \"path\");\nvar fs = __webpack_require__(/*! graceful-fs */ \"(ssr)/./node_modules/graceful-fs/graceful-fs.js\");\nvar osenv = __webpack_require__(/*! osenv */ \"(ssr)/./node_modules/osenv/osenv.js\");\nvar assign = __webpack_require__(/*! object-assign */ \"(ssr)/./node_modules/object-assign/index.js\");\nvar mkdirp = __webpack_require__(/*! mkdirp */ \"(ssr)/./node_modules/mkdirp/index.js\");\nvar uuid = __webpack_require__(/*! uuid */ \"(ssr)/./node_modules/uuid/uuid.js\");\nvar xdgBasedir = __webpack_require__(/*! xdg-basedir */ \"(ssr)/./node_modules/xdg-basedir/index.js\");\nvar osTmpdir = __webpack_require__(/*! os-tmpdir */ \"(ssr)/./node_modules/os-tmpdir/index.js\");\nvar writeFileAtomic = __webpack_require__(/*! write-file-atomic */ \"(ssr)/./node_modules/write-file-atomic/index.js\");\nvar dotProp = __webpack_require__(/*! dot-prop */ \"(ssr)/./node_modules/dot-prop/index.js\");\nvar user = (osenv.user() || uuid.v4()).replace(/\\\\/g, \"\");\nvar configDir = xdgBasedir.config || path.join(osTmpdir(), user, \".config\");\nvar permissionError = \"You don't have access to this file.\";\nvar defaultPathMode = parseInt(\"0700\", 8);\nvar writeFileOptions = {\n    mode: parseInt(\"0600\", 8)\n};\nfunction Configstore(id, defaults, opts) {\n    opts = opts || {};\n    var pathPrefix = opts.globalConfigPath ? path.join(id, \"config.json\") : path.join(\"configstore\", id + \".json\");\n    this.path = path.join(configDir, pathPrefix);\n    this.all = assign({}, defaults || {}, this.all || {});\n}\nConfigstore.prototype = Object.create(Object.prototype, {\n    all: {\n        get: function() {\n            try {\n                return JSON.parse(fs.readFileSync(this.path, \"utf8\"));\n            } catch (err) {\n                // create dir if it doesn't exist\n                if (err.code === \"ENOENT\") {\n                    mkdirp.sync(path.dirname(this.path), defaultPathMode);\n                    return {};\n                }\n                // improve the message of permission errors\n                if (err.code === \"EACCES\") {\n                    err.message = err.message + \"\\n\" + permissionError + \"\\n\";\n                }\n                // empty the file if it encounters invalid JSON\n                if (err.name === \"SyntaxError\") {\n                    writeFileAtomic.sync(this.path, \"\", writeFileOptions);\n                    return {};\n                }\n                throw err;\n            }\n        },\n        set: function(val) {\n            try {\n                // make sure the folder exists as it\n                // could have been deleted in the meantime\n                mkdirp.sync(path.dirname(this.path), defaultPathMode);\n                writeFileAtomic.sync(this.path, JSON.stringify(val, null, \"\t\"), writeFileOptions);\n            } catch (err) {\n                // improve the message of permission errors\n                if (err.code === \"EACCES\") {\n                    err.message = err.message + \"\\n\" + permissionError + \"\\n\";\n                }\n                throw err;\n            }\n        }\n    },\n    size: {\n        get: function() {\n            return Object.keys(this.all || {}).length;\n        }\n    }\n});\nConfigstore.prototype.get = function(key) {\n    return dotProp.get(this.all, key);\n};\nConfigstore.prototype.set = function(key, val) {\n    var config = this.all;\n    if (arguments.length === 1) {\n        Object.keys(key).forEach(function(k) {\n            dotProp.set(config, k, key[k]);\n        });\n    } else {\n        dotProp.set(config, key, val);\n    }\n    this.all = config;\n};\nConfigstore.prototype.has = function(key) {\n    return dotProp.has(this.all, key);\n};\nConfigstore.prototype.delete = Configstore.prototype.del = function(key) {\n    var config = this.all;\n    dotProp.delete(config, key);\n    this.all = config;\n};\nConfigstore.prototype.clear = function() {\n    this.all = {};\n};\nmodule.exports = Configstore;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY29uZmlnc3RvcmUvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxJQUFJQSxPQUFPQyxtQkFBT0EsQ0FBQztBQUNuQixJQUFJQyxLQUFLRCxtQkFBT0EsQ0FBQztBQUNqQixJQUFJRSxRQUFRRixtQkFBT0EsQ0FBQztBQUNwQixJQUFJRyxTQUFTSCxtQkFBT0EsQ0FBQztBQUNyQixJQUFJSSxTQUFTSixtQkFBT0EsQ0FBQztBQUNyQixJQUFJSyxPQUFPTCxtQkFBT0EsQ0FBQztBQUNuQixJQUFJTSxhQUFhTixtQkFBT0EsQ0FBQztBQUN6QixJQUFJTyxXQUFXUCxtQkFBT0EsQ0FBQztBQUN2QixJQUFJUSxrQkFBa0JSLG1CQUFPQSxDQUFDO0FBQzlCLElBQUlTLFVBQVVULG1CQUFPQSxDQUFDO0FBRXRCLElBQUlVLE9BQU8sQ0FBQ1IsTUFBTVEsSUFBSSxNQUFNTCxLQUFLTSxFQUFFLEVBQUMsRUFBR0MsT0FBTyxDQUFDLE9BQU87QUFDdEQsSUFBSUMsWUFBWVAsV0FBV1EsTUFBTSxJQUFJZixLQUFLZ0IsSUFBSSxDQUFDUixZQUFZRyxNQUFNO0FBQ2pFLElBQUlNLGtCQUFrQjtBQUN0QixJQUFJQyxrQkFBa0JDLFNBQVMsUUFBUTtBQUN2QyxJQUFJQyxtQkFBbUI7SUFBQ0MsTUFBTUYsU0FBUyxRQUFRO0FBQUU7QUFFakQsU0FBU0csWUFBWUMsRUFBRSxFQUFFQyxRQUFRLEVBQUVDLElBQUk7SUFDdENBLE9BQU9BLFFBQVEsQ0FBQztJQUVoQixJQUFJQyxhQUFhRCxLQUFLRSxnQkFBZ0IsR0FDckMzQixLQUFLZ0IsSUFBSSxDQUFDTyxJQUFJLGlCQUNkdkIsS0FBS2dCLElBQUksQ0FBQyxlQUFlTyxLQUFLO0lBRS9CLElBQUksQ0FBQ3ZCLElBQUksR0FBR0EsS0FBS2dCLElBQUksQ0FBQ0YsV0FBV1k7SUFFakMsSUFBSSxDQUFDRSxHQUFHLEdBQUd4QixPQUFPLENBQUMsR0FBR29CLFlBQVksQ0FBQyxHQUFHLElB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QUNaO0FBRUFPLFlBQVlPLFNBQVMsQ0FBQzBCLEtBQUssR0FBRztJQUM3QixJQUFJLENBQUMzQixHQUFHLEdBQUcsQ0FBQztBQUNiO0FBRUE0QixPQUFPQyxPQUFPLEdBQUduQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb25maWdzdG9yZS9pbmRleC5qcz9iZmVjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xudmFyIGZzID0gcmVxdWlyZSgnZ3JhY2VmdWwtZnMnKTtcbnZhciBvc2VudiA9IHJlcXVpcmUoJ29zZW52Jyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xudmFyIG1rZGlycCA9IHJlcXVpcmUoJ21rZGlycCcpO1xudmFyIHV1aWQgPSByZXF1aXJlKCd1dWlkJyk7XG52YXIgeGRnQmFzZWRpciA9IHJlcXVpcmUoJ3hkZy1iYXNlZGlyJyk7XG52YXIgb3NUbXBkaXIgPSByZXF1aXJlKCdvcy10bXBkaXInKTtcbnZhciB3cml0ZUZpbGVBdG9taWMgPSByZXF1aXJlKCd3cml0ZS1maWxlLWF0b21pYycpO1xudmFyIGRvdFByb3AgPSByZXF1aXJlKCdkb3QtcHJvcCcpO1xuXG52YXIgdXNlciA9IChvc2Vudi51c2VyKCkgfHwgdXVpZC52NCgpKS5yZXBsYWNlKC9cXFxcL2csICcnKTtcbnZhciBjb25maWdEaXIgPSB4ZGdCYXNlZGlyLmNvbmZpZyB8fCBwYXRoLmpvaW4ob3NUbXBkaXIoKSwgdXNlciwgJy5jb25maWcnKTtcbnZhciBwZXJtaXNzaW9uRXJyb3IgPSAnWW91IGRvblxcJ3QgaGF2ZSBhY2Nlc3MgdG8gdGhpcyBmaWxlLic7XG52YXIgZGVmYXVsdFBhdGhNb2RlID0gcGFyc2VJbnQoJzA3MDAnLCA4KTtcbnZhciB3cml0ZUZpbGVPcHRpb25zID0ge21vZGU6IHBhcnNlSW50KCcwNjAwJywgOCl9O1xuXG5mdW5jdGlvbiBDb25maWdzdG9yZShpZCwgZGVmYXVsdHMsIG9wdHMpIHtcblx0b3B0cyA9IG9wdHMgfHwge307XG5cblx0dmFyIHBhdGhQcmVmaXggPSBvcHRzLmdsb2JhbENvbmZpZ1BhdGggP1xuXHRcdHBhdGguam9pbihpZCwgJ2NvbmZpZy5qc29uJykgOlxuXHRcdHBhdGguam9pbignY29uZmlnc3RvcmUnLCBpZCArICcuanNvbicpO1xuXG5cdHRoaXMucGF0aCA9IHBhdGguam9pbihjb25maWdEaXIsIHBhdGhQcmVmaXgpO1xuXG5cdHRoaXMuYWxsID0gYXNzaWduKHt9LCBkZWZhdWx0cyB8fCB7fSwgdGhpcy5hbGwgfHwge30pO1xufVxuXG5Db25maWdzdG9yZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKE9iamVjdC5wcm90b3R5cGUsIHtcblx0YWxsOiB7XG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyZXR1cm4gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmModGhpcy5wYXRoLCAndXRmOCcpKTtcblx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHQvLyBjcmVhdGUgZGlyIGlmIGl0IGRvZXNuJ3QgZXhpc3Rcblx0XHRcdFx0aWYgKGVyci5jb2RlID09PSAnRU5PRU5UJykge1xuXHRcdFx0XHRcdG1rZGlycC5zeW5jKHBhdGguZGlybmFtZSh0aGlzLnBhdGgpLCBkZWZhdWx0UGF0aE1vZGUpO1xuXHRcdFx0XHRcdHJldHVybiB7fTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGltcHJvdmUgdGhlIG1lc3NhZ2Ugb2YgcGVybWlzc2lvbiBlcnJvcnNcblx0XHRcdFx0aWYgKGVyci5jb2RlID09PSAnRUFDQ0VTJykge1xuXHRcdFx0XHRcdGVyci5tZXNzYWdlID0gZXJyLm1lc3NhZ2UgKyAnXFxuJyArIHBlcm1pc3Npb25FcnJvciArICdcXG4nO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gZW1wdHkgdGhlIGZpbGUgaWYgaXQgZW5jb3VudGVycyBpbnZhbGlkIEpTT05cblx0XHRcdFx0aWYgKGVyci5uYW1lID09PSAnU3ludGF4RXJyb3InKSB7XG5cdFx0XHRcdFx0d3JpdGVGaWxlQXRvbWljLnN5bmModGhpcy5wYXRoLCAnJywgd3JpdGVGaWxlT3B0aW9ucyk7XG5cdFx0XHRcdFx0cmV0dXJuIHt9O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhyb3cgZXJyO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0c2V0OiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHQvLyBtYWtlIHN1cmUgdGhlIGZvbGRlciBleGlzdHMgYXMgaXRcblx0XHRcdFx0Ly8gY291bGQgaGF2ZSBiZWVuIGRlbGV0ZWQgaW4gdGhlIG1lYW50aW1lXG5cdFx0XHRcdG1rZGlycC5zeW5jKHBhdGguZGlybmFtZSh0aGlzLnBhdGgpLCBkZWZhdWx0UGF0aE1vZGUpO1xuXG5cdFx0XHRcdHdyaXRlRmlsZUF0b21pYy5zeW5jKHRoaXMucGF0aCwgSlNPTi5zdHJpbmdpZnkodmFsLCBudWxsLCAnXFx0JyksIHdyaXRlRmlsZU9wdGlvbnMpO1xuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdC8vIGltcHJvdmUgdGhlIG1lc3NhZ2Ugb2YgcGVybWlzc2lvbiBlcnJvcnNcblx0XHRcdFx0aWYgKGVyci5jb2RlID09PSAnRUFDQ0VTJykge1xuXHRcdFx0XHRcdGVyci5tZXNzYWdlID0gZXJyLm1lc3NhZ2UgKyAnXFxuJyArIHBlcm1pc3Npb25FcnJvciArICdcXG4nO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhyb3cgZXJyO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0c2l6ZToge1xuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuYWxsIHx8IHt9KS5sZW5ndGg7XG5cdFx0fVxuXHR9XG59KTtcblxuQ29uZmlnc3RvcmUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcblx0cmV0dXJuIGRvdFByb3AuZ2V0KHRoaXMuYWxsLCBrZXkpO1xufTtcblxuQ29uZmlnc3RvcmUucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbCkge1xuXHR2YXIgY29uZmlnID0gdGhpcy5hbGw7XG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG5cdFx0T2JqZWN0LmtleXMoa2V5KS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdFx0XHRkb3RQcm9wLnNldChjb25maWcsIGssIGtleVtrXSk7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0ZG90UHJvcC5zZXQoY29uZmlnLCBrZXksIHZhbCk7XG5cdH1cblx0dGhpcy5hbGwgPSBjb25maWc7XG59O1xuXG5Db25maWdzdG9yZS5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGtleSkge1xuXHRyZXR1cm4gZG90UHJvcC5oYXModGhpcy5hbGwsIGtleSk7XG59O1xuXG5Db25maWdzdG9yZS5wcm90b3R5cGUuZGVsZXRlID0gQ29uZmlnc3RvcmUucHJvdG90eXBlLmRlbCA9IGZ1bmN0aW9uIChrZXkpIHtcblx0dmFyIGNvbmZpZyA9IHRoaXMuYWxsO1xuXHRkb3RQcm9wLmRlbGV0ZShjb25maWcsIGtleSk7XG5cdHRoaXMuYWxsID0gY29uZmlnO1xufTtcblxuQ29uZmlnc3RvcmUucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLmFsbCA9IHt9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb25maWdzdG9yZTtcbiJdLCJuYW1lcyI6WyJwYXRoIiwicmVxdWlyZSIsImZzIiwib3NlbnYiLCJhc3NpZ24iLCJta2RpcnAiLCJ1dWlkIiwieGRnQmFzZWRpciIsIm9zVG1wZGlyIiwid3JpdGVGaWxlQXRvbWljIiwiZG90UHJvcCIsInVzZXIiLCJ2NCIsInJlcGxhY2UiLCJjb25maWdEaXIiLCJjb25maWciLCJqb2luIiwicGVybWlzc2lvbkVycm9yIiwiZGVmYXVsdFBhdGhNb2RlIiwicGFyc2VJbnQiLCJ3cml0ZUZpbGVPcHRpb25zIiwibW9kZSIsIkNvbmZpZ3N0b3JlIiwiaWQiLCJkZWZhdWx0cyIsIm9wdHMiLCJwYXRoUHJlZml4IiwiZ2xvYmFsQ29uZmlnUGF0aCIsImFsbCIsInByb3RvdHlwZSIsIk9iamVjdCIsImNyZWF0ZSIsImdldCIsIkpTT04iLCJwYXJzZSIsInJlYWRGaWxlU3luYyIsImVyciIsImNvZGUiLCJzeW5jIiwiZGlybmFtZSIsIm1lc3NhZ2UiLCJuYW1lIiwic2V0IiwidmFsIiwic3RyaW5naWZ5Iiwic2l6ZSIsImtleXMiLCJsZW5ndGgiLCJrZXkiLCJhcmd1bWVudHMiLCJmb3JFYWNoIiwiayIsImhhcyIsImRlbGV0ZSIsImRlbCIsImNsZWFyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/configstore/index.js\n");

/***/ })

};
;