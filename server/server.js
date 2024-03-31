const path = require('path');
const express = require('express');
const app = express();
const homeRouter = require('./routes/home-route.js')
const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '/index.html'))
});

app.use(express.json());

// app.use('/home', homeRouter);

//global error handler middleware
app.use((err, req, res, next) => {
    const defaultError = {
        log: 'Express error handler caught unknown middlewar error',
        status: 500,
        message: { err: 'An error occured '},
    };
    const errorObj = Object.assign(defaultError, err);
    return res.status(errorObj.status).json(errorObj);
});

app.listen(PORT, () => {
    console.log(`server listening on PORT ${PORT}`);
});

module.exports = app;