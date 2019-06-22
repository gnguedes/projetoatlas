import Question from "../models/question.js"
import Country from "../models/country.js"

//comentarios, paises, utilizadores no local storage
const comments = JSON.parse(localStorage.getItem("comments"))
const countries = JSON.parse(localStorage.getItem("countries"))
const users = JSON.parse(localStorage.getItem("users"))
const questions = JSON.parse(localStorage.getItem("questions"))

//remover comentarios
export function removeComments(txtCommentUser) {
    let removeComment = confirm(`Deseja mesmo remover este comentário?`)
    if (removeComment) {
        for (let i = 0; i < comments.length; i++) {
            if (comments[i].loggedUser === txtCommentUser) {
                comments.splice(i, 1)
            }
        }
        localStorage.setItem("comments", JSON.stringify(comments))
        location.reload()
    }
}

// remover paises
export function removeCountry(name) {
    let removeCountry = confirm(`Deseja mesmo remover o país ${name}?`)
    if (removeCountry) {
        for (let i = 0; i < countries.length; i++) {
            if (countries[i].name === name) {
                countries.splice(i, 1)
            }
        }
        localStorage.setItem("countries", JSON.stringify(countries))
        location.reload()
    }
}

//remover questoes
export function removeQuestion(questionId) {
    let removeQuestion = confirm(`Deseja remover esta questão?`)


    if (removeQuestion) {
        for (let i = 0; i < questions.length; i++) {
            if (questions[i].id === questionId) {
                questions.splice(i, 1)
            }
        }
        localStorage.setItem("questions", JSON.stringify(questions))
        location.reload()
    }
}



//dar 5xp ao utilizador 
export function rewardComment(txtCommentUserPositive) {
    let acceptC = confirm(`Deseja dar 5xp a este utilizador?`)
    if (acceptC) {
        for (const user of users) {
            if (user.username === txtCommentUserPositive) {
                let newXp = Number(user.xp) + 5
                user.xp = newXp
                alert(`${txtCommentUserPositive} ganhou 5xp!`)
            }
        }
        localStorage.setItem("users", JSON.stringify(users))
        location.reload

    }
}

//a fazer
//adiciona um novo país
export function addCountry(name, continent, capital, population, language, coin, climate, independanceDate, flag, rating, images) {
    let countryExist = false
    for (const country of countries) {
        if (country.name === name) {
            alert("País já existe no catálogo")
            countryExist = true
        }
    }
    if (countryExist == false) {
        countries.push(new Country(name, continent, capital, population, language, coin, climate, independanceDate, flag, rating, images))
        localStorage.setItem("countries", JSON.stringify(countries))
        alert(`${name} adicionado com sucesso`)
    }


}
//funcao que adiciona uma nova questao à lista
export function addQuestion(id, level, continent, question, rightAnswer, answers, image, xp) {

    //verifica o nivel da questao
    let clearAnswer = true
    
    if (Number(level) > 6) {
        clearAnswer = false
    }

    if (clearAnswer == true) {
        for (let i = 0; i < questions.length; i++) {
            let lastId = Number(questions[i].id)
            let tempId = lastId + 1
            id = tempId.toString()
        }

        questions.push(new Question(id, level, continent, question, rightAnswer, answers, image, xp))

        localStorage.setItem("questions", JSON.stringify(questions))
        alert("questão adicionada")
    }
    else{
        alert("nivel da questão tem de ser entre 1-6")
    }

}
