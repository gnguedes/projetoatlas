//* importar o array das questões
import {
    questions
} from "../controllers/questionController.js"

//* Obter todos os botões de resposta
const answerBtns = document.getElementsByClassName("userAnswer")

//* Obter o id da questão que está a ser apresentada
const idQuestion = sessionStorage.getItem("idQuestion")

//* Obter os users da localStorage
const users = JSON.parse(localStorage.getItem("users"))

//* Obter o utilizador ativo
const loggedUser = sessionStorage.getItem("loggedUser")

//* Obter o id do nível que o utilizador escolheu
const levelId = sessionStorage.getItem("levelId")

//* Obter o total de xp que o utilizador vai receber ao fim de responder as 5 questões
const totalXp = sessionStorage.getItem("totalXp")

//* Tranferir os dados do xp para poder aumentar este número
let totalXp2 = Number(totalXp)

//* Obter as respostas que o utilizador respondeu corretamente
const rightAnsweredQuestions = sessionStorage.getItem("rightAnsweredQuestions")

//* Tranferir os dados para poder somar o número de respostas
let rightAnsweredQuestions2 = Number(rightAnsweredQuestions)

//* Para cada botão de resposta adicionar um evento que vai esperar pelo click do utlizador para assim poder verificar se a
//* resposta que o utilizador vai dar é a correta
for (const btn of answerBtns) {
    btn.addEventListener("click", function (event) {
        for (const question of questions) {
            //* Obter a questão que está a ser apresentada
            if (question.id == idQuestion) {
                //* Verifica se a resposta que o utilizador deu é a correta
                if (btn.id == question.rightAnswer) {
                    for (const user of users) {
                        if (user.username == loggedUser) {
                            //* No caso de ser, obtém o user ativo e verifica se o nível que este escolheu não é o nível sortido
                            if (levelId != "level4") {
                                //* Caso não seja, adiciona o id da questão ao array de respostas respondidas
                                user.answeredQuestions.push(question.id)
                            }
                            //* Atualiza os dados na localStorage
                            localStorage.setItem("users", JSON.stringify(users))
                            //* Mostrar ao utilizador que respondeu corretamente
                            swal({
                                title: "Parabéns!",
                                text: "Resposta Correta",
                                icon: "success",
                            }).then(value => {
                                if (value) {
                                    //* Adicionar o xp desta questão ao total que vai ser adicionado
                                    totalXp2 = totalXp2 + Number(question.xp)
                                    sessionStorage.setItem("totalXp", totalXp2)
                                    //* Adiconar 1 ao número de respostas corretas
                                    rightAnsweredQuestions2 = rightAnsweredQuestions2 + 1
                                    sessionStorage.setItem("rightAnsweredQuestions", rightAnsweredQuestions2)
                                    //* Reload na página para apresentar a próxima questão
                                    location.reload()
                                }
                            })
                        }
                    }
                } else {
                    //* No caso do utilizador a escolher uma resposta errada, transmitir essa informação ao user
                    swal({
                        title: "Reposta errada",
                        icon: "error"
                    }).then(value => {
                        location.reload()
                    })
                }
            }
        }
    })
}