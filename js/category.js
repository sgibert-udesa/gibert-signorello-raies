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
        // console.log(categorias)

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
//fetch

let queryString = location.search
let queryStringObj = new URLSearchParams(queryString);
let categoria = queryStringObj.get("category");

 console.log(categoria)
let endpoint = `https://dummyjson.com/products/category/${categoria}`;

fetch(endpoint)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
         // console.log(data)
        let productos = data.products

        console.log(productos)

        for (let i = 0; i < productos.length; i++) {
            let nombreDelProducto = productos[i].title
            let imagen = productos[i].images[0]
            let descripcionDelProducto = productos[i].description
            let precioDelProducto = productos[i].price
            let categoria = productos[i].category
            let id = productos [i].id

            let titulo = document.querySelector(".TOP_PRODUCTS")
            titulo.innerText = `${categoria}`

            let contenedorArticle = document.querySelector(".section_index")

            contenedorArticle.innerHTML +=

                ` 
                 <article class="article_index">
                    <img src="${imagen}" alt="${nombreDelProducto}" class="img_article_index">
                    <div class="texto_productos">
                        <h2>${nombreDelProducto}</h2>
                        <p>${descripcionDelProducto}.</p>
                        <p>${precioDelProducto}</p>
                    </div>
                    <div class="detalles1">
                        <a href="./product.html?id=${id}" class="detalles">Ver detalle</a>
                    </div>
                </article>`
        }
    })
    .catch(function (error) {
        console.log(error)
    })