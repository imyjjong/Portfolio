class About{
    constructor(){
        this.data = new Fetch();
        this.createAbout();
    }
    async createAbout(){
        this.body = document.querySelector("body");

        this.main = document.createElement("main");
        this.main.classList.add("main");
        this.body.appendChild(this.main);

        this.about = document.createElement("section");
        this.about.classList.add("about");
        this.about.setAttribute("id", "about");
        this.main.appendChild(this.about);

        this.title = document.createElement("h2");
        this.title.classList.add("about__title");
        this.title.innerText = "About";
        this.about.appendChild(this.title);

        this.aboutSection = document.createElement("div");
        this.aboutSection.classList.add("about__wrapper");
        this.about.appendChild(this.aboutSection);

        this.info = document.createElement("div");
        this.info.classList.add("about__info");
        this.info.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sed inventore debitis reprehenderit aperiam velit aliquid nostrum perspiciatis repellat facilis labore quo, quod numquam, sint doloremque quisquam magni dolore magnam?";
        this.aboutSection.appendChild(this.info);

        this.skills = document.createElement("div");
        this.skills.classList.add("about__skills");
        this.aboutSection.appendChild(this.skills);

        this.wrapper = document.createElement("figure");
        this.wrapper.classList.add("about__skills--wrapper");
        this.skills.appendChild(this.wrapper);

        const data = await this.data.fetch();
        for(let i = 0; i < data.skills.length; i++){
            this.image = document.createElement("img");
            this.image.classList.add("about__skills--image");
            this.image.setAttribute("src", data.skills[i].image);
            this.image.setAttribute("alt", data.skills[i].alt);
            this.skills.appendChild(this.image);
        }
    }
}