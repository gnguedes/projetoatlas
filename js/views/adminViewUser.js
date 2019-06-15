//import utilizadores do local storage
const users = JSON.parse(localStorage.users)
//import da funcao que remove utilizadores
import {removeUser} from "../controllers/controllerUser.js"


const divUser = document.querySelector("#tableUser")
let tableU = ""


renderUsers()

//  funcão renderUser que criar uma tabela com todos os utilizadores registados
function renderUsers() {
    for (const user of users) {
        tableU += `<table class="table">
        <thead>
                <tr>
                    <th>Utilizador</th>
                    <th>email</th>
                    <th>xp</th>
                </tr>
            </thead>
                <tbody>
                    <tr>
                        <td scope="row">${user.username}</td>
                        <td>${user.email}</td>
                        <td>${user.xp}</td>
                        <td><button id="${user.username}" class="btn btn-danger remove">Remover</button><td>
                        <br>
                    </tr>
                </tbody>
            </table>
            
        `

    }
    divUser.innerHTML = tableU

    //elimina o utilizador seleccionado
    const btnRemove = document.getElementsByClassName("btn btn-danger remove")
    for (const elem of btnRemove) {
        elem.addEventListener("click", function () {
            let txtUsername = elem.id
            removeUser(txtUsername)
            
        })
    }
    
}
