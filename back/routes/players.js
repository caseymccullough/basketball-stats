const express = require ('express');
const router = express.Router();
const Player = require('../models/Player');

// GET ALL PLAYERS
router.get ('/', async (req, res) => { 
   try{
      const posts = await Player.find(); 
      res.json(posts);

   }catch(err){
      res.json({message:err});
   }   
});

// GET ONE PLAYER
router.get ('/:playerId', async (req, res) => { 
   try{
      const posts = await Player.findById(req.params.playerId); 
      res.json(posts);

   }catch(err){
      res.json({message:err});
   }   
});

// SUBMIT A PLAYER
router.post('/', async (req, res) => {
   const player = await new Player ({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      teamName: req.body.teamName
   });

   player.save()
   .then( data => {
      res.json(data)
   })
   .catch(err => {
      res.json( {message: err});
   })
});

// DELETE A PLAYER
router.delete('/:playerId', async (req, res) => {
   try{
      const removedPlayer = await Player.findByIdAndDelete(req.params.playerId);
      console.log ("removing: " + removedPlayer);
      res.json(removedPlayer);
   }catch{
      res.json({ message: err});
   }

})

//MODIFY A PLAYER
router.patch ('/:playerId', async (req, res) => {
   try {
      const updatedPlayer = await Player.updateOne(
         { _id: req.params.playerId},
         { 
            $set: {
            firstName: req.body.firstName,
            lastName: req.body.lastName
            }
         },
      );
      res.json(updatedPlayer);

   }catch(err){
      res.json({message: err});
   }
});

router.patch ('twoPointer/:playerId', async (req, res) => {
   try {
      const updatedPlayer = await Player.updateOne(
         { _id: req.params.playerId},
         { $inc: { "twoPointers": 1}}
      );
      res.json(updatedPlayer);

   }catch(err){
      res.json({message: err});
   }
});

module.exports = router; 

