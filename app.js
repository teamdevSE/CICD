const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('hello');
    } else {
        res.statusCode = 404;
        res.end();
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
