const express = require('express');
const fs = require('fs');
const path = require('path')
// adding express for streamlining 
// adding fs to help with saving and retrieving notes

const app = express();

app.get('/tutor', (req, res) =>{
    res.send("hello")
});


app.get('/', (req, res) =>{ //this will create a route to the notes page
    console.log("I'm in the get route"),
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.get('/notes', (req, res) =>{ //this will create a route to the notes page
  res.sendFile(path.join(__dirname, '/public/notes.html'))
});

app.post('/notes', (req, res) => {
  console.log("I'm in the post route"),
  res.json(path.join(__dirname, '/public/notes.html'))
});

app.listen(3000);