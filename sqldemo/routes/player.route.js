const express = require("express");
const { GetPlayer, GetPlayerById, CreatePlayer, UpdatePlayer, DeletePlayer } = require("../controllers/player.controller");

const route = express.Router();

route.get("/player", GetPlayer)

route.get("/player/:id", GetPlayerById)

route.post("/player", CreatePlayer)

route.put("/player/:id", UpdatePlayer)

route.delete("/player/:id", DeletePlayer)

module.exports = route;