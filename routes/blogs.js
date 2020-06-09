const express = require('express');
const app = express();
const router = express.Router();
const {ROLES, USERS, BLOGS} = require('../dummy-data');

app.use(express.json());

router.get('/', (req, res) => {
    res.json(BLOGS);
});

router.get('/:blogsId', (req, res) => {
    const blogsId = parseInt(req.params.blogsId);
    const blog = BLOGS.find(blogs => blogs.id === blogsId);
    res.json(blog);
});

router.delete('/:blogsId', (req, res) => {
    const blogsId = parseInt(req.params.blogsId);
    const blog = BLOGS.find(blogs => blogs.id === blogsId);

    // TODO: Delete a blog posted
    // res.send('Blog has been deleted');
    throw new Error('method not implemented');
});

module.exports = router