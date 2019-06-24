import {
    questions
} from "../controllers/questionController.js"

const answerBtns = document.getElementsByClassName("userAnswer")

const idQuestion = sessionStorage.getItem("idQuestion")

const users = JSON.parse(localStorage.getItem("users"))

const loggedUser = sessionStorage.getItem("loggedUser")

const levelId = sessionStorage.getItem("levelId")

const totalXp = sessionStorage.getItem("totalXp")

let totalXp2 = Number(totalXp)

const rightAnsweredQuestions = sessionStorage.getItem("rightAnsweredQuestions")

let rightAnsweredQuestions2 = Number(rightAnsweredQuestions)

for (const btn of answerBtns) {
    btn.addEventListener("click", function (event) {
        for (const question of questions) {
            if (question.id == idQuestion) {
                if (btn.id == question.rightAnswer) {
                    for (const user of users) {
                        if (user.username == loggedUser) {
                            // user.xp = Number(user.xp) + Number(question.xp)
                            if (levelId != "level4") {
                                user.answeredQuestions.push(question.id)
                            }
                            localStorage.setItem("users", JSON.stringify(users))
                            swal({
                                title: "Parabéns!",
                                text: "Resposta Correta",
                                icon: "success",
                            }).then(value => {
                                if (value) {
                                    totalXp2 = totalXp2 + Number(question.xp)
                                    sessionStorage.setItem("totalXp", totalXp2)
                                    rightAnsweredQuestions2 = rightAnsweredQuestions2 + 1
                                    sessionStorage.setItem("rightAnsweredQuestions", rightAnsweredQuestions2)
                                    location.reload()
                                }
                            })
                        }
                    }
                } else {
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