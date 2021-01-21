const express = require('express');
const router = express.Router();

router.get('/feedback', (req, res) => {

    res.render('feedback')
    
})

module.exports = router;