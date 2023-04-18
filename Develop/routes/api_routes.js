const fs = require('fs');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {notes} = require('../db/db.json');


router.get('/notes', (req, res) => {
    let data = notes;
    res.json(data);
});



router.post('/notes', (req, res) => {
    req.body.id = uuidv4();
    let newNote = renderActiveNote(req.body, notes);
    res.json(newNote);
});



router.delete('/notes/:id', (req, res) => {
   const noteParam = req.params.id;
   renderNoteList(params, notes);
   res.redirect('');
});