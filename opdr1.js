// Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.
// Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.
// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.
// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.


const tvTypes = inventory.map((tv) => {
    return tv.type;
});

console.log("1a " + tvTypes);
console.log(inventory);
const soldOutTVs = inventory.filter((tv) => {
    return (tv.originalStock - tv.sold) == 0;
});
console.log("1b " + soldOutTVs);

const tvWithAmbilight = inventory.filter((tv) => {
    return tv.options.ambiLight;
});
console.log("1c " + tvWithAmbilight);

function sortHighToLow(array) {
    array.sort((a, b) => {
        if (a.price > b.price) {
            return 1;
        }
        if (b.price > a.price) {
            return -1;
        }
        return 0;
    });
    return array;
}

sortHighToLow(inventory);