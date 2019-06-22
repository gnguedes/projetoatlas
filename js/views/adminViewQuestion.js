//importa todas as questoes no storage
const questions = JSON.parse(localStorage.getItem("questions"))
//importa a funcao que remove questoes
import { removeQuestion } from "../controllers/adminController.js"


const divQuestion = document.querySelector("#tableQuestion")
let tableQ = ''

renderQuestion()
//função que lista as questões
function renderQuestion() {
    for (const question of questions) {
        tableQ += `<table class="table">
        <thead>
                <tr>
                    <th>ID</th>
                    <th>Nível</th>
                    <th>Continente</th>
                    <th>Pergunta</th>
                </tr>
            </thead>
                <tbody>
                    <tr>
                        <td scope="row">${question.id}</td>
                        <td>${question.level}</td>
                        <td>${question.continent}</td>
                        <td>${question.question}</td>
                        <td><button id="${question.id}" class="btn btn-danger remove">Remover</button><td>
                        <br>
                    </tr>
                </tbody>
            </table>
            <br>
        `

    }
    divQuestion.innerHTML = tableQ
    //botao que remove questoes
    const btnRemove = document.getElementsByClassName("btn btn-danger remove")
    for (const elem of btnRemove) {
        elem.addEventListener("click", function () {
            let questionId = elem.id
            removeQuestion(questionId)

        })
    }
}






