const jwt = require('jsonwebtoken');
const WEB_TOKEN_SECRET = "ITISASECRETNEEDTOKEPTSECRET"

const getUserId = async (req, res, next) => {
    const token = req.header('auth-token')
    //CHECKING WHETHER THE TOKEN IS EMPTY OR NOT
    if (!token) {
        res.status(401).json({ error: "yash Please Authenticate with valid token" })
    }
    try {
        // VERIFY THE TOKEN WITH SECRET AND SETTING IT TO REQUEST OF NEXT FUNCTION 
        const data = jwt.verify(token, WEB_TOKEN_SECRET)
        req.user = data.user
        next()
    } catch (error) {
        res.status(401).send({ error: "Yash Please Authenticate with valid token" })
    }
}

module.exports = getUserId;     