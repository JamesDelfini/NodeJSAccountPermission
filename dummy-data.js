const ROLES = {
    ADMIN: 'admin',
    BASIC: 'basic'
};

const USERS = [
    {id: 1, name: 'Delfini', role: ROLES.ADMIN},
    {id: 2, name: 'James', role: ROLES.BASIC}
];

const BLOGS = [
    {id: 1, name: "Delfini's Blog", user_id: 1},
    {id: 2, name: "James's Blog", user_id: 2}
];

module.exports = {
    ROLES,
    USERS,
    BLOGS
}