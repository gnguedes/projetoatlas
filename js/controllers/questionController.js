import Question from "../models/question.js"

const countries = JSON.parse(localStorage.getItem("countries"))

const continentSelected = sessionStorage.getItem("continentSelected")

const users = JSON.parse(localStorage.getItem("users"))

sessionStorage.setItem("loggedUser", "joao12")

const loggedUser = sessionStorage.getItem("loggedUser")

const countryQuestion = generateCountry()

const question1 = new Question("1", "A que país pertence esta bandeira?", ``, ``, ``, "2")
const question2 = new Question("2", `/*City*/ é a capital de que país?`, ``, ``, ``, "3")
const question3 = new Question("3", `Qual a bandeira de /*Country*/?`, ``, ``, "", "5")
const question4 = new Question("4", "Qual o país com mais pessoas?", ``, ``, "", "10")
const question5 = new Question("5", "Qual é a língua falada em /*Country*/", ``, ``, "", "15")
const question6 = new Question("6", "Qual o clima de /*Country*/", ``, ``, "", "20")

export const questions = [question1, question2, question3, question4, question5, question6]

const answers = [`${rightAnswer()}`]

randomAnswers()
questionImage()
generateQuestion()

console.log(question1)

function generateCountry() {
    const countriesQuestion = []
    for (const country of countries) {
        if (country.continent == continentSelected) {
            countriesQuestion.push(country)
        }
    }
    let random = Math.floor((Math.random() * countriesQuestion.length))
    return countriesQuestion[random]
}

function randomAnswers() {
    for (let i = 0; i < 3; i++) {
        let random = Math.floor((Math.random() * countries.length))
        if ((countries[random].continent == continentSelected) && (answers.indexOf(countries[random].name) == -1)) {
            answers.push(countries[random].name)
        } else {
            i--
        }
    }
    shuffle(answers)
    question1.answers = answers
    return answers
}

function rightAnswer() {
    question1.rightAnswer = countryQuestion.name
    return countryQuestion.name
}

function generateQuestion() {
    const txtQuestion = document.querySelector("#txtQuestion")
    let divAnswers = document.querySelector("#divAnswers")
    let result = ``
    for (const user of users) {
        if (user.username == loggedUser) {
            if (user.xp > 10) {
                txtQuestion.innerHTML += question1.question
                result += `<div class="row">
                            <div class="col-6">
                                <img id="flagGuessCountry" src="${question1.image}">
                            </div>
                            <div class="col-6">
                                <div class="row" id="divBtnsAnswer">
                                    <button type="button" id="${answers[0]}" class="btn btnAnswerQuestion">${answers[0]}</button>
                                    <button type="button" id="${answers[1]}" class="btn btnAnswerQuestion">${answers[1]}</button>
                                </div>
                                <div class="row">
                                    <button type="button" id="${answers[2]}" class="btn btnAnswerQuestion">${answers[2]}</button>
                                    <button type="button" id="${answers[3]}" class="btn btnAnswerQuestion">${answers[3]}</button>
                                </div>
                            </div>
                        </div>`
                divAnswers.innerHTML += result
                sessionStorage.setItem("idQuestion", question1)
            }
        }
    }
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