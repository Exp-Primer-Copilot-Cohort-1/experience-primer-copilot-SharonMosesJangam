// Create a web server that listens on port 3000 and serves the following JSON data when it receives a GET request to the path /comments:

// {
//     "comments": [
//         { "id": 1, "author": "user1", "body": "This is the first comment." },
//         { "id": 2, "author": "user2", "body": "This is the second comment." },
//         { "id": 3, "author": "user3", "body": "This is the third comment." }
//     ]
// }

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
    res.send({
        "comments": [
            { "id": 1, "author": "user1", "body": "This is the first comment." },
            { "id": 2, "author": "user2", "body": "This is the second comment." },
            { "id": 3, "author": "user3", "body": "This is the third comment." }
        ]
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});