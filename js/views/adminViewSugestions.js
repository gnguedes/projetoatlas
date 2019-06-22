//import sugestoes do local storage
const sugestions = JSON.parse(localStorage.sugestions)
//import da funcao que remove sugestoes e recompensa sugestoes
import { removeSugestion, acceptSugestion } from "../controllers/sugestionsController.js"


const divSugestion = document.querySelector("#tableSugestion")
let tableS = ''

renderSugestion()
//função que lista as sugestoes
function renderSugestion() {
    for (const sugestion of sugestions) {
        tableS += `<table class="table">
        <thead>
                <tr>
                    <th>Utilizador</th>
                    <th>País</th>
                    <th>Continente</th>
                    <th>Sugestão</th>
                </tr>
            </thead>
                <tbody>
                    <tr>
                        <td scope="row">${sugestion.loggedUser}</td>
                        <td>${sugestion.newCountry}</td>
                        <td>${sugestion.newCountryContinent}</td>
                        <td>${sugestion.newReasons}</td>
                        <td><button id="${sugestion.loggedUser}" class="btn btn-success">Aceitar</button><td>
                        <td><button id="${sugestion.newReasons}" class="btn btn-danger remove">Remover</button><td>
                        <br>
                    </tr>
                </tbody>
            </table>
            
        `

    }

    divSugestion.innerHTML = tableS

    //botao que remove sugestoes
    const btnRemove = document.getElementsByClassName("btn btn-danger remove")
    for (const elem of btnRemove) {
        elem.addEventListener("click", function () {
            let txtSugestionNegative = elem.id
            removeSugestion(txtSugestionNegative)

        })
    }

    //botao que recompensa sugestoes
    const btnSucess = document.getElementsByClassName("btn btn-success")
    for (const elem2 of btnSucess) {
        elem2.addEventListener("click", function () {
            let txtSugestionPositive = elem2.id
            acceptSugestion(txtSugestionPositive)
        })
    }

}