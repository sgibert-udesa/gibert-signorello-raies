//buscador
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
let email = document.querySelector(".email")
let contraseña = document.querySelector(".contraseña")

form.addEventListener("submit", function (event) {
    event.preventDefault()
    if (email.value == "") {
        let useremail = "Campo email vacio"
        alert(useremail)
    } else if (contraseña.value == "") {
        let usercontraseña = "Campo contraseña vacio"
        alert(usercontraseña)
    } else if (contraseña.value.length < 6) {
        let digcontraseña = "La contraseña debe tener al menos 6 caracteres"
        alert(digcontraseña)
    } else {
        localStorage.setItem("email", email.value)
        this.submit()
    }
})


