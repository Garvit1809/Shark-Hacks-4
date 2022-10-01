const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Hello shark")
})

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connection to Database succesful");
}).catch(err => console.log(err))


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Listening on port:-" + PORT);
})