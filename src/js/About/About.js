import Movies from '../Movies/Movies.js';

class About{
    constructor(){
        this.data = new Fetch();
        this.createAbout();
    }
    async createAbout(){
        let open = false;
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

        const data = await this.data.fetch();

        this.aboutSection = document.createElement("div");
        this.aboutSection.classList.add("about__wrapper");
        this.about.appendChild(this.aboutSection);

        console.log(window.localStorage.getItem("dutch"));

        this.info = document.createElement("div");
        this.info.classList.add("about__info");
        if(window.localStorage.getItem("dutch") == null | window.localStorage.getItem("dutch") === "false"){
            this.info.innerText = data.information[0].text;
        }
        else{
            this.info.innerText = data.information[0].dutch;
        }
        this.aboutSection.appendChild(this.info);

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

        this.resume = document.createElement("a");
        this.resume.classList.add("about__skills--resume");
        // this.resume.setAttribute("href", "CV.pdf");
        // this.resume.download = "CV.pdf";
        this.resume.innerText = "Download CV ";
        this.skills.appendChild(this.resume);
        
        this.download = document.createElement("i");
        this.download.classList = "fa-solid fa-download";
        this.resume.appendChild(this.download);

        this.button = document.createElement("button");
        this.button.classList.add("about__button");
        this.button.innerText = "Click here";
        this.about.appendChild(this.button);

        this.arrow = document.createElement("i");
        this.arrow.classList = "fa-solid fa-arrow-down fa-bounce about__button--icon open";
        this.button.appendChild(this.arrow);

        this.createMovies(open);
    }
    createMovies(open){
        this.getButton = document.getElementsByClassName("about__button")[0];
        this.getButton.onclick = () => {

            if(open === false){
                this.movies = new Movies();
                document.querySelector(".about__button--icon").classList = "fa-solid fa-arrow-up fa-bounce about__button--icon closed";
                open = true;
            }
            else{
                document.querySelector(".movies").remove();
                document.querySelector(".about__button--icon").classList = "fa-solid fa-arrow-down fa-bounce about__button--icon open";
                open = false;
            }
        }
    }
}

export default About;