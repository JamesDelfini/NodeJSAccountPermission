const ROLES = {
    ADMIN: 'admin',
    BASIC: 'basic'
};

const USERS = [
    {id: 1, name: 'Delfini', role: ROLES.ADMIN},
    {id: 2, name: 'James', role: ROLES.BASIC}
];

const BLOGS = [
    {id: 1, name: "Delfini's Blog 1", user_id: 1},
    {id: 2, name: "Delfini's Blog 2", user_id: 1},
    {id: 3, name: "Delfini's Blog 3", user_id: 1},
    {id: 4, name: "James's Blog 1", user_id: 2},
    {id: 5, name: "James's Blog 2", user_id: 2}
];

module.exports = {
    ROLES,
    USERS,
    BLOGS
}