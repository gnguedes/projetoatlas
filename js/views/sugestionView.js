//importar a funcao que adiciona sugestoes
import { addSugestion } from "../controllers/sugestionsController.js"


const loggedUser = sessionStorage.getItem("loggedUser")
const formSugestion = document.querySelector("#frmSugestCountry")


manageSugestion()
function manageSugestion() {
    //listener quando é submitida a sugestao
    formSugestion.addEventListener("submit", function (event) {
        const txtNewCountry = document.querySelector("#txtNewCountry").value
        const txtNewCountryContinent = document.querySelector("#txtNewCountryContinent").value
        const newReasons = document.querySelector("#txtReason").value

        addSugestion(loggedUser, txtNewCountry, txtNewCountryContinent, newReasons)
        event.preventDefault()

    })
}
