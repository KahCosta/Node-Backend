// Requisitando todas as funcionalidades dos express 
const express = require('express');

// criando variável que vai armazenar toda a aplicação
const app = express();

//Especifica que o corpo da requisição esta no formato json
app.use(express.json());

// Tipos de Parametros

// Query: Parametros nomeados na rota apos '?', serve para filtros e paginação (para usar mais de um filtro usa o &)
// Route: Parametros utilizados para identificar recursos , :ID(quando quero buscar um usuário específico)
// Request Body: Corpo da requisição utilizado para criar ou alterar recursos

// Query: const params = request.Query
// Route: const params = request.params
// Body: const body = request.body (Usa Post no formato json)

// Especificando rotas
//Request: Guarda todos os dados que vem por meio da requisição
//Response: Responsável por retornar uma resposta para o usuário

app.post('/users', (request, response) => {
    //especificar no inicio do arq que esta utilizando json no corpo das requisições
    const body = request.body;

//rota no insominia: http://localhost:3333/users (Lembre-se que o método é o post e deve se adc o corpo)

    //Para printar no terminal o que foi criado
    console.log(body);

    //Retornando resposta em formato json
    return response.json({
        Aluna: 'Kamilla Costa',
        Idade: '22 anos',
        Curso: 'Engenharia de Software'
    });
})

app.listen(3333);