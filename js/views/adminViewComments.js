const comments = JSON.parse(localStorage.getItem("comments"))



const divComment = document.querySelector("#tableComments")
let tableC = ""


renderComments()

//  funcão renderUser que criar uma tabela com todos os utilizadores registados
function renderComments() {
    for (const comment of comments) {
        tableU += `<table class="table">
        <thead>
                <tr>
                    <th>Utilizador</th>
                    <th>País</th>
                    <th>Comentário</th>
                    <th>Data</th>
                </tr>
            </thead>
                <tbody>
                    <tr>
                        <td scope="row">${comment.loggedUser}</td>
                        <td>${comment.country}</td>
                        <td>${comment.comment}</td>
                        <td>${comment.date}</td>
                        <td><button id="${comment.loggedUser}" class="btn btn-danger remove">Remover</button><td>
                        <br>
                    </tr>
                </tbody>
            </table>
            
        `

    }
    divComment.innerHTML = tableC

    //elimina o utilizador seleccionado
    /** const btnRemove = document.getElementsByClassName("btn btn-danger remove")
    for (const elem of btnRemove) {
        elem.addEventListener("click", function () {
            let txtUsername = elem.id
            removeUser(txtUsername)
            
        })
    }*/
    
}
