const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 28,
        'birthName': 'Chancelor Johnathan Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'JFizzy': {
        'age': 29,
        'birthName': 'Jacob Coston',
        'birthLocation': 'Conrwall, New York'
    },
    'g herbo': {
        'age': 29,
        'birthName': 'Herbert Winslow',
        'birthLocation': 'London, England'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response) => {
    const rappersName = request.params.rapperName.toLowerCase()
    if (rappers[rappersName]) {
        response.json(rappers[rappersName])
    } else {
        response.json(rappers['g herbo'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`the server is running on port: ${PORT}`);
})