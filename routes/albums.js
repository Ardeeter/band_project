const express = require('express');
const router = express.Router();
let dataFile = require('../data/data.json');

let albums = dataFile.albums;
let songs = [];

router.get('/albums', (req, res) => {

    // albums.forEach(album => {
    //     songs = album.tracklist
    // })

    res.render("albums", {
        albums: albums
        // songs: songs
    })
    
})

router.get('/albums/:albumid', (req, res) => {

    let album = [];
    let tracklist = [];
    
    albums.forEach(albumObj => {
        if (albumObj.title === req.params.albumid){
            album.push(albumObj)
            tracklist.push(albumObj.tracklist)
        }
    })

    res.render("albums", {
        albums: album,
        songs: tracklist
    })


})

module.exports = router