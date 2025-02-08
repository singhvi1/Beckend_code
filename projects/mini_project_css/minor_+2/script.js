// Sidebar Toggle Button click
const sidebar = document.querySelector('.sidebar_menu');

// Open Sidebar
document.querySelector('.btn_one label').addEventListener('click', function() {
    sidebar.style.left = sidebar.style.left === '0px' ? '-300px' : '0px';
});

// Close Sidebar Button click
document.getElementById('closeSidebar').addEventListener('click', function() {
    sidebar.style.left = '-300px';
});

// Function to show Home Content
function showHome() {
    const content = document.getElementById('content');
    content.innerHTML = `<h2>Home</h2><p>Welcome to Daily Blogger! Discover the latest thoughts and experiences.</p>`;
    sidebar.style.left = '-300px';  // Automatically close sidebar
}

// Function to show New Post Form
function showNewPost() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>New Post</h2>
        <form id="newPostForm">
            <input type="text" id="postTitle" placeholder="Post Title" required>
            <textarea id="postContent" rows="5" placeholder="Write your thoughts here..." required></textarea>
            <input type="submit" value="Submit">
        </form>
    `;

    sidebar.style.left = '-300px';

    const form = document.getElementById('newPostForm');
    form.onsubmit = function(event) {
        event.preventDefault();

        const title = document.getElementById('postTitle').value;
        const content = document.getElementById('postContent').value;

        const newPost = {
            title: title,
            content: content,
            date: new Date().toLocaleDateString()
        };

        let posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        posts.push(newPost);
        localStorage.setItem('blogPosts', JSON.stringify(posts));

        alert('Post saved successfully!');
        showMyPosts();
    };
}

// Function to show My Blog Content
function showMyPosts() {
    const content = document.getElementById('content');
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    sidebar.style.left = '-300px';

    if (posts.length > 0) {
        content.innerHTML = `<h2>My Blog Posts</h2>`;
        posts.forEach((post) => {
            content.innerHTML += `
                <div>
                    <h3>${post.title}</h3>
                    <p>${post.content}</p>
                    <small>Posted on: ${post.date}</small>
                    <hr>
                </div>
            `;
        });
    } else {
        content.innerHTML = `<p>No posts found. Start writing your thoughts!</p>`;
    }
}
    