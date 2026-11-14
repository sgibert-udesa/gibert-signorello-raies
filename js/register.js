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

let form = document.querySelector(".form_login")
let email = document.querySelector(".email");
let contraseña = document.querySelector(".contraseña");
let repetirContraseña = document.querySelector(".repetir");

form.addEventListener ("submit", function (event){
    event.preventDefault()

if (email.value == "") {
    let userEmail = "Campo email vacio";
    alert(userEmail);
}

else if (contraseña.value == "") {
    let userContraseña = "campo contraseña vacio";
    alert(userContraseña);
}

else if (contraseña.value.length < 6) {
    let digContraseña = "La contraseña debe tener al menos 6 caracteres";
    alert(digContraseña);
}
else if (contraseña.value != repetirContraseña.value) {
    alert("Las contraseñas no coinciden");
}
else {
    this.submit()
}
})
