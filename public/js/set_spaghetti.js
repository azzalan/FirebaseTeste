// Get a reference to the database service
var database = firebase.database()

// spaghetti

var modelos = database.ref('modelos_spaghetti_1000')
var id_modelo = modelos.push().key
var perguntas = modelos.child(id_modelo+'/perguntas')

pushPerguntas(5)

function pushPerguntas(num){
    var ordem = perguntas.child('ordem').push({
        ordem: num,
    })
    setPerguntaOtherInfo(ordem.key)
    ordem.then( function(){
        if (num > 1) pushPerguntas(num-1)
    })
}

function setPerguntaOtherInfo(perguntaKey, num){
    console.log(perguntaKey)
    setPerguntaConteudo(perguntaKey, num)
    setPerguntaTipo(perguntaKey)
    setPerguntaCriado(perguntaKey)
    setPerguntaAtualizado(perguntaKey)
    setPerguntaRespostas(perguntaKey)
}


function setPerguntaConteudo(perguntaKey, num) {
    var conteudo = perguntas.child('conteudo/')
    var conteudoPergunta = conteudo.child(perguntaKey)
    conteudoPergunta.set({
        conteudo: 'Pergunta número ' + num + '?',  
    })
}

function setPerguntaTipo(perguntaKey) {
    var tipo = perguntas.child('tipo/')
    var tipoPergunta = tipo.child(perguntaKey)
    tipoPergunta.set({
        tipo: 'discursiva',
    })
}

function setPerguntaCriado(perguntaKey) {
    var criado = perguntas.child('criado/')
    var criadoPergunta = criado.child(perguntaKey)
    criadoPergunta.set({
        criado: new Date().toString(),
    })
}

function setPerguntaAtualizado(perguntaKey) {
    var atualizado = perguntas.child('atualizado/')
    var atualizadoPergunta = atualizado.child(perguntaKey)
    atualizadoPergunta.set({
        atualizado: new Date().toString(),
    })
}

function setPerguntaRespostas(perguntaKey) {
    var respostas = perguntas.child('respostas/')
    var respostasPergunta = respostas.child(perguntaKey)
    for (num = 0; num < 1000; num++){
        respostasPergunta.push({
            criado: new Date().toString(),
            atualizado: new Date().toString(),
            conteudo: 'Resposta número ' + num + '.',
            local: 'teste'
        })
    }
}

