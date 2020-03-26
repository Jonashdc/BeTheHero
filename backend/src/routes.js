const express = require('express');

const OngController = require('./controladores/OngController');
const incidentsController = require('./controladores/IncidentsController');
const profilleController = require('./controladores/ProfilleController');
const SessionController = require('./controladores/SessionController');

const routes =  express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profille', profilleController.index);

routes.get('/incidents', incidentsController.index);
routes.post('/incidents', incidentsController.create);
routes.delete('/incidents/:id', incidentsController.delete);

module.exports = routes;