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
            <li><a href="./category.html?categoria=${nombre}">${nombre}</a></li>`
        }
    })
    .catch(function (error) {
        console.log(error);
    })

// resultados de búsqueda


let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let productoDelBuscado = queryStringObj.get("buscardor")
// console.log(productoDelBuscado)


let endpointBuscador = `https://dummyjson.com/products/search?q=${productoDelBuscado}`
fetch(endpointBuscador)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        // console.log(data)
        let productoBuscado = data.products
       // console.log(productoBuscado)
        if (productoBuscado.length === 0) {
            alert("No hay resultados para el término: " + productoDelBuscado)
            let elTérminoPuestoEnElBuscador = document.querySelector('.TOP_PRODUCTS')

            elTérminoPuestoEnElBuscador.innerText = `Resultados de búsqueda para: ${productoDelBuscado} `
        }
        else {
            for (let i = 0; i < productoBuscado.length; i++) {
                let nombre = productoBuscado[i].title
                let imagen = productoBuscado[i].images[0]
                let precio = productoBuscado[i].price
                let descripcion = productoBuscado[i].description
                let id = productoBuscado[i].id

                let elTérminoPuestoEnElBuscador = document.querySelector('.TOP_PRODUCTS')

                elTérminoPuestoEnElBuscador.innerText = `Resultados de búsqueda para: ${productoDelBuscado} `

                let contenedor = document.querySelector('.section_index')

                contenedor.innerHTML += `
                <article class="article_index">
                        <img src='${imagen}' alt="" class="img_article_index">
                        <div class="texto_productos">
                            <h2 class="nombreDelProducto">${nombre}</h2>
                            <p class="DescripcionDelProducto">${descripcion}</p>
                            <p class="precioDelProducto">${precio}</p>
                        </div>
                        <div class="detalles1">
                            <a href="./product.html?id=${id}" class="detalles">Ver detalle</a>
                        </div>  
                </article>`
            }
        }
    })
    .catch(function (error) {
        console.log(error)
    })