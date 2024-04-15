const jwt = require('jsonwebtoken');

require('dotenv').config()
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, id) => {
        if (err) {
            return res.status(403).send({
                message_ru: "Неверный токен.",
                message_kz: "",
                message_en: "Invalid token."
            });
        }
        req.id = id;
        next();
    });
}

module.exports = { authenticateToken, validatePhoneNumber };

function validatePhoneNumber(req, res, next) {
    const phone = req.body.phone;
    if (!phone) {
        return res.status(400).send({
            message_ru: "Телефон обязателен.",
            message_kz: "",
            message_en: "Phone is required."
        });
    }

    const phoneRegex = /^[7]\d{9}$/;
    if (!phoneRegex.test(phone)) {
        return res.status(400).send({
            message_ru: "Неверный формат телефона.",
            message_kz: "",
            message_en: "Invalid phone number format. Example: 10 numbers starting with 7."
        });
    }

    next();
}

module.exports = {authenticateToken, validatePhoneNumber};
