//* Importar a classe Question para poderem ser criados novas questões
import Question from "../models/question.js"

//* Obter os utilizadores da localStorage
const users = JSON.parse(localStorage.getItem("users"))

//* Obter o utilizador que está logado
const loggedUser = sessionStorage.getItem("loggedUser")

//* Obter o continente que o utilizador escolheu
const continentSelected = sessionStorage.getItem("continentSelected")

//* Obter o id do nível que o utilizador escolheu
const levelId = sessionStorage.getItem("levelId")

//* Obter o total de xp que o utilizador vai obter quando acabar o quizz
const totalXp = sessionStorage.getItem("totalXp")

//* Obter o número de respostas corretas que o utilizador respondeu no quizz
const rightAnsweredQuestions = sessionStorage.getItem("rightAnsweredQuestions")

//* Exportar as questões para outros ficheiros
export let questions = []

/** Verificação se as questões já se encontram na localStorage e obtê-las, ou então,
 * Criação das questões e sua adição à localStorage
*/
if (localStorage.getItem("questions")) {
    questions = JSON.parse(localStorage.getItem("questions"))
} else {
    const question1 = new Question("1", "1", "europe", "A que país pertence esta bandeira?", "Portugal", ["Alemanha", "Espanha", "Portugal", "Itália"], "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/2000px-Flag_of_Portugal.svg.png", 2)
    const question2 = new Question("2", "1", "europe", "A bandeira abaixo pertence a que país?", "Alemanha", ["Espanha", "França", "Bélgica", "Alemanha"], "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/290px-Flag_of_Germany.svg.png", 2)
    const question3 = new Question("3", "2", "europe", "Berlim é a capital de que país?", "Alemanha", ["Holanda", "Bélgica", "Alemanha", "Suiça"], "", 3)
    const question4 = new Question("4", "3", "europe", "Qual é a bandeira de França?", "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg", ["https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg", "https://partnersontheroad.com/wp-content/uploads/2018/07/flag-thuringia.png", "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg", "https://static.significados.com.br/foto/flag-of-the-netherlands.svg_sm.png"], "", 5)
    const question5 = new Question("5", "4", "europe", "Qual o país com mais pessoas?", "Alemanha", ["Portugal", "Espanha", "Alemanha", "Polónia"], "", 10)
    const question6 = new Question("6", "5", "europe", "Qual a língua falada em Portugal?", "Português", ["Português", "Alemão", "Francês", "Espanhol"], "", 15)
    const question7 = new Question("7", "6", "europe", "Qual o clima de Portugal?", "Mediterrânico", ["Continental", "Mediterrânico", "Húmido", "Tropical"], "", 20)
    const question8 = new Question("8", "2", "europe", "Londres é a capital de que país?", "Inglaterra", ["Holanda", "Inglaterra", "Irlanda", "Escócia"], "", 3)
    const question9 = new Question("9", "2", "europe", "Qual é a capital de Portugal?", "Lisboa", ["Lisboa", "Porto", "Madrid", "Paris"], "", 3)
    const question10 = new Question("10", "1", "europe", "De que país é esta bandeira?", "Holanda", ["França", "Holanda", "Hungria", "Bélgica"], "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg", 2)

    questions.push(question1, question2, question3, question4, question5, question6, question7, question8, question9, question10)
    localStorage.setItem("questions", JSON.stringify(questions))
}

//* Obter o número da questão para assim o quizz só ter 5 questões
const contQuestions = sessionStorage.getItem("contQuestions")

generateQuestion()

/**
 * generateQuestion é a função que determina quais as questões que o utilizador ainda não respondeu para assim poder dar-lhe
 * a oportunidade de o fazer e também impedir que este responda mais do que uma vez a mesma questão
 */
function generateQuestion() {
    //* Criação do array em que vão ser colocadas as questões que o utilizador ainda não respondeu
    const questionsLevel = []
    //* Verifica se o utilizador já respondeu às 5 questões
    if (contQuestions < 5) {
        //* Obter, dentro do array dos users, o user logado
        for (const user of users) {
            if (user.username == loggedUser) {
                //* Verifica qual o id do nível que o utilizador escolheu
                if (levelId == "level1") {
                    //* Adição das questões que o utilizador ainda não respondeu, que pertencem ao nível 1, ao array questionsLevel
                    for (const question of questions) {
                        if (question.continent == continentSelected) {
                            if ((question.level == 1 || question.level == 2) && (!user.answeredQuestions.includes(question.id))) {
                                questionsLevel.push(question)
                            }
                        }
                    }
                    //* Verificar se o array se encontra vazio, ou seja, se o utilizador já respondeu a todas as questões deste nível
                    if (questionsLevel.length == 0) {
                        //* Aviso ao utilizador que já completou o nível
                        swal({
                            title: "Parabéns!",
                            text: "Respondeste a todas as questões deste nível",
                            icon: "success"
                        }).then(value => {
                            if (value) {
                                //* Levar o user à pagina em que pode voltar a escolher a página
                                location.href = "quizzLevel.html"
                            }
                        })
                    }
                    //* Criação de um número random dentro dos limites do array questionLevel para apresentar uma questão aleatória
                    let random = Math.floor((Math.random() * questionsLevel.length))
                    //* Chamar a função que vai introduzir a questão à página
                    createQuestion(questionsLevel[random])
                } else if (levelId == "level2") {
                    for (const question of questions) {
                        if (question.continent == continentSelected) {
                            if ((question.level == 3 || question.level == 4) && (!user.answeredQuestions.includes(question.id))) {
                                questionsLevel.push(question)
                            }
                        }
                    }
                    if (questionsLevel.length == 0) {
                        swal({
                            title: "Parabéns!",
                            text: "Respondeste a todas as questões deste nível",
                            icon: "success"
                        }).then(value => {
                            if (value) {
                                location.href = "quizzLevel.html"
                            }
                        })
                    }
                    let random = Math.floor((Math.random() * questionsLevel.length))
                    createQuestion(questionsLevel[random])
                } else if (levelId == "level3") {
                    for (const question of questions) {
                        if (question.continent == continentSelected) {
                            if ((question.level == 5 || question.level == 6) && (!user.answeredQuestions.includes(question.id))) {
                                questionsLevel.push(question)
                            }
                        }
                    }
                    if (questionsLevel.length == 0) {
                        swal({
                            title: "Parabéns!",
                            text: "Respondeste a todas as questões deste nível",
                            icon: "success"
                        }).then(value => {
                            if (value) {
                                location.href = "quizzLevel.html"
                            }
                        })
                    }
                    let random = Math.floor((Math.random() * questionsLevel.length))
                    createQuestion(questionsLevel[random])
                } else {
                    for (const question of questions) {
                        if (question.continent == continentSelected) {
                            questionsLevel.push(question)
                        }
                    }
                    if (questionsLevel.length == 0) {
                        swal({
                            title: "Parabéns!",
                            text: "Respondeste a todas as questões deste nível",
                            icon: "success"
                        }).then(value => {
                            if (value) {
                                location.href = "quizzLevel.html"
                            }
                        })
                    }
                    let random = Math.floor((Math.random() * questionsLevel.length))
                    createQuestion(questionsLevel[random])
                }
            }
        }
        //* Número da questão do utilizador, para poder fazer a primeira verificação dentro desta função
        const cont = Number(contQuestions) + 1
        sessionStorage.setItem("contQuestions", cont)
    } else {
        //* Após o utilizador responder às 5 questões é lhe apresentado o quanto de xp ganhou e o número de respostas que acertou
        swal({
            title: `Parabéns! Completaste um quizz.`,
            text: `Acertaste ${rightAnsweredQuestions} perguntas e recebeste ${totalXp} de XP!`,
            icon: "info"
        }).then(value => {
            for (const user of users) {
                if (user.username == loggedUser) {
                    //* Adição do xp que o utilizador ganhou à localStorage
                    user.xp = Number(user.xp) + Number(totalXp)
                }
            }
            localStorage.setItem("users", JSON.stringify(users))
            location.href = "quizzLevel.html"
        })
    }
}

/**
 * @param {object} question 
 * Função que permite apresentar a questão que o utilizador vai ter de responder
 * Recebe como parametro essa tal questão para assim poder preencher com os dados correspondentes
 */
function createQuestion(question) {
    //* Coloca na sessionStorage o id da questão para poder ser adiconado às questões que o utilizador já respondeu
    sessionStorage.setItem("idQuestion", question.id)
    //* Obter onde se encontra o local para a pergunta
    const txtQuestion = document.querySelector("#txtQuestion")
    let result = ""
    //* Obter o local onde se irá colocar as opções de resposta
    let divAnswers = document.querySelector("#divAnswers")
    divAnswers.innerHTML = ""
    txtQuestion.innerHTML += question.question
    //* Verificação do level da questão, pois há levels em que existem diferenças em como são as respostas, por exemplo, quando o level = 1
    //* aparece a bandeira à beira das opções de resposta
    if (question.level == 1) {
        result += `<div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
                        <img id="flagGuessCountry" src="${question.image}">
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="row" id="divBtnsAnswer">
                            <div class="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center">
                                <button type="button" id="${question.answers[0]}" class="btn userAnswer btnAnswer1">${question.answers[0]}</button>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center">
                                <button type="button" id="${question.answers[1]}" class="btn userAnswer btnAnswer1">${question.answers[1]}</button>
                            </div>                
                        </div>
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center">
                                <button type="button" id="${question.answers[2]}" class="btn userAnswer btnAnswer1">${question.answers[2]}</button>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center">
                                <button type="button" id="${question.answers[3]}" class="btn userAnswer btnAnswer1">${question.answers[3]}</button>
                            </div>
                        </div>
                    </div>
                </div>`
        //* Adição das respostas ao HTML
        divAnswers.innerHTML += result
    } else if (question.level == 2 || question.level == 4 || question.level == 5 || question.level == 6) {
        result += `<div class="row" id="divBtnsAnswer2">
                        <div class="col-6 d-flex justify-content-end">
                            <button type="button" id="${question.answers[0]}" class="btn userAnswer btnAnswer">${question.answers[0]}</button>
                        </div>
                        <div class="col-6">
                            <button type="button" id="${question.answers[1]}" class="btn userAnswer btnAnswer">${question.answers[1]}</button>
                        </div>
                        <div class="col-6 d-flex justify-content-end">
                            <button type="button" id="${question.answers[2]}" class="btn userAnswer btnAnswer">${question.answers[2]}</button>
                        </div>
                        <div class="col-6">
                            <button type="button" id="${question.answers[3]}" class="btn userAnswer btnAnswer">${question.answers[3]}</button>
                        </div>`
        divAnswers.innerHTML += result
    } else if (question.level == 3) {
        result += `<div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <a href=""><img src="${question.answers[0]}" id="${question.answers[0]}" class="imgLeft userAnswer"></a>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <a href=""><img src="${question.answers[1]}" id="${question.answers[1]}" class="imgRight userAnswer"></a>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <a href=""><img src="${question.answers[2]}" id="${question.answers[2]}" class="imgLeft userAnswer"></a>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <a href=""><img src="${question.answers[3]}" id="${question.answers[3]}" class="imgRight userAnswer"></a>
                    </div>
                </div>`
        divAnswers.innerHTML += result
    }
}