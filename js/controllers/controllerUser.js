import User from "../models/user.js"

const users = JSON.parse(localStorage.getItem("users"))

// Registo de utilizadores 
export function addUser(txtUsername, txtPassword, txtEmail, valueXp, sltGenre, txtName, answeredQuestions, favCountries) {
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
    if (newPassword != newCheckPassword) {
        alert("As palavras-passe têm de ser iguais!")
    }
    else {
        if (existUser === false) {
            users.push(new User(txtUsername, txtPassword, txtEmail, valueXp, sltGenre, txtName, answeredQuestions, favCountries))
            localStorage.setItem("users", JSON.stringify(users))
            alert(`Utilizador ${txtUsername} adicionado com sucesso!`)
        }
        //se nao o username nao estiver disponivel, nao atualiza o utilizador
        else {
            alert(`Utilizador ${txtUsername} já existe!`)
        }
    }
}
//login de utilizador

export function loginUser(txtLoginUsername, txtLoginPassword) {
    let stateLogin = false
    for (const user of users) {
        if (user.username == txtLoginUsername && user.password == txtLoginPassword) {
            stateLogin = true;
        }
    }
    if (stateLogin == true) {
        sessionStorage.setItem("loggedUser", txtLoginUsername)
        alert("Login efetuado com sucesso!")
        location.href = "/html/homePage.html"
    }
    else {
        alert("Credenciais inválidas!")
    }

}
//logout de utilizador
export function logoutUser() {
    sessionStorage.removeItem("loggedUser")
    location.href = "/index.html"
}


//remover utilizador
export function removeUser(txtUsername) {
    let removeUser = confirm(`Deseja mesmo remover o utilizador ${txtUsername}?`)
    if (removeUser) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].username === txtUsername) {
                users.splice(i, 1)
            }
        }
        localStorage.setItem("users", JSON.stringify(users))
        location.reload()
    }
}

