class Heading{
    constructor(){
        this.data = new Fetch();
        this.createHeading();
    }
    async createHeading(){
        this.body = document.querySelector("body");

        this.heading = document.createElement("section");
        this.heading.classList.add("heading");
        this.body.appendChild(this.heading);

        this.wrapper = document.createElement("div");
        this.wrapper.classList.add("heading__wrapper");
        this.heading.appendChild(this.wrapper);
        
        this.intro = document.createElement("h2");
        this.intro.classList.add("heading__wrapper--intro");
        this.intro.innerText = "Hi, I'm Sara";
        this.wrapper.appendChild(this.intro);

        this.info = document.createElement("ul");
        this.info.classList.add("heading__info");
        this.wrapper.appendChild(this.info);
        
        const data = await this.data.fetch();
        
        for(let i = 0; i < data.introText.length; i++){
            this.item = document.createElement("li");
            this.item.classList.add("heading__info--item");
            this.info.appendChild(this.item);

            this.span = document.createElement("span");
            this.span.classList.add("heading__info--item-span");
            this.span.innerText = data.introText[i].text;
            this.item.appendChild(this.span);
        }
    }
}