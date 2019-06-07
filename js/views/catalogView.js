//*obter todos os cards apresentados no catálogo
const continents = document.getElementsByClassName("aCard")
//*Adiciona um event listener a todos os cards para posteriormente adiconar o continent selecionado à
//*session storage para carregar apenas os países desse continente para o catálogo
for (let i = 0; i < continents.length; i++) {
    continents[i].addEventListener("click", function () {
        sessionStorage.setItem("continentSelected", this.id)
    })
}