const express = require('express');
//initialize express app
const app = express();
const expressWS = require('express-ws')(app);
const WsController = require('./contollers/ws-controller');

const port = 3000;

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.render('index');
})
app.ws('/chat', WsController);
app.listen(port, () => console.log("App running"));