const express = require("express");
const router = express.Router()
const controlador = require("../controllers/autosController")

router.get("/", controlador.autos)
router.get("/:marca", controlador.marca)
router.get("/:marca/:dato",controlador.dato)

module.exports = router