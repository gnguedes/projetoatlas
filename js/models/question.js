/** classe dos quizzes com a pergunta, as várias opçoes de resposta
 * se existirem opções, a resposta certa, uma imagem se for necessario, 
 * um video se for necessario
 */


export default class Question {
    constructor(id, question, answers, answerRight, image, video, xp, level) {
        this.id = id
        this.question = question
        this.answers = answers
        this.answerRight = answerRight
        this.image = image
        this.video = video
        this.xp = xp
        this.lvel = level
    }
}