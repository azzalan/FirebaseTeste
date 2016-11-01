// Get a reference to the database service
var database = firebase.database()

// megazord

var modelos = database.ref('modelos_megazord_1000')
var id_modelo = modelos.push().key
var perguntas = modelos.child(id_modelo + '/perguntas')

pushPerguntas(5)

function pushPerguntas(num){
    var pergunta = perguntas.push({
        ordem: num,
        conteudo: 'Pergunta número ' + num + '?',
        tipo: 'discursiva',
    })
    setPerguntaOtherInfo(pergunta.key)
    pergunta.then( function(){
        if (num > 1) pushPerguntas(num-1)
    })
}

function setPerguntaOtherInfo(perguntaKey){
    console.log(perguntaKey)
    setPerguntaCriado(perguntaKey)
    setPerguntaAtualizado(perguntaKey)
    setPerguntaRespostas(perguntaKey)
}

function setPerguntaCriado(perguntaKey) {
    var criado = perguntas
    var criadoPergunta = criado.child(perguntaKey)
    criadoPergunta.update({
        criado: new Date().toString(),
    })
}

function setPerguntaAtualizado(perguntaKey) {
    var atualizado = perguntas
    var atualizadoPergunta = atualizado.child(perguntaKey)
    atualizadoPergunta.update({
        atualizado: new Date().toString(),
    })
}

function setPerguntaRespostas(perguntaKey) {
    var respostas = perguntas
    var respostasPergunta = respostas.child(perguntaKey + '/respostas')
    for (num = 0; num < 1000; num++){
        respostasPergunta.push({
            criado: new Date().toString(),
            atualizado: new Date().toString(),
            conteudo: 'Resposta número ' + num + '.',
            local: 'teste'
        })
    }
}

