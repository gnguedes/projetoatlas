//*obter o array dos users
const users = JSON.parse(localStorage.getItem("users"))

//*obter o user logado
const loggedUser = sessionStorage.getItem("loggedUser")

const cardsLevel = document.getElementsByClassName("aCard")

const questions = JSON.parse(localStorage.getItem("questions"))

const continentSelected = sessionStorage.getItem("continentSelected")

for (const card of cardsLevel) {
    card.addEventListener("click", function () {
        sessionStorage.setItem("levelId", this.id)
    })
}

const questions1 = []
const questions2 = []
const questions3 = []
for (const user of users) {
    if (user.username == loggedUser) {
        for (const question of questions) {
            // console.log(question.id)
            if (((question.level == 1) || (question.level == 2)) && (!user.answeredQuestions.includes(question.id)) && (question.continent == continentSelected)) {
                console.log(!user.answeredQuestions.includes(question.level));
                questions1.push(question)
            }
        }
        for (const question of questions) {
            if (((question.level == 3) || (question.level == 4)) && (!user.answeredQuestions.includes(question.id)) && (question.continent == continentSelected)) {
                questions2.push(question)
            }

        }
        for (const question of questions) {
            if (((question.level == 5) || (question.level == 6)) && (!user.answeredQuestions.includes(question.id)) && (question.continent == continentSelected)) {
                questions3.push(question)
            }

        }
    }
}
console.log(questions1)
console.log(questions2)
console.log(questions3)


verifyUserPossibilityToPlay()

/**
 * Função que verifica se o utilizador tem xp suficiente para liberar os continentes para poder ter
 * acesso às questões acerca deste continente
 */
function verifyUserPossibilityToPlay() {
    for (const user of users) {
        if (user.username == loggedUser) {
            if (questions1.length == 0) {
                document.querySelector(".level1").style.backgroundColor = "rgb(51, 204, 51)"
                document.querySelector("#level1").href = ""
                document.querySelector("#level1").addEventListener("click", function () {
                    alert("Já completaste todas as questoes deste nivel")
                })
            }
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
                if (questions2.length == 0) {
                    document.querySelector(".level2").style.backgroundColor = "rgb(51, 204, 51)"
                    document.querySelector("#level2").href = ""
                    document.querySelector("#level2").addEventListener("click", function () {
                        alert("Já completaste todas as questoes deste nivel")
                    })
                } else {
                    document.querySelector("#level2").href = "question.html"
                }
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
                if (questions3.length == 0) {
                    document.querySelector(".level3").style.backgroundColor = "rgb(51, 204, 51)"
                    document.querySelector("#level3").href = ""
                    document.querySelector("#level3").addEventListener("click", function () {
                        alert("Já completaste todas as questoes deste nivel")
                    })
                } else {
                    document.querySelector("#level3").href = "question.html"
                }
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