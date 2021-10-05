// for one player, one game.

const mongoose = require('mongoose');
var Schema = mongoose.Schema, 
ObjectId = Schema.ObjectId;

const gameSchema = new mongoose.Schema({

   playerId: {
      type: ObjectId
   },
   date: { type: Date, default: Date.now },
   twoPointers: {
      type: Number,
      required: true,
      default: 0
   },
   threePointers: {
      type: Number,
      required: true,
      default: 0
   },
   rebounds: {
      type: Number,
      required: true,
      default: 0
   },
   steals: {
      type: Number,
      required: true,
      default: 0
   }


});

module.exports = mongoose.model('Game', gameSchema);