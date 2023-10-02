import { htmlCreateComponentHelper } from '../../utilities/htmlCreateComponentHelper';

import mainHtmlTemplate from './main.html';

// project entire styles
import '../../imageGalery.scss';

const mainHTMLElement = htmlCreateComponentHelper(mainHtmlTemplate);

export { mainHTMLElement };