const countries = document.getElementsByClassName("aCard")
console.log(countries)
for (let i = 0; i < countries.length; i++) {
    countries[i].addEventListener("click", function () {
        sessionStorage.setItem("countrySelected", this.id)
    })
}