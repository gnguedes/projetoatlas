import Comment from "../models/comments.js"

const users = JSON.parse(localStorage.getItem("users"))

const loggedUser = sessionStorage.getItem("loggedUser")

const countrySelected = sessionStorage.getItem("countrySelected")

let comments = []

if (localStorage.getItem("comments")) {
    comments = JSON.parse(localStorage.getItem("comments"))
} else {
    const comment1 = new Comment("joao12", "Portugal", "Esta país é muito bonito", "")
    const comment2 = new Comment("jorge", "Alemanha", "Não gosto de alemães", "")

    comments.push(comment1, comment2)
    localStorage.setItem("comments", JSON.stringify(comments))
}

document.querySelector("#btnComment").addEventListener("click", function () {
    const txtComment = document.querySelector("#txtComment").value
    const loggedUser = sessionStorage.getItem("loggedUser")
    const countrySelected = sessionStorage.getItem("countrySelected")
    const userComment = {
        "loggedUser": loggedUser,
        "country": countrySelected,
        "comment": txtComment,
        "date": new Date().toLocaleDateString()
    }
    comments.push(userComment)
    localStorage.setItem("comments", JSON.stringify(comments))
    location.reload()
})


document.querySelector("#btnOtherCountry").addEventListener("click", function () {
    location.href = "catalogo_continente.html"
})

document.querySelector(".outer2").addEventListener("click", function () {
    for (const user of users) {
        if (user.username == loggedUser) {
            if (user.favCountries.includes(countrySelected)) {
                document.querySelector(`.inner2`).style.width = "0%"
                user.favCountries.splice(user.favCountries.indexOf(countrySelected), 1)
            } else {
                document.querySelector(`.inner2`).style.width = "100%"
                user.favCountries.push(countrySelected)
            }

        }
    }
    localStorage.setItem("users", JSON.stringify(users))
})