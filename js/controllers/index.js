import User from "../models/user.js"

document.querySelector("#register").style.display = "none"

let users = []

if (localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem("users"))
} else {
    const admin = new User("admin", "admin", "admin@admin.pt", 1000, "Rapaz", "admin", "", [])
    const kid1 = new User("joao12", "123", "joao@gmail.pt", 20, "Rapaz", "joao", ["1"], [])

    users.push(admin, kid1)
    localStorage.setItem("users", JSON.stringify(users))
}


export function login(txtLoginUsername, txtLoginPassword) {
    let existUser = false
    for (const user of users) {
        if (user.username === txtLoginUsername && user.password === txtLoginPassword) {
            sessionStorage.setItem("loggedUser", txtLoginUsername)
            existUser = true
        }
    }
    return existUser
}



//torna o registo visivel, e o login invisivel

const clickBtn = document.getElementById("clickBtn")
clickBtn.addEventListener("click", function (event) {
    document.querySelector("#login").style.display = "none"
    document.querySelector("#register").style.display = "block"

    event.preventDefault();
})

