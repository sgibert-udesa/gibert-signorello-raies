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

//fetch 3 menú de navegación
let endpoint3 = 'https://dummyjson.com/products/category-list';

fetch(endpoint3)
    .then(function (response) {
        return response.json()
    })

    .then(function (data) {
        let categorias = data
        console.log(categorias)

        for (let i = 0; i < categorias.length; i++) {
            let nombre = categorias[i]

            let contenedor = document.querySelector('.CATEGORIAS_index')

            contenedor.innerHTML += ` 
            <li><a href="./category.html?categoria=${nombre}">${nombre}</a></li>`
        }
    })
    .catch(function (error) {
         console.log(error);
    })

    // resultados de búsqueda
    