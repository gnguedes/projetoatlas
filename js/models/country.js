/** classe do país com o seu nome, o continente a qual pertence, capital,
 *  a sua maior cidade, população total, lingua, clima, quando foi criado
 *  e a sua data de independencia, o numero de visitas a essa pagina,
 *  algum video promocional, classificaçao do país
 */


export default class Country {
    constructor(name, continent, capital, bigCity, population,
        languange, coin, climate, creationDate, independanceDate, views, video, rating) {
        this.name = name
        this.continent = continent
        this.capital = capital
        this.bigCity = bigCity
        this.population = population
        this.languange = languange
        this.coin = coin
        this.climate = climate
        this.creationDate = creationDate
        this.independanceDate = independanceDate
        this.views = views
        this.video = video
        this.rating = rating
    }
}