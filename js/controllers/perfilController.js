import User from "../models/user.js"
import {logoutUser} from "../controllers/controllerUser.js"

/* Obter o user selecionado*/
const loggedUser = sessionStorage.getItem("loggedUser")

const users = JSON.parse(localStorage.getItem("users"))

const divInfo = document.getElementById("divInfo")
let result = ''
function renderInfo() {
    for (let i = 0; i < users.length; i++) {
        console.log(users[i].username == loggedUser);
        if (users[i].username == loggedUser) {
            result += `<label for="username" id="info1">Username:${users[i].username}</label><br>
            <label for="nome" id="info2">Nome:${users[i].name}</label><br>
            <label for="e-mail" id="info3">E-mail:${users[i].email}</label><br>
            <label for="datanascimento" id="info4"> Data de nascimento:${users[i].birthday}</label><br>`
        }
    }
    divInfo.innerHTML += result
}
renderInfo()

//botao de logout
const btnLogout = document.querySelector("#btnLogout")
btnLogout.addEventListener("click", function (event) {

    logoutUser()

    event.preventDefault();
})

//verifica se o utilizador é admin ou nao, se for, a area admin fica disponivel na pagina de perfil
document.querySelector("#btnAdmin").style.display = "none"
checkTypeUser()

function checkTypeUser (){
    if (loggedUser === "admin") {
        document.querySelector("#btnAdmin").style.display = "block"
    }
}


    


