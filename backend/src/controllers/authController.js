const jwt = require('jsonwebtoken');
const User = require('../database/user');
const bcrypt = require('bcrypt');
require('dotenv').config();

class AuthController {
    static async login(req, res) {
        const { phone, password } = req.body;
        console.log(phone, password);
        const user = await User.findOne({ phone: phone }).exec();

        if (!user) {
            return res.status(404).send({ 
                message_ru: "Пользователь не найден.", 
                message_kz: "", 
                message_en: "User was not found" 
            });
        }

        try {
            if (await bcrypt.compare(password, user.hashed_password)) {
                const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
                res.status(200).json({ access_token: token });
            } else {
                res.status(401).send({
                    message_ru: "Неверный пароль.",
                    message_kz: "",
                    message_en: "Invalid password."
                });
            }
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    }

    static async register(req, res) {
        const { phone, password, name, email } = req.body;

        let userExists = await User.findOne({ phone: phone });

        if (userExists) {
            return res.status(409).send({
                message_ru: "Пользователь с таким номером телефона уже существует.",
                message_kz: "",
                message_en: "User with this phone number already exists."
            });
        }

        userExists = await User.findOne({ email: email });

        if (userExists) {
            return res.status(409).send({
                message_ru: "Пользователь с таким email уже существует.",
                message_kz: "",
                message_en: "User with this email already exists."
            });
        }

        const hashed_password = await bcrypt.hash(password, 10);

        let lastId = await User.find().sort({ _id: -1 }).limit(1).exec();
        
        try {
            lastId = lastId[0].id + 1;
        } catch {
            lastId = 1;
        }

        const user = new User({
            id: lastId,
            phone: phone,
            hashed_password: hashed_password,
            name: name,
            email: email
        });

        try {
            const newUser = await user.save();
            res.status(201).send(newUser);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    static async validateToken(req, res) {
        res.status(200).send({ message: "Token is valid." });
    }
}

module.exports = AuthController;
