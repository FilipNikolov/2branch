const router = require("express").Router();
const kafanaHandlers = require("../handlares/kafana");

router.post("/kafana", kafanaHandlers.addNewSong);
router.get("/kafana", kafanaHandlers.getAllSongs);
router.put("/kafana", kafanaHandlers.updateSong);
router.delete("/kafana", kafanaHandlers.deleteSong);

router.use((req, res) => {
    res.status(404).json("NotFound!");
})


module.exports = router;