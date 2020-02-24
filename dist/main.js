/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body {\\n  margin-top: 10%;\\n  background-color: #bbecac;\\n  display: flex;\\n  justify-content: center; }\\n\\n.container {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr 1fr;\\n  grid-gap: 4px;\\n  background-color: #212121;\\n  padding: 4px;\\n  border-radius: 5px;\\n  max-width: 360px;\\n  font-family: \\\"Tahoma\\\"; }\\n\\n.item {\\n  background-color: #7a9edf;\\n  color: black;\\n  padding: 20px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  font-size: 22px;\\n  cursor: pointer;\\n  font-weight: bold; }\\n\\nform {\\n  max-width: 100%; }\\n\\ninput {\\n  width: 100%;\\n  height: 60px;\\n  border: none;\\n  font-size: 30px;\\n  outline: none;\\n  text-align: right; }\\n\\n.input {\\n  grid-column: 1/-1;\\n  padding: 0; }\\n\\n.clean {\\n  grid-column: 1/3;\\n  background-color: #3a3ac4; }\\n\\n.back {\\n  grid-column: 3/-1; }\\n\\n.equal {\\n  grid-column: 4;\\n  grid-row: 6/8;\\n  background-color: #b9b9c4; }\\n\\n.zero {\\n  grid-column: 1/3; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _script_parser_Parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script/parser/Parser */ \"./src/script/parser/Parser.js\");\n/* harmony import */ var _script_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script/core */ \"./src/script/core/index.js\");\n/* harmony import */ var _script_substract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script/substract */ \"./src/script/substract/index.js\");\n/* harmony import */ var _script_multiply__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./script/multiply */ \"./src/script/multiply/index.js\");\n/* harmony import */ var _script_divide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./script/divide */ \"./src/script/divide/index.js\");\n/* harmony import */ var _src_styles_style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _src_styles_style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_styles_style_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst p = new _script_parser_Parser__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst button = document.getElementById('test');\nbutton.addEventListener('click', test);\n\nfunction test(event) {\n  console.log('event: ', event.target.value);\n}\n\nwindow.test2 = function test2() {\n  // parseFloat(arr)\n  // console.log('parseFloat: ', parseFloat());\n  // console.log('arr 2: ', arr);\n  // console.log('join ', arr.join(' '));\n  const code = arr.join(' ');\n  console.log('code: ', code); // const code = console.log('join ', arr.join(' '));\n\n  evaluateAsFloat(code); // console.log('evaluateAsFloat: ', evaluateAsFloat);\n};\n\nfunction evaluateAsFloat(code) {\n  console.log('code: ', typeof code); // console.log('code1: ', code);\n\n  function evaluate(obj) {\n    console.log('obj: ', obj);\n\n    switch (obj.type) {\n      case \"number\":\n        return parseInt(obj.value);\n\n      case \"+\":\n        return Object(_script_core__WEBPACK_IMPORTED_MODULE_1__[\"add\"])(evaluate(obj.left), evaluate(obj.right));\n\n      case \"-\":\n        return Object(_script_substract__WEBPACK_IMPORTED_MODULE_2__[\"substract\"])(evaluate(obj.left), evaluate(obj.right));\n\n      case \"*\":\n        return Object(_script_multiply__WEBPACK_IMPORTED_MODULE_3__[\"multiply\"])(evaluate(obj.left), evaluate(obj.right));\n\n      case \"/\":\n        return Object(_script_divide__WEBPACK_IMPORTED_MODULE_4__[\"divide\"])(evaluate(obj.left), evaluate(obj.right));\n      // todo: добавить остальные операции, написать на них тесты \n    }\n  }\n\n  console.log('evaluate: ', evaluate(p.parse(code)));\n  return evaluate(p.parse(code));\n} // // Functions for storing and displaying user input\n// var update = function(value) {\n// \tinputs.push(value);\n// \tinputs.shift();\n// }\n// var clear = function() {\n// \tinputs = [\"\",\"\",\"\"];\n// \tvalues = [];\n// \tdisplay();\n// }\n// var del = function() {\n//   if(values.length > 0) {\n//     values.pop();\n//   }\n//   else {\n//     for(var i = 2; i >= 0; i--) {\n//       var x = inputs[i]\n//       if(inputs[i]) { \n//         var y = x.slice(0,-1); \n//         inputs[i] = y;\n//       }\n//     }\n//   } \n// }\n// var display = function() {\n// \tresults.innerHTML = inputs.join(\" \") + \" \" + values.join(\"\");\n// }\n// console.log('evaluate(p.parse(code): ', evaluate(p.parse(code)))\n// console.log(EventTarget);\n// document.getElementById('5').onclick = function(){\n//   console.log(evaluateAsFloat(5+5));\n// }\n// function myFunction(obj){\n//   console.log(obj);\n// }\n// работает только с \"+\", добавьте остальные операции \n// console.log(evaluateAsFloat('2 + 3 + 4 + 5'));\n// console.log(evaluateAsFloat('3*3*3'));\n// console.log('evaluateAsFloat: ', evaluateAsFloat);\n// console.log(evaluateAsFloat('50*4-(50+50)+ 100'));\n//  console.log(evaluateAsFloat('45/9'));\n// console.log('add:', add(2, 3));\n// var results = document.getElementById(\"display\");\n// var inputs = [\"\",\"\",\"\"];\n// var values = [];\n// // Arithmetic functions\n// var add = function(a, b) {return a + b;}\n// var subtract = function(a, b) {return a - b;}\n// var multiply = function(a, b) {return a * b;}\n// var divide = function(a, b) {return a / b;}\n// var equals = function() {\n// \tif (inputs[1] === \"+\") {\n// \t\tvar sum = add(parseFloat(inputs[0]), parseFloat(inputs[2]));\n// \t\tclear();\t\n// \t\tvalues.push(sum);\n// \t}\n// \telse if (inputs[1] === \"-\") {\n// \t\tvar difference = subtract(parseFloat(inputs[0]), parseFloat(inputs[2]));\n// \t\tclear();\t\n// \t\tvalues.push(difference)\n// \t}\n// \telse if (inputs[1] === \"*\") {\n// \t\tvar product = multiply(parseFloat(inputs[0]), parseFloat(inputs[2]));\n// \t\tclear();\t\n// \t\tvalues.push(product);\t\n// \t}\n// \telse if (inputs[1] === \"/\") {\n// \t\tvar quotient = divide(parseFloat(inputs[0]), parseFloat(inputs[2]));\n// \t\tclear();\n// \t\tvalues.push(quotient);\n// \t}\n// \tdisplay();\n// }\n// // Functions for storing and displaying user input\n// var update = function(value) {\n// \tinputs.push(value);\n// \tinputs.shift();\n// }\n// var clear = function() {\n// \tinputs = [\"\",\"\",\"\"];\n// \tvalues = [];\n// \tdisplay();\n// }\n// var del = function() {\n//   if(values.length > 0) {\n//     values.pop();\n//   }\n//   else {\n//     for(var i = 2; i >= 0; i--) {\n//       var x = inputs[i]\n//       if(inputs[i]) { \n//         var y = x.slice(0,-1); \n//         inputs[i] = y;\n//       }\n//     }\n//   } \n// }\n// var display = function() {\n// \tresults.innerHTML = inputs.join(\" \") + \" \" + values.join(\"\");\n// }\n// // Event listeners for mouse input\n// for (var i = 0; i < 11; i++) {\n// \tdocument.getElementById(i).addEventListener(\"click\", function() {\n// \t\tvalues.push(this.innerHTML);\n// \t\tdisplay();\n// \t});\n// }\n// for (var i = 11; i < 15; i++) {\n// \tdocument.getElementById(i).addEventListener(\"click\", function() {\n// \t\tupdate(values.join(\"\"));\n// \t\tupdate(this.innerHTML);\n// \t\tvalues = [];\n// \t\tdisplay();\n// \t});\n// }\n// document.getElementById(15).addEventListener(\"click\", function(){\n// \tupdate(values.join(\"\"));\n// \tvalues = [];\n// \tequals();\n// });\n// document.getElementById(16).addEventListener(\"click\", function(){ clear(); });\n// document.getElementById(17).addEventListener(\"click\", function(){ \n//   del();\n// \tdisplay();\n// });\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/script/core/add.js":
/*!********************************!*\
  !*** ./src/script/core/add.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst add = (a, b) => a + b;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (add);\n\n//# sourceURL=webpack:///./src/script/core/add.js?");

/***/ }),

/***/ "./src/script/core/index.js":
/*!**********************************!*\
  !*** ./src/script/core/index.js ***!
  \**********************************/
/*! exports provided: add */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ \"./src/script/core/add.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return _add__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./src/script/core/index.js?");

/***/ }),

/***/ "./src/script/divide/divide.js":
/*!*************************************!*\
  !*** ./src/script/divide/divide.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst divide = (a, b) => a / b;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (divide);\n\n//# sourceURL=webpack:///./src/script/divide/divide.js?");

/***/ }),

/***/ "./src/script/divide/index.js":
/*!************************************!*\
  !*** ./src/script/divide/index.js ***!
  \************************************/
/*! exports provided: divide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _divide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./divide */ \"./src/script/divide/divide.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"divide\", function() { return _divide__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./src/script/divide/index.js?");

/***/ }),

/***/ "./src/script/multiply/index.js":
/*!**************************************!*\
  !*** ./src/script/multiply/index.js ***!
  \**************************************/
/*! exports provided: multiply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _multiply__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multiply */ \"./src/script/multiply/multiply.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"multiply\", function() { return _multiply__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./src/script/multiply/index.js?");

/***/ }),

/***/ "./src/script/multiply/multiply.js":
/*!*****************************************!*\
  !*** ./src/script/multiply/multiply.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst multiply = (a, b) => a * b;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (multiply);\n\n//# sourceURL=webpack:///./src/script/multiply/multiply.js?");

/***/ }),

/***/ "./src/script/parser/Parser.js":
/*!*************************************!*\
  !*** ./src/script/parser/Parser.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/script/utils.js\");\n // explanation\n// checkout  http://jorendorff.github.io/calc/calculator-parser.js\n\nfunction Parser() {\n  let tokens = [];\n  let position = 0;\n  return {\n    peek: () => {\n      return tokens[position];\n    },\n    consume: () => {\n      position++;\n    },\n    tokenizeExpression: function (str) {\n      let res = [];\n      let regexp = /([0-9]+|\\S)/g;\n      let token;\n\n      while (token = regexp.exec(str)) {\n        res.push(token[1]);\n      }\n\n      return res;\n    },\n    parsePrimaryExpr: function () {\n      var t = this.peek();\n\n      if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"isNumber\"])(t)) {\n        this.consume(t);\n        return {\n          type: \"number\",\n          value: t\n        };\n      } else if (t === \"(\") {\n        this.consume(t);\n        var expr = this.parseExpression();\n        if (this.peek() !== \")\") throw new SyntaxError(\"Expected )\");\n        this.consume(\")\");\n        return expr;\n      } else {\n        throw new SyntaxError(\"Expected a number or parentheses\");\n      }\n    },\n    parseMulExpr: function () {\n      var expr = this.parsePrimaryExpr();\n      var t = this.peek();\n\n      while (t === \"*\" || t === \"/\") {\n        this.consume(t);\n        var rhs = this.parsePrimaryExpr();\n        expr = {\n          type: t,\n          left: expr,\n          right: rhs\n        };\n        t = this.peek();\n      }\n\n      return expr;\n    },\n    parseExpression: function () {\n      var expr = this.parseMulExpr();\n      var t = this.peek();\n\n      while (t === \"+\" || t === \"-\") {\n        this.consume(t);\n        var rhs = this.parseMulExpr();\n        expr = {\n          type: t,\n          left: expr,\n          right: rhs\n        };\n        t = this.peek();\n      }\n\n      return expr;\n    },\n    parse: function (str) {\n      tokens = this.tokenizeExpression(str);\n      return this.parseExpression();\n    }\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Parser);\n\n//# sourceURL=webpack:///./src/script/parser/Parser.js?");

/***/ }),

/***/ "./src/script/substract/index.js":
/*!***************************************!*\
  !*** ./src/script/substract/index.js ***!
  \***************************************/
/*! exports provided: substract */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _substract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./substract */ \"./src/script/substract/substract.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"substract\", function() { return _substract__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./src/script/substract/index.js?");

/***/ }),

/***/ "./src/script/substract/substract.js":
/*!*******************************************!*\
  !*** ./src/script/substract/substract.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst substract = (a, b) => a - b;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (substract);\n\n//# sourceURL=webpack:///./src/script/substract/substract.js?");

/***/ }),

/***/ "./src/script/utils.js":
/*!*****************************!*\
  !*** ./src/script/utils.js ***!
  \*****************************/
/*! exports provided: isNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isNumber\", function() { return isNumber; });\nconst isNumber = token => {\n  return !isNaN(Number(token));\n};\n\n//# sourceURL=webpack:///./src/script/utils.js?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/styles/style.scss?");

/***/ })

/******/ });