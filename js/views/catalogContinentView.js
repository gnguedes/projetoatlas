import {
    renderCatalog
} from "../controllers/catalogController.js"

/**
 * Função que adiciona um evento ao cards do catalogo para estes adicionarem na session storage o
 * país que o utilizador selecionou
 */
export default function addCountrySelected() {
    const countries = document.getElementsByClassName("aCard")
    for (let i = 0; i < countries.length; i++) {
        countries[i].addEventListener("click", function () {
            sessionStorage.setItem("countrySelected", this.id)
        })
    }
}
//*obter o array dos países
const countries = JSON.parse(localStorage.getItem("countries"))

//*obter o continente selecionado pelo utilizador
const continentSelected = sessionStorage.getItem("continentSelected")

//*obter o botão para filtrar
const btnFilter = document.querySelector("#btnFilter")

const countriesContinent = []
for (const country of countries) {
    if (country.continent == continentSelected) {
        countriesContinent.push(country)
    }
}

//!adição de evento no click do botão
btnFilter.addEventListener("click", function () {
    //*obter o valor introduzido no campo de pesquisa por nome
    const txtSearchCountry = document.querySelector("#txtSearchCountry").value
    //*obter o filtro selecionado pelo utilizador
    //!Adicionar o filtro de rating
    const filter = document.querySelector("#dropdownMenuButton").value
    let countriesC = []
    //*verifica qual o filtro selecionado e, dependendo desse valor, adiciona os países de ordens diferentes
    if (filter == "upAlfa") {
        //*ordenar o país de ordem alfabética crescente
        countriesContinent.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        //*criação de uma variável vazia para adiconar ao innerHTML do catalogo
        let resultFilter = ""
        //*apagar os card presentes no catálogo
        // divCatalog.innerHTML = ""
        // let j = 0

        //*num ciclo que faz por todos os países verifica se este pertence ao continente prentendido e se
        //*o nome do país começa por o que o utilizador introduziu na caixa de texto
        // if (txtSearchCountry == "" || country.name.toLowerCase().includes(txtSearchCountry.toLowerCase())) {

        for (const country of countriesContinent) {
            if (txtSearchCountry == "" || country.name.toLowerCase().includes(txtSearchCountry.toLowerCase())) {
                countriesC.push(country)
            }
        }
        renderCatalog(countriesC)
        //*adição do catalogo ordenado ao html
        divCatalog.innerHTML += resultFilter
        for (const country of countriesContinent) {
            if (document.querySelector(`#${country.name} .stars-inner`) != null) {
                const starPercentage = (country.rating / 5) * 100;
                const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
                document.querySelector(`#${country.name} .stars-inner`).style.width = starPercentageRounded;
            }
        }
        //*função que permite adicionar à session storage o país selecionado 
        addCountrySelected()
    } else if (filter == "downAlfa") {
        //*array ordenado por ordem alfabética decrescente
        countriesContinent.sort((a, b) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0));
        let resultFilter = ""
        divCatalog.innerHTML = ""
        for (const country of countriesContinent) {
            if (txtSearchCountry == "" || country.name.toLowerCase().includes(txtSearchCountry.toLowerCase())) {
                countriesC.push(country)
            }
        }
        renderCatalog(countriesC)
        divCatalog.innerHTML += resultFilter
        for (const country of countriesContinent) {
            if (document.querySelector(`#${country.name} .stars-inner`) != null) {
                const starPercentage = (country.rating / 5) * 100;
                const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
                document.querySelector(`#${country.name} .stars-inner`).style.width = starPercentageRounded;
            }
        }
        addCountrySelected()
    } else if (filter == "upPop") {
        //*array ordenado por população crescente
        countriesContinent.sort((a, b) => (a.population < b.population) ? 1 : ((b.population < a.population) ? -1 : 0));
        let resultFilter = ""
        divCatalog.innerHTML = ""
        for (const country of countriesContinent) {
            if (txtSearchCountry == "" || country.name.toLowerCase().includes(txtSearchCountry.toLowerCase())) {
                countriesC.push(country)
            }
        }
        renderCatalog(countriesC)
        divCatalog.innerHTML += resultFilter
        for (const country of countriesContinent) {
            if (document.querySelector(`#${country.name} .stars-inner`) != null) {
                const starPercentage = (country.rating / 5) * 100;
                const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
                document.querySelector(`#${country.name} .stars-inner`).style.width = starPercentageRounded;
            }
        }
        addCountrySelected()
    } else if (filter == "downPop") {
        //*array ordenado por população decrescente
        countriesContinent.sort((a, b) => (a.population > b.population) ? 1 : ((b.population > a.population) ? -1 : 0));
        let resultFilter = ""
        divCatalog.innerHTML = ""
        let j = 0
        for (const country of countriesContinent) {
            if (txtSearchCountry == "" || country.name.toLowerCase().includes(txtSearchCountry.toLowerCase())) {
                countriesC.push(country)
            }
        }
        renderCatalog(countriesC)
        divCatalog.innerHTML += resultFilter
        for (const country of countriesContinent) {
            if (document.querySelector(`#${country.name} .stars-inner`) != null) {
                const starPercentage = (country.rating / 5) * 100;
                const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
                document.querySelector(`#${country.name} .stars-inner`).style.width = starPercentageRounded;
            }
        }
        addCountrySelected()
    } else if (filter == "downRating") {
        //*array ordenado por rating decrescente
        countriesContinent.sort((a, b) => (a.rating > b.rating) ? 1 : ((b.rating > a.rating) ? -1 : 0));
        let resultFilter = ""
        divCatalog.innerHTML = ""
        for (const country of countriesContinent) {
            if (txtSearchCountry == "" || country.name.toLowerCase().includes(txtSearchCountry.toLowerCase())) {
                countriesC.push(country)
            }
        }
        renderCatalog(countriesC)
        divCatalog.innerHTML += resultFilter
        for (const country of countriesContinent) {
            if (document.querySelector(`#${country.name} .stars-inner`) != null) {
                const starPercentage = (country.rating / 5) * 100;
                const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
                document.querySelector(`#${country.name} .stars-inner`).style.width = starPercentageRounded;
            }
        }
        addCountrySelected()
    } else if (filter == "upRating") {
        //*array ordenado por rating crescente
        countriesContinent.sort((a, b) => (a.rating < b.rating) ? 1 : ((b.rating < a.rating) ? -1 : 0));
        let resultFilter = ""
        divCatalog.innerHTML = ""
        for (const country of countriesContinent) {
            if (txtSearchCountry == "" || country.name.toLowerCase().includes(txtSearchCountry.toLowerCase())) {
                countriesC.push(country)
            }
        }
        renderCatalog(countriesC)
        divCatalog.innerHTML += resultFilter
        for (const country of countriesContinent) {
            if (document.querySelector(`#${country.name} .stars-inner`) != null) {
                const starPercentage = (country.rating / 5) * 100;
                const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
                document.querySelector(`#${country.name} .stars-inner`).style.width = starPercentageRounded;
            }
        }
        addCountrySelected()
    }
})