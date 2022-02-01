const http = require("http");
const fileFunc = require("./fileSystem");
const path = require("path");
const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.end();
});

server.listen(8080, () => {
    console.log("blabla")
});