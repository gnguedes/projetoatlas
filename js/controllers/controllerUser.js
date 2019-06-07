import User from "../models/user.js"

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
export function addUser(txtUsername, txtPassword, txtEmail, valueXp, sltGenre, txtName, dateBirthday) {
    let existUser = false
    //verifica se aquele username já existe
    for (const user of users) {
        if (user.username === txtUsername) {
            existUser = true
            break
        }
    }

    const newPassword = document.querySelector("#txtPassword").value
    const newCheckPassword = document.querySelector("#checkPassword").value

    //se o username estiver disponivel, adiciona o utilizador
    if (existUser === false) {
        users.push(new User(txtUsername, txtPassword, txtEmail, valueXp, sltGenre, txtName, dateBirthday))
        localStorage.setItem("users", JSON.stringify(users))
        
        
        alert(`Utilizador ${txtUsername} adicionado com sucesso!`)
        return true
    }
    //se nao o username nao estiver disponivel, nao atualiza o utilizador
    else {
        alert(`Utilizador ${txtUsername} já existe!`)
        return false
    }
    
    
}
//login de utilizador

export function loginUser(txtLoginUsername, txtLoginPassword) {
    let existUser = false
    for (const User of users) {
        if ((User.username === txtLoginUsername) && (User.password === txtLoginPassword)) {
            sessionStorage.setItem("loggedUser", txtLoginUsername)
            existUser = true
            alert("esta na sessao")
            //location.href = "../projetoatlas/html/home_page.html"
        }
    }
}

//logout de utilizador
export function logoutUser() {
    sessionStorage.removeItem("loggedUser")
}