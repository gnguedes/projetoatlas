export default function addCountrySelected() {
    const countries = document.getElementsByClassName("aCard")
    console.log(countries)
    for (let i = 0; i < countries.length; i++) {
        countries[i].addEventListener("click", function () {
            sessionStorage.setItem("countrySelected", this.id)
        })
    }
}

const countries = JSON.parse(localStorage.getItem("countries"))

const continentSelected = sessionStorage.getItem("continentSelected")

const btnFilter = document.querySelector("#btnFilter")
btnFilter.addEventListener("click", function () {
    const txtSearchCountry = document.querySelector("#txtSearchCountry").value
    const filter = document.querySelector("#dropdownMenuButton").value
    if (filter == "upAlfa") {
        countries.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
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
    } else if (filter == "downAlfa") {
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