import { htmlCreateComponentHelper } from '../../utilities/htmlCreateComponentHelper';

import searchHTMLTemplate from "./search.html";

// project entire styles
import "../../imageGalery.scss";

const searchHTMLElement = htmlCreateComponentHelper(searchHTMLTemplate);

export { searchHTMLElement };