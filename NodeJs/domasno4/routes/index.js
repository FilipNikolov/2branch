const router = require("express").Router();
const {
    addNewPlanet,
    getAllPlanets,
    updatePlanets,
    deletePlanet
} = require("../handlers/planets")
router.post("/planets", addNewPlanet);
router.get("/planets", getAllPlanets);
router.put("/planets", updatePlanets);
router.delete("/planets", deletePlanet);


const {
    addNewStar,
    getAllStars,
    updateStars,
    deleteStar
} = require("../handlers/stars")
router.post("/stars", addNewStar);
router.get("/stars", getAllStars);
router.put("/stars", updateStars);
router.delete("/stars", deleteStar);



router.use((req, res) => {
    res.status(404).json("NotFound!")
});
module.exports = router;