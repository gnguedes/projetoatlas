/** classe dos quizzes com a pergunta, as várias opçoes de resposta
 * se existirem opções, a resposta certa, uma imagem se for necessario, 
 * um video se for necessario
 */


export default class Question {
    constructor(id, level, continent, question, rightAnswer, answers, image, xp) {
        this.id = id
        this.level = level
        this.continent = continent
        this.question = question        
        this.rightAnswer = rightAnswer
        this.answers = answers
        this.image = image
        this.xp = xp
    }
}