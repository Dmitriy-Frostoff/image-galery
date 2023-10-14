import './index.html';
import './imageGalery.scss';

// HTML components
import { headerHTMLElement } from './components/header/header';
import { searchHTMLElement } from './components/search/search';
import { mainHTMLElement } from './components/main/main';
import { imageGaleryContentHTMLElement } from './components/image-galery-content/imageGaleryContent';
import { footerHTMLSection } from './components/footer/footer';
// self - check
import { imageGalerySelfCheck } from './imageGalerySelfCheck/imageGalerySelfCheck';

// logic and utilities
import { imageGaleryHandler } from './components/image-galery-content/imageGaleryContentHandler';

// HTML elements
const body = document.querySelector('body');

// nesting components
body.append(headerHTMLElement);
const headerContainer = document.querySelector('.header-container');
headerContainer.append(searchHTMLElement);


body.append(mainHTMLElement);
const main = document.querySelector('main');
main.append(imageGaleryContentHTMLElement);

body.append(footerHTMLSection);

// functions realization
window.addEventListener('load', () => {
  imageGaleryHandler();
})