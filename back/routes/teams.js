const express = require ('express');
const router = express.Router();
const Team = require('../models/Team');
const Player = require('../models/Player');

// GET ALL TEAMS
router.get ('/', async (req, res) => { 
   try{
      const teams = await Team.find(); 
      res.json(teams);

   }catch(err){
      res.json({message:err});
   }   
});

// GET ONE TEAM
router.get ('/:teamId', async (req, res) => { 
   try{
      const team = await Team.findById(req.params.teamId); 
      res.json(team);

   }catch(err){
      res.json({message:err});
   }   
});

// SUBMIT A TEAM
router.post('/', async (req, res) => {
   const team = await new Team ({
      region: req.body.region,
      mascot: req.body.mascot,
   });

   team.save()
   .then( data => {
      res.json(data)
   })
   .catch(err => {
      res.json( {message: err});
   })
});

// ADD PLAYER TO TEAM --> in progress. 
router.post('/:teamId/addPlayer', async (req, res) => {

   let team = await Team.findById(req.params.teamId);

   const player = await new Player ({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      teamName: team.region
   });

   player.save()
   .then( data => {
      console.log ("player id", player._id)
      team.players.push(player._id);
      res.json(data)
   })
   .catch(err => {
      res.json( {message: err});
   })
});

// DELETE A TEAM
router.delete('/:teamId', async (req, res) => {
   try{
      const removedTeam = await Team.findByIdAndDelete(req.params.teamId);
      console.log ("removing: " + removedTeam);
      res.json(removedTeam);
   }catch{
      res.json({ message: err});
   }

})

// //MODIFY A PLAYER
// router.patch ('/:playerId', async (req, res) => {
//    try {
//       const updatedPlayer = await Player.updateOne(
//          { _id: req.params.playerId},
//          { 
//             $set: {
//             firstName: req.body.firstName,
//             lastName: req.body.lastName
//             }
//          },
//       );
//       res.json(updatedPlayer);

//    }catch(err){
//       res.json({message: err});
//    }
// });

module.exports = router; 
