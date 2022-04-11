// opdracht 4:

function tvName(item) {
    let name = item.brand + " " + item.type + " - " + item.name;
    return name;
}

tvName(inventory[5]);
tvName(inventory[1]);

// 4b
function tvPrice(item) {
    let price = "€" + item.price + ",-";
    return price;
}

tvPrice(inventory[2]);

// 4c
// schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc.
// Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm).
// Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58])
// wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm).
// Test of jouw functie werkt in alle mogelijke gevallen.
console.log("4c begint hier")

function inchToCm(inch) {
    const cm = inch * 2.54;
    return Math.round(cm);
}


function tvResolution(item) {
    let resolution = "";
    let resolutionArray = [];

    if (item.length === 1) {
        resolution = item + " inch (" + inchToCm(item) + " cm)";
        return resolution;
    } else {
        for (let i = 0; i < item.length; i++) {
            let resolution = item[i] + " inch (" + inchToCm(item[i]) + " cm)";
            resolutionArray.push(resolution);
        }
        resolution = resolutionArray.join(" | ");
        return resolution;
    }
}

let printDitVoorMe = tvResolution(inventory[0].availableSizes);
console.log("1: " + printDitVoorMe);
printDitVoorMe = tvResolution(inventory[4].availableSizes);
console.log("2: " + printDitVoorMe);


// opdracht 4d
//  Zorg ervoor de informatie van één van de tv's zoals het voorbeeld wordt weergegeven op de pagina.
//  Gebruik hiervoor de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.
console.log("hier begin 4d");

let tvResolutionHTML = document.getElementById('tv-weergeven');

function printTv(item) {
    tvResolutionHTML.innerHTML = `${tvName(item)} <br> ${tvPrice(item)} <br> ${tvResolution(item.availableSizes)}`
    return tvResolutionHTML;
}
printTv(inventory[4]);