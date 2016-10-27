// Get a reference to the database service
var database = firebase.database()
//var sessionsRef = new Firebase('https://projetoteste-f52b5.firebaseapp.com/sessions/')

// database.ref('questionarios').set({})
// database.ref('users').set({})

// database.ref('modelos_megazord_1000').set({})
// database.ref('modelos_personalizado_1000').set({})
// database.ref('modelos_spaghetti_1000').set({})

// setQuestionarios(getQuestionarioKey(), 5)
// users = database.ref('users')
// userKey = database.ref('users').push().key
// user = users.child(userKey)
// user.update({
//     algumaInfo: 'algumaInfo'
// })
// acessos = database.ref('acessos')
// acessoUserKey = acessos.push().key
// acessoUser = acessos.child(acessoUserKey).update({
//     user: 'userId',
//     ativo: false,
//     local: {
//         mesa: 'id_mesa',
//         estabelecimento: 'id_estabelecimento'
//     }
// })

// estabelecimentos = database.ref('estabelecimentos')
// estabelecimentoKey = estabelecimentos.push().key
// estabelecimento = estabelecimentos.child(userKey)
// estabelecimento.update({
//     algumaInfo: 'algumaInfo'
// })


function getQuestionarioKey() {
    var questionarios = database.ref('questionarios')
    return questionarios.push().key
}

function setQuestionarios(idQuestionario, num){
    var questionarios = database.ref('questionarios')
    var perguntas = questionarios.child(idQuestionario+'/perguntas')
    var pergunta = perguntas.push({
        ordem: num,
        conteudo: 'Pergunta número ' + num + '?',
        tipo: 'discursiva',
    })
    setRespostas(perguntas, pergunta)
    pergunta.then( function(){
        if (num > 1) setQuestionarios(idQuestionario, num-1)
    })
}

function setRespostas(perguntas, pergunta) {
    var respostas = database.ref('respostas/')
    var respostaPergunta = respostas.child(pergunta.key)
    for (num = 0; num < 1000; num++){
        respostaPergunta.push({
            conteudo: 'Resposta número ' + num + '.',
            local: {
                estabelecimento: 'id_estabelecimento',
                mesa: 'id_mesa'
            }
        })
    }
}

