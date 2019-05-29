import Country from "../models/country.js"


//obter o continente selecionado
const continentSelected = sessionStorage.getItem("continentSelected")

export let countries = []

if (localStorage.getItem("countries")) {
    countries = JSON.parse(localStorage.getItem("countries"))
} else {
    const portugal = new Country("Portugal", "europe", "Lisboa", "10 milhões", "Português", "Euro", "Mediterrânico", "1143", "", "20", "4.7")
    const polonia = new Country("Polonia", "europe", "Varsóvia", "38 milhões", "Polaco/Polonês", "Złoty", "Temperado Continental", "1918", "", "37", "3.9   ")
    const alemanha = new Country("Alemanha", "europe", "Berlim", "82 milhões", "Alemão", "Euro", "Temperado Umido", "1871", "", "13", "4.5")
    const brasil = new Country("Brasil", "southAmerica", "Brasília", "209 milhões", "Português", "Real", "Tropical", "1821 a 1825", "", "54", "3.2")
    const espanha = new Country("Espanha", "europe", "Madrid", "46 milhões", "Espanhol", "Euro", "Mediterrânico", "1640", "", "43", "4.1")

    countries.push(portugal, brasil, alemanha, polonia, espanha)
    localStorage.setItem("countries", JSON.stringify(countries))
}

let i = 0;
const container = document.querySelector("#container")
let result = ""

for (const country of countries) {
    if (country.continent == continentSelected) {
        if (i % 3 == 0) {
            result += `<div class="row">`
        }
        result += `<div class="col-lg-4 col-md-6 col-sm-12">
        <a class="aCard" href="../../html/country.html" id="${country.name}">
            <div class="card" id="cardCountry">
                <img src="../images/flags/${country.name}.png" id="imgCountry">
                <hr />
                <div class="card-body">
                    <p class="card-text" id="cardText">${country.name}</p>
                </div>
            </div>
        </a>
    </div>`
        i++
        if (i % 3 == 0) {
            result += `</div>`
        }
    }
}
container.innerHTML += result