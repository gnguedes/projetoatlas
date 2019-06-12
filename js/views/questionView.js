import {
    questions,
    answers,
    countryQuestion
} from "../controllers/questionController.js"

const btns = document.getElementsByClassName("btnAnswer")

const users = JSON.parse(localStorage.getItem("users"))

const loggedUser = sessionStorage.getItem("loggedUser")

const idQuestion = sessionStorage.getItem("idQuestion")

const countries = JSON.parse(localStorage.getItem("countries"))

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        for (const country of countries) {
            if (country.name == countryQuestion.name) {  
                if (btns[i].id == country.name) {
                    alert("resposta correta")
                    const answeredCountry = {
                        "id": idQuestion,
                        "country": countryQuestion.name
                    }
                    for (const user of users) {
                        if(user.username == loggedUser){
                            user.answeredQuestions.push(answeredCountry)
                            localStorage.setItem("users", JSON.stringify(users))
                        }
                    }
                    //location.reload()
                }
                else{
                    alert("resposta errada")
                }
            }
        }
    })
}