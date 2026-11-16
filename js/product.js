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

    
let endpointoriginal= 'https://dummyjson.com/products/1'

let queryString=location.search
let querystringObj=new URLSearchParams(queryString)
let id = querystringObj.get(`id`)

let endpoint= `https://dummyjson.com/products/${id}`

fetch (endpoint)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    // capturo los elementos 
 let img = document.querySelector(".imgproduct")
 let titulo = document.querySelector (".h1product")
 let descripcion= document.querySelector(".descripcion")
 let apple = document.querySelector (".Apple")
 let marca = document.querySelector (".marca")
 let stock = document.querySelector (".Stock")
 let categoria = document.querySelector (".categoria")
 let tag1 = document.querySelector (".tag1")
 let tag2 = document.querySelector (".tag2")
 let tag3 = document.querySelector (".tag3")
 let reseña= document.querySelector (".Section item")
 let reseña2= document.querySelector (".Section2 item ")
 let reseña3 = document.querySelector (".Section3 item")
 // modifico el contenido, info de la API
 titulo.innerText = data.title
 descripcion.innerText = data.description
 apple.innerText=data.price
 marca.innerText= data.brand
 stock.innerText= data.stock
 categoria.innerText=data.category
 //
 tag1.innerText=data.tags
 tag2.innerText=data.tag2
 tag3.innerText=data.tag3
 reseña.innerText=data.reseña
 reseña2.innerText=data.reseña2
 reseña3.innerText=data.reseña3
})
.catch(function(error){
    console.log(`el error es:` + error)
})
