const express = require('express');
const app = express();
const router = express.Router();
const {ROLES, USERS, BLOGS} = require('../dummy-data');
const {authUser} = require('../basicAuth');
const {scopedBlogs, canDeleteBlog} = require('../permissions/blogs');

router.use(authUser);
router.use(express.json());

router.get('/', (req, res) => {
    res.json(BLOGS);
});

router.get('/dashboard', (req, res) => {
    res.json(scopedBlogs(req.user, BLOGS));
});

router.get('/:blogsId', setBlog, (req, res) => {
    res.json(req.blog);
});

router.delete('/:blogsId', setBlog, authDeleteBlog, (req, res) => {
    res.send('Deleted Blog');
});

function setBlog(req, res, next) {
    const blogsId = parseInt(req.params.blogsId);
    const blog = BLOGS.find(blogs => blogs.id === blogsId);
    req.blog = blog;

    if (req.blog == null) {
        res.status(404);
        return res.send('Blog not found');
    }

    next();
}

function authDeleteBlog(req, res, next) {
    if(!canDeleteBlog(req.user, req.blog, ROLES)) {
        res.status(401)
        return res.send('Not Allowed');
    }

    next();
}

module.exports = router