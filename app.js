const express = require( "express");
const app = express();

app.get('/names', (req, res) => {
    res.send("Kshitiz");
})

app.listen(5001, () => {
    console.log("Server is running on port 5001");
})