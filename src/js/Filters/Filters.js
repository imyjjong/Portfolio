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
        this.filters.classList.add("filters");
        this.aside.appendChild(this.filters);

        const data = await this.data.fetch();
        for(let i = 0; i < data.filters.length; i++){
            this.filter = document.createElement("span");
            this.filter.classList.add("filters__filter");
            this.filter.innerText = data.filters[i].name;
            this.filters.appendChild(this.filter);
        }
    }
}

export default Filters;