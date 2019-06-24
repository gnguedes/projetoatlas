/**
* class que guarda as sugestoes feitas, guarda o utilizador que fez a sugestao
* o novo pais que ele sugere, em que continente ele se encontra e as razoes que o 
* utilizaodr da para adicionar esse novo pais
 */

export default class Sugestion{
    constructor(loggedUser, newCountry, newCountryContinent, newReasons){
        this.loggedUser = loggedUser
        this.newCountry = newCountry
        this.newCountryContinent = newCountryContinent
        this.newReasons = newReasons
    }
       

}