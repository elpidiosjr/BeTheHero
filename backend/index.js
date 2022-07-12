const { application } = require('express');
const express = require('express');

const app = express();

// get: é para buscar informaçao do backend

// post: criar uma informaçao no backend

// put: alterar uma informaçao no backend

// delete: deletar informaçao no backend


app.get('/users', (request, response) => {
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Elpidio Soares'
    });
});

app.listen(3333);
