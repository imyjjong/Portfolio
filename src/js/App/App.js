import Heading from '../Heading/Heading.js';
import Header from '../Header/Header.js';
import About from '../About/About.js';
import Projects from '../Projects/Projects.js';
import Contact from '../Contact/Contact.js';
import Footer from '../Footer/Footer.js';
class App{
    constructor(){
        this.heading = new Heading();
        this.header = new Header();
        this.about = new About();
        this.projects = new Projects();
        this.contact = new Contact();
        this.footer = new Footer();
    }
}

export default App;