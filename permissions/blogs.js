function scopedBlogs(user, blogs) {
    const userId = user.id;
    const blog = blogs.filter(blogs => blogs.user_id === userId);

    return blog;
}

function canDeleteBlog(user, blog, roles) {
    if (user.role === roles.ADMIN) return  true
    if (blog.user_id === user.id) return true

    return false
}

module.exports = {
    scopedBlogs,
    canDeleteBlog
}