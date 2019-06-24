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
const questions = JSON.parse(localStorage.getItem("questions"))

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