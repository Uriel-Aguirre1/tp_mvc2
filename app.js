const express = require('express');
const app = express();

const port =3030;
const mainRouter = require('./routers/main');

app.use(express.static('public'));

app.use('/', mainRouter)

app.listen(3030, () => console.log('Servidor funcionando'));
