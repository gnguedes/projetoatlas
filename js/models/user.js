/** classe do utilizador constituida pelo seu nome de utilizador,
 palavra-passe, email, experiencia, sexo, o seu verdadeiro nome
*/

export default class User {
    constructor(username, password, email, xp, genre, name, answeredQuestions) {
        this.username = username
        this.password = password
        this.email = email
        this.xp = xp
        this.genre = genre
        this.name = name
        this.answeredQuestions = answeredQuestions
    }
}