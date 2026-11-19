let logout = document.querySelector(".logoutSacar")
let logoutLi = document.querySelector('.logoutLi')
let saludoLi = document.querySelector('.saludoLi')

let login = document.querySelector(".loginli")
let register = document.querySelector(".registerli")

logout.addEventListener('click', function () {

    localStorage.removeItem("email")

    saludoLi.style.display = "none"
    logoutLi.style.display = 'none'


    login.style.display = "block"
    register.style.display = 'block'

})
if (localStorage.getItem("email") == null) {

    saludoLi.style.display = "none";
    logoutLi.style.display = "none";

    login.style.display = "block";
    register.style.display = "block";
}
console.log(localStorage)