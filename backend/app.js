const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')

app.use(express.json());
const products = require('./routes/product');
app.use('/api/v1', products);
app.use(cookieParser());


// const auth = require('./routes/auth.js');

// app.use('/api/v1',auth);
module.exports = app