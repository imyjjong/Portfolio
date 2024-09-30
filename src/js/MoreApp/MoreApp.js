import MoreHeader from '../MoreHeader/MoreHeader.js';
import Filters from '../Filters/Filters.js';
import More from '../More/More.js';
import Footer from '../Footer/Footer.js';

class MoreApp{
    constructor(){
        this.header = new MoreHeader();
        this.filters = new Filters();
        this.more = new More();
        this.footer = new Footer();
    }
}

const moreApp = new MoreApp();