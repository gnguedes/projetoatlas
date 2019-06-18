//importa a class de sugestoes
import Sugestion from "../models/sugestions.js"

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
    localStorage.setItem("sugestions", JSON.stringify("sugestions"))
}

