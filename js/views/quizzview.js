//*obter todos os cards apresentados na seleção de continente
const continents = document.getElementsByClassName("aCard")
//*Adiciona um event listener a todos os cards para se colocar na sessionStorage o continente que 
for (let i = 0; i < continents.length; i++) {
    continents[i].addEventListener("click", function () {
        sessionStorage.setItem("continentSelected", this.id)
    })
}
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
            if (user.xp < 25) {
                const asia = document.querySelector(".asia")
                asia.style.backgroundColor = "#9D9D9D"
                const imgAsia = document.querySelector(".imgAsia")
                imgAsia.style.opacity = "0.3"
                asia.innerHTML += `<img src="../images/lock-6.png" id="lock">`
                asia.addEventListener("click", function event() {
                    alert("Ainda não tens nível suficiente para jogares neste continente!")
                    //*este event.preventDefault() serve para a página não dar refresh, ou seja, dá uma
                    //*melhor sensação de que o utilizador não tem acesso a esta área
                    event.preventDefault()
                })
            } else {
                document.querySelector("#asia").href = "question.html"
            }
            if (user.xp < 50) {
                const africa = document.querySelector(".africa")
                africa.style.backgroundColor = "#9D9D9D"
                const imgAfrica = document.querySelector(".imgAfrica")
                imgAfrica.style.opacity = "0.3"
                africa.innerHTML += `<img src="../images/lock-6.png" id="lock">`
                africa.addEventListener("click", function (event) {
                    alert("Ainda não tens nível suficiente para jogar neste continente!")
                    event.preventDefault()
                })
            } else {
                document.querySelector("#africa").href = "question.html"
            }
            if (user.xp < 100) {
                const northAmerica = document.querySelector(".northAmerica")
                northAmerica.style.backgroundColor = "#9D9D9D"
                const imgNorthAmerica = document.querySelector(".imgNorthAmerica")
                imgNorthAmerica.style.opacity = "0.3"
                northAmerica.innerHTML += `<img src="../images/lock-6.png" id="lock">`
                northAmerica.addEventListener("click", function (event) {
                    alert("Ainda não tens nível suficiente para jogar neste continente!")
                    event.preventDefault()
                })
            } else {
                document.querySelector("#northAmerica").href = "question.html"
            }
            if (user.xp < 300) {
                const southAmerica = document.querySelector(".southAmerica")
                southAmerica.style.backgroundColor = "#9D9D9D"
                const imgSouthAmerica = document.querySelector(".imgSouthAmerica")
                imgSouthAmerica.style.opacity = "0.3"
                southAmerica.innerHTML += `<img src="../images/lock-6.png" id="lock">`
                southAmerica.addEventListener("click", function (event) {
                    alert("Ainda não tens nível suficiente para jogar neste continente!")
                    event.preventDefault()
                })
            } else {
                document.querySelector("#southAmerica").href = "question.html"
            }
            if (user.xp < 600) {
                const oceania = document.querySelector(".oceania")
                oceania.style.backgroundColor = "#9D9D9D"
                const imgOceania = document.querySelector(".imgOceania")
                imgOceania.style.opacity = "0.3"
                oceania.innerHTML += `<img src="../images/lock-6.png" id="lock">`
                oceania.addEventListener("click", function (event) {
                    alert("Ainda não tens nível suficiente para jogar neste continente!")
                    event.preventDefault()
                })
            } else {
                document.querySelector("#oceania").href = "question.html"
            }
        }
    }
}