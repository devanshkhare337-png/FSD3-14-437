import { createReadStream } from "fs";
import http from "http";

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    const stream = createReadStream("./Pages/airtag.html",{
        encoding: "utf-8",
    });
    stream.pipe(res);
  }
  else if (req.url == "/mobile") {

  }

  else{
  res.statusCode = 404;
  res.end("<h1>404, Not found</h1>");
  }
});
server.listen(3000, () => console.log("Server is running..."));