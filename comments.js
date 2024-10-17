// create web server
// create a route for /comments
// response with a JSON object of comments
// 1. create a web server
// 2. create a route for /comments
// 3. response with a JSON object of comments
// 4. listen on port 3000
// 5. test the route with a browser

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/comments') {
    res.write(JSON.stringify({ comments: ['comment 1', 'comment 2'] }));
    res.end();
  }
});

server.listen(3000);
console.log('Listening on port 3000...');