"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: 'Courier New', Courier, monospace;\\r\\n  font-weight: 600;\\r\\n  min-height: 100vh;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.nav-links {\\r\\n  display: flex;\\r\\n  list-style: none;\\r\\n  justify-content: space-evenly;\\r\\n  margin: 30px 10%;\\r\\n  gap: 10%;\\r\\n}\\r\\n\\r\\n.nav-links a {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n#movies {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1fr 1fr;\\r\\n  justify-items: center;\\r\\n}\\r\\n\\r\\n.card-container {\\r\\n  margin-top: 50px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.poster {\\r\\n  width: 150px;\\r\\n}\\r\\n\\r\\n.name {\\r\\n  display: flex;\\r\\n  margin-top: 10px;\\r\\n}\\r\\n\\r\\n.likes {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.heart,\\r\\n.xbutton {\\r\\n  width: 30px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  font-family: 'Courier New', Courier, monospace;\\r\\n  font-weight: 600;\\r\\n  box-shadow: 3px 3px black;\\r\\n  padding: 5px 10px;\\r\\n  margin-top: 10px;\\r\\n  background-color: white;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  border-top: 3px solid black;\\r\\n  width: 100%;\\r\\n  margin-top: 30px;\\r\\n  margin-bottom: 40px;\\r\\n}\\r\\n\\r\\n.popup {\\r\\n  position: fixed;\\r\\n  top: 1vh;\\r\\n  height: 98vh;\\r\\n  width: 95vw;\\r\\n  background: white;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  border: 2px solid black;\\r\\n}\\r\\n\\r\\n.xbutton {\\r\\n  position: absolute;\\r\\n  top: 20px;\\r\\n  right: 20px;\\r\\n}\\r\\n\\r\\n.poster2 {\\r\\n  width: 180px;\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n\\r\\ninput,\\r\\ntextarea {\\r\\n  border: 3px solid black;\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\n.popup h2,\\r\\n.popup p,\\r\\n.popup h3,\\r\\n.popup h4,\\r\\n.popup input {\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n\\r\\n.popComment {\\r\\n  font-size: 12px;\\r\\n  margin-bottom: 10px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _modules_fetch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/fetch.js */ \"./src/modules/fetch.js\");\n/* harmony import */ var _modules_popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/popup.js */ \"./src/modules/popup.js\");\n/* harmony import */ var _images_heart_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/heart.png */ \"./src/images/heart.png\");\n/* harmony import */ var _images_xbutton_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/xbutton.png */ \"./src/images/xbutton.png\");\n/* harmony import */ var _modules_likes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/likes.js */ \"./src/modules/likes.js\");\n/* harmony import */ var _modules_items_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/items.js */ \"./src/modules/items.js\");\n\r\n\r\n\r\n/* eslint-disable  no-unused-vars */\r\n\r\n\r\n\r\n\r\n\r\nconst list = document.getElementById('movies');\r\nconst movies = [];\r\nconst data = () => {\r\n  (0,_modules_fetch_js__WEBPACK_IMPORTED_MODULE_1__.fetchMovie)().then((results) => {\r\n    const movie = results.map((data) => ({\r\n      name: data.name,\r\n      id: data.id,\r\n      image: data.image.medium,\r\n      genres: data.genres,\r\n    }));\r\n    movies.push(...movie);\r\n    (0,_modules_fetch_js__WEBPACK_IMPORTED_MODULE_1__.displayMovie)(movie);\r\n    (0,_modules_items_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n  });\r\n};\r\n\r\ndata();\r\n\r\nlist.addEventListener('click', (e) => {\r\n  if (e.target.classList.contains('comment')) {\r\n    const movieId = parseInt(e.target.id.slice(-1), 10);\r\n    (0,_modules_popup_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(movies.find((m) => m.id === movieId));\r\n    // const popupComments= document.getElementById('popComment');\r\n    // const popupHead = document.getElementById('commentCounter');\r\n    // if(popupComments.childElementCount===0) {\r\n    // popupHead.innerHTML = 'Comments(0)';\r\n    // };\r\n  }\r\n  if (e.target.classList.contains('xbutton')) {\r\n    list.firstElementChild.remove();\r\n  }\r\n  if (e.target.classList.contains('heart')) {\r\n    (0,_modules_likes_js__WEBPACK_IMPORTED_MODULE_5__.postData)(e.target.id.charAt(0));\r\n    (0,_modules_fetch_js__WEBPACK_IMPORTED_MODULE_1__.displayMovie)(movies);\r\n  }\r\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/fetch.js":
/*!******************************!*\
  !*** ./src/modules/fetch.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayMovie\": () => (/* binding */ displayMovie),\n/* harmony export */   \"fetchMovie\": () => (/* binding */ fetchMovie)\n/* harmony export */ });\n/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likes.js */ \"./src/modules/likes.js\");\n\r\n\r\nconst displayMovie = (movie) => {\r\n   \r\n  const list = document.getElementById('movies');\r\n  const newMovie = movie.map((movieId) => `\r\n  <div class=\"card-container\">\r\n        <img class=\"poster\" src=\"${movieId.image}\" alt=\"\" />\r\n        <div class=\"name\">\r\n          <p>${movieId.name}</p>\r\n          <div class=\"likes\">\r\n            <img id=\"${movieId.id}A\" class=\"heart\" src=\"ced5220738fcbc8b88e8.png\" alt=\"\" />\r\n            <p id=\"${movieId.id}\" class=\"text\">Likes</p>\r\n          </div>\r\n        </div>\r\n        <button id=\"item${movieId.id}\" class=\"comment\">Comments</button>\r\n        <button class=\"reservation\">Reservations</button>\r\n      </div>\r\n  `).join('');\r\n  list.innerHTML = newMovie;\r\n  const parag = document.querySelectorAll('.text');\r\n  parag.forEach((paragraph) => {\r\n    const like = ' Likes';\r\n    (0,_likes_js__WEBPACK_IMPORTED_MODULE_0__.getData)('likes').then((result) => { paragraph.textContent = (result[paragraph.id - 1].likes) + like; });\r\n  });\r\n};\r\n\r\nconst fetchMovie = async () => {\r\n  const promises = [];\r\n  for (let i = 1; i < 7; i += 1) {\r\n    const api = `https://api.tvmaze.com/shows/${i}`;\r\n    // eslint-disable-next-line no-await-in-loop\r\n    const data = await fetch(api).then((res) => res.json());\r\n    promises.push(data);\r\n  }\r\n  return promises;\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/modules/fetch.js?");

/***/ }),

/***/ "./src/modules/items.js":
/*!******************************!*\
  !*** ./src/modules/items.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst list = document.getElementById('movies');\r\nconst movieCount = document.getElementById('movieNav');\r\n\r\nconst itemCounter = () => {\r\n  movieCount.innerHTML = `Movies (${list.children.length})`;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemCounter);\n\n//# sourceURL=webpack:///./src/modules/items.js?");

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData),\n/* harmony export */   \"postData\": () => (/* binding */ postData)\n/* harmony export */ });\nconst getData = async (action) => {\r\n  const interaction = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fMjDgeXVKzKMyQltWGlL/${action}`;\r\n  const response = await fetch(interaction);\r\n  const data = await response.json();\r\n\r\n  return data;\r\n};\r\n\r\nconst postData = async (id) => {\r\n  const settings = {\r\n    method: 'POST',\r\n    headers: {\r\n      Accept: 'application/json',\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify({\r\n      item_id: `item${id}`,\r\n    }),\r\n  };\r\n  try {\r\n    const fetchResponse = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fMjDgeXVKzKMyQltWGlL/likes', settings);\r\n    const data = await fetchResponse.json();\r\n    return data;\r\n  } catch (e) {\r\n    return e;\r\n  }\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/modules/likes.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likes.js */ \"./src/modules/likes.js\");\n\r\n\r\nconst list = document.getElementById('movies');\r\nconst displayPopUp = (movieId) => {\r\n  const { image } = movieId;\r\n  const comments=[];\r\n  let popComments='';\r\n  let popUp='';\r\n  (0,_likes_js__WEBPACK_IMPORTED_MODULE_0__.getData)(`comments?item_id=item${movieId.id}`).then((result) => { comments.push(...result);\r\n  comments.forEach((comment) => {\r\n  popComments += `<p>${comment.creation_date} ${comment.username} ${comment.comment}</p>`;\r\n  });\r\n  \r\n  \r\n   })\r\n   .finally(() => {\r\n   popUp += `\r\n<div class=\"popup\">\r\n  <div>\r\n    <img class=\"poster2\" src=\"${image}\" alt=\"\" />\r\n    <img class=\"xbutton\" src=\"b17907ef6e75236830e9.png\" alt=\"\" />\r\n  </div>\r\n  <h2>${movieId.name}</h2>\r\n  <p>${movieId.genres}</p>\r\n  <h3 id=\"commentCounter\">Comments(${comments.length})</h3>\r\n  <div id=\"popComment\">${popComments}</div>\r\n  \r\n</div>\r\n  `;\r\n  list.innerHTML = popUp + list.innerHTML;\r\n   });\r\n  \r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayPopUp);\n\n//# sourceURL=webpack:///./src/modules/popup.js?");

/***/ }),

/***/ "./src/images/heart.png":
/*!******************************!*\
  !*** ./src/images/heart.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ced5220738fcbc8b88e8.png\";\n\n//# sourceURL=webpack:///./src/images/heart.png?");

/***/ }),

/***/ "./src/images/xbutton.png":
/*!********************************!*\
  !*** ./src/images/xbutton.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b17907ef6e75236830e9.png\";\n\n//# sourceURL=webpack:///./src/images/xbutton.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);