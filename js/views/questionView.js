import {
    questions
} from "../controllers/questionController.js"

const answerBtns = document.getElementsByClassName("userAnswer")

const idQuestion = sessionStorage.getItem("idQuestion")

const users = JSON.parse(localStorage.getItem("users"))

const loggedUser = sessionStorage.getItem("loggedUser")

for (const btn of answerBtns) {
    btn.addEventListener("click", function (event) {
        for (const question of questions) {
            if (question.id == idQuestion) {
                if (btn.id == question.rightAnswer) {
                    for (const user of users) {
                        if (user.username == loggedUser) {
                            user.xp = parseInt(user.xp, 10) + parseInt(question.xp, 10)
                            user.answeredQuestions.push(question.id)
                            localStorage.setItem("users", JSON.stringify(users))
                            location.reload()
                        }
                    }
                } else {
                    alert("resposta errada")
                }
            }
        }
    })
}