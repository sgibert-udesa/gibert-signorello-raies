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
            <li><a href="./category.html?category=${nombre}">${nombre}</a></li>`
        }
    })
    .catch(function (error) {
        console.log(error);
    })


let endpointoriginal = 'https://dummyjson.com/products/1'

let queryString = location.search
let querystringObj = new URLSearchParams(queryString)
let id = querystringObj.get(`id`)

let endpoint = `https://dummyjson.com/products/${id}`

fetch(endpoint)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
        // capturo los elementos 
        let img = document.querySelector(".imgproduct")
        let titulo = document.querySelector(".h1product")
        let descripcion = document.querySelector(".descripcion")
        let apple = document.querySelector(".Apple")
        let marca = document.querySelector(".marca")
        let stock = document.querySelector(".Stock")
        let categoria = document.querySelector(".categoria")
        // tags
        let tags = document.querySelector(".tags")
        // reseñas, capturo con all para modificar a todas juntas
        let nombre = document.querySelectorAll(".nombre")
        let comentario = document.querySelectorAll(".comentario")
        let rating = document.querySelectorAll(".rating")
        let fecha = document.querySelectorAll(".fecha")

        // modifico el contenido, info de la API
        img.src = data.thumbnail
        img.alt = data.title
        titulo.innerText = data.title
        descripcion.innerText = data.description
        apple.innerText =`$ ${data.price}`
        marca.innerText = data.brand
        stock.innerText =`Stock: ${data.stock}`
        categoria.innerText = data.category
        // recorro arrays
        tags.innerText = ""
        for (let i = 0; i < data.tags.length && i < 3; i++) {
            if(i == 0){
                tags.innerHTML += `
            <p><a href="./category.html?category=${data.category}" class="tag1">#${data.tags[i]}</a></p>
        `
            }
            else {
                  tags.innerHTML += `
            <p class="tag2">#${data.tags[i]}</p>
        `
            }
        }

        // comentarios, con recorrido de arrays [0,1,2]
        for (let i = 0; i < data.reviews.length; i++) {
            nombre[i].innerText = data.reviews[i].reviewerName
            comentario[i].innerText = data.reviews[i].comment
            rating[i].innerText = data.reviews[i].rating
            fecha[i].innerText = data.reviews[i].date
        }
    })
    .catch(function (error) {
        console.log(`el error es:` + error)
    })
