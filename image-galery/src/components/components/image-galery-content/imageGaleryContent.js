import { htmlCreateComponentHelper } from '../../utilities/htmlCreateComponentHelper';

import imageGaleryContentHTMLTemplate from "./imageGaleryContent.html";

// project entire styles
import "../../imageGalery.scss";

const imageGaleryContentHTMLElement = htmlCreateComponentHelper(imageGaleryContentHTMLTemplate);

export { imageGaleryContentHTMLElement };