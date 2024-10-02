import Project from '../Project/Project.js';

class More{
    constructor(){
        this.data = new Fetch();
        this.createMore();
    }
    async createMore(){
        this.main = document.querySelector(".main__more");

        this.more = document.createElement("section");
        this.more.classList.add("more");
        this.main.appendChild(this.more);

        const data = await this.data.fetch();
        for(let i = 0; i < data.projects.length; i++){
            this.project = document.createElement("article");
            this.project.classList.add("work");
            this.project.classList += data.projects[i].allLanguages;
            this.more.appendChild(this.project);

            this.figure = document.createElement("figure");
            this.figure.classList.add("work__figure");
            this.figure.setAttribute("id", data.projects[i].id);
            this.project.appendChild(this.figure);

            this.moreInfo = document.createElement("div");
            this.moreInfo.classList.add("work__figure--wrapper");
            this.moreInfo.innerText = "More info";
            this.figure.appendChild(this.moreInfo);

            this.image = document.createElement("img");
            this.image.classList.add("work__figure--image");
            this.image.setAttribute("src", data.projects[i].image);
            this.figure.appendChild(this.image);

            this.info = document.createElement("div");
            this.info.classList.add("work__info");
            this.project.appendChild(this.info);

            this.languages = document.createElement("div");
            this.languages.classList.add("work__languages");
            this.info.appendChild(this.languages);

            let dataProjects = data.projects[i];
            for(let i = 0; i < dataProjects.languages.length; i++){
                this.language = document.createElement("span");
                this.language.classList.add("work__languages--language");
                this.language.style.borderColor = dataProjects.languages[i].background;
                this.language.style.color = dataProjects.languages[i].color;
                this.language.innerText = dataProjects.languages[i].name;
                this.languages.appendChild(this.language);
            }

            this.title = document.createElement("h3");
            this.title.classList.add("work__info--title");
            this.title.innerText = data.projects[i].title;
            this.info.appendChild(this.title);
        }
        this.getProject();
    }
    async getProject(){
        this.getProjects = document.getElementsByClassName("work__figure");
        const data = await this.data.fetch();
        for(let i = 0; i < this.getProjects.length; i++){
            this.getProjects[i].onclick = () => {
                let getId = this.getProjects[i].getAttribute("id");
                console.log(data.projects[getId]);
                this.newProject = new Project(getId);
            }
        }
    }
}
export default More;