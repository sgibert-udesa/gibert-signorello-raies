let form = document.querySelector(".form_login")
let email = document.querySelector(".email")
let contraseña = document.querySelector(".contraseña")

form.addEventListener("submit",function(event){
event.preventDefault ()
if(email.value == ""){
let useremail= "Campo email vacio"
alert (useremail)
} else if (contraseña.value == "") {
    let usercontraseña = "Campo contraseña vacio"
    alert (usercontraseña)
} else if (contraseña.value.length < 6){
    let digcontraseña= "La contraseña debe tener al menos 6 caracteres"
    alert (digcontraseña)
} else {
    this.submit()
}
})

 