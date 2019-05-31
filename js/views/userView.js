import {
    addUser, 
    loginUser,
    logoutUser
}
from  "../controllers/controllerUser.js"

//listener no botao de registo
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

//listener no botao de login
const formLogin = document.querySelector("#frmLogin")

formLogin.addEventListener("submit", function (event) {
    const txtLoginUsername = document.querySelector("#txtLoginUsername").value
    const txtLoginPassword = document.querySelector("#txtLoginPassword").value

    loginUser(txtLoginUsername,txtLoginPassword)
    event.preventDefault();
})