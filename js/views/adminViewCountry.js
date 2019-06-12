//import paises do local storage
const countries = JSON.parse(localStorage.countries)


const divCountry = document.querySelector("#tableCountry")
let tableC = ''

renderCountry()
//função que lista os países
function renderCountry() {
    for (const country of countries) {
        tableC += `<table class="table">
        <thead>
                <tr>
                    <th>Continente</th>
                    <th>País</th>
                    <th>Rating</th>
                </tr>
            </thead>
                <tbody>
                    <tr>
                        <td scope="row">${country.continent}</td>
                        <td>${country.name}</td>
                        <td>${country.rating}</td>
                        <td><button id="${country.name}" class="btn btn-danger remove">Remover</button><td>
                        <br>
                    </tr>
                </tbody>
            </table>
            
        `

    }
    divCountry.innerHTML = tableC
    /*
    const btnRemove = document.getElementById("user.username")
    btnRemove.addEventListener("click", function(){
        localStorage.removeItem(user)
    })*/
    
} 



