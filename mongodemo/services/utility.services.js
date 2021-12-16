const bcrypt = require("bcrypt");
const saltRounds = 10;
//const salt= "thisismysecretkey"
const HashPassword = async (password) => {
    const salt = await bcrypt.genSalt(saltRounds);
    return bcrypt.hash(password, salt);

}

const ComparePassword = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
}

module.exports = {
    HashPassword,
    ComparePassword
}