import Country from "../models/country.js"

//*obter todos os cards apresentados no catálogo
const continents = document.getElementsByClassName("aCard")
//*Adiciona um event listener a todos os cards para posteriormente adiconar o continent selecionado à
//*session storage para carregar apenas os países desse continente para o catálogo
for (let i = 0; i < continents.length; i++) {
    continents[i].addEventListener("click", function () {
        sessionStorage.setItem("continentSelected", this.id)
    })
}

export let countries = []
//*verificar se existe países criados na local storage
if (localStorage.getItem("countries")) {
    //*caso haja, carrega-os para um array
    countries = JSON.parse(localStorage.getItem("countries"))
} else {
    //*caso não haja, cria países, dá push para um array e coloca-os na local storage
    const portugal = new Country("Portugal", "europe", "Lisboa", "10 milhões", "Português", "Euro", "Mediterrânico", "1143", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/2000px-Flag_of_Portugal.svg.png", "4.7", ["https://www.almadeviajante.com/wp-content/uploads/azenhas-do-mar-portugal.jpg", "https://advice.macroconsulting.pt/wp-content/uploads/2018/07/turismo-porto-portugal-macro-consulting.jpg", "https://turismodocentro.pt/wp-content/uploads/2017/03/Batalha_1920x1080-1.jpg", "https://cdnimages01.azureedge.net/rfm/torre_de_belem6963bf6b.jpg"])
    const polonia = new Country("Polonia", "europe", "Varsóvia", "38 milhões", "Polaco/Polonês", "Złoty", "Temperado Continental", "1918", "https://partnersontheroad.com/wp-content/uploads/2018/07/flag-thuringia.png", "4.9", [])
    const alemanha = new Country("Alemanha", "europe", "Berlim", "82 milhões", "Alemão", "Euro", "Temperado Húmido", "1871", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/290px-Flag_of_Germany.svg.png", "4.5", [])
    const brasil = new Country("Brasil", "southAmerica", "Brasília", "209 milhões", "Português", "Real", "Tropical", "1821 a 1825", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2000px-Flag_of_Brazil.svg.png", "3.2", [])
    const espanha = new Country("Espanha", "europe", "Madrid", "46 milhões", "Espanhol", "Euro", "Mediterrânico", "1640", "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg", "3.1", [])
    const israel = new Country("Israel", "asia", "Jerusalém", "9 milhões", "Árabe", "Novo Shekel Israelense", "Mediterrânico", "1948", "https://pt.wikipedia.org/wiki/Bandeira_de_Israel#/media/File:Flag_of_Israel.svg", "4.1", [])
    const italia = new Country("Itália", "europe", "Roma", "60 milhões", "Italiano", "Euro", "Mediterrânico", "1949", "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg", "4", [])

    const belgica = new Country("Bélgica", "europe", "Bruxelas", "11 milhões", "Francês/Alemão", "Euro", "Temperado Marítimo", "1830", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/2000px-Flag_of_Belgium.svg.png", "4.7", [])
    const russia = new Country("Rússia", "europe", "Moscovo", "144 milhões", "Russo", "Rublo Russo", "Continental e Polar", "1991", "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg", "4.9", [])
    const hungria = new Country("Hungria", "europe", "Budapeste", "82 milhões", "Húngaro", "Florim Húngaro", "Temperado Continental", "1918", "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg", "4.5", [])
    // const brasil1 = new Country("Brasil", "southAmerica", "Brasília", "209 milhões", "Português", "Real", "Tropical", "1821 a 1825", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2000px-Flag_of_Brazil.svg.png", "3.2", [])
    // const espanha1 = new Country("Espanha", "europe", "Madrid", "46 milhões", "Espanhol", "Euro", "Mediterrânico", "1640", "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg", "3.1", [])
    // const israel1 = new Country("Israel", "asia", "Jerusalém", "9 milhões", "Árabe", "Novo Shekel Israelense", "Mediterrânico", "1948", "https://pt.wikipedia.org/wiki/Bandeira_de_Israel#/media/File:Flag_of_Israel.svg", "4.1", [])
    // const italia1 = new Country("Itália", "europe", "Roma", "60 milhões", "Italiano", "Euro", "Mediterrânico", "1949", "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg", "4", [])

    // const portugal2 = new Country("Portugal", "europe", "Lisboa", "10 milhões", "Português", "Euro", "Mediterrânico", "1143", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/2000px-Flag_of_Portugal.svg.png", "4.7", ["https://www.almadeviajante.com/wp-content/uploads/azenhas-do-mar-portugal.jpg", "https://advice.macroconsulting.pt/wp-content/uploads/2018/07/turismo-porto-portugal-macro-consulting.jpg", "https://turismodocentro.pt/wp-content/uploads/2017/03/Batalha_1920x1080-1.jpg", "https://cdnimages01.azureedge.net/rfm/torre_de_belem6963bf6b.jpg"])
    // const polonia2 = new Country("Polonia", "europe", "Varsóvia", "38 milhões", "Polaco/Polonês", "Złoty", "Temperado Continental", "1918", "https://partnersontheroad.com/wp-content/uploads/2018/07/flag-thuringia.png", "4.9", [])
    // const alemanha2 = new Country("Alemanha", "europe", "Berlim", "82 milhões", "Alemão", "Euro", "Temperado Húmido", "1871", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/290px-Flag_of_Germany.svg.png", "4.5", [])
    // const brasil2 = new Country("Brasil", "southAmerica", "Brasília", "209 milhões", "Português", "Real", "Tropical", "1821 a 1825", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2000px-Flag_of_Brazil.svg.png", "3.2", [])
    // const espanha2 = new Country("Espanha", "europe", "Madrid", "46 milhões", "Espanhol", "Euro", "Mediterrânico", "1640", "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg", "3.1", [])
    // const israel2 = new Country("Israel", "asia", "Jerusalém", "9 milhões", "Árabe", "Novo Shekel Israelense", "Mediterrânico", "1948", "https://pt.wikipedia.org/wiki/Bandeira_de_Israel#/media/File:Flag_of_Israel.svg", "4.1", [])
    // const italia2 = new Country("Itália", "europe", "Roma", "60 milhões", "Italiano", "Euro", "Mediterrânico", "1949", "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg", "4", [])

    // const portugal3 = new Country("Portugal", "europe", "Lisboa", "10 milhões", "Português", "Euro", "Mediterrânico", "1143", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/2000px-Flag_of_Portugal.svg.png", "4.7", ["https://www.almadeviajante.com/wp-content/uploads/azenhas-do-mar-portugal.jpg", "https://advice.macroconsulting.pt/wp-content/uploads/2018/07/turismo-porto-portugal-macro-consulting.jpg", "https://turismodocentro.pt/wp-content/uploads/2017/03/Batalha_1920x1080-1.jpg", "https://cdnimages01.azureedge.net/rfm/torre_de_belem6963bf6b.jpg"])
    // const polonia3 = new Country("Polonia", "europe", "Varsóvia", "38 milhões", "Polaco/Polonês", "Złoty", "Temperado Continental", "1918", "https://partnersontheroad.com/wp-content/uploads/2018/07/flag-thuringia.png", "4.9", [])
    // const alemanha3 = new Country("Alemanha", "europe", "Berlim", "82 milhões", "Alemão", "Euro", "Temperado Húmido", "1871", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/290px-Flag_of_Germany.svg.png", "4.5", [])
    // const brasil3 = new Country("Brasil", "southAmerica", "Brasília", "209 milhões", "Português", "Real", "Tropical", "1821 a 1825", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2000px-Flag_of_Brazil.svg.png", "3.2", [])
    // const espanha3 = new Country("Espanha", "europe", "Madrid", "46 milhões", "Espanhol", "Euro", "Mediterrânico", "1640", "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg", "3.1", [])
    // const israel3 = new Country("Israel", "asia", "Jerusalém", "9 milhões", "Árabe", "Novo Shekel Israelense", "Mediterrânico", "1948", "https://pt.wikipedia.org/wiki/Bandeira_de_Israel#/media/File:Flag_of_Israel.svg", "4.1", [])
    // const italia3 = new Country("Itália", "europe", "Roma", "60 milhões", "Italiano", "Euro", "Mediterrânico", "1949", "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg", "4", [])


    countries.push(portugal, brasil, alemanha, polonia, espanha, israel, italia, belgica, hungria, russia)
    localStorage.setItem("countries", JSON.stringify(countries))
}