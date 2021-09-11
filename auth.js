const firebaseConfig = {
    apiKey: "AIzaSyAAZ8uA29pZl2bwEfBGDo14qzJHhMg9tBA",
    authDomain: "login-register-d40b7.firebaseapp.com",
    projectId: "login-register-d40b7",
    storageBucket: "login-register-d40b7.appspot.com",
    messagingSenderId: "1068116178594",
    appId: "1:1068116178594:web:f10ca51f8fb8c2dd4089fb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault()
})

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        location.replace("welcome.html")
    }
})

function login() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
        .catch((error) => {
            alert("SUCCESSFULLY REGISTERED")
        })
}

function signUp() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch((error) => {
            alert("SUCCESSFULLY LOGGED IN")
        });
}