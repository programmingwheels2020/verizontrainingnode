const Player = require("../models/player.model")

const getPlayerById = async (req, res) => {

    try {
        let players = await Player.findById(req.params.id)
        res.json({ data: players })
    } catch (err) {
        res.status(400).json({ errMsg: err.message })
    }
}

const getPlayers = async (req, res) => {
    try {
        let players = await Player.find({})
        res.json({ data: players })
    } catch (err) {
        res.status(400).json({ errMsg: err.message })
    }

}

const createPlayer = async (req, res) => {
    try {
        const player = new Player(req.body);
        await player.save();
        res.json({ message: "Player Created Successfully" })
    } catch (err) {
        res.status(400).json({ errMsg: err.message })
    }


}

const updatePlayer = async (req, res) => {
    try {
        await Player.findByIdAndUpdate(req.params.id, req.body);
        res.json({ message: "Player updated Successfully" })
    } catch (err) {
        res.status(400).json({ errMsg: err.message })
    }


}

const deletePlayer = async (req, res) => {
    try {
        await Player.findByIdAndRemove(req.params.id);
        res.json({ message: "Player deleted Successfully" })
    } catch (err) {
        res.status(400).json({ errMsg: err.message })
    }


}

module.exports = {
    getPlayerById,
    getPlayers,
    createPlayer,
    updatePlayer,
    deletePlayer
}