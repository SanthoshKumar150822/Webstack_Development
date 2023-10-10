const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const POSTS_DIR = path.join(__dirname, 'posts');

app.use(cors()); // Use cors middleware
app.use(bodyParser.json());

let blogs = [];

if (!fs.existsSync(POSTS_DIR)) {
    fs.mkdirSync(POSTS_DIR);
}


// Endpoint to get all blogs
app.get('/blogs', (req, res) => {
    res.json(blogs);
});

// Endpoint to add a new blog
app.post('/blogs', (req, res) => {
    const { title, content } = req.body;
    const newBlog = { id: Date.now(), title, content };
    blogs.push(newBlog);
    // Save the blog post to a text file
    const filePath = path.join(POSTS_DIR, `${Date.now().toString()}.txt`);
    fs.writeFileSync(filePath, JSON.stringify(newBlog, null, 2));
    res.json(newBlog);
});

// Endpoint to update a blog by ID
app.put('/blogs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const blogId = req.params.id;
    const { title, content } = req.body;
    const index = blogs.findIndex(blog => blog.id === id);

    if (index !== -1) {
        blogs[index] = { ...blogs[index], title, content };
        res.json(blogs[index]);
    } else {
        res.status(404).json({ message: 'Blog not found' });
    }

    const filePath = path.join(POSTS_DIR, `${blogId}.txt`);

    if (fs.existsSync(filePath)) {
        const updatedBlogPost = { id: blogId, title, content };
        fs.writeFileSync(filePath, JSON.stringify(updatedBlogPost, null, 2));
        res.json(updatedBlogPost);
    } else {
        res.status(404).json({ message: 'Blog not found' });
    }
});

// Endpoint to delete a blog by ID
app.delete('/blogs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    blogs = blogs.filter(blog => blog.id !== id);
    res.json({ message: 'Blog deleted successfully' });
    const blogId = req.params.id;
    const filePath = path.join(POSTS_DIR, `${blogId}.txt`);

    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        res.json({ message: 'Blog deleted successfully' });
    } else {
        res.status(404).json({ message: 'Blog not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
