//comentarios no local storage
const comments = JSON.parse(localStorage.getItem("comments"))
const countries = JSON.parse(localStorage.getItem("countries"))


//remover comentarios
export function removeComments(txtCommentUser) {
    let removeComment = confirm(`Deseja mesmo remover este comentário}?`)
    if (removeComment) {
        for (let i = 0; i < comments.length; i++) {
            if (comments[i].loggedUser === txtCommentUser) {
                comments.splice(i, 1)
            }
        }
        localStorage.setItem("comments", JSON.stringify(comments))
        location.reload()
    }
}

// remover paises
export function removeCountry(name) {
    let removeCountry = confirm(`Deseja mesmo remover o país ${name}?`)
    if (removeCountry) {
        for (let i = 0; i < countries.length; i++) {
            if (countries[i].name === name) {
                countries.splice(i, 1)
            }
        }
        localStorage.setItem("countries", JSON.stringify(countries))
        location.reload()
    }
}
