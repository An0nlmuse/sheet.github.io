const http = require('http');
const PORT=3000;
const express = require("express")

const app = express()

const public = express.static(__dirname)
app.use(public)

app.get("/", (req, res) => {

    return res.sendFile(__dirname + "/home.html")

})

app.listen(PORT, () => console.log("Started on: " + PORT))