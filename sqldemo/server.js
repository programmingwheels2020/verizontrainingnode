const express = require("express");
require('dotenv').config({})
const playerRoute = require("./routes/player.route")
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const SumOfInfinitNumbers = function () {
    return new Promise((resolve, reject) => {
        let sum = 0
        for (let i = 0; i < 1e9; i++) {
            sum += i
        }
        resolve(sum);
    })
}

app.get("/loadtestapi", async (req, res) => {
    try {
        let sum = await SumOfInfinitNumbers();
        res.json({ sum: sum })
    } catch (err) {
        res.status(500).json({ errMsg: "error occured" })
    }

})

app.use("/players", playerRoute)

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})