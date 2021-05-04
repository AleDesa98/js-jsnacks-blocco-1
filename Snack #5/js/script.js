// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari (verifichiamolo con una funzione) inseriscilo nell’array.
// Stampa l'array nella console.

var array = [];
for (i = 0; i < 6; i++) {
    var numero = parseInt(prompt("Inserire un numero"));
    if (verificaDispari(numero)) {
        array.push(numero);
    }
}
console.log(array);

function verificaDispari(int) {
    if (int % 2 != 0) {
        risultato = true;
        return risultato;
    }
}