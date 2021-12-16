const jwt = require("jsonwebtoken");
const jwtsecret = "thisisnotmysecretkey"
const GenerateToken = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, jwtsecret, { algorithm: "HS256", expiresIn: 60 * 60 }, (err, encodedStr) => {
            if (err) {
                reject(err)
            }
            resolve(encodedStr)
        })
    })
}

const ValidateToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, jwtsecret, (err, decoded) => {
            if (err) {
                reject(err)
            }
            resolve(decoded)
        })
    })
}

module.exports = {
    GenerateToken,
    ValidateToken
}