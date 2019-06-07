/** classe do utilizador constituida pelo seu nome de utilizador,
 palavra-passe, email, experiencia, sexo, o seu verdadeiro nome
 e a sua data de nascimento
*/

export default class User {
    constructor(username, password, email, xp, genre, name, birthday) {
        this.username = username
        this.password = password
        this.email = email
        this.xp = xp
        this.genre = genre
        this.name = name
        this.birthday = birthday
    }
}
