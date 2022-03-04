/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/vue-table-to-excel/dist/umd/index.umd.js":
/*!***************************************************************!*\
  !*** ./node_modules/vue-table-to-excel/dist/umd/index.umd.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("!function (e, t) {\n   true ? t(exports) : 0;\n}(this, function (e) {\n  \"use strict\";\n\n  const t = new class {\n    getXlsx(e, t, o = \"数据报表.xlsx\") {\n      if (!Array.isArray(e)) throw new Error(`${e} is must be Array and not empty!`);\n      if (!Array.isArray(t)) throw new Error(`${t} is must be Array and not empty!`);\n      let n = t.toString() + \"\\n\";\n\n      for (let t = 0; t < e.length; t++) {\n        for (let o in e[t]) n += `${e[t][o] + \"\\t\"},`;\n\n        n += \"\\n\";\n      }\n\n      let r = \"data:text/csv;charset=utf-8,\\ufeff\" + encodeURIComponent(n);\n      var d = document.createElement(\"a\");\n      d.href = r, d.download = o, document.body.appendChild(d), d.click(), document.body.removeChild(d);\n    }\n\n  }();\n  window.jsontoexcel = t;\n  const o = t;\n  e.jsontoexcel = o, Object.defineProperty(e, \"__esModule\", {\n    value: !0\n  });\n});\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/vue-table-to-excel/dist/umd/index.umd.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_table_to_excel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-table-to-excel */ \"./node_modules/vue-table-to-excel/dist/umd/index.umd.js\");\n/* harmony import */ var vue_table_to_excel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_table_to_excel__WEBPACK_IMPORTED_MODULE_0__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nVue.createApp({\n  data: function data() {\n    return {\n      head: [\"Index\", \"First-Name\", \"Last-Name\", \"Father-Name\", \"Other-Name\", \"State\"],\n      formData: {\n        \"Index\": null,\n        \"First-Name\": \"\",\n        \"Last-Name\": \"\",\n        \"Father-Name\": \"\",\n        \"Other-Name\": \"\",\n        \"State\": \"\"\n      },\n      jsonData: [{\n        \"Index\": 1,\n        \"First-Name\": \"Muhammad\",\n        \"Last-Name\": \"Umair\",\n        \"Father-Name\": \"Something\",\n        \"Other-Name\": \"Something as well\",\n        \"State\": \"Kerela\"\n      }, {\n        \"Index\": 2,\n        \"First-Name\": \"Muhammad\",\n        \"Last-Name\": \"Umair\",\n        \"Father-Name\": \"Something\",\n        \"Other-Name\": \"Something as well\",\n        \"State\": \"Kerela\"\n      }, {\n        \"Index\": 3,\n        \"First-Name\": \"Muhammad\",\n        \"Last-Name\": \"Umair\",\n        \"Father-Name\": \"Something\",\n        \"Other-Name\": \"Something as well\",\n        \"State\": \"Kerela\"\n      }]\n    };\n  },\n  methods: {\n    addDataTable: function addDataTable() {\n      this.formData.Index = this.jsonData[this.jsonData.length - 1][\"Index\"] + 1;\n      var obj = JSON.parse(JSON.stringify(this.formData));\n      this.jsonData.push(obj);\n      this.emptyFormState();\n    },\n    deleteTableRow: function deleteTableRow(index) {\n      var _this = this;\n\n      this.jsonData.forEach(function (item, i) {\n        if (index == item.Index) {\n          _this.jsonData.splice(i, 1);\n        }\n      });\n      this.jsonData.forEach(function (item, i) {\n        _this.jsonData[i].Index = i + 1;\n      });\n    },\n    validateInputs: function validateInputs() {\n      for (var _i = 0, _Object$entries = Object.entries(this.formData); _i < _Object$entries.length; _i++) {\n        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),\n            key = _Object$entries$_i[0],\n            value = _Object$entries$_i[1];\n\n        if (key == \"Index\") {\n          continue;\n        } else if (this.formData[key] == \"\") {\n          return true;\n        } else {\n          return false;\n        }\n      }\n    },\n    emptyFormState: function emptyFormState() {\n      this.formData[\"Index\"] = null, this.formData[\"First-Name\"] = \"\", this.formData[\"Last-Name\"] = \"\", this.formData[\"Father-Name\"] = \"\", this.formData[\"Other-Name\"] = \"\", this.formData[\"State\"] = \"0\";\n    },\n    downloadExcel: function downloadExcel() {\n      vue_table_to_excel__WEBPACK_IMPORTED_MODULE_0__.jsontoexcel.getXlsx(this.jsonData, this.head, \"excel.xlsx\");\n    }\n  },\n  updated: function updated() {\n    this.validateInputs();\n  },\n  created: function created() {\n    this.validateInputs();\n  }\n}).mount('#app');\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;