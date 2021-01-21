const express = require('express');
const router = express.Router();
const feedbackData = require('../data/feedback.json');
const fs = require('fs');

router.use(express.json());
router.use(express.urlencoded({extended:false}));



router.get('/api', (req, res) => {

    res.json(feedbackData)
    
})

router.post('/api', (req, res) => {

    // grab data form request - bodyparser
    // let name = req.body.name;
    // let title = req.body.title;
    // let message = req.body.message;
    let body = req.body;

    console.log(body);
    // feedbackData.push(body);
    feedbackData.unshift(body);

    // take current data and add new object 
    // write to the file feedbackData.json a new object
    // [{}, {}, {}, {name, title, message}]
    // send back old and mew msgs with lastest msg first
    // [{name, title, message}, {}, {}, {}] -- unshift (new item)
    fs.writeFile('data/feedback.json', JSON.stringify(feedbackData), 'utf8', (err) => {
        
        if (err){
            console.log(err);
        }
        
    })
    res.json(feedbackData)


    // send back entire feedbackData.json
    
})

module.exports = router