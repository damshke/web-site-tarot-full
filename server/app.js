const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
const { check, validationResult } = require('express-validator')
const crypto = require('crypto');
const mongoose = require("mongoose")
const TelegramBot = require("node-telegram-bot-api");
const User = require('./dbAPI')
var fs = require('fs');

const db = 'mongodb+srv://damshke:daha2002@cluster0.u5fgt.mongodb.net/app?retryWrites=true&w=majority'

const token = '5136045844:AAFDrpo_vco5UeKwnwO-zYgJdJU1wyfZ5ac'
const bot = new TelegramBot(token);

const app = express()

app.use(bodyParser.json())

app.use(cors())

const getHashedPassword = (password) => {
    const sha256 = crypto.createHash('sha256');
    const hash = sha256.update(password).digest('base64');
    return hash;
}
// #region Likes handler

app.post("/api/v1/likes/setLikes",
    async (request, response) => {
        const { likes, dislikes } = request.body

        const rawdata = fs.readFileSync("./likes.json")
        const countLikes = JSON.parse(rawdata)

        countLikes.like = likes
        countLikes.dislike = dislikes

        fs.writeFileSync("./likes.json", JSON.stringify(countLikes, null, 2), function writeJSON(err) {
            if (err) return console.log(err)
        });

        response.send({ likes: countLikes.like, dislikes: countLikes.dislike })
    });

app.get("/api/v1/likes/getLikes",
    async (request, response) => {

        const rawdata = fs.readFileSync("./likes.json")
        const countLikes = JSON.parse(rawdata)

        response.send({ likes: countLikes.like, dislikes: countLikes.dislike })
    });

// #endregion Likes handler

//#region Registration handle

app.post("/api/v1/auth/registration",
    [
        check('email', 'Некорректный email').isEmail(),
        check('name', 'Некорректное имя пользователя').isLength({ min: 4, max: 20 }),
        check('password', 'Минимальная длина пароля 6 символов').isLength({ min: 8, max: 25 })
    ],
    async (request, response) => {

        const errors = validationResult(request)

        if (!errors.isEmpty()) {
            return response.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при регистрации'
            })
        }

        const { name, email, password } = request.body

        const candidate = await User.findOne({ email })


        if (candidate) {
            return response.status(400).json({ message: 'Такой пользователь уже существует' })
        } else {
            const hashedPassword = getHashedPassword(request.body.password);
            const user = {
                email: email,
                name: name,
                password: hashedPassword,
            };

            const added_id = (await User.create(user))._id;

            response.send({ message: added_id })
        }
    });

//#endregion Registration handle

//#region Login handle

app.post("/api/v1/auth/login",
    [
        check('email', 'Введите правильную почту пользователя').exists(),
        check('password', 'Введите верный пароль').exists()
    ],
    async (request, response) => {

        const errors = validationResult(request)

        if (!errors.isEmpty()) {
            return response.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при входе'
            })
        }

        const { email, password } = request.body

        var hashedPassword = getHashedPassword(password);

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(400).json({ message: 'Пользователь не найден' })
        }

        if (user.password === hashedPassword) {
            response.send({ message: user._id })
        } else {
            return response.status(400).json({ message: 'Пользователь не найден' })
        }
    });

// #endregion Login handle
// #region Rewievs handle
app.post("/api/v1/auth/sendReviews",
    (request, response) => {

        console.log(request.body.message)

        bot.sendMessage('985331235', "Пользователь " + request.body.name + " сообщил: " + request.body.message);

        response.send({ message: "Сообщение отправлено!" });
    });

// #endregion Rewievs handle

async function start() {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(5000, () => console.log(`App has been started on port 5000...`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()




