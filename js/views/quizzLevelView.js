//*obter o array dos users
const users = JSON.parse(localStorage.getItem("users"))

//*obter o user logado
const loggedUser = sessionStorage.getItem("loggedUser")

verifyUserPossibilityToPlay()

/**
 * Função que verifica se o utilizador tem xp suficiente para liberar os continentes para poder ter
 * acesso às questões acerca deste continente
 */
function verifyUserPossibilityToPlay() {
    for (const user of users) {
        if (user.username == loggedUser) {
            if (user.xp < 75) {
                const level2 = document.querySelector(".level2")
                level2.style.backgroundColor = "#9D9D9D"
                level2.innerHTML += `<img src="../images/lock-6.png" id="lockLevel">`
                level2.addEventListener("click", function (event) {
                    alert("Ainda não tens nível suficiente para jogares este nível!")
                    //*este event.preventDefault() serve para a página não dar refresh, ou seja, dá uma
                    //*melhor sensação de que o utilizador não tem acesso a esta área
                    event.preventDefault()
                })
            } else {
                document.querySelector("#level2").href = "question.html"
            }
            if (user.xp < 225) {
                const level3 = document.querySelector(".level3")
                level3.style.backgroundColor = "#9D9D9D"
                level3.innerHTML += `<img src="../images/lock-6.png" id="lockLevel">`
                level3.addEventListener("click", function (event) {
                    alert("Ainda não tens nível suficiente para jogar este nível!")
                    event.preventDefault()
                })
            } else {
                document.querySelector("#level3").href = "question.html"
            }
            if (user.xp < 400) {
                const level4 = document.querySelector(".level4")
                level4.style.backgroundColor = "#9D9D9D"
                level4.innerHTML += `<img src="../images/lock-6.png" id="lockLevel">`
                level4.addEventListener("click", function (event) {
                    alert("Ainda não tens nível suficiente para jogar este nível!")
                    event.preventDefault()
                })
            } else {
                document.querySelector("#level4").href = "question.html"
            }
        }
    }
}