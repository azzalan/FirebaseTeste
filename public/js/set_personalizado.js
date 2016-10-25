// Get a reference to the database service
var database = firebase.database()

// megazord

// var modelos = database.ref('modelos_spaghetti_1000')
// var id_modelo = modelos.push().key
// var perguntas = modelos.child(id_modelo+'/perguntas')

// for (num = 1; num < 6; num++){
//     var pergunta = perguntas.push({
//         criado: new Date().toString(),
//         atualizado: new Date().toString(),
//         ordem: num,
//         conteudo: 'Pergunta número ' + num + '?',
//         tipo: 'discursiva',
//     }, function () {
//         var respostas = perguntas.child(pergunta.key + '/respostas')
//         for (num = 0; num < 1000; num++){
//             respostas.push({
//                 criado: new Date().toString(),
//                 atualizado: new Date().toString(),
//                 conteudo: 'Resposta número ' + num + '.',
//                 local: 'teste'
//             })
//         }
//     })
// }

// personalizado

var modelos = database.ref('modelos_personalizado_1000')
var id_modelo = modelos.push().key
var perguntas = modelos.child(id_modelo+'/perguntas')

pushPerguntas(5)

function pushPerguntas(num){
    var pergunta = perguntas.child('pergunta_info').push({
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

