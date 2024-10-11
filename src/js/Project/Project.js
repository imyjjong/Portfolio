class Project{
    constructor(id, dutch){
        this.data = new Fetch();
        this.id = id;
        this.dutch = dutch;
        this.createProject();
    }
    async createProject(){
        this.main = document.querySelector(".main__more");
        document.querySelector("body").style.overflow = "hidden";

        window.scrollTo(0, 0);

        this.project = document.createElement("section");
        this.project.classList.add("single");
        this.main.appendChild(this.project);
        
        this.info = document.createElement("div");
        this.info.classList.add("single__info");
        this.project.appendChild(this.info);

        const data = await this.data.fetch();
        document.title = data.projects[this.id].title + " | Portfolio";
        this.figure = document.createElement("figure");
        this.figure.classList.add("single__info--figure");
        this.info.appendChild(this.figure);

        this.image = document.createElement("img");
        this.image.classList.add("single__info--image");
        this.image.setAttribute("src", data.projects[this.id].image);
        this.figure.appendChild(this.image);

        this.infoWrapper = document.createElement("span");
        this.infoWrapper.classList.add("single__info--wrapper");
        this.info.appendChild(this.infoWrapper);

        this.title = document.createElement("h2");
        this.title.classList.add("single__info--title");
        this.title.innerText = data.projects[this.id].title;
        this.infoWrapper.appendChild(this.title);

        this.description = document.createElement("p");
        this.description.classList.add("single__info--description");
        if(this.dutch === "false"){
            this.description.innerText = data.projects[this.id].description;
        }
        else{
            this.description.innerText = data.projects[this.id].dutch;
        }
        this.infoWrapper.appendChild(this.description);

        this.details = document.createElement("div");
        this.details.classList.add("single__details");
        this.project.appendChild(this.details);

        this.languages = document.createElement("div");
        this.languages.classList.add("single__details--languages");
        this.details.appendChild(this.languages);

        this.dataString = data.projects[this.id];
        for(let i = 0; i < this.dataString.languages.length; i++){
            this.language = document.createElement("span");
            this.language.classList.add("single__details--languages-language");
            this.language.innerText = this.dataString.languages[i].name;
            this.language.style.borderColor = this.dataString.languages[i].background;
            this.language.style.color = this.dataString.languages[i].color;
            this.languages.appendChild(this.language);
        }

        this.links = document.createElement("span");
        this.links.classList.add("single__details--links");
        this.details.appendChild(this.links);

        this.github = document.createElement("a");
        this.github.classList.add("single__details--link");
        this.github.setAttribute("href", data.projects[this.id].github);
        this.github.setAttribute("target", "_BLANK");
        this.links.appendChild(this.github);

        this.githubIcon = document.createElement("i");
        this.githubIcon.classList = "fa-brands fa-github single__details--link-icon";
        this.github.appendChild(this.githubIcon);

        this.live = document.createElement("a");
        this.live.classList.add("single__details--link");
        this.live.setAttribute("href", data.projects[this.id].live);
        this.live.setAttribute("target", "_BLANK");
        this.links.appendChild(this.live);

        this.liveIcon = document.createElement("i");
        this.liveIcon.classList = "fa-solid fa-globe single__details--link-icon";
        this.live.appendChild(this.liveIcon);

        this.exit = document.createElement("button");
        this.exit.classList.add("single__exit");
        this.exit.innerText = "x";
        this.project.appendChild(this.exit);

        this.clickExit();
    }
    clickExit(){
        this.exitButton = document.getElementsByClassName("single__exit")[0];
        this.exitButton.onclick = () => {
            document.querySelector(".single").remove();
            document.querySelector("body").style.overflowY = "scroll";
            document.title = "Projects | Portfolio";
        }
    }
}

export default Project;