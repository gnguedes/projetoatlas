//*obter na session storage o continente que o utilizador escolheu
const countrySelected = sessionStorage.getItem("countrySelected")
//*obter o array dos países
const countries = JSON.parse(localStorage.getItem("countries"))
//*obter a div onde se vai adicionnar os detalhes do país
const divCard = document.querySelector("#divCardDetails")
//*obter o local onde se irá colocar a bandeira do oaís
const imgCountry = document.querySelector("#imgCountryDetails")

const divCarousel = document.querySelector(".carousel-inner")

const olCarousel = document.querySelector(".carousel-indicators")

/**
 * Função que adiciona os detalhes e a bandeira do país ao card
 * Começa por entrar num ciclo para ver todos os países até encontrar um com o nome igual ao que o utilizador
 * escolheu e após isso adiconar as informações
 */
function addInfoCountry() {
    let result = ""
    let indicator = ""
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
            for (let i = 0; i < country.images.length; i++) {
                if (i == 0) {
                    result += `<div class="carousel-item active">
                                <img class="d-block w-100" id="imgCarousel" src="${country.images[i]}">
                            </div>`
                    indicator += `<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>`
                    continue;
                }
                result += `<div class="carousel-item">
                                <img class="d-block w-100" id="imgCarousel" src="${country.images[i]}">
                            </div>`
                indicator += `<li data-target="#carouselExampleIndicators" data-slide-to="${i}"></li>`
            }
            divCarousel.innerHTML += result
            olCarousel.innerHTML += indicator
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

export function loadComments() {
    const btnComments = document.querySelector("#btnCommentCountry")
    const bodyModal = document.querySelector("#modalBodyComments")
    let result = ""
    let i = true
    btnComments.addEventListener("click", function () {
        if (i == true) {
            for (const country of countries) {
                if (country.name == countrySelected) {
                    for (let i = 0; i < country.comments.length; i++) {
                        result += `<div class="row">
                                <img id="iconComments" src="../images/pirata_rapaz.png">
                                <p id="idUserComments">${country.comments[i].user}</p>
                            </div>
                            <div class="row" id="rowComments">
                                <p id="txtComments">${country.comments[i].comment}</p>
                            </div>`
                    }
                }
            }
            bodyModal.innerHTML += result
            i = false
        }
    })
}

loadComments()