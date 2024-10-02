class Projects{
    constructor(){
        this.data = new Fetch();
        this.createProjects();
    }
    async createProjects(){
        this.main = document.querySelector(".main");
        
        this.projects = document.createElement("section");
        this.projects.classList.add("projects");
        this.projects.setAttribute("id", "projects");
        this.main.appendChild(this.projects);

        this.title = document.createElement("h2");
        this.title.classList.add("projects__title");
        this.title.innerText = "Projects";
        this.projects.appendChild(this.title);

        this.wrapper = document.createElement("div");
        this.wrapper.classList.add("projects__wrapper");
        this.projects.appendChild(this.wrapper);

        const data = await this.data.fetch();
        for(let i = 0; i < data.projects.length; i++){
            this.project = document.createElement("article");
            this.project.classList.add("project");
            this.project.setAttribute("id", data.projects[i].id);
            this.wrapper.appendChild(this.project);

            this.figure = document.createElement("figure");
            this.figure.classList.add("project__figure");
            this.project.appendChild(this.figure);
            
            this.image = document.createElement("img");
            this.image.classList.add("project__image");
            this.image.setAttribute("src", data.projects[i].image);
            this.figure.appendChild(this.image);

            this.info = document.createElement("div");
            this.info.classList.add("project__info");
            this.project.appendChild(this.info);

            this.name = document.createElement("h3");
            this.name.classList.add("project__info--title");
            this.name.innerText = data.projects[i].title;
            this.info.appendChild(this.name);

            this.description = document.createElement("p");
            this.description.classList.add("project__info--description");
            this.description.innerText = data.projects[i].description;
            this.info.appendChild(this.description);

            this.languages = document.createElement("div");
            this.languages.classList.add("project__languages");
            this.info.appendChild(this.languages);
            
            let projectsData = data.projects[i];

            for(let i = 0; i < projectsData.languages.length; i++){
                this.language = document.createElement("span");
                this.language.classList.add("project__languages--language");
                this.language.style.borderColor = projectsData.languages[i].background;
                this.language.style.color = projectsData.languages[i].color;
                this.language.innerText = projectsData.languages[i].name;
                this.languages.appendChild(this.language);
            }

            this.links = document.createElement("span");
            this.links.classList.add("project__info--wrapper");
            this.info.appendChild(this.links);

            this.live = document.createElement("a");
            this.live.classList.add("project__info--link");
            this.live.setAttribute("href", data.projects[i].live);
            this.live.setAttribute("target", "_blank");
            this.links.appendChild(this.live);

            this.liveText = document.createElement("p");
            this.liveText.classList.add("project__info--text");
            this.liveText.innerText = "Live ";
            this.live.appendChild(this.liveText);

            this.liveIcon = document.createElement("i");
            this.liveIcon.classList = "project__info--icon fa-solid fa-globe";
            this.live.appendChild(this.liveIcon);

            this.github = document.createElement("a");
            this.github.classList.add("project__info--link");
            this.github.setAttribute("href", data.projects[i].github);
            this.github.setAttribute("target", "_blank");
            this.links.appendChild(this.github);

            this.githubText = document.createElement("p");
            this.githubText.classList.add("project__info--text");
            this.githubText.innerText = "Code ";
            this.github.appendChild(this.githubText);

            this.githubIcon = document.createElement("i");
            this.githubIcon.classList = "project__info--icon fa-solid fa-code";
            this.github.appendChild(this.githubIcon);
        }

        this.buttons = document.createElement("span");
        this.buttons.classList.add("projects__buttons");
        this.wrapper.appendChild(this.buttons);

        for(let i = 0; i < data.buttons.length; i++){
            this.button = document.createElement("i");
            this.button.classList = data.buttons[i].class;
            this.button.setAttribute("id", data.buttons[i].id);
            this.buttons.appendChild(this.button);
        }
        this.projectSlide();

        this.more = document.createElement("a");
        this.more.classList.add("projects__more");
        this.more.innerText = "More projects";
        this.more.setAttribute("href", "projects.html");
        this.projects.appendChild(this.more);

        this.arrow = document.createElement("i");
        this.arrow.classList = "fa-solid fa-arrow-right projects__more--arrow";
        this.more.appendChild(this.arrow);
    }
    projectSlide(){
        this.getProjects = document.getElementsByClassName("project");
        this.getButtons = document.getElementsByClassName("fa-circle-dot");
        console.log(this.getProjects);
        for(let i = 0; i < this.getProjects.length; i++){
            if(this.getProjects[i].getAttribute("id") == 0){
                console.log(this.getProjects[i]);
                this.getButtons[0].className = "fa-solid fa-circle-dot projects__buttons--button";
            }
            else{
                this.getProjects[i].style.display = "none";
            }
        }
        for(let i = 0; i < this.getButtons.length; i++){
            this.getButtons[i].onclick = () => {
                console.log(this.getButtons[i].id);
                console.log(this.getProjects[i + 1]);
                for(let i = 0; i < this.getProjects.length; i++){
                    this.getProjects[i].style.display = "none";
                }
                this.getProjects[i].style.display = "flex";
                for(let i = 0; i < this.getButtons.length; i++){
                    this.getButtons[i].className = "fa-regular fa-circle-dot projects__buttons--button";
                }
                this.getButtons[i].className = "fa-solid fa-circle-dot projects__buttons--button";
            }
        }
    }
}

export default Projects;