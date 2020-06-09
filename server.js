const express = require('express');
const app = express();
const {ROLES, USERS, BLOGS} = require('./dummy-data');
const {authUser} = require('./basicAuth');
const blogsRouter = require('./routes/blogs')

app.use(express.json());
app.use(setUser);

app.use('/blogs', blogsRouter);

app.get('/', (req, res) => {
    res.send('Main Page')
});

app.get('/dashboard', authUser, (req, res) => {
    res.send('Main Dashboard')
});

app.get('/admin', authUser, (req, res) => {
    res.send('Admin Dashboard');
});

function setUser(req, res, next) {
    const userId = req.body.userId;

    if(userId){
        req.user = USERS.find(users => users.id === userId);
    }

    next();
}

app.listen(5000);