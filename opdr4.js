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
console.log("4c begint hier")

function inchToCm(inch) {
    const cm = inch * 2.54;
    return Math.round(cm);
}


function tvResolution(item) {
    let resolutionArray = item.map((res) => {
        return res + " inch (" + inchToCm(res) + " cm)";
    });
    let resolution = resolutionArray.join(" | ");
    return resolution;
}

let printDitVoorMe = tvResolution(inventory[0].availableSizes);
console.log("1: " + printDitVoorMe);
printDitVoorMe = tvResolution(inventory[4].availableSizes);
console.log("2: " + printDitVoorMe);


// opdracht 4d

console.log("hier begin 4d");

let tvResolutionHTML = document.getElementById('tv-weergeven');

function printTv(item) {
    tvResolutionHTML.innerHTML += `
            <h3>${tvName(item)}</h3> 
            <p> ${tvPrice(item)} <br> ${tvResolution(item.availableSizes)} </p>
            `;
    return tvResolutionHTML;
}

// opdracht 4e: tv-generator functie

function showTvs(array) {
    tvResolutionHTML.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        printTv(array[i]);
    }
}

showTvs(inventory);

