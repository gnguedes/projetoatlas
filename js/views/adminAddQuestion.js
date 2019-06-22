import {addQuestion} from "../controllers/adminController.js"

manageNewQuestion()
function manageNewQuestion() {
    const formQuestion = document.querySelector("#frmAddQuestion")
    //listener quando é submitida a sugestao
    formQuestion.addEventListener("submit", function (event) {
        const level = document.querySelector("#questionLevel").value
        var questionContinentMenu = document.querySelector("#questionContinent")
        const questionContinent = questionContinentMenu.options[questionContinentMenu.selectedIndex].value
        const questionQuestion = document.querySelector("#questionQuestion").value
        const questionRightAnswer = document.querySelector("#questionQuestion").value
        const questionAnswers1 = document.querySelector("#questionAnswers1").value
        const questionAnswers2 = document.querySelector("#questionAnswers2").value
        const questionAnswers3 = document.querySelector("#questionAnswers3").value
        const questionAnswers4 = document.querySelector("#questionAnswers4").value
        const questionImg = document.querySelector("#questionImg").value
        let xp = 0
        let id
        switch (level) {
            case "1":
                xp = 2
                break;
            case "2":
                xp = 3
                break;
            case "3":
                xp = 5
                break;
            case "4":
                xp= 10
                break;
            case "5":
                xp = 15
                break;
            case "6": 
                xp = 20
                break;
            default:
                break;
        }
        addQuestion(id,level, questionContinent, questionQuestion, questionRightAnswer, 
            [questionAnswers1, questionAnswers2, questionAnswers3, questionAnswers4], questionImg, xp)
        event.preventDefault()

    })
}