const knex = require("../config/db.config");
const { v4: uuidv4 } = require('uuid');

const GetPlayer = async (req, res) => {
    try {
        let result = await knex.select().table('players')
        res.json({ data: result })
    } catch (err) {
        res.status(400).json({ errMsg: err.message })
    }
}

const GetPlayerById = async (req, res) => {
    try {
        let result = await knex.select().table('players').where({ id: req.params.id })
        res.json({ data: result })
    } catch (err) {
        res.status(400).json({ errMsg: err.message })
    }
}

const CreatePlayer = async (req, res) => {

    try {
        let player = req.body;
        player.id = uuidv4();
        let result = await knex('players').insert(player)
        res.json({ message: "Player Added successfully" })
    } catch (err) {
        res.status(400).json({ errMsg: err.message })
    }

}

const UpdatePlayer = async (req, res) => {
    try {

        let result = await knex('players')
            .where('id', req.params.id)
            .update(req.body)
        res.json({ message: "Player updated successfully" })
    } catch (err) {
        res.status(400).json({ errMsg: err.message })
    }
}

const DeletePlayer = async (req, res) => {
    try {

        let result = await knex('players')
            .where('id', req.params.id)
            .del();
        res.json({ message: "Player updated successfully" })
    } catch (err) {
        res.status(400).json({ errMsg: err.message })
    }
}



module.exports = {
    CreatePlayer,
    GetPlayer,
    GetPlayerById,
    UpdatePlayer,
    DeletePlayer
}