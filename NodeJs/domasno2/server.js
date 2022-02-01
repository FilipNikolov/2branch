const http = require("http");
const fileFunc = require("./filesystem")
const path = require("path")
const pathToFile = path.join(__dirname, "random.txt");

fileFunc
    .writeToFile(pathToFile, "Brat za brat, sirenje za pari!")
    .then(() => {
        return fileFunc.readFile(pathToFile);
    })
    .then((dedoMraz) => {
        console.log(dedoMraz.toString());
    })
    .catch((err) => {
        console.log(err)
    })


const server = http.createServer((request, response) => {
    response.statusCode = 200
    response.end();
});
server.listen(8080, () => {
    console.log("ServerDown!")
})