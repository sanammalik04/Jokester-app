const userUrl = "http://localhost:3000/user"

const ul = document.querySelector('ul#joke-list')
const jokeForm = document.querySelector('form.create-joke')

function getUsers(){
    fetch(userUrl)
    .then(res => res.json())
    .then(users => users.forEach(users => showJokes(users)))
}

getUsers()

function showJokes(users){

    users.jokes.forEach(jokes => {const jokeLi = document.createElement('li') 
    const footer = document.createElement('footer')
    footer.innerText = users.username
    jokeLi.innerText = jokes.description
    jokeLi.append(footer)
    ul.append(jokeLi) })

}

jokeForm.addEventListener('submit', () => {
    event.preventDefault()
    //console.log(event.target)
    let descriptionInput = event.target[0].value
    let authorInput = event.target[0].value

    let configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            description: descriptionInput,
            user: authorInput
        })
    }
    fetch(userUrl,configObj)
    .then(res => res.json())
    .then(console.log)
    
})