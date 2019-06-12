//import 
const users = JSON.parse(localStorage.users)

const divUser = document.querySelector("#tableUser")
let tableU = ""


renderUsers()

//  funcão renderUser que criar uma tabela com todos os utilizadores registados
function renderUsers() {
    for (const user of users) {
        tableU += `<table class="table">
        <thead>
                <tr>
                    <th>Utilizador</th>
                    <th>email</th>
                    <th>xp</th>
                </tr>
            </thead>
                <tbody>
                    <tr>
                        <td scope="row">${user.username}</td>
                        <td>${user.email}</td>
                        <td>${user.xp}</td>
                        <td><button id="${user.username}" class="btn btn-danger remove">Remover</button><td>
                        <br>
                    </tr>
                </tbody>
            </table>
            
        `

    }
    divUser.innerHTML = tableU
    /** 
    const btnRemove = document.getElementById("user.username")
    btnRemove.addEventListener("click", function(){
        localStorage.removeItem(user)
    })*/
    
} 
