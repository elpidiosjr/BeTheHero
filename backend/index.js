const { application } = require('express');
const express = require('express');

const app = express();

app.use(express.json());

// GET: é para buscar/listar informaçao do backend

// POST: criar uma informaçao no backend

// PUT: alterar uma informaçao no backend

// DELETE: deletar informaçao no backend

/*
    Tipos de parâmetros:
    Query Params: parâmetros nomeados enviados na rota após *?* (filtros, paginação)
    Route Params: Parâmetros utilizados para identificar recursos
    Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/* SQL : MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server.
   NoSQL: MongoDB, CouchDB, etc.
*/

/*
Driver: SELECT * FROM users
Query Builder: table('users').select('*').where()
*/

app.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Elpidio Soares'
    });
});

app.listen(3333);
