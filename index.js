const mongoose = require('mongoose');
const express = require('express');
const route = require('./routes/route');

const app = express();

mongoose.connect('mongodb://localhost/student', { useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Server...'))
  .catch((err) => console.error('Something went wrong...'));
console.log('heldsilfhsdhfsdhjfhdsjkh;');
app.use('/api', route);
app.listen(3000, () => console.log('Listen on port 3000'));
