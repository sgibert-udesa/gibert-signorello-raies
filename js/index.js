let formBuscador = document.querySelector(".BARRA_de_busqueda");
let campoBuscador = document.querySelector(".buscador_index");

formBuscador.addEventListener("submit", function(e){
    e.preventDefault()
    
    if(campoBuscador.value == ""){
        alert("El campo de búsqueda está vacio");
    } else if( campoBuscador.value.length <3){
        alert("El término buscado debe tener al menos 3 caracteres ");
    } else {
        this.submit()
    }

})