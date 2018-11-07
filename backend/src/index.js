const express = require('express');
const mongoose = require('mongoose'); 
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb://dirosaki:jin74610@ds155213.mlab.com:55213/dirosakigoweek', {
    useNewUrlParser: true
});

app.use((req, res, next) => {
    req.io = io;
    return next();
});

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(3600, () => {
    console.log('Servidor Inicializado');
});

