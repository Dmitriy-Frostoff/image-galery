import './index.html';
import './imageGalery.scss';

// HTML components
import { mainHTMLElement } from './components/main/main';
import { footerHTMLSection } from './components/footer/footer';

// self - check
import { imageGalerySelfCheck } from './imageGalerySelfCheck/imageGalerySelfCheck';

// HTML elements
const body = document.querySelector('body');

// nesting components
body.append(mainHTMLElement);
const main = document.querySelector('main');

body.append(footerHTMLSection);