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
})
.catch(function(error){
    console.log(`el error es:` + error)
})
