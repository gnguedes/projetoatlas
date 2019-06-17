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


export let countries = []
//*verificar se existe países criados na local storage
if (localStorage.getItem("countries")) {
    //*caso haja, carrega-os para um array
    countries = JSON.parse(localStorage.getItem("countries"))
} else {
    //*caso não haja, cria países, dá push para um array e coloca-os na local storage
    const portugal = new Country("Portugal", "europe", "Lisboa", "10 milhões", "Português", "Euro", "Mediterrânico", "1143", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/2000px-Flag_of_Portugal.svg.png", "4.7", ["https://www.almadeviajante.com/wp-content/uploads/azenhas-do-mar-portugal.jpg", "https://advice.macroconsulting.pt/wp-content/uploads/2018/07/turismo-porto-portugal-macro-consulting.jpg", "https://turismodocentro.pt/wp-content/uploads/2017/03/Batalha_1920x1080-1.jpg", "https://cdnimages01.azureedge.net/rfm/torre_de_belem6963bf6b.jpg"], [{ "user": "joao12", "comment": "país muito bonito" }, { "user": "jorge", "comment": "OLA" }])
    const polonia = new Country("Polonia", "europe", "Varsóvia", "38 milhões", "Polaco/Polonês", "Złoty", "Temperado Continental", "1918", "https://partnersontheroad.com/wp-content/uploads/2018/07/flag-thuringia.png", "4.9", "")
    const alemanha = new Country("Alemanha", "europe", "Berlim", "82 milhões", "Alemão", "Euro", "Temperado Húmido", "1871", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/290px-Flag_of_Germany.svg.png", "4.5", "")
    const brasil = new Country("Brasil", "southAmerica", "Brasília", "209 milhões", "Português", "Real", "Tropical", "1821 a 1825", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2000px-Flag_of_Brazil.svg.png", "3.2", "")
    const espanha = new Country("Espanha", "europe", "Madrid", "46 milhões", "Espanhol", "Euro", "Mediterrânico", "1640", "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg", "3.1", "")
    const israel = new Country("Israel", "asia", "Jerusalém", "9 milhões", "Árabe", "Novo Shekel Israelense", "Mediterrânico", "1948", "https://pt.wikipedia.org/wiki/Bandeira_de_Israel#/media/File:Flag_of_Israel.svg", "4.1", "")

    countries.push(portugal, brasil, alemanha, polonia, espanha, israel)
    localStorage.setItem("countries", JSON.stringify(countries))
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
                                <div class="stars-outer">
                                    <div class="stars-inner"></div>
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
            const starPercentage = (country.rating / 5) * 100;
            const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
            document.querySelector(`#${country.name} .stars-inner`).style.width = starPercentageRounded;
        }
    }
    //*função importada que coloca na session storage o país que selecionamos para assim aparecer os dados detalhados
    addCountrySelected()
}


export function addCountry(name, continent, capital, population, coin, climate, independanceDate, flag, rating, images) {
    let countryExist = false
    for (const country of countries) {
        if (country.name === name) {
            countryExist = true
            alert("País já existe no catálogo")
            break
        }

        if (countryExist === false) {
            countries.push(new country(name, continent, capital, population, coin, climate, independanceDate, flag, rating, images))
            localStorage.setItem("countries", JSON.stringify(countries))
            alert(`${name} adicionado com sucesso`)
        }

    }
}
export function removeCountry(name) {
    let removeCountry = confirm(`Deseja mesmo remover o país ${name}?`)
    if (removeCountry) {
        for (let i = 0; i < countries.length; i++) {
            if (countries[i].name === name) {
                countries.splice(i, 1)
            }
        }
        localStorage.setItem("countries", JSON.stringify(countries))
        location.reload()
    }
}





