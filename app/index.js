const express = require('express');
const app = express();

const appName = process.env.APP_NAME || 'poor app';
const port = process.env.APP_PORT || 3000;

app.get('/', (req, res) => {
    console.log(`HELLO !! FROM ${appName}`)
    res.send(`HELLO !! FROM ${appName}`)
});

app.get('/images', (req, res) => {
    console.log(`HELLO !! FROM ${appName}`)
    res.send(`HELLO !! FROM ${appName}`)
});

app.listen(port, () => {
    console.log(`${appName} is RUNNING!!!`);
});