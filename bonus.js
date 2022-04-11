// Maak drie knoppen op de pagina: Sorteer op prijs, AmbiLight TV's en Uitverkochte exemplaren.
// Gebruik de code die je in opdracht 1b, 1c en 1d hebt gemaakt
// en schrijf dit om naar functies zodat je ze kunt aanroepen op het moment dat de buttons geklikt worden.
// Zorg ervoor dat de functies de uitkomsten in de console loggen als de gebruiker op de bijbehorende knop klikt.
// Tip: lees hiervoor paragraaf 7.4 op EdHub eens door!

const price = document.getElementById('sorteer-prijs-btn');
const ambilight = document.getElementById('ambilight-tvs-btn');
const soldOut = document.getElementById('uitverkocht-btn');
const test = document.getElementById('test');


let priceSort = sortHighToLow(inventory);
let ambientSort = tvWithAmbilight;
let soldOutSort = tvsSold;

function showButtonInput(item) {

    // test.innerHTML = `nog een test`;
    console.log("click");
    return showTvs(item);
}

price.addEventListener('click', function () {
    showButtonInput(priceSort)
});
ambilight.addEventListener('click', function () {
    showButtonInput(ambientSort)
});
soldOut.addEventListener('click', function () {
    showButtonInput(soldOutSort)
});

