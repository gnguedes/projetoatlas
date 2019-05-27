/** classe dos quizzes com a pergunta, as várias opçoes de resposta
 * se existirem opções, a resposta certa, uma imagem se for necessario, 
 * um video se for necessario
 */


export default class Question {
    constructor(level, question, answerOptionA, answerOptionB, answerOptionC, answerOptionD, answerRight, image, video) {
        this.level = level
        this.question = question
        this.answerOptionA = answerOptionA
        this.answerOptionB = answerOptionB
        this.answerOptionC = answerOptionC
        this.answerOptionD = answerOptionD
        this.answerRight = answerRight
        this.image = image
        this.video = video

    }
}