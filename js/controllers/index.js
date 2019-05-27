//import { User } from "../models/user.js"


const frmRegister = document.getElementById("frmRegisterUser")
frmRegister.addEventListener("submit", function (event) {
    const newPassword = document.querySelector("#txtPassword").value
    const newCheckPassword = document.querySelector("#checkPassword").value

    if (newPassword !== newCheckPassword) {
        alert("As palavras-passe têm de ser iguais")
    } else {
        alert("esta fixe")
    }

    event.preventDefault();
})