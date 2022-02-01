const fs = require("fs/promises");
const path = require("path")

const readFile = async(pathToFile) => {
    try {
        const fileconts = await fs.readFile(pathToFile)
        return fileconts
    } catch (err) {
        console.log(err)
    }
}

const writeToFile = async(pathToFile, writeSomething) => {
    try {
        await fs.writeFile(pathToFile, writeSomething)
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    readFile,
    writeToFile
}