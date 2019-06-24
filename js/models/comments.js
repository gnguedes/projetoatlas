/**classe de comentarios que guarda o nome do 
 * utilizador que fez o comentario, o país onde o fez,
 * o comentario em si e a data
 */

export default class Comment{
    constructor(loggedUser, country, comment, date){
        this.loggedUser = loggedUser
        this.country = country
        this.comment = comment
        this.date = date
    }
}