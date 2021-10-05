const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({

   region: {
      type: String, 
      required: true,
      min: 2, 
      max: 255
   },
   mascot: {
      type: String, 
      required: true,
      min: 2, 
      max: 255
   },
   players: {
      type: Array, 
      required: true,
      min: 2, 
      max: 255
   }

});

module.exports = mongoose.model('Player', playerSchema);