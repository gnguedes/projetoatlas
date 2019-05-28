import User from "../models/user.js"


const formRegister = document.querySelector("#frmRegisterUser")

formRegister.addEventListener("submit", function (event) {
    const txtUsername = document.querySelector("#txtUsername").value
    const txtPassword = document.querySelector("#txtPassword").value
    const txtEmail = document.querySelector("#txtEmail").value
    const sltGenre = document.querySelector("#sltGenre").value
    //Estes valores têm um valor pré-definido pois pode ser editado posteriormente pela "criança"
    const txtName = ""
    const valueXp = "0"
    const dateBirthday = "00-00-0000"

    addUser(txtUsername, txtPassword, txtEmail, valueXp, sltGenre, txtName, dateBirthday)
    event.preventDefault();
})


//adicao de 2 users, admin e uma criança, a titulo de exemplo
//para local storage
export let users = []

if (localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem("users"))
} else {
    const admin = new User("admin", "admin", "admin@admin.pt", "1000", "M", "admin", "01-01-01")
    const kid1 = new User("joao12", "123", "joao@gmail.pt", "20", "M", "joao", "08-10-2010")

    users.push(admin, kid1)
    localStorage.setItem("users", JSON.stringify(users))
}


// Registo de utilizadores 
function addUser(txtUsername, txtPassword, txtEmail, valueXp, sltGenre, txtName, dateBirthday) {
    let existUser = false
    //verifica se aquele username já existe
    for (const User of users) {
        if (User.username === txtUsername) {
            existUser = true
            break
        }
    }

    //se o username estiver disponivel, adiciona o utilizador
    if (existUser === false) {
        users.push(new User(txtUsername, txtPassword, txtEmail, valueXp, sltGenre, txtName, dateBirthday))
        localStorage.setItem("users", JSON.stringify(users))
        alert(`Utilizador ${txtUsername} adicionado com sucesso!`)
        location.href = "../projetoaltas/index.html"
    }
    //se nao o username nao estiver disponivel, nao atualiza o utilizador
    else {
        alert(`Utilizador ${txtUsername} já existe!`)
    }

}
//login de utilizador

export function loginUser(txtLoginUsername, txtLoginPassword) {
    let existUser = false
    for (const User of users) {
        if (User.username == txtLoginUsername && User.password == txtLoginPassword) {
            existUser = true
            sessionStorage.setItem("loggedUser", txtLoginUsername)
        }
    }
    return existUser
}

export function logoutUser() {
    sessionStorage.removeItem("loggedUser")
}