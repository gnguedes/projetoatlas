/**
 * Função que adiciona um evento ao cards do catalogo para estes adicionarem na session storage o
 * país que o utilizador selecionou
 */
export default function addCountrySelected() {
    const countries = document.getElementsByClassName("aCard")
    console.log(countries)
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
//!adição de evento no click do botão
btnFilter.addEventListener("click", function () {
    //*obter o valor introduzido no campo de pesquisa por nome
    const txtSearchCountry = document.querySelector("#txtSearchCountry").value
    //*obter o filtro selecionado pelo utilizador
    //!Adicionar o filtro de rating
    const filter = document.querySelector("#dropdownMenuButton").value
    //*verifica qual o filtro selecionado e, dependendo desse valor, adiciona os países de ordens diferentes
    if (filter == "upAlfa") {
        //*ordenar o país de ordem alfabética crescente
        countries.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        //*criação de uma variável vazia para adiconar ao innerHTML do catalogo
        let resultFilter = ""
        //*apagar os card presentes no catálogo
        divCatalog.innerHTML = ""
        let j = 0
        for (const country of countries) {
            //*num ciclo que faz por todos os países verifica se este pertence ao continente prentendido e se
            //*o nome do país começa por o que o utilizador introduziu na caixa de texto
            if ((country.continent == continentSelected) && (txtSearchCountry == "" || country.name.toLowerCase().startsWith(txtSearchCountry.toLowerCase()))) {
                //*se ultrapassar as verificações, confirma se j % 3 = 0, se sim adiciona uma nova div para
                //*assim os cards se encontrarem disposto em 3 por linha
                if (j % 3 == 0) {
                    resultFilter += `<div class="row">`
                }
                //*adicona um país
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
                //*fecha a div que foi criada acima para poder criar uma nova, ou seja, esta linha já tem 3 cards
                if (j % 3 == 0) {
                    resultFilter += `</div>`
                }
            }
        }
        //*adição do catalogo ordenado ao html
        divCatalog.innerHTML += resultFilter
        //*função que permite adicionar à session storage o país selecionado 
        addCountrySelected()
    } else if (filter == "downAlfa") {
        //*array ordenado por ordem alfabética decrescente
        countries.sort((a, b) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0));
        let resultFilter = ""
        divCatalog.innerHTML = ""
        let j = 0
        for (const country of countries) {
            if ((country.continent == continentSelected) && (txtSearchCountry == "" || country.name.toLowerCase().startsWith(txtSearchCountry.toLowerCase()))) {
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
    } else if (filter == "upPop") {
        //*array ordenado por população crescente
        countries.sort((a, b) => (a.population < b.population) ? 1 : ((b.population < a.population) ? -1 : 0));
        let resultFilter = ""
        divCatalog.innerHTML = ""
        let j = 0
        for (const country of countries) {
            if ((country.continent == continentSelected) && (txtSearchCountry == "" || country.name.toLowerCase().startsWith(txtSearchCountry.toLowerCase()))) {
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
    } else if (filter == "downPop") {
        //*array ordenado por população decrescente
        countries.sort((a, b) => (a.population > b.population) ? 1 : ((b.population > a.population) ? -1 : 0));
        let resultFilter = ""
        divCatalog.innerHTML = ""
        let j = 0
        for (const country of countries) {
            if ((country.continent == continentSelected) && (txtSearchCountry == "" || country.name.toLowerCase().startsWith(txtSearchCountry.toLowerCase()))) {
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