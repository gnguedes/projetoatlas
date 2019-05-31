//*obter na session storage o continente que o utilizador escolheu
const countrySelected = sessionStorage.getItem("countrySelected")
//*obter o array dos países
const countries = JSON.parse(localStorage.getItem("countries"))
//*obter a div onde se vai adicionnar os detalhes do país
const divCard = document.querySelector("#divCardDetails")
//*obter o local onde se irá colocar a bandeira do oaís
const imgCountry = document.querySelector("#imgCountryDetails")

/**
 * Função que adiciona os detalhes e a bandeira do país ao card
 * Começa por entrar num ciclo para ver todos os países até encontrar um com o nome igual ao que o utilizador
 * escolheu e após isso adiconar as informações
 */
function addInfoCountry() {
    for (const country of countries) {
        if (country.name == countrySelected) {
            divCard.innerHTML += `                    
            <p id="txtCardDetails"><b>Nome:</b> ${country.name}</p>
            <p id="txtCardDetails"><b>Continente:</b> ${obtainContinent(country.continent)}</p>
            <p id="txtCardDetails"><b>Capital:</b> ${country.capital}</p>
            <p id="txtCardDetails"><b>População:</b> ${country.population}</p>
            <p id="txtCardDetails"><b>Língua:</b> ${country.languange}</p>
            <p id="txtCardDetails"><b>Moeda:</b> ${country.coin}</p>
            <p id="txtCardDetails"><b>Clima:</b> ${country.climate}</p>
            <p id="txtCardDetails"><b>Ano de Independência:</b> ${country.independanceDate}</p>
        `
            imgCountry.src = `../images/flags/${country.name}.png`
        }
    }
}

addInfoCountry()

/**
 * @param {string} continent
 * Função que dá return dependendo do valor apresentado, como parámetro, para poder apresentar
 * o nome do continente
 */
function obtainContinent(continent) {
    for (const country of countries) {
        if (country.name == countrySelected) {
            if (continent == "europe") {
                return "Europa"
            } else if (continent == "asia") {
                return "Ásia"
            } else if (continent == "africa") {
                return "África"
            } else if (continent == "northAmerica") {
                return "América do Norte"
            } else if (continent == "southAmerica") {
                return "América do Sul"
            } else if (continent == "oceania") {
                return "Oceania"
            }
        }
    }
}