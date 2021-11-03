const express = require('express');
const dotEnv = require('dotEnv');
dotEnv.config();
const { dbConnect } = require('./config/dbConnection');
const { route } = require('./routes/todoRoute');
const app = express();

//dbConnection 
dbConnect();

//Sever
const PORT = process.env.PORT || 3000;

//Middleware 
app.use(express.json());

//Route
app.use('/api', route)

app.listen(PORT, console.log(`Ouvindo a porta ${PORT}`));
