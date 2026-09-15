import http from 'http';

const server = http.createServer((req,res) => {
    res.end("<h1>Welcome to Serverside</h1>")
    
});

server.listen(4444, () => console.log("Server is running"));