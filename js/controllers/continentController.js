//obter a lista de todos os users
const users = JSON.parse(localStorage.getItem("users"))
//obter o user que está logado
sessionStorage.setItem("loggedUser", "joao12")
const loggedUser = sessionStorage.getItem("loggedUser")

for (const user of users) {
    if (user.username == loggedUser) {
        if (user.xp < 25) {
            const asia = document.querySelector(".asia")
            asia.style.backgroundColor = "#9D9D9D"
            const imgAsia = document.querySelector(".imgAsia")
            imgAsia.style.opacity = "0.3"
            asia.innerHTML += `<img src="../images/lock-6.png" id="lock">`
            asia.addEventListener("click", function () {
                alert("Ainda não tens nível suficiente para abrires este continente!")
            })
        }
        if (user.xp < 50) {
            const africa = document.querySelector(".africa")
            africa.style.backgroundColor = "#9D9D9D"
            const imgAfrica = document.querySelector(".imgAfrica")
            imgAfrica.style.opacity = "0.3"
            africa.innerHTML += `<img src="../images/lock-6.png" id="lock">`
            africa.addEventListener("click", function () {
                alert("Ainda não tens nível suficiente para abrires este continente!")
            })
        }
        if (user.xp < 100) {
            const northAmerica = document.querySelector(".northAmerica")
            northAmerica.style.backgroundColor = "#9D9D9D"
            const imgNorthAmerica = document.querySelector(".imgNorthAmerica")
            imgNorthAmerica.style.opacity = "0.3"
            northAmerica.innerHTML += `<img src="../images/lock-6.png" id="lock">`
            northAmerica.addEventListener("click", function () {
                alert("Ainda não tens nível suficiente para abrires este continente!")
            })
        }
        if (user.xp < 300) {
            const southAmerica = document.querySelector(".southAmerica")
            southAmerica.style.backgroundColor = "#9D9D9D"
            const imgSouthAmerica = document.querySelector(".imgSouthAmerica")
            imgSouthAmerica.style.opacity = "0.3"
            southAmerica.innerHTML += `<img src="../images/lock-6.png" id="lock">`
            southAmerica.addEventListener("click", function () {
                alert("Ainda não tens nível suficiente para abrires este continente!")
            })
        }
        if (user.xp < 600) {
            const oceania = document.querySelector(".oceania")
            oceania.style.backgroundColor = "#9D9D9D"
            const imgOceania = document.querySelector(".imgOceania")
            imgOceania.style.opacity = "0.3"
            oceania.innerHTML += `<img src="../images/lock-6.png" id="lock">`
            oceania.addEventListener("click", function () {
                alert("Ainda não tens nível suficiente para abrires este continente!")
            })
        }
    }
}