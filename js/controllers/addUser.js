import {addUser} from "../models/main.js"

const formRegister = document.querySelector("#frmRegisterUser")

formRegister.addEventListener("submit", function (event) {
    const txtUsername = document.querySelector("#txtUsername").value
    const txtPassword = document.querySelector("#txtPassword").value
    const txtEmail = document.querySelector("#txtEmail").value
    const sltGenre = document.querySelector("#sltGenre").value
    
    const txtName = ""
    const valueXp = "0"
    const dateBirthday = "00-00-0000"

    addUser(txtUsername, txtPassword, txtEmail, valueXp, sltGenre, txtName, dateBirthday)
    event.preventDefault();
})