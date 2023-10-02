import { htmlCreateComponentHelper } from '../../utilities/htmlCreateComponentHelper';

import footerHtmlTemplate from './footer.html';

// project entire styles
import '../../imageGalery.scss';

const footerHTMLSection = htmlCreateComponentHelper(footerHtmlTemplate);

export { footerHTMLSection };