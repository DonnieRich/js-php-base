const people = [
    { fullName: "mario rossi", age: 16, hasSubscription: false },
    { fullName: "Luca bianchi", age: 25, hasSubscription: true },
    { fullName: "Giulia Verdi", age: 30, hasSubscription: false },
    { fullName: "Sara NeRi", age: 17, hasSubscription: true },
    { fullName: "Paolo Gialli", age: "ventidue", hasSubscription: true },
    { fullName: "Carla ViolA", age: 15, hasSubscription: false },
    { fullName: "anna Blu", age: "20", hasSubscription: false },
];

/**
 * Parte 1 – Array e loop
 * Stampa in console i nomi completi (fullName) di tutte le persone contenute nell’array.
 * Stampa anche l’età (age) di ciascuna persona.
 */

/**
 * Parte 2 – Condizioni
 * Calcola il prezzo del biglietto per ogni persona.
 * Prezzo base = 10€.
 * Se la persona ha meno di 18 anni → 10% di sconto.
 * Se ha l’abbonamento → 20% di sconto.
 * Stampa in console: Nome + Prezzo finale biglietto.
 */

/**
 * Parte 3 – Funzioni
 * Crea una funzione calculateTicketPrice(person) che prende in input una persona e restituisce il prezzo finale del biglietto.
 * Usa questa funzione dentro il loop invece di scrivere tutto nel corpo del for.
 */

/**
 * Parte 4 – Stringhe
 * Trasforma tutti i nomi (fullName) in maiuscolo prima di stamparli.
 * Fare in modo che la prima lettera di nome e cognome sia maiuscola e tutte le altre minuscole.
 */

/**
 * Parte 5 – Errori e try-catch
 * Alcuni dati possono essere malformati (es. age: "ventidue").
 * Usa try...catch per intercettare l’errore se l’età non è un numero.
 * Se non è un numero, lancia un errore personalizzato (throw new Error(...)).
 * Gestisci l’errore mostrando in console un messaggio tipo: "Errore per Paolo Gialli: età non valida".
 */

/**
 * Parte 6 - Extra
 * Suddividi il codice in più funzioni, ognuna con una responsabilità specifica.
 * Ad esempio: una funzione per calcolare lo sconto, una per formattare il nome, ecc.
 * Usa queste funzioni dentro il loop principale.
 * Verifica dalla console di sviluppo che tutto funzioni correttamente (invocando le singole funzioni).
 */