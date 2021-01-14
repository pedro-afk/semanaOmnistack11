const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

//metodos HTTP
//get = buscar um informação do backend (rota para listar usuarios etc)
//post = criar uma informação no backend (rota para criar um usuario)
//put = alterar um informação no backend (rota para alterar)
//delete = deletar uma informação do backend (rota para deletar) 

//tipos de parametros
//Query Params: parametros nomeados enviados na rota apos simbolo de "?" (filtros, paginação)
//Route Params: utilizados para identificar um unico recurso (um recurso específico)
//Request Body: 



app.listen(3333);