const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
const authRouter = require("./src/routes/authRoutes");

mongoose.connect('mongodb+srv://prenl:elnur2005@cluster0.yourw5a.mongodb.net/volton').then(() => console.log('Connected!'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/auth", authRouter);

app.listen(port, () => {
    console.log("Server is running on port 3000");
});
