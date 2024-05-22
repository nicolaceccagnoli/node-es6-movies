const { create } = require("domain");

// Definisco un array di oggetti dove ogni oggetto rappresenta un film o una serie TV
const mediaArray = [
    {
        title: "Inception",
        year: 2010,
        genre: "Sci-Fi",
        rating: 8.8,
        type: "movie"
    },
    {
        title: "Breaking Bad",
        year: 2008,
        genre: "Drama",
        rating: 9.5,
        type: "tv",
        seasons: 5
    },
    {
        title: "The Dark Knight",
        year: 2008,
        genre: "Action",
        rating: 9.0,
        type: "movie"
    },
    {
        title: "Stranger Things",
        year: 2016,
        genre: "Horror",
        rating: 8.7,
        type: "tv",
        seasons: 4
    },
    {
        title: "The Matrix",
        year: 1999,
        genre: "Sci-Fi",
        rating: 8.7,
        type: "movie"
    },
    {
        title: "Game of Thrones",
        year: 2011,
        genre: "Adventure",
        rating: 9.3,
        type: "tv",
        seasons: 8
    }
];

// Definisco una classe Movie
class Movie {
    #title;
    #year;
    #genre;
    #rating;
    #type;

    // Definisco il costruttore
    constructor(title, year, genre, rating, type) {
        this.#title = title,
        this.#year = year,
        this.#genre = genre,
        this.#rating = rating,
        this.#type = type
    }
    // Definisco una funzione per ritornare una stringa con i dati del film
    toString() {
        return `${this.#title} è un film di genere ${this.#genre}. E' stato rilasciato nel ${this.#year} ed ha un voto di ${this.#rating}`;
    }
    
    // Definisco setter e getter per tutti gli attributi private
    set title(title) {
        this.#title = title;
    }

    get title() {
        return this.#title;
    }

    set year(year) {
        this.#year = year;
    }

    get year() {
        return this.#year;
    }

    set genre(genre) {
        this.#genre = genre;
    }

    get genre() {
        return this.#genre;
    }

    set rating(rating) {
        this.#rating = rating;
    }

    get rating() {
        return this.#rating;
    }

    set type(type) {
        this.#type = type;
    }

    get type() {
        return this.#type;
    }


}

class TvSerie extends Movie {
    #seasons;

    // Definisco il costruttore 
    constructor(title, year, genre, rating, type, seasons) {
        // Richiamo il costruttore della classe genitore
        super(title, year, genre, rating, type);
        this.#seasons = seasons;
    }
    // Eseguo l'overridding del metodo del genitore per ritornare una stringa con i dati della serie TV
    toString() {
        return `${this.title} è una serie tv di genere ${this.genre}. La prima stagione è stata rilasciata nel ${this.year} ed in totale sono state prodotte ${this.seasons} stagioni. Ha un voto di ${this.rating}`;
    }

    set seasons(seasons) {
        this.#seasons = seasons;
    }

    get seasons() {
        return this.#seasons;
    }

}


// Definisco una funzione con la quale per ogni oggetto di mediaArray istanzio una nuova classe di Movie o TvSeries
const createClass = mediaArray.map(obj => {
    if (obj.type === 'movie') {
        return new Movie(obj.title, obj.year, obj.genre, obj.rating, obj.type);
    } else if (obj.type === 'tv') {
        return new TvSerie(obj.title, obj.year, obj.genre, obj.rating, obj.type, obj.seasons);
    }
});


// Definisco una funzione che determini la media di tutti i film e serie TV per un determinato genere
function average(arr, genre) {
    let votes = [];

    let avg = 0;

    arr.forEach(element => {
        if (element.genre == genre) {
            votes.push(element.rating)
        };
    });

    return avg = votes.reduce((a, b) => (a + b), 0) / votes.length;
};

console.log(average(createClass, 'Sci-Fi'));

// Definisco una funzione che restituisca una lista dei generi di tutti i film e serie TV senza che questi si ripetano
function genres(arr) {
    let genres = [];

    arr.forEach(elem => {
        if (!genres.includes(elem.genre)) {
            genres.push(elem.genre);
        }
    })

    return genres;
};

// Definisco una funzione che filtri i film e le serie TV in base al genere per restituire un array con all'interno
// il risultato della funzione toString() di ogni istanza
function filter(arr, genre) {
    const result = [];

    arr.forEach(elem => {
        if (elem.genre == genre) {
            result.push(elem.toString());
        }
    })

    return result;
}   

console.log(filter(createClass, 'Sci-Fi'));