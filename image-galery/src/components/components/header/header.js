import { htmlCreateComponentHelper } from '../../utilities/htmlCreateComponentHelper';

import headerHTMLTemplate from "./header.html";

// project entire styles
import "../../imageGalery.scss";

const headerHTMLElement = htmlCreateComponentHelper(headerHTMLTemplate);

export { headerHTMLElement };