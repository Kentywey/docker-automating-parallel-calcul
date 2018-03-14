'use strict';

const express = require('express');

// CONSTANTES
const PORT = 8080;
const HOST = '0.0.0.0';

// APPLICATION
const app = express();
app.get('/', (req, res) => {
    res.send('test\n');
});

app.listen(PORT, HOST);
console.log('Running on http://${HOST}:${PORT}');