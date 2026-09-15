import http from 'http';

const server = http.createServer((req, res) => {

    res.end("Hello buddy");

});

server.listen(3000, () => console.log("prg10 is runnning on port 3000..."));