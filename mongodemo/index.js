const express = require("express")
const mongoose = require("mongoose");
const playerRoute = require("./routes/player.routes")
const userRoute = require("./routes/user.routes")
const MONGO_URI = 'mongodb://localhost:27017/clubsdb'
const bodyParser = require("body-parser");
const { authMiddleware } = require("./middlwares/auth.middleware")
mongoose.connect(MONGO_URI);

const logger = require("./config/logger");

const app = express()

app.use(bodyParser.json());

app.use((req, res, next) => {
    const logStr = req.method + ":" + req.url
    logger.info(logStr);
    next()
})

app.use("/players", authMiddleware, playerRoute)
app.use("/auth", userRoute)

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server is listening on the port ${port}`);
})