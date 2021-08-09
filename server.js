const express = require('express');

const app = express();

const PORT = 3030;

app.set("view engine", "ejs");

// Rota
app.get('/', (req, res) => {

    const items = [
        {
            title: 'D',
            message: 'esenvolver aplicações/serviços de forma fácil.'
        },
        {
            title: 'E',
            message: 'JS usa o JavaScript para renderizar o HTML.'
        },
        {
            title: 'M',
            message: 'uito prático de usar.'
        },
        {
            title: 'A',
            message: 'migável.'
        },
        {
            title: 'I',
            message: 'nstall EJS.'
        },
        {
            title: 'S',
            message: 'intaxe simples.'
        },
    ]

    const subtitle = 'A template language for creating an HTML page using js' 


    res.render("pages/index", {
        qualities: items,
        subtitle: subtitle    
    })
})

app.get('/sobre', (req, res) => {
    res.render("pages/about")
})

app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`);
})