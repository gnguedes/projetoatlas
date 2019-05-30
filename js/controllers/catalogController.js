import Country from "../models/country.js"
import addCountrySelected from "../views/countryView.js"


//obter o continente selecionado
const continentSelected = sessionStorage.getItem("continentSelected")

const continentName = document.querySelector("#continentName")

const txtSearchCountry = document.querySelector("#txtSearchCountry")

if (continentSelected == "europe") {
    continentName.innerHTML += "Europa"
} else if (continentSelected == "asia") {
    continentName.innerHTML += "Ásia"
} else if (continentSelected == "africa") {
    continentName.innerHTML += "África"
} else if (continentSelected == "northAmerica") {
    continentName.innerHTML += "América do Norte"
} else if (continentSelected == "southAmerica") {
    continentName.innerHTML += "América do Sul"
} else if (continentSelected == "oceania") {
    continentName.innerHTML += "Oceania"
}


export let countries = []

if (localStorage.getItem("countries")) {
    countries = JSON.parse(localStorage.getItem("countries"))
} else {
    const portugal = new Country("Portugal", "europe", "Lisboa", "10 milhões", "Português", "Euro", "Mediterrânico", "1143", "", "20", "4.7")
    const polonia = new Country("Polonia", "europe", "Varsóvia", "38 milhões", "Polaco/Polonês", "Złoty", "Temperado Continental", "1918", "", "37", "4.9")
    const alemanha = new Country("Alemanha", "europe", "Berlim", "82 milhões", "Alemão", "Euro", "Temperado Umido", "1871", "", "13", "4.5")
    const brasil = new Country("Brasil", "southAmerica", "Brasília", "209 milhões", "Português", "Real", "Tropical", "1821 a 1825", "", "54", "3.2")
    const espanha = new Country("Espanha", "europe", "Madrid", "46 milhões", "Espanhol", "Euro", "Mediterrânico", "1640", "", "43", "3.1")
    const israel = new Country("Israel", "asia", "Jerusalém", "9 milhões", "Árabe", "Novo Shekel Israelense", "Mediterrânico", "1948", "", "12", "4.1")

    countries.push(portugal, brasil, alemanha, polonia, espanha, israel)
    localStorage.setItem("countries", JSON.stringify(countries))
}

let i = 0;
const divCatalog = document.querySelector("#divCatalog")
let result = ""

renderCatalog();

function renderCatalog() {
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
    divCatalog.innerHTML += result
    addCountrySelected()
}

filterCatalog()

function filterCatalog() {
    const filters = document.querySelectorAll(".filter")
    for (const filter of filters) {
        filter.addEventListener("click", function () {
            if (filter.id == "upAlfa") {
                countries.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
                let resultFilter = ""
                divCatalog.innerHTML = ""
                let j = 0
                for (const country of countries) {
                    if ((country.continent == continentSelected) && (txtSearchCountry == "" || country.name.startsWith(txtSearchCountry))) {
                        if (j % 3 == 0) {
                            resultFilter += `<div class="row">`
                        }
                        resultFilter += `<div class="col-lg-4 col-md-6 col-sm-12">
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
                        j++
                        if (j % 3 == 0) {
                            resultFilter += `</div>`
                        }
                    }
                }
                divCatalog.innerHTML += resultFilter
                addCountrySelected()
            } else if (filter.id == "downAlfa") {
                countries.sort((a, b) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0));
                let resultFilter = ""
                divCatalog.innerHTML = ""
                let j = 0
                for (const country of countries) {
                    if (country.continent == continentSelected) {
                        if (j % 3 == 0) {
                            resultFilter += `<div class="row">`
                        }
                        resultFilter += `<div class="col-lg-4 col-md-6 col-sm-12">
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
                        j++
                        if (j % 3 == 0) {
                            resultFilter += `</div>`
                        }
                    }
                }
                divCatalog.innerHTML += resultFilter
                addCountrySelected()
            } else if (filter.id == "upPop") {
                countries.sort((a, b) => (a.population < b.population) ? 1 : ((b.population < a.population) ? -1 : 0));
                let resultFilter = ""
                divCatalog.innerHTML = ""
                let j = 0
                for (const country of countries) {
                    if (country.continent == continentSelected) {
                        if (j % 3 == 0) {
                            resultFilter += `<div class="row">`
                        }
                        resultFilter += `<div class="col-lg-4 col-md-6 col-sm-12">
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
                        j++
                        if (j % 3 == 0) {
                            resultFilter += `</div>`
                        }
                    }
                }
                divCatalog.innerHTML += resultFilter
                addCountrySelected()
            } else if (filter.id == "downPop") {
                countries.sort((a, b) => (a.population > b.population) ? 1 : ((b.population > a.population) ? -1 : 0));
                let resultFilter = ""
                divCatalog.innerHTML = ""
                let j = 0
                for (const country of countries) {
                    if (country.continent == continentSelected) {
                        if (j % 3 == 0) {
                            resultFilter += `<div class="row">`
                        }
                        resultFilter += `<div class="col-lg-4 col-md-6 col-sm-12">
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
                        j++
                        if (j % 3 == 0) {
                            resultFilter += `</div>`
                        }
                    }
                }
                divCatalog.innerHTML += resultFilter
                addCountrySelected()
            }
        })
    }
}