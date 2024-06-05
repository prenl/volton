const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
const authRouter = require("./src/routes/authRoutes");
const batteryRouter = require("./src/routes/batteryRoutes");

mongoose.connect('mongodb+srv://prenl:elnur2005@cluster0.yourw5a.mongodb.net/volton').then(() => console.log('Connected!'));

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/auth", authRouter);

// Battery routes functioning
app.use("/api/batteries", batteryRouter);

app.listen(port, () => {
    console.log("Server is running on port 3000");
});
