// Módulo 5, día 8, desafío evaluado: "traer posts"
// By Sebastián Sánchez
// 1) Realizar una consulta asyncrona (request) a la API usando async-awai

// Función para obtener la información de los posts
const requestInfo = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts" // se guarda el link en una constante
    const postData = document.querySelector("#post-data") // se selecciona el elemento con el id post-data (un div en el .html)

    try {
        const response = await fetch(url) // se hace la petición
        const data = await response.json() // se obtiene la respuesta en formato json
        
        //2) Mostrar el resultado del request en HTML (mostrando los post como una lista desorndenada)
        //Alternativa 1
        /* postData.innerHTML = data.map(post => `<ul><li>${post.id}</li><li>${post.title}</li><li>${post.body}</li></ul>`).join("") // se imprime el resultado en el div */
        
        //Alternativa 2: iterar sobre un arreglo de posts, creando 1 ítem en la lista para cada uno 
        const listPostData = document.createElement("ul") // se crea un elemento ul para la lista de posts
        data.forEach(post => {
            var item = document.createElement("li") // se crea un elemento li para cada post
            item.innerHTML = `<span><strong>Título: ${post.title}</strong></span><br><p>Contenido: ${post.body}</p>` // se inserta el post en el elemento li`
            listPostData.appendChild(item) // se inserta el elemento li en el elemento ul
        })
        postData.appendChild(listPostData) // se inserta el elemento ul en el div */
    } catch (error) {
        postData.innerHTML = `<h3>Ha ocurrido un error. ${error}</h3>` // si ocurre un error, se muestra este mensaje
        }
    }

        const getPosts = async () => { // Se crea la función que será invocada al hacer click en el botón
            await requestInfo() // Se invoca la función requestInfo hacia el html
        }
