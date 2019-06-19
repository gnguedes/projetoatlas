import addCountrySelected from "../views/catalogContinentView.js"


//*obter o continente selecionado
const continentSelected = sessionStorage.getItem("continentSelected")
//*obter o titulo para introduzir o nome do continente em que nos encontramos
const continentName = document.querySelector("#continentName")

const countries = JSON.parse(localStorage.getItem("countries"))

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

let i = 0;
//*obter a div com o id divCatalog para posteriormente colocar os países no catálogo
const divCatalog = document.querySelector("#divCatalog")
let result = ""
const countriesContinent = []
for (const country of countries) {
    if(country.continent == continentSelected){
        countriesContinent.push(country)
    }
}

renderCatalog();
/**
 * Função RenderCatalog que coloca os países no catálogo na ordem que estes estão no array, ou seja, sem ordenação
 */
function renderCatalog() {
    for (const country of countriesContinent) {
            if (i == 0) {
                result += `<div class="row">`
            }
            result += `<div class="col-sm-6 col-md-6 col-lg-3">
                        <a class="aCard" href="../../html/country.html" id="${country.name}">
                            <div class="card" id="cardCountry">
                                <img src="${country.flag}" id="imgCountry">
                                <hr />
                                <div class="card-body">
                                    <p class="card-text" id="cardText">${country.name}</p>
                                </div>
                                <div class="stars-outer outer1">
                                    <div class="stars-inner inner1"></div>
                                </div>
                            </div>
                        </a>
                    </div>`
            i++
            if (i == countriesContinent.length) {
                result += `</div>`
            }

    }
    divCatalog.innerHTML += result
    for (const country of countries) {
        if (country.continent == continentSelected) {
            const starPercentage = (country.rating / 5) * 100
            const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`
            document.querySelector(`#${country.name} .stars-inner`).style.width = starPercentageRounded
        }
    }
    //*função importada que coloca na session storage o país que selecionamos para assim aparecer os dados detalhados
    addCountrySelected()
}





