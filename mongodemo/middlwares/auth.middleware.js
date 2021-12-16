const { ValidateToken } = require("../services/auth.services")

const authMiddleware = async (req, res, next) => {
    try {
        let token = req.headers["x-access-token"]
        if (!token) {
            throw new Error("token is not provided")
        }
        let decoded = await ValidateToken(token);
        console.log(decoded);
        next();
    } catch (err) {
        res.status(400).json({ errMsg: err.message })
    }

}

module.exports = {
    authMiddleware
}