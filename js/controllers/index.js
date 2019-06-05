//import { User } from "../models/user.js"

document.querySelector("#register").style.display = "none"
const users = JSON.parse(localStorage.getItem("users"))

const frmRegister = document.getElementById("frmRegisterUser")
frmRegister.addEventListener("submit", function (event) {
    const newPassword = document.querySelector("#txtPassword").value
    const newCheckPassword = document.querySelector("#checkPassword").value

    if (newPassword != newCheckPassword) {
        alert("As palavras-passe têm de ser iguais!")
    } else {
        alert("Está criada a tua conta!")
    }
    //
    document.querySelector("#register").style.display = "none"
    document.querySelector("#login").style.display = "block"

    event.preventDefault();
})
const frmLogin = document.getElementById("frmLoginUser")
frmLogin.addEventListener("submit", function (event) {
    const username = document.querySelector("#txtLoginUsername").value
    const password = document.querySelector("#txtLoginPassword").value
})
export function login(txtLoginUsername, txtLoginPassword) {
    let existUser = false
    for (const user of users) {
        if (user.username === txtLoginUsername && user.password === txtLoginPassword) {
            sessionStorage.setItem("loggedUser", txtLoginUsername)
            existUser = true
        }
    }
    return existUser
}



//torna o registo visivel, e o login invisivel
const clickBtn = document.getElementById("clickBtn")
clickBtn.addEventListener("click", function (event) {
    document.querySelector("#login").style.display = "none"
    document.querySelector("#register").style.display = "block"

    event.preventDefault();
})