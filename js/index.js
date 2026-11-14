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


// fetch 1 
let endpoint1 = 'https://dummyjson.com/products/category/smartphones';

fetch(endpoint1)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        let productos = data.products
         console.log(productos)

        // article

        for (let i = 0; i < 10; i++) {
            let nombre = productos[i].title
            let imagen = productos[i].images[0]
            let precio = productos[i].price
            let descripcion = productos[i].description

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
                        <a href="./product.html" class="detalles">Ver detalle</a>
                    </div>  
            </article>`
        }
    })
    .catch(function (error) {
        console.log(error);
    })
// Fetch 2 
let endpoint2 = 'https://dummyjson.com/products/category/mobile-accessories';

fetch(endpoint2)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        let productos = data.products
       // console.log(productos)

        // article
        for (let i = 0; i < 10; i++) {
            let nombre = productos[i].title
            let imagen = productos[i].images[0]
            let precio = productos[i].price
            let descripcion = productos[i].description

            let contenedor = document.querySelector('.section_index.ProductosAlatorios')

            contenedor.innerHTML += `
            <article class="article_index">
                    <img src='${imagen}' alt="" class="img_article_index">
                    <div class="texto_productos">
                        <h2 class="nombreDelProducto">${nombre}</h2>
                        <p class="DescripcionDelProducto">${descripcion}</p>
                        <p class="precioDelProducto">${precio}</p>
                    </div>
                    <div class="detalles1">
                        <a href="./product.html" class="detalles">Ver detalle</a>
                    </div>
                    
            </article>`
        }
    })
    .catch(function (error) {
        console.log(error);
    })