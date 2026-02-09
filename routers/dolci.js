const express = require("express");
const router = express.Router();



// index
router.get("/", function (req, res) {
    res.send("Lista dei post")
})

// show 
router.get("/:id", function (req, res) {
    res.send("Questo è il dolce numero " + req.params.id)
})

// store

router.post("/", function (req, res) {
    res.send("Crea un nuovo dolce")
})

// update

router.put("/:id", function (req, res) {
    res.send("Modifica integrale del dolce numero " + req.params.id)
})

// modify 

router.patch("/:id", function (req, res) {
    res.send("Modifica parziale del dolce numero " + req.params.id)
})

// delete

router.delete("/:id", function (req, res) {
    res.send("Eliminazione del dolce numero " + req.params.id)
})
module.exports = router;