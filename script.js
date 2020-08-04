//zet de button in een variabele
const button = document.getElementById("mybutton");

//maak een click event
button.addEventListener("click", function () {
    alert("button clicked");
})

// zet de button en de body in een variabele
const buttonBackground = document.getElementById("button-background");
const body = document.getElementById("body");

//maak een click event
buttonBackground.addEventListener("click", toggleColor);
//geef aan wat de functie toggleColermoet doen
function toggleColor() {
    //bij de constante body ga je wisselen in  de classlist tussen blue (standaard html) en red(ook in css)
    body.classList.toggle("red-background");
}