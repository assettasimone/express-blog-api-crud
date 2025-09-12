//import express
const express = require('express')
//declare router
const router = express.Router()

const blogPosts = require('../data/posts')


//index
router.get('/', (req, res) => {
    res.send('posts router online')
})

//show
router.get('/:id', (req, res) => {

})

//store
router.post('/', (req, res) => {

})

//update
router.put('/:id', (req, res) => {

})

//modify
router.patch('/:id', (req, res) => {

})

//destroy
router.delete('/:id', (req, res) => {

})


module.exports = router