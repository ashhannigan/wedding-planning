const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '/index.html'))
})
app.listen(PORT, () => {
    console.log(`server listening on PORT ${PORT}`);
});

module.exports = app;