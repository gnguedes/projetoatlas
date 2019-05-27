//obter a lista de todos os users
const users = JSON.parse(localStorage.getItem("users"))
//obter o user que está logado
sessionStorage.setItem("loggedUser", "joao12")
const loggedUser = sessionStorage.getItem("loggedUser")
//obter o continente selecionado
const continentSelected = sessionStorage.getItem("continentSelected")


for (const user of users) {
    if (user.username == loggedUser) {
        if (user.xp < 25) {
            const asia = document.querySelector(".asia")
            asia.style.backgroundColor = "#9D9D9D"
            asia.innerHTML += `<img src="../images/lock-6.png" id="lock">`
        }
        if (user.xp < 50) {
            const africa = document.querySelector(".africa")
            africa.style.backgroundColor = "#9D9D9D"
            africa.innerHTML += `<img src="../images/lock-6.png" id="lock">`
        }
        if (user.xp < 100) {
            const northAmerica = document.querySelector(".northAmerica")
            northAmerica.style.backgroundColor = "#9D9D9D"
            northAmerica.innerHTML += `<img src="../images/lock-6.png" id="lock">`
        }
        if (user.xp < 300) {
            const southAmerica = document.querySelector(".southAmerica")
            southAmerica.style.backgroundColor = "#9D9D9D"
            southAmerica.innerHTML += `<img src="../images/lock-6.png" id="lock">`
        }
        if (user.xp < 600) {
            const oceania = document.querySelector(".oceania")
            oceania.style.backgroundColor = "#9D9D9D"
            oceania.innerHTML += `<img src="../images/lock-6.png" id="lock">`
        }
    }
}