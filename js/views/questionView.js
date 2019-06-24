import {
    questions
} from "../controllers/questionController.js"

const answerBtns = document.getElementsByClassName("userAnswer")

const idQuestion = sessionStorage.getItem("idQuestion")

const users = JSON.parse(localStorage.getItem("users"))

const loggedUser = sessionStorage.getItem("loggedUser")

const levelId = sessionStorage.getItem("levelId")


for (const btn of answerBtns) {
    btn.addEventListener("click", function (event) {
        for (const question of questions) {
            if (question.id == idQuestion) {
                if (btn.id == question.rightAnswer) {
                    for (const user of users) {
                        if (user.username == loggedUser) {
                            user.xp = parseInt(user.xp, 10) + parseInt(question.xp, 10)
                            if (levelId != "level4") {
                                user.answeredQuestions.push(question.id)
                                localStorage.setItem("users", JSON.stringify(users))
                            }
                            swal({
                                title: "Parabéns!",
                                text: "Resposta Correta",
                                icon: "success",
                            }).then(value => {
                                if (value) {
                                    location.reload()
                                }
                            })
                        }
                    }
                } else {
                    swal("Resposta Errada", "", "error")
                }
            }
        }
    })
}