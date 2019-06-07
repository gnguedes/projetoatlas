//import { User } from "../models/user.js"

document.querySelector("#register").style.display = "none"

const frmRegister = document.getElementById("frmRegisterUser")
frmRegister.addEventListener("submit", function (event) {
    const newPassword = document.querySelector("#txtPassword").value
    const newCheckPassword = document.querySelector("#checkPassword").value

    if (newPassword !== newCheckPassword) {
        alert("As palavras-passe têm de ser iguais")
    } else {
        alert("esta fixe")

    }
    document.querySelector("#register").style.display = "none"
    document.querySelector("#login").style.display = "block"

    event.preventDefault();
})

//torna o registo visivel, e o login invisivel
const clickBtn = document.getElementById("clickBtn")
clickBtn.addEventListener("click", function (event) {
    document.querySelector("#login").style.display = "none"
    document.querySelector("#register").style.display = "block"

    event.preventDefault();
})