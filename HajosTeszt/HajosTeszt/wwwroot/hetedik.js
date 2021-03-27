﻿var kérdések;
var kérdésSorszám = 0;

function letöltés() {
    fetch("/questions.json")
        .then(response => response.json())
        .then(d => letöltésBefejeződött(d));
}
function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;
    kérdésMegjelenítés(0);
}
var kérdésMegjelenítés = function (kérdésSzáma) {
    let kérdés_szöveg = document.getElementById("kérdés_szöveg");
    let kép = document.getElementById("kép1");
    let válasz1 = document.getElementById("válasz1");
    let válasz2 = document.getElementById("válasz2");
    let válasz3 = document.getElementById("válasz3");

    kérdés_szöveg.innerHTML = kérdések[kérdésSzáma].questionText
    kép.src = "https://szoft1.comeback.hu/hajo/" + kérdések[kérdésSzáma].image
    válasz1.innerText = kérdések[kérdésSzáma].answer1
    válasz2.innerText = kérdések[kérdésSzáma].answer2
    válasz3.innerText = kérdések[kérdésSzáma].answer3
}



window.onload = () => {
    letöltés();


    document.getElementById("vissza").onclick = () => {
        kérdésSorszám--;
        if (kérdésSorszám == -1) {
            kérdésMegjelenítés(kérdésSorszám[2]);
        }
    }
    document.getElementById("előre").onclick = () => {
        kérdésSorszám++;
        if (kérdésSorszám == 3) {
            kérdésMegjelenítés(kérdésSorszám[0]);
        }
    }
}