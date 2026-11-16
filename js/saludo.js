// Header  
let formBuscador = document.querySelector(".BARRA_de_busqueda");
let campoBuscador = document.querySelector(".buscador_index");

formBuscador.addEventListener("submit", function (e) {
    e.preventDefault()

    if (campoBuscador.value == "") {
        alert("El campo de búsqueda está vacio");
    } else if (campoBuscador.value.length < 3) {
        alert("El término buscado debe tener al menos 3 caracteres ");
    } else {
        this.submit()
    }
})
// footer
let formSubcripcion = document.querySelector('.formSubcripcion')
let campoSubcripcion = document.querySelector('.campoSubcripcion')

formSubcripcion.addEventListener("submit", function (e) {
    e.preventDefault()
    if (campoSubcripcion.value == '') {
        alert("El campo de búsqueda está vacio");
    }
    else {
        this.submit()
    }
})
// capturo elementos 
let login= document.querySelector (".loginli")
let register = document.querySelector (".registerli")

// busco los datos 
let recuperostorage = localStorage.getItem("email")

//cambios 
// capturo elemento 
let saludo= document.querySelector(".saludo")

// si el formulario se procesa correctamente 
if (recuperostorage){
saludo.innerText= "bienvenido " + recuperostorage
login.style.display= "none" 
register.style.display= "none"
}
