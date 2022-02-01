const http = require("http");
const path = require("path");
const fsOperations = require("./fileSystem");

const pathToFile = path.join(__dirname, "random.txt");

fsOperations
    .writeToFile(pathToFile, "Ne ojte vo dlabokono, drogi stavet")
    .then(() => {
        console.log("File was written!");
    })
    .catch((err) => {
        console.log(error);
    });
const server = http.createServer((request, response) => {
    //     // response.statusCode = 200;
    //     // response.end();
    //     // if (request === "/home" && request.method === "GET") {
    //     //     // response.statusCode = 200;
    //     //     response.writeHead(200, "You are here!")
    //     //     response.end()
    //     // }
    //     // if (request.url === "/home/dashboard" && request.method === "GET") {}
    response.statusCode = 200;
    response.end();
});
server.listen(8080, () => {
    console.log("Server runing!");
});
const readFromFile = async(pathToFile) => {
    try {
        const fileContents = await fs.readFile(pathToFile);
        return fileContents;
    } catch (error) {
        console.log(error);
    }
};

const writeToFile = async(pathToFile, fileContent) => {
    fs.writeFile(pathToFile, fileContent);
};
module.exports = {
    readFromFile,
    writeToFile,
};