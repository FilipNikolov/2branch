let solarStars = [{
    id: 1,
    nameOfStar: "Antares",
    designation: "Scorpii Aa"
}, ];

const addStar = async({ nameOfStar, designation }) => {
    const newStar = {
        id: solarStars.length + 1,
        nameOfStar: nameOfStar,
        designation: designation
    }
    solarStars.push(newStar)
}
const getStar = async() => {
    return solarStars;
}
const editStar = async({ id, nameOfStar, designation }) => {
    solarStars = solarStars.map(forStar => {
        if (forStar.id === id) {
            return {
                id: forStar.id,
                nameOfStar,
                designation
            }
        }
        return forStar
    })
}
const deleteStar = async(id) => {
    solarStars = solarStars.filter((forStar) => forStar.id !== id)
}

module.exports = {
    addStar,
    getStar,
    editStar,
    deleteStar
}