class Footer{
    constructor(){
        this.createFooter();
    }
    async createFooter(){
        this.body = document.querySelector("body");

        this.footer = document.createElement("footer");
        this.footer.classList.add("footer");
        this.body.appendChild(this.footer);
        
        this.information = document.createElement("div");
        this.information.classList.add("footer__information");
        this.footer.appendChild(this.information);

        this.text = document.createElement("h3");
        this.text.classList.add("footer__information--text");
        this.text.innerText = "Portfolio Sara Mohammed";
        this.information.appendChild(this.text);
    }
}

export default Footer;