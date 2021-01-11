const express = require('express');
const router = express.Router();
let dataFile = require('../data/data.json');

router.get('/', (req, res) => {

    let gridPictures = dataFile.grid;
    res.render('index', {
        gridPictures: gridPictures
    })
    
})

module.exports = router