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
    }
}

export default Header;