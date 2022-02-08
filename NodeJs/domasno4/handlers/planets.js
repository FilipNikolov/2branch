const Planet = require("../models/Planet");
const addNewPlanet = async(req, res) => {
    const { nameOfPlanet } = req.body;
    if (!nameOfPlanet) {
        return res.status(400).json("Misssing nameOfPlanet!");
    }
    try {
        await Planet.addPlanet({ nameOfPlanet })
        return res.status(200).json("Added new planet!")
    } catch (error) {
        return res.status(500).json(error);
    }
}
const getAllPlanets = async(req, res) => {
    try {
        const allPlanets = await Planet.getPlanet()
        return res.status(200).json(allPlanets)
    } catch (error) {
        return res.status(500).json(error)
    }
}
const updatePlanets = async(req, res) => {
    const { id, nameOfPlanet } = req.body;
    if (!id || !nameOfPlanet) {
        return res.status(400).json("Missing id or nameOfPlanet!")
    }
    try {
        await Planet.editPlanet({ id, nameOfPlanet })
        return res.status(200).json("Planet has updated!")
    } catch (error) {
        return res.status(500).json(error)
    }
}
const deletePlanet = async(req, res) => {
    const { id } = req.body;
    if (!id) {
        return res.stauts(400).json("Missing arguments to delete!")
    }
    try {
        await Planet.deletePlanet(id)
        return res.status(200).json("Planet has deleted!")
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {
    addNewPlanet,
    getAllPlanets,
    updatePlanets,
    deletePlanet
}