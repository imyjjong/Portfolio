class Contact{
    constructor(){
        this.data = new Fetch();
        this.createContact();
    }
    async createContact(){
        this.body = document.querySelector("body");

        this.contact = document.createElement("section");
        this.contact.classList.add("contact");
        this.contact.setAttribute("id", "contact");
        this.body.appendChild(this.contact);
        
        this.title = document.createElement("h2");
        this.title.classList.add("contact__title");
        this.title.innerText = "Contact";
        this.contact.appendChild(this.title);

        this.wrapper = document.createElement("div");
        this.wrapper.classList.add("contact__wrapper");
        this.contact.appendChild(this.wrapper);

        const data = await this.data.fetch();
        for(let i = 0; i < data.contact.length; i++){
            this.link = document.createElement("a");
            this.link.classList.add("contact__wrapper--link");
            this.link.setAttribute("href", data.contact[i].link);
            this.link.setAttribute("target", "_BLANK");
            this.wrapper.appendChild(this.link);

            this.icon = document.createElement("i");
            this.icon.classList = data.contact[i].class;
            this.link.appendChild(this.icon);
        }
    }
}

export default Contact;