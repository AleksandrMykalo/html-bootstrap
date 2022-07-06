fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
    console.log(response)
    response.json()
})
.then(json => console.log(json))
.catch(error => console.log(error))


