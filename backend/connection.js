const mongoose = require('mongoose');

const url='mongodb+srv://suhanijaiswal09:root@cluster0.2xgd5.mongodb.net/VibeTribe?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(url)

.then((result) => {
  console.log('Connected to the database');    
  })
  .catch((err) => {
      log.error('Error connecting to the database');
  });
  
  module.exports = mongoose;
  