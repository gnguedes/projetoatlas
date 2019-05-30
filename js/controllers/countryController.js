const countrySelected = sessionStorage.getItem("countrySelected")

const countries = JSON.parse(localStorage.getItem("countries"))

const divCard = document.querySelector("#divCardDetails")

const imgCountry = document.querySelector("#imgCountryDetails")

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

function obtainContinent(continent){
    for (const country of countries) {
        if(country.name == countrySelected){
            if(continent == "europe"){
                return "Europa"
            }
            else if(continent == "asia"){
                return "Ásia"
            }
            else if(continent == "africa"){
                return "África"
            }
            else if(continent == "northAmerica"){
                return "América do Norte"
            }
            else if(continent == "southAmerica"){
                return "América do Sul"
            }
            else if(continent == "oceania"){
                return "Oceania"
            }
        }
    }
}