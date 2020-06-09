const express = require('express');
const app = express();
const {ROLES, USERS, BLOGS} = require('./dummy-data');
const blogsRouter = require('./routes/blogs')

app.use(express.json());
app.use('/blogs', blogsRouter);

app.get('/', (req, res) => {
    res.send('Main Page')
});

app.get('/dashboard', (req, res) => {
    res.send('Main Dashboard')
});

app.get('/admin', (req, res) => {
    res.send('Admin Dashboard');
});

app.listen(5000);