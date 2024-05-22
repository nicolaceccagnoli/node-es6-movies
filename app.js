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
    // Definisco il costruttore
    constructor(title, year, genre, rating, type) {
        this.title = title,
        this.year = year,
        this.genre = genre,
        this.rating = rating,
        this.type = type
    }
    // Definisco una funzione per ritornare una stringa con i dati del film
    toString() {
        return `${this.title} è un film di genere ${this.genre}. E' stato rilasciato nel ${this.year} ed ha un voto di ${this.rating}`;
    }
}

class TvSerie extends Movie {
    // Definisco il costruttore 
    constructor(title, year, genre, rating, type, seasons) {
        // Richiamo il costruttore della classe genitore
        super(title, year, genre, rating, type);
        this.seasons = seasons;
    }
    // Eseguo l'overridding del metodo del genitore per ritornare una stringa con i dati della serie TV
    toString() {
        return `${this.title} è una serie tv di genere ${this.genre}. La prima stagione è stata rilasciata nel ${this.year} ed in totale sono state prodotte ${this.seasons} stagioni. Ha un voto di ${this.rating}`;
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

// Definisco una funzione che determini la media di tutti i film e serie Tv per un determinato genere
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