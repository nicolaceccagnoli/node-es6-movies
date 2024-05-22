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
        genre: "Crime, Drama, Thriller",
        rating: 9.5,
        type: "tv",
        seasons: 5
    },
    {
        title: "The Dark Knight",
        year: 2008,
        genre: "Action, Crime, Drama",
        rating: 9.0,
        type: "movie"
    },
    {
        title: "Stranger Things",
        year: 2016,
        genre: "Drama, Fantasy, Horror",
        rating: 8.7,
        type: "tv",
        seasons: 4
    },
    {
        title: "The Matrix",
        year: 1999,
        genre: "Action, Sci-Fi",
        rating: 8.7,
        type: "movie"
    },
    {
        title: "Game of Thrones",
        year: 2011,
        genre: "Action, Adventure, Drama",
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

class TvSeries extends Movie {
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
