// Get a reference to the database service
var database = firebase.database()

//megazord
var perguntasMegazord = database.ref('modelos_megazord_1000/-KUrujG83ISFIEaTTvkA/perguntas')

//spaghetti
var ordemSpaghetti = database.ref('modelos_spaghetti_1000/-KUs2Ckwx8UwAx5g1Rnp/perguntas/ordem')
var conteudoSpaghetti = database.ref('modelos_spaghetti_1000/-KUs2Ckwx8UwAx5g1Rnp/perguntas/conteudo')
var tipoSpaghetti = database.ref('modelos_spaghetti_1000/-KUs2Ckwx8UwAx5g1Rnp/perguntas/tipo')

//personalizado
var perguntasPersonalizado = database.ref('modelos_personalizado_1000/-KUrsOV7TrNAP0aphSZN/perguntas/pergunta_info')
var respostasPersonalizado = database.ref('modelos_personalizado_1000/-KUrsOV7TrNAP0aphSZN/perguntas/respostas/-KUrsOV8kNQfrCUC02BT')

// imprimeRef(ordemSpaghetti)
// imprimeRef(conteudoSpaghetti)
// imprimeRef(tipoSpaghetti)

imprimeRef(perguntasMegazord)

//valor(respostasPersonalizado)


function valor(ref) {
        ref.once('value').then(function(snapshot){
            for (att in snapshot.val()) {
                refAtt = ref.child(att)
                imprimeRef(refAtt)
            }
        })
}

function imprimeRef(ref) {
        console.log(Date.now())
        path = ref.ref.toString()
        // startTime(path)
        // console.log(path)
        ref.once('value').then(function(teste){
            valor = teste.val()
            str_valor = JSON.stringify(valor)
            // console.log(str_valor)
            console.log(Date.now())
            // endTime(path)
        })
}

function startTime(name) {console.time(name)}

function endTime(name) {console.timeEnd(name)}





