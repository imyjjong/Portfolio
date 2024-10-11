class Header{
    constructor(){
        this.data = new Fetch();
        this.createHeader();
    }
    async createHeader(){
        this.body = document.querySelector("body");

        this.header = document.createElement("header");
        this.header.classList.add("header");
        this.body.appendChild(this.header);

        this.navigation = document.createElement("nav");
        this.navigation.classList.add("header__navigation");
        this.header.appendChild(this.navigation);

        this.list = document.createElement("ul");
        this.list.classList.add("header__navigation--list");
        this.navigation.appendChild(this.list);

        const data = await this.data.fetch();
        for(let i = 0; i < data.header.length; i++){
            this.item = document.createElement("li");
            this.item.classList.add("header__navigation--list-item");
            this.list.appendChild(this.item);

            this.link = document.createElement("a");
            this.link.classList.add("header__navigation--list-link");
            this.link.setAttribute("href", data.header[i].id);
            this.link.innerText = data.header[i].item;
            this.item.appendChild(this.link);
        }
        this.button = document.createElement("button");
        this.button.classList.add("header__button");
        this.button.onclick = () => {this.translate();};
        this.header.appendChild(this.button);

        this.translateIcon = document.createElement("i");
        if(window.localStorage.getItem("dutch") == null | window.localStorage.getItem("dutch") === "false"){
            this.translateIcon.classList = "fa-solid fa-language header__button--icon";
        }
        else{
            this.translateIcon.classList = "fa-solid fa-language fa-flip-horizontal header__button--icon";
        }
        this.button.appendChild(this.translateIcon);

    }
    async translate(){
        const data = await this.data.fetch();
        this.getStatus = document.getElementsByClassName("header__button--icon")[0];
        if(this.getStatus.className === "fa-solid fa-language header__button--icon"){
            document.querySelector(".about__info").innerText = data.information[0].dutch;
            this.getProject = document.getElementsByClassName("project__info--description");
            for(let i = 0; i < this.getProject.length; i++){
                this.getProject[i].innerText = data.projects[i].dutch;
            }
            document.getElementsByClassName("projects__more")[0].innerText = "Meer projecten";
            this.arrow = document.createElement("i");
            this.arrow.classList = "fa-solid fa-arrow-right projects__more--arrow";
            document.getElementsByClassName("projects__more")[0].appendChild(this.arrow);
            if(document.getElementsByClassName("movies__title")[0] == null){
                console.log("nothing");
            }
            else{
                document.getElementsByClassName("movies__title")[0].innerText = "Een paar films die ik leuk vind";
            }
            this.getStatus.classList.toggle("fa-flip-horizontal");
            window.localStorage.setItem("dutch", true);
        }
        else{
            document.querySelector(".about__info").innerText = data.information[0].text;
            this.getProject = document.getElementsByClassName("project__info--description");
            for(let i = 0; i < this.getProject.length; i++){
                this.getProject[i].innerText = data.projects[i].description;
            }
            document.getElementsByClassName("projects__more")[0].innerText = "More projects";
            this.arrow = document.createElement("i");
            this.arrow.classList = "fa-solid fa-arrow-right projects__more--arrow";
            document.getElementsByClassName("projects__more")[0].appendChild(this.arrow);
            if(document.getElementsByClassName("movies__title")[0] == null){
                console.log("nothing");
            }
            else{
                document.getElementsByClassName("movies__title")[0].innerText = "Some movies I like";
            }
            this.getStatus.classList.toggle("fa-flip-horizontal");
            window.localStorage.setItem("dutch", false);
        }
    }
}

export default Header;