import {addCountry} from "../controllers/catalogController.js"

const btnSave = document.querySelector("#btnSaveChanges")

btnSave.addEventListener("submit", function (event) {
    console.log("ola")
    const name = document.querySelector("#newName")
    const continent = document.querySelector("#newContinent")
    const population = document.querySelector("#newPop")
    const capital = document.querySelector("#newCapital")
    const coin = document.querySelector("#newCoin")
    const climate = document.querySelector("#newClimate")
    const independanceDate = document.querySelector("#newIndepDate")
    const flag = document.querySelector("#newFlag")
    const images = document.querySelector("#newImage")

    const rating = "0"
    addCountry(name, continent, capital, population, coin, climate, independanceDate, flag, rating, images)
    event.preventDefault()
})

