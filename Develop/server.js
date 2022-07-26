const { json } = require('express');
const express = require('express');
const fs = require('fs');
const path = require('path')
const uuid = require('./public/assets/js/uuid.js')
// adding express for streamlining 
// adding fs to help with saving and retrieving notes
// made the uuid file for unique note IDs

const PORT = process.env.PORT || 3001;

const app = express(); //connecting express
app.use(express.static('public')); //making the assets in the public folder static middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) =>{ //this will create a route to the notes page
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.get('/notes', (req, res) =>{ //this will create a route to the notes page
  res.sendFile(path.join(__dirname, '/public/notes.html'))
});

app.get('/api/notes', (req, res) => { //this will read the db.json file and return notes as json content
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if(err) {
            console.log(err);
        }   else{res.json(JSON.parse(data))
            console.log(data)
        }
    })
});

app.post("/api/notes", (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if(err) {
            console.log(err);
        }   else {
            const {title, text} = req.body
            const message = {
                title: title,
                text: text,
                id: uuid(),
            }
            const newNote = JSON.parse(data);
            newNote.push(message);
            console.log(newNote)
            fs.writeFile(
                './db/db.json',
                JSON.stringify(newNote, null, 4),
                (err) =>
                    err ? console.error(err) 
                    : console.info('successfully logged request')
            )
        }
    })
});

app.get('*', (req, res) =>{ //this will create a route to the notes page
    res.sendFile(path.join(__dirname, '/public/index.html'))
});


app.listen(3001);