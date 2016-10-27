// Get a reference to the database service
var database = firebase.database()

// personalizado

setQuestionario(getQuestionarioKey(), 5)

function getQuestionarioKey() {
    var questionarios = database.ref('questionarios')
    return questionarios.push().key
}

function setQuestionario(idQuestionario, numPerguntas){
    var questionarios = database.ref('questionarios')
    var perguntas = questionarios.child(idQuestionario+'/perguntas')
    pushPergunta(perguntas, numPerguntas)
}

function pushPergunta(perguntas, num) {
    var pergunta = perguntas.child('info').push({
        atualizado: new Date(),
        criado: new Date(),
        ordem: num,
        conteudo: 'Pergunta número ' + num + '?',
        tipo: 'discursiva',
    })
    Respostas(pergunta)
    pergunta.then(function(){
        if (num > 1) pushPergunta(num-1)
    })
}


function setRespostas(pergunta) {
    var respostas = perguntas.child('respostas/')
    var respostas = respostas.child(pergunta.key)
    for (num = 0; num < 1000; num++){
        respostas.push({
            criado: new Date(),
            atualizado: new Date(),
            conteudo: 'Resposta número ' + num + '.',
            local: {
                estabelecimento: id_estabelecimento,
                mesa: '1'
            }
        })
    }
}