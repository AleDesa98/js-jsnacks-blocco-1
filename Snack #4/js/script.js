// Generatore di “nomi cognomi” casuali: scrivere una funzione che, partendo da una lista di nomi e una lista di cognomi, generi una coppia nome-cognome casuale, così da permettere al signor Gatsby di costruire una falsa lista di 10 invitati alla sua festa, da stampare in pagina, utilizzando il tag adatto alle liste.

var nomi = ["Alessandro", "Giorgio", "Beatrice", "Silvia"];
var cognomi = ["Rossi", "Ferrari", "Russo", "Bianchi"];
var coppia = ""

for (i = 0; i < 10; i++) {
    document.getElementById("lista").innerHTML += "<li>" + generatoreCoppia(nomi, cognomi) + "</li>";
}

function generatoreCoppia (listaNomi, listaCognomi) {
    var randomNumN = Math.floor(Math.random()*listaNomi.length);
    var randomNumC = Math.floor(Math.random()*listaCognomi.length);
    // console.log(randomNumN);
    // console.log(randomNumC);
    var nome = listaNomi[randomNumN];
    var cognome = listaCognomi[randomNumC];
    var coppia = nome + " " + cognome;
    return coppia;
}