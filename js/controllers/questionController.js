import Question from "../models/question.js"

const countries = JSON.parse(localStorage.getItem("countries"))

const continentSelected = sessionStorage.getItem("continentSelected")

const users = JSON.parse(localStorage.getItem("users"))

//?sessionStorage.setItem("loggedUser", "joao12")

const loggedUser = sessionStorage.getItem("loggedUser")

const idQuestion = sessionStorage.getItem("idQuestions")

export const countryQuestion = generateCountry()

const question1 = new Question("1", "A que país pertence esta bandeira?", ``, ``, ``, "2")
const question2 = new Question("2", `/*City*/ é a capital de que país?`, ``, ``, ``, "3")
const question3 = new Question("3", `Qual a bandeira de /*Country*/?`, ``, ``, "", "5")
const question4 = new Question("4", "Qual o país com mais pessoas?", ``, ``, "", "10")
const question5 = new Question("5", "Qual é a língua falada em /*Country*/?", ``, ``, "", "15")
const question6 = new Question("6", "Qual o clima de /*Country*/?", ``, ``, "", "20")

export const questions = [question1, question2, question3, question4, question5, question6]

export const answers = [`${rightAnswer()}`]

questionImage()
generateQuestion()

function generateCountry() {
    let random = 0
    const countriesQuestion = []
    for (const country of countries) {
        if (country.continent == continentSelected) {
            countriesQuestion.push(country)
        }
    }
    for (const user of users) {
        if (user.username == loggedUser) {
            let j = true
            while (j == true) {
                random = Math.floor((Math.random() * countriesQuestion.length))
                const answeredCountries = []
                for (let i = 0; i < user.answeredQuestions.length; i++) {
                    answeredCountries.push(user.answeredQuestions[i].country)
                }
                console.log(countriesQuestion[random].name)
                if (!answeredCountries.includes(countriesQuestion[random].name)) {
                    j = false
                }
            }
        }
    }
    console.log(countriesQuestion[random])
    return countriesQuestion[random]
}

function randomAnswers(id) {
    if (id == 1 || id == 2 || id == 4) {
        for (let i = 0; i < 3; i++) {
            let random = Math.floor((Math.random() * countries.length))
            if ((countries[random].continent == continentSelected) && (answers.indexOf(countries[random].name) == -1)) {
                answers.push(countries[random].name)
            } else {
                i--
            }
        }
    }
    shuffle(answers)
    for (const question of questions) {
        if (question.id == id) {
            question.answers = answers
        }
    }
    return answers
}

function rightAnswer() {
    question1.rightAnswer = countryQuestion.name
    return countryQuestion.name
}

function questionImage() {
    question1.image = countryQuestion.flag
    return countryQuestion.flag
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

//*ids já distribuídos
function generateQuestion() {
    for (const user of users) {
        if (user.username == loggedUser) {
            if (user.xp < 10) {
                randomAnswers(questions[0].id)
                defineQuestion(questions[0].id)
                sessionStorage.setItem("idQuestion", questions[0].id)
            } else if (user.xp < 25) {
                let random = Math.floor(Math.random() * 2)
                randomAnswers(questions[random].id)
                defineQuestion(questions[random].id)
                sessionStorage.setItem("idQuestion", questions[random].id)
            } else if (user.xp < 75) {
                let random = Math.floor(Math.random() * 3)
                randomAnswers(questions[random].id)
                defineQuestion(questions[random].id)
                sessionStorage.setItem("idQuestion", questions[random].id)
            } else if (user.xp < 125) {
                let random = Math.floor(Math.random() * 4)
                randomAnswers(questions[random].id)
                defineQuestion(questions[random].id)
                sessionStorage.setItem("idQuestion", questions[random].id)
            } else if (user.xp < 250) {
                let random = Math.floor(Math.random() * 5)
                randomAnswers(questions[random].id)
                defineQuestion(questions[random].id)
                sessionStorage.setItem("idQuestion", questions[random].id)
            } else if (user.xp < 450) {
                let random = Math.floor(Math.random() * 6)
                randomAnswers(questions[random].id)
                defineQuestion(questions[random].id)
                sessionStorage.setItem("idQuestion", questions[random].id)
            }
        }
    }
}

//!CONTINUAR A FAZER A INTRODUÇÃO DA QUESTÃO
function defineQuestion(id) {
    const txtQuestion = document.querySelector("#txtQuestion")
    let result = ""
    let divAnswers = document.querySelector("#divAnswers")
    if (id == 1) {
        txtQuestion.innerHTML += question1.question
        result += `<div class="row">
                    <div class="col-6">
                        <img id="flagGuessCountry" src="${questions[0].image}">
                    </div>
                    <div class="col-6">
                        <div class="row" id="divBtnsAnswer">
                            <button type="button" id="${answers[0]}" class="btn btnAnswer">${answers[0]}</button>
                            <button type="button" id="${answers[1]}" class="btn btnAnswer">${answers[1]}</button>
                        </div>
                        <div class="row">
                            <button type="button" id="${answers[2]}" class="btn btnAnswer">${answers[2]}</button>
                            <button type="button" id="${answers[3]}" class="btn btnAnswer">${answers[3]}</button>
                        </div>
                    </div>
                </div>`
        divAnswers.innerHTML += result
    } else if (id == 2) {
        txtQuestion.innerHTML += question2.question
        result += `<div class="row" id="divBtnsAnswer">
                                <button type="button" id="${answers[0]}" class="btn btnAnswerQuestion2">${answers[0]}</button>
                                <button type="button" id="${answers[1]}" class="btn btnAnswerQuestion3">${answers[1]}</button>
                            </div>
                            <div class="row">
                                <button type="button" id="${answers[2]}" class="btn btnAnswerQuestion2">${answers[2]}</button>
                                <button type="button" id="${answers[3]}" class="btn btnAnswerQuestion3">${answers[3]}</button>
                            </div>`
        divAnswers.innerHTML += result
    } else if (id == 3) {
        txtQuestion.innerHTML += question3.question
        result += `<div class="row">
                        <div class="col-lg-6">
                            <img src="../images/flags/Alemanha.png" id="imgLeft">
                        </div>
                        <div class="col-lg-6">
                            <img src="../images/flags/França.png" id="imgRight">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <img src="../images/flags/Belgica.png" id="imgLeft">
                        </div>
                        <div class="col-lg-6">
                            <img src="../images/flags/Espanha.png" id="imgRight">
                        </div>
                    </div>`
        divAnswers.innerHTML += result
    } else if (id == 4) {
        txtQuestion.innerHTML += question4.question
        result += `<div class="row" id="divBtnsAnswer">
                        <button type="button" id="${answers[0]}" class="btn btnAnswerQuestion2">${answers[0]}</button>
                        <button type="button" id="${answers[1]}" class="btn btnAnswerQuestion3">${answers[1]}</button>
                    </div>
                    <div class="row">
                        <button type="button" id="${answers[2]}" class="btn btnAnswerQuestion2">${answers[2]}</button>
                        <button type="button" id="${answers[3]}" class="btn btnAnswerQuestion3">${answers[3]}</button>
                    </div>`
        divAnswers.innerHTML += result
    } else if (id == 5) {
        txtQuestion.innerHTML += question5.question
    } else {
        txtQuestion.innerHTML += question6.question
    }
}