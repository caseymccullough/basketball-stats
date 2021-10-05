const express = require ('express');
const router = express.Router();
const Game = require('../models/Game');
const Player = require('../models/Player');

// GET ALL GAMES
router.get ('/', async (req, res) => { 
   try{
      const games = await Game.find(); 
      res.json(games);

   }catch(err){
      res.json({message:err});
   }   
});

// GET ONE GAME
router.get ('/:gameId', async (req, res) => { 
   try{
      const game = await Game.findById(req.params.gameId); 
      res.json(posts);

   }catch(err){
      res.json({message:err});
   }   
});

// SUBMIT A GAME
router.post('/', async (req, res) => {
   var currentPlayer = await Player.findById(req.body.playerId); 
   const game = await new Game ({
      playerId: req.body.playerId,
      twoPointers: req.body.twoPointers,
      threePointers: req.body.threePointers,
      rebounds: req.body.rebounds,
      steals: req.body.steals
   });

   game.save()
   .then( data => {
      
      currentPlayer.games.push(game._id);
      res.json(data)
   })
   .catch(err => {
      res.json( {message: err});
   })
});

// // DELETE A PLAYER
// router.delete('/:playerId', async (req, res) => {
//    try{
//       const removedPlayer = await Player.findByIdAndDelete(req.params.playerId);
//       console.log ("removing: " + removedPlayer);
//       res.json(removedPlayer);
//    }catch{
//       res.json({ message: err});
//    }

// })





module.exports = router; 

