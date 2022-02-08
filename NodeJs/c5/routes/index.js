const router = require("express").Router();



router.get('/', (req, res) => {
    return res
        .status(200)
        .json("HeLLo Brat4e")
});

router.post('/login', (req, res) => {
    console.log(req.body.password)
    return res.status(401).json("KadeVaka?")
})

router.use((req, res) => {
    return res.status(404).json("Not found brat43")
});
module.exports = router;