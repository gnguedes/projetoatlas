import { User } from "./user.js"
import { Country } from "./country.js"



//adicao de 2 users, admin e uma criança, a titulo de exemplo
//para local storage
export let users = []

if (localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem("users"))
} else {
    const admin = new User("admin", "admin", "admin@admin.pt", "1000", "M", "admin", "01-01-01")
    const kid1 = new User("joao12", "123", "joao@gmail.pt", "0", "M", "joao", "08-10-2010")

    users.push(admin, kid1)
    localStorage.setItem("users", JSON.stringify(users))
}

// funcao que adiciona utilizadores 
export function addUser(txtUsername, txtPassword, txtEmail, valueXp, sltGenre, txtName, dateBirthday) {
    
}