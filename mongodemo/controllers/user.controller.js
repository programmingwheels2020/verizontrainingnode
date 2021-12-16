const User = require("../models/user.model")
const { HashPassword, ComparePassword } = require("../services/utility.services")
const { GenerateToken } = require("../services/auth.services")
const Register = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            throw new Error("User with provided email exists in system")
        }

        user = new User(req.body);
        user.password = await HashPassword(req.body.password);
        await user.save();
        res.json({ message: "Registration Successful" })
    } catch (err) {
        res.status(400).json({ errMsg: err.message })
    }
}

const Login = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (!user) {
            throw new Error("Invalid Credential")
        }

        let status = await ComparePassword(req.body.password, user.password);
        if (!status) {
            throw new Error("incorrect password")
        }
        let token = await GenerateToken({ userId: user.id })
        res.json({ message: "Login Successful", token: token })
    } catch (err) {
        res.status(400).json({ errMsg: err.message })
    }
}

module.exports = {
    Register,
    Login
}