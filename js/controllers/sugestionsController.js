//importa a class de sugestoes
import Sugestion from "../models/sugestions.js"
// import todos os utilizadores registados
const users = JSON.parse(localStorage.getItem("users"))

/**coloca todas as sugestoes dentro de um array, se nao existir nehuma  
 * uma sugestao de teste é adicionada ao array, isto apenas para verificar
 * se funciona ou não
 */

export let sugestions = []

if (localStorage.getItem("sugestions")) {
    sugestions = JSON.parse(localStorage.getItem("sugestions"))
} else {
    const sugestion1 = new Sugestion("admin", "teste", "teste", "para testar")

    sugestions.push(sugestion1)
    localStorage.setItem("sugestions", JSON.stringify(sugestions))
}

//funcao que adiciona sugestao à lista
export function addSugestion(loggedUser, newCountry, newCountryContinent, newReasons) {

    sugestions.push(new Sugestion(loggedUser, newCountry, newCountryContinent, newReasons))

    localStorage.setItem("sugestions", JSON.stringify(sugestions))
    swal("Obrigado pela tua sugestão", "Sugestão realizada com sucesso", "success").then(value => {
        location.href = "/html/homePage.html"
    })
}


//remove a sugestao

export function removeSugestion(txtSugestionNegative) {
    let removeS = confirm(`Deseja mesmo remover a sugestão?`)
    if (removeS) {
        for (let i = 0; i < sugestions.length; i++) {
            if (sugestions[i].newReasons === txtSugestionNegative) {
                sugestions.splice(i, 1)
            }
        }
        localStorage.setItem("sugestions", JSON.stringify(sugestions))
        location.reload()
    }
}

//aceita a sugestao do utilizador e recompensa com 5xp
export function acceptSugestion(txtSugestionPositive) {
    let acceptS = confirm(`Deseja dar 5xp a este utilizador?`)
    if (acceptS) {
        for (const user of users) {
            if (user.username === txtSugestionPositive) {
                let newXp = Number(user.xp) + 5
                user.xp = newXp
            }
        }
        localStorage.setItem("users", JSON.stringify(users))
        location.reload

    }
}