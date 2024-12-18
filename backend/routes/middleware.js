const { JWT_SECRET } = require("../config")

function authMiddleware(req, res, next) {

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({
            msg: " auth error"
        });
    }

    const token = authHeader.split(' '[1])

    try {
        const decoded = jwt.verify(token, JWT_SECRET)

        if (decoded.userId) {
            req.userId = decoded.userId;
            next();
        } else {
            return res.status(403).json({
                msg: " auth error"
            });
        }

    }
    catch (err) {
        return res.status(403).json({
            msg: " auth error"
        });
    }


}

module.exports = { authMiddleware }

