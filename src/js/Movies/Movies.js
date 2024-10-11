class Movies{
    constructor(){
        this.data = new Fetch();
        let index = 0;
        this.createMovies(index);
    }
    async createMovies(index){
        this.dutch = window.localStorage.getItem("dutch");
        this.about = document.querySelector(".about");
        this.movies = document.createElement("section");
        this.movies.classList.add("movies");
        this.about.appendChild(this.movies);

        this.moviesTitle = document.createElement("h2");
        this.moviesTitle.classList.add("movies__title");
        if(this.dutch === "false"){
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
    async randomize(index){
        const data = await this.data.fetch();
        this.length = data.movies.length;
        index = Math.floor(Math.random() * this.length);
        document.querySelector(".movies").remove();
        this.createMovies(index);
    }
}

export default Movies;