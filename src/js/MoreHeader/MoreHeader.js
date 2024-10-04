class MoreHeader{
    constructor(){
        this.createHeader();
    }
    createHeader(){
        this.body = document.querySelector("body");
        this.header = document.createElement("header");
        this.header.classList.add("header");
        this.body.appendChild(this.header);

        this.wrapper = document.createElement("nav");
        this.wrapper.classList.add("header__wrapper");
        this.header.appendChild(this.wrapper);

        this.home = document.createElement("a");
        this.home.classList.add("header__home");
        this.home.setAttribute("href", "index.html");
        this.home.innerText = "Portfolio";
        this.wrapper.appendChild(this.home);
    }
}

export default MoreHeader;