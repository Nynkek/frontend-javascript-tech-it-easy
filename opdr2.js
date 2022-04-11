// Tip: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string, gebruik je hier gewoon een oude vertrouwde for-loop voor!
//
//     Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
// Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
//     Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
// Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
//     Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.

let tvsSold = 0;
for (let i = 0; i < inventory.length; i++) {
    tvsSold += inventory[i].sold;
}
console.log("2a " + tvsSold);

let tvOriginalStock = 0;
for (let i = 0; i < inventory.length; i++) {
    tvOriginalStock += inventory[i].originalStock;
}

let tvsToSell = (tvOriginalStock - tvsSold);
console.log("2d " + tvsToSell)


// koppelen aan html

let tvOriginalStockHTML = document.getElementById('tv-ingekocht');
let tvsToSellHTML = document.getElementById('tv-nog-te-verkopen');
let tvsSoldHTML = document.getElementById('tv-verkocht');
tvsSoldHTML.innerHTML = tvsSold;
tvOriginalStockHTML.innerHTML = tvOriginalStock;
tvsToSellHTML.innerHTML = tvsToSell.toString();
