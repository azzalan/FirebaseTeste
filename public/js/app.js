
// var imprimePropriedadesRef = function(ref) {
//         ref.once('value').then(function(snapshot){
//             for (propriedade in snapshot.val()) {
//                 refPropriedade = ref.child(propriedade)
//                 imprimeRef(refAtt)
//             }
//         })
// }

var imprimeRef = function(ref) {
        startTime()
        ref.on('value',function(snapshot){
            console.log(snapshot.key)
            console.log(snapshot.val())
            endTime()
        })
}

var startTime = function() {
    inicio = Date.now()
}

var endTime = function() {
    var fim = Date.now()
    console.log(fim - inicio)
}

// Get a reference to the database service

var database = firebase.database()

var path = 'foo/foo_0'

var ref = database.ref(path).orderByKey().limitToFirst(2)

var inicio

imprimeRef(ref)
