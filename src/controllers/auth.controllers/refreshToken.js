const jwt = require("jsonwebtoken");
const { generateAccesToken, generateRefreshToken } = require("./jwt.controller");
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET

function refreshToken(req, res) {
    const { refreshToken } = req.body;

    if (!refreshToken) {
        return res.status(401).json({ message: 'Refresh token yoxdur axi!' });
    }

    try {
        const decoder = jwt.verify(refreshToken, JWT_REFRESH_SECRET)
        const id = decoder.userid

        const token = generateAccesToken({ userid: id })
        const refresh = generateRefreshToken({ userid: id })
        res.status(201).json({
            status: true,
            token,
            refresh
        })

    } catch (error) {
        res.status(403).json({ message: 'Invalid refresh token' });
    }
}

module.exports = refreshToken