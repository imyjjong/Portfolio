class Movies{
    constructor(){
        this.data = new Fetch();
        this.about = document.querySelector(".about");
        this.movies = document.createElement("section");
        this.movies.classList.add("movies");
        this.about.appendChild(this.movies);
        this.createMovies(0);
    }
    async createMovies(index){
        this.moviesWrapper = document.createElement("span");
        this.moviesWrapper.classList.add("movies__wrapper");
        this.movies.appendChild(this.moviesWrapper);

        this.moviesTitle = document.createElement("h2");
        this.moviesTitle.classList.add("movies__title");
        if(window.localStorage.getItem("dutch") == null | window.localStorage.getItem("dutch") === "false"){
            this.moviesTitle.innerText = "Some movies I like";
        }
        else{
            this.moviesTitle.innerText = "Een paar films die ik leuk vind";
        }
        this.moviesWrapper.appendChild(this.moviesTitle);

        this.movieInformation = document.createElement("button");
        this.movieInformation.classList.add("movies__information");
        this.moviesWrapper.appendChild(this.movieInformation);

        this.infoIcon = document.createElement("i");
        this.infoIcon.classList = "fa-solid fa-info fa-bounce movies__information--icon";
        this.movieInformation.appendChild(this.infoIcon);

        this.movieInformation.onclick = () => {this.widgetInfo();};

        const data = await this.data.fetch();
        this.movie = document.createElement("article");
        this.movie.classList.add("movie");
        this.movies.appendChild(this.movie);

        this.figure = document.createElement("figure");
        this.figure.classList.add("movie__figure");
        this.movie.appendChild(this.figure);

        this.image = document.createElement("img");
        this.image.classList.add("movie__figure--image");
        this.image.setAttribute("src", data.movies[index].image);
        this.figure.appendChild(this.image);

        this.wrapper = document.createElement("div");
        this.wrapper.classList.add("movie__wrapper");
        this.movie.appendChild(this.wrapper);

        this.text = document.createElement("span");
        this.text.classList.add("movie__text");
        this.wrapper.appendChild(this.text);

        this.title = document.createElement("h2");
        this.title.classList.add("movie__text--title");
        this.title.innerText = data.movies[index].title;
        this.text.appendChild(this.title);

        this.year = document.createElement("p");
        this.year.classList.add("movie__text--year");
        this.year.innerText = data.movies[index].year;
        this.text.appendChild(this.year);

        this.randomizer = document.createElement("button");
        this.randomizer.classList.add("movie__randomizer");
        this.randomizer.innerText = "Random";
        this.randomizer.onclick = () => {this.randomize(index);}
        this.wrapper.appendChild(this.randomizer);
    }
    async randomize(prevIndex){
        const data = await this.data.fetch();
        this.length = data.movies.length;
        let newIndex = 0;
        while((newIndex = Math.floor(Math.random() * this.length)) === prevIndex);
        this.movies.querySelectorAll(("*")).forEach((children) => children.remove());
        await this.createMovies(newIndex);
    }
    async widgetInfo(){
        const data = await this.data.fetch();
        console.log(data.widget[0]);
        this.info = document.createElement("section");
        this.info.classList.add("movies__info");
        document.querySelector("body").appendChild(this.info);
        document.querySelector("body").style.overflow = "hidden";

        this.modal = document.createElement("article");
        this.modal.classList.add("movies__modal");
        this.info.appendChild(this.modal);

        this.modalText = document.createElement("h3");
        this.modalText.classList.add("movies__modal--text");
        if(window.localStorage.getItem("dutch") == null | window.localStorage.getItem("dutch") === "false"){
            this.modalText.innerText = data.widget[0].text;
        }
        else{      
            this.modalText.innerText = data.widget[0].dutch;
        }
        this.modal.appendChild(this.modalText);

        this.info.onclick = () => {
            this.info.remove();
            document.querySelector("body").style.overflow = "auto";
        }
    }
}

export default Movies;