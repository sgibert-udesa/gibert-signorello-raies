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

let campos = document.querySelectorAll(".email_login");
let form = document.querySelector(".form_login");

if (email.value == "") {
    alert("El campo de email está vacio");
}

else if (contraseña.value == "") {
    alert("El campo de contraseña está vacio");
}

else if (contraseña.value.length < 6) {
    alert("La contraseña debe tener al menos 6 caracteres");
}
else if (contraseña.vaule != repetir.value) {
    alert("Las contraseñas no coinciden");
}
else {
    this.submit()
}
