/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./image-galery/src/components/components/footer/footer.js":
/*!*****************************************************************!*\
  !*** ./image-galery/src/components/components/footer/footer.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   footerHTMLSection: () => (/* binding */ footerHTMLSection)
/* harmony export */ });
/* harmony import */ var _utilities_htmlCreateComponentHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/htmlCreateComponentHelper */ "./image-galery/src/components/utilities/htmlCreateComponentHelper.js");
/* harmony import */ var _footer_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.html */ "./image-galery/src/components/components/footer/footer.html");
/* harmony import */ var _imageGalery_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../imageGalery.scss */ "./image-galery/src/components/imageGalery.scss");




// project entire styles


const footerHTMLSection = (0,_utilities_htmlCreateComponentHelper__WEBPACK_IMPORTED_MODULE_0__.htmlCreateComponentHelper)(_footer_html__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./image-galery/src/components/components/main/main.js":
/*!*************************************************************!*\
  !*** ./image-galery/src/components/components/main/main.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mainHTMLElement: () => (/* binding */ mainHTMLElement)
/* harmony export */ });
/* harmony import */ var _utilities_htmlCreateComponentHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/htmlCreateComponentHelper */ "./image-galery/src/components/utilities/htmlCreateComponentHelper.js");
/* harmony import */ var _main_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.html */ "./image-galery/src/components/components/main/main.html");
/* harmony import */ var _imageGalery_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../imageGalery.scss */ "./image-galery/src/components/imageGalery.scss");




// project entire styles


const mainHTMLElement = (0,_utilities_htmlCreateComponentHelper__WEBPACK_IMPORTED_MODULE_0__.htmlCreateComponentHelper)(_main_html__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./image-galery/src/components/imageGalerySelfCheck/imageGalerySelfCheck.js":
/*!**********************************************************************************!*\
  !*** ./image-galery/src/components/imageGalerySelfCheck/imageGalerySelfCheck.js ***!
  \**********************************************************************************/
/***/ (() => {

console.log(`
Привет!) Я ещё доделываю... Надеюсь на твоё понимание) На текущий момент готово: footer.

**ТЗ** https://github.com/rolling-scopes-school/tasks/blob/master/tasks/js30%23/js30-5.md

            **Форма для проверки** 
https://rolling-scopes-school.github.io/checklist/


**Ваша оценка - 5 баллов** 

#### Отзыв по пунктам ТЗ:

#####**Не выполненные/не засчитанные пункты:**
=====================================================
1) на странице есть несколько фото и строка поиска

2) При загрузке приложения на странице отображаются полученные от API изображения

3) Если в поле поиска ввести слово и отправить поисковый запрос, на странице отобразятся изображения соответствующей тематики, если такие данные предоставляет API

4) при открытии приложения курсор находится в поле ввода

5) есть placeholder

6) автозаполнение поля ввода отключено (нет выпадающего списка с предыдущими запросами)

7) поисковый запрос можно отправить нажатием клавиши Enter

8) после отправки поискового запроса и отображения результатов поиска, поисковый запрос продолжает отображаться в поле ввода

9) в поле ввода есть крестик при клике по которому поисковый запрос из поля ввода удаляется и отображается placeholder

10) Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения

#####**Выполненные пункты:**
=====================================================
1) в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс
`)

/***/ }),

/***/ "./image-galery/src/components/utilities/htmlCreateComponentHelper.js":
/*!****************************************************************************!*\
  !*** ./image-galery/src/components/utilities/htmlCreateComponentHelper.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   htmlCreateComponentHelper: () => (/* binding */ htmlCreateComponentHelper)
/* harmony export */ });
function htmlCreateComponentHelper(stringWithHTML) {
  const template = document.createElement('template');
  template.innerHTML = stringWithHTML;
  return template.content;
}

/***/ }),

/***/ "./image-galery/src/components/components/footer/footer.html":
/*!*******************************************************************!*\
  !*** ./image-galery/src/components/components/footer/footer.html ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!-- footer start -->\n<footer class=\"container layout-one-column footer__container\">\n  <ul class=\"layout-multiple-columns footer__list\">\n    <li class=\"text-l footer__item\">&copy; 2023 Dmitriy Frostoff</li>\n    <li class=\"footer__item\">\n        <a class=\"layout-one-column footer__link\" href=\"https://github.com/Dmitriy-Frostoff\" title=\"click to visit Dmitriy-Frostoff's GitHub\" target=\"_blank\">\n          <span>\n            <svg class=\"footer__icon\" aria-hidden=\"true\" width=\"24\" height=\"24\" viewBox=\"0 0 16 16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" data-view-component=\"true\"><path  fill-rule=\"evenodd\" d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z\"></path></svg>\n          </span>\n          <span class=\"text-l github-text\">GitHub</span>\n        </a>\n    </li>\n    <li class=\"footer__item\">\n      <a class=\"footer__link rsschool-logo\" href=\"https://rs.school/js/\" title=\"click to go to the RS School Course\" target=\"_blank\">\n        <span>\n          <svg class=\"footer__icon\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 552.8 205.3\"><style>.st0{fill:#fff}.st1{clip-path:url(#SVGID_2_)}.st2{clip-path:url(#SVGID_4_)}.st3{clip-path:url(#SVGID_6_)}.st4{clip-path:url(#SVGID_8_)}.st5{fill:#fff;stroke:#000;stroke-width:4;stroke-miterlimit:10}.st6{clip-path:url(#SVGID_8_)}.st6,.st7{fill:none;stroke:#000;stroke-width:4;stroke-miterlimit:10}.st8,.st9{clip-path:url(#SVGID_10_)}.st9{fill:none;stroke:#000;stroke-width:4;stroke-miterlimit:10}</style><title>rs_school_js</title><path d=\"M285.4 68l26.3-1.7c.6 4.3 1.7 7.5 3.5 9.8 2.9 3.6 6.9 5.4 12.2 5.4 3.9 0 7-.9 9.1-2.8 2-1.5 3.2-3.9 3.2-6.4 0-2.4-1.1-4.7-3-6.2-2-1.8-6.7-3.6-14.1-5.2-12.1-2.7-20.8-6.3-25.9-10.9-5.1-4.3-8-10.6-7.8-17.3 0-4.6 1.4-9.2 4-13 3-4.3 7.1-7.7 12-9.6 5.3-2.3 12.7-3.5 22-3.5 11.4 0 20.1 2.1 26.1 6.4 6 4.2 9.6 11 10.7 20.3l-26 1.5c-.7-4-2.1-6.9-4.4-8.8s-5.3-2.8-9.2-2.8c-3.2 0-5.6.7-7.2 2-1.5 1.2-2.5 3-2.4 5 0 1.5.8 2.9 2 3.8 1.3 1.2 4.4 2.3 9.3 3.3 12.1 2.6 20.7 5.2 26 7.9 5.3 2.7 9.1 6 11.4 9.9 2.4 4 3.6 8.6 3.5 13.3 0 5.6-1.6 11.2-4.8 15.9-3.3 4.9-7.9 8.7-13.3 11-5.7 2.5-12.9 3.8-21.5 3.8-15.2 0-25.7-2.9-31.6-8.8S286.1 77 285.4 68zM6.3 97.6V8.2h46.1c8.5 0 15.1.7 19.6 2.2 4.4 1.4 8.3 4.3 10.9 8.2 2.9 4.3 4.3 9.3 4.2 14.5.3 8.8-4.2 17.2-11.9 21.6-3 1.7-6.3 2.9-9.7 3.5 2.5.7 5 1.9 7.2 3.3 1.7 1.4 3.1 3 4.4 4.7 1.5 1.7 2.8 3.6 3.9 5.6l13.4 25.9H63L48.2 70.2c-1.9-3.5-3.5-5.8-5-6.9-2-1.4-4.4-2.1-6.8-2.1H34v36.3H6.3zM34 44.4h11.7c2.5-.2 4.9-.6 7.3-1.2 1.8-.3 3.4-1.3 4.5-2.8 2.7-3.6 2.3-8.7-1-11.8-1.8-1.5-5.3-2.3-10.3-2.3H34v18.1zM0 174.2l26.3-1.7c.6 4.3 1.7 7.5 3.5 9.8 2.8 3.6 6.9 5.5 12.2 5.5 3.9 0 7-.9 9.1-2.8 2-1.6 3.2-3.9 3.2-6.4 0-2.4-1.1-4.7-3-6.2-2-1.8-6.7-3.6-14.2-5.2-12.1-2.7-20.8-6.3-25.9-10.9-5.1-4.3-8-10.6-7.8-17.3 0-4.6 1.4-9.2 4-13 3-4.3 7.1-7.7 12-9.6 5.3-2.3 12.7-3.5 22-3.5 11.4 0 20.1 2.1 26.1 6.4s9.5 11 10.6 20.3l-26 1.5c-.7-4-2.1-6.9-4.4-8.8-2.2-1.9-5.3-2.8-9.2-2.7-3.2 0-5.6.7-7.2 2.1-1.6 1.2-2.5 3-2.4 5 0 1.5.8 2.9 2 3.8 1.3 1.2 4.4 2.3 9.3 3.3 12.1 2.6 20.7 5.2 26 7.9 5.3 2.7 9.1 6 11.4 9.9 2.4 4 3.6 8.6 3.6 13.2 0 5.6-1.7 11.1-4.8 15.8-3.3 4.9-7.9 8.7-13.3 11-5.7 2.5-12.9 3.8-21.5 3.8-15.2 0-25.7-2.9-31.6-8.8-5.9-6-9.2-13.4-10-22.4z\"/><path d=\"M133 167.2l24.2 7.3c-1.3 6.1-4 11.9-7.7 17-3.4 4.5-7.9 8-13 10.3-5.2 2.3-11.8 3.5-19.8 3.5-9.7 0-17.7-1.4-23.8-4.2-6.2-2.8-11.5-7.8-16-14.9-4.5-7.1-6.7-16.2-6.7-27.3 0-14.8 3.9-26.2 11.8-34.1s19-11.9 33.4-11.9c11.3 0 20.1 2.3 26.6 6.8 6.4 4.6 11.2 11.6 14.4 21l-24.4 5.4c-.6-2.1-1.5-4.2-2.7-6-1.5-2.1-3.4-3.7-5.7-4.9-2.3-1.2-4.9-1.7-7.5-1.7-6.3 0-11.1 2.5-14.4 7.6-2.5 3.7-3.8 9.6-3.8 17.6 0 9.9 1.5 16.7 4.5 20.4 3 3.7 7.2 5.5 12.7 5.5 5.3 0 9.3-1.5 12-4.4 2.7-3.1 4.7-7.4 5.9-13zm56.5-52.8h27.6v31.3h30.2v-31.3h27.8v89.4h-27.8v-36.2h-30.2v36.2h-27.6v-89.4z\"/><path d=\"M271.3 159.1c0-14.6 4.1-26 12.2-34.1 8.1-8.1 19.5-12.2 34-12.2 14.9 0 26.3 4 34.4 12S364 144 364 158.4c0 10.5-1.8 19-5.3 25.7-3.4 6.6-8.7 12-15.2 15.6-6.7 3.7-15 5.6-24.9 5.6-10.1 0-18.4-1.6-25-4.8-6.8-3.4-12.4-8.7-16.1-15.2-4.1-7-6.2-15.7-6.2-26.2zm27.6.1c0 9 1.7 15.5 5 19.5 3.3 3.9 7.9 5.9 13.7 5.9 5.9 0 10.5-1.9 13.8-5.8s4.9-10.8 4.9-20.8c0-8.4-1.7-14.6-5.1-18.4-3.4-3.9-8-5.8-13.8-5.8-5.1-.2-10 2-13.4 5.9-3.4 3.9-5.1 10.4-5.1 19.5zm93.4-.1c0-14.6 4.1-26 12.2-34.1 8.1-8.1 19.5-12.2 34-12.2 14.9 0 26.4 4 34.4 12S485 144 485 158.4c0 10.5-1.8 19-5.3 25.7-3.4 6.6-8.7 12-15.2 15.6-6.7 3.7-15 5.6-24.9 5.6-10.1 0-18.4-1.6-25-4.8-6.8-3.4-12.4-8.7-16.1-15.2-4.1-7-6.2-15.7-6.2-26.2zm27.6.1c0 9 1.7 15.5 5 19.5 3.3 3.9 7.9 5.9 13.7 5.9 5.9 0 10.5-1.9 13.8-5.8 3.3-3.9 4.9-10.8 4.9-20.8 0-8.4-1.7-14.6-5.1-18.4-3.4-3.9-8-5.8-13.8-5.8-5.1-.2-10.1 2-13.4 5.9-3.4 3.9-5.1 10.4-5.1 19.5z\"/><path d=\"M482.1 114.4h27.6v67.4h43.1v22H482v-89.4z\"/><ellipse transform=\"rotate(-37.001 420.46 67.88)\" class=\"st0\" cx=\"420.5\" cy=\"67.9\" rx=\"63\" ry=\"51.8\"/><defs><ellipse id=\"SVGID_1_\" transform=\"rotate(-37.001 420.46 67.88)\" cx=\"420.5\" cy=\"67.9\" rx=\"63\" ry=\"51.8\"/></defs><clipPath id=\"SVGID_2_\"><use xlink:href=\"#SVGID_1_\" overflow=\"visible\"/></clipPath><g class=\"st1\"><path transform=\"rotate(-37.001 420.82 68.353)\" class=\"st0\" d=\"M330.9-14.2h179.8v165.1H330.9z\"/><g id=\"Layer_2_1_\"><defs><path id=\"SVGID_3_\" transform=\"rotate(-37.001 420.82 68.353)\" d=\"M330.9-14.2h179.8v165.1H330.9z\"/></defs><clipPath id=\"SVGID_4_\"><use xlink:href=\"#SVGID_3_\" overflow=\"visible\"/></clipPath><g id=\"Layer_1-2\" class=\"st2\"><ellipse transform=\"rotate(-37.001 420.46 67.88)\" class=\"st0\" cx=\"420.5\" cy=\"67.9\" rx=\"63\" ry=\"51.8\"/><defs><ellipse id=\"SVGID_5_\" transform=\"rotate(-37.001 420.46 67.88)\" cx=\"420.5\" cy=\"67.9\" rx=\"63\" ry=\"51.8\"/></defs><clipPath id=\"SVGID_6_\"><use xlink:href=\"#SVGID_5_\" overflow=\"visible\"/></clipPath><g class=\"st3\"><path transform=\"rotate(-37 420.799 68.802)\" class=\"st0\" d=\"M357.8 17h125.9v103.7H357.8z\"/><defs><path id=\"SVGID_7_\" transform=\"rotate(-37 420.799 68.802)\" d=\"M357.8 17h125.9v103.7H357.8z\"/></defs><clipPath id=\"SVGID_8_\"><use xlink:href=\"#SVGID_7_\" overflow=\"visible\"/></clipPath><g class=\"st4\"><ellipse transform=\"rotate(-37.001 420.46 67.88)\" class=\"st5\" cx=\"420.5\" cy=\"67.9\" rx=\"63\" ry=\"51.8\"/></g><path transform=\"rotate(-37 420.799 68.802)\" class=\"st6\" d=\"M357.8 17h125.9v103.7H357.8z\"/><ellipse transform=\"rotate(-37.001 420.46 67.88)\" class=\"st7\" cx=\"420.5\" cy=\"67.9\" rx=\"63\" ry=\"51.8\"/><path transform=\"rotate(-37 420.799 68.802)\" class=\"st0\" d=\"M357.8 17h125.9v103.7H357.8z\"/><defs><path id=\"SVGID_9_\" transform=\"rotate(-37 420.799 68.802)\" d=\"M357.8 17h125.9v103.7H357.8z\"/></defs><clipPath id=\"SVGID_10_\"><use xlink:href=\"#SVGID_9_\" overflow=\"visible\"/></clipPath><g class=\"st8\"><ellipse transform=\"rotate(-37.001 420.46 67.88)\" class=\"st5\" cx=\"420.5\" cy=\"67.9\" rx=\"63\" ry=\"51.8\"/></g><path transform=\"rotate(-37 420.799 68.802)\" class=\"st9\" d=\"M357.8 17h125.9v103.7H357.8z\"/><path transform=\"rotate(-37.001 420.82 68.353)\" class=\"st7\" d=\"M330.9-14.2h179.8v165.1H330.9z\"/></g><ellipse transform=\"rotate(-37.001 420.46 67.88)\" class=\"st7\" cx=\"420.5\" cy=\"67.9\" rx=\"63\" ry=\"51.8\"/><path d=\"M392.4 61.3l10-7 12.3 17.5c2.1 2.8 3.7 5.8 4.9 9.1.7 2.5.5 5.2-.5 7.6-1.3 3-3.4 5.5-6.2 7.3-3.3 2.3-6.1 3.6-8.5 4-2.3.4-4.7 0-6.9-1-2.4-1.2-4.5-2.9-6.1-5.1l8.6-8c.7 1.1 1.6 2.1 2.6 2.9.7.5 1.5.8 2.4.8.7 0 1.4-.3 1.9-.7 1-.6 1.7-1.8 1.6-3-.3-1.7-1-3.4-2.1-4.7l-14-19.7zm30 11.1l9.1-7.2c1 1.2 2.3 2.1 3.7 2.6 2 .6 4.1.2 5.8-1.1 1.2-.8 2.2-1.9 2.6-3.3.6-1.8-.4-3.8-2.2-4.4-.3-.1-.6-.2-.9-.2-1.2-.1-3.3.4-6.4 1.7-5.1 2.1-9.1 2.9-12.1 2.6-2.9-.3-5.6-1.8-7.2-4.3-1.2-1.7-1.8-3.7-1.9-5.7 0-2.3.6-4.6 1.9-6.5 1.9-2.7 4.2-5 7-6.8 4.2-2.9 7.9-4.3 11.1-4.3 3.2 0 6.2 1.5 9 4.6l-9 7.1c-1.8-2.3-5.2-2.8-7.5-1l-.3.3c-1 .6-1.7 1.5-2.1 2.6-.3.8-.1 1.7.4 2.4.4.5 1 .9 1.7.9.8.1 2.2-.3 4.2-1.2 5-2.1 8.8-3.3 11.4-3.7 2.2-.4 4.5-.2 6.6.7 1.9.8 3.5 2.2 4.6 3.9 1.4 2 2.2 4.4 2.3 6.9.1 2.6-.6 5.1-2 7.3-1.8 2.7-4.1 5-6.8 6.8-5.5 3.8-10 5.4-13.6 4.8-3.9-.6-7.1-2.6-9.4-5.5z\"/></g></g></g></svg>\n        </span>\n      </a>\n    </li>\n  </ul>\n</footer>\n<!-- footer end -->";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./image-galery/src/components/components/main/main.html":
/*!***************************************************************!*\
  !*** ./image-galery/src/components/components/main/main.html ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!-- main start -->\n<main class=\"layout-one-column main__container\"></main>\n<!-- main end -->";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./image-galery/src/components/index.html":
/*!************************************************!*\
  !*** ./image-galery/src/components/index.html ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/icons8-camera-ios-16-16.ico */ "./image-galery/src/assets/icons/icons8-camera-ios-16-16.ico"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/icons8-camera-ios-16-32.ico */ "./image-galery/src/assets/icons/icons8-camera-ios-16-32.ico"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/icons8-camera-ios-16-96.ico */ "./image-galery/src/assets/icons/icons8-camera-ios-16-96.ico"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <meta name=\"keywords\" content=\"image-galery, unsplash-api\">\r\n  <title>Image-galery</title>\r\n   <!-- favicon start -->\r\n   <link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" sizes=\"16x16\" type=\"image/x-icon\">\r\n   <link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" sizes=\"32x32\" type=\"image/x-icon\">\r\n   <link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" sizes=\"96x96\" type=\"image/x-icon\">\r\n   <!-- favicon end -->\r\n  <!-- css elements start -->\r\n  <!-- css elements end -->\r\n  <!-- Fonts links start -->\r\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\r\n  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\r\n  <link href=\"https://fonts.googleapis.com/css2?family=Inter&display=swap\" rel=\"stylesheet\">\r\n  <!-- Fonts links end -->\r\n</head>\r\n<body>\r\n  \r\n</body>\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./image-galery/src/components/imageGalery.scss":
/*!******************************************************!*\
  !*** ./image-galery/src/components/imageGalery.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./image-galery/src/assets/icons/icons8-camera-ios-16-16.ico":
/*!*******************************************************************!*\
  !*** ./image-galery/src/assets/icons/icons8-camera-ios-16-16.ico ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/icons/icons8-camera-ios-16-16.1e93.ico";

/***/ }),

/***/ "./image-galery/src/assets/icons/icons8-camera-ios-16-32.ico":
/*!*******************************************************************!*\
  !*** ./image-galery/src/assets/icons/icons8-camera-ios-16-32.ico ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/icons/icons8-camera-ios-16-32.76db.ico";

/***/ }),

/***/ "./image-galery/src/assets/icons/icons8-camera-ios-16-96.ico":
/*!*******************************************************************!*\
  !*** ./image-galery/src/assets/icons/icons8-camera-ios-16-96.ico ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/icons/icons8-camera-ios-16-96.773d.ico";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************************************!*\
  !*** ./image-galery/src/components/index.js ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./image-galery/src/components/index.html");
/* harmony import */ var _imageGalery_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageGalery.scss */ "./image-galery/src/components/imageGalery.scss");
/* harmony import */ var _components_main_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main/main */ "./image-galery/src/components/components/main/main.js");
/* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer */ "./image-galery/src/components/components/footer/footer.js");
/* harmony import */ var _imageGalerySelfCheck_imageGalerySelfCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imageGalerySelfCheck/imageGalerySelfCheck */ "./image-galery/src/components/imageGalerySelfCheck/imageGalerySelfCheck.js");
/* harmony import */ var _imageGalerySelfCheck_imageGalerySelfCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_imageGalerySelfCheck_imageGalerySelfCheck__WEBPACK_IMPORTED_MODULE_4__);



// HTML components



// self - check


// HTML elements
const body = document.querySelector('body');

// nesting components
body.append(_components_main_main__WEBPACK_IMPORTED_MODULE_2__.mainHTMLElement);
const main = document.querySelector('main');

body.append(_components_footer_footer__WEBPACK_IMPORTED_MODULE_3__.footerHTMLSection);
})();

/******/ })()
;
//# sourceMappingURL=main.c14f.js.map