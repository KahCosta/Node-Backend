// Requisitando todas as funcionalidades dos express 
const express = require('express');

// criando variável que vai armazenar toda a aplicação
const app = express();

// Especificando rotas
app.get('/', (request, response) => {
    return response.json({
        Aluna: 'Kamilla Costa',
        Idade: '22 anos',
        Curso: 'Engenharia de Software'
    });
})

app.listen(3333);