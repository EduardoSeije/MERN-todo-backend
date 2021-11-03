const express = require('express');
const dotEnv = require('dotEnv');
dotEnv.config();
const { dbConnect } = require('./config/dbConnection');
const app = express();

//dbConnection 
dbConnect();

//Sever
const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Ouvindo a porta ${PORT}`));
