const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express(); 
const bodyParser = require('body-parser');

// IMPORT ROUTES
const playersRoute = require('./routes/players');
const gamesRoute = require('./routes/games');

dotenv.config(); 

mongoose.connect(process.env.DB_CONNECTION,
() => console.log ('Connected to DB'));

// ROUTES
app.get('/', (req, res) => {
   res.send('We are at home!')
});



// MIDDLEWARE

// A demo to illustrate how middleware works
app.use(function (req, res, next) {
   console.log('Time:', Date.now())
   next()
 })

 app.use(bodyParser.json());

app.use('/posts', () => {
   console.log("This is middleware running");
});

app.use('/players', playersRoute);
app.use('/games', gamesRoute);

app.listen(3000);