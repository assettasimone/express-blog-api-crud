//data imports for controllers
const blogPosts = require('../data/posts')
//index function
const index = (req, res) => {
    res.send('restituisci tutti i post')
}
//show function
const show = (req, res) => {
    res.send('restituisci un singolo post')
}
//store function
const store = (req, res) => {
    res.send('crea un nuovo post')
}

//update function
const update = (req, res) => {
    res.send('modifica un post')
}
//modify function
const modify = (req, res) => {
    res.send('modifica un post esistente')
}

//destroy function
const destroy = (req, res) => {
    res.send('elimina un post')
}



module.exports = { index, show, store, update, modify, destroy }