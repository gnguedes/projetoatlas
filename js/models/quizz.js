/** classe dos quizzes com a pergunta, as várias opçoes de resposta
 * se existirem opções, a resposta certa, uma imagem se for necessario, 
 * um video se for necessario
 */


export default class Quizz {
    constructor(question, answerOptionA, answerOptionB, answerOptionC, answerOptionD, answerRight, image, video) {
        this.question = question
        this.answerOptionA = answerOptionA
        this.answerOptionB = answerOptionB
        this.answerOptionC = answerOptionC
        this.answerOptionD = answerOptionD
        this.answerRight = answerRight
        this.image = image
        this.video = video

    }
<<<<<<< HEAD

=======
    
>>>>>>> 6b6e3f0e7f84faad8fcbdd63f65373fbf989ef3c
}