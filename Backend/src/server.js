const express = require('express');
const beneficiarios = require('./routes/beneficiaries.routes');

const app = express();

app.use(express.json());
app.use('/', beneficiarios);

// eslint-disable-next-line no-console
app.listen(3333, () => console.log('server running at localhost:3333'));
