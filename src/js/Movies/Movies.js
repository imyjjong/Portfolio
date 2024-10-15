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

        this.moviesTitle = document.createElement("h2");
        this.moviesTitle.classList.add("movies__title");
        if(window.localStorage.getItem("dutch") == null | window.localStorage.getItem("dutch") === "false"){
            this.moviesTitle.innerText = "Some movies I like";
        }
        else{
            this.moviesTitle.innerText = "Een paar films die ik leuk vind";
        }
        this.movies.appendChild(this.moviesTitle);

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
}

export default Movies;