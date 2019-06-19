// import da class de comentarios
const comments = JSON.parse(localStorage.getItem("comments"))
// import da funcao que remove comentarios
import {removeComments, rewardComment} from "../controllers/adminController.js"


const divComment = document.querySelector("#tableComments")
let tableC = ""


renderComments()

//  funcão renderUser que criar uma tabela com todos os utilizadores registados
function renderComments() {
    for (const comment of comments) {
        tableC += `<table class="table">
        <thead>
                <tr>
                    <th>Utilizador</th>
                    <th>País</th>
                    <th>Comentário</th>
                    <th>Data</th>
                    <th>Botão XP</th>
                    <th>Botão remover</th>
                </tr>
            </thead>
                <tbody>
                    <tr>
                        <td scope="row">${comment.loggedUser}</td>
                        <td>${comment.country}</td>
                        <td>${comment.comment}</td>
                        <td>${comment.date}</td>
                        <td><button id="${comment.loggedUser}" class="btn btn-success">Dar 5 XP</button><td>
                        <td><button id="${comment.loggedUser}" class="btn btn-danger remove">Remover</button><td>
                        <br>
                    </tr>
                </tbody>
            </table>
            
        `

    }
    divComment.innerHTML = tableC

    //elimina o comentario seleccionado
    const btnRemove = document.getElementsByClassName("btn btn-danger remove")
    for (const elem of btnRemove) {
        elem.addEventListener("click", function () {
            let txtCommentUser = elem.id
            removeComments(txtCommentUser)
            
        })
    }
    //recompensa o utilizador responsavel pelo comentario em questao
    const btnSucess = document.getElementsByClassName("btn btn-success") 
    for (const elem2 of btnSucess){
        elem2.addEventListener("click", function () {
            let txtCommentUserPositive = elem2.id
            rewardComment(txtCommentUserPositive)
        })
    }
    
}
