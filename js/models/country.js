/** classe do país com o seu nome, o continente a qual pertence, capital,
 *  a sua maior cidade, população total, lingua, clima, quando foi criado
 *  e a sua data de independencia, o numero de visitas a essa pagina,
 *  algum video promocional, classificaçao do país
 */


export default class Country {
    constructor(name, continent, capital, population, languange, coin, climate, 
        independanceDate, flag, rating, images) {
        this.name = name
        this.continent = continent
        this.capital = capital
        this.population = population
        this.languange = languange
        this.coin = coin
        this.climate = climate
        this.independanceDate = independanceDate
        this.flag = flag
        this.rating = rating
        this.images = images
    }
}