const express = require("express")
const { getPlayerById, getPlayers, createPlayer, updatePlayer, deletePlayer } = require("../controllers/player.controller")
const router = express.Router();

router.get("/player", getPlayers)

router.get("/player/:id", getPlayerById)

router.post("/player", createPlayer)
router.put("/player/:id", updatePlayer)

router.delete("/player/:id", deletePlayer)

module.exports = router