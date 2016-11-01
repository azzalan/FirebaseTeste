firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log(" Logado ");
        console.log("  Sign-in provider: " + user.providerId);
        console.log("  Usuário anônimo? " + user.isAnonymous);
        console.log("  Provider-specific UID: " + user.uid);
        console.log("  Name: " + user.displayName);
        console.log("  Email: " + user.email);
        console.log("  Photo URL: " + user.photoURL);
        var logado = true;
    } else {
        console.log(" Não Logado ");
        var logado = false;
    }
});

function fazerlogout() {
    firebase.auth().signOut().then(function () {
        console.log(" Fez o Logout ");
        /*firebase.auth().onAuthStateChanged(function (user) {
         if (user) {
         console.log(" Logado (depois do Logout) ");
         } else {
         console.log(" Não Logado (depois do Logout) ");
         }
         });*/
    }, function (error) {
        console.log(" Erro ao fazer logout ");
    });
}

// var providerFacebook = new firebase.auth.FacebookAuthProvider();
var providerGoogle = new firebase.auth.GoogleAuthProvider();

firebase.auth().getRedirectResult().then(function (result) {
    if (result.credential) {
        var token = result.credential.accessToken;
        console.log(token);
    }
    var user = result.user;
}).catch(function (error) {
    var errorCode = error.code;
    //var errorMessage = error.message;
    var email = error.email;
    //var credential = error.credential;
    console.log(errorCode + " EMAIL: " + email);
});

function criarusuario() {
    var email = "allandemiranda@gmail.com";
    var password = "teste123";
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        var errorCode = error.code;
        //var errorMessage = error.message;
        var email = error.email;
        //var credential = error.credential;
        console.log(errorCode + " EMAIL: " + email);
    });
}

function logincomemailesenha() {
    var email = "allandemiranda@gmail.com";
    var password = "teste123";
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
    });
}




