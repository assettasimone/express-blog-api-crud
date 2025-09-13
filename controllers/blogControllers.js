//data imports for controllers
const blogPosts = require('../data/posts')


//index function
const index = (req, res) => {

    let filteredPosts = blogPosts

    if (req.query.tags) {
        filteredPosts = blogPosts.filter(item => item.tags.includes(req.query.tags))
    }

    res.json(filteredPosts)
}


//show function
const show = (req, res) => {
    const id = parseInt(req.params.id)
    const post = blogPosts.find(item => item.id === id)

    if (!post) {
        res.status(404).send('Post not found')
    }


    res.json(post)
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
    const id = parseInt(req.params.id)
    console.log(id)
    const post = blogPosts.find(item => item.id === id)
    console.log(post)
    if (!post) {
        res.status(404).send('post not found')
    }
    console.log(blogPosts.indexOf(post))

    blogPosts.splice(blogPosts.indexOf(post), 1)

    res.status(204).send('elemento cancellato')

}



module.exports = { index, show, store, update, modify, destroy }