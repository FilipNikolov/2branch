let solarPlanets = [{
        id: 1,
        nameOfPlanet: "Mars",
    },

];

const addPlanet = async({ nameOfPlanet }) => {
    const newPlanet = {
        id: solarPlanets.length + 1,
        nameOfPlanet: nameOfPlanet,
    }
    solarPlanets.push(newPlanet)
};
const getPlanet = async() => {
    return solarPlanets;
}
const editPlanet = async({ id, nameOfPlanet }) => {
    solarPlanets = solarPlanets.map(forPlanet => {
        if (forPlanet.id === id) {
            return {
                id: forPlanet.id,
                nameOfPlanet
            }
        }
        return forPlanet;
    })
}
const deletePlanet = async(id) => {
    solarPlanets = solarPlanets.filter((forPlanet) => forPlanet.id !== id);
}

module.exports = {
    addPlanet,
    getPlanet,
    editPlanet,
    deletePlanet
}