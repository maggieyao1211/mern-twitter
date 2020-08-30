const express = require('express');
const app = express();

// mongodb+srv://admin:<password>@mern.jpugl.mongodb.net/<dbname>?retryWrites=true&w=majority

app.get("/", (req, res) => {
    res.send("Hello World");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Listen on port ${port}`);
});