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
    const brasil = new Country("Brasil", "southAmerica", "Brasília", "209 milhões", "Português", "Real", "Tropical", "1821 a 1825", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2000px-Flag_of_Brazil.svg.png", "3.2", [])
    const argentina = new Country("Argentina", "southAmerica", "Buenos Aires", "43 milhões", "Espanhol", "Peso Argentino", "Temperado", "1863", "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg", "4", [])


    const israel = new Country("Israel", "asia", "Jerusalém", "9 milhões", "Árabe", "Novo Shekel Israelense", "Mediterrânico", "1948", "https://pt.wikipedia.org/wiki/Bandeira_de_Israel#/media/File:Flag_of_Israel.svg", "4.1", [])
    const china = new Country("China", "asia", "Pequim", "1 bilhão", "Mandarim", "Renminbi", "Continental", "221 a.C.", "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg", "5", [])
    const japao = new Country("Japão", "asia", "Tóquio", "126 milhões", "Japonês", "Iene", "Continental e Oceânico", "660 a.C.", "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg", "5", [])
    const india = new Country("Índia", "asia", "Nova Deli", "1 bilhão", "Hindi e Inglês", "Rupia Indiana", "Tropical Húmido", "1947", "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg", "4.2", [])

    const caboVerde = new Country("Cabo Verde", "africa", "Praia", "560 mil", "Português", "Escudo Cabo-verdiano", "Árido", "1975", "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Cape_Verde.svg", "5", [])
    const angola = new Country("Angola", "africa", "Luanda", "29 milhões", "Português", "Kwanza", "Tropical", "1975", "https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg", "3.5", [])
    const mocambique = new Country("Moçambique", "africa", "Maputo", "27 milhões", "Português", "Metical", "Tropical", "1975", "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Mozambique.svg", "4", [])
    
    //*caso não haja, cria países, dá push para um array e coloca-os na local storage

    const portugal = new Country("Portugal", "europe", "Lisboa", "10 milhões", "Português", "Euro", "Mediterrânico", "1143", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/2000px-Flag_of_Portugal.svg.png", "4.7", ["https://www.almadeviajante.com/wp-content/uploads/azenhas-do-mar-portugal.jpg", "https://advice.macroconsulting.pt/wp-content/uploads/2018/07/turismo-porto-portugal-macro-consulting.jpg", "https://turismodocentro.pt/wp-content/uploads/2017/03/Batalha_1920x1080-1.jpg", "https://cdnimages01.azureedge.net/rfm/torre_de_belem6963bf6b.jpg"])
    const polonia = new Country("Polonia", "europe", "Varsóvia", "38 milhões", "Polaco/Polonês", "Złoty", "Temperado Continental", "1918", "https://partnersontheroad.com/wp-content/uploads/2018/07/flag-thuringia.png", "4.9", [])
    const alemanha = new Country("Alemanha", "europe", "Berlim", "82 milhões", "Alemão", "Euro", "Temperado Húmido", "1871", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/290px-Flag_of_Germany.svg.png", "4.5", [])
    const espanha = new Country("Espanha", "europe", "Madrid", "46 milhões", "Espanhol", "Euro", "Mediterrânico", "1640", "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg", "3.1", [])
    const italia = new Country("Itália", "europe", "Roma", "60 milhões", "Italiano", "Euro", "Mediterrânico", "1949", "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg", "4", [])
    const belgica = new Country("Bélgica", "europe", "Bruxelas", "11 milhões", "Francês/Alemão", "Euro", "Temperado Marítimo", "1830", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/2000px-Flag_of_Belgium.svg.png", "4.7", [])
    const russia = new Country("Rússia", "europe", "Moscovo", "144 milhões", "Russo", "Rublo Russo", "Continental e Polar", "1991", "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg", "4.9", [])
    const hungria = new Country("Hungria", "europe", "Budapeste", "10 milhões", "Húngaro", "Florim Húngaro", "Temperado Continental", "1918", "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg", "4.5", [])
    const austria = new Country("Áustria", "europe", "Viena", "8 milhões", "Alemão", "Euro", "Temperado Continental", "1955", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/1024px-Flag_of_Austria.svg.png", "4", [])
    const croacia = new Country("Croácia", "europe", "Zagrebe", "4 milhões", "Croata", "Kuna Croata", "Temperado", "1991", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/800px-Flag_of_Croatia.svg.png", "4.5", [])
    const dinamarca = new Country("Dinamarca", "europe", "Copenhaga", "5 milhões", "Dinamarquês", "Coroa", "Oceânico", "Antes do século VIII", "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg", "4.3", [])
    const eslovenia = new Country("Eslovénia", "europe", "Liubliana", "2 milhões", "Esloveno", "Euro", "Continental", "1992", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Slovenia.svg/1280px-Flag_of_Slovenia.svg.png", "3.7", [])
    const finlandia = new Country("Finlândia", "europe", "Helsínquia", "5 milhões", "Finlandês", "Euro", "Temperado Frio", "1918", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/1024px-Flag_of_Finland.svg.png", "4.1", [])
    const grecia = new Country("Grécia", "europe", "Atenas", "10 milhões", "Grego", "Euro", "Mediterrâneo", "1830", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/1024px-Flag_of_Greece.svg.png", "3.1", [])
    const islandia = new Country("Islândia", "europe", "Reiquiavique", "350 mil", "Islandês", "Coroa Islandesa", "Oceânico Frio", "1918", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/125px-Flag_of_Iceland.svg.png", "4", [])
    const luxemburgo = new Country("Luxemburgo", "europe", "Luxemburgo", "600 mil", "Luxemburguês, Alemão e Francês", "Euro", "Temperado", "1890", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Luxembourg.svg/1024px-Flag_of_Luxembourg.svg.png", "4.2", [])
    const malta = new Country("Malta", "europe", "Valeta", "400 mil", "Maltês e Inglês", "Euro", "Mediterrânico", "1964", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Malta.svg/1024px-Flag_of_Malta.svg.png", "5", [])
    const noruega = new Country("Noruega", "europe", "Oslo", "5 milhões", "Norueguês", "Coroa Norueguesa", "Oceânico", "1905", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/800px-Flag_of_Norway.svg.png", "2", [])


    countries.push(portugal, brasil, alemanha, polonia, espanha, israel, italia, belgica, hungria, russia, austria, croacia, dinamarca, eslovenia, finlandia, grecia, islandia, luxemburgo, malta, noruega, argentina, caboVerde, angola, mocambique, china, japao, india)
    localStorage.setItem("countries", JSON.stringify(countries))
}