var firebase = require("firebase");

// Initialize Firebase
var config = {
    // apiKey: "AIzaSyA9LDnr9esGe2KV82drslo07GS_y1xTP8k",
    // authDomain: "projetoteste-f52b5.firebaseapp.com",
    databaseURL: "https://projetoteste-f52b5.firebaseio.com",
    // storageBucket: "projetoteste-f52b5.appspot.com",
    // messagingSenderId: "381416034417",
    serviceAccount: "service_accs/ProjetoTeste-88ac1d4dd69d.json"
};

firebase.initializeApp(config);