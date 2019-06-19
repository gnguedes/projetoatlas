//import paises do local storage
const countries = JSON.parse(localStorage.countries)
//import da funcao que remove paises
import {removeCountry} from "../controllers/adminController.js"


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
    
    //botao que remove país
    const btnRemove = document.getElementsByClassName("btn btn-danger remove")
    for (const elem of btnRemove) {
        elem.addEventListener("click", function () {
            let name = elem.id
            removeCountry(name)
            
        })
    }

}