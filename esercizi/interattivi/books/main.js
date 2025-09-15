const books = [
    { id: 1, title: "The Name of the Rose", author: "Umberto Eco", year: 1980, genre: "Mystery" },
    { id: 3, title: "1984", author: "George Orwell", year: 1949, genre: "Dystopian" },
    { id: 7, title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954, genre: "Fantasy" },
    { id: 5, title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", year: 1997, genre: "Fantasy" },
    { id: 2, title: "alice in wonderland", author: "Lewis Carroll", year: 1865, genre: "Fantasy" },
    { id: 6, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, genre: "Classic" },
    { id: 4, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genre: "Classic" },
    { id: 8, title: "Pride and Prejudice", author: "Jane Austen", year: 1813, genre: "Romance" },
    { id: 9, title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, genre: "Fantasy" }, 
];

/**
 * Parte 1 – Ricerca
 * Stampa tutti i titoli che contengono la parola "The".
 */

/**
 * Parte 2 – Sostituzione
 * Cambia tutti i titoli sostituendo "The" con "***".
 */

/**
 * Parte 3 – Ordinamento
 * Ordina i libri in base all'anno di pubblicazione (year) dal più vecchio al più recente.
 * Ordina alfabeticamente i titoli e stampali.
 */

/**
 * Parte 3.5 - Presentazione human-friendly
 * Stampa in console i libri in questo formato: "Title" by Author (Year) - Genre
 */

/**
 * Parte 5 – Funzioni di utilità
 * Scrivi una funzione searchBooks(books, term) che restituisce un array con i titoli che contengono la parola cercata.
 * Scrivi una funzione sortBooks(books, property) che che restituisce un array con i libri ordinati per la proprietà specificata (es. "year" o "title").
 * Scrivi una funzione replaceInTitles(books, search, replace) che sostituisce una parola nei titoli.
 * Scrivi una funzione formatBook(book) che restituisce una stringa formattata come nell'esercizio 3.5.
 * Usa queste funzioni per eseguire le operazioni sopra.
 */

/**
 * Parte 6 – Dirty Dataset
const books = [
  { id: 1, title: " The Name of the Rose", author: "Umberto Eco", year: 1980, genre: "Mystery" },
  { id: 3, title: "1984", author: "George Orwell", year: 1949, genre: "Dystopian" },
  { id: 7, title: "The Lord of the Rings ", author: "J.R.R. Tolkien", year: 1954, genre: "Fantasy" },
  { id: 5, title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", year: 1997, genre: "Fantasy" },
  { id: 2, title: "alice in WONDERLAND", author: "Lewis Carroll", year: 1865, genre: "Fantasy" },
  { id: 6, title: "The Great Gatsby", author: "F. Scott Fitzgerald ", year: 1925, genre: "Classic" },
  { id: 4, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genre: "Classic" },
  { id: 8, title: "Pride and Prejudice#", author: "Jane Austen", year: 1813, genre: "Romance" },
  { id: 9, title: "The=Hobbit", author: "J.R.R. Tolkien", year: 1937, genre: "Fantasy" }
];
 */