/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script/geradorSenha.js":
/*!************************************!*\
  !*** ./src/script/geradorSenha.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Senha)\n/* harmony export */ });\nclass Senha{\r\n    constructor(quantidade, maiuscula, minuscula, numero, simbolo){\r\n        this.quantidade = quantidade\r\n        this.maiuscula = maiuscula\r\n        this.minuscula = minuscula\r\n        this.numero = numero\r\n        this.simbolo = simbolo\r\n    }\r\n\r\n    numeroAleatorio(length){\r\n        return Math.floor(Math.random() * length)\r\n    }\r\n\r\n    gerarMaiuscula(){\r\n        const letrasMaiusculas = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\"\r\n\r\n        if(this.maiuscula === true){\r\n            return letrasMaiusculas[this.numeroAleatorio(letrasMaiusculas.length)]\r\n        }\r\n        \r\n        return\r\n    }\r\n\r\n    gerarMinuscula(){\r\n        const letrasMinusculas = \"abcdefghijklmnopqrstuvwxyz\"\r\n\r\n        if(this.minuscula === true){\r\n            return letrasMinusculas[this.numeroAleatorio(letrasMinusculas.length)]\r\n        }\r\n\r\n        return\r\n    }\r\n\r\n    gerarNumero(){\r\n        const numeros = \"123456789\"\r\n\r\n        if(this.numero === true){\r\n            return numeros[this.numeroAleatorio(numeros.length)]\r\n        }\r\n\r\n        return\r\n    }\r\n\r\n    gerarSimbolo(){\r\n        const simbolos = \"!@#$%¨&*()_=-§+[~];:.,\\|/?\"\r\n\r\n        if(this.simbolo === true){\r\n            return simbolos[this.numeroAleatorio(simbolos.length)]\r\n        }\r\n\r\n        return\r\n    }\r\n\r\n    gerarSenha(){\r\n        let senhaArray = []\r\n\r\n        for(let i = 0; i < this.quantidade; i++){\r\n            senhaArray.push(this.gerarMaiuscula())\r\n            senhaArray.push(this.gerarMinuscula())\r\n            senhaArray.push(this.gerarNumero())\r\n            senhaArray.push(this.gerarSimbolo())\r\n        }\r\n\r\n        return senhaArray.join('').slice(0, this.quantidade) || 'Nada Selecionado'\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://geraradorsenha/./src/script/geradorSenha.js?");

/***/ }),

/***/ "./src/script/main.js":
/*!****************************!*\
  !*** ./src/script/main.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _manipularDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manipularDom */ \"./src/script/manipularDom.js\");\n\r\n(0,_manipularDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n//# sourceURL=webpack://geraradorsenha/./src/script/main.js?");

/***/ }),

/***/ "./src/script/manipularDom.js":
/*!************************************!*\
  !*** ./src/script/manipularDom.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ geradorSenhaDom)\n/* harmony export */ });\n/* harmony import */ var _geradorSenha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geradorSenha */ \"./src/script/geradorSenha.js\");\n\r\n\r\nconst btnGerador = document.querySelector('.btn-gerador')\r\nconst campoSenha = document.querySelector('.gerar-senha')\r\nconst inputQuantidade = document.querySelector('.quantidade_caracters')\r\nconst inputMaiuscula = document.querySelector('.maiusculas')\r\nconst inputMinuscula = document.querySelector('.minusculas')\r\nconst inputNumeros = document.querySelector('.numeros')\r\nconst inputSimbolos = document.querySelector('.simbolos')\r\n\r\nfunction geradorSenhaDom(){\r\n    btnGerador.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n\r\n        const detalhesDom = {\r\n            quantidade: inputQuantidade.value,\r\n            maiuscula: inputMaiuscula.checked,\r\n            minuscula: inputMinuscula.checked,\r\n            numeros: inputNumeros.checked,\r\n            simbolos: inputSimbolos.checked\r\n        }\r\n\r\n        let gerarSenha = new _geradorSenha__WEBPACK_IMPORTED_MODULE_0__[\"default\"](detalhesDom.quantidade, detalhesDom.maiuscula, detalhesDom.minuscula, detalhesDom.numeros, detalhesDom.simbolos)\r\n\r\n        campoSenha.innerHTML = gerarSenha.gerarSenha()\r\n    })\r\n}\n\n//# sourceURL=webpack://geraradorsenha/./src/script/manipularDom.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script/main.js");
/******/ 	
/******/ })()
;