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
