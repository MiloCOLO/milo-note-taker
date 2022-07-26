# note-taker

What I've made is a note taking app that will allow people to write notes and save them. With a clean and simple layout, it makes it easy to create notes for work, home, etc. I created this using JavaScript and used express and fs to make it so a user can write notes, and using the GET/POST functions I was able to make it so a user could save their notes. 

## Usage

Using this is easy! Just open it up and start typing. This doesn't require rocket science. Yet. 

## Technologies Used

I wrote this using 

* JavaScript
* Express
* FS
* Node
* NPM

## Code Snippets

I was able to create routes to separate pages using GET routes

```
app.get('/notes', (req, res) =>{ 
  res.sendFile(path.join(__dirname, '/public/notes.html'))
});
```

## Credits
Shoutout to Kavya Mandla for helping me out with the POST function, and to my cat Mousse for giving me lap support.

## License 

This uses a standard MIT license. 