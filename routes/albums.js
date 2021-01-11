const express = require('express');
const router = express.Router();
let dataFile = require('../data/data.json');

let albums = dataFile.albums;
let songs = [];

albums.forEach(album => {
    songs = album.tracklist
})

router.get('/albums', (req, res) => {

    res.render("albums", {
        albums: albums,
        songs: songs
    })
    
})

router.get('/albums/:albumid', (req, res) => {

    let album = [];
    
    albums.forEach(albumObj => {
        if (albumObj.title === req.params.albumid){
            album.push(albumObj)
        }
    })

    res.render("albums", {
        albums: album,
        songs: songs
    })


})

module.exports = router