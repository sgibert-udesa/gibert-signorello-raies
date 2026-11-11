let form = document.querySelector(".form_login")
let email = document.querySelector(".email")
let contraseña = document.querySelector(".contraseña")

form.addEventListener("submit",function(e){
if(email.value){
// verdaera
} else{
// falso
let useremail= "Campo email vacio"
alert (useremail)
}

if (contraseña.value) {

} else {
    let usercontraseña = "Campo contraseña vacio"
    alert (usercontraseña)
}

if (contraseña.value.length < 6){
    let digcontraseña= "La contraseña debe tener al menos 6 caracteres"
    alert (digcontraseña)
}
})
// required de html 
// el formulario no se envie 