const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes');
const messageRoutes = require('./routes/messageRoutes');
const postRoutes = require('./routes/postRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware')

const stripe = require('stripe')("sk_test_51LoJwhSFkTSWdExrgd3n2DvQofWT1p3ebVFmuVAG0IWFPukd270QMTVA8gPr5nAXV8myz5I7T9L2Sf84frIvVisU00qaaPfN75")
const uuid = require("uuid")

const app = express();
require('dotenv').config();

app.use(express.json());
app.use(cors());

app.use('/api/user', userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);
app.use('/api/posts', postRoutes)

app.get('/', (req,res) => {
    res.send("Hello")
})

app.post("/payment", (req,res) => {
    const {product, token} = req.body;
    const idempontencyKey = uuid();

    return stripe.customers.create({
        email: token.email,
        source: token.id
    })
    .then(customer => {
        stripe.charges.create({
            amount: product.price * 100,
            currency: 'usd',
            customer: customer.id,
            receipet_email: token.email,
            description: product.name,
            shipping: {
                name: token.card.name,
                address: {
                    country: token.card.address_country
                }
            }
        }, {idempontencyKey})
    })
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err))
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