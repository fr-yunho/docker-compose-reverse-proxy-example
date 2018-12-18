const express = require('express');
const expressWinston = require('express-winston');
const winston = require('winston');
const app = express();

/**
 * INJECT ENV VAR
 */
const appName = process.env.APP_NAME || 'poor app';
const port = process.env.APP_PORT || 3000;

/**
 * EXPRESS APPLICATION ACCESS LOG
 */
app.use(expressWinston.logger({
    transports: [
      new winston.transports.Console()
    ],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
    )
  }));

/**
 * SIMPLE ROUTER
 */
app.get('/', (req, res) => {
    console.log(`HELLO !! FROM ${appName}`)
    res.send(`HELLO !! FROM ${appName}`)
});

app.get('/images', (req, res) => {
    console.log(`HELLO images !! FROM ${appName}`)
    res.send(`HELLO images !! FROM ${appName}`)
});

/**
 * RUN APPLICATION
 */
app.listen(port, () => {
    console.log(`${appName} is RUNNING!!!`);
});