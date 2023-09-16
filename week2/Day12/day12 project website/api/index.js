const express = require ('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose'); // Don't forget to import mongoose

app.use(cors());
app.use(express.json());

async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb+srv://masterchinedum:vJyxBw5v0aA65zff@cluster0.73akdjd.mongodb.net/?retryWrites=true&w=majority');
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database', error);
  }
}

connectToDatabase(); // Call the function to establish the database connection

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  res.json({ requestData: { username, password } });
});

app.listen(4000);

//vJyxBw5v0aA65zff
//mongodb+srv://masterchinedum:vJyxBw5v0aA65zff@cluster0.73akdjd.mongodb.net/?retryWrites=true&w=majority

/* to run backend use 
nodemon index.js
*/

