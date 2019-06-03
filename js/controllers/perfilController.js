import User from"../models/user.js"

/* Obter o user selecionado*/
const loggedUser = sessionStorage.getItem("loggedUser")

const user = JSON.parse(localStorage.getItem("user"))

const divInfo = document.getElementById('divInfo')
const result = ''

for(i=0 ; i < user.length; i++){
    if( user[i].username == loggedUser){
        result +=`<label for="username" id="info1">Username:${user.username}</label><br>
        <label for="nome" id="info2">Nome:${user.name}</label><br>
        <label for="e-mail" id="info3">E-mail:${user.email}</label><br>
        <label for="datanascimento" id="info4"> Data de nascimento:${user.birthday}</label><br>`
    }
    i++;
}
divInfo.innerHTML += result 