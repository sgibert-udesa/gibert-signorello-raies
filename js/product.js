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
 // modifico el contenido 
 titulo.innerText = data.title
})
.catch(function(error){
    console.log(`el error es:` + error)
})
