const fs = require("fs/promises");

const readFile = async(pathToFile) => {
    try {
        const fileContents = await fs.readFile(pathToFile)
        return fileContents
    } catch (error) {
        console.log(error)
    }
}

const writeFile = async(pathToFile, writeSomething) => {
    try {
        await fs.writeFile[pathToFile, writeSomething]
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    readFile,
    writeFiles
}