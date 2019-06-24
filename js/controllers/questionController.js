import Question from "../models/question.js"

const users = JSON.parse(localStorage.getItem("users"))

const loggedUser = sessionStorage.getItem("loggedUser")

const continentSelected = sessionStorage.getItem("continentSelected")

const levelId = sessionStorage.getItem("levelId")

export let questions = []

if (localStorage.getItem("questions")) {
    questions = JSON.parse(localStorage.getItem("questions"))
} else {
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

generateQuestion()

function generateQuestion() {
    const questionsLevel = []
    for (const user of users) {
        if (user.username == loggedUser) {
            let k = 0
            if (levelId == "level1") {
                if (user.xp <= 10) {
                    for (const question of questions) {
                        if (question.continent == continentSelected) {
                            if (question.level == 1) {
                                questionsLevel.push(question)
                            }
                        }
                    }
                    for (let i = 0; i < questionsLevel.length; i++) {
                        if (user.answeredQuestions.includes(questionsLevel[i].id)) {
                            k++
                            continue
                        } else {
                            createQuestion(questionsLevel[i])
                            break
                        }
                    }
                } else {
                    for (const question of questions) {
                        if (question.continent == continentSelected) {
                            if (question.level == 1 || question.level == 2) {
                                questionsLevel.push(question)
                            }
                        }
                    }
                    for (let i = 0; i < questionsLevel.length; i++) {
                        if (user.answeredQuestions.includes(questionsLevel[i].id)) {
                            k++
                            continue
                        } else {
                            createQuestion(questionsLevel[i])
                            break
                        }
                    }
                }
            } else if (levelId == "level2") {
                if (user.xp <= 75) {
                    for (const question of questions) {
                        if (question.continent == continentSelected) {
                            if (question.level == 3) {
                                questionsLevel.push(question)
                            }
                        }
                    }
                    for (let i = 0; i < questionsLevel.length; i++) {
                        if (user.answeredQuestions.includes(questionsLevel[i].id)) {
                            k++
                            continue
                        } else {
                            createQuestion(questionsLevel[i])
                            break
                        }
                    }
                } else {
                    for (const question of questions) {
                        if (question.continent == continentSelected) {
                            if (question.level == 3 || question.level == 4) {
                                questionsLevel.push(question)
                            }
                        }
                    }
                    for (let i = 0; i < questionsLevel.length; i++) {
                        if (user.answeredQuestions.includes(questionsLevel[i].id)) {
                            k++
                            continue
                        } else {
                            createQuestion(questionsLevel[i])
                            break
                        }
                    }
                }
            } else if (levelId == "level3") {
                if (user.xp < 225) {
                    for (const question of questions) {
                        if (question.continent == continentSelected) {
                            if (question.level == 5) {
                                questionsLevel.push(question)
                            }
                        }
                    }
                    for (let i = 0; i < questionsLevel.length; i++) {
                        if (user.answeredQuestions.includes(questionsLevel[i].id)) {
                            k++
                            continue
                        } else {
                            createQuestion(questionsLevel[i])
                            break
                        }
                    }
                } else {
                    for (const question of questions) {
                        if (question.continent == continentSelected) {
                            if (question.level == 5 || question.level == 6) {
                                questionsLevel.push(question)
                            }
                        }
                    }
                    for (let i = 0; i < questionsLevel.length; i++) {
                        if (user.answeredQuestions.includes(questionsLevel[i].id)) {
                            k++
                            continue
                        } else {
                            createQuestion(questionsLevel[i])
                            break
                        }
                    }
                }
            } else {
                for (const question of questions) {
                    if (question.continent == continentSelected) {
                        questionsLevel.push(question)
                    }
                }
                let random = Math.floor((Math.random() * questionsLevel.length))
                createQuestion(questionsLevel[random])
            }
            if (questionsLevel.length == k) {
                swal({
                    title: "Parabéns!", 
                    text: "Respondeste a todas as questões deste nível", 
                    icon: "success"
                }).then(value => {
                    if(value){
                        location.href = "quizzLevel.html"
                    }
                })
            }
        }
    }
}

function createQuestion(question) {
    sessionStorage.setItem("idQuestion", question.id)
    const txtQuestion = document.querySelector("#txtQuestion")
    let result = ""
    let divAnswers = document.querySelector("#divAnswers")
    txtQuestion.innerHTML += question.question
    if (question.level == 1) {
        result += `<div class="row">
                    <div class="col-6">
                        <img id="flagGuessCountry" src="${question.image}">
                    </div>
                    <div class="col-6">
                        <div class="row" id="divBtnsAnswer">
                            <div class="col-3">
                                <button type="button" id="${question.answers[0]}" class="btn userAnswer btnAnswer1">${question.answers[0]}</button>
                            </div>
                            <div class="col-3">
                                <button type="button" id="${question.answers[1]}" class="btn userAnswer btnAnswer1">${question.answers[1]}</button>
                            </div>                
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <button type="button" id="${question.answers[2]}" class="btn userAnswer btnAnswer1">${question.answers[2]}</button>
                            </div>
                            <div class="col-3">
                                <button type="button" id="${question.answers[3]}" class="btn userAnswer btnAnswer1">${question.answers[3]}</button>
                            </div>
                        </div>
                    </div>
                </div>`
        divAnswers.innerHTML += result
    } else if (question.level == 2 || question.level == 4 || question.level == 5 || question.level == 6) {
        result += `<div class="row" id="divBtnsAnswer2">
                        <div class="col-6 d-flex justify-content-end">
                            <button type="button" id="${question.answers[0]}" class="btn userAnswer btnAnswer">${question.answers[0]}</button>
                        </div>
                        <div class="col-6">
                            <button type="button" id="${question.answers[1]}" class="btn userAnswer btnAnswer">${question.answers[1]}</button>
                        </div>
                        <div class="col-6 d-flex justify-content-end">
                            <button type="button" id="${question.answers[2]}" class="btn userAnswer btnAnswer">${question.answers[2]}</button>
                        </div>
                        <div class="col-6">
                            <button type="button" id="${question.answers[3]}" class="btn userAnswer btnAnswer">${question.answers[3]}</button>
                        </div>`
        divAnswers.innerHTML += result
    } else if (question.level == 3) {
        result += `<div class="row">
                    <div class="col-lg-6">
                        <a href=""><img src="${question.answers[0]}" id="${question.answers[0]}" class="imgLeft userAnswer"></a>
                    </div>
                    <div class="col-lg-6">
                        <a href=""><img src="${question.answers[1]}" id="${question.answers[1]}" class="imgRight userAnswer"></a>
                    </div>
                    <div class="col-lg-6">
                        <a href=""><img src="${question.answers[2]}" id="${question.answers[2]}" class="imgLeft userAnswer"></a>
                    </div>
                    <div class="col-lg-6">
                        <a href=""><img src="${question.answers[3]}" id="${question.answers[3]}" class="imgRight userAnswer"></a>
                    </div>
                </div>`
        divAnswers.innerHTML += result
    }
}