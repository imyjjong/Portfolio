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
        this.info.innerText = "I am a 3th year software developer student at Mediacollege Amsterdam. I love working with Javascript. I also have experience with Sass (specifically SCSS) and PHP. I'm very interested in Laravel and made my first Laravel project a few months ago. I like learning and will always try to improve myself.";
        this.aboutSection.appendChild(this.info);

        const data = await this.data.fetch();
        // for(let i = 0; i < data.information.length; i++){
        //     this.information = document.createElement("p");
        //     this.information.classList.add("about__info--text");
        //     this.information.innerText = data.information[i].text;
        //     this.info.appendChild(this.information);
        // }

        this.skills = document.createElement("div");
        this.skills.classList.add("about__skills");
        this.aboutSection.appendChild(this.skills);

        this.wrapper = document.createElement("figure");
        this.wrapper.classList.add("about__skills--wrapper");
        this.skills.appendChild(this.wrapper);

        for(let i = 0; i < data.skills.length; i++){
            this.image = document.createElement("img");
            this.image.classList.add("about__skills--image");
            this.image.setAttribute("src", data.skills[i].image);
            this.image.setAttribute("alt", data.skills[i].alt);
            this.wrapper.appendChild(this.image);
        }
    }
}