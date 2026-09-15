import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") res.end("Home Page");
  else if (req.url === "/product" && req.method === "GET")
    res.end("Show Product");
  else if (req.url === "/product" && req.method === "POST")
    res.end("add product");
  else if (req.url === "/product" && req.method === "PUT")
    res.end("Update product");
  else if (req.url === "/product" && req.method === "DELETE")
    res.end("Remove Product");
});

server.listen(3001, () => console.log("prg11 is running"));