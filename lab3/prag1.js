import http from 'http';

const server = http.createServer((req,res) => {
    console.log("Welcome to Node Js");
    
});

const port = 4444;
server.listen(port, () => 
    console.log("Server is running"));