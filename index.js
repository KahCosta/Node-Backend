// Requisitando todas as funcionalidades dos express 
const express = require('express');

// criando variável que vai armazenar toda a aplicação
const app = express();

// Tipos de Parametros

// Query: Parametros nomeados na rota apos '?', serve para filtros e paginação (para usar mais de um filtro usa o &)
// Route: Parametros utilizados para identificar recursos , :ID(quando quero buscar um usuário específico)
// Request Body: Corpo da requisição utilizado para criar ou alterar recursos

// Query: const params = request.Query
// Route: const params = request.params
// Body: const body = request.body

// Especificando rotas
//Request: Guarda todos os dados que vem por meio da requisição
//Response: Responsável por retornar uma resposta para o usuário

app.get('/users', (request, response) => {
    const params = request.query;

    console.log(params);

    //Retornando resposta em formato json
    return response.json({
        Aluna: 'Kamilla Costa',
        Idade: '22 anos',
        Curso: 'Engenharia de Software'
    });
})

app.listen(3333);