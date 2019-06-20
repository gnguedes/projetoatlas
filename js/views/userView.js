import {
    addUser,
    loginUser
}
    from "../controllers/controllerUser.js"

userManage()
function userManage() {
    //listener no botao de registo
    const formRegister = document.querySelector("#frmRegisterUser")

    formRegister.addEventListener("submit", function (event) {
        const txtUsername = document.querySelector("#txtUsername").value
        const txtPassword = document.querySelector("#txtPassword").value
        const txtEmail = document.querySelector("#txtEmail").value
        const sltGenre = document.querySelector("#sltGenre").value
        //Estes valores têm um valor pré-definido pois pode ser editado posteriormente pela "criança"
        const txtName = document.querySelector("#txtName").value
        const valueXp = "0"
        const answeredQuestions = []
        const favCountries = []

        addUser(txtUsername, txtPassword, txtEmail, valueXp, sltGenre, txtName, answeredQuestions, favCountries)
        event.preventDefault();
    })

    //listener no botao de login
    const formLogin = document.querySelector("#frmLoginUser")

    formLogin.addEventListener("submit", function (event) {
        const txtLoginUsername = document.querySelector("#txtLoginUsername").value
        const txtLoginPassword = document.querySelector("#txtLoginPassword").value


        loginUser(txtLoginUsername, txtLoginPassword)
        event.preventDefault();
    })


}

/**
const imgProfile = document.querySelector("#imgPerfil")
let imgPIC = ''

profilePic()
//função que lista as questões
function profilePic() {
    for (const question of questions) {
        imgPIC += `
        <img src="../images/Grupo 119.png" id="imgPerfil">
        <div class="col-lg-4" id="divInfo">
        `
        imgPIC.innerHTML = imgPIC
    }

}*/
