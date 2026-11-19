
// footer
let formSubcripcion = document.querySelector('.formSubcripcion')
let campoSubcripcion = document.querySelector('.campoSubcripcion')

formSubcripcion.addEventListener("submit", function (e) {
    e.preventDefault()
    if (campoSubcripcion.value == '') {
        alert("El campo de email está vacio");
    }
    else {
        this.submit()
    }
})
// capturo elementos 
let loginli = document.querySelector(".loginli")
let registerli = document.querySelector(".registerli")

// busco los datos 
let recuperostorage = localStorage.getItem("email")

//cambios 
// capturo elemento 
let saludo = document.querySelector(".saludo")

// si el formulario se procesa correctamente 
if (recuperostorage) {
    saludo.innerText = "bienvenido " + recuperostorage
    loginli.style.display = "none"
    registerli.style.display = "none"
}

