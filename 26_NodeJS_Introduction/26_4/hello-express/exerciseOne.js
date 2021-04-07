const express = require('express');
const app = express();

app.get('/ping', (res) => res.json({ "message": "Pong!" }));

app.listen(3001);