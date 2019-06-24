//* Importar a classe Question para poderem ser criados novas questões
import Question from "../models/question.js"

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
                asia.addEventListener("click", function(event) {
                    swal("Ainda não tens nível suficiente para jogar neste continente!", "", "error")
                    //*este event.preventDefault() serve para a página não dar refresh, ou seja, dá uma
                    //*melhor sensação de que o utilizador não tem acesso a esta área
                    event.preventDefault()
                })
            } else {
                document.querySelector("#asia").href = "quizzLevel.html"
            }
            if (user.xp < 50) {
                const africa = document.querySelector(".africa")
                africa.style.backgroundColor = "#9D9D9D"
                const imgAfrica = document.querySelector(".imgAfrica")
                imgAfrica.style.opacity = "0.3"
                africa.innerHTML += `<img src="../images/lock-6.png" id="lock">`
                africa.addEventListener("click", function (event) {
                    swal("Ainda não tens nível suficiente para jogar neste continente!", "", "error")
                    event.preventDefault()
                })
            } else {
                document.querySelector("#africa").href = "quizzLevel.html"
            }
            if (user.xp < 100) {
                const northAmerica = document.querySelector(".northAmerica")
                northAmerica.style.backgroundColor = "#9D9D9D"
                const imgNorthAmerica = document.querySelector(".imgNorthAmerica")
                imgNorthAmerica.style.opacity = "0.3"
                northAmerica.innerHTML += `<img src="../images/lock-6.png" id="lock">`
                northAmerica.addEventListener("click", function (event) {
                    swal("Ainda não tens nível suficiente para jogar neste continente!", "", "error")
                    event.preventDefault()
                })
            } else {
                document.querySelector("#northAmerica").href = "quizzLevel.html"
            }
            if (user.xp < 300) {
                const southAmerica = document.querySelector(".southAmerica")
                southAmerica.style.backgroundColor = "#9D9D9D"
                const imgSouthAmerica = document.querySelector(".imgSouthAmerica")
                imgSouthAmerica.style.opacity = "0.3"
                southAmerica.innerHTML += `<img src="../images/lock-6.png" id="lock">`
                southAmerica.addEventListener("click", function (event) {
                    swal("Ainda não tens nível suficiente para jogar neste continente!", "", "error")
                    event.preventDefault()
                })
            } else {
                document.querySelector("#southAmerica").href = "quizzLevel.html"
            }
            if (user.xp < 600) {
                const oceania = document.querySelector(".oceania")
                oceania.style.backgroundColor = "#9D9D9D"
                const imgOceania = document.querySelector(".imgOceania")
                imgOceania.style.opacity = "0.3"
                oceania.innerHTML += `<img src="../images/lock-6.png" id="lock">`
                oceania.addEventListener("click", function (event) {
                    swal("Ainda não tens nível suficiente para jogar neste continente!", "", "error")
                    event.preventDefault()
                })
            } else {
                document.querySelector("#oceania").href = "quizzLevel.html"
            }
        }
    }
}

/** Verificação se as questões já se encontram na localStorage e obtê-las, ou então,
 * Criação das questões e sua adição à localStorage
*/
if (localStorage.getItem("questions")) {
    const questions = JSON.parse(localStorage.getItem("questions"))
} else {
    const questions = []
    const question1 = new Question("1", "1", "europe", "A que país pertence esta bandeira?", "Portugal", ["Alemanha", "Espanha", "Portugal", "Itália"], "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/2000px-Flag_of_Portugal.svg.png", 2)
    const question2 = new Question("2", "1", "europe", "A bandeira abaixo pertence a que país?", "Alemanha", ["Espanha", "França", "Bélgica", "Alemanha"], "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/290px-Flag_of_Germany.svg.png", 2)
    const question3 = new Question("3", "2", "europe", "Berlim é a capital de que país?", "Alemanha", ["Holanda", "Bélgica", "Alemanha", "Suiça"], "", 3)
    const question4 = new Question("4", "3", "europe", "Qual é a bandeira de França?", "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg", ["https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg", "https://partnersontheroad.com/wp-content/uploads/2018/07/flag-thuringia.png", "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg", "https://static.significados.com.br/foto/flag-of-the-netherlands.svg_sm.png"], "", 5)
    const question5 = new Question("5", "4", "europe", "Qual o país com mais pessoas?", "Alemanha", ["Portugal", "Espanha", "Alemanha", "Polónia"], "", 10)
    const question6 = new Question("6", "5", "europe", "Qual a língua falada em Portugal?", "Português", ["Português", "Alemão", "Francês", "Espanhol"], "", 15)
    const question7 = new Question("7", "6", "europe", "Qual o clima de Portugal?", "Mediterrânico", ["Continental", "Mediterrânico", "Húmido", "Tropical"], "", 20)
    const question8 = new Question("8", "2", "europe", "Londres é a capital de que país?", "Inglaterra", ["Holanda", "Inglaterra", "Irlanda", "Escócia"], "", 3)
    const question9 = new Question("9", "2", "europe", "Qual é a capital de Portugal?", "Lisboa", ["Lisboa", "Porto", "Madrid", "Paris"], "", 3)
    const question10 = new Question("10", "1", "europe", "De que país é esta bandeira?", "Holanda", ["França", "Holanda", "Hungria", "Bélgica"], "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg", 2)

    questions.push(question1, question2, question3, question4, question5, question6, question7, question8, question9, question10)
    localStorage.setItem("questions", JSON.stringify(questions))
}