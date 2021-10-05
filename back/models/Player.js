const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const playerSchema = new mongoose.Schema({

   firstName: {
      type: String, 
      required: true,
      min: 2, 
      max: 255
   },
   lastName: {
      type: String, 
      required: true,
      min: 2, 
      max: 255
   },
   teamName: {
      type: String, 
      required: true,
      min: 2, 
      max: 255
   },
   games: {
      type: [ObjectId]
   }

});

module.exports = mongoose.model('Player', playerSchema);