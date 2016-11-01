var buildFooChild = function(profundidade, comprimento, pai) {
    pai['profundidade'] = profundidade
    if (profundidade > 0) {
        for (var i = 0; i < comprimento; i++) {
            var keyDoChild = 'foo_' + i.toString()
            pai[keyDoChild] = {}
            var child = pai[keyDoChild]
            child = buildFooChild(profundidade - 1, comprimento, child)
        }
    }
    return pai
}

var buildFooProfundidade = function(profundidade, comprimento) {
    var fooBig = {}
    fooBig = buildFooChild(profundidade, comprimento, fooBig)
    return fooBig
}

var buildFooComprimento = function(comprimento) {
    var foo = {}
    for (var i = 0; i < comprimento; i++) {
        var keyDoChild = 'foo_' + i.toString()
        foo[keyDoChild] = {
            ordem: i,
            foo: { numero: i }
        }
    }
    return foo
}


// function setFooChild(profundidade, comprimento, pai) {
//     var addProfundidade = pai.update({profundidade: profundidade})
//     addProfundidade.then( function () {
//         if (profundidade > 0) {
//             for (var i = 0; i < comprimento; i++) {
//                 var keyDoChild = 'foo_' + i.toString()
//                 var child = pai.child(keyDoChild)
//                 buildFooChild(profundidade - 1, comprimento, child)
//             }
//         }
//     })
// }

// function setFoo(profundidade, comprimento) {
//     var fooBig = database.ref('foo')
//     buildFooChild(profundidade, comprimento, fooBig)
// }


// Get a reference to the database service
var database = firebase.database()

// montar foo

var inicio = Date.now()
var foo100000 = buildFooComprimento(100000)
// var fooString = JSON.stringify(foo)
console.log(foo100000)
var pushFoo = database.ref().update({foo100000})
pushFoo.then(function() {
    var fim = Date.now() - inicio
    console.log(fim)
})