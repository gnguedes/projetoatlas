//importar países favoritos do local storage
const favCountries = JSON.parse(localStorage.countries)

const divFavCountries = document.querySelector("#divFavCountries")

const countries = JSON.parse(localStorage.getItem("countries"))

const users = JSON.parse(localStorage.getItem("users"))

const loggedUser = sessionStorage.getItem("loggedUser")

let result = ''

renderFavCountry()
// função que lista os países favoritos
function renderFavCountry() {
    let i = 0
    for (const user of users) {
        if(user.username == loggedUser){
            for (const country of countries) {
                if(user.favCountries.includes(country.name)){
                    if (i == 0) {
                        result += `<div class="row">`
                    }
                    //*adicona um país
                    result += `<div class="col-sm-6 col-md-6 col-lg-3">
                                    <div class="card" id="cardCountry">
                                        <img src="${country.flag}" id="imgCountry">
                                        <hr />
                                        <div class="card-body">
                                            <p class="card-text" id="cardText">${country.name}</p>
                                        </div>
                                    </div>
                                </div>`
                    i++
                    if (i == user.favCountries.length) {
                        result += `</div>`
                    }
                }
            }
        }
    }
    divFavCountries.innerHTML += result
}