// import required packages
const fs = require('fs');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
let notes  = require('../db/db.json');

// set up get endpoint to get notes data, log it and get the notes array back as JSON
router.get('/notes', (req, res) => {
    let data = notes;
    console.log(data);
    res.json(data);
});


// set up post endpoint and add a new note to the existing notes array
// give new note a unique ID and get the notes array back as JSON
router.post('/notes', (req, res) => {
    req.body.id = uuidv4();
    notes.push(req.body)
    res.json(notes);
});


// set up delete endpoint and delete a note from notes array with the matching ID
// redirect back to home page when note deleted
router.delete('/notes/:id', (req, res) => {
   const noteParam = req.params.id;
   const newNotes = notes.filter(note => req.params.id !== note.id)
   notes = newNotes
   res.redirect('');
});


// export router
module.exports = router;