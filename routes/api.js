const express = require('express');
const router = express.Router();
const chatData = require('../data/chat.json');
const fs = require('fs');

router.use(express.json());
router.use(express.urlencoded({extended:false}));



router.get('/api', (req, res) => {

    res.json(chatData)
    
})

router.post('/api', (req, res) => {

    // grab data form request - bodyparser
    // let name = req.body.name;
    // let title = req.body.title;
    // let message = req.body.message;
    let body = req.body;

    console.log(body);
    chatData.push(body);

    // take current data and add new object 
    // write to the file feedbackData.json a new object
    // [{}, {}, {}, {name, title, message}]
    // send back old and mew msgs with lastest msg first
    // [{name, title, message}, {}, {}, {}] -- unshift (new item)
    fs.writeFile('data/chat.json', JSON.stringify(chatData), 'utf8', (err) => {
        
        if (err){
            console.log(err);
        }
        
    })
    res.json(chatData)


    // send back entire feedbackData.json
    
})

module.exports = router