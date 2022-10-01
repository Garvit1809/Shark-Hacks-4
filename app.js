const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes');
const messageRoutes = require('./routes/messageRoutes');
const postRoutes = require('./routes/postRoutes');

const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use('/api/user', userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);
app.use('/api/posts', postRoutes)

app.get('/', (req,res) => {
    res.send("Hello")
})

app.use(notFound);
app.use(errorHandler);

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connection to Database succesful");
}).catch(err => console.log(err))


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Listening on port:-" + PORT);
})