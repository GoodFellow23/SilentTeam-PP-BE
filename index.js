const express = require('express');
const app = express();
const port = 3000;

// respond with "hello world" when a GET request is made to the homepage
app.get('/hello', function(req, res) {
    res.status(200).send('hello world');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
