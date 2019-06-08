//*obter a lista de todos os users
const users = JSON.parse(localStorage.getItem("users"))
//*obter o user que está logado
const loggedUser = sessionStorage.getItem("loggedUser")

/**
 * Função que verifica o nivel de xp do utilizador para assim poder mostrar os continentes que o
 * utilizador pode ver.
 * No caso de o utilizador não poder usar um continente é adicionado uma imagem com um cadeado que significa
 * que o utilizador ainda não tem acesso a essa área e muda também a cor de fundo do cardo para dar enfase ao
 * detalhe do lock
 */
function verifyUserPossibilities() {
    for (const user of users) {
        if (user.username == loggedUser) {
            if (user.xp < 25) {
                const asia = document.querySelector(".asia")
                asia.style.backgroundColor = "#9D9D9D"
                const imgAsia = document.querySelector(".imgAsia")
                imgAsia.style.opacity = "0.3"
                asia.innerHTML += `<img src="../images/lock-6.png" id="lock">`
                asia.addEventListener("click", function (event) {
                    alert("Ainda não tens nível suficiente para abrires este continente!")
                    event.preventDefault()
                })
            } else {
                //*No caso de o utilizador ter mais de o xp a verificar adiona-se uma ligação ao card para poder 
                //*entrar dentro deste continente
                document.querySelector("#asia").href = "catalogo_continente.html"
            }
            if (user.xp < 75) {
                const africa = document.querySelector(".africa")
                africa.style.backgroundColor = "#9D9D9D"
                const imgAfrica = document.querySelector(".imgAfrica")
                imgAfrica.style.opacity = "0.3"
                africa.innerHTML += `<img src="../images/lock-6.png" id="lock">`
                africa.addEventListener("click", function (event) {
                    alert("Ainda não tens nível suficiente para abrires este continente!")
                    event.preventDefault()
                })
            } else {
                document.querySelector("#africa").href = "catalogo_continente.html"
            }
            if (user.xp < 150) {
                const northAmerica = document.querySelector(".northAmerica")
                northAmerica.style.backgroundColor = "#9D9D9D"
                const imgNorthAmerica = document.querySelector(".imgNorthAmerica")
                imgNorthAmerica.style.opacity = "0.3"
                northAmerica.innerHTML += `<img src="../images/lock-6.png" id="lock">`
                northAmerica.addEventListener("click", function (event) {
                    alert("Ainda não tens nível suficiente para abrires este continente!")
                    event.preventDefault()
                })
            } else {
                document.querySelector("#northAmerica").href = "catalogo_continente.html"
            }
            if (user.xp < 300) {
                const southAmerica = document.querySelector(".southAmerica")
                southAmerica.style.backgroundColor = "#9D9D9D"
                const imgSouthAmerica = document.querySelector(".imgSouthAmerica")
                imgSouthAmerica.style.opacity = "0.3"
                southAmerica.innerHTML += `<img src="../images/lock-6.png" id="lock">`
                southAmerica.addEventListener("click", function (event) {
                    alert("Ainda não tens nível suficiente para abrires este continente!")
                    event.preventDefault()
                })
            } else {
                document.querySelector("#southAmerica").href = "catalogo_continente.html"
            }
            if (user.xp < 600) {
                const oceania = document.querySelector(".oceania")
                oceania.style.backgroundColor = "#9D9D9D"
                const imgOceania = document.querySelector(".imgOceania")
                imgOceania.style.opacity = "0.3"
                oceania.innerHTML += `<img src="../images/lock-6.png" id="lock">`
                oceania.addEventListener("click", function (event) {
                    alert("Ainda não tens nível suficiente para abrires este continente!")
                    event.preventDefault()
                })
            } else {
                document.querySelector("#oceania").href = "catalogo_continente.html"
            }
        }
    }
}

verifyUserPossibilities()