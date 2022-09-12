const mongoose = require('mongoose');
module.exports = () => {
  function connect() {
    mongoose.connect('mongodb+srv://munseoyeon:mun1234@cluster0.iityfgh.mongodb.net/test', function(err) {
      if (err) {
        console.error('mongodb connection error', err);
      }
      console.log('mongodb connected');
    });
  }
  connect();

  mongoose.connection.on('disconnected', connect);

  require('./developer.js');
  require('./project.js');
};