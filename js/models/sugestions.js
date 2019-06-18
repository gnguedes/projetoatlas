/**
* class que cria as varias sugestoes feitas pelos utilizadores
 */

export default class Sugestion{
    constructor(loggedUser, newCountry, newCountryContinent, newReasons){
        this.loggedUser = loggedUser
        this.newCountry = newCountry
        this.newCountryContinent = newCountryContinent
        this.newReasons = newReasons
    }
       

}