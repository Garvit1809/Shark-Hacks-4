const express = require('express');

const app = express();

const PORT = 5000;

app.get("/", (req, res)=>{
    resizeBy.send("Hello shark")
})

app.listen(PORT, () => {
    console.log("Listening on port:-" + PORT);
})