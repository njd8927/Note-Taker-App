// import required packages
const path = require('path');
const router = require('express').Router();


// set up get endpoint and send back index.html to user if they type the root URL
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// set up get endpoint and send back notes.html to user if they type the root URL/notes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// set up get endpoint and send back index.html to user if they type the root URL/*
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// export router
module.exports = router;