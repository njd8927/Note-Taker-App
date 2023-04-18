const fs = require('fs');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
let notes  = require('../db/db.json');


router.get('/notes', (req, res) => {
    let data = notes;
    console.log(data);
    res.json(data);
});



router.post('/notes', (req, res) => {
    req.body.id = uuidv4();
    notes.push(req.body)
    res.json(notes);
});



router.delete('/notes/:id', (req, res) => {
   const noteParam = req.params.id;
   const newNotes = notes.filter(note => req.params.id !== note.id)
   notes = newNotes
   res.redirect('');
});


module.exports = router;