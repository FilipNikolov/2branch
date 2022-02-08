const Star = require("../models/Star");
const addNewStar = async(req, res) => {
    const { nameOfStar, designation } = req.body;
    if (!nameOfStar || !designation) {
        return res.status(400).json("Misssing nameOfStar or designation!");
    }
    try {
        await Star.addStar({ nameOfStar, designation })
        return res.status(200).json("Added new star!")
    } catch (error) {
        return res.status(500).json(error);
    }
}
const getAllStars = async(req, res) => {
    try {
        const allStars = await Star.getStar()
        return res.status(200).json(allStars)
    } catch (error) {
        return res.status(500).json(error)
    }
}
const updateStars = async(req, res) => {
    const { id, nameOfStar, designation } = req.body;
    if (!id || !nameOfStar || !designation) {
        return res.status(400).json("Missing arguments!")
    }
    try {
        await Star.editStar({ id, nameOfStar, designation })
        return res.status(200).json("Star has updated!")
    } catch (error) {
        return res.status(500).json(error)
    }
}
const deleteStar = async(req, res) => {
    const { id } = req.body;
    if (!id) {
        return res.stauts(400).json("Missing arguments to delete!")
    }
    try {
        await Star.deleteStar(id)
        return res.status(200).json("Star has deleted!")
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {
    addNewStar,
    getAllStars,
    updateStars,
    deleteStar
}