const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(require('./routes'))

app.use(require('./routes/albums'))




app.listen(3000, () => {
    console.log("Listening on Port 3000");
})