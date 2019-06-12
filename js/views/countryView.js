import {loadComments} from "../controllers/countryController.js"

const loggedUser = sessionStorage.getItem("loggedUser")

document.querySelector("#btnComment").addEventListener("click", function(){
    let i = true
    const countries = JSON.parse(localStorage.getItem("countries"))
    const countrySelected = sessionStorage.getItem("countrySelected")
    const txtComment = document.querySelector("#txtComment").value
    for (const country of countries) {
        if(country.name == countrySelected){
            const comment = {
                "user": loggedUser,
                "comment": txtComment
            }
            country.comments.push(comment)
            localStorage.setItem("countries", JSON.stringify(countries))
            location.reload()
            loadComments()
        }
    }
})


document.querySelector("#btnOtherCountry").addEventListener("click", function(){
    location.href = "catalogo_continente.html"
})