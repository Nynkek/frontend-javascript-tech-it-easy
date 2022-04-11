// Opdracht 3 - Array methoden en functies
// Opdracht 3a: Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.) in een lijst op de pagina weer te geven. Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er dubbele namen in zitten, is niet erg.
// Opdracht 3b: Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht. Het is handig om onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken. Tip: vergeet deze functie -declaratie niet aan te roepen!
//
// tvBrandsArray = [];
// for (let i = 0; i < inventory.length; i++) {
//     tvBrandsArray.push(inventory[i].brand);
// }
// tvBrands.innerHTML = tvBrandsArray.join(`<li>`);

// OPDRACHT 3A
let tvBrandsHTML = document.getElementById('tv-merken');

const tvBrandArray = inventory.map((item) => {
    return item.brand;
});

for (let i = 0; i < tvBrandArray.length; i++) {
    tvBrandsHTML.innerHTML += `<li> ${tvBrandArray[i]} </li>`
}


// OPDRACHT 3B
function showBrands(array) {
    const tvBrandArray = array.map((item) => {
        return item.brand;
    });
    for (let i = 0; i < tvBrandArray.length; i++) {
        tvBrandsHTML.innerHTML += `<li> ${tvBrandArray[i]} </li>`
    }
}
showBrands(inventory);

//
//
//     console.log(tvBrands)
// function makeArrayWithBrands(array) {
//     let tvBrands = [];
//     for (let i = 0; i < array.length; i++) {
//
//         tvBrands.push(array[i].brand);
//     }
//     return tvBrands;
//
// }
//
// console.log(makeArrayWithBrands(inventory) + " b");
