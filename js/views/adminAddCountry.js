import { addCountry } from "../controllers/adminController.js"

const frmAddCountry = document.querySelector("#frmAddCountry")

frmAddCountry.addEventListener("submit", function (event) {
    const name = document.querySelector("#newName").value
    var continentMenu = document.querySelector("#newContinent")
    const continent = continentMenu.options[continentMenu.selectedIndex].value
    const population = document.querySelector("#newPop").value
    const language = document.querySelector("#newLanguage").value
    const capital = document.querySelector("#newCapital").value
    const coin = document.querySelector("#newCoin").value
    const climate = document.querySelector("#newClimate").value
    const independanceDate = document.querySelector("#newIndepDate").value
    const flag = document.querySelector("#newFlag").value
    const image1 = document.querySelector("#newImage1").value
    const image2 = document.querySelector("#newImage2").value
    const image3 = document.querySelector("#newImage3").value
    let rating = "0"
    addCountry(name, continent, capital, population, language, coin, climate, independanceDate, flag, rating, [image1,image2,image3])
    event.preventDefault()
})

