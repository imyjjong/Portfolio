class Filters{
    constructor(){
        this.data = new Fetch();
        this.createFilters();
    }
    async createFilters(){
        this.body = document.querySelector("body");
        
        this.main = document.createElement("main");
        this.main.classList.add("main__more");
        this.body.appendChild(this.main);

        this.aside = document.createElement("aside");
        this.aside.classList.add("aside");
        this.main.appendChild(this.aside);

        this.filters = document.createElement("section");
        this.filters.classList.add("aside__filters");
        this.aside.appendChild(this.filters);

        const data = await this.data.fetch();
        for(let i = 0; i < data.filters.length; i++){
            this.wrapper = document.createElement("span");
            this.wrapper.classList.add("filters");
            this.filters.appendChild(this.wrapper);

            this.checkbox = document.createElement("input");
            this.checkbox.classList.add("filters__input");
            this.checkbox.setAttribute("type", "checkbox");
            this.checkbox.setAttribute("id", data.filters[i].name);
            this.checkbox.checked = true;
            this.checkbox.onclick = () => {this.filterClick(data.filters[i].name)};
            this.wrapper.appendChild(this.checkbox);

            this.label = document.createElement("label");
            this.label.classList.add("filters__label");
            this.label.setAttribute("for", data.filters[i].name);
            this.label.innerText = data.filters[i].name;
            this.wrapper.appendChild(this.label);
        }
    }
    filterClick = (check) => {
        this.value = check;
        this.filter = document.getElementById(this.value);
        console.log(this.filter);
        if(this.filter.checked === false){
            this.project = document.getElementsByClassName(this.value);
            for(let i = 0; i < this.project.length; i++){
                this.project[i].style.display = "none";
            }
        }
        else{
            this.project = document.getElementsByClassName(this.value);
            for(let i = 0; i < this.project.length; i++){
                this.project[i].style.display = "flex";
                let classes = this.project[i].classList;
                for(let i = 1; i < classes.length; i++){
                    this.allProject = document.getElementById(classes[i]);
                    this.allProject.checked = true;
                }
            }
        }
    }
}

export default Filters;