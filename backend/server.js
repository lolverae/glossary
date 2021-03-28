const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json()); // Make sure it comes back as json


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true
});

const connection = mongoose.connection;
connection.once('open', () =>{
  console.log("MongoDB database connection established succesfully");
})

//const glosario = mongoose.model('glosario',glosario); 


const glosarioRouter = require('./routes/glosario');
app.use('/glosario', glosarioRouter);

const usersRouter = require('./routes/usuarios');
app.use('/usuarios', usersRouter);


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});