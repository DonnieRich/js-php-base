const movies = [
    { title: "Inception", rating: 9 },
    { title: "Matrix", rating: 8 },
    { title: "Avatar", rating: 7 },
    { title: "Interstellar", rating: 10 },
    { title: "The Dark Knight", rating: 9 },
    { title: "Forrest Gump", rating: 8 },
];

/**
 * Parte 1 – Funzioni
 * Scrivi una funzione addMovie(movieList, newMovie) che aggiunge un nuovo film all’array.
 * Passa movies e aggiungi { title: "Titanic", rating: 8 }.
 * Fai in modo che la funzione restituisca il nuovo array di film.
 * Stampa in console il nuovo array.
 */

/**
 * Parte 2 – Best Practices
 * Modifica addMovie in modo che non modifichi l’array originale.
 * Fai una copia dell’array ricevuto.
 * Aggiungi il nuovo film solo alla copia.
 * Restituisci la nuova lista senza toccare l’originale.
 * Controlla che movies rimanga invariato.
 */